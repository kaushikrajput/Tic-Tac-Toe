import React, { useEffect, useState } from "react";
import "./movies.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Summary from "../summary/Summary";

const Movies = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      let { data } = await axios.get(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      setData(data);
    })();
  }, []);

  return (
    <div className="movies">
      <div className="container">
        <div className="text">
          <h2>Movies</h2>
        </div>
        <div className="movies-section">
          <div className="row">
            {data.map((item) => (
              <div className="col-lg-4" key={item.id}>
                <div className="items-card">
                  <img src={item.show.image.medium} alt="" />
                  <p>{item.show.premiered}</p>
                  <ul className="list-items">
                    <li className="list-item">Name - {item.show.name}</li>
                    <li className="list-item">
                      Genres - [{item.show.genres[0]} {item.show.genres[1]}{" "}
                      {item.show.genres[2]}]
                    </li>
                    <li className="list-item">
                      Language - {item.show.language}
                    </li>
                    {item.show.rating.average ? (
                      <li className="list-item">
                        Rating - {item.show.rating.average}
                      </li>
                    ) : (
                      <li className="list-item">
                        Rating - {item.show.rating.average}N/A
                      </li>
                    )}

                    <Link to={`/summary/${item.show.id}`}>
                      <button className="btn-style">
                        Summary <Summary  />
                      </button>
                    </Link>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
