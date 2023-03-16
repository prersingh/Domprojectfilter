let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

//form submit event

document.addEventListener("submit", addItem);

//add item

function addItem(e){
    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('item').value;
    var description = document.getElementById('description').value;

  
    // Create new li element
    var li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';


    let newText = document.createTextNode(newItem);
    let descriptionNode = document.createTextNode(" "+description)

     li.appendChild(newText);
     li.appendChild(descriptionNode)




    //create delete button element
    let deleteBtn = document.createElement("delete");

    //add classes to delete button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";

    //append text node
    deleteBtn.appendChild(document.createTextNode("Edit"))

    //append button to li
    li.appendChild(deleteBtn)


    //append li to list
    itemList.appendChild(li)

}




//Delete event
itemList.addEventListener("click",removeItem);

function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure?")){
            let li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}






filter.addEventListener("keyup",filterItems)

function filterItems(e){

    //convert text to lowercase
    let text = e.target.value.toLowerCase();

    //Get list
    let items = itemList.getElementsByTagName("li");
    console.log(items)

    //convert to an array
    Array.from(items).forEach(function(item){

        let itemName = item.firstChild.textContent;

        let description = item.childNodes[1].textContent

        if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }

    });

}