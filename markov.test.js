const { MarkovMachine } = require("./markov");
describe("getCartTotal", function () {
    let markov;

    beforeEach(function () {
      markov = new MarkovMachine("the cat in the hat");
    });

    test('add should return sum', function () {
    let markov = new MarkovMachine("the cat in the hat");
    let random1 = markov.makeText(numWords=50)
    let random2 = markov.makeText(numWords=50)
    expect(random1).not.toEqual(random2);
  });
  
});

// How to you test for randomness?