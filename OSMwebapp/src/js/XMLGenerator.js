function createXMLString2(textContent,arrayOption,arrayAnswer,map_parameter){
    var length;
    var txt="<?xml version="+'"'+"1.0"+'"'+ " encoding=" + '"'+"ISO-8859-1"+ '"' + "?>"+'\n';
    txt=txt+"<leaflet_data>"+'\n';
    txt=txt+"       <Aufgabe>"+'\n';
    txt=txt+"          <Aufgabestellung>"+textContent+"</Aufgabestellung>"+'\n';
    txt=txt+"          <View_Coordinate>"+'\n';
    txt=txt+"              <lat>"+map_parameter[0]+"</lat>"+'\n';
    txt=txt+"              <lng>"+map_parameter[1]+"</lng>"+'\n';
    txt=txt+"          </View_Coordinate>"+'\n';
    txt=txt+"          <Zoom>"+map_parameter[2]+"</Zoom>"+'\n';
    for(let i=0;i<arrayOption.length;i++)
    {
        txt=txt+"          <Type>"+getGeoJsonType(arrayOption[i])+"</Type>"+'\n';
        txt=txt+"          <Coordinate>"+'\n';
        if(getGeoJsonType(arrayOption[i])=="Point")
        {
            txt=txt+"              <lat>"+ arrayOption[i].geometry.coordinates[0]+"</lat>"+'\n';
            txt=txt+"              <lng>"+ arrayOption[i].geometry.coordinates[1]+"</lng>"+'\n';
        }
        if(getGeoJsonType(arrayOption[i])=="Polygon")
        {
            length=arrayOption[i].geometry.coordinates[0].length;

            for(let j=0;j<length;j++)
            {
                txt=txt+"              <lat>"+ arrayOption[i].geometry.coordinates[0][j][0]+"</lat>"+'\n';
                txt=txt+"              <lng>"+ arrayOption[i].geometry.coordinates[0][j][1]+"</lng>"+'\n';
            }
        }
        txt=txt+"          </Coordinate>"+'\n';
        txt=txt+"          <Answer>"+ "false" +"</Answer>"+'\n';
    }
    for(let k=0; k<arrayAnswer.length; k++)
    {
        txt=txt+"          <Type>"+getGeoJsonType(arrayAnswer[k])+"</Type>"+'\n';
        txt=txt+"          <Coordinate>"+'\n';
        if(getGeoJsonType(arrayAnswer[k])=="Point")
        {
            txt=txt+"              <lat>"+ arrayAnswer[k].geometry.coordinates[0]+"</lat>"+'\n';
            txt=txt+"              <lng>"+ arrayAnswer[k].geometry.coordinates[1]+"</lng>"+'\n';
        }
        if(getGeoJsonType(arrayAnswer[k])=="Polygon")
        {
            length=arrayAnswer[k].geometry.coordinates[0].length;
            for(let z=0;z<length;z++)
            {
                txt=txt+"              <lat>"+ arrayAnswer[k].geometry.coordinates[0][z][0]+"</lat>"+'\n';
                txt=txt+"              <lng>"+ arrayAnswer[k].geometry.coordinates[0][z][1]+"</lng>"+'\n';
            }
        }
        txt=txt+"          </Coordinate>"+'\n';
        txt=txt+"          <Answer>"+ "true" +"</Answer>"+'\n';
    }
    txt=txt+"       </Aufgabe>"+'\n';
    txt=txt+"</leaflet_data>";
    //alert(txt);
    return txt;
}




function createXMLString1(textContent,array,map_parameter){
    var length;
    var txt="<?xml version="+'"'+"1.0"+'"'+ " encoding=" + '"'+"ISO-8859-1"+ '"' + "?>"+'\n';
    txt=txt+"<leaflet_data>"+'\n';
    txt=txt+"       <Aufgabe>"+'\n';
    txt=txt+"          <Aufgabestellung>"+textContent+"</Aufgabestellung>"+'\n';
    txt=txt+"          <View_Coordinate>"+'\n';
    txt=txt+"              <lat>"+map_parameter[0]+"</lat>"+'\n';
    txt=txt+"              <lng>"+map_parameter[1]+"</lng>"+'\n';
    txt=txt+"          </View_Coordinate>"+'\n';
    txt=txt+"          <Zoom>"+map_parameter[2]+"</Zoom>"+'\n';
    for(let i=0;i<array.length;i++)
    {
        txt=txt+"          <Type>"+getGeoJsonType(array[i])+"</Type>"+'\n';
        txt=txt+"          <Coordinate>"+'\n';

        if(getGeoJsonType(array[i])=="Polygon")
        {
            length=array[i].geometry.coordinates[0].length;

            for(let j=0;j<length;j++)
            {
                txt=txt+"              <lat>"+ array[i].geometry.coordinates[0][j][0]+"</lat>"+'\n';
                txt=txt+"              <lng>"+ array[i].geometry.coordinates[0][j][1]+"</lng>"+'\n';
            }
        }
        txt=txt+"          </Coordinate>"+'\n';
    }

    txt=txt+"       </Aufgabe>"+'\n';
    txt=txt+"</leaflet_data>";
    //alert(txt);
    return txt;
}