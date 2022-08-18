const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const timeout = require('connect-timeout')
const path = require('path')

const AdminBro = require('admin-bro')
const mongooseAdminBro = require('@admin-bro/mongoose')
const expressAdminBro = require('@admin-bro/express')
const Wallet = require('./models/Wallet')
const Payment = require('./models/Payment')
const User = require('./models/User')

const app = express()

//Admin Bro
AdminBro.registerAdapter(mongooseAdminBro)
const AdminBroOptions = {
    resources: [Wallet, Payment, User],
    rootPath: '/admin/crypto/123123'
}

const adminBro = new AdminBro(AdminBroOptions)
const adminContent = expressAdminBro.buildRouter(adminBro)

app.use(timeout(120000))
app.use(adminBro.options.rootPath, adminContent) //localhost:5000/admin

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/payment', require('./routes/payment.routes'))

const PORT = process.env.PORT || 5000

if(process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.use('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`App started on port ${PORT}`))
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1)
    }
}

start()