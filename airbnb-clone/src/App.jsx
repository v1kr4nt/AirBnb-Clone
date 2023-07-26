import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.ttl}
        price={item.price}
      />
    );
  });

  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
