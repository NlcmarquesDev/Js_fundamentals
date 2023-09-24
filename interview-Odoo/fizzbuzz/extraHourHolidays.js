// first i need to check if the day in array are on the week working days?
//create a vairable extra hours
//if the holiday is a working day send to the variable 2 hour extra
// return all the extra hour they need to do

function countHours(year, holidays) {
  let extraHours = 0;

  for (let i = 0; i < holidays.length; i++) {
    const [month, day] = holidays[i].split("/");

    const dateObj = new Date(year, month - 1, day);
    console.log(dateObj.getDay());

    if (dateObj.getDay() >= 1 && dateObj.getDay() < 6) {
      extraHours = extraHours + 2;
    }
  }

  return extraHours;
}
const year = 2022;
const holidays = ["01/16", "04/25", "12/01"]; // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.
console.log(countHours(year, holidays));
// 2 days -> 4 extra h
