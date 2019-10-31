//variables 
let newSkills = [];

// cached element references
const $input = $('input');

//event listeners
$('button').on('click', clickHandler);
$('.list').on('click', 'li', removeButton); 

//functions
init();

function init() {
    render();
}

function generateUI() {
    return newSkills.map((skill, id) => {
        return`<li data-id="${id}"><button class="buttonX">X</button> ${skill}</li>`;  
    });
}

function clickHandler(evt) {
    if(!$input.val()) return;
    newSkills.push($input.val());
    $input.val("");
    render();
}

function render() {
    $('.list').html(generateUI().join(""));
}

function removeButton(evt) {
    let selectedIndex = parseInt($(evt.target).parent()[0].dataset.id);
    newSkills.splice(selectedIndex, 1);
    render();
}


