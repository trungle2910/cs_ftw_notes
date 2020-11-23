const inventors = [
  "Albert Einstein",
  "Issac Newton",
  "Galileo Galilei",
  "Marie Curie",
  "Johannes Kepler",
  "Nicolaus Copernicus",
  "Max Planck",
  "Katherine Blodgett",
  "Ada Lovelace",
  "Sarah E. Goode",
  "Lise Meitner",
  "Hanna Hammarstrom",
];

// const fistA = inventors.filter((item)=>item[0] === "A");
// console.log(`fistA`, fistA)

// const same = inventors.filter((item)=>(item.split(' ')[0][0] === item.split(' ')[1][0]));
// console.log(`same Fist Name`, same)

// console.log(`sort Array `, inventors.sort());

// console.log(`sort Array shortest name first.`, inventors.sort((a, b) => a.length - b.length));

// const itemLength =  inventors.map((item) => item.length);
// console.log(`Print out an array of the length of every inventor's full name.`, itemLength);

// const uppercaseName =  inventors.map((item) => item.toUpperCase());
// console.log(`Print out an array of all the inventors' names in uppercase.`, uppercas1eName);

// const arrayName = inventors.reduce((sum, item) => sum + item.split(' ')[0] + ",  ","");
// console.log(`Create a string that has the first name of every inventor: `, arrayName);

// const arrayNameLength  = inventors.reduce((sum, item) => sum + item.length,0);
// console.log(`Calculate sum of the length of all inventer's names `, arrayNameLength);