export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");

  const formattedDate = `${day} ${month}, ${year} at ${hours}:${minutes}`;

  return formattedDate;
};
