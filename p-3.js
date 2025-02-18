
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
  console.log(electionResult([]))