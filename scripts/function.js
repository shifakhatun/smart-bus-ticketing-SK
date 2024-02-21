function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId) ;
    element.classList.add('blue');
  }


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

