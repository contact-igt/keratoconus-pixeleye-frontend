import Title from "@/common/Title";
import styles from "./styles.module.css";
import SubBanner from "@/common/SubBanner";
import Image from "next/image";
import Button from "@/common/Button";
import { useState } from "react";
import { HomeData } from "@/constant/Home";

const FAQ = ({ handleTogglecontactForm }) => {
  const [stable, setStable] = useState(null);
  const faqlist = HomeData?.Faq || [];
  const finalCTA = HomeData?.finalCTA;

  return (
    <section className={styles.faqsec}>
      <div>
        <Title title={"Frequently Asked Questions About Keratoconus"} />

        <div className="accordion commonshadow my-4" id="accordionExample">
          {faqlist.map((data, i) => (
            <div className="accordion-item" key={i}>
              <h2 className={`accordion-header ${styles.question}`}>
                <button
                  className={`accordion-button ${stable === i ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => setStable(stable === i ? null : i)}
                  aria-expanded={stable === i}
                  aria-controls={`collapse${i}`}
                >
                  {data?.question}
                </button>
              </h2>
              <div
                id={`collapse${i}`}
                className={`accordion-collapse collapse ${stable === i ? "show" : ""}`}
                data-bs-parent="#accordionExample"
              >
                <div className={`${styles.accordionbody} accordion-body`}>
                  {data?.answer}
                </div>
                <div
                  className={`${styles.accordionbodybtn} d-flex gap-2 align-items-center`}
                >
                  <Image
                    src={"/assets/whatsapp_blue.png"}
                    width={20}
                    height={20}
                    alt="logo"
                  />
                  <a target="_blank" href={`https://wa.me/91${finalCTA?.whatsapp}`}><h6 className="m-0">Chat on whatsapp</h6></a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <SubBanner
          title={finalCTA?.title.split(' ').slice(0, 3).join(' ')}
          spantitle={finalCTA?.title.split(' ').slice(3).join(' ')}
          content={finalCTA?.subheading}
          bgcolor={"#f4faff"}
          spancolor={"#5382b0"}
          bordercolor={"#2f74b1"}
          btn_bgcolor={"#2f74b1"}
          btn_name={"Book Consultation"}
          img={"/assets/fitforyou.webp"}
          imgheight={250}
          imgwidth={250}
          handleTogglecontactForm={handleTogglecontactForm}
          scale={1.6}
          height={"210px"}
          btn_txtcolor={"#fff"}
          isicons={false}
          isimg={false}
        />

        <div className="mt-5 p-4 commonshadow rounded-4 bg-white">
          <h5 className="fw-bold mb-3">Contact Information</h5>
          <div className="row g-3">
            <div className="col-md-6">
              <p className="mb-1 fw-semibold">Phone/WhatsApp:</p>
              <p className="m-0 text-muted">{finalCTA?.phone}</p>
            </div>
            <div className="col-md-6">
              <p className="mb-1 fw-semibold">Hospital Address:</p>
              <p className="m-0 text-muted">{finalCTA?.address}</p>
            </div>
            <div className="col-12 border-top pt-3">
              <p className="mb-1 fw-semibold">Opening Hours:</p>
              <p className="m-0 text-muted">{finalCTA?.timings}</p>
            </div>
          </div>
        </div>

        <div
          className={`${styles.footercta} d-flex justify-content-center gap-3 mt-4`}
        >
          <Button
            href={`tel:+91${finalCTA?.phone}`}
            name={`Call ${finalCTA?.phone}`}
            bgcolor={"#ff6f61"}
            txtcolor={"#ffff"}
            isicon={true}
            icon={"phone"}
            iconcolor={"#fff"}
          />
          <Button
            href={`https://wa.me/91${finalCTA?.whatsapp}`}
            name={"Chat on Whatsapp"}
            bgcolor={"#21a179"}
            txtcolor={"#ffff"}
            isimg={true}
            imgicon={"/assets/whatsapp.png"}
          />
        </div>
      </div>
    </section>
  );
};


export default FAQ;
