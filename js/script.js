//let songNames = ["Happy Birthday", "Jingle Bells", "Silent Night"];
let imageLinks = [];

let newSong = '';

/*
$("button").click(function() {
    newSong = $("#songInput").val();
    songNames.push(newSong);
    $("#songs").empty();
    for (let song of songNames) {
        $("#songs").append(`<p>${song}</p>`);
    }
});
*/

//for (let song of songNames) {
//    $("#songs").append(`<p>${song}</p>`);
//}

for (let image of imageLinks) {
       
}

let song1 = {
    song: "Happy Birthday"
}
let song2 = {
    song: "Jingle Bells"
}
let song3 = {
    song: "Silent Night"
}



let playlist = [song1, song2, song3];
console.log(playlist);

$("button").click(function() {
    newSong = $("#songInput").val();
    let newItem = {
        song: newSong,
    }
    playlist.push(newItem);
    $("#songs").empty();
    for (let item of playlist) {
        $("#songs").append(`<p>${item.song}</p>`);
    }
});