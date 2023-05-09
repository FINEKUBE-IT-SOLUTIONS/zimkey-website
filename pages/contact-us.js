import { useState } from "react";
import Layout from "../components/layout/Layout";
import Swal from "sweetalert2";
// import '../public/assets/css/custom.css'

function Contact() {
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleValueChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = () => {
    if (
      values.name == "" ||
      values.company == "" ||
      values.email == "" ||
      values.phone == "" ||
      values.message == ""
    ) {
      document.getElementById("validationMessage").style.display = "block";
    } else {
      document.getElementById("validationMessage").style.display = "none";
      openSuccessPopup();
    }
  };

  const openSuccessPopup = () => {
    setTimeout(() => {
      Swal.fire({
        // position: 'top-end',
        icon: "success",
        text: "Thank you for contacting Zimkey! Your message has been received and someone from our team will contact you soon.",
        showConfirmButton: false,
        timer: 2200,
        customClass: {
          content: "my-swal-font-size",
          // icon: 'my-swal-icon-size'
          popup: "my-swal-border-radius",
        },
        width: 400,
        // html: `
        //   <h2 style="font-size: 24px;">Hello world!</h2>
        //   <p style="font-size: 18px;">This is a custom font size</p>
        // `,
      }).then((result) => {
        console.log('ssss')
        setValues({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
      });
    }, 600);
  };

  return (
    <>
      <Layout currentPage={"contact-us"}>
        {/* <section className="section-box">
          <div className="banner-hero banner-breadcrums">
            <div className="container text-center">
              <h1 className="text-heading-2 color-gray-1000 mb-20">
                Contact Us
              </h1>
            </div>
          </div>
        </section> */}
        <section className="section-box">
          <div className="container mb-20 mt-140">
            <div className="bdrd-58 box-gray-100 icon-wave">
              <div className="row">
                <div className="col-lg-12 mb-60">
                  {/* <span className="text-body-capitalized text-uppercase">
                    Contact us
                  </span> */}
                  <h2 className="text-heading-3 color-gray-900 mt-10">
                    Got a question/ comment?
                  </h2>
                </div>
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Name"
                          value={values?.name}
                          onChange={handleValueChange("name")}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Company"
                          value={values?.company}
                          onChange={handleValueChange("company")}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Email"
                          value={values?.email}
                          onChange={handleValueChange("email")}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Phone"
                          value={values?.phone}
                          onChange={handleValueChange("phone")}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Type your message here"
                          value={values?.message}
                          onChange={handleValueChange("message")}
                        />
                      </div>
                    </div>
                    <p
                      id="validationMessage"
                      style={{ color: "red", display: "none" }}
                    >
                      Please fill all fields!
                    </p>
                    <div className="col-lg-12 mt-15">
                      <button
                        className="btn btn-black icon-arrow-right-white mr-40 mb-20"
                        type="submit"
                        onClick={() => handleSubmit()}
                      >
                        Submit
                      </button>
                      <br className="d-lg-none d-block" />
                      {/* <span className="text-body-text-md color-gray-500 mb-20">
                        By clicking contact us button, you agree our terms and
                        policy,
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-10 col-12 text-center mt-40">
                <h2 className="text-heading-1 color-gray-900 mb-20">
                  Our Location
                </h2>
              </div>
            </div>
          </div>
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="list-icons hover-up">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-acquis.svg"
                        alt="Zimkey"
                      />
                    </span>
                    <h4 className="text-heading-4">Address</h4>
                    <p className="text-body-text color-gray-1100 mt-15">
                      ZIMKEY Home Services
                      <br />
                      No. 6/858-M <br />
                      2nd Floor, Suite No. 684 Valamkottil Towers, Judgemukku{" "}
                      <br />
                      Kakkanad, Kochi – 682021, Kerala
                      {/* <br />
                      Kerala */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="list-icons hover-up">
                  <div className="item-icon" style={{ paddingBottom: "6rem" }}>
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-active.svg"
                        alt="Zimkey"
                      />
                    </span>
                    <h4 className="text-heading-4">Contact</h4>
                    <p className="text-body-text color-gray-1100 mt-15">
                      Phone: (+91) 7733001121
                      <br />
                      Email: admin@zimkey.in
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Contact;
