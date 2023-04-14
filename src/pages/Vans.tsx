import React, { useState, useEffect } from "react";

function Home() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
  });

  return;
}

export default Home;
