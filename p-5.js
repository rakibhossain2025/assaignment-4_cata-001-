
// function calculateWatchTime(time){
//   const hour= 60*60;
//   const min= 60;
//   let totalsTime =0;
//   let totalObject={hour:0, minute:0, second:0};
//   for (total of time){
//     totalsTime = totalsTime+total;
//   }
//   const hours=totalsTime/hour;
//   totalObject.hour=Math.floor(hours)

//   const remainingSec = totalsTime % hour;
//   const totalMin= Math.floor(remainingSec/min);
//   totalObject.minute=totalMin;

//   const totalSec= totalsTime%min
//   totalObject.second=totalSec

//   return totalObject
// }
// console.log(calculateWatchTime([1000, 2000, 725]))