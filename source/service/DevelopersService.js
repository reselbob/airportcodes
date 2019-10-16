'use strict';


/**
 * gets all airport codes
 * Gets airport information that corresponds to the submitted aiport code system 
 *
 * code String The aiport code to lookup
 * returns Object
 **/
exports.getAirportCode = function(code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * gets all airport codes
 * Gets all the airport codes stored in the system 
 *
 * returns List
 **/
exports.getAirportCodes = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "code" : "LAX",
  "airport" : "Los Angeles International Aiport"
}, {
  "code" : "LAX",
  "airport" : "Los Angeles International Aiport"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * gets all airport codes that corresponds to the search term
 * Gets airport information that corresponds to the submitted search term 
 *
 * searchterm String searches term to process
 * returns List
 **/
exports.searchAirportCodes = function(searchterm) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "code" : "LAX",
  "airport" : "Los Angeles International Aiport"
}, {
  "code" : "LAX",
  "airport" : "Los Angeles International Aiport"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

