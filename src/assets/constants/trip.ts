import trip1 from "../img/trip-1.jpg";
import trip2 from "../img/trip-2.jpg";
import trip3 from "../img/trip-3.jpg";
import trip4 from "../img/trip-4.jpg";

const TRIPS = [
  {
    name: "Rome City Tour",
    type: "Guided Tour",
    image: trip1,
    price: "€99/Day",
    ratings: 5,
    duration: "7 Days",
  },
  {
    name: "Paris City Tour",
    type: "Guided Tour",
    image: trip2,
    price: "95/Day",
    ratings: 5,
    duration: "7 Days",
  },
  {
    name: "Barcelona City Tour",
    type: "Guided Tour",
    image: trip3,
    price: "€89/Day",
    ratings: 5,
    duration: "7 Days",
  },
  {
    name: "Budapest City Tour",
    type: "Guided Tour",
    image: trip4,
    price: "€89/Day",
    ratings: 5,
    duration: "7 Days",
  },
] as const;

export default TRIPS;
