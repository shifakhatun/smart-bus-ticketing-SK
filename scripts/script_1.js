let count =0;
let totalPrice=0;
let arr=[];
const allbtn=document.getElementsByClassName("add-seat");

for(const btn of allbtn){
    btn.addEventListener("click", function (event){
        count++;
       //seatname added
    const seatName=event.target.innerText;
    const seatContainer=document.getElementById("seat-Container");
       const p=document.createElement("p");
       p.innerText=seatName;
       seatContainer.appendChild(p);
       // class added
       document.getElementById("seats-left").innerText=(40-count);
       
       const coachType=document.getElementById("coach-type");
       const coachCategory=document.createElement("p");
       coachCategory.innerText="economy";
       coachType.appendChild(coachCategory);

       //price set up
       
      
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


    event.target.style.backgroundColor = "green";
    if(count==4){
        alert("don't select again");
        // const btn1=document.getElementsByClassName("add-seat");
        // btn1.setAttribute("disabled", true);
        //document.getElementById("seatAvailable").innerHTML="";
        
    }
    event.target.setAttribute("disabled", true);

    ///coupon select
    const couponBtn=document.getElementById("coupon-btn");
    couponBtn.addEventListener("click", function(){
        const couponCode=document.getElementById("coupon-field").value;
        // const couponElement2=document.getElementById("coupon-field").value;
    //    const couponCode1=couponElement1.split(" ").join("").toUpperCase();
    //    const couponCode2=couponElement1.split(" ").join("").toUpperCase();
       //console.log(couponElement);
    if(count==4){
        if(couponCode==="NEW15"){
              const discountAmount=totalPrice*(15/100); //15% discount
              const grandTotal=document.getElementById("grand-total");
              grandTotal.innerText=(totalPrice-discountAmount);
              document.getElementById("coupon-field").value="";

        }
        
    }
2
    })


    })
}