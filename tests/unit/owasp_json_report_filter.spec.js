const owaspJsonReportFilter = require("../../json/owaspJsonReportFilter");
const owaspReportData = require("./testdata/owaspReportData");

describe("Filter contents from the owasp JSON report into a new one", () => {
  it("should returned a filtered object with dependencies sorted according to the severity of their vulnerabilities", () => {
    expect(owaspJsonReportFilter(owaspReportData)).toEqual(expectedResult);
  });
});

var expectedResult = {
  title: "OWASP Scan Results for test-artifact.jar",
  dependencies: [
    {
      name: "third.jar",
      vulnerabilities: [
        {
          name: "CVE-2012-011",
          severity: "CRITICAL",
        },
        {
          name: "CVE-2017-006",
          severity: "MEDIUM",
        },
      ],
    },
    {
      name: "second.jar",
      vulnerabilities: [
        {
          name: "CVE-2200-001",
          severity: "HIGH",
        },
      ],
    },
    {
      name: "first.jar",
      vulnerabilities: [
        {
          name: "CVE-3355-9988",
          severity: "MEDIUM",
        },
        {
          name: "CVE-2019-1981",
          severity: "LOW",
        },
      ],
    },
  ],
};
