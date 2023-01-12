import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const { data } = await axios.get(
      "https://staging.algym.com/api/v1/gyms?lat=31.2443512&long=29.9715685&page_number=1&page_size=10&search_diameter=1000"
    );
    setstate(data.data);
  }

  return (
    <div>
      <h1>Gyms list</h1>
      <ol>
        {state?.map((item) => (
          <li key={item.id}>
            <Link to={"/gymdetails/" + item.id}>{item.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HomePage;
