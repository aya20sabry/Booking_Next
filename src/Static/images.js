import Luxor from "@/Public/Cities/Luxor.jpg";
import Cairo from "@/Public/Cities/Cairo.jpg";
import Aswan from "@/Public/Cities/Aswan.jpg";
import Hurghada from "@/Public/Cities/Hurghada.jpg";
import Sharm from "@/Public/Cities/Sharm.jpg";
import MarsaMatruh from "@/Public/Cities/Matruh.jpg";
import MarsaAlam from "@/Public/Cities/MarsaAlam.jpg";
import Alexandria from "@/Public/Cities/Alex.jpg";
import Dahab from "@/Public/Cities/Dahab.jpg";
import Siwa from "@/Public/Cities/Siwa.jpg";
import Hotels from "@/Public/Browse/Hotels.jpeg";
import Apartments from "@/Public/Browse/Apartments.jpeg";
import Villas from "@/Public/Browse/Villas.jpeg";
import Resorts from "@/Public/Browse/Resorts.jpeg";
import Hostels from "@/Public/Browse/Hostels.jpeg";
import Motels from "@/Public/Browse/Motels.jpeg";
import BnBs from "@/Public/Browse/BnBs.jpeg";
import Boats from "@/Public/Browse/Boats.jpeg";
import Cabins from "@/Public/Browse/Cabins.jpeg";
import Campsites from "@/Public/Browse/Campsites.jpeg";
import HolidayHomes from "@/Public/Browse/HolidayHomes.jpeg";
import HolidayParks from "@/Public/Browse/HolidayParks.jpeg";
import Homestays from "@/Public/Browse/Homestays.jpeg";
import LuxuryTents from "@/Public/Browse/LuxuryTents.jpeg";
import Alam from "@/Public/Cities/Alam.jpg";
import Alex from "@/Public/Cities/Alexandria.jpg";
import London from "@/Public/Cities/Europe/London.jpg";
import Paris from "@/Public/Cities/Europe/Paris.jpg";
import Rome from "@/Public/Cities/Europe/Rome.jpg";
import Athens from "@/Public/Cities/Europe/Athens.jpg";
import Berlin from "@/Public/Cities/Europe/Berlin.jpg";
import Barcelona from "@/Public/Cities/Europe/Barcelona.jpg";
import Venice from "@/Public/Cities/Europe/Venice.jpg";
import Malaga from "@/Public/Cities/Europe/Malaga.jpg";
import Istanbul from "@/Public/Cities/Europe/Istanbul.jpg";
import Hamburg from "@/Public/Cities/Europe/Hamburg.jpg";
import Amsterdam from "@/Public/Cities/Europe/Amsterdam.jpg";
import Lisbon from "@/Public/Cities/Europe/Lisbon.jpg";

export const imageMap = {
  Aswan,
  Luxor,
  Cairo,
  Hurghada,
  "Sharm el-Sheikh": Sharm,
  "Marsa Alam": MarsaAlam,
  Alexandria,
  Dahab,
  Siwa,
  "Marsa Matruh": MarsaMatruh,
};

export const BrowseImagesMap = {
  Hotels: Hotels,
  Apartments: Apartments,
  Villas: Villas,
  Resorts: Resorts,
  Hostels: Hostels,
  Motels: Motels,
  "B&Bs": BnBs,
  Boats: Boats,
  Cabins: Cabins,
  Campsites: Campsites,
  "Holiday Homes": HolidayHomes,
  "Holiday Parks": HolidayParks,
  Homestays: Homestays,
  "Luxury Tents": LuxuryTents,
};

export const destinations = [
  { name: "Cairo", things: 7056, image: imageMap.Cairo },
  {
    name: "Sharm El Sheikh",
    things: 978,
    image: imageMap["Sharm el-Sheikh"],
  },
  { name: "Aswan", things: 1013, image: imageMap.Aswan },
  { name: "Alexandria", things: 172, image: Alex },
  { name: "Hurghada", things: 2461, image: imageMap.Hurghada },
  { name: "Marsa Alam", things: 475, image: Alam },
];
export const AttractionsPage = [
  { name: "London", things: 2419, image: London },
  { name: "Istanbul", things: 1671, image: Istanbul },
  { name: "Paris", things: 2908, image: Paris },
  { name: "Hamburg", things: 298, image: Hamburg },
  { name: "Amsterdam", things: 1238, image: Amsterdam },
  { name: "Lisbon", things: 2536, image: Lisbon },
  { name: "Rome", things: 4550, image: Rome },
  { name: "Athens", things: 1898, image: Athens },
  { name: "Berlin", things: 740, image: Berlin },
  { name: "Barcelona", things: 1667, image: Barcelona },
  { name: "Venice", things: 1125, image: Venice },
  { name: "Málaga", things: 592, image: Malaga },
];
