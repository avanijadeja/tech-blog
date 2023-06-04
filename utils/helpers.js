// helpers.js file to format time and date
module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    // get date and format date's month year
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
};
