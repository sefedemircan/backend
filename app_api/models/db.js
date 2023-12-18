var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/mekanbul';
mongoose.connect(dbURI);
mongoose.connection.on("connected", function () {
    console.log(dbURI + "adresindeki veritabanına bağlanıldı!\n");
});

mongoose.connection.on("error", function () {
    console.log("Bağlantı hatası!\n");
});

mongoose.connection.on("disconnected", function () {
    console.log("Bağlantı kesildi!\n");
});

process.on("SIGINT",() => {
    mongoose.connection.close()
    console.log("Uygulama kapatıldı");
    process.exit(0)
})
require('./venue');