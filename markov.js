/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let x = {}
    for (let i = 0; i < this.words.length; i++) {
      // console.log(this.words[i])
      
      if (x[this.words[i]] === undefined) {
        if (this.words[i + 1] !== undefined) {
          x[this.words[i]] = [this.words[i + 1]]
        }
        else {
          x[this.words[i]] = [null]
        }
      }
      else {
        if (this.words[i + 1] !== undefined) {
          x[this.words[i]].push(this.words[i + 1]) 
        }
        else {
          x[this.words[i]].push(null) 
        }
      }
    }
    console.log(x)
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}


x = {
  "the": ["cat", "hat"], 
"cat": ["in"], 
"in": ["the"], 
"hat": [null]
}