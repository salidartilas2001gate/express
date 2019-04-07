

const mongoose = require('mongoose');
var uri = "mongodb+srv://admin:<password>@cluster0-xyoyl.mongodb.net/test?retryWrites=true";
uri = uri.replace("<password>", "dartilas")
uri = uri.replace("test", "work2") 

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex :  true});



var async = require('async')
var MusleCar = require('./models/muslecar').MusleCar;

function open(callback) {
  mongoose.connection.on('open', callback)
}

function dropDB(callback) {
  var db = mongoose.connection.db
  db.dropDatabase(callback)
}

function insertMusleCar(callback) {
  async.parallel([
    function (callback) {
      var mustang = new MusleCar({
        model: "1968 Shelby Mustang GT500"
      })
      mustang.save(function (err, mustang) {
        callback(err, "1968 Shelby Mustang GT500")
      })
    },
    function (callback) {
      var hemi = new MusleCar({
        model: "1971 Plymouth Cuda HEMI"
      })
      hemi.save(function (err, hemi) {
        callback(err, "1971 Plymouth Cuda HEMI")
      })
    },
    function (callback) {
      var charger = new MusleCar({
        model: "1971 Dodge Charger R/T"
      })
      charger.save(function (err, charger) {
        callback(err, "1971 Dodge Charger R/T")
      })
    },
    function (callback) {
      var pontiac = new MusleCar({
        model: "1969 Pontiac GTO JUDGE"
      })
      pontiac.save(function (err, pontiac) {
        callback(err, "1969 Pontiac GTO JUDGE")
      })
    },
    function (callback) {
      var corvette = new MusleCar({
        model: "1968 Chevrolet Corvette Stingray (C3)"
      })
      corvette.save(function (err, corvette) {
        callback(err, "1968 Chevrolet Corvette Stingray (C3)")
      })
    }
  ],
    function (err, result) {
      callback(err)
    })
}
function close(callback) {
  mongoose.disconnect(callback)
}

async.series([
  open,
  dropDB,
  insertMusleCar,
  close
],
  function (err, result) {
    if (err) throw err
  }
)
