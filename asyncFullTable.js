const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "12345",
    host: "localhost",
    port: 5432,
    database: "Clients"
})

execute()

function execute(){
    await client.connect()
    console.log("Conectado satisfactoriamente")
    const result = await client.query("SELECT * FROM Client")
    console.table(results.rows)
    await client.end()
    console.log("Cliente desconectado satisfactoriamente.")
}