const { Schema, model } = require('mongoose')

const schema = new Schema({
    symbol: { type: String, required: true },
    address: { type: String, required: true },
    qr: { type: String, required: false },
    percent: { type: Number, required: false },
})

module.exports = model('Wallet', schema)