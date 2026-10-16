import { useEffect } from "react";

export default function TrustmaryWidget() {
  useEffect(() => {
    const scriptId = "trustmary-widget-script";

    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://widget.trustmary.com/6mgWc3B2e";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return null;
}
