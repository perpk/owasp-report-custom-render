const owaspReportData = {
  projectInfo: {
    artifactID: "test-artifact.jar",
  },
  dependencies: [
    {
      fileName: "first.jar",
      anotherProp: "propAnother",
      vulnerabilities: [
        {
          blah: "blah",
          name: "CVE-2019-1981",
          severity: "LOW",
        },
        {
          blah: "blah",
          name: "CVE-3355-9988",
          severity: "MEDIUM",
        },
      ],
    },
    {
      fileName: "second.jar",
      anotherProp: "yetAnother",
      vulnerabilities: [
        {
          blah: "blah",
          name: "CVE-2200-001",
          severity: "HIGH",
        },
      ],
    },
    {
      fileName: "third.jar",
      anotherProp: "againAnother",
      vulnerabilities: [
        {
          blah: "blah",
          name: "CVE-2012-011",
          severity: "CRITICAL",
        },
        {
          blah: "blah",
          name: "CVE-2017-006",
          severity: "MEDIUM",
        },
      ],
    },
  ],
};

module.exports = owaspReportData;
