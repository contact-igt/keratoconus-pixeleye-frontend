import React from "react";
import styles from "./styles.module.css";
import SubBanner from "@/common/SubBanner";
const StatsSection = ({ data , handleTogglecontactForm }) => {
  return (
    <section>
      <div className="my-5 my-md-3">
        {/* <div className={`card ${styles.card} border-0 mx-auto p-3`} onClick={handleTogglecontactForm}>
          <div className="d-flex flex-column pt-2 pt-lg-0 flex-lg-row text-center w-100">
            {data?.map((item, index) => (
              <div
                key={index}
                className={`${index == data.length-1 ? "mb-0" : "mb-4 "} d-flex flex-column gap-1 my-lg-3 px-3 flex-fill ${styles.statItem}`}
              >
                <h2 className="fw-bold fs-2" style={{ color: "#3c7c6f" }}>
                  {item?.value}
                </h2>
                <h2 className="fw-bold fs-6" style={{ color: "#3c7c6f" }}>
                  {item?.title}
                </h2>
              </div>
            ))}
          </div>
        </div> */}

        <SubBanner
          title={"Schedule a"}
          spantitle={"Cornea Check-Up"}
          content={"Get expert keratoconus diagnosis and advanced treatment to protect your vision early."}
          bgcolor={"#fef8f1"}
          spancolor={"#d3863c"}
          bordercolor={"#eea35cff"}
          btn_bgcolor={"#cf873d"}
          btn_name={"Book a Keratoconus Consultation"}
          btn_txtcolor={"#fff"}
          isicons={false}
          isimg={true}
          btn_img={"/assets/whatsapp.png"}
          img={"/assets/surgeryCost.webp"}
          imgwidth={250}
          imgheight={250}
          scale={1.1}
          handleTogglecontactForm={handleTogglecontactForm}
        />
      </div>
    </section>
  );
};

export default StatsSection;
