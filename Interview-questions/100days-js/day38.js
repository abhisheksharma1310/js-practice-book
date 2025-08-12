//find number days between two days

function findDays(date1, date2) {
  return new Date(date2).getDate() - new Date(date1).getDate();
}

console.log(findDays("2025-01-01", "2025-01-31"));
