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




//console.log(price);
////set table data
// const tableData=document.querySelector("tbody");
// //console.log(tableData)
// const data=tableData.querySelectorAll("tr");
// //console.log(data[0]);
// const data1=document.createElement("td");
// //console.log(data1)
// data[0].appendChild(data1);
// // data[0].innerText=title;
// // data[1].innerText="economy";
// // data[2].innerText=price;
// data1.innerText=title;
// const data2=document.createElement("td");
// data2.innerText="economy";
// console.log(data)

    })
}



// function Selected(){
    
   
// }