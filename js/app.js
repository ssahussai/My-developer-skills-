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
    return newSkills.map(skill => {
        return`<li><button class="buttonX">X</button> ${skill}</li>`;  
    });
}

function clickHandler(evt) {
    if(!$input.val()) return;
    newSkills.push($input.val());
    $input.val("");
    render();
}

function render() {
    if(!newSkills.length) return;
    $('.list').html(generateUI().join(""));
}

function removeButton(btn) {
    $(this).remove();
}


//when i remove the element it comes back when i add a new element right afrer. 