import SubBanner from "@/common/SubBanner";
import styles from "./styles.module.css";
import Button from "@/common/Button";
import Title from "@/common/Title";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { HomeData } from "@/constant/Home";

const TreatmentCost = ({ handleTogglecontactForm }) => {
  const treatmentOptions = HomeData?.treatmentOptions;
  const earlyCare = HomeData?.earlyCare;

  return (
    <section className={styles.treatmentsec}>
      
      <SubBanner
        title={earlyCare?.title.split(' ').slice(0, 2).join(' ')}
        spantitle={earlyCare?.title.split(' ').slice(2).join(' ')}
        content={
          <ul className="list-unstyled mt-3">
            {earlyCare?.items?.map((item, idx) => (
              <li key={idx} className="mb-2 d-flex align-items-start gap-2">
                <CheckCircle2 color="#d3863c" size={18} className="mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        }
        bgcolor={"#fef8f1"}
        spancolor={"#d3863c"}
        bordercolor={"#eea35cff"}
        btn_bgcolor={"#cf873d"}
        btn_name={earlyCare?.cta}
        btn_txtcolor={"#fff"}
        isicons={false}
        isimg={true}
        img={"/assets/surgeryCost.webp"}
        handleTogglecontactForm={handleTogglecontactForm}
      />
    <div>
        <Title title={treatmentOptions?.title} />
        {treatmentOptions?.subheading && (
          <p className="text-start text-muted mb-4">{treatmentOptions?.subheading}</p>
        )}

      <div className={`row commonshadow mt-4 mx-3 mx-md-0 ${styles.treat} p-4 mb-3`}>
        {treatmentOptions?.options?.map((data, i) => (
          <div
            className={` col-lg-6 col-md-6 text-center mb-4 ${styles.treatcard} `}
            key={i}
          >
            <div className={`d-flex justify-content-center`}>
              <div className={styles.treatimg}>
                <Image
                  src={data?.icon}
                  width={60}
                  height={60}
                  style={{objectFit:"contain"}}
                  alt={data?.title}
                />
              </div>
            </div>
            <div className="mt-3">
              <span className="badge bg-secondary mb-2">Option {data.letter}</span>
              <h5 className="fw-bold">{data.title}</h5>
              <p className="small text-muted mt-2">{data.description}</p>
            </div>
          </div>
        ))}

        <div className="col-12 d-flex justify-content-center mt-3">
          <Button
            name={"Chat With Experts"}
            txtcolor={"#fff"}
            bgcolor={"#21a179"}
            isimg={true}
            href={"https://wa.me/917075008561"}
            imgicon={"/assets/whatsapp.png"}
          />
        </div>
      </div>

      <SubBanner
        title={"Talk To"}
        spantitle={"Cornea Specialist"}
        content={"Get expert guidance on keratoconus diagnosis and personalized treatment plans"}
        bgcolor={"#fef8f1"}
        spancolor={"#d3863c"}
        bordercolor={"#eea35cff"}
        btn_bgcolor={"#cf873d"}
        btn_name={"Call Specialist Now"}
        btn_txtcolor={"#fff"}
        isicons={true}
        icon_name={"phone"}
        href={"tel:+917075008561"}
        img={"/assets/healthAdvisor.webp"}
        imgheight={250}
        imgwidth={250}
        scale={1.4}
        handleTogglecontactForm={handleTogglecontactForm}
      />
    </div>
    </section>
  );
};

export default TreatmentCost;
