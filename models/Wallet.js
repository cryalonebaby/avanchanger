const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    symbol: {type: String, required: true},
    address: {type: String, required: true}, 
    qr: {type: String, required: false}, 
})

module.exports = model('Wallet', schema)