let startAmount = 1000;
let transactions = [
  { currency: "USD", amount: 12, type: "withdrawal" },
  { currency: "USD", amount: 104, type: "withdrawal" },
  { currency: "USD", amount: 150, type: "deposit" },
  { currency: "USD", amount: 150, type: "deposit" },
  { currency: "USD", amount: 250, type: "withdrawal" },
  { currency: "USD", amount: 500, type: "deposit" },
  { currency: "USD", amount: 447, type: "withdrawal" },
  { currency: "USD", amount: 120, type: "deposit" },
  { currency: "USD", amount: 58, type: "withdrawal" },
  { currency: "USD", amount: 90, type: "withdrawal" },
];
const usdToVND = 23000;
  console.log(`Balance: $ ${startAmount}`)
  console.log(`Transaction History:`)

const transactionsHistory = transactions.forEach((item) => {
  if(item.type === "withdrawal"){
    console.log(`- You withdrew $ ${item.amount}. The new balance is $ ${startAmount - item.amount}`)
  };
  if(item.type === "deposit"){
    console.log(`- You deposited  $ ${item.amount}. The new balance is $ ${startAmount + item.amount}`);
  };
});


let cloneTransactions = [...transactions];
let cloneTransactions2  = [...transactions];
const allWithdrew = cloneTransactions.filter((item) => item.type === "withdrawal") 
const sumWithdre = allWithdrew.reduce((sum, item) => sum + item.amount, 0);
console.log(`sum withdrawal: ${sumWithdre} $`);
const allDeposited = cloneTransactions2.filter((item) => item.type === "deposit");
const sumDeposited = allDeposited.reduce((sum, item) => sum + item.amount, 0);
console.log(`sum deposit: ${sumDeposited} $`);

const vnd = transactions.map((x) => {
  x.currency = "VND";
  x.amount = x.amount * usdToVND;
  return x;
});
console.log(vnd);;


console.log(transactions.sort((a, b) => {
  if (a.type > b.type) return 1;
  if (a.type === b.type) return 0;
  if (a.type < b.type) return -1;
}));

console.log(allWithdrew.sort((a, b)=> a.amount - b.amount));

console.log(allDeposited.sort((a, b)=> a.amount - b.amount));