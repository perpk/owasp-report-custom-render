const fs = require("fs");
const owaspJsonReportFilter = require("./owaspJsonReportFilter");

const readJsonReportFromFS = async (fsLocation) => {
  if (!fsLocation) {
    throw `readJsonReportFromFS: ${fsLocation} is no valid location on the filesystem`;
  }
  const owaspJsonReport = fs.readFileSync(fsLocation, "utf-8");
  return JSON.parse(owaspJsonReport);
};

const readJson = async (fsLocation) => {
  const owaspJsonReport = await readJsonReportFromFS(fsLocation);
  return owaspJsonReportFilter(owaspJsonReport);
};

module.exports = readJson;
