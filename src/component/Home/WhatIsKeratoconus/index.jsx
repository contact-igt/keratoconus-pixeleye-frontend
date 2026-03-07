import Title from "@/common/Title";
import styles from "./styles.module.css";
import Image from "next/image";
import { HomeData } from "@/constant/Home";

const WhatIsKeratoconus = () => {
  const data = HomeData?.whatIsKeratoconus;

  return (
    <section className={styles.keratoconusSec}>
      <div className="container">
        <Title title={data?.title} />
        <div className="row align-items-center mt-4 g-4">
          <div className="col-lg-7">
            <p className="fs-5 text-muted" style={{ lineHeight: '1.8' }}>
              {data?.content}
            </p>
          </div>
          <div className="col-lg-5 text-center">
            <div className={`${styles.imageWrapper} commonshadow rounded-4 p-3 bg-white`}>
              <div className="position-relative" style={{ height: '250px', width: '100%' }}>
                <Image
                  src="/assets/keratoconus-diag.webp"
                  alt="Keratoconus"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <p className="mt-3 mb-0 fw-semibold text-primary">{data?.imageCaption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsKeratoconus;
