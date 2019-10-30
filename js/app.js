let newSkills = [];

// cached element references

const $input = $('input');


//event listeners
$('button').on('click', clickHandler);


//functions
init();

function init() {
    render();
}

function generateUI() {
    return newSkills.map(skill => {
        return`<li>${skill} <button class="button">X</button></li>`;  
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


/*
//when they click ADD SKILL it should add to the skills array 
$('#button').on('click', function(evt) {
    var skill = newSkills.push();
    var template = `
    <div>
        <li><button>X</button></li>
        <li>${this.skill}</li>
    </div>
    `;
    $('div').append(template);
});


//1. need an initial function that will ensure that the page has no skills listed when it first loads
$(document).ready(function() {
    //how do i write the code here? can i put the event listener inside this function?
});

//3. user able to remove anything from the list 
$('div > li').on('click', 'removeButton', function() {
    $(this).closest('').fadeOut(1000, function() {//would i closeest here or something else?
        $(this).remove();
    });
});
*/