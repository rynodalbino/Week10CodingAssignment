//create id variable
let id = 0;

//attach js code to html button and create event listener
document.getElementById('add').addEventListener('click', (event) => {
    //stops the browser from refreshing
    event.preventDefault();
    //grabs list into html
    let table = document.getElementById('list');
    //adds a row starting from row 1
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    //inputs user data with value
    row.insertCell(0).innerHTML = document.getElementById('character').value;
    row.insertCell(1).innerHTML = document.getElementById('level').value;
    row.insertCell(2).innerHTML = document.getElementById('class').value;
    row.insertCell(3).innerHTML = document.getElementById('race').value;
    
    //clear the text from box
    document.getElementById('new-task').value = '';
});


