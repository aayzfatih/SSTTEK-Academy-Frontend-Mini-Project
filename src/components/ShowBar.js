import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ShowBar({ children }) {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    if (location.pathname === "/") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);
  return <div>{showNavbar && children}</div>;
}
export default ShowBar;
