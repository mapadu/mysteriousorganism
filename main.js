// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
     let randomIndex = Math.floor(Math.random() * this.dna.length);
     
     if (this.dna[randomIndex] === 'A') {
       this.dna[randomIndex] = 'T';
     } else if (this.dna[randomIndex] === 'T') {
       this.dna[randomIndex] = 'C';
     } else if (this.dna[randomIndex] === 'C') {
       this.dna[randomIndex] = 'G';
     } else {
       this.dna[randomIndex] = 'A';
     }
     return this.dna; 
    },
    compareDNA(object2) {
      let mutual = []
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === object2.dna[i]) {
          mutual.push(this.dna[i])
        }
      };
      let percentage = ((mutual.length / 15) * 100).toFixed();
      console.log(`specimen #${this.specimenNum} and specimen #${object2.specimenNum} have ${percentage}% DNA in common.`)  
      },
    willLikelySurvive() {
      const filtered = this.dna.filter(letter => letter === "C" || letter === "G");
      let percentage2 = (filtered.length / 15) * 100;
      if (percentage2 >= 60) {
        return true
      } else {
        return false
      }
    }   
  }      
}
   
//Testing objects
const newObject = pAequorFactory(1, mockUpStrand());
const newObject2 = pAequorFactory(2, mockUpStrand());
const newObject3 = pAequorFactory(3, mockUpStrand());
const newObject4 = pAequorFactory(4, mockUpStrand());
const newObject5 = pAequorFactory(5, mockUpStrand());
const newObject6 = pAequorFactory(6, mockUpStrand());
const newObject7 = pAequorFactory(7, mockUpStrand());
const newObject8 = pAequorFactory(8, mockUpStrand());
const newObject9 = pAequorFactory(9, mockUpStrand());
const newObject10 = pAequorFactory(10, mockUpStrand());

const instances = [newObject, newObject2, newObject3, newObject4, newObject5, newObject6, newObject7, newObject8, newObject9, newObject10];

const survivedInstances = instances.filter(letter => letter.willLikelySurvive() === true);



// Task 4 - Testing mutate()
//console.log(newObject.dna)
//newObject.mutate();
//console.log(newObject.dna)

//Task 5 - Testing compareDNA()
//newObject.compareDNA(newObject2);

//Task 6 - Testing willLikelySurvive()
//console.log(newObject.willLikelySurvive())

// Task 7 - Testing survivedInstances
//console.log(survivedInstances)