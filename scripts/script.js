//console.log("connected")
let count=0;
let price=0;
const seatNo=document.querySelectorAll(".A");
//console.log(seatNo);
for (let index = 0; index < seatNo.length; index++) {
    const seatNumber = seatNo[index];  
    //console.log(seatNumber)
    seatNumber.addEventListener("click", function(){
        //get the text
        const title=seatNumber.querySelector("p").innerText;
        count++;
        //console.log(title.innerText);
        setBackgroundColorById(title);
        if(count>=4){
            alert("don't select again");
           
        }
        console.log('count', count);
      //get the price
const price=parseFloat(document.getElementById("seatPrice").innerText.split(" ")[0]);
// const totalPrice=price++;
// console.log(totalPrice);



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