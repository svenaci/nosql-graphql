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

  return (
    <div className="App">
      <h1>My hotels</h1>
      {hotels?.map((hotel) => (
        <div key={hotel.id} className="hotel">
          <h1>{hotel.name}</h1>
          <p>{hotel.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
