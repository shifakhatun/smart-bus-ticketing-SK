function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId) ;
    element.classList.add('bg-lime-600');
  }
  function disableElementById(elementId){
    const element =document.getElementById(elementId);
   element.classList.add('disable');
}