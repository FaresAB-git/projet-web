const mysql = require('mysql');
const express = require("express");
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'projet site web'
});

connection.connect((error) => {
  if (error) {
    console.error('Erreur de connexion à la base de données:', error);
  } else {
    console.log('Connecté à la base de données MySQL!');
  }
});

connection.query('SELECT * FROM produits', function (error, results, fields) {
  if (error) throw error;

  // Affichez les résultats dans la console
  console.log(results);
});

const sql = "SELECT prix FROM produits";

const prix = new Array(6);

connection.query(sql, (error, results, fields) => {     //on effectue la requette permettant de recuperer tout les prix des produit(stocket l'objet result sou forme de tableau)
  if (error) {
    console.error(error);
    return;
  }

  for (let i = 0; i < results.length; i++) {
    prix[i] = results[i].prix;
    console.log(prix[i]);
  }


  connection.end();

});


app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});
