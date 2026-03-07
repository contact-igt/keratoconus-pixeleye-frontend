import SubBanner from "@/common/SubBanner";
import styles from "./styles.module.css";

const AfterSurgery = ({ surgerydata, handleTogglecontactForm }) => {
  return (
    <section className={styles.aftersurgerysec}>
      <div
        className={`commonshadow ${styles.surgerycard}`}
        onClick={handleTogglecontactForm}
      >
        <h4>{surgerydata?.title}</h4>
        <p>{surgerydata?.desc1}</p>
        <p>{surgerydata?.desc2}</p>
        <p>{surgerydata?.desc3}</p>
      </div>

      <SubBanner
        title={"How We"}
        spantitle={"Evaluate Keratoconus"}
        content={
          "Diagnosis and follow-up depend on careful assessment of corneal shape, visual changes, and progression pattern."
        }
        bgcolor={"#f4faff"}
        spancolor={"#5382b0"}
        bordercolor={"#2f74b1"}
        btn_bgcolor={"#2f74b1"}
        btn_name={"Schedule Evaluation"}
        btn_txtcolor={"#fff"}
        isicons={false}
        isimg={false}
         img={"/assets/simplifiedAi.webp"}
          imgheight={250}
          imgwidth={250}
          scale={1.2}
        handleTogglecontactForm={handleTogglecontactForm}
      />
    </section>
  );
};

export default AfterSurgery;
