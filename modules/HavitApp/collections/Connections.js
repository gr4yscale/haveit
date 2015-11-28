//Connections = new Mongo.Collection("connections");

const Connections = Graviton.define("connections"); // define a Graviton so we can build a model easily

export default Connections;

// put convenience getters on models

// handle validations with simple-schema
// https://github.com/emmerge/graviton/issues/8
