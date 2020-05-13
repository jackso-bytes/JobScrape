const puppeteer = require("puppeteer");

async function scrapeChannel(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x(
    "/html/body/div[2]/div/div[1]/g-tabs/div/div/a[1]/div/div[1]/span"
  );
  const text = await el.getProperty("textContent");
  const name = await text.jsonValue();
  /*
  const [el2] = await page.$x('//*[@id="TopNav"]/nav/div[1]/a/svg');
  const src = await el2.getProperty("src");
  const avatarURL = await src.jsonValue();
*/
  browser.close();

  console.log({ name });

  return { name };
}

module.exports = {
  scrapeChannel,
};
