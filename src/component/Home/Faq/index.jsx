import Title from "@/common/Title";
import styles from "./styles.module.css";
import SubBanner from "@/common/SubBanner";
import Image from "next/image";
import Button from "@/common/Button";
import { useState } from "react";
import { HomeData } from "@/constant/Home";
import { Clock } from "lucide-react";

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

        <div className="mt-5 mb-5 md:mb-0">
          <div className="row g-4">
            {/* Contact Card */}
            <div className="col-md-6">
              <div className={`${styles.contactCard} h-100 d-flex align-items-center gap-3 commonshadow`}>
                <div className={styles.iconBox}>
                  <Image src="/assets/whatsapp.png" width={28} height={28} alt="call" />
                </div>
                <div className={styles.contactInfo}>
                  <h6 className="m-0">Call or WhatsApp</h6>
                  <p className={`m-0 ${styles.themeBlueText}`}>+{finalCTA?.phone}</p>
                  <span className={styles.noteText}>Available 9:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="col-md-6">
              <div className={`${styles.contactCard} h-100 d-flex align-items-center gap-3 commonshadow`}>
                <div className={styles.iconBox}>
                  <Image src="/assets/medical.png" width={28} height={28} alt="location" style={{ filter: 'brightness(0) invert(1)' }} />
                </div>
                <div className={styles.contactInfo}>
                  <h6 className="m-0">Visit Us</h6>
                  <p className={`m-0 ${styles.themeBlueText}`}>{finalCTA?.address}</p>
                </div>
              </div>
            </div>

            {/* Opening Hours Box */}
            <div className="col-12 mt-4">
              <div className={`${styles.hoursBox} commonshadow`}>
                <div className={styles.hoursTitle}>
                  <Clock className={styles.clockIcon} size={28} />
                  <span>Opening - Hours</span>
                </div>
                <div className="mt-3">
                  <div className={styles.hourRow}>
                    <span className={styles.dayLabel}>Monday - Saturday</span>
                    <span className={styles.timeVal}>: 9:00 AM - 6:00 PM</span>
                  </div>
                  <div className={styles.hourRow}>
                    <span className={styles.dayLabel}>Sunday</span>
                    <span className={styles.timeVal}>: 10:00 AM - 4:00 PM</span>
                  </div>
                  <div className={styles.hourRow}>
                    <span className={styles.dayLabel}>Emergency</span>
                    <span className={`${styles.timeVal} ${styles.emergency}`}>: 24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.footercta} d-flex justify-content-center gap-3 mt-4 mb-5`}
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
