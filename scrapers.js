const puppeteer = require("puppeteer");

async function scrapeChannel(url) {
  console.log("working scraper");

  const browser = await puppeteer.launch({
    headless: false,
    executablePath:
      "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitFor(1000);
  /*
  const [el] = await page.$x(
    "/html/body/div[2]/div/div/div[2]/div/div/div/div/div[1]/div[2]/div/div[3]"
  );

  console.log("on page");
  const text = await el.getProperty("textContent");
  const name = await text.jsonValue();
    */

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

  /* const hrefs = await page.evaluate(() =>
     Array.from(
       document.querySelectorAll(".s2gQvd"),
       (element) =>
         element.firstElementChild.firstElementChild.firstElementChild.href
     )
   );
*/
  browser.close();

  console.log({ titles, hrefs });

  return { titles, hrefs };
}

module.exports = {
  scrapeChannel,
};
