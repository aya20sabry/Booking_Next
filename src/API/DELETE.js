export async function DeleteBooking(id) {
  const res = await fetch(`http://localhost:3000/bookings/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    console.error("Failed to delete booking:", res.statusText);
    return null;
  }
  return res.json();
}
