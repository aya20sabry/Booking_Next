export async function PostBooking(bookingData) {
  try {
    console.log("Booking Data:", bookingData);
    console.log("Payment Amount:", Number(bookingData.payment.amount));

    const commissionRate = bookingData.commission?.rate || 0.05;
    bookingData.commission = {
      rate: commissionRate,
      amount: Number(bookingData.payment.amount) * commissionRate,
    };

    console.log("Final Booking Data:", bookingData);
  } catch (error) {
    console.error("Error in PostBooking:", error);
  }

  const res = await fetch(`http://localhost:3000/bookings`, {
    method: "POST",
    body: JSON.stringify(bookingData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    console.error("Failed to save booking:", res.statusText);
    return null;
  }

  return res.json();
}

export async function PostReview(reviewData, hotelId) {
  const res = await fetch(`http://localhost:3000/reviews/hotel/${hotelId}`, {
    method: "POST",
    body: JSON.stringify(reviewData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
