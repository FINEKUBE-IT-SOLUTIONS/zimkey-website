/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
import TeamSlider from "../components/slider/Team";

const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function About() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout currentPage={'about-us'}>
        <section className="section-box">
          <div className="banner-hero bg-about-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h1 className="text-display-2 color-gray-900">Who we are</h1>
                  {/* <p className="text-heading-4 color-gray-600 mt-40">
                    We supply enterprises, organizations and institutes of high-
                    <br className="d-lg-block d-none" />
                    tech industries with modern components. We build long-
                    <br className="d-lg-block d-none" />
                    term trusting relationships with our customers and partnes
                    <br className="d-lg-block d-none" />
                    for further fruitful cooperations.
                  </p> */}

                  <p className="text-heading-4 color-gray-600 mt-40">
                    We are a one-stop shop that offers a plethora of home
                    services.
                    <br className="d-lg-block d-none" />
                    Our staff at Zimkey are trained to meet all the safety
                    <br className="d-lg-block d-none" />
                    standards to ensure quality and professional services
                    <br className="d-lg-block d-none" />
                    to our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-box mt-40">
          <div className="container">
            <div className="row">
              <div className="col-lg-1" />
              <div className="col-lg-10">
                <div className="box-image">
                  <a
                    className="popup-youtube btn-play-video btn-play-middle"
                    onClick={() => setOpen(true)}
                  >
                    {" "}
                  </a>

                  <img
                    className="img-responsive bdrd-16"
                    src="assets/imgs/page/about/3/img.png"
                    alt="Zimkey"
                  />
                </div>
              </div>
              <div className="col-lg-1" />
            </div>
          </div>
        </div>
        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                {/* <h2 className="text-heading-1 color-gray-900 mb-10">
                  Providing solutions of every kind
                </h2> */}
                <p className="text-body-lead-large color-gray-600 mt-20">
                  We are currently offering housekeeping services only. However,
                  we will soon launch the Zimkey mobile application through
                  which we will offer other home services including
                  installation, maintenance, and repair services.
                  {/* In a professional context it often happens that private or
                  <br className="d-lg-block d-none" />
                  corporate clients order a publication to publish news. */}
                </p>
              </div>
              <div className="col-lg-1 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-40">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="list-icons mt-50">
                  <div className="item-icon none-bd">
                    {/* <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-acquis.svg"
                        alt="Zimkey"
                      />
                    </span> */}
                    <h4 className="text-heading-4">Our Vision</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Leverage technology to build a single-point management
                      platform that provides the best-in-class home services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="list-icons mt-50">
                  <div className="item-icon none-bd">
                    {/* <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-active.svg"
                        alt="Zimkey"
                      />
                    </span> */}
                    <h4 className="text-heading-4">Our Mission</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Through careful selection and training, empower service
                      providers to offer an unmatched, hassle-free experience to
                      our customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box">
          <div className="container mt-110">
            <div className="row">
              <div className="col-lg-9 col-sm-8">
                <h3 className="text-heading-1 mb-10">Customer Testimonials</h3>
                {/* <p className="text-body-lead-large color-gray-600">
                  Decades of experience in design and development
                </p> */}
              </div>
            </div>
          </div>
          <div className="container mt-80">
            <TeamSlider />
          </div>
        </section>

        {/* <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="7e90gBu4pas"
          onClose={() => setOpen(false)}
        /> */}
      </Layout>
    </>
  );
}

export default About;
