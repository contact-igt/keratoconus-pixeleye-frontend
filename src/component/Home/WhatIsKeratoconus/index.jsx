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
            <div className={`${styles.imageWrapper} p-3 bg-white`}>
              <div className="position-relative" style={{ height: '250px', width: '100%' }}>
                <Image
                  src="/assets/keratoconus-diag2.png"
                  alt="Keratoconus"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <p className="mt-3 mb-0 fw-semibold text-primary">{data?.imageCaption}</p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="row mt-5 g-4 justify-content-center">
          {data?.videos?.map((video, idx) => (
            <div key={idx} className="col-lg-6 col-md-6">
              <div className={`${styles.videoCard} overflow-hidden shadow-sm bg-white`}>
                <div className={styles.videoWrapper}>
                  <iframe
                    src={video.videoUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsKeratoconus;
