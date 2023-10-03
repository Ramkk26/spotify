function search(){
    const input = document.getElementById("input-bar").value.toUpperCase();
    console.log(input);
 const card = document.getElementsByClassName("card-content");
    console.log(card);
    for(i=0;i<card.length;i++){
        const title=card[i].querySelector("h3.cardtitle").innerHTML.toUpperCase();
        console.log(title)
        if(title.indexOf(input)>-1){
card[i].style.display="";
        }else{
            card[i].style.display="none"; 
        }
    }
}

// function search() {
//     const input = document.getElementById("input-bar").value.toUpperCase();
//     console.log(input);
  
//     const cards = Array.from(document.getElementsByClassName("card-content"));
//     console.log(cards);
  
//     const filteredCards = cards.filter((card) => {
//       const title = card.querySelector("h3.cardtitle").innerHTML.toUpperCase();
//       return title.includes(input);
//     });
  
//     console.log(filteredCards);
  
//     cards.forEach((card) => {
//       if (filteredCards.includes(card)) {
//         card.style.display = " ";
//       } else {
//         card.style.display = "none";
//       }
//     });
//   }
  