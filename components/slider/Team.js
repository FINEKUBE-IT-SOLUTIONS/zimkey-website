/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const TeamSlider = () => {
  const data = [
    {
      img: "9.jpg",
      avatar: "1.jpg",
      title: "Liguid Wave",
      author: "Sound Box",
    },
    {
      img: "10.jpg",
      avatar: "2.jpg",
      title: "Liguid Wave",
      author: "Sound Box",
    },
    {
      img: "11.jpg",
      avatar: "3.jpg",
      title: "Liguid Wave",
      author: "Sound Box",
    },
    {
      img: "12.jpg",
      avatar: "4.jpg",
      title: "Liguid Wave",
      author: "Sound Box",
    },
  ];

  const customerData = [
    {
      name: "Ashik",
      location: "Kaloor",
      review:
        "I was looking for professional cleaners who could access and clean tricky places like the basement and window sills - That’s how I tried Zimkey and I am extremely impressed with their services!",
    },
    {
      name: "Sherry",
      location: "Panampilly Nagar",
      review:
        "We booked the deep cleaning services for our apartment and were happy with the results. The staff from Zimkey including Anirudh, Joseph, Mahendra and Allaudin were all well trained and pleasant to deal with.",
    },
    {
      name: "Naeem",
      location: "Palarivattom",
      review:
        "Really happy with the service - the staff were well trained, professional, punctual and did a great job! My go-to service provider from now on.",
    },
    {
      name: "Anil",
      location: "Kaloor",
      review:
        "The service was good and the whole experience was seamless. The staff didn’t need any follow up, they arrived before time and did the work neatly.",
    },
    {
      name: "Anoop",
      location: "Kakkanad",
      review:
        "The Zimkey staff seemed professional and I was particularly happy with how they cleaned every nook and corner carefully.",
    },
    {
      name: "Kurian",
      location: "Kakkanad",
      review:
        "Found the whole team very efficient. Very pleased with the service. Happy to have a cleaner home. Thank you Zimkey. Would recommend your service to everyone.",
    },
  ];

  return (
    <>
      <div className="box-swiper">
        <div className="swiper-container swiper-group-1">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".swiper-button-prev-4",
              nextEl: ".swiper-button-next-4",
            }}
            className="swiper-wrapper pb-70 pt-5"
          >
            {/* {data.map((item, i) => ( */}
            {/* <SwiperSlide> */}
            <div className="swiper-slide active">
              <div className="row">
                {customerData.map((i, k) => (
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div
                      className="card-grid-style-5 hover-up testimonials-card"
                      style={
                        k == 0 ? {
                          boxShadow:
                            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                          maxWidth: "99%",
                          marginLeft: "auto"
                          // borderRight: "auto",
                        } : {
                          boxShadow:
                            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                          maxWidth: "99%",
                          
                          // borderRight: "auto",
                        }}
                    >

                      <div>
                      <div className="grid-5-img mb-15">
                        {/* <img src="/assets/imgs/page/about/1/team-1.png" alt="Agon" /> */}
                      </div>
                      {/* <span className="text-body-text-md color-gray-500">
                          Marketing CEO
                        </span> */}
                      {/* <div> */}
                      <div style={{ display: "flex", paddingTop: "1rem", position: "relative" }}>
                        <h3 style={{ paddingLeft: "1rem" }}>
                          <span>&#10077;</span>
                        </h3>
                        <p
                          className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20"
                          style={{
                            paddingLeft: "25px",
                            marginTop: "-3rem",
                            paddingRight: "2rem",
                          }}
                        >
                          {i.review}
                          
                        </p>
                        <h3 className="qoutes-right">
                            <span>&#10078;</span>
                          </h3>
                      </div>

                      
                      </div>
                      {/* </div> */}
                      <div
                        style={{ textAlign: "center", paddingBottom: "1rem" }}
                      >
                        <h3
                          className="text-heading-5 mb-5 mt-5"
                          // style={{ textAlign: "center" }}
                        >
                          {i.name}
                        </h3>
                        <p
                          className="text-body-text-md color-gray-500"
                          // style={{ textAlign: "center" }}
                        >
                          {i.location}
                        </p>
                      </div>
                      {/* <span className="text-body-text-md color-gray-600">Let’s Connect</span> */}
                      {/* <div className="social-bottom">
                                                    <Link href="#"><a className="icon-socials icon-facebook"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-twitter"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-instagram"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-linkedin"></a></Link>
                                                </div> */}


                    </div>
                  </div>
                ))}

                {/* <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="card-grid-style-5 hover-up">
                                                <div className="grid-5-img mb-15"><img src="/assets/imgs/page/about/1/team-2.png" alt="Agon" /></div><span className="text-body-text-md color-gray-500">Marketing CEO</span>
                                                <h3 className="text-heading-5 mb-5 mt-5">Theresa Webb</h3>
                                                <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><span className="text-body-text-md color-gray-600">Let’s Connect</span>
                                                <div className="social-bottom">
                                                    <Link href="#"><a className="icon-socials icon-facebook"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-twitter"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-instagram"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-linkedin"></a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="card-grid-style-5 hover-up">
                                                <div className="grid-5-img mb-15"><img src="/assets/imgs/page/about/1/team-3.png" alt="Agon" /></div><span className="text-body-text-md color-gray-500">Marketing CEO</span>
                                                <h3 className="text-heading-5 mb-5 mt-5">Theresa Webb</h3>
                                                <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><span className="text-body-text-md color-gray-600">Let’s Connect</span>
                                                <div className="social-bottom">
                                                    <Link href="#"><a className="icon-socials icon-facebook"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-twitter"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-instagram"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-linkedin"></a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="card-grid-style-5 hover-up">
                                                <div className="grid-5-img mb-15"><img src="/assets/imgs/page/about/1/team-4.png" alt="Agon" /></div><span className="text-body-text-md color-gray-500">Marketing CEO</span>
                                                <h3 className="text-heading-5 mb-5 mt-5">Theresa Webb</h3>
                                                <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><span className="text-body-text-md color-gray-600">Let’s Connect</span>
                                                <div className="social-bottom">
                                                    <Link href="#"><a className="icon-socials icon-facebook"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-twitter"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-instagram"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-linkedin"></a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="card-grid-style-5 hover-up">
                                                <div className="grid-5-img mb-15"><img src="/assets/imgs/page/about/1/team-5.png" alt="Agon" /></div><span className="text-body-text-md color-gray-500">Marketing CEO</span>
                                                <h3 className="text-heading-5 mb-5 mt-5">Theresa Webb</h3>
                                                <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><span className="text-body-text-md color-gray-600">Let’s Connect</span>
                                                <div className="social-bottom">
                                                    <Link href="#"><a className="icon-socials icon-facebook"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-twitter"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-instagram"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-linkedin"></a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="card-grid-style-5 hover-up">
                                                <div className="grid-5-img mb-15"><img src="/assets/imgs/page/about/1/team-6.png" alt="Agon" /></div><span className="text-body-text-md color-gray-500">Marketing CEO</span>
                                                <h3 className="text-heading-5 mb-5 mt-5">Theresa Webb</h3>
                                                <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><span className="text-body-text-md color-gray-600">Let’s Connect</span>
                                                <div className="social-bottom">
                                                    <Link href="#"><a className="icon-socials icon-facebook"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-twitter"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-instagram"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-linkedin"></a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="card-grid-style-5 hover-up">
                                                <div className="grid-5-img mb-15"><img src="/assets/imgs/page/about/1/team-7.png" alt="Agon" /></div><span className="text-body-text-md color-gray-500">Marketing CEO</span>
                                                <h3 className="text-heading-5 mb-5 mt-5">Theresa Webb</h3>
                                                <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><span className="text-body-text-md color-gray-600">Let’s Connect</span>
                                                <div className="social-bottom">
                                                    <Link href="#"><a className="icon-socials icon-facebook"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-twitter"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-instagram"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-linkedin"></a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="card-grid-style-5 hover-up">
                                                <div className="grid-5-img mb-15"><img src="/assets/imgs/page/about/1/team-8.png" alt="Agon" /></div><span className="text-body-text-md color-gray-500">Marketing CEO</span>
                                                <h3 className="text-heading-5 mb-5 mt-5">Theresa Webb</h3>
                                                <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><span className="text-body-text-md color-gray-600">Let’s Connect</span>
                                                <div className="social-bottom">
                                                    <Link href="#"><a className="icon-socials icon-facebook"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-twitter"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-instagram"></a></Link>
                                                    <Link href="#"><a className="icon-socials icon-linkedin"></a></Link>
                                                </div>
                                            </div>
                                        </div> */}
              </div>
            </div>
            {/* </SwiperSlide> */}
            {/* // ))} */}
          </Swiper>
        </div>
        {/* <div className="swiper-button-next swiper-button-next-4" />
        <div className="swiper-button-prev swiper-button-prev-4" /> */}
      </div>
    </>
  );
};

export default TeamSlider;
