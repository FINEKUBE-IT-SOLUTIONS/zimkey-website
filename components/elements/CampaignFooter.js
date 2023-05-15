/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import CampaignForm from "./CampaignForm";
import Modal from "react-bootstrap/Modal";

function CampaignFooter() {
  const [hasScrolled, setHasScrolled] = useState("false");
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  // const scrollToTop = () => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const onScroll = () => {
    if (window.scrollY > 100 && !hasScrolled) {
      setHasScrolled(true);
    } else if (window.scrollY < 100 && hasScrolled) {
      setHasScrolled(false);
    }
  };

  const [modalShow, setModalShow] = useState(false);
  const [windowSize, setWindowSize] = useState();

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setWindowSize({ innerWidth, innerHeight });
  }, []);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize({ innerWidth, innerHeight });
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    console.log("button", windowSize);
  }, [windowSize]);

  return (
    <>
      <section className="sticky-c">
        <div
          className="container text-center"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {windowSize?.innerWidth < 500 && windowSize?.innerHeight > 600 ? (
            <>
              <a
                id="pcQuoteButton"
                href="#compaign-form"
                className="campaign-primary-btn-width btn mx-1"
              >
                <b>Get A Free Quote</b>
              </a>

              <a
                id="mobileQuoteButton"
                href="#compaign-form"
                className="campaign-primary-btn-width btn mx-1"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                onClick={() => setModalShow(true)}
              >
                <b>Get A Free Quote</b>
              </a>

              <a
                href="tel:+917733001121"
                className="campaign-dark-btn-width btn btn-dark mx-1 phone-btn"
                id="lp-pom-button-646"
              >
                Call: 77-33-00-11-21
              </a>
              <a
                href="https://wheatonvl.com/callback.php"
                className="campaign-dark-btn btn-width btn-dark mx-1 callback-btn"
                id="lp-pom-button-1272"
                style={{ display: "none" }}
              >
                Get A Callback
              </a>
            </>
          ) : (
            <>
              <a
                id="pcQuoteButton"
                href="#compaign-form"
                className="campaign-primary-btn btn mx-1"
              >
                <b>Get A Free Quote</b>
              </a>

              <a
                id="mobileQuoteButton"
                href="#compaign-form"
                className="campaign-primary-btn btn mx-1"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                onClick={() => setModalShow(true)}
              >
                <b>Get A Free Quote</b>
              </a>

              <a
                href="tel:+917733001121"
                className="campaign-dark-btn btn btn-dark mx-1 phone-btn"
                id="lp-pom-button-646"
              >
                Call: 77-33-00-11-21
              </a>
              <a
                href="https://wheatonvl.com/callback.php"
                className="campaign-dark-btn btn btn-dark mx-1 callback-btn"
                id="lp-pom-button-1272"
                style={{ display: "none" }}
              >
                Get A Callback
              </a>
            </>
          )}
        </div>
      </section>
      {/* {hasScrolled && (
                <a id="scrollUp" href="#top" style={{ position: 'fixed', zIndex: 2147483647 }}>
                    <i className="fi-rr-arrow-small-up" />
                </a>


            )} */}

      {/* <!-- Modal --> */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{ padding: "0px" }}>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            style={{ marginRight: "8px", marginTop: "3px" }}
            onClick={() => setModalShow(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <CampaignForm />
        </Modal.Body>
      </Modal>
      {/* <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
           
            <div className="modal-body" style={{ padding: "0px" }}>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                style={{ marginRight: "8px", marginTop: "3px" }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <CampaignForm />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
export default CampaignFooter;
