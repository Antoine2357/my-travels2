// src/Quote.js
import React from "react";

const travels = [
  {
    destination:
      "Voyage 1",
    country: "Pays Radom",
    distance : "X km" ,
    photo:
      "https://images-na.ssl-images-amazon.com/images/I/91HTCI%2Bho-L._SX466_.jpg"
  },
  {
    destination:
      "Voyage 2",
    country: "Pays Radom",
    distance : "X km" ,
    photo:
    "https://images-na.ssl-images-amazon.com/images/I/91HTCI%2Bho-L._SX466_.jpg"
  },
  {
    destination:
      "Voyage 3",
    country: "Pays Radom",
    distance : "X km" ,
    photo:
    "https://images-na.ssl-images-amazon.com/images/I/91HTCI%2Bho-L._SX466_.jpg"
  },
  {
    destination:
      "Voyage 4",
    country: "Pays Radom",
    distance : "X km" ,
    photo:
    "https://images-na.ssl-images-amazon.com/images/I/91HTCI%2Bho-L._SX466_.jpg"
  },
  {
    destination:
      "Voyage 5",
    country: "Pays Random",
    distance : "X KM",
    photo:
    "https://images-na.ssl-images-amazon.com/images/I/91HTCI%2Bho-L._SX466_.jpg"
  },
]


const Travel = ({ destination, country, photo , distance }) => (
  <figure>
    <h1>{destination}</h1>
    <img src={photo} alt={destination} />
    <figcaption>
      <h2>{country}</h2>
      <h3>{distance}</h3>
    </figcaption>
  </figure>
);

const Travels = () => (
  <div>
    {travels.map(travel => (
  <Travel destination={travel.destination} photo={travel.photo} country={travel.country} distance={travel.distance}/>
))}
  </div>
);

export default Travels;