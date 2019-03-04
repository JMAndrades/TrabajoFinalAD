const {Client} = require('pg');

const client = new Client({
    user: "postgres",
    password: "12345",
    host: "localhost",
    port: 5432,
    database: "Clients"
});


client.connect()
.then(() => { console.log('Conectado correctamente'); })
.then(() => client.query("INSERT INTO Clients values ($1, $2, $3, $4)", [100, 'Jhon', 'USA', '123456789']))
.then(() => client.query("SELECT * from Clients"))
.then(results => console.table(results.rows))
.catch(e => console.log)
.finally(() => client.end());