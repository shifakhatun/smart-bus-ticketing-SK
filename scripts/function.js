function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId) ;
    element.classList.add('blue');
  }
// function setBackgroundColorById(elementId){
//     const element=document.querySelector(elementId) ;
//     element.add('bg-lime-600');
//   }

  function disableElementById(elementId){
    const element =document.getElementById(elementId);
   element.classList.add('disable');
}

function myFunction(){
  const element=document.getElementById("content");
  element.scrollIntoView();
}