// This file is basically just to make any CRUD requests that we can't already make in HTML
// add ajax/axios as onclicks, making sure to capture any input fields as object keys
// the request must have that object in it
// week 14 activity 5 has some good examples



// This is for testing, delete later
$('#register-button').click(function (e) { 
    e.preventDefault();
    location.href = "/register"
});