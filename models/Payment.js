const { Schema, model } = require('mongoose')

const schema = new Schema({
    nomerZayavki: { type: String, required: true },
    zayavkaNa: { type: String, required: true },
    otdaet: { type: String, required: true },
    poluchaet: { type: String, required: true },
    naKoschelek: { type: String, required: true },
    koschelekKlienta: { type: String, required: false },
    nomerKartiKlienta: { type: String, required: false },
    date: { type: String, required: true }
})

module.exports = model('Payment', schema)