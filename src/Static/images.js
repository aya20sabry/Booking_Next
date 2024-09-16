import Luxor from "@/app/Public/Cities/Luxor.jpg";
import Cairo from "@/app/Public/Cities/Cairo.jpg";
import Aswan from "@/app/Public/Cities/Aswan.jpg";
import Hurghada from "@/app/Public/Cities/Hurghada.jpg";
import Sharm from "@/app/Public/Cities/Sharm.jpg";
import MarsaMatruh from "@/app/Public/Cities/Matruh.jpg";
import MarsaAlam from "@/app/Public/Cities/MarsaAlam.jpg";
import Alexandria from "@/app/Public/Cities/Alex.jpg";
import Dahab from "@/app/Public/Cities/Dahab.jpg";
import Siwa from "@/app/Public/Cities/Siwa.jpg";
import Hotels from "@/app/Public/Browse/Hotels.jpeg";
import Apartments from "@/app/Public/Browse/Apartments.jpeg";
import Villas from "@/app/Public/Browse/Villas.jpeg";
import Resorts from "@/app/Public/Browse/Resorts.jpeg";
import Hostels from "@/app/Public/Browse/Hostels.jpeg";
import Motels from "@/app/Public/Browse/Motels.jpeg";
import BnBs from "@/app/Public/Browse/BnBs.jpeg";
import Boats from "@/app/Public/Browse/Boats.jpeg";
import Cabins from "@/app/Public/Browse/Cabins.jpeg";
import Campsites from "@/app/Public/Browse/Campsites.jpeg";
import HolidayHomes from "@/app/Public/Browse/HolidayHomes.jpeg";
import HolidayParks from "@/app/Public/Browse/HolidayParks.jpeg";
import Homestays from "@/app/Public/Browse/Homestays.jpeg";
import LuxuryTents from "@/app/Public/Browse/LuxuryTents.jpeg";
import Alam from "@/app/Public/Cities/Alam.jpg";
import Alex from "@/app/Public/Cities/Alexandria.jpg";
import London from "@/app/Public/Cities/Europe/London.jpg";
import Paris from "@/app/Public/Cities/Europe/Paris.jpg";
import Rome from "@/app/Public/Cities/Europe/Rome.jpg";
import Athens from "@/app/Public/Cities/Europe/Athens.jpg";
import Berlin from "@/app/Public/Cities/Europe/Berlin.jpg";
import Barcelona from "@/app/Public/Cities/Europe/Barcelona.jpg";
import Venice from "@/app/Public/Cities/Europe/Venice.jpg";
import Malaga from "@/app/Public/Cities/Europe/Malaga.jpg";
import Istanbul from "@/app/Public/Cities/Europe/Istanbul.jpg";
import Hamburg from "@/app/Public/Cities/Europe/Hamburg.jpg";
import Amsterdam from "@/app/Public/Cities/Europe/Amsterdam.jpg";
import Lisbon from "@/app/Public/Cities/Europe/Lisbon.jpg";

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
  "Guest Houses": Guesthouses,
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
