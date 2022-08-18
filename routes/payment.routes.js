const {Router} = require('express')
const puppeteer = require("puppeteer")
const router = Router()
const Wallet = require('../models/Wallet')
const Payment = require('../models/Payment')

// /api/payment/reviews
// router.get(
//     '/abc',
//     (req, res) => {
//         try {
//             // const link = 'https://www.bestchange.ru/avanchange-exchanger.html#review1405564'
//             const link = 'https://avanchange.com/ru/reviews/'

//             async function scrapeReview(url) {
//                 const browser = await puppeteer.launch()
//                 const page = await browser.newPage()
//                 await page.goto(url)

//                 const names = await page.evaluate(() => {
//                     return Array.from(document.querySelectorAll("#list > div > div.reviews-l > div > div.name > a")).map(x=>x.textContent)
//                 })
//                 const text = await page.evaluate(() => {
//                     return Array.from(document.querySelectorAll("#list > div > div.reviews-l > div > div.text")).map(x=>x.textContent)
//                 })
//                 const date = await page.evaluate(() => {
//                     return Array.from(document.querySelectorAll("#list > div > div.reviews-l > div > div.date")).map(x=>x.textContent)
//                 })
//                 const links = await page.evaluate(() => {
//                     return Array.from(document.querySelectorAll("#list > div > div.reviews-l > div > div.name > a[href]")).map(x=>x.getAttribute('href'))
//                 })
//                 const amount = await page.evaluate(() => {
//                     return Array.from(document.querySelectorAll("#list > div > div.reviews-r > div.reviews-total > div.o")).map(x=>x.textContent)
//                 })
                

//                 res.send({
//                     names: names,
//                     text: text,
//                     date: date,
//                     links: links,
//                     amount: amount
//                 })

//                 await browser.close()
//             }
            
//             scrapeReview(link)
            
//         } catch (e) {
//             res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'})
//         }
//     }
// )

// /api/payment/wallets
router.get(
    '/wallets',
    (req, res) => {
        try {
           Wallet.find()
           .then((result) => {
               res.send(result)
           })
           .catch(e => {
               console.log(e);
           })

        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)
// /api/payment/sendInfo
router.post(
    '/sendInfo',
    async (req,res) => {
        try {
            const {nomerZayavki, zayavkaNa, otdaet, naKoschelek, koschelekKlienta, date} = req.body
            const payment = new Payment({nomerZayavki, zayavkaNa, otdaet, naKoschelek, koschelekKlienta, date})

            await payment.save()
            res.status(201).json({ message: 'Заявка отправлена'})
            
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)

module.exports = router