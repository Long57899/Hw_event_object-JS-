const tabs = document.querySelectorAll(".tab")
const contents = document.getElementsByClassName("tab__content")


for (const tab of tabs) {
    tab.addEventListener("click",event =>{
        Clear(tabs,contents)
        let indx = Array.from(tabs).indexOf(event.target);
        event.target.classList.add("tab_active")
        contents[indx].classList.add("tab__content_active")
    }) 
}

function Clear(x,y) {
    for (let index = 0; index < x.length; index++) {
        if (x[index].classList.contains("tab_active")){
            x[index].classList.remove("tab_active") 
        }
        if (y[index].classList.contains("tab__content_active")){
            y[index].classList.remove("tab__content_active") 
        }
    }
    
}