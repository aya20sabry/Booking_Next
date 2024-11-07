export const API_URL = "http://localhost:3000";

export async function GetHotels() {
  const res = await fetch(`${API_URL}/host`);
  const data = await res.json();
  return data;
}

export async function GetHotelID(id) {
  const res = await fetch(`${API_URL}/host/${id}`);
  const data = await res.json();
  return data;
}

export async function GetHotelAmenities(id) {
  const res = await fetch(`${API_URL}/amenities/hotel/${id}`);
  const data = await res.json();
  return data;
}

export async function GetHotelReviews(id) {
  const res = await fetch(`${API_URL}/reviews/hotel/${id}`);
  const data = await res.json();
  return data;
}

export async function GetHotelRooms(id) {
  const res = await fetch(`${API_URL}/rooms/hotel/${id}`);
  const data = await res.json();
  return data;
}

export async function GetRoom(id) {
  const res = await fetch(`${API_URL}/rooms/${id}`);
  const data = await res.json();
  return data;
}

export async function GetUserBookings(id) {
  const res = await fetch(`${API_URL}/bookings/user/${id}`);
  const data = await res.json();
  return data;
}

export async function GetUser(id) {
  const res = await fetch(`${API_URL}/user/${id}`);
  const data = await res.json();
  return data;
}
