const puppeteer = require('puppeteer');

describe('H1 Text', () => {
 test('h1 loads correctly', async () => {
    let browser = await puppeteer.launch({
      headless: false
    });
    let page = await browser.newPage();

    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.title');

    const html = await page.$eval('.title', chicken => chicken.innerHTML);
    expect(html).toBe('Acebook');

    browser.close();
 }, 16000);
});
