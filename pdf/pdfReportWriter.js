const { default: HTMLToPDF } = require("convert-html-to-pdf");
const fs = require("fs");
const core = require("@actions/core");

const writePdfReport = async (html) => {
  if (!html) {
    throw `The report ${html} is not valid`;
  }

  const convertible = new HTMLToPDF(html);
  let pdf;
  try {
    pdf = await convertible.convert();
  } catch (e) {
    throw e;
  }

  fs.writeFile(`./pdf`, pdf, (err) => {
    err ? core.setFailed(err) : null;
  });

  core.setOutput("pdf", "./pdf");
};

module.exports = writePdfReport;
