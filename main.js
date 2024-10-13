console.clear();
// first way
// function getMonthName(monthNumber) {
//   switch (monthNumber) {
//     case 1:
//       return "january";
//     case 2:
//       return "february";
//     case 3:
//       return "march";
//     case 4:
//       return "april";
//     case 5:
//       return "may";
//     case 6:
//       return "june";
//     case 7:
//       return "july";
//     case 8:
//       return "august";
//     case 9:
//       return "september";
//     case 10:
//       return "october";
//     case 11:
//       return "november";
//     case 12:
//       return "december";
//   }
// }
// console.log(getMonthName(3));

// // second way

// const monthNames = {
//   1: "january",
//   2: "february",
//   3: "march",
//   4: "april",
//   5: "may",
//   6: "june",
//   7: "july",
//   8: "august",
//   9: "september",
//   10: "october",
//   11: "november",
//   12: "december",
// };
// function getMonthName(monthNumber) {
//   return monthNames[monthNumber] || "unknown";
// }
// console.log(getMonthName(3));
console.clear();
const word = "patel";
for (let char of word) {
  const y = word.slice(0, 1).toUpperCase();
  const x = word.slice(1);
  console.log(`${y}${x}`);
}
