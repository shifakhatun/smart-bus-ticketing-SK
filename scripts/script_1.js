let count =0;
let totalPrice=0;
let arr=[];
const allbtn=document.getElementsByClassName("add-seat")

for(const btn of allbtn){
    btn.addEventListener("click", function (event){
        count++;

    //const seatNo=event.target.parentNode.childNodes[1].innertext;
    const seatNo=event.target.innercontent;
    console.log(seatNo);


    })
}