const body = document.querySelector('body');
const button = document.querySelector('.button');
const word = document.createElement('h1');
const definition = document.createElement('p');
const random_word = () => {
fetch('https://random-word-api.herokuapp.com//word?number=1')
    .then(response => {
        return response.json();
    })
    .then(response =>{
        word.textContent = response;
        body.appendChild(word);
        random_def(word);
    })
    .catch(err =>{
        conssole.log(err);
    })
}

const random_def =(word) => {
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word.textContent}?key=e2acbe84-2133-49db-908e-b16b4f76bf0e`)
        .then(response =>{
            return response.json();
        })
        .then(response => {
            if(response[0].shortdef !== undefined)
                definition.textContent = "Definition :" + response[0].shortdef;
            else
            definition.textContent = "No definition available"
            body.appendChild(definition);
        })
        .catch(err =>{
            console.log(err);
        })
}

button.addEventListener('click', function(){
    random_word();
})

