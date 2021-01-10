const owaspJsonReportReader = require("./json/owaspJsonReportReader");
const createHtmlOverview = require("./html/htmlOverviewCreator");
const writePdfReport = require("./pdf/pdfReportWriter");

const work = async ([owaspReportJsonFile, dumpHtmlToFS = false]) => {
  const owaspReportData = await owaspJsonReportReader(owaspReportJsonFile);
  const html = createHtmlOverview(owaspReportData, dumpHtmlToFS);
  writePdfReport(html);
};

work(process.argv.splice(2));
