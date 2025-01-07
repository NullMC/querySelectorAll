// Select all elements with the class 'item'
let elements = document.querySelectorAll(".el");

// Add a click event listener to each item
elements.forEach(element => {
    element.addEventListener('click', function(event) {
        // Use event.currentTarget to refer to the element that was clicked
        const clickedElement = event.currentTarget;

        if (clickedElement.classList.contains("green")){
            clickedElement.classList.remove("green");
            clickedElement.classList.add("yellow");
        }

        else if (clickedElement.classList.contains("yellow")){
            clickedElement.classList.remove("yellow");
            clickedElement.classList.add("green");
        }
    });
});