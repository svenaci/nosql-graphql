import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [hotels, setHotels] = useState(null);

  const fetchData = async () => {
    const response = await fetch(`.netlify/functions/getHotels`);
    const responseBody = await response.json();
    setHotels(responseBody.data.hotel_data.values);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(hotels);

  return <div className="App"></div>;
};

export default App;
