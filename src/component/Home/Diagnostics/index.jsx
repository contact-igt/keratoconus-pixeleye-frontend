import Title from "@/common/Title";
import styles from "./styles.module.css";
import Image from "next/image";
import { HomeData } from "@/constant/Home";
import { CheckCircle2 } from "lucide-react";

const Diagnostics = () => {
  const data = HomeData?.diagnostics;

  return (
    <section className={`${styles.diagnosticsSec} mt-5`}>
      <div className="container">
        <Title title={data?.title} />
        <div className="row g-4 mt-3">
          {data?.cards?.map((card, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className={`${styles.card} commonshadow h-100 p-4 d-flex align-items-center gap-3`}>
                <CheckCircle2 color="#2A3B77" size={24} />
                <h6 className="m-0 fw-semibold">{card}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 border-left-blue bg-light-blue rounded-3">
          <p className="m-0 fs-6 text-muted">{data?.supportLine}</p>
        </div>
      </div>
    </section>
  );
};

export default Diagnostics;
