'use strict';


/**
 * Create a pet
 *
 * no response value expected for this operation
 **/
exports.createPets = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List all pets
 *
 * limit Integer How many items to return at one time (max 100) (optional)
 * returns Pets
 **/
exports.listPets = function(limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "id" : 0,
  "tag" : "tag"
}, {
  "name" : "name",
  "id" : 0,
  "tag" : "tag"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Info for a specific pet
 *
 * petId String The id of the pet to retrieve
 * returns Pet
 **/
exports.showPetById = function(petId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : 0,
  "tag" : "tag"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

