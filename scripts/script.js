//console.log("connected")
let count=0;
let totalPrice=0;
const seatNo=document.querySelectorAll(".A");
//console.log(seatNo);
for (let index = 0; index < seatNo.length; index++) {
    const seatNumber = seatNo[index];  
    //console.log(seatNumber)
    seatNumber.addEventListener("click", function(){
        count=count+1;
       const title=seatNumber.querySelector("p").innerText;
       const seatContainer=document.getElementById("seat-Container");
       const p=document.createElement("p");
       p.innerText=title;
       seatContainer.appendChild(p);
      
        document.getElementById("seats-left").innerText=(40-count);
       
       const coachType=document.getElementById("coach-type");
       const coachCategory=document.createElement("p");
       coachCategory.innerText="economy";
       coachType.appendChild(coachCategory);      
       
            setBackgroundColorById(title);
        if(count>=4){
            alert("don't select again");
            
        
        }
        document.getElementById("seatCount").innerText=count; 

        
        
      //get the price
        const price=parseFloat(document.getElementById("seatPrice").innerText.split(" ")[0]);
        console.log(price);
        totalPrice+=price;
        console.log(totalPrice);
        const ticketPrice=document.getElementById("price");
        const priceList=document.createElement("p");
        priceList.innerText=price;
        ticketPrice.appendChild(priceList);
        document.getElementById("total-price").innerText=totalPrice;
        //disableElementById("input-button")
        const inputButton=document.getElementById("input-button")
        console.log(inputButton)


    })
}



// function Selected(){
    
   
// }