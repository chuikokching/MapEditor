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
				
					mapinWindow.remove(); 
		
			};
			var span_close_content = document.createTextNode("Close");
			span_close.appendChild(span_close_content);
			div_toolBar.appendChild(span_close);
			open_layer.appendChild(div_toolBar);
			var div_content = document.createElement("div");
			div_content.id = "map4";
			div_content.style.textAlign = "center";
			div_content.style.width = "1500vh";
			div_content.style.height = "780px";
			var content_area = document.createTextNode(this.options.content === undefined ? "" : this.options.content);
			content_area.id = "map5";
			div_content.appendChild(content_area);
			open_layer.appendChild(div_content);
			document.body.appendChild(open_layer);
			document.body.appendChild(background_layer);
			open_layer.style.display = "block" ;
			background_layer.style.display = "block";


			mapinWindow = L.map('map4', {center:[51.46379, 7.00546],zoom:18,dragging:false,scrollWheelZoom:false,doubleClickZoom:false,zoomControl:false, attributionControl:false});
			mapinWindow.addLayer(lyrOSM);
		};