import Title from "@/common/Title";
import styles from "./styles.module.css";
import { HomeData } from "@/constant/Home";

const WhyChoose = ({ chooselist , handleTogglecontactForm }) => {
  return (
    <section className={styles.whychoosesec}>
      <div>
        <Title title={HomeData?.whyChoosePixel?.title} />
        {HomeData?.whyChoosePixel?.subheading && (
          <p className="text-center text-muted mb-4">{HomeData?.whyChoosePixel?.subheading}</p>
        )}

        <div className={`${styles.choosepoint} commonshadow mt-4 `} onClick={handleTogglecontactForm}>
          {HomeData?.whyChoosePixel?.benefits?.map((benefit, i) => (
            <div
            key={i}
              className={`d-flex align-items-center gap-2 my-2 ${styles.choosecard}`}
            >
              <h5 className={styles.pointgreen}></h5>
              <div className={styles.choosec}>
                <h5>{benefit}</h5>
              </div>
            </div>
          ))}
          <p className="mt-4 p-3 bg-light rounded-3 text-muted small">
            {HomeData?.whyChoosePixel?.supportParagraph}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
