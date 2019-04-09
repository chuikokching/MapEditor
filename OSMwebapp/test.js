const {Client}=require('pg')

const client =  new Client({
    user:"jack",
    password:"jack",
    host:"localhost",
    port:5432,
    database:"Webmap"
})

client.connect()
.then(()=>console.log("Connected successfully!!"))
    .then(()=>client.query("select osm_id from planet_osm_line limit 100"))
    .then(results => console.table(results.rows))
.catch(e=>console.log(e))
.finally(()=>client.end())