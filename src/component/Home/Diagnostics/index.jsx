import Title from "@/common/Title";
import styles from "./styles.module.css";
import { HomeData } from "@/constant/Home";
import { CheckCircle2, Info } from "lucide-react";
import { useState } from "react";

const Diagnostics = () => {
  const data = HomeData?.diagnostics;
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className={`${styles.diagnosticsSec} mt-5`}>
      <div className="container">
        <Title title={data?.title} />
        <div className="row g-4 mt-3">
          {data?.cards?.map((card, idx) => (
            <div
              key={idx}
              className="col-md-6 col-lg-4"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className={`${styles.card} commonshadow h-100 p-4 d-flex align-items-center gap-3`}>
                <div className={styles.iconCircle}>
                  <CheckCircle2
                    color={hoveredIdx === idx ? "#ffffff" : "#2A3B77"}
                    size={22}
                    strokeWidth={2.5}
                  />
                </div>
                <h6 className="m-0 fw-bold">{card}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.supportContainer}>
          <div className={styles.supportIcon}>
            <Info size={28} />
          </div>
          <p className={styles.supportText}>{data?.supportLine}</p>
        </div>
      </div>
    </section>
  );
};

export default Diagnostics;
