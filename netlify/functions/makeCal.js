import { Dataset, CheerioCrawler, log, LogLevel } from "crawlee";
import fs from "fs";
import ical from "ical-generator";
import moment from "moment";
// Crawlers come with various utilities, e.g. for logging.
// Here we use debug level of logging to improve the debugging experience.
// This functionality is optional!
log.setLevel(LogLevel.DEBUG);
exports.handler = async function (event, context) {
    const icalData = ical();
// Create an instance of the CheerioCrawler class - a crawler
// that automatically loads the URLs and parses their HTML using the cheerio library.
const crawler = new CheerioCrawler({
  // The crawler downloads and processes the web pages in parallel, with a concurrency
  // automatically managed based on the available system memory and CPU (see AutoscaledPool class).
  // Here we define some hard limits for the concurrency.
  minConcurrency: 10,
  maxConcurrency: 50,

  // On error, retry each page at most once.
  maxRequestRetries: 1,

  // Increase the timeout for processing of each page.
  requestHandlerTimeoutSecs: 30,

  // Limit to 10 requests per one crawl
  maxRequestsPerCrawl: 10,

  // This function will be called for each URL to crawl.
  // It accepts a single parameter, which is an object with options as:
  // https://crawlee.dev/api/cheerio-crawler/interface/CheerioCrawlerOptions#requestHandler
  // We use for demonstration only 2 of them:
  // - request: an instance of the Request class with information such as the URL that is being crawled and HTTP method
  // - $: the cheerio object containing parsed HTML
  async requestHandler({ request, $ }) {
    log.debug(`Processing ${request.url}...`);
    let events = [];
    // Extract data from the page using cheerio.
    // $('.ds-listing-event-title-text').each((i,el)=>{
    //     events[i] = {...events?.[i]??{},title: $(el).text().trim()}
    // }).get()
    // $('.ds-event-time.dtstart').each((i,el)=>{
    //     events[i] = {...events?.[i]??{},time: $(el).text().trim()}
    // }).get()
    // $('.ds-venue-name').each((i,el)=>{
    //     events[i] = {...events?.[i]??{},venue: $(el).text().trim()}
    // }).get()
    $(".event-card")
      .each((i, el) => {
        events[i] = {
          ...(events?.[i] ?? {}),
          title: $(el).find(".ds-listing-event-title-text").text().trim(),
          start: $(el)
            .find(".ds-listing-details meta")
            .filter((i, el) => $(el).attr("itemprop") == "startDate")
            .attr("content"),
          venue: $(el).find(".ds-venue-name span").text().trim(),
          address: $(el).find(".ds-venue-name").find("meta").attr("content"),
          mapLink: $(el)
            .find(".ds-venue-name a")
            .filter((i, el) => {
              return $(el).attr("href")?.includes("http");
            })
            .attr("href")
            ?.replace(/ /g, "%20"),
        };
      })
      .get();



    // for (let event of events) {
    //   const start = moment(event.start);
    //   const end = moment(start).add(2, "hours");

    //   console.log(start, "time");
    //   icalData.createEvent({
    //     start: start,
    //     end: start,
    //     summary: event.title,
    //     description: event.title + "@" + event.venue,
    //     location: event.address || event.venue,
    //   });
    // }

    // Save iCalendar file
    
    // Store the results to the dataset. In local configuration,
    // the data will be stored as JSON files in ./storage/datasets/default
    await Dataset.pushData(
      events
        .filter(({ address }) => address?.includes(" "))
        .map(({ title, venue, start, ...rest }) => ({
          title: `${title} @ ${venue}`,
          venue,
          start: moment(start),
          ...rest,
        }))
    );
    //await Dataset.exportToCSV("MY-DATA");
    //await Dataset.exportToJSON("data");
    const { items } = await Dataset.getData();
    for (let event of items) {
      console.log(event);
      const start = moment(event.start);
      const end = moment(start).add(2, "hours");

      console.log(start, "time");
      icalData.createEvent({
        start: start,
        end: start,
        summary: event.title,
        description: event.title + "@" + event.venue,
        location: event.address || event.venue,
      });
    }
    fs.writeFileSync(`/tmp/${moment().format()}.ics`, icalData.toString());
    
  },

  // Loop through JSON data and add events to the calendar

  // This function is called if the page processing failed more than maxRequestRetries + 1 times.
  failedRequestHandler({ request }) {
    log.debug(`Request ${request.url} failed twice.`);
  },
});

// Run the crawler and wait for it to finish.
await crawler.run([
  "https://do303.com/events/live-music/today?page=1",
  //"https://do303.com/events/live-music/today?page=2",
//  "https://do303.com/events/live-music/today?page=3",
]);

log.debug("Crawler finished.");
// import { BasicCrawler, Dataset } from 'crawlee';

// // Create a BasicCrawler - the simplest crawler that enables
// // users to implement the crawling logic themselves.
// const crawler = new BasicCrawler({
//     // This function will be called for each URL to crawl.
//     async requestHandler({ request, sendRequest, log }) {
//         const { url } = request;
//         log.info(`Processing ${url}...`);

//         // Fetch the page HTML via the crawlee sendRequest utility method
//         // By default, the method will use the current request that is being handled, so you don't have to
//         // provide it yourself. You can also provide a custom request if you want.
//         const { body } = await sendRequest();

//         // Store the HTML and URL to the default dataset.
//         await Dataset.pushData({
//             url,
//             html: body,
//             cal: ${}.map(item=> item.innerText.split('\n').map(text=>text.trim()))
//         });
//     },
// });

// // The initial list of URLs to crawl. Here we use just a few hard-coded URLs.
// await crawler.addRequests([
//     'https://do303.com/events/live-music/today',

// ]);

// // Run the crawler and wait for it to finish.
// await crawler.run();

// console.log('Crawler finished.');
// For more information, see https://crawlee.dev/
// import { CheerioCrawler, ProxyConfiguration } from 'crawlee';
// import { router } from './routes.js';

// const startUrls = ['https://do303.com/events/live-music/today'];

// const crawler = new CheerioCrawler({
//     // proxyConfiguration: new ProxyConfiguration({ proxyUrls: ['...'] }),
//     requestHandler: router,
// });

// await crawler.run(startUrls);
function convertJsonToKml(data) {
  let kml = `<?xml version="1.0" encoding="UTF-8"?>
    <kml xmlns="http://www.opengis.net/kml/2.2">
      <Document>`;
  data.forEach((event) => {
    kml += `
      <Placemark>
        ${Object.entries(event)
          .map(([key, value]) => {
            return `<${key}>${value}</${key}>`;
          })
          .join("\n")}
      </Placemark>`;
  });
  kml += `
      </Document>
    </kml>`;
  return kml;
}
  
 /* return { 
      statusCode: 200,
      headers: {
        "Content-Disposition": `attachment; filename="do303${moment().format()}.ics"`,
      },
      body: icalData.toString()
    } */
}
