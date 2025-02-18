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
console.log(validEmail(".jhankar@hero.com"));
