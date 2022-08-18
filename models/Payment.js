const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    nomerZayavki: {type: String, required: true},
    zayavkaNa: {type: String, required: true},
    otdaet: {type: String, required: true},
    naKoschelek: {type: String, required: true},
    koschelekKlienta: {type: String, required: true},
    date: {type: String, required: true}
})

module.exports = model('Payment', schema)