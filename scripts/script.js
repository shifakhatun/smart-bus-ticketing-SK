//console.log("connected")
let count=0;
let totalPrice=0;
let arr=[];
const seatNo=document.querySelectorAll(".A");
//console.log(seatNo);
for (let index = 0; index < seatNo.length; index++) {
    const seatNumber = seatNo[index];  
    //console.log(seatNumber)
    seatNumber.addEventListener("click", function (event){
        
        count=count+1;
        // const seatTitle=seatNumber.querySelector("p");
        // console.log(seatTitle)
        // seatTitle.style.backgroundColor='#1dd10066';
       
       //const title=seatNumber.querySelector("p").innerText;
       const title=event.target.innerText;
       if(arr.includes(title)===false){
        arr.push(title);
       }
       
       const seatContainer=document.getElementById("seat-Container");
       const p=document.createElement("p");
       p.innerText=title;
       seatContainer.appendChild(p);
      
        document.getElementById("seats-left").innerText=(40-count);
       
       const coachType=document.getElementById("coach-type");
       const coachCategory=document.createElement("p");
       coachCategory.innerText="economy";
       coachType.appendChild(coachCategory);      
       
       
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
        console.log(inputButton);
        event.target.parentNode.style.backgroundColor = "green";
        event.target.parentNode.style.pointerEvents="none";
       

    })
   
}



