import React, { Fragment } from "react";
import moment from "moment";

const AdminFooter = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: "#752C88", color: "#ffffff" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        ChoChi LTD © Copyright {moment().format("YYYY")}
      </footer>
    </Fragment>
  );
};

export default AdminFooter;
