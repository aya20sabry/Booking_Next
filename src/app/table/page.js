import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Image from "next/image";
import { IoPersonSharp } from "react-icons/io5";
import "./page.css";

import only1 from "../../public/only1.png";
import bed1 from "../../public/bed1.png";
import wifi from "../../public/wifi.png";
import m from "../../public/24.png";
import balcony from "../../public/balcony.png";
import sea from "../../public/sea.png";
import Air from "../../public/Air.png";
import bathroom from "../../public/bathroom.png";
import minibar from "../../public/minibar.png";
import true1 from "../../public/true1.png";
import cup from "../../public/cup.png";
import Genuis1 from "../../public/Genuis1.png";
import discount from "../../public/discount.png";
import beds from "../../public/beds.png";

const cellStyles = {
  backgroundColor: "#4C76B2",
  color: "white",
  fontWeight: "bold",
  borderBottom: "2px solid #5BBAFF",
  borderRight: "1px solid #5BBAFF",
};

const specialCellStyles = {
  ...cellStyles,
  backgroundColor: "#003B95",
};
const styles = {
  container: {
    flexWrap: "wrap",
    gap: "8px",
    mt: 1,
    borderTop: "2px solid #E7E7E7",
  },
  itemContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    mt: 1,
  },
  item: {
    display: "flex",
    alignItems: "center",
  },
};
const rooms = [
  {
    type: "Double Room",
    availability: "Only 2 rooms left on our site",
    bedType: "1 extra-large double bed",
    features: [
      "24 m²",
      "• Balcony • Sea view",
      "• Air conditioning • Minibar",
      "• Free WiFi",
    ],
    oldPrice: "EGP 2,912",
    currentPrice: "EGP 2,329",
    taxesAndFees: "+EGP 349 taxes and fees",
    deals: ["20% off", "Late Escape Deal"],
    choices: [
      "Good breakfast included",
      "Free cancellation before October 14, 2024",
      "Pay nothing until October 11, 2024",
      "Genius discount may be available",
    ],
    hasRoom: true,
  },
  {
    type: "Deluxe Triple Room",
    availability: "Only 4 rooms left on our site",
    bedType: "3 single beds",
    features: [
      "24 m²",
      "• Balcony • Sea view",
      "• Air conditioning • Minibar",
      "• Free WiFi",
    ],
    oldPrice: "EGP 2,475",
    currentPrice: "EGP 1,980",
    taxesAndFees: "+EGP 297 taxes and charges",
    deals: ["20% off", "Late Escape Deal"],
    choices: [
      "Good breakfast included",
      "Free cancellation before October 14, 2024",
      "Pay nothing until October 11, 2024",
      "Genius discount may be available",
    ],
    hasRoom: true,
  },
  {
    type: "Deluxe Double Room",
    availability: " Only 7 rooms left on our site",
    bedType: "1 large double bed",
    features: [
      "24 m²",
      "• Balcony • Sea view",
      "• Air conditioning • Minibar",
      "• Free WiFi",
    ],
    oldPrice: "EGP 3,397",
    currentPrice: "EGP 2,718",
    taxesAndFees: "+EGP 408 taxes and charges",
    deals: ["20% off", "Late Escape Deal"],
    choices: [
      "Good breakfast included",
      "Free cancellation before October 14, 2024",
      "Pay nothing until October 11, 2024",
      "Genius discount may be available",
    ],
    hasRoom: true,
  },
];

const RoomDetails = ({ room }) => (
  <TableCell component="th" scope="row" className="table-cell">
    <Typography className="room-title">{room.type}</Typography>
    <Box className="room-info">
      <Image src={only1} height={30} width={15} alt="Room availability" />
      <Typography variant="body2" className="room-info-text">
        {room.availability}
      </Typography>
    </Box>
    <Box className="room-info">
      <Typography variant="body2">{room.bedType}</Typography>
  

      <Image src={bed1} height={30} width={40} alt="Bed icon" />
    </Box>
    <Box className="room-details">
      <Image src={m} height={20} width={16} alt="Size icon" />
      <Typography variant="body2">{room.features[0]}</Typography>
      <Image src={balcony} height={20} width={16} alt="Balcony icon" />
      <Typography variant="body2">Balcony</Typography>
      <Image src={sea} height={20} width={30} alt="Sea view icon" />
      <Typography variant="body2">Sea view</Typography>
    </Box>
    <Box className="room-feature">
      <Image src={Air} height={30} width={15} alt="Air conditioning icon" />
      <Typography variant="body2">Air condition</Typography>
    </Box>
    <Box className="room-feature">
      <Image src={bathroom} height={30} width={16} alt="Bathroom icon" />
      <Typography variant="body2">Private bathroom</Typography>
      <Image src={minibar} height={30} width={16} alt="Minibar icon" />
      <Typography variant="body2">Minibar</Typography>
    </Box>
    <Box className="room-feature">
      <Image src={wifi} height={30} width={16} alt="WiFi icon" />
      <Typography variant="body2">Free WiFi</Typography>
    </Box>
    {room.hasRoom ? (
      <>
        {" "}
        <Box sx={styles.container}>
          <Box sx={styles.itemContainer}>
            <Image src={true1} height={30} width={15} alt="true" />
            <Typography variant="body2" sx={styles.item}>
              Free toiletries
            </Typography>
            <Image src={true1} height={30} width={15} alt="true" />
            <Typography variant="body2" sx={styles.item}>
              Toilet
            </Typography>
          </Box>
          {/* ////////2 */}
          <Box sx={styles.itemContainer}>
            <Image src={true1} height={30} width={15} alt="true" />
            <Typography variant="body2" sx={styles.item}>
              Bath or shower
            </Typography>
            <Image src={true1} height={30} width={15} alt="true" />
            <Typography variant="body2" sx={styles.item}>
              Towels
            </Typography>
            <Typography variant="body2" sx={styles.item}>
              Linen
            </Typography>
          </Box>
          {/* /////////3 */}
          <Box sx={styles.itemContainer}>
            <Image src={true1} height={30} width={15} alt="true" />
            <Typography variant="body2" sx={styles.item}>
              Private entrance
            </Typography>
          </Box>
          {/* /////////4 */}
          <Box sx={styles.itemContainer}>
            <Image src={true1} height={30} width={15} alt="true" />
            <Typography variant="body2" sx={styles.item}>
              Interconnected room(s) available
            </Typography>
          </Box>
          <Box sx={styles.itemContainer}>
            <Image src={true1} height={30} width={15} alt="true" />
            <Typography variant="body2" sx={styles.item}>
              Upper floors accessible by stairs only
            </Typography>
          </Box>
          <Box sx={styles.itemContainer}>
            <Image src={true1} height={30} width={15} alt="true" />
            <Typography variant="body2" sx={styles.item}>
              Toilet paper
            </Typography>
          </Box>
        </Box>
      </>
    ) : null}
  </TableCell>
);

const BasicTable = () => {
  return (
    <TableContainer
      sx={{
        padding: "0 350px",
        margin: "0",
        fontFamily: "BlinkMacSystemFont",
        fontSize: "11.9px",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="room table">
        <TableHead>
          <TableRow>
            <TableCell sx={cellStyles}>Room type</TableCell>
            <TableCell align="right" sx={cellStyles}>
              Number of guests
            </TableCell>
            <TableCell align="left" sx={specialCellStyles}>
              Today's Price
            </TableCell>
            <TableCell align="left" sx={cellStyles}>
              Your choices
            </TableCell>
            <TableCell
              align="left"
              sx={{ ...cellStyles, padding: "8px", width: "10px" }}
            >
              Select amount
            </TableCell>
            <TableCell align="right" sx={cellStyles}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rooms.map((room, index) => (
            <TableRow key={index}>
              <RoomDetails room={room} />
              <TableCell align="left" className="table-cell">
                <Box className="person-icons">
                  <IoPersonSharp />
                  <IoPersonSharp />
                </Box>
                {index === 0 ||
                  (index === 2 && (
                    <Box className="break1">
                      <IoPersonSharp className="person" />
                    </Box>
                  ))}
                {index === 1 && (
                  <Box className="break1">
                    <IoPersonSharp className="person" />
                    <IoPersonSharp className="person" />
                    <IoPersonSharp className="person" />
                  </Box>
                )}
              </TableCell>
              <TableCell align="left" className="table-cell">
                <Typography className="price-strike">
                  {room.oldPrice}
                </Typography>
                <Typography className="price-bold">
                  {room.currentPrice}
                </Typography>
                <Typography variant="h6" className="taxes-fees">
                  {room.taxesAndFees}
                </Typography>
                <Button variant="p" className="late-escape-deal">
                  {room.deals[0]}
                </Button>
                <Button variant="p" className="late-escape-deal">
                  {room.deals[1]}
                </Button>
              </TableCell>
              <TableCell align="left" className="table-cell">
                <Box className="amenities-info">
                  <Typography className="amenity-item">
                    <Image src={cup} height={30} width={15} />
                    Included Good breakfast
                  </Typography>
                  <Typography className="amenity-item">
                    <Image src={true1} height={30} width={15} />
                    Free cancellation before October 14, 2024
                  </Typography>
                  <Typography variant="body2" className="payment-info">
                    • Pay nothing until October 11, 2024
                  </Typography>
                  <Typography className="amenity-item">
                    <Image src={discount} height={10} width={10} />
                    <Image src={Genuis1} height={60} width={40} />
                    Genius discount may be available
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="right" className="table-cell">
                <Box className="select-box">
                  <select>
                    <option value="(EGP,459)">0</option>
                    <option value="(EGP,859)">1</option>
                    <option value="(EGP,159)">2</option>
                  </select>
                </Box>
              </TableCell>
              {index === 0 && (
                <TableCell>
                  <Box className="reserve-box">
                    <Button variant="contained" color="primary">
                      I'll reserve
                    </Button>
                    <Typography variant="body2" className="confirmation-info">
                      Confirmation is immediate
                    </Typography>
                  </Box>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
