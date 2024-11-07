import { TbBeach } from "react-icons/tb";
import { LiaCitySolid } from "react-icons/lia";
import { LuBike } from "react-icons/lu";

export const navigationCategories = [
  {
    id: "beach",
    icon: TbBeach,
    text: "Beach",
    destinations: [
      "Hurghada",
      "Sharm el-Sheikh",
      "Dahab",
      "Marsa Alam",
      "Alexandria",
    ],
  },
  {
    id: "city",
    icon: LiaCitySolid,
    text: "City",
    destinations: ["Cairo", "Luxor", "Aswan", "Port Said"],
  },
  {
    id: "outdoors",
    icon: LuBike,
    text: "Outdoors",
    destinations: [
      "Siwa Oasis",
      "Fayoum",
      "Saint Catherine",
      "Ras Mohammed",
      "El Gouna",
    ],
  },
];
