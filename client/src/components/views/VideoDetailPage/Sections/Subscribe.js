import Axios from 'axios';
import React from "react";

export default function Subscribe() {

    useEffect(() => {

        let variable
        
        Axios.post('/api/subscribe/subscribeNumber',)

    }, [])


  return (
    <div>
      <button
        style={{
          backgroundColor: "#CC0000",
          borderRadius: "4px",
          color: "white",
          padding: "10px 16px",
          fontWeight: "500",
          fontSize: "1rem",
          textTransform: "uppercase",
        }}
      >
        0 Subscribe
      </button>
    </div>
  );
}
