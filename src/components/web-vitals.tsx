import { useReportWebVitals } from "next/web-vitals";

// Currently not working will update in future. At current stage we are just importing the script for the web vital system in the layout

export default function WebVitals() {
  useReportWebVitals((metric) => {
    const body = JSON.stringify(metric);
    const url = process.env.NEXT_PUBLIC_WEB_VITALS_URL as string;

    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else {
      fetch(url, { body, method: "POST", keepalive: true });
    }
  });
}
