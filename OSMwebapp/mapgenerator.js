var newmap;
var sidebar;
var lyrOSM;
var layerHyddaFull
var lyrImagery;
var lyrOutdoors;
var layerBlackandwhite;
var layerTerrain;


/*Easybutton*/
var easybuttonAufgabeErstellung;



/*Control plugin*/
var ctlAttribute;
var ctlMouseposition;
var ctlLayers;

/*Layers*/

var Basemaps;
var Overlayers;


$(document).ready(function(){
    newmap = L.map('mapdiv', {center:[51.46379, 7.00546],zoom:15, editable:true, zoomControl:false, attributionControl:false});
    lyrOSM = L.tileLayer.provider('OpenStreetMap.Mapnik');
    layerBlackandwhite=L.tileLayer.provider('OpenStreetMap.BlackAndWhite');
    lyrImagery = L.tileLayer.provider('Esri.WorldImagery');
    lyrOutdoors = L.tileLayer.provider('Thunderforest.Outdoors');
    layerHyddaFull=L.tileLayer.provider('Hydda.Full');
    layerTerrain=L.tileLayer.provider('Stamen.Terrain');
    newmap.addLayer(lyrOSM);
    //const rect = L.rectangle([[54.559322, -5.767822], [56.1210604, -3.021240]]).addTo(newmap);
    //rect.enableEdit();

    newmap.editTools.startRectangle();
    newmap.options.maxZoom=16;
    //newmap.options.minZoom=10;


    Basemaps = {
        "Layer OSM": lyrOSM,
        "Layer BAW":layerBlackandwhite,
        "Layer Imagery":lyrImagery,
        "Layer Outdoors":lyrOutdoors,
        "Layer Hydda.Full":layerHyddaFull,
        "Layer Terrain":layerTerrain
    };


    Overlayers = {

    };

    /*Layers plugin*/
    ctlLayers = L.control.layers(Basemaps, Overlayers).addTo(newmap);

    /*contributor control*/
    ctlAttribute = L.control.attribution({position:'bottomleft'}).addTo(newmap);
    ctlAttribute.addAttribution('OSM');
    ctlAttribute.addAttribution('&copy;Xu Pan Gu');

    /*mouseposition plugin*/
    ctlMouseposition = L.control.mousePosition().addTo(newmap);

    easybuttonAufgabeErstellung=L.easyButton('glyphicon-pencil',function(){


    }).addTo(newmap);
});