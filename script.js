const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
 let prices = document.querySelectorAll('.price');
	let sum =0;
prices.forEach((ele)=>{ const value = parseFloat(ele.textContent);
  if (!isNaN(value)) {
    sum += value;
  }})

const totalRow = document.createElement('tr');
const cell1 = document.createElement('td');
cell1.textContent = 'Total';

const cell2 = document.createElement('td');
cell2.textContent = sum;

// Append cells to row
totalRow.appendChild(cell1);
totalRow.appendChild(cell2);

// Append row to the table
const table = document.querySelector('table');
table.appendChild(totalRow);
	
};

getSumBtn.addEventListener("click", getSum);

