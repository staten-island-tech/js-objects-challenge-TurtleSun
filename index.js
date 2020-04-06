/* const Riya = {
    name: "riya",
    dob: 2003,
    graduated: false,
    age: function(){
        console.log(this)
        return 2020 - this.dob; // this refers to whatever object: Riya, Vicky, etc
    }
}; // comma to add on, semis are to end


//basically stuff about global environ

const homer = {
    name: "Homer",
    age: 32,
    family:{
        wife:{
            name: "Marge",
            age: 32
        },
        son:{
            name: 'Bart',
            age: 10
        }
    },
    pets: ['cat', 'dog']
};

homer.family.daughter = {
    name: "Lisa",
    age: 8
};
 */


/* const Riya = {
    name: "riya",
    dob: 2003,
    graduated: false,
    age: function(){
        console.log(this)
        return 2020 - this.dob;
    }
};

const { name, age } = Riya;

cont calc = {
    add: function() {
        return x + y;
    }
};
const { add, divide, cosin } = calc; */

/* const Angel = Riya; // this is not a copy, it's reference to
Angel.name = "Angel"; 
const Angel = {};
Angel.dob = Riya.dob; //this is the "right" way
*/


const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
  ];
   
  //Challenge Questions
  //1) Filter all presidents, leaving only the Democratic ones
   const Dems = presidents.filter(president => president.party === "D");
  //2)Filter all presidents to leave only one term Republican presidents HINT use If statement
   const Repu = presidents.filter(president => president.party === "R");
   const UnoT = presidents.filter(president => president.terms === "1");
   if(Reps === true && UnoT === true){
       console.log("AA DA")
   };
  //3) return only the last three presidents
        Lasts = [9, 10, 11];
  //4) log all dems who served 2 terms. HINT use chain filter, filter and slice
   
  //BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
    if(){

    }