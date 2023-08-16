let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expnese-table-body');
const totalAmountCell = document.getElementById('total-amount');



addBtn.addEventListener('click', function() {

    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <=0 ) {
        alert('Please enter a valid amount')
        return;
    }
    if(date === '') {
        alert('Please select a date')
        return;
    }
    expenses.push({category, amount, date});

    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });

    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);

    amountInput.value = '';
    dateInput.value = '';

});

    
    

// function saveData(){
//     let sString = JSON.stringify(expenses);
//     localStorage.setItem("data", sString);
    
// }



// function getData(){
//     let nString = localStorage.getItem("data");
//     let expenses = JSON.parse(nString); 
//     if (expenses === ""){
//         console.log('empty');
//     }else{
//         console.log(expenses[1].amount);
//         for (let i = 0; i < expenses.length; i++) {
//             console.log(expenses[i].amount);
//             totalAmount += expenses[i].amount;
//             console.log(totalAmount);
//             totalAmountCell.textContent = totalAmount;
    
//             expenses[i].date = new Date(expenses[i].date).getFullYear() + "-" + (new Date(expenses[i].date).getMonth()+1) + "-" + (new Date(expenses[i].date).getDay()+1);
        
//             const newRow = expensesTableBody.insertRow();
//             const categoryCell = newRow.insertCell();
//             const amountCell = newRow.insertCell();
//             const dateCell = newRow.insertCell();
//             const deleteCell = newRow.insertCell();
//             const deleteBtn = document.createElement('button');
//             deleteBtn.textContent = 'Delete';
//             deleteBtn.classList.add('delete-btn');
//             deleteBtn.addEventListener('click', function() {
//                 expenses.splice(expenses.indexOf(expenses[i]), 1);
        
//                 totalAmount -= expenses[i].amount;
//                 totalAmountCell.textContent = totalAmount;
        
//                 expensesTableBody.removeChild(newRow);
//             });
//             categoryCell.textContent = expenses[i].category;
//             amountCell.textContent = expenses[i].amount;
//             dateCell.textContent = expenses[i].date;
//             deleteCell.appendChild(deleteBtn);
//           }
        
//     }
// }


    

getData();


