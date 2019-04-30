var easybuttonAusschnitt;
var easyAufgabe1;
var easyAufgabe2;
var easyAufgabe3;
var easyAufgabe4;
var removeLayer;
var shades;

var map = L.map('mapdiv', {center:[51.46379, 7.00546],zoom:15, editable:true, zoomControl:false, attributionControl:false});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

map.options.maxZoom=16;



easybuttonAusschnitt= L.easyButton({
    states: [{
        stateName: 'Ausschnitt',
        icon: 'glyphicon-scissors',
        title: 'Cut out',
        onClick: function() {
            map.editTools.startRectangle();

            //var shades = new L.LeafletShades();
            shades = L.leafletShades();
            shades.addTo(map);
        }
    }]
}).addTo(map);


easyAufgabe1= L.easyButton({
    states: [{
        stateName: 'Aufgabe1',
        icon: 'glyphicon-map-marker',
        title: 'Mark Site',
        onClick: function() {
            window.open('Aufgabe1.html','new','height=600, width=800, top=50%,left=50%,location=no,toolbar=no');
            return false;
        }
    }]
}).addTo(map);


easyAufgabe2= L.easyButton({
    states: [{
        stateName: 'Aufgabe2',
        icon: 'glyphicon-th-list',
        title: 'Multiple Choice',
        onClick: function() {
            window.open('Aufgabe2.html','new','height=600, width=800, top=50%,left=50%,location=no,toolbar=no');
            return false;
        }
    }]
}).addTo(map);


easyAufgabe3= L.easyButton({
    states: [{
        stateName: 'Aufgabe3',
        icon: 'glyphicon-picture',
        title: 'Map Puzzle',
        onClick: function() {
            window.open('Aufgabe3.html','new','height=600, width=800, top=50%,left=50%,location=no,toolbar=no');
            return false;
        }
    }]
}).addTo(map);


easyAufgabe4= L.easyButton({
    states: [{
        stateName: 'Aufgabe4',
        icon: 'glyphicon-text-size',
        title: 'Fill-in-the-blank',
        onClick: function() {
            window.open('Aufgabe4.html','new','height=600, width=800, top=50%,left=50%,location=no,toolbar=no');
            return false;
        }
    }]
}).addTo(map);

removeLayer= L.easyButton({
    states: [{
        stateName: 'Aufgabe4',
        icon: 'glyphicon-remove',
        title: 'Remove',
        onClick: function() {
            window.location.reload();
        }
    }]
}).addTo(map);







