// export const getSavedPromIDs = () => {
//   const savedPromIds = localStorage.getItem("saved_proms")?
//   JSON.parse(localStorage.getItem("saved_proms")) : [];

//   return savedPromIds;
// }

// export const savePromId = (promArr) => {
//   if (promArr.length) {
//     localStorage.setItem("saved_proms", JSON.stringify(promArr));
//   } else {
//    localStorage.removeItem("saved_proms");
//   }
// };