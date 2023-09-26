import './styles/home.css';

const btn = document.querySelector('button');
const prefixQuery = 'https://127.0.0.1:8000/api/';
const suffixQuery = document.querySelector('input');
const jsonResultDiv = document.querySelector('.json_result');

const runQuery = () => {
    console.log('runQuery')
    fetch(prefixQuery + suffixQuery.value)
        .then(response => response.json())
        .then(data => {
            const formattedJSON = JSON.stringify(data['hydra:member'], null, 2);
            jsonResultDiv.innerHTML = '<pre>' + formattedJSON + '</pre>';

            const formattedJSONTotal = JSON.stringify(data['hydra:totalItems'], null, 2);
            jsonResultDiv.innerHTML += '<pre class="total">' + '  "total: "' + formattedJSONTotal + '</pre>';
        })
        .catch(error => {
            jsonResultDiv.innerHTML = error;
        })
}

runQuery();

btn.addEventListener('click',(event) =>  {
    event.preventDefault();
    runQuery();
})