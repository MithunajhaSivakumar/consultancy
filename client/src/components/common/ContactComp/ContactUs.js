import React from 'react'
import './ContactUs.css'
function ContactUs() {
  return (
    <>
      <div className="container-contact">
        <div className="innerwrap-contact">
          <section className="section1 clearfix">
            <div className="textcenter">
              <span className="shtext">Contact Us</span>
              <span className="seperator"></span>
              <h1>Drop Us a Mail</h1>
            </div>
          </section>

          <section className="section2 clearfix">
            <div className="col2 column1 first">
              <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
              <div
                className="sec2map"
                style={{ overflow: "hidden", height: "550px", width: "100%" }}
              >
                <iframe
                  title="Google Map"
                  width="100%"
                  height="550"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.537028598879!2d-122.08467268484748!3d37.42273197965572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807fda0623b7%3A0x8f31a2b3ce0907ad!2sGoogleplex!5e0!3m2!1sen!2sus!4v1564575458692!5m2!1sen!2sus"
                ></iframe>
              </div>
            </div>
            <div class="col2 column2 last">
              <div class="sec2innercont">
                <div class="sec2addr">
                  <p>
                    ChoChi Foods LLP, 221, Gandhiji Street, Kolampalayam, Erode, 638001, Tamil Nadu, India
                  </p>
                  <p>
                    <span class="collig">Phone :</span> +91 976885083
                  </p>
                  <p>
                    <span class="collig">Email :</span> chochi@gmail.com
                  </p>
                  <p>
                    <span class="collig">Fax :</span> +91 9768850839
                  </p>
                </div>
              </div>
              <div class="sec2contactform">
                <h3 class="sec2frmtitle">Want to Know More?? Drop Us a Mail</h3>
                <form action="">
                  <div class="clearfix">
                    <input
                      class="col2 first"
                      type="text"
                      placeholder="FirstName"
                    />
                    <input
                      class="col2 last"
                      type="text"
                      placeholder="LastName"
                    />
                  </div>
                  <div class="clearfix">
                    <input
                      class="col2 first"
                      type="Email"
                      placeholder="Email"
                    />
                    <input
                      class="col2 last"
                      type="text"
                      placeholder="Contact Number"
                    />
                  </div>
                  <div class="clearfix">
                    <textarea name="textarea" id="" cols="30" rows="7">
                      Your message here...
                    </textarea>
                  </div>
                  <div class="clearfix">
                    <input type="submit" value="Send" />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ContactUs