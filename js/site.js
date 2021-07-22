//Variable Definition
const form = document.getElementById('form');
const table = document.getElementById('resultsTable');

//Event Listener
form.addEventListener('submit', formSubmit);

//Functions
  function formSubmit(event) {  
    
    const startValue = Number(document.getElementById("Start").value);
    const endValue = Number(document.getElementById("End").value);
    
    removeAllChildNodes(table);

    for (let index = startValue; index <= endValue; index++){
        addTableData(index);       
    }
    
    event.preventDefault();
  };

  function isEven(number){
      if(number % 2 === 0)
      {
          return true;
      }
      else{
          return false;
      }
  };

  function addTableData(index){
    const newRow = document.createElement("tr")
    const newTd = document.createElement("td");  

    newTd.textContent = index;
    
    if (isEven(index)){
        newTd.classList.add("bg-light");
    }
    newRow.appendChild(newTd);
    table.appendChild(newRow);
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}