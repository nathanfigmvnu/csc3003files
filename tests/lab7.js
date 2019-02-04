let LabData = {
  LAB_ID: 7,
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


describe("Dog", function() {
    it("Should be happy when pet", function() {
      let d = new Dog("Fido");
      d.happinessLevel = 1;
      d.pet();
      expect(d.happinessLevel).toEqual(6);
    });
  });
  
  describe("Cat", function() {
    it("Should purr when happy", function() {
      let c = new Cat("Test");
      c.happinessLevel = 6;
      expect(c.speak()).toEqual("Test says meow");
      c.happinessLevel = 7;
      expect(c.speak()).toEqual("Test says purr");
    });
  });
  
  
  describe("Tiger", function() {
    it("Should roar", function() {
        let t = new Tiger("Tony");
        t.happinessLevel = 6;
        expect(t.speak()).toEqual("Tony says roar");
        t.happinessLevel = 7;
        expect(t.speak()).toEqual("Tony says purr");
    });
    it("Should eat An Entire Goat", function(){
      let t = new Tiger("Tony");
      t.feed("An Entire Goat");
      expect(t.hunger).toEqual(4);
    });
  });