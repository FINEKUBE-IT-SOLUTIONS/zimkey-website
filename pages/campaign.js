/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import Link from "next/link";
import CampaignFooter from "../components/elements/CampaignFooter";
import CampaignForm from "../components/elements/CampaignForm";
import LayoutCampaign from "../components/layout/LayoutCampaign";
import Carousel from 'react-bootstrap/Carousel';
import Modal from "react-bootstrap/Modal";

function HomeCampaign() {
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
 const [modalShow, setModalShow] = useState(false);

  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };

  const handleViewMore = (cardId) => (event) => {
    console.log("this iis", cardId);
    console.log("this iis eve", event);
    console.log("this iis p", event.target.innerText);

    let current = document.getElementById(cardId).style;
    console.log("current style", current?.display);

    if (current?.display == "none") {
      document.getElementById(cardId).style.transition = "all 2s";
      document.getElementById(cardId).style.display = "block";
      event.target.innerText = "View less";
    } else {
      document.getElementById(cardId).style.transition = "all 2s";
      document.getElementById(cardId).style.display = "none";
      event.target.innerText = "View more";
    }
  };

  const handleBhkOptions = (bhk) => (event) => {
    console.log("eeee", event.target.style.fontSize);
    if (bhk == 1) {
      document.getElementById("card1Price").textContent = "₹ 2999";
      event.target.style.fontWeight = 600;
      document.getElementById("card1Bhk2").style.fontWeight = 100;
      document.getElementById("card1Bhk3").style.fontWeight = 100;
      document.getElementById("card1Bhk4").style.fontWeight = 100;
    } else if (bhk == 2) {
      document.getElementById("card1Price").textContent = "₹ 3499";
      event.target.style.fontWeight = 600;
      document.getElementById("card1Bhk1").style.fontWeight = 100;
      document.getElementById("card1Bhk3").style.fontWeight = 100;
      document.getElementById("card1Bhk4").style.fontWeight = 100;
    } else if (bhk == 3) {
      document.getElementById("card1Price").textContent = "₹ 4499";
      event.target.style.fontWeight = 600;
      document.getElementById("card1Bhk1").style.fontWeight = 100;
      document.getElementById("card1Bhk2").style.fontWeight = 100;
      document.getElementById("card1Bhk4").style.fontWeight = 100;
    } else if (bhk == 4) {
      document.getElementById("card1Price").textContent = "₹ 5499";
      event.target.style.fontWeight = 600;
      document.getElementById("card1Bhk1").style.fontWeight = 100;
      document.getElementById("card1Bhk2").style.fontWeight = 100;
      document.getElementById("card1Bhk3").style.fontWeight = 100;
    }
  };

  const handleBhkOptions2 = (bhk) => (event) => {
    console.log("eeee", event.target.style.fontSize);
    if (bhk == 1) {
      document.getElementById("card2Price").textContent = "₹ 2999";
      event.target.style.fontWeight = 600;
      document.getElementById("card2Bhk2").style.fontWeight = 100;
      document.getElementById("card2Bhk3").style.fontWeight = 100;
      document.getElementById("card2Bhk4").style.fontWeight = 100;
    } else if (bhk == 2) {
      document.getElementById("card2Price").textContent = "₹ 4999";
      event.target.style.fontWeight = 600;
      document.getElementById("card2Bhk1").style.fontWeight = 100;
      document.getElementById("card2Bhk3").style.fontWeight = 100;
      document.getElementById("card2Bhk4").style.fontWeight = 100;
    } else if (bhk == 3) {
      document.getElementById("card2Price").textContent = "₹ 5999";
      event.target.style.fontWeight = 600;
      document.getElementById("card2Bhk1").style.fontWeight = 100;
      document.getElementById("card2Bhk2").style.fontWeight = 100;
      document.getElementById("card2Bhk4").style.fontWeight = 100;
    } else if (bhk == 4) {
      document.getElementById("card2Price").textContent = "₹ 7555";
      event.target.style.fontWeight = 600;
      document.getElementById("card2Bhk1").style.fontWeight = 100;
      document.getElementById("card2Bhk2").style.fontWeight = 100;
      document.getElementById("card2Bhk3").style.fontWeight = 100;
    }
  };
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
      {/* <Link href="/#">
                <a>Link</a></Link>
            </Link> */}
      <LayoutCampaign currentPage={"home"}>
        <Head>
          <title>Zimkey</title>
          <meta name="description" content="Your genie, a tap away!F" />
          <link rel="icon" type="image/x-icon" href="/icon.svg" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <section className="section-box">
          <div className="banner-hero" style={{ backgroundColor: "#FAEDE3" }}>
            <div
              className="container"
              style={{
                background: "url(/assets/brand/zimkey-arrow-white.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "contain",
              }}
            >
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2">
                    Transforming spaces, squeaky clean!
                    {/* <br /> Tap of a Key */}
                  </h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                    Try Zimkey cleaning services to make your world shine
                  </p>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    {/* <img
                      className="img-responsive"
                      alt="Zimkey"
                      src="assets/imgs/page/home/hero.png"
                      style={{ bottom: "unset" }}
                    /> */}
                    <CampaignForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cleaning */}
        <div className="section-box">
          <div className="container mt-120">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 block-img-we-do text-center">
                {windowSize?.innerWidth < 500 &&
                windowSize?.innerHeight > 600 ? (
                  <>
                    <img
                      className="img-small img-responsive"
                      src="assets/imgs/page/new-images/6.jpg"
                      alt="Zimkey"
                    />
                    <div className="block-card" style={{ marginTop: "-153px" }}>
                      <img src="/assets/imgs/page/new-images/7.jpg" alt="Zimkey" />
                    </div>
                    <div className="block-control">
                      <img
                        src="/assets/imgs/page/new-images/8.jpg"
                        alt="Zimkey"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      className="img-small img-responsive"
                      src="assets/imgs/page/new-images/6.jpg"
                      alt="Zimkey"
                      style={{borderRadius: '1rem'}}
                    />
                    <div className="block-card">
                      <img src="/assets/imgs/page/new-images/7.jpg" alt="Zimkey" />
                    </div>
                    <div className="block-control">
                      <img
                        src="/assets/imgs/page/new-images/8.jpg"
                        alt="Zimkey"
                      />
                    </div>
                  </>
                )}
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 block-we-do">
                <h3 className="text-heading-1 mt-30">What we offer</h3>
                {/* <p className="text-body-lead-large color-gray-400">
                  What we offer
                </p> */}
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4
                      className="text-heading-6"
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "6px",
                      }}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
                        alt="icon"
                        // className="mt-2"
                        width={22}
                      />{" "}
                      Quick access to quality home services
                    </h4>
                    {/* <p className="text-body-excerpt color-gray-600 mt-15">
                      Professional, well-trained, reliable cleaners that have
                      been thoroughly screened before being hired!
                    </p> */}
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4
                      className="text-heading-6 "
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "6px",
                      }}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3151/3151394.png"
                        alt="icon"
                        // className="mt-2"
                        width={22}
                      />
                      Guaranteed safety
                    </h4>
                    {/* <p className="text-body-excerpt color-gray-600 mt-15">
                      Booking takes less than 60 seconds! And you can schedule
                      for as early as today
                    </p> */}
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4
                      className="text-heading-6 "
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "6px",
                      }}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/870/870175.png"
                        alt="icon"
                        // className="mt-2"
                        width={22}
                      />{" "}
                      Reliable, single-point management
                    </h4>
                    {/* <p className="text-body-excerpt color-gray-600 mt-15">
                      No additional charges or hidden cost. You only pay for
                      what you ordered!
                    </p> */}
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4
                      className="text-heading-6 "
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "6px",
                      }}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2150/2150150.png"
                        alt="icon"
                        // className="mt-2"
                        width={22}
                      />{" "}
                      No hidden costs
                    </h4>
                    {/* <p className="text-body-excerpt color-gray-600 mt-15">
                      We are here to help you with all our resources at all
                      times.
                    </p> */}
                  </div>
                </div>

                <div className="mt-40" id="desktopBookNowButton">
                  {/* <Link href="https://api.whatsapp.com/send?phone=917733001121"> */}
                  <Link href="/campaign">
                    <a className="btn btn-pink icon-arrow-right-white text-heading-6">
                      Book now
                    </a>
                  </Link>
                </div>

                <div className="mt-40" id="mobileBookNowButton">
                  {/* <Link href="https://api.whatsapp.com/send?phone=917733001121"> */}
                    <a className="btn btn-pink icon-arrow-right-white text-heading-6" onClick={() => setModalShow(true)}>
                      Book now
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section-box mt-70">
          <div className="container mt-50">
            <h3 className="text-heading-1 text-center mb-10">
              Zimkey Flexible Plans
              <br className="d-lg-block d-none" />
              &nbsp;For You
            </h3>
          </div>
          <div className="container mt-20">
            <div className="block-pricing block-pricing-2 mt-70">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6">
                      {/* <div className="carousel-item active"> */}
                      <div
                        className="box-pricing-item hover-up"
                        style={{ background: "#ff6c37", color: "white" }}
                      >
                        <Carousel className="price-carousel-2" id="campaignCarousel1">
                          

                            <Carousel.Item>
                              <div
                                style={{
                                  display: "flex",
                                  marginTop: "-27px",
                                  marginBottom: "5px",
                                  justifyContent: "center",
                                  color: "#acacac",
                                  opacity: "75%",
                                }}
                              >
                                <p
                                  id="card1Bhk1"
                                  onClick={handleBhkOptions(1)}
                                  style={{ fontWeight: 501, cursor: "pointer" }}
                                >
                                  1 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card1Bhk2"
                                  onClick={handleBhkOptions(2)}
                                  style={{ cursor: "pointer" }}
                                >
                                  2 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card1Bhk3"
                                  onClick={handleBhkOptions(3)}
                                  style={{ cursor: "pointer" }}
                                >
                                  3 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card1Bhk4"
                                  onClick={handleBhkOptions(4)}
                                  style={{ cursor: "pointer" }}
                                >
                                  4 BHK
                                </p>
                              </div>

                              {/* <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">1 BHK</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">2 BHK</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">3 BHK</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">4 BHK</a>
                        </li>
                      </ul> */}

                              <div className="box-info-price">
                                <span
                                  id="card1Price"
                                  className="text-heading-3 for-month display-month"
                                >
                                  ₹ 2999
                                </span>
                                <span className="text-heading-3 for-year">
                                  $420
                                </span>
                                <span className="clr-white text-month text-body-small color-gray-400">
                                  &nbsp; 1 BHK
                                </span>
                                <span className="clr-white text-month text-body-small color-gray-400">
                                  &nbsp; <br />
                                  3-5 hours
                                </span>
                                <span className="text-month for-year text-body-small color-gray-400">
                                  /year
                                </span>
                              </div>
                              <div className="line-bd-bottom">
                                <h4
                                  className="text-heading-5 mb-15 clr-white"
                                  style={{ color: "white" }}
                                >
                                  General Cleaning
                                </h4>
                                {/* <p className="text-body-small color-gray-400">
                                  3 - 4 Hours
                                </p> */}
                              </div>
                              <ul className="list-package-feature" style={{minHeight: '178px'}}>
                                <li className="clr-white">Bathroom deep cleaning</li>
                                <li className="clr-white">Kitchen regular cleaning</li>
                                <li className="clr-white">Dusting, sweeping, and mopping</li>
                                <div
                                  id="card1-1"
                                  style={{ display: "none" }}
                                >
                                <li className="clr-white">Dry vacuuming of carpets, upholstery and furniture</li>

                                </div>
                              </ul>
                              <p className="view-more" style={{float: 'right', cursor: 'pointer'}} onClick={handleViewMore('card1-1')}>View more</p>
                            </Carousel.Item>

                            <Carousel.Item>
                              <div
                                style={{
                                  display: "flex",
                                  marginTop: "-27px",
                                  marginBottom: "5px",
                                  justifyContent: "center",
                                  color: "#acacac",
                                  opacity: "75%",
                                }}
                              >
                                <p
                                  id="card1Bhk1"
                                  onClick={handleBhkOptions(1)}
                                  style={{ fontWeight: 501, cursor: "pointer" }}
                                >
                                  1 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card1Bhk2"
                                  onClick={handleBhkOptions(2)}
                                  style={{ cursor: "pointer" }}
                                >
                                  2 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card1Bhk3"
                                  onClick={handleBhkOptions(3)}
                                  style={{ cursor: "pointer" }}
                                >
                                  3 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card1Bhk4"
                                  onClick={handleBhkOptions(4)}
                                  style={{ cursor: "pointer" }}
                                >
                                  4 BHK
                                </p>
                              </div>

                              <div className="clr-white box-info-price">
                                <span
                                  id="card1Price"
                                  className="text-heading-3 for-month display-month"
                                >
                                  ₹ 3499
                                </span>
                                <span className="text-heading-3 for-year">
                                  $420
                                </span>
                                <span className="clr-white text-month text-body-small color-gray-400">
                                  &nbsp; 2 BHK
                                </span>
                                <span className="clr-white text-month text-body-small color-gray-400">
                                  &nbsp; <br />
                                  3-5 hours
                                </span>
                                <span className="text-month for-year text-body-small color-gray-400">
                                  /year
                                </span>
                              </div>
                              <div className="line-bd-bottom">
                                <h4 className="clr-white text-heading-5 mb-15">
                                  General Cleaning
                                </h4>
                                {/* <p className="text-body-small color-gray-400">
                                  3 - 4 Hours
                                </p> */}
                              </div>
                              <ul className="list-package-feature" style={{minHeight: '178px'}}>
                                <li className="clr-white">Bathroom deep cleaning</li>
                                <li className="clr-white">Kitchen regular cleaning</li>
                                <li className="clr-white">Dusting, sweeping, and mopping</li>
                                <div
                                  id="card1-1"
                                  style={{ display: "none" }}
                                >
                                <li className="clr-white">Dry vacuuming of carpets, upholstery and furniture</li>

                                </div>
                              </ul>
                              <p className="view-more" style={{float: 'right', cursor: 'pointer'}} onClick={handleViewMore('card1-1')}>View more</p>
                            </Carousel.Item>

                            <Carousel.Item>
                              <div
                                style={{
                                  display: "flex",
                                  marginTop: "-27px",
                                  marginBottom: "5px",
                                  justifyContent: "center",
                                  color: "#acacac",
                                  opacity: "75%",
                                }}
                              >
                                <p
                                  id="card1Bhk1"
                                  onClick={handleBhkOptions(1)}
                                  style={{ fontWeight: 501, cursor: "pointer" }}
                                >
                                  1 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card1Bhk2"
                                  onClick={handleBhkOptions(2)}
                                  style={{ cursor: "pointer" }}
                                >
                                  2 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card1Bhk3"
                                  onClick={handleBhkOptions(3)}
                                  style={{ cursor: "pointer" }}
                                >
                                  3 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card1Bhk4"
                                  onClick={handleBhkOptions(4)}
                                  style={{ cursor: "pointer" }}
                                >
                                  4 BHK
                                </p>
                              </div>

                              <div className="box-info-price">
                                <span
                                  id="card1Price"
                                  className="text-heading-3 for-month display-month"
                                >
                                  ₹ 4499
                                </span>
                                <span className="text-heading-3 for-year">
                                  $420
                                </span>
                                <span className="clr-white text-month text-body-small color-gray-400">
                                  &nbsp; 3 BHK
                                </span>
                                <span className="clr-white text-month text-body-small color-gray-400">
                                  &nbsp; <br />
                                  3-5 hours
                                </span>
                                <span className="text-month for-year text-body-small color-gray-400">
                                  /year
                                </span>
                              </div>
                              <div className="line-bd-bottom">
                                <h4 className="clr-white text-heading-5 mb-15">
                                  General Cleaning
                                </h4>
                                {/* <p className="text-body-small color-gray-400">
                                  3 - 4 Hours
                                </p> */}
                              </div>
                              <ul className="list-package-feature" style={{minHeight: '178px'}}>
                                <li className="clr-white">Bathroom deep cleaning</li>
                                <li className="clr-white">Kitchen regular cleaning</li>
                                <li className="clr-white">Dusting, sweeping, and mopping</li>
                                <div
                                  id="card1-1"
                                  style={{ display: "none" }}
                                >
                                <li className="clr-white">Dry vacuuming of carpets, upholstery and furniture</li>

                                </div>
                              </ul>
                              <p className="view-more" style={{float: 'right', cursor: 'pointer'}} onClick={handleViewMore('card1-1')}>View more</p>
                            </Carousel.Item>

                            <Carousel.Item>
                              <div
                                style={{
                                  display: "flex",
                                  marginTop: "-27px",
                                  marginBottom: "5px",
                                  justifyContent: "center",
                                  color: "#acacac",
                                  opacity: "75%",
                                }}
                              >
                                <p
                                  id="card1Bhk1"
                                  onClick={handleBhkOptions(1)}
                                  style={{ fontWeight: 501, cursor: "pointer" }}
                                >
                                  1 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card1Bhk2"
                                  onClick={handleBhkOptions(2)}
                                  style={{ cursor: "pointer" }}
                                >
                                  2 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card1Bhk3"
                                  onClick={handleBhkOptions(3)}
                                  style={{ cursor: "pointer" }}
                                >
                                  3 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card1Bhk4"
                                  onClick={handleBhkOptions(4)}
                                  style={{ cursor: "pointer" }}
                                >
                                  4 BHK
                                </p>
                              </div>

                              <div className="box-info-price">
                                <span
                                  id="card1Price"
                                  className="text-heading-3 for-month display-month"
                                >
                                  ₹ 5499
                                </span>
                                <span className="text-heading-3 for-year">
                                  $420
                                </span>
                                <span className="clr-white text-month text-body-small color-gray-400">
                                  &nbsp; 4 BHK
                                </span>
                                <span className="clr-white text-month text-body-small color-gray-400">
                                  &nbsp; <br />
                                  3-5 hours
                                </span>
                                <span className="text-month for-year text-body-small color-gray-400">
                                  /year
                                </span>
                              </div>
                              <div className="line-bd-bottom">
                                <h4 className="clr-white text-heading-5 mb-15">
                                  General Cleaning
                                </h4>
                                {/* <p className="text-body-small color-gray-400">
                                  3 - 4 Hours
                                </p> */}
                              </div>
                              <ul className="list-package-feature" style={{minHeight: '178px'}}>
                                <li className="clr-white">Bathroom deep cleaning</li>
                                <li className="clr-white">Kitchen regular cleaning</li>
                                <li className="clr-white">Dusting, sweeping, and mopping</li>
                                <div
                                  id="card1-1"
                                  style={{ display: "none" }}
                                >
                                <li className="clr-white">Dry vacuuming of carpets, upholstery and furniture</li>

                                </div>
                              </ul>
                              <p className="view-more" style={{float: 'right', cursor: 'pointer'}} onClick={handleViewMore('card1-1')}>View more</p>
                            </Carousel.Item>

                        </Carousel>
                      </div>

                      {/* </div> */}

                      {/* <div className="carousel-item"> */}
                      {/* <div className="box-pricing-item hover-up">
                            <div className="box-info-price">
                              <span className="text-heading-3 for-month display-month">
                                ₹ 100001
                              </span>
                              <span className="text-heading-3 for-year">
                                $420
                              </span>
                              <span className="text-month text-body-small color-gray-400">
                                /week
                              </span>
                              <span className="text-month for-year text-body-small color-gray-400">
                                /year
                              </span>
                            </div>
                            <div className="line-bd-bottom">
                              <h4 className="text-heading-5 mb-15">Studio</h4>
                              <p className="text-body-small color-gray-400">
                                Service includes general cleaning for 2 times
                                per week.
                              </p>
                            </div>
                            <ul className="list-package-feature">
                              <li>1 Studio</li>
                              <li>1 Washroom</li>
                              <li>Service includes general cleaning</li>
                            </ul>
                          </div> */}
                      {/* </div> */}

                      {/* </div> */}
                      {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a> */}
                    </div>

                    {/* <div
                      id="carouselExampleIndicators"
                      className="col-xl-3 col-lg-6 col-md-6 carousel slide"
                      // data-wow-delay=".1s"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">

                        <div className="carousel-item active">
                          <div className="box-pricing-item hover-up">
                            <div className="box-info-price">
                              <span className="text-heading-3 for-month display-month">
                                ₹ 2000
                              </span>
                              <span className="text-heading-3 for-year">
                                $420
                              </span>
                              <span className="text-month text-body-small color-gray-400">
                                /week
                              </span>
                              <span className="text-month for-year text-body-small color-gray-400">
                                /year
                              </span>
                            </div>
                            <div className="line-bd-bottom">
                              <h4 className="text-heading-5 mb-15">Studio</h4>
                              <p className="text-body-small color-gray-400">
                                Service includes general cleaning for 2 times
                                per week.
                              </p>
                            </div>
                            <ul className="list-package-feature">
                              <li>1 Studio</li>
                              <li>1 Washroom</li>
                              <li>Service includes general cleaning</li>
                            </ul>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="box-pricing-item hover-up">
                            <div className="box-info-price">
                              <span className="text-heading-3 for-month display-month">
                                ₹ 100001
                              </span>
                              <span className="text-heading-3 for-year">
                                $420
                              </span>
                              <span className="text-month text-body-small color-gray-400">
                                /week
                              </span>
                              <span className="text-month for-year text-body-small color-gray-400">
                                /year
                              </span>
                            </div>
                            <div className="line-bd-bottom">
                              <h4 className="text-heading-5 mb-15">Studio</h4>
                              <p className="text-body-small color-gray-400">
                                Service includes general cleaning for 2 times
                                per week.
                              </p>
                            </div>
                            <ul className="list-package-feature">
                              <li>1 Studio</li>
                              <li>1 Washroom</li>
                              <li>Service includes general cleaning</li>
                            </ul>
                          </div>
                        </div>

                      </div>
                    </div> */}

                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                      data-wow-delay=".2s"
                    >
                      <div
                        className="clr-white box-pricing-item hover-up"
                        style={{ background: "#ff6c37" }}
                      >
                        <Carousel className="price-carousel-2">
                            <Carousel.Item>
                              <div
                                style={{
                                  display: "flex",
                                  marginTop: "-27px",
                                  marginBottom: "5px",
                                  justifyContent: "center",
                                  color: "#acacac",
                                  opacity: "75%",
                                }}
                              >
                                <p
                                  id="card2Bhk1"
                                  onClick={handleBhkOptions2(1)}
                                  style={{ fontWeight: 501, cursor: "pointer" }}
                                >
                                  1 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card2Bhk2"
                                  onClick={handleBhkOptions2(2)}
                                  style={{ cursor: "pointer" }}
                                >
                                  2 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card2Bhk3"
                                  onClick={handleBhkOptions2(3)}
                                  style={{ cursor: "pointer" }}
                                >
                                  3 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card2Bhk4"
                                  onClick={handleBhkOptions2(4)}
                                  style={{ cursor: "pointer" }}
                                >
                                  4 BHK
                                </p>
                              </div>

                              <div className="box-info-price">
                                <span
                                  id="card2Price"
                                  className="text-heading-3 for-month display-month"
                                >
                                  ₹ 4333
                                </span>
                                <span className="text-heading-3 for-year">
                                  $1068
                                </span>
                                <span className="clr-white text-month text-body-small color-gray-400">
                                  &nbsp; 1 BHK
                                </span>
                                <span className="clr-white text-month text-body-small color-gray-400">
                                  &nbsp; <br />
                                  4-7 hours
                                </span>
                                <span className="text-month for-year text-body-small color-gray-400">
                                  /year
                                </span>
                              </div>
                              <div className="line-bd-bottom">
                                <h4 className="clr-white text-heading-5 mb-15">
                                  Deep Cleaning
                                </h4>
                                {/* <p className="text-body-small color-gray-400">
                            Service includes general cleaning for 4 times per
                            week.
                          </p> */}
                              </div>
                              <ul className="list-package-feature" style={{minHeight: '178px'}}>
                          <li className="clr-white">
                            Deep cleaning of all rooms including Kitchen and
                            Balcony
                          </li>
                          <li className="clr-white">
                          Cleaning and stain removal of kitchen cabinets and appliances
                          </li>

                          <div id="card2" style={{ display: "none" }}>

                            <li className="clr-white">
                            Dusting of walls, windows, ceilings and balcony
                            </li>
                          <li className="clr-white">Wet wiping of ceiling fans, decor items and switch boards</li>
                          <li className="clr-white">Vacuuming of sofas, carpets, curtains, and window sills</li>

                          </div>
                        </ul>
                              <p
                                className="view-more"
                                style={{ float: "right", cursor: "pointer" }}
                                onClick={handleViewMore("card2")}
                              >
                                View more
                              </p>
                            </Carousel.Item>

                            <Carousel.Item>
                              <div
                                style={{
                                  display: "flex",
                                  marginTop: "-27px",
                                  marginBottom: "5px",
                                  justifyContent: "center",
                                  color: "#acacac",
                                  opacity: "75%",
                                }}
                              >
                                <p
                                  id="card2Bhk1"
                                  onClick={handleBhkOptions2(1)}
                                  style={{ fontWeight: 501, cursor: "pointer" }}
                                >
                                  1 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card2Bhk2"
                                  onClick={handleBhkOptions2(2)}
                                  style={{ cursor: "pointer" }}
                                >
                                  2 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card2Bhk3"
                                  onClick={handleBhkOptions2(3)}
                                  style={{ cursor: "pointer" }}
                                >
                                  3 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card2Bhk4"
                                  onClick={handleBhkOptions2(4)}
                                  style={{ cursor: "pointer" }}
                                >
                                  4 BHK
                                </p>
                              </div>

                              <div className="box-info-price">
                                <span
                                  id="card2Price"
                                  className="text-heading-3 for-month display-month"
                                >
                                  ₹ 4999
                                </span>
                                <span className="text-heading-3 for-year">
                                  $1068
                                </span>
                                <span className="clr-white text-month text-body-small color-gray-400">
                                  &nbsp; 2 BHK
                                </span>
                                <span className="clr-white text-month text-body-small color-gray-400">
                                  &nbsp; <br />
                                  4-7 hours
                                </span>
                                <span className="text-month for-year text-body-small color-gray-400">
                                  /year
                                </span>
                              </div>
                              <div className="line-bd-bottom">
                                <h4 className="clr-white text-heading-5 mb-15">
                                  Deep Cleaning
                                </h4>
                                {/* <p className="text-body-small color-gray-400">
                            Service includes general cleaning for 4 times per
                            week.
                          </p> */}
                              </div>
                              <ul className="list-package-feature" style={{minHeight: '178px'}}>
                          <li className="clr-white">
                            Deep cleaning of all rooms including Kitchen and
                            Balcony
                          </li>
                          <li className="clr-white">
                          Cleaning and stain removal of kitchen cabinets and appliances
                          </li>

                          <div id="card2" style={{ display: "none" }}>

                            <li className="clr-white">
                            Dusting of walls, windows, ceilings and balcony
                            </li>
                          <li className="clr-white">Wet wiping of ceiling fans, decor items and switch boards</li>
                          <li className="clr-white">Vacuuming of sofas, carpets, curtains, and window sills</li>

                          </div>
                        </ul>
                              <p
                                className="view-more"
                                style={{ float: "right", cursor: "pointer" }}
                                onClick={handleViewMore("card2")}
                              >
                                View more
                              </p>
                            </Carousel.Item>

                            <Carousel.Item>
                              <div
                                style={{
                                  display: "flex",
                                  marginTop: "-27px",
                                  marginBottom: "5px",
                                  justifyContent: "center",
                                  color: "#acacac",
                                  opacity: "75%",
                                }}
                              >
                                <p
                                  id="card2Bhk1"
                                  onClick={handleBhkOptions2(1)}
                                  style={{ fontWeight: 501, cursor: "pointer" }}
                                >
                                  1 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card2Bhk2"
                                  onClick={handleBhkOptions2(2)}
                                  style={{ cursor: "pointer" }}
                                >
                                  2 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card2Bhk3"
                                  onClick={handleBhkOptions2(3)}
                                  style={{ cursor: "pointer" }}
                                >
                                  3 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card2Bhk4"
                                  onClick={handleBhkOptions2(4)}
                                  style={{ cursor: "pointer" }}
                                >
                                  4 BHK
                                </p>
                              </div>

                              <div className="box-info-price">
                                <span
                                  id="card2Price"
                                  className="text-heading-3 for-month display-month"
                                >
                                  ₹ 5999
                                </span>
                                <span className="text-heading-3 for-year">
                                  $1068
                                </span>
                                <span className="clr-white text-month text-body-small color-gray-400">
                                  &nbsp; 3 BHK
                                </span>
                                <span className="clr-white text-month text-body-small color-gray-400">
                                  &nbsp; <br />
                                  4-7 hours
                                </span>
                                <span className="text-month for-year text-body-small color-gray-400">
                                  /year
                                </span>
                              </div>
                              <div className="line-bd-bottom">
                                <h4 className="clr-white text-heading-5 mb-15">
                                  Deep Cleaning
                                </h4>
                                {/* <p className="text-body-small color-gray-400">
                            Service includes general cleaning for 4 times per
                            week.
                          </p> */}
                              </div>
                              <ul className="list-package-feature" style={{minHeight: '178px'}}>
                          <li className="clr-white">
                            Deep cleaning of all rooms including Kitchen and
                            Balcony
                          </li>
                          <li className="clr-white">
                          Cleaning and stain removal of kitchen cabinets and appliances
                          </li>

                          <div id="card2" style={{ display: "none" }}>

                            <li className="clr-white">
                            Dusting of walls, windows, ceilings and balcony
                            </li>
                          <li className="clr-white">Wet wiping of ceiling fans, decor items and switch boards</li>
                          <li className="clr-white">Vacuuming of sofas, carpets, curtains, and window sills</li>

                          </div>
                        </ul>
                              <p
                                className="view-more"
                                style={{ float: "right", cursor: "pointer" }}
                                onClick={handleViewMore("card2")}
                              >
                                View more
                              </p>
                            </Carousel.Item>

                            <Carousel.Item>
                              <div
                                style={{
                                  display: "flex",
                                  marginTop: "-27px",
                                  marginBottom: "5px",
                                  justifyContent: "center",
                                  color: "#acacac",
                                  opacity: "75%",
                                }}
                              >
                                <p
                                  id="card2Bhk1"
                                  onClick={handleBhkOptions2(1)}
                                  style={{ fontWeight: 501, cursor: "pointer" }}
                                >
                                  1 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card2Bhk2"
                                  onClick={handleBhkOptions2(2)}
                                  style={{ cursor: "pointer" }}
                                >
                                  2 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card2Bhk3"
                                  onClick={handleBhkOptions2(3)}
                                  style={{ cursor: "pointer" }}
                                >
                                  3 BHK
                                </p>
                                <span>&nbsp;|&nbsp;</span>
                                <p
                                  id="card2Bhk4"
                                  onClick={handleBhkOptions2(4)}
                                  style={{ cursor: "pointer" }}
                                >
                                  4 BHK
                                </p>
                              </div>

                              <div className="box-info-price">
                                <span
                                  id="card2Price"
                                  className="text-heading-3 for-month display-month"
                                >
                                  ₹ 7555
                                </span>
                                <span className="text-heading-3 for-year">
                                  $1068
                                </span>
                                <span className="clr-white text-month text-body-small color-gray-400">
                                  &nbsp; 4 BHK
                                </span>
                                <span className="clr-white text-month text-body-small color-gray-400">
                                  &nbsp; <br />
                                  4-7 hours
                                </span>
                                <span className="text-month for-year text-body-small color-gray-400">
                                  /year
                                </span>
                              </div>
                              <div className="line-bd-bottom">
                                <h4 className="clr-white text-heading-5 mb-15">
                                  Deep Cleaning
                                </h4>
                                {/* <p className="text-body-small color-gray-400">
                            Service includes general cleaning for 4 times per
                            week.
                          </p> */}
                              </div>
                              <ul className="list-package-feature" style={{minHeight: '178px'}}>
                          <li className="clr-white">
                            Deep cleaning of all rooms including Kitchen and
                            Balcony
                          </li>
                          <li className="clr-white">
                          Cleaning and stain removal of kitchen cabinets and appliances
                          </li>

                          <div id="card2" style={{ display: "none" }}>

                            <li className="clr-white">
                            Dusting of walls, windows, ceilings and balcony
                            </li>
                          <li className="clr-white">Wet wiping of ceiling fans, decor items and switch boards</li>
                          <li className="clr-white">Vacuuming of sofas, carpets, curtains, and window sills</li>

                          </div>
                        </ul>
                              <p
                                className="view-more"
                                style={{ float: "right", cursor: "pointer" }}
                                onClick={handleViewMore("card2")}
                              >
                                View more
                              </p>
                            </Carousel.Item>
                        </Carousel>
                      </div>
                    </div>

                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                      data-wow-delay=".1s"
                    >
                      <div
                        className="clr-white box-pricing-item hover-up"
                        style={{ background: "#ff6c37" }}
                      >
                        <div className="box-info-price">
                          <span className="text-heading-3 for-month display-month">
                            ₹ 2999
                          </span>
                          <span className="text-heading-3 for-year">$420</span>
                          <span className="clr-white text-month text-body-small color-gray-400">
                            &nbsp; <br />
                            3-4 hours
                          </span>
                          <span className="text-month for-year text-body-small color-gray-400">
                            /year
                          </span>
                        </div>
                        <div
                          className="line-bd-bottom"
                          style={{ paddingBottom: "18px" }}
                        >
                          <h4 className="clr-white text-heading-5 mb-15">
                            Deep Cleaning (Kitchen)
                          </h4>
                          {/* <p className="text-body-small color-gray-400">
                            3-4 hours
                          </p> */}
                        </div>
                        <ul
                          className="list-package-feature"
                          style={{ minHeight: "183px" }}
                        >
                          <li className="clr-white">
                            Dirt, deposit & stain removal of kitchen floor,
                            tiles, slab, sink, and fittings
                          </li>
                          <li className="clr-white">
                            Cleaning of kitchen windows, ceiling fan and exhaust
                            fan
                          </li>

                          <div id="card3" style={{ display: "none" }}>
                            <li className="clr-white">
                              Degreasing of stove and chimney{" "}
                            </li>

                            <li className="clr-white">
                              Deep cleaning of fridge, microwave and other
                              appliances{" "}
                            </li>
                            <li className="clr-white">
                              Cabinet cleaning including inside shelves{" "}
                            </li>
                          </div>
                        </ul>
                        <p
                          className="view-more"
                          style={{ float: "right", cursor: "pointer" }}
                          onClick={handleViewMore("card3")}
                        >
                          View more
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                      data-wow-delay=".1s"
                    >
                      <div
                        className="clr-white box-pricing-item hover-up"
                        style={{ background: "#ff6c37" }}
                      >
                        <div className="box-info-price">
                          <span className="clr-white text-heading-3 for-month display-month">
                            ₹ 799
                          </span>
                          <span className="text-heading-3 for-year">$420</span>
                          <span className="clr-white text-month text-body-small color-gray-400">
                            &nbsp; <br />
                            Upto 2 hours
                          </span>
                          <span className="text-month for-year text-body-small color-gray-400">
                            /year
                          </span>
                        </div>
                        <div
                          className="line-bd-bottom"
                          style={{ paddingBottom: "18px" }}
                        >
                          <h4 className="clr-white text-heading-5 mb-15">
                            Deep Cleaning (Bathroom)
                          </h4>
                          {/* <p className="text-body-small color-gray-400">
                            Service includes general cleaning for 2 times per
                            week.
                          </p> */}
                        </div>
                        <ul className="list-package-feature">
                          <li className="clr-white">
                            Dirt, hard water stains & tile grouting stain
                            removal from all surfaces including mirror
                          </li>
                          <li className="clr-white">
                            Deep cleaning and unclogging of floor, toilet, and
                            bathtub
                          </li>
                          <li className="clr-white">Stain removal if any</li>

                          <div id="card4" style={{ display: "none" }}></div>
                        </ul>
                        {/* <p
                          className="view-more"
                          style={{ float: "right", cursor: "pointer" }}
                          onClick={handleViewMore("card4")}
                        >
                          View more
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-box mt-70">
          <div className="container text-center mt-100">
            <h2 className="text-heading-1 color-gray-900">Zimkey Safety</h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              {/* Lorem ipsum dolor. */}&nbsp;
            </p>
          </div>
          <div className="container">
            <div className="box-bg-bottom">
              <div className="box-video-homepage6">
                <div className="box-image mt-30 mb-30">
                  <img
                    className="img-responsive bdrd-16"
                    src="/assets/imgs/page/new-images/4.jpg"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 zs-bullet-12">
                  <div className="list-icons mt-25">
                    <div
                      className="item-icon none-bd"
                      style={{ paddingLeft: "0px" }}
                    >
                      {/* <span className="icon-left">
                        <img src="/assets/imgs/page/homepage6/icon-acquis.svg" />
                      </span> */}
                      {/* <h4 className="text-heading-4">1. Title</h4> */}
                      <p className="text-body-text color-gray-600 mt-15 bullet-point">
                        All our professionals undergo a rigorous background
                        check before getting onboarded
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 zs-bullet-12">
                  <div className="list-icons mt-25">
                    <div
                      className="item-icon none-bd"
                      style={{ paddingLeft: "0px" }}
                    >
                      {/* <span className="icon-left">
                        <img src="/assets/imgs/page/homepage6/icon-active.svg" />
                      </span> */}
                      {/* <h4 className="text-heading-4">2. Title</h4> */}
                      <p className="text-body-text color-gray-600 mt-15 bullet-point">
                        Our service providers follow all standard safety
                        protocols
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="list-icons mt-25">
                    <div
                      className="item-icon none-bd"
                      style={{ paddingLeft: "0px" }}
                    >
                      {/* <span className="icon-left">
                        <img src="/assets/imgs/page/homepage6/icon-retent.svg" />
                      </span> */}
                      {/* <h4 className="text-heading-4">3. Title</h4> */}
                      <p className="text-body-text color-gray-600 mt-15 bullet-point">
                        All our service providers are fully vaccinated and
                        continue to follow the required covid safety protocols
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900 mb-10">
                  Launching Soon
                </h2>
                {/* <p className="text-body-lead-large color-gray-600 mt-20">
                  Coming soon
                </p> */}
              </div>
              <div className="col-lg-1 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-40">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-40 hover-up">
                  <div className="item-icon">
                    {/* <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-acquis.svg"
                        alt="Zimkey"
                      />
                    </span> */}
                    <h4 className="text-heading-4">Electrician & Plumbing</h4>
                    {/* <p className="text-body-text color-gray-600 mt-15">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus nulla.
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-40 hover-up">
                  <div className="item-icon">
                    {/* <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-acquis.svg"
                        alt="Zimkey"
                      />
                    </span> */}
                    <h4 className="text-heading-4">Carpenter & Painting</h4>
                    {/* <p className="text-body-text color-gray-600 mt-15">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus nulla.
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div
                  className="list-icons mt-4 hover-up"
                  style={{ marginTop: "8px !important" }}
                >
                  <div className="item-icon" style={{ paddingBottom: "23px" }}>
                    {/* <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-acquis.svg"
                        alt="Zimkey"
                      />
                    </span> */}
                    <h4 className="text-heading-4">
                      Maintenance & Repair Services
                    </h4>
                    {/* <p className="text-body-text color-gray-600 mt-15">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus nulla.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        {/* <section className="section-box">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do">
                <img
                  className="bdrd-16 img-responsive"
                  src="https://media.istockphoto.com/id/901157728/photo/handyman-with-tool-belt.jpg?s=1024x1024&w=is&k=20&c=q4dRtJu3JxW7gdTPKdcK7WVcgrOGeYkSqlUlj0aSzu4="
                  alt="Zimkey"
                />
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do">
                <h3 className="text-heading-1 mt-30">Zimkey Guarantee</h3>
                <p className="text-body-lead-large color-gray-600 mt-30">
                  There are better ways for you to spend your time, so we made
                  it easy for you. Book your house cleaning in 60 seconds, and
                  our professionals will take care of the rest.
                </p>
                <div className="line-bd-green mt-50" />
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">
                      YOUR GO-TO CLEANING PARTNER
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Our priority is to give you peace of mind in the unlikely
                      event of damages during The cleaning service.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">
                      ADVOCATE YOUR LIFESTYLE
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      As an advocate for lifestyle and well-being brand, through
                      keeping spaces clean, ZimkeyDay Cleaner° invites you to
                      reach out and share the responsibility of managing your
                      holiday homes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </LayoutCampaign>
      <CampaignFooter />
    </>
  );
}

export default HomeCampaign;
