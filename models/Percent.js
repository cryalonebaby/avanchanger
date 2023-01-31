const { Schema, model } = require('mongoose')

const schema = new Schema({
  amount: { type: Number, required: true },
})

module.exports = model('Percent', schema)