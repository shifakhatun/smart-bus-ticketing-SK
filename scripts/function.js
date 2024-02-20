function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId) ;
    element.classList.add('blue');
  }
// function setBackgroundColorById(elementId){
//     const element=document.querySelector(elementId) ;
//     element.add('bg-lime-600');
//   }

 
// function setBackgroundColorById(elementId){
//   const element=document.getElementById(elementId) ;
//   element.classList.add("disabled");
// }

function myFunction(){
  const element=document.getElementById("content");
  element.scrollIntoView();
}

function hiddenElementById(elementId){
  const element =document.getElementById(elementId);
 element.classList.add('hidden');
}
function showElementById(elementId){
  const element =document.getElementById(elementId);
 element.classList.remove('hidden');
}

