var dateofbirth = document.querySelector("#Date-of-birth")
var lucky  = document.querySelector("#lucky-number")
var btn = document.querySelector(".check-btn")
var output = document.querySelector("#Out-put")



function compareNumber(sum,lucky){
  if(sum%lucky===0){
  
    output.innerText = "Your Birthday is Lucky Wow 🤩🚀";
  }
  else{
    output.innerText = "Your Birthday Is Not Lucky But You Are Special One 👑 ";
  }
}

function checkbirthdaybutton() {
  const dob = dateofbirth.value;
  
  const sum = calculateSum(dob)
  if(sum&&dob)
  compareNumber(sum,lucky.value)
  else
    output.innerText = "Please fill both of side";
  
}

function calculateSum(dob){
dob = dob.replaceAll("-","");
  let sum  = 0;
  for(let i=0;i<dob.length;i++){
    sum = sum + Number(dob.charAt(i))
  }
  return sum
}

btn.addEventListener("click", checkbirthdaybutton)