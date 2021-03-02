const puppeteer = require("puppeteer");

async function scrapeChannel(url, techInput) {

  const browser = await puppeteer.launch({headless: false});

  const page = await browser.newPage();
  await page.goto(url);
  await page.waitFor(1000);

  let titles = await page.evaluate(() =>
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

  console.log(techInput)

  titles = titles.filter(title=> title.includes(techInput))

  console.log(titles)

  return { titles, hrefs }; // arrays of strings
}

module.exports = {
  scrapeChannel,
};
