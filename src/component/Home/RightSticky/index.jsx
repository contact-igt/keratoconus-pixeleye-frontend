"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "@/common/Button";
import emailjs from "emailjs-com";
import { useRouter } from "next/router";
import { submitWebsiteLead } from "@/lib/leadSubmission";

const RightSticky = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    PatientName: "",
    MobileNumber: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.MobileNumber) {
      setError("Mobile number is required.");
      return;
    }
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.MobileNumber)) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }
    try {
      setLoading(true);
      await submitWebsiteLead({
        patientName: formData?.PatientName,
        mobileNumber: formData.MobileNumber,
        service: "Keratoconus",
      });

      await fetch(
        "https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/xKtkqD5A",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData?.PatientName,
            phone: "+91" + formData.MobileNumber,
            display_name: formData?.PatientName,
            source: "Keratoconus Landing Page",
          }),
        },
      );

      await emailjs.send(
        "service_9ka2q7j",
        "template_88icron",
        {
          patient_name: formData.PatientName || "Guest Patient",
          mobile_number: formData.MobileNumber,
          service_name: "Keratoconus Treatment",
          email_subject: "Keratoconus Care",
          from_name: "Pixel Eye Hospitals",
          from_email: "info@pixeleyehospitals.com"
        },
        "CNcEBk9-YnTm2Zwor"
      );
      setLoading(false);
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="container-lg my-3 p-0">
      <div className={`card ${styles.card} shadow-lg border-0 p-4`}>
        <h4 className="fw-semibold mb-4" style={{ color: "#2A3B77" }}>
          Book Keratoconus <br className="d-none d-lg-bock" /> Consultation
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              name="PatientName"
              type="text"
              onChange={handleChange}
              className="form-control rounded-3 py-3"
              placeholder="Patient Name (Optional)"
            />
          </div>

          <div className="mb-3 input-group">
            <span className="input-group-text bg-light border-end-0 rounded-start-3 py-3">
              +91
            </span>
            <input
              name="MobileNumber"
              type="tel"
              onChange={handleChange}
              className="form-control border-start-0 rounded-end-3"
              placeholder="Mobile Number"
            />
          </div>

          {error && <p className="mt-2" style={{ color: "#ff6f61" }}>{error}</p>}
          <div className="d-grid mt-4">
            <Button disabled={loading} name={loading ? "Booking..." : "Book Now"} bgcolor="#ff6f61" txtcolor="#fff" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RightSticky;
