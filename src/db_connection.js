var mysql = require('mysql2');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.json());

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sfbnbe9894",
    database: "nodedb",
    port: 3306
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL database!");

    // API endpoint'i
    app.post('/api/data', function (req, res) {
        var name = req.body.name;

        // Veriyi MySQL veritabanına ekleme
        con.query("INSERT INTO name (name) VALUES (?)", [name], function (err, result) {
            if (err) {
                console.error("Veri ekleme hatası:", err);
                res.status(500).json({ success: false, message: 'Veri ekleme hatası' });
            } else {
                console.log("Veri başarıyla eklendi");
                res.json({ success: true, message: 'Veri başarıyla eklendi' });
            }
        });
    });

    // Diğer gerekli ayarlar ve middleware'leri ekleyin
    // Örneğin:
    // app.use(express.static('public'));

    // Sunucu başlatıldığında yapılan işlemler

    var PORT = process.env.PORT || 3306;
    app.listen(PORT, function () {
        console.log("Server is running on port " + PORT);
    });
});