import './styles/potterDex.css';

const imagesCtn = document.querySelector('.images_ctn');
let offset = 4;
const totalCharacters = document.querySelector('#total_characters').getAttribute('data-total');
const showMoreBtn = document.querySelector('#show_more');

console.log(offset)
const getMoreCharacters = () => {
    fetch(`https://127.0.0.1:8000/potterDex/show_more/${offset}`)
        .then(response => response.json())
        .then(data => {
            offset += data.length;
            for (let i = 0; i < data.length; i++) {
                imagesCtn.innerHTML +=
                    '<a href="/potterDex/character/'+ data[i].id +'" target="_blank">' +
                    '  <div class="character pointer" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">' +
                    '  <img class="character_image" src="' + data[i].picture + '" alt="image">' +
                    '   <div class="' + data[i].house + ' character_name" hidden>' +
                    '   <div>' + data[i].firstName + " " + data[i].lastName + ' </div>' +
                    '    </div>' +
                    ' </div>' +
                    '</a>'

            }
            if (offset >= totalCharacters) {
                showMoreBtn.style.display = "none";
            }
        })
        .catch(error => {
            console.log(error);
        })
}


showMoreBtn.addEventListener('click', (event) => {
    event.preventDefault();
    getMoreCharacters();
})

