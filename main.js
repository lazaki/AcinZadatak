var url = 'http://brainpowerdesign.azurewebsites.net/ajax/korisnici.json';

var ul = document.getElementById('data');
var wrapper = document.getElementById('wrapper');
var buttonDiv = document.getElementById('buttonDiv');
var imgSrc = "https://boxchamp.io/assets/img/sign-up-profile-image.png";
var selectedUsersArray = [];


// $('.loader').show();
// $.ajax({
//     url: url,
//     cache: false,
//     complete: function () {
//         $('.loader').hide();
//     }
// });


fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        users = data;
        //console.log(users);
        listAllUsers();
        $('.loader').hide();

    })
    .catch(function (error) {

    });


function listAllUsers() {
    users.map(function (user) {
        var email;
        if (user.Email === '') {
            email = "smart@smart.rs"
        } else {
            email = user.Email;
        }

        if (user.IsSiteAdmin) {
            wrapper.innerHTML += '<div id="main-div" class="unselected" onClick=selectUsers(this,' + user.Id + ')>'
                + '<img src= ' + imgSrc + ' class="profile-img">'
                + '<div class="profile-text">'
                + '<h1 class="profile-name">' + user.Title + '</h1>'
                + '<div class="profile-job">Site Administrator</div>'
                + '<div class="profile-title">' + email + '</div>'
                + '</div>'
                + '</div>'
        } else {
            wrapper.innerHTML += '<div id="main-div" class="unselected" onClick=selectUsers(this,' + user.Id + ')>'
                + '<img src=' + imgSrc + ' class="profile-img">'
                + '<div class="profile-text">'
                + '<h1 class="profile-name">' + user.Title + '</h1>'
                + '<div class="profile-title">' + email + '</div>'
                + '</div>'
                + '</div>'
        }
    })
}


function selectUsers(el, userId) {

    if (el.className == 'unselected') {
        el.className = 'selected';
    } else {
        el.className = 'unselected';
    }

    for (var i = 0; i < users.length; i++) {
        if (userId === users[i].Id) {
            if (selectedUsersArray.indexOf(users[i]) === -1) {
                selectedUsersArray.push(users[i]);
            } else {
                selectedUsersArray.splice(i,1);
            }
            console.log(selectedUsersArray);
        }
    }

}




























