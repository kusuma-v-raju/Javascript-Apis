const listEl = document.querySelector("#list");
const detailsEl = document.querySelector("#details");

const createListItem = function (characters) {
    characters.results.forEach(character => {

        // put all the links inside the foreach loop to get all the elements inside the list 
        const listItemEl = document.createElement("li");
        const linkEl = document.createElement("a");
        linkEl.href = "";

        linkEl.textContent = character.name;

        listEl.appendChild(listItemEl);
        listItemEl.appendChild(linkEl);

        linkEl.addEventListener("click", function(event) {
            // to avoid the browser to refresh on every click
            // to prevent event target default behavior (a tag => refershes the page) 
            event.preventDefault();

            detailsEl.innerText = `Mass: ${character.mass} - Height: ${character.height}`;

            console.log(character.name + " was clicked")
            
        });
    });
}

    
fetch("https://swapi.dev/api/people/")
    .then(function (response) {
        return response.json();
    })
    // put the data in the function parameter and the call the function createListItem and the parameter as data again
    .then(function (data) {
        // try to move "all" the code inside the fetch's then, in a separated function
        // we have the data
        console.log(data);
       createListItem(data);

       // or writing it in one line code, writing outside the curly brackets

       // .then(createListItem);
    });
