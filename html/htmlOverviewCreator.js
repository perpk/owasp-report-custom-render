const fs = require("fs");
const Handlebars = require("handlebars");
const core = require("@actions/core");

const writeHtmlToFS = (html) => {
  fs.writeFile(`dump_${Date.now()}.html`, html, (err) => {
    err
      ? core.setFailed(err + " couldn't create html dumpfile on the filesystem")
      : null;
  });
};

const createHtmlOverview = (reportData, dumpToFS = false) => {
  const templateFile = fs.readFileSync(
    "./html/templates/overview-template.html",
    "utf-8"
  );

  const template = Handlebars.compile(templateFile);
  const html = template(reportData);
  if (dumpToFS) {
    writeHtmlToFS(html);
  }
  return html;
};

module.exports = createHtmlOverview;
