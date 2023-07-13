import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TopScroll = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

};

export default TopScroll;