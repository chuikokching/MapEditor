function getGeoJsonType(json)
{
    return json.geometry.type;

}

function getGeoJsonCoordinates(json){
    var len = json.geometry.coordinates[0].length;

    var info="";
    if(json.geometry.type=="Point")
    {

        info=info+"["+json.geometry.coordinates+"]";
    }

    if(json.geometry.type=="Polygon")
    {
        for(var i=0;i<len;i++)
        {

            {

                if(i==len-1)
                {
                    info=info+"["+json.geometry.coordinates[0][i]+"]";
                }
                else{
                    info=info+"["+json.geometry.coordinates[0][i]+"],";
                }
            }

        }
    }

    return info;

}