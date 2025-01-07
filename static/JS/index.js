
let elements = document.querySelectorAll(".el");


elements.forEach(element => {
    element.addEventListener('click', function(event) {
        
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