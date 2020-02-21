let previousSkills = {

}
let updatePrevious = [];

updatePrevious = window.localStorage;

localStorage.clear();

let today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

let input = document.getElementById("newSkill");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Triggerthe button element with a click
    document.getElementById("add").click();
  }
});

$('#add').on('click', function(e){

    let newSkill = $('#newSkill').val();

    // previousSkills['time ' + time] = newSkill;

    let newRow =
    `
        <tr>
        <td><button>X</button><span>${newSkill}</span></td>
        </tr>
    `

    $('#newSkill').val('');

    $('tbody').append(newRow);

    // localStorage.setItem(time, previousSkills);
    
    console.log(previousSkills);
    console.log(updatePrevious);

})



$('tbody').on('click', 'button', function(){
    $(this).closest('tr')
    .fadeOut(500);
})