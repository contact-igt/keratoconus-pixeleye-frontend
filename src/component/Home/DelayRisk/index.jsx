import React from "react";
import styles from "./styles.module.css";
import Title from "@/common/Title";
const DelayRisk = ({ data, handleTogglecontactForm }) => {
  console.log(data?.title)
  return (
    <div className="mt-5 my-3">
      <Title title={data?.title} />
      {data?.subheading && (
        <p className="text-center text-muted mb-4">{data?.subheading}</p>
      )}
      <div
        className={`card ${styles.card} p-4 mt-4 d-flex align-items-start justify-content-center`}
        style={{ borderRadius: "21px" }}
        onClick={handleTogglecontactForm}
      >
        <ul className="fs-6 mt-3 list-disc">
          {data?.riskList?.map((item, index) => (
            <li className="mb-3" key={index}>
              <span style={{ fontWeight: "600" }}>{item.title} </span>-{" "}
              {item.description}
            </li>
          ))}
        </ul>

        {data?.warningBox && (
          <div className="mt-4 p-4 rounded-4 w-100" style={{ backgroundColor: '#fff5f5', border: '1px solid #feb2b2' }}>
            <h6 className="fw-bold mb-2 text-danger">⚠️ {data?.warningBox?.title}</h6>
            <p className="small mb-3">{data?.warningBox?.content}</p>
            <button className="btn btn-danger btn-sm rounded-pill px-4" onClick={handleTogglecontactForm}>
              {data?.warningBox?.cta}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DelayRisk;
