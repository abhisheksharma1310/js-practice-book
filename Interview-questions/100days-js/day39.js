function calculateAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjust if birthday hasn't occurred yet this year
  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  // Adjust days if negative
  if (days < 0) {
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }

  return `You are ${years} years, ${months} months, and ${days} days old.`;
}

console.log(calculateAge("1998-10-13"));
