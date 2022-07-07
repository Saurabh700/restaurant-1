import { useEffect, useState } from "react";
import "./App.css";
import RestaurantCard from "./Components/RestaurantCard";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  function getdata() {
    setLoading(true);
    setError(false);
    return fetch("https://62c011a3c134cf51cec88cec.mockapi.io/restaurants/list")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <img src="https://i.imgur.com/lMeVwr7.png" alt="" />
      {data?.map((item) => (
        <RestaurantCard key={item.id} data={item} />
      ))}
    </div>
  );
}

export default App;
