import { useEffect } from "react";

const WebMailRedir = () => {
  useEffect(() => {
    // Redirect to the webmail URL after component mounts
    window.location.href = "https://mtl101.truehost.cloud:2096/";
  }, []);

  return <p>Redirecting to webmail...</p>;
};

export default WebMailRedir;
