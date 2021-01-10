const { default: HTMLToPDF } = require("convert-html-to-pdf");
const fs = require("fs");

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
  fs.writeFile(`./dump_${Date.now()}.pdf`, pdf, (err) => {
    err ? console.log(err) : null;
  });
};

module.exports = writePdfReport;
