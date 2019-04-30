var newmap;
var sidebar;
var lyrOSM;
var layerHyddaFull
var lyrImagery;
var lyrOutdoors;
var layerBlackandwhite;
var layerTerrain;
var point1_lat,point1_lng,point2_lat,point2_lng;
var op1,op2;


/*Easybutton*/
var easybuttonFertig;
var easybuttonAufgabeErstellung;


/*Control plugin*/
var ctlAttribute;
var ctlMouseposition;
var ctlLayers;
var ctlDraw;
var ctlStyle;

/*Layers*/
var DrawnItems;
var Basemaps;
var Overlayers;


$(document).ready(function(){
	newmap = L.map('mapdiv', {center:[51.46379, 7.00546],zoom:15, zoomControl:false, attributionControl:false});
	lyrOSM = L.tileLayer.provider('OpenStreetMap.Mapnik');
	layerBlackandwhite=L.tileLayer.provider('OpenStreetMap.BlackAndWhite');
	lyrImagery = L.tileLayer.provider('Esri.WorldImagery');
	lyrOutdoors = L.tileLayer.provider('Thunderforest.Outdoors');
	layerHyddaFull=L.tileLayer.provider('Hydda.Full');
	layerTerrain=L.tileLayer.provider('Stamen.Terrain');
	newmap.addLayer(lyrOSM);

	newmap.options.maxZoom=16;
	//newmap.options.minZoom=10;
	/*Custom Property*/
	newmap.existed='false';


	/*easybuttonAufgabeErstellung plugin*/
	easybuttonAufgabeErstellung=L.easyButton('glyphicon-pencil',function(){

		/*shapestyle plugin*/
		ctlStyle = L.control.styleEditor({position:'topleft'});

		/*Drawing tools*/
		ctlDraw = new L.Control.Draw({
			draw:{
				position: 'topleft',
				circle: false,
				marker: false,
				polyline: false,
				polygon: false,
				shapeOptions: {
					color: '#8cd6da'
				},
				showArea: true
			},
			edit:{
				featureGroup:DrawnItems
			}
		});

		if(newmap.existed=='false'){
			ctlStyle.addTo(newmap);
			ctlDraw.addTo(newmap);
		}


	}).addTo(newmap);


	/*easybuttonFertig*/
	easybuttonFertig=L.easyButton('glyphicon-share',function(){
		if(newmap.existed=='true'){
			op1=(Number(point1_lat)+Number(point2_lat))/2;
			op2=(Number(point1_lng)+Number(point2_lng))/2;
			//newmap.setView([op1,op2],17);
			//openWindow();
		}
		else{
			swal("Bitte schneiden Sie zuerst den Karteausschnitt aus!!!");
		}

	}).addTo(newmap);


	Basemaps = {
		"Layer OSM": lyrOSM,
		"Layer BAW":layerBlackandwhite,
		"Layer Imagery":lyrImagery,
		"Layer Outdoors":lyrOutdoors,
		"Layer Hydda.Full":layerHyddaFull,
		"Layer Terrain":layerTerrain
	};

	/*styleEditor*/
	DrawnItems = new L.FeatureGroup();
	DrawnItems.addTo(newmap);


	//Ajax loads geojson
	//layerUnijason=L.geoJSON.ajax('data/Uni1.geojson').addTo(newmap);


	Overlayers = {
		//"Layer of Uni":layerUnijason,//new layer of Uni
		"Layer of Drawn Shapes":DrawnItems
	};

	/*Layers plugin*/
	ctlLayers = L.control.layers(Basemaps, Overlayers).addTo(newmap);

    /*
	function openWindow(){
		new MyLayer({
			top:"10%",
			left:"10%",
			width:"80%",
			height:"80%",
			title:"Aufgabenerstellung"
			//content:newmap
		}).openLayer();
	}
	function MyLayer(options) {
		this.options = options ;
	}

	MyLayer.prototype.openLayer = function () {
		var background_layer = document.createElement("div");
		background_layer.id = "map1";
		background_layer.style.display = "none";
		background_layer.style.position = "absolute";
		background_layer.style.top = "0px";
		background_layer.style.left = "0px";
		background_layer.style.width = "100%";
		background_layer.style.height = "100%";
		background_layer.style.backgroundColor = "gray";
		background_layer.style.zIndex = "1001";
		background_layer.style.opacity = "0.8" ;
		var open_layer = document.createElement("div");
		open_layer.id = "map2";
		open_layer.style.display = "none";
		open_layer.style.position = "absolute";
		open_layer.style.top = this.options.top === undefined ? "10%" : this.options.top;
		open_layer.style.left = this.options.left === undefined ? "10%" :this.options.left;
		open_layer.style.width = this.options.width === undefined ? "80%" : this.options.width;
		open_layer.style.height = this.options.height === undefined ? "80%" : this.options.height;
		open_layer.style.border = "1px solid lightblue";
		open_layer.style.borderRadius = "15px" ;
		open_layer.style.boxShadow = "4px 4px 10px #171414";
		open_layer.style.backgroundColor = "white";
		open_layer.style.zIndex = "1002";
		open_layer.style.overflow = "auto";
		var div_toolBar = document.createElement("div");
		div_toolBar.id = "map3";
		div_toolBar.style.textAlign = "right";
		div_toolBar.style.paddingTop = "10px" ;
		div_toolBar.style.backgroundColor = "aliceblue";
		div_toolBar.style.height = "40px";
		var span_title = document.createElement("span");
		span_title.id = "map6";
		span_title.style.fontSize = "18px";
		span_title.style.color = "blue" ;
		span_title.style.float = "left";
		span_title.style.marginLeft = "20px";
		var span_title_content = document.createTextNode(this.options.title === undefined ? "" : this.options.title);
		span_title_content.id= "map7";
		span_title.appendChild(span_title_content);
		div_toolBar.appendChild(span_title);
		var span_close = document.createElement("span");
		span_close.style.fontSize = "16px";
		span_close.style.color = "blue" ;
		span_close.style.cursor = "pointer";
		span_close.style.marginRight = "20px";
		span_close.onclick = function () {
			open_layer.style.display = "none";
			background_layer.style.display = "none";
			window.location.reload();
			//newmap.removeLayer(lyrOSM);
		};
		var span_close_content = document.createTextNode("Close");
		span_close.appendChild(span_close_content);
		div_toolBar.appendChild(span_close);
		open_layer.appendChild(div_toolBar);
		var div_content = document.createElement("div");
		div_content.id = "map4";
		div_content.style.textAlign = "center";
		div_content.style.width = "1150px";
		div_content.style.height = "780px";
		var content_area = document.createTextNode(this.options.content === undefined ? "" : this.options.content);
		content_area.id = "map5";
		var bar = document.createElement("div");
		bar.id="sidebar";
		div_content.appendChild(bar);
		div_content.appendChild(content_area);
		open_layer.appendChild(div_content);
		document.body.appendChild(open_layer);
		document.body.appendChild(background_layer);
		open_layer.style.display = "block" ;
		background_layer.style.display = "block";



		newmap = L.map('map4', {center:[op1, op2],zoom:18,dragging:false,scrollWheelZoom:false,doubleClickZoom:false,zoomControl:false, attributionControl:false});
		lyrOSM = L.tileLayer.provider('OpenStreetMap.Mapnik');
		//console.log(op1+" TTTTT "+op2);
		newmap.addLayer(lyrOSM);

		sidebar = L.control.sidebar('sidebar').addTo(newmap);
	};*/



	/*contributor control*/
	ctlAttribute = L.control.attribution({position:'bottomleft'}).addTo(newmap);
	ctlAttribute.addAttribution('OSM');
	ctlAttribute.addAttribution('&copy;Xu Pan Gu');

	/*mouseposition plugin*/
	ctlMouseposition = L.control.mousePosition().addTo(newmap);


	/*Draw:created function*/
	newmap.on('draw:created', function(e){
		//console.log(e.layer);
		DrawnItems.addLayer(e.layer);
		newmap.existed='true';
		//console.log(e.layer._bounds._northEast.lat+"  111");
		point1_lat=e.layer._bounds._northEast.lat;
		//console.log(e.layer._bounds._northEast.lng+"  111");
		point1_lng=e.layer._bounds._northEast.lng;
		//console.log(e.layer._bounds._southWest.lat+"  111");
		point2_lat=e.layer._bounds._southWest.lat;
		//console.log(e.layer._bounds._southWest.lng+"  111");
		point2_lng=e.layer._bounds._southWest.lng;

		//console.log(e.layer._latlngs[0]);
		//console.log(e.layer._latlngs[0][1]);
		//console.log(JSON.stringify(e.layer.toGeoJSON()));
		//var object=Object.keys(e.layer.toGeoJSON());
		//console.log(object+" propertys!!");
		//console.log(e.layer._latlng);
		//var obj=JSON.stringify(e.layer.toGeoJSON());
		//localStorage.setItem("Mapdata",obj);
		//console.log(obj);

	});

	newmap.on('draw:editmove',function(e){
		//console.log(e);
		//console.log(e.layer._bounds._northEast.lat+"  111");
		point1_lat=e.layer._bounds._northEast.lat;
		//console.log(e.layer._bounds._northEast.lng+"  111");
		point1_lng=e.layer._bounds._northEast.lng;
		//console.log(e.layer._bounds._southWest.lat+"  111");
		point2_lat=e.layer._bounds._southWest.lat;
		//console.log(e.layer._bounds._southWest.lng+"  111");
		point2_lng=e.layer._bounds._southWest.lng;
	});

	newmap.on('draw:editresize',function(e){
		//console.log(e);
		//console.log(e.layer._bounds._northEast.lat+"  111");
		point1_lat=e.layer._bounds._northEast.lat;
		//console.log(e.layer._bounds._northEast.lng+"  111");
		point1_lng=e.layer._bounds._northEast.lng;
		//console.log(e.layer._bounds._southWest.lat+"  111");
		point2_lat=e.layer._bounds._southWest.lat;
		//console.log(e.layer._bounds._southWest.lng+"  111");
		point2_lng=e.layer._bounds._southWest.lng;
	});


});