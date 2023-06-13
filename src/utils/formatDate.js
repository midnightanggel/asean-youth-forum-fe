export const formatDate = (dateString) => {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };
  const formattedDateTime = new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDateTime;
};
