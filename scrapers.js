const puppeteer = require("puppeteer");

async function scrapeChannel(url) {
  console.log("working scraper");

  const browser = await puppeteer.launch({headless: false});

  const page = await browser.newPage();
  await page.goto(url);
  await page.waitFor(1000);

  const titles = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(".BjJfJf"),
      (element) => element.textContent
    )
  );

  const hrefs = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(".EDblX"),
      (element) =>
        element.firstElementChild.firstElementChild.firstElementChild.href
    )
  );

  browser.close();

  return { titles, hrefs };
}

module.exports = {
  scrapeChannel,
};
