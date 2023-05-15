import React, {
  Fragment,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { getAllCategory, deleteCategory } from "./FetchApi";
import { CategoryContext } from "./index";
import moment from "moment";

import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const apiURL = process.env.REACT_APP_API_URL;

const AllCategory = (props) => {
  const { data, dispatch } = useContext(CategoryContext);
  const { categories, loading } = data;
  const componentRef = useRef();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    dispatch({ type: "loading", payload: true });
    let responseData = await getAllCategory();
    setTimeout(() => {
      if (responseData && responseData.Categories) {
        dispatch({
          type: "fetchCategoryAndChangeState",
          payload: responseData.Categories,
        });
        dispatch({ type: "loading", payload: false });
      }
    }, 1000);
  };

  const deleteCategoryReq = async (cId) => {
    let deleteC = await deleteCategory(cId);
    if (deleteC.error) {
      console.log(deleteC.error);
    } else if (deleteC.success) {
      console.log(deleteC.success);
      fetchData();
    }
  };

  /* This method call the editmodal & dispatch category context */
  const editCategory = (cId, type, des, status) => {
    if (type) {
      dispatch({
        type: "editCategoryModalOpen",
        cId: cId,
        des: des,
        status: status,
      });
    }
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Categories",
    pageStyle: `
    @page {
      size: landscape;
      margin: 0;
      margin-top: 10px;
    }
    @media print {
      body {
        margin: 1in;
        box-shadow: none;
      }
      h1 {
        text-align: center;
      }
    }
  `,
  });

  const handleExportPdf = () => {
    const table = componentRef.current;

    html2canvas(table, { scrollX: -window.scrollX }).then((canvas) => {
      const tableImgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "letter");

      const tableWidth = pdf.internal.pageSize.getWidth() - 40;
      const tableHeight = (canvas.height * tableWidth) / canvas.width;
      pdf.addImage(tableImgData, "PNG", 20, 60, tableWidth, tableHeight);

      pdf.setFontSize(18);
      pdf.setFont("helvetica", "bold");
      pdf.text("Categories", 105, 30, { align: "center" });
      pdf.save("categories.pdf");
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <svg
          class="w-12 h-12 animate-spin text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
        <div className="flex justify-between mb-4">
          {/* <Fragment> */}
          <button
            className="btn rounded-full cursor-pointer p-2 bg-gray-800 flex items-center text-gray-100 text-sm font-semibold uppercase"
            style={{
              backgroundColor: "#752C88",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "20px",
              paddingRight: "20px",
              color: "white",
            }}
            onClick={handlePrint}
          >
            Print
          </button>
          <button
            className="btn rounded-full cursor-pointer p-2 bg-gray-800 flex items-center text-gray-100 text-sm font-semibold uppercase"
            style={{
              backgroundColor: "#752C88",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "10px",
              paddingRight: "10px",
              color: "white",
            }}
            onClick={handleExportPdf}
          >
            Export PDF
          </button>
          {/* </Fragment> */}
        </div>

        <table className="table-auto border w-full my-2">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Created at</th>
              <th className="px-4 py-2 border">Updated at</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody ref={componentRef}>
            {categories && categories.length > 0 ? (
              categories.map((item, key) => {
                return (
                  <CategoryTable
                    category={item}
                    editCat={(cId, type, des, status) =>
                      editCategory(cId, type, des, status)
                    }
                    deleteCat={(cId) => deleteCategoryReq(cId)}
                    key={key}
                  />
                );
              })
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-xl text-center font-semibold py-8"
                >
                  No category found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="text-sm text-gray-600 mt-2">
          Total {categories && categories.length} category found
        </div>
      </div>
    </Fragment>
  );
};

/* Single Category Component */
const CategoryTable = ({ category, deleteCat, editCat }) => {
  return (
    <Fragment>
      <tr>
        <td className="p-2 text-left">
          {category.cName.length > 20
            ? category.cName.slice(0, 20) + "..."
            : category.cName}
        </td>
        <td className="p-2 text-left">
          {category.cDescription.length > 30
            ? category.cDescription.slice(0, 30) + "..."
            : category.cDescription}
        </td>
        <td className="p-2 text-center">
          <img
            className="w-12 h-12 object-cover object-center"
            src={`${apiURL}/uploads/categories/${category.cImage}`}
            alt=""
          />
        </td>
        <td className="p-2 text-center">
          {category.cStatus === "Active" ? (
            <span className="bg-green-200 rounded-full text-center text-xs px-2 font-semibold">
              {category.cStatus}
            </span>
          ) : (
            <span className="bg-red-200 rounded-full text-center text-xs px-2 font-semibold">
              {category.cStatus}
            </span>
          )}
        </td>
        <td className="p-2 text-center">
          {moment(category.createdAt).format("lll")}
        </td>
        <td className="p-2 text-center">
          {moment(category.updatedAt).format("lll")}
        </td>
        <td className="p-2 flex items-center justify-center">
          <span
            onClick={(e) =>
              editCat(
                category._id,
                true,
                category.cDescription,
                category.cStatus
              )
            }
            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1"
          >
            <svg
              className="w-6 h-6 fill-current text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span
            onClick={(e) => deleteCat(category._id)}
            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1"
          >
            <svg
              className="w-6 h-6 fill-current text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </td>
      </tr>
    </Fragment>
  );
};

export default AllCategory;
