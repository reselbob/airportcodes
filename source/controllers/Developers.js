'use strict';

var utils = require('../utils/writer.js');
var Developers = require('../service/DevelopersService');

module.exports.getAirportCode = function getAirportCode (req, res, next) {
  var code = req.swagger.params['code'].value;
  Developers.getAirportCode(code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAirportCodes = function getAirportCodes (req, res, next) {
  Developers.getAirportCodes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchAirportCodes = function searchAirportCodes (req, res, next) {
  var searchterm = req.swagger.params['searchterm'].value;
  Developers.searchAirportCodes(searchterm)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
