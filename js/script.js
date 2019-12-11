let songNames = ["Happy Birthday", "Jingle Bells", "Silent Night"];
let imageLinks = [];

let newSong = '';

$("button").click(function() {
    newSong = $("#songInput").val();
    songNames.push(newSong);
    console.log(songNames);
});

for (let song of songNames) {
    $("#songs").append(`<p>${song}</p>`);
}

for (let image of imageLinks) {
       
}