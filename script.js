const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btn = document.getElementById("btn");



// function below listens the click on add button and makes the list item from the value typed in the input field
btn.addEventListener("click",()=>{
    if (inputBox.value === ''){
        alert("You must write something before adding task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        li.appendChild(cross);
    }
    inputBox.value='';
    saveData();
});


// this function here listens the clicke and changes the class name of list item to apply the reqd styles
listContainer.addEventListener("click", (e)=>{
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})


// this below function would save the current code inside listContainer alog with the contents within 
//the local storage of browser and later on display it to the user when the page is reloaded
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//this function would show the code stored or list items stored when page is reloaded
function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTasks()