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
    return x
  }

  /** return random text from chains */

  makeText(numWords = 100) {

    let pWords = this.makeChains()
    let words = []
    let w

    let r = Object.keys(pWords).length -1
    let x = Math.floor(Math.random() * Math.floor(r))
    let y = Object.keys(pWords)[x]

    for (let i = 0; words.length <= numWords - 1; i++) {
      if (i === 0) {
        r = pWords[y].length
        x = Math.floor(Math.random() * Math.floor(r))
        w = pWords[y][x]
        words.push(w)
      }
      r = pWords[w].length
      x = Math.floor(Math.random() * Math.floor(r))
          
      if (pWords[w][x] !== null) {
        w = pWords[w][x]
        words.push(w)
      }
      else {
        break
      }  
    }

    return words.join(" ")

  }
}
