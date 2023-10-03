// const showEle = document.getElementById("show");
// const musiceHide =document.getElementById("music-content-hide")
// console.log(musiceHide);
// musiceHide.classList.add("hide-it")

// showEle.addEventListener("click",()=>{
//     if(musiceHide.classList.contains("hide-it")){
//         console.log('enter');
//         musiceHide.classList.remove("hide-it");
//     }else{
//         console.log('remove');
//         musiceHide.classList.add("hide-it");
//     }
// });



// let button = document.querySelector(".card");
// button.addEventListener("mouseup", (e) => {
//   let log = document.querySelector("#log");
//   switch (e.button) {
//     case 2:
//         log.textContent = "Right button clicked.";
//         break;
//   }
// });

const arraynum = [1, 2, 3, 4, 5];

const sum = 0;
let a = arraynum.map((num) => {

  return sum =sum + num;
 
});

console.log("Sum:",sum);


// function sumArray(array) {
//     let sum = 0; 
  
//   /*Go through each item in the array and execute this function which adds
//   each item to sum 
//   */
//     array.forEach(item => {
//       sum += item;
//     });
  
//     console.log(sum); 
//     return sum;
//   }
  
//   sumArray([1, 4, 0, 9, -3])

document.getElementById("backButton").addEventListener("click", goBack);
document.getElementById("forwardButton").addEventListener("click", goForward);

// Go back to the previous page
function goBack() {
  window.history.back();
}

// Go forward to the next page
function goForward() {
  window.history.forward();
}
