var easybuttonAusschnitt;
var easyAufgabe1;
var easyAufgabe2;
var easyAufgabe3;
var easyAufgabe4;

var map = L.map('mapdiv', {center:[51.46379, 7.00546],zoom:15, editable:true, zoomControl:false, attributionControl:false});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

map.options.maxZoom=16;


easybuttonAusschnitt=L.easyButton('glyphicon-scissors',function(){
    map.editTools.startRectangle();

// var shades = new L.LeafletShades();
    var shades = L.leafletShades();
    shades.addTo(map);
}).addTo(map);


easyAufgabe1=L.easyButton('glyphicon-scissors',function(){

}).addTo(map)

easyAufgabe2=L.easyButton('glyphicon-scissors',function(){

}).addTo(map)

easyAufgabe3=L.easyButton('glyphicon-scissors',function(){

}).addTo(map)

easyAufgabe4=L.easyButton('glyphicon-scissors',function(){

}).addTo(map)




