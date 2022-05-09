const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const logsSchema = new Schema({
  title: { type: String },
  entry: { type: String },
  shipIsBroken: { type: Boolean, required: true } 
})

const Logs = mongoose.model('Logs', logsSchema);

module.exports = Logs;