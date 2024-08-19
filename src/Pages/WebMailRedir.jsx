import { useEffect } from "react";

const WebMailRedir = () => {
  useEffect(() => {
    // Redirect to the webmail URL after component mounts
    window.location.href = "https://innjoybackup.com.bamenda.com.ng/webmail";
  }, []);

  return <p>Redirecting to webmail...</p>;
};

export default WebMailRedir;
