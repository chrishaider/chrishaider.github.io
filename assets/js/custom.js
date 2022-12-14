$(document).ready(function(){
    $("#preloader").fadeOut("slow");

});

$(window).scroll(function(){
    if($(window).scrollTop() > 200) {
        $("#navigation").css("background-color","#6F8AB7");
        $("g#logo .letter").css("fill","green");
    } else {
        $("#navigation").css("background-color","rgba(111, 138, 183, 0.2)");
        $("g#logo .letter").css("fill","green");
    }
});

var map = L.map('map').setView([48.36936535443323, 14.513704089483294], 8);



L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoianplbmlzZWsiLCJhIjoiY2wyeXIxNWVpMDJvMjNjcWJpYWloZ29vdSJ9.aVp5R2VZRdkWBrCdo8J90Q'
}).addTo(map);

L.marker([48.36831567160878, 14.512507038275828]).addTo(map)
    .bindPopup('FH OÖ Campus Hagenberg, F&E<br/>Softwarepark 13<br/>4232 Hagenberg im Mühlkreis'
    + '<br/><br/><a target="_blank" href="https://www.openstreetmap.org/directions?from=&to=48.36831%2C14.51250">Route hierhin</a>');

L.marker([48.04294, 14.41809]).addTo(map)
    .bindPopup('FH OÖ Campus Steyr, F&E<br/>Wehrgrabengasse 1-3<br/>4400 Steyr'
    + '<br/><br/><a target="_blank" href="https://www.openstreetmap.org/directions?from=&to=48.04283%2C14.51250">Route hierhin</a>');