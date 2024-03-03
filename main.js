import './style.css';
let transactions = ['bin', 'can', 'bin', 'bin'];
let result = groupTransactions(transactions);
let resultsFormatted = '<br>';

result.forEach((value) => {
  resultsFormatted += value + '<br>';
});

document.querySelector('#app').innerHTML = `
  <div>Transactions: ${resultsFormatted}</div>`;

function groupTransactions(transactions) {
  let sortedByName = transactions.sort();
  let newSort = [];

  const transactionsNumbers = sortedByName.reduce((acc, value) => {
    acc[value] = (acc[value] ?? 0) + 1;
    return acc;
  }, {});

  const resultSort = Object.entries(transactionsNumbers).sort(
    ([, a], [, b]) => b - a
  );

  resultSort.forEach((value, index) => {
    newSort[index] = value.join(' ');
  });

  return newSort;
}
