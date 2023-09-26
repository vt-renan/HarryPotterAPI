import './styles/documentation.css';

const queries = document.querySelectorAll('.query');

const jsonResultCharacter = document.querySelector('.json_result_characters');

const runAllCharactersFetch = () => {
    fetch(queries[0].innerHTML)
        .then(response => response.json())
        .then(data => {
            const formattedJSON = JSON.stringify(data['hydra:member'], null, 2);
            jsonResultCharacter.innerHTML = '<pre>' + formattedJSON + '</pre>';

            const formattedJSONTotal = JSON.stringify(data['hydra:totalItems'], null, 2);
            jsonResultCharacter.innerHTML += '<pre class="total">' + '  "total: "' + formattedJSONTotal + '</pre>';
        })
        .catch(error => {
            jsonResultCharacter.innerHTML = error;
        })
}

runAllCharactersFetch();

const json_result_by_id = document.querySelector('.json_result_by_id');

const runByIDFetch = () => {
    fetch(queries[1].innerHTML)
        .then(response => response.json())
        .then(data => {
            const formattedJSON = JSON.stringify(data, null, 2);
            json_result_by_id.innerHTML = '<pre>' + formattedJSON + '</pre>';
        })
        .catch(error => {
            json_result_by_id.innerHTML = error;
        })
}

runByIDFetch();

const filtersCharacters = document.querySelector('.filters_characters');

filtersCharacters.innerHTML =
    "<div class='flex_horizontal gap10'>" +
    // "   <i class=\"fas fa-question-circle\"></i>\n" +
    "   <p>these are different filters that can be <span class=\"red_color\">combined</span> to refine your searches</p>\n" +
    "</div>" +
    "<ul>\n" +
    "    <li><span class=\"gold_color\">firstName</span>:Filter by first name, partial search</li>\n" +
    "    <li><span class=\"gold_color\">lastName</span>:Filter by last name, partial search</li>\n" +
    "    <li>" +
    "    <span class=\"gold_color\">genre</span>:Filter by genre, precise search" +
    "    <ul>" +
    "       <li>male</li>\n" +
    "       <li>female</li>\n" +
    "    </ul>" +
    "    </li>\n" +
    "    <li>" +
    "        <span class=\"gold_color\">blood</span>:Filter by blood, precise search" +
    "        <ul>" +
    "        <li>muggleborn</li>\n" +
    "        <li>half-blood</li>\n" +
    "        <li>pure-blood</li>\n" +
    "        <li>squib</li>\n" +
    "        </ul>" +
    "    </li>\n" +
    "    <li>" +
    "        <span class=\"gold_color\">house</span>:Filter by house, precise search" +
    "        <ul>" +
    "        <li>Gryffindor</li>\n" +
    "        <li>Slytherin</li>\n" +
    "        <li>Ravenclaw</li>\n" +
    "        <li>Hufflepuff</li>\n" +
    "        </ul>" +
    "    </li>\n" +
    "</ul>"


const jsonResultFirstNameFilter = document.querySelector('.json_result_firstName_filter');

const runFirstNameFilterFetch = () => {
    fetch(queries[2].innerHTML)
        .then(response => response.json())
        .then(data => {
            const formattedJSON = JSON.stringify(data['hydra:member'], null, 2);
            jsonResultFirstNameFilter.innerHTML = '<pre>' + formattedJSON + '</pre>';

            const formattedJSONTotal = JSON.stringify(data['hydra:totalItems'], null, 2);
            jsonResultFirstNameFilter.innerHTML += '<pre class="total">' + '  "total: "' + formattedJSONTotal + '</pre>';
        })
        .catch(error => {
            jsonResultFirstNameFilter.innerHTML = error;
        })
}

runFirstNameFilterFetch();


const json_result_firstName_blood_filters = document.querySelector('.json_result_firstName_blood_filter');

const runFirstNameBloodFilterFetch = () => {
    fetch(queries[3].innerText)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const formattedJSON = JSON.stringify(data['hydra:member'], null, 2);
            json_result_firstName_blood_filters.innerHTML = '<pre>' + formattedJSON + '</pre>';

            const formattedJSONTotal = JSON.stringify(data['hydra:totalItems'], null, 2);
            json_result_firstName_blood_filters.innerHTML += '<pre class="total">' + '  "total: "' + formattedJSONTotal + '</pre>';
        })
        .catch(error => {
            json_result_firstName_blood_filters.innerHTML = error;
        })
}

runFirstNameBloodFilterFetch();


const jsonResultSpells = document.querySelector('.json_result_all_spells');
const runAllSpellsFetch = () => {
    fetch(queries[4].innerHTML)
        .then(response => response.json())
        .then(data => {
            const formattedJSON = JSON.stringify(data['hydra:member'], null, 2);
            jsonResultSpells.innerHTML = '<pre>' + formattedJSON + '</pre>';

            const formattedJSONTotal = JSON.stringify(data['hydra:totalItems'], null, 2);
            jsonResultSpells.innerHTML += '<pre class="total">' + '  "total: "' + formattedJSONTotal + '</pre>';
        })
        .catch(error => {
            jsonResultSpells.innerHTML = error;
        })
}

runAllSpellsFetch();

const jsonResultSpellID = document.querySelector('.json_result_spell_ID');

const runByIDSpellFetch = () => {
    fetch(queries[5].innerHTML)
        .then(response => response.json())
        .then(data => {
            const formattedJSON = JSON.stringify(data, null, 2);
            jsonResultSpellID.innerHTML = '<pre>' + formattedJSON + '</pre>';
        })
        .catch(error => {
            jsonResultSpellID.innerHTML = error;
        })
}

runByIDSpellFetch();

const filtersSpells = document.querySelector('.filters_spells');

filtersSpells.innerHTML =
    "<ul>\n" +
    "    <li><span class=\"gold_color\">name</span>:Filter by name, partial search</li>\n" +
    "</ul>"

const jsonResultSpellFilter = document.querySelector('.json_result_spell_filter');
const runSpellFilterFetch = () => {
    fetch(queries[6].innerHTML)
        .then(response => response.json())
        .then(data => {
            const formattedJSON = JSON.stringify(data['hydra:member'], null, 2);
            jsonResultSpellFilter.innerHTML = '<pre>' + formattedJSON + '</pre>';

            const formattedJSONTotal = JSON.stringify(data['hydra:totalItems'], null, 2);
            jsonResultSpellFilter.innerHTML += '<pre class="total">' + '  "total: "' + formattedJSONTotal + '</pre>';
        })
        .catch(error => {
            jsonResultSpellFilter.innerHTML = error;
        })
}

runSpellFilterFetch();

const jsonResultCharacterPage2 = document.querySelector('.json_result_character_pagination');
const runCharacterPage2Fetch = () => {
    fetch(queries[7].innerHTML)
        .then(response => response.json())
        .then(data => {
            const formattedJSON = JSON.stringify(data['hydra:member'], null, 2);
            jsonResultCharacterPage2.innerHTML = '<pre>' + formattedJSON + '</pre>';
        })
        .catch(error => {
            jsonResultCharacterPage2.innerHTML = error;
        })
}

runCharacterPage2Fetch();

const jsonResultSpellsPage2 = document.querySelector('.json_result_spell_pagination');
const runSpellsPage2Fetch = () => {
    fetch(queries[8].innerHTML)
        .then(response => response.json())
        .then(data => {
            const formattedJSON = JSON.stringify(data['hydra:member'], null, 2);
            jsonResultSpellsPage2.innerHTML = '<pre>' + formattedJSON + '</pre>';
        })
        .catch(error => {
            jsonResultSpellsPage2.innerHTML = error;
        })
}

runSpellsPage2Fetch();

const jsonResultPaginationFilters = document.querySelector('.json_result_pagination_filters');
const runPaginationFiltersFetch = () => {
    fetch(queries[9].innerHTML)
        .then(response => response.json())
        .then(data => {
            const formattedJSON = JSON.stringify(data['hydra:member'], null, 2);
            jsonResultPaginationFilters.innerHTML = '<pre>' + formattedJSON + '</pre>';
        })
        .catch(error => {
            jsonResultPaginationFilters.innerHTML = error;
        })
}

runPaginationFiltersFetch();