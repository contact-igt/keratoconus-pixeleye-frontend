import Form from "@/common/Form";
import Header from "@/common/Header";
import { Popup } from "@/common/Popup";
import QuickAction from "@/common/QuickAction";
import DelayRisk from "@/component/Home/DelayRisk";
import Diagnostics from "@/component/Home/Diagnostics";
import FAQ from "@/component/Home/Faq";
import HomeBanner from "@/component/Home/HomeBanner";
import PatientSay from "@/component/Home/PatientSay";
import RightSticky from "@/component/Home/RightSticky";
import TopDoctor from "@/component/Home/TopDoctor";
import TreatmentCost from "@/component/Home/TreatmentCost";
import WhatIsKeratoconus from "@/component/Home/WhatIsKeratoconus";
import WhyChoose from "@/component/Home/Whychoose";
import { HomeData } from "@/constant/Home";
import { useState } from "react";
import styles from "./styles.module.css";

const HomePageComponent = () => {
  const [open, setOpen] = useState(false);
  const [formTitle, setFormTitle] = useState({title:"",subtitle:""}); 
  const handleTogglecontactForm = (title,subtitle) => {
    setFormTitle({title:title,subtitle:subtitle});
    setOpen(!open);
  };

  return (
    <>
      <div className="p-0 position-relative">
        <Header />
        {/* 1) Hero Section */}
        <HomeBanner data={HomeData?.banner} statsData={HomeData?.stats} />
        
        <div className={`${styles.container} container`}>
          <div className="row">
            <div className="col-12 mx-auto col-lg-8 order-2 order-lg-1">
              
              {/* 2) Symptoms / Problem Awareness Section */}
              <DelayRisk
                data={HomeData?.risks}
                handleTogglecontactForm={handleTogglecontactForm}
              />

              {/* 3) & 4) Video & Written Testimonials */}
              <PatientSay handleTogglecontactForm={handleTogglecontactForm} />

              {/* 5) What Is Keratoconus? */}
              <WhatIsKeratoconus />

              {/* 6) & 7) Why Early Treatment Matters & Treatment Options */}
              <TreatmentCost
                handleTogglecontactForm={handleTogglecontactForm}
              />

              {/* 8) Why Choose Pixel Eye Hospital */}
              <WhyChoose
                handleTogglecontactForm={handleTogglecontactForm}
              />

              {/* 9) Diagnostics / Evaluation */}
              <Diagnostics />

              {/* 10) Doctor Section */}
              <TopDoctor
                data={HomeData?.topDoctor}
                handleTogglecontactForm={handleTogglecontactForm}
              />

              {/* 11) & 12) FAQ & Final CTA */}
              <FAQ handleTogglecontactForm={handleTogglecontactForm} />
            </div>

            <div className="col-12 col-lg-4 order-1 order-lg-2">
              <div className={styles.rightSticky}>
                <RightSticky />
              </div>
            </div>
          </div>
        </div>
        <QuickAction handleTogglecontactForm={handleTogglecontactForm} />
      </div>

      <Popup open={open} onClose={() => handleTogglecontactForm()}>
        <Form
          handleTogglecontactForm={handleTogglecontactForm}
          title={formTitle}
        />
      </Popup>
    </>
  );
};

export default HomePageComponent;