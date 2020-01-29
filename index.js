

document.addEventListener("DOMContentLoaded", () => {
  const checkboxContainerTag = document.querySelector(".checkbox-container")
  const checkboxTags = document.querySelectorAll(".item input")
 

  const isChecked = e => {   
    if (e.target.tagName==="INPUT") { 
      let lastChecked= e.target
      let lastCheckedIndex= Number(e.target.dataset.id)
        if (e.shiftKey && e.target.checked) {
           checkboxTags.forEach(input => {    
             let index = Number(input.dataset.id);
             index <=lastCheckedIndex? input.checked =true : null;                  
           }) 
        }  
        if (e.shiftKey && e.target.checked === false) {
            checkboxTags.forEach(input => {  
              let index = Number(input.dataset.id);
              index <=lastCheckedIndex? input.checked =false : null;                   
            })         
        }    
    }
  }
   
  checkboxContainerTag.addEventListener("click", isChecked)
})