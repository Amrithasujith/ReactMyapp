import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name,region,flag")
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="wrapper">
     <h1 className="heading"> Home Page</h1>
      <ul>
        {user.map((item) => (
          <div className="datas">
            <li className="list" key={item}>NAME{item.name}</li>
           
            <div className="imgWrapper">
             
              <img src={item.flag} className="bannerimg" />
            </div>
            <div>{item.region}</div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Home;
