'use strict';

let beerDiv = document.querySelector('#beerList');
let getAll = document.querySelector('#getAllBtn');
let getById = document.querySelector('#getIdBtn');

console.log(beerDiv);

const getBeers = () => {
    fetch(`https://api.punkapi.com/v2/beers`).then((response) => {
        if(response.status !== 200){
            console.error(response.status);
            return;
        }
        response.json().then((data) => {
            for(let object of data){
                createData(object);
            };
        });
    });
};

const createData = (data) => {
    let name = document.createElement('h2');
    let tagline = document.createElement('h3');
    let description = document.createElement('p');
    let divContainer = document.createElement('div');

    name.innerText = data.name;
    tagline.innerText = data.tagline;
    description.innerText = data.description;

    divContainer.classList = "container";
    divContainer.appendChild(name);
    divContainer.appendChild(tagline);
    divContainer.appendChild(description);

    beerDiv.appendChild(divContainer);
}

getBeers();