
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
console.log(isBestFriend(
  { name:"kashem", roll: 11, bestFriend: 2}
,    { name:"kashem", roll: 2, bestFriend: 11}
   
))
