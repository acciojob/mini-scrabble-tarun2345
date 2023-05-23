//your code here
let input = document.getElementById("evaluatedText")

input.addEventListener("keyup",()=>{
  let h3 = document.getElementById("letterCount");
  h3.innerText = input.value.length;
})