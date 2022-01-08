import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
//import "./styles.css";

export default function App() {
  const [data, setData] = useState([0]);

  useEffect(() => {
    Tabletop.init({
    key: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQe412mPe3e2IDJco0b1GpPgsfx3VqNfUH_VGdUziRCSe0zEgnyjLvCxmuFrRVdJWVa14-aZoahdfX2/pubhtml",
    
    callback: function(data, tabletop) { 
        console.log(data)
      },
      simpleSheet: true,
    })
   
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, [key]);

  return (
    <>
      <h1>data from google sheet</h1>
      <ul>
        {data.map((item, i) => (
          <Fragment key={i}>
            <li>Date -- {item.Date}</li>
            <li>Email - {item.Activity}</li>
            <li>Main Contributor - {item.MainContributor}</li>
            <br />
          </Fragment>
        ))}
      </ul>
    </>
  );
}
