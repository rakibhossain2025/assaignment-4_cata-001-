function cashOut(money){

  if(money<0 || typeof money !== "number"){
  
  return "Invalid";
  
  }
  
  let charge = money * 1.75/100;
  
  return charge;
  
  }
  
  function validEmail(email){
  
  let fc= ['-','_','@','.','+'];
  
  if(!email.includes('@') ||
  
  !email.endsWith('.com'))
  
  {
  
  return false;
  
  }
  
  else if (fc.includes(email.charAt(0))){
  
  return false;
  
  }
  
  else if (typeof email !== "string"){
  
  return "Invalid";
  
  }
  
  return true;
  
  }
  
  function electionResult(votes){
  
  let mango = 0;
  
  let banana =0;
  
  if(!Array.isArray(votes)){
  
  return "Invalid";
  
  }
  
  for (let item of votes){
  
  if (typeof item !=="string"){
  
  return "Invalid";
  
  }
  
  }
  
  for (i of votes ){
  
  if(i ==="mango"){
  
  mango++;
  
  }
  
  else if(i ==="banana"){
  
  banana++;
  
  }
  
  }
  
  if(mango>banana){
  
  return "Mango";
  
  }
  
  else if(mango===banana){
  
  return "Draw";
  
  }
  
  else{
  
  return "Banana";
  
  }
  
  }
  
  function isBestFriend(input1,input2){
  
  if(typeof input1 !=="object" ||typeof input2 !=="object"){
  
  return "Invalid";
  
  }
  
  if(input1.roll===input2.bestFriend && input2.roll===input1.bestFriend){
  
  return true
  
  }
  
  else{
  
  return false
  
  }
  
  }
  
  function calculateWatchTime(time){
  
  const hour= 60*60;
  
  const min= 60;
  
  let totalsTime =0;
  
  let totalObject={hour:0, minute:0, second:0};
  
  for (total of time){
  
  totalsTime = totalsTime+total;
  
  }
  
  const hours=totalsTime/hour;
  
  totalObject.hour=Math.floor(hours)
  
  const remainingSec = totalsTime % hour;
  
  const totalMin= Math.floor(remainingSec/min);
  
  totalObject.minute=totalMin;
  
  const totalSec= totalsTime%min
  
  totalObject.second=totalSec
  
  return totalObject
  
  }



  console.log(cashOut(2000))

  console.log(validEmail("ferdous@gmail.com"))

  console.log(electionResult(["mango", "banana", "mango", "banana", "mango"]))

  console.log(isBestFriend({ name: "hashem", roll: 1, bestFriend: 2 },
    { name: "kashem", roll: 2, bestFriend: 1 }
    ) )

  console.log(calculateWatchTime([100, 99, 119, 300]))
