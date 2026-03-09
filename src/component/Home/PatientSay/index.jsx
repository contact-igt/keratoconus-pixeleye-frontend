import Title from "@/common/Title";
import styles from "./styles.module.css";
import Image from "next/image";
import { Star } from "lucide-react";
import Button from "@/common/Button";
import Slider from "react-slick";
import TestimonialCard from "@/common/TestimonialCard";
import { useState } from "react";
import { Popup } from "@/common/Popup";
import { HomeData } from "@/constant/Home";

const PatientSay = ({ handleTogglecontactForm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedVideo(null);
    setIsModalOpen(false);
  };

  const videoData = HomeData?.videoTestimonials?.testimonials || [];
  const writtenData = HomeData?.writtenTestimonials?.reviews || [];

  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    centerMode: videoData.length === 1,
    centerPadding: "0px",
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          centerPadding: "0px",
          infinite: false,
        },
      },
    ],
  };

  return (
    <section className={styles.patientsaysec}>
      <div>
        <Title title={HomeData?.videoTestimonials?.title} />
        {HomeData?.videoTestimonials?.subheading && (
          <p className="text-start text-muted mb-4">{HomeData?.videoTestimonials?.subheading}</p>
        )}
        {/* <div className={` ${styles.testimonalsec}`}>
          <div className={styles.testimonialContainer}>
            <Slider {...settings} className={styles.sliderWrapper}>
              {videoData?.map((item, index) => (
                <div key={index} className={styles.slideWrapperItem}>
                  <TestimonialCard
                    imageSrc={item?.imgUrl}
                    openModal={() => openModal(item.videoUrl)}
                    name={item?.name}
                    testimonial={item?.title}
                  />
                  <p className="text-center mt-2 font-italic small text-muted">"{item.quote}"</p>
                </div>
              ))}
            </Slider>
          </div>
        </div> */}

        <div className="mt-5">
          <Title title={HomeData?.writtenTestimonials?.title} />
          <div className="row g-4 mt-2">
            {writtenData.map((review, idx) => (
              <div key={idx} className="col-md-4">
                <div className={`${styles.patientcard} commonshadow h-100`}>
                  <div className="d-flex align-items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} width={18} color="#fdbf01" fill="#fdbf01" />
                    ))}
                  </div>
                  <p className="mb-3">“{review.content}”</p>
                  <h6 className="m-0">— {review.author}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.patientcard} commonshadow mt-5`}>
          <div className="d-flex gap-2 align-items-center">
            <Image
              src={"/assets/google.png"}
              alt="google-logo"
              width={100}
              height={35}
              style={{ objectFit: "cover" }}
            />
            <h5 className="m-0">Reviews</h5>
          </div>

          <div className="d-flex align-items-center gap-2 my-3">
            <h6 className="m-0">4.8</h6>
            <div>
              <Star width={22} color="#fdbf01" fill="#fdbf01" />
              <Star width={22} color="#fdbf01" fill="#fdbf01" />
              <Star width={22} color="#fdbf01" fill="#fdbf01" />
              <Star width={22} color="#fdbf01" fill="#fdbf01" />
              <Star width={22} color="#fdbf01" fill="#fdbf01" />
            </div>
            <p className="m-0">{`(3,225 Reviews)`}</p>
          </div>

          <Button
            name={"Book Appointment"}
            isicon={true}
            txtcolor={"#fff"}
            icon={"calendar"}
            iconcolor={"#fff"}
            bgcolor={"#21a179"}
            handleTogglecontactForm={() =>
              handleTogglecontactForm("Book Appointment")
            }
          />
        </div>
      </div>
      <Popup open={isModalOpen} onClose={closeModal} variant="video">
        <button
          className={styles.closeButton}
          onClick={closeModal}
          style={{ float: "right", marginBottom: "10px" }}
        >
          ✖
        </button>

        {selectedVideo && (
          <video width="100%" height="500px" controls autoPlay>
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </Popup>
    </section>
  );
};

export default PatientSay;