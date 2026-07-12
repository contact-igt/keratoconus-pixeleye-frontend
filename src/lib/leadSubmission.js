const DEFAULT_CLIENT_KEY = "pixeleye";
const DEFAULT_SERVICE_NAME = "Keratoconus";

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const CLIENT_KEY =
  process.env.NEXT_PUBLIC_CLIENT_KEY?.trim() || DEFAULT_CLIENT_KEY;

async function getIpAddress() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");

    if (!response.ok) {
      return "";
    }

    const data = await response.json();
    return data?.ip || "";
  } catch (error) {
    console.error("Unable to fetch IP address", error);
    return "";
  }
}

function getUtmSource() {
  if (typeof window === "undefined") {
    return "";
  }

  return localStorage.getItem("utm_source") || "";
}

async function submitLeadToBackend(payload) {
  if (!BACKEND_URL) {
    throw new Error("NEXT_PUBLIC_BACKEND_URL is not configured.");
  }

  const response = await fetch(
    `${BACKEND_URL}/api/v1/pixeleye/website-leads/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Client-Key": CLIENT_KEY,
      },
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    throw new Error(`Lead API failed with status ${response.status}`);
  }

  return response;
}

async function submitLeadToGoogleScript(formData) {
  if (!GOOGLE_SCRIPT_URL) {
    throw new Error("NEXT_PUBLIC_GOOGLE_SCRIPT_URL is not configured.");
  }

  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(formData).toString(),
  });
}

export async function submitWebsiteLead({
  patientName,
  mobileNumber,
  service = DEFAULT_SERVICE_NAME,
}) {
  const ipAddress = await getIpAddress();
  const utmSource = getUtmSource();

  const apiPayload = {
    name: patientName,
    mobile_number: mobileNumber,
    service,
    ip_address: ipAddress,
    utm_source: utmSource,
  };

  try {
    await submitLeadToBackend(apiPayload);
    return {
      ipAddress,
      utmSource,
      submittedVia: "api",
    };
  } catch (apiError) {
    console.error(
      "Lead API submit failed, falling back to Google Script",
      apiError,
    );

    await submitLeadToGoogleScript({
      PatientName: patientName,
      MobileNumber: mobileNumber,
      IP_Address: ipAddress,
      utm_source: utmSource,
    });

    return {
      ipAddress,
      utmSource,
      submittedVia: "google-script",
    };
  }
}
