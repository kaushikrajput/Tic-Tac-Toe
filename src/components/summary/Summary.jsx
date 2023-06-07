import React, { useState, useEffect } from "react";
import "./summary.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Summary = () => {
  const { id } = useParams();

  const [match, setMatch] = useState();
  useEffect(() => {
    (async () => {
      let { data } = await axios.get(
        `https://api.tvmaze.com/search/shows?q=all/${id}`
      );
      setMatch(data);
      console.log(data);
    })();
  }, []);

  return <div className="summary-section">{id}</div>;
};

export default Summary;
