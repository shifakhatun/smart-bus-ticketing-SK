//console.log("connected")

const seatNo=document.querySelectorAll(".A");
//console.log(seatNo);
for (let index = 0; index < seatNo.length; index++) {
    const seatNumber = seatNo[index];  
    //console.log(seatNumber)
    seatNumber.addEventListener("click", function(){
        //console.log("clicked");
        //get the text
        const title=seatNumber.querySelector("p");
        console.log(title.innerText);
    })
}
// function Selected(){
    
   
// }