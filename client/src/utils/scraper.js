const puppeteer = require("puppeteer")

const link = 'https://www.npmjs.com/package/ajax'

async function scrapeReview(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    page.goto(url)

    const [el] = await page.$x('//*[@id="readme"]/p[2]')
    const src = await el.getProperty('src')
    const srcTxt = src.jsonValue()

    return srcTxt
    //run it on nodejs
}

export default scrapeReview