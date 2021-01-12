const core = require("@actions/core");
const owaspJsonReportReader = require("./json/owaspJsonReportReader");
const createHtmlOverview = require("./html/htmlOverviewCreator");
const writePdfReport = require("./pdf/pdfReportWriter");

const work = async (owaspReportJsonFile, dumpHtmlToFS = false) => {
  try {
    const owaspReportData = await owaspJsonReportReader(owaspReportJsonFile);
    const html = createHtmlOverview(owaspReportData, dumpHtmlToFS);
    writePdfReport(html);
  } catch (e) {
    core.setFailed(e);
  }
};

work(core.getInput("owasp-json-report"), true);
