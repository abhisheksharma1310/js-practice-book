require("dotenv").config();
const mongoose = require("mongoose");
const Person = require("./models/person.js");

const URI = process.env.MONGO_URI;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

const createAndSavePerson = (done) => {
  const person = new Person({
    name: "Abhishek Sharma",
    age: 26,
    favoriteFoods: "Halwa",
  });
  person
    .save()
    .then((docs) => done(null, docs))
    .catch((err) => done(err));
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople)
    .then((docs) => done(null, docs))
    .catch((err) => done(err));
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName })
    .then((docs) => done(null, docs))
    .catch((err) => done(err));
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food })
    .then((docs) => done(null, docs))
    .catch((err) => done(err));
};

const findPersonById = (personId, done) => {
  Person.findById(personId)
    .then((docs) => done(null, docs))
    .catch((err) => done(err));
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId)
    .then((doc) => {
      // add foods to favoriteFoods array
      doc.favoriteFoods.push(foodToAdd);
      return doc.save();
    })
    .then((updatedDoc) => done(null, updatedDoc))
    .catch((err) => done(err));
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOne({ name: personName })
    .then((doc) => {
      //change age
      doc.age = ageToSet;
      return doc.save();
    })
    .then((updatedDoc) => done(null, updatedDoc))
    .catch((err) => done(err));
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId)
    .then((doc) => done(null, doc))
    .catch((err) => done(err));
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  Person.remove({ name: nameToRemove })
    .then((doc) => done(null, doc))
    .catch((err) => done(err));
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  Person.find({ favoriteFoods: foodToSearch })
    .sort("name") // Sort by name ascending
    .limit(2) // Limit to 2 results
    .select("-age") // Exclude the age field
    .exec() // Execute the query
    .then((data) => done(null, data))
    .catch((err) => done(err));
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
