const SeveritiesEnum = {
  CRITICAL: 100,
  HIGH: 90,
  MEDIUM: 80,
  LOW: 79,
};

const createFilteredVulnerabilityObject = ({ name, severity }) => {
  return {
    name: name,
    severity: severity,
  };
};

const compareSeverities = (s1, s2) => {
  if (SeveritiesEnum[s1] < SeveritiesEnum[s2]) {
    return 1;
  }
  if (SeveritiesEnum[s1] > SeveritiesEnum[s2]) {
    return -1;
  }
  return 0;
};

const compareVulnerabilitySeverities = (v1, v2) => {
  return compareSeverities(v1.severity, v2.severity);
};

const findHighestSeverityVulnInDep = (dependency) => {
  return dependency.vulnerabilities.sort(compareVulnerabilitySeverities)[0];
};

const compareDependencySeverities = (d1, d2) => {
  const s1 = findHighestSeverityVulnInDep(d1);
  const s2 = findHighestSeverityVulnInDep(d2);
  return compareSeverities(s1.severity, s2.severity);
};

const filterOwaspJsonReport = (owaspJsonReport) => {
  if (!owaspJsonReport) {
    throw `filterOwaspJsonReport: ${owaspJsonReport} No valid JSON report`;
  }
  let filteredReport = {};
  filteredReport.title = `OWASP Scan Results for ${owaspJsonReport.projectInfo.artifactID}`;
  filteredReport.dependencies = owaspJsonReport.dependencies
    .filter((d) => {
      return d.vulnerabilities;
    })
    .map((d) => {
      return {
        name: d.fileName,
      };
    });

  filteredReport.dependencies.forEach((fd) => {
    const reportDep = owaspJsonReport.dependencies.filter((d) => {
      return d.fileName === fd.name;
    })[0];
    fd.vulnerabilities = reportDep.vulnerabilities.map((v) =>
      createFilteredVulnerabilityObject(v)
    );
  });
  const dependenciesToSort = [...filteredReport.dependencies].sort(
    compareDependencySeverities
  );

  filteredReport.dependencies = dependenciesToSort.sort(
    compareDependencySeverities
  );
  return filteredReport;
};

module.exports = filterOwaspJsonReport;
