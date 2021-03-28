const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

const cat = {
    complain: "Meow!",
    getComplain: function() {
        console.log(this.complain);
    }
}

cat.getComplain();



// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";




// Question 3

heading.style.fontSize = "2em";




// Question 4

heading.classList.add("subheading");




// Question 5

let paragraphs = document.querySelectorAll("p");

for ( let i=0; i<paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}



// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML =  "<p>New paragraph</p>";
resultsContainer.style.background = "yellow";




// Question 7

function oneParameter(list) {
    for ( let i=0; i<list.length; i++) {
        console.log(list[i].name);
    }
}

oneParameter(cats);



// Question 8

function createCats(cats) {
    let html = "";

    for ( let i=0; i<cats.length; i++) {

        let ageIs = "Age Unknown";

        if (cats[i].age) {
            ageIs = cats[i].age;
        }
        
        html += `<div><h5>${cats[i].name}</h5>
    <p>${ageIs}</p></div>`;
    }

    return html;
}

const newHTML = createCats(cats);


const catContainer = document.querySelector(".cat-container");

catContainer.innerHTML = newHTML;












     