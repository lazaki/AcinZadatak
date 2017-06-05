var url = 'http://brainpowerdesign.azurewebsites.net/ajax/korisnici.json';

var ul = document.getElementById('data');
var wrapper = document.getElementById('wrapper');
var imgSrc = "https://boxchamp.io/assets/img/sign-up-profile-image.png";
//var users = [];

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        users = data;
        console.log(users);
        listAllUsers();
    })
    .catch(function (error) {

    });


function listAllUsers() {
    users.map(function (user) {
        if (user.Email === "") {
            wrapper.innerHTML += '<div class="main-div">'
                + '<img src=' + imgSrc + ' class="profile-img">'
                + '<div class="profile-text">'
                + '<h1 class="profile-name">' + user.Title + '</h1>'
                + '<div class="profile-title">SmartEmail@Smart.rs</div>'
                + '</div>'
                + '</div>'
        } else if (user.IsSiteAdmin) {
            wrapper.innerHTML += '<div class="main-div">'
                + '<img src= ' + imgSrc + ' class="profile-img">'
                + '<div class="profile-text">'
                + '<h1 class="profile-name">' + user.Title + '</h1>'
                + '<div class="profile-job">Site Administrator</div>'
                + '<div class="profile-title">' + user.Email + '</div>'
                + '</div>'
                + '</div>'
        } else {
            wrapper.innerHTML += '<div class="main-div">'
                + '<img src= ' + imgSrc + ' class="profile-img">'
                + '<div class="profile-text">'
                + '<h1 class="profile-name">' + user.Title + '</h1>'
                + '<div class="profile-title">' + user.Email + '</div>'
                + '</div>'
                + '</div>'
        }
    })
}