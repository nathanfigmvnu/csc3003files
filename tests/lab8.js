let LabData = {
  LAB_ID: 8,
  failCount: 0,
  passCount: 0,
  reporter: {
    specDone: function(result) {
      LabData.failCount += result.failedExpectations.length;
      LabData.passCount += result.passedExpectations.length;
    },
    jasmineDone: function(info) {
      const endpoint = 'https://na9gsijrt3.execute-api.us-east-1.amazonaws.com/deployed/result';
      const body = {
        "lab": LabData.LAB_ID,
        "name": StudentName ? StudentName : "Unknown",
        "testsPassed": LabData.passCount,
        "testsTotal": LabData.passCount + LabData.failCount
      };
      const params = {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(body)
      };
      fetch(endpoint, params)
        .catch(err => {console.log(err)});
    }
  }
};
jasmine.getEnv().addReporter(LabData.reporter);

function runTests() {
    
}