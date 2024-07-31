// js/main.ts

interface Student {
firstName: string;
lastName: string;
age: number;
location: string;
}

//Create two students
const student1: Student ={
firstName: "Ashley",
lastName: "Awuor",
age: 22,
location: "Nairobi"
};

const student2: Student ={
firstName: "Max",
lastName: "Cole",
age: 11,
location: "Embu"
};

//Create an array to hold the students
const studentsList: Student[] = [student1, student2];

//Function to render the table
export default function renderTable(students, Student[]):void {
//Create table and table body elements
const table = document.createElement('table');
const tbody = document.createElement('tbody');

//Append header row
const headerRow = document.createElement('tr');
const header1 = document.createElement('th');
header1.textContent = 'First Name';
const header2 = document.createElement ('th');
header2.textContent = 'Location';
headerRow.appendChild(header1);
headerRow.appendChild(header2);
tbody.appendChild(headerRow);

//Append student rows
students.forEach(student => {
const row = document.createElement('tr');
const firstNameCell = document.createElement('td');
firstNameCell.textContent = student.firstName;
const locationCell = document.createElement('td');
locationCell.textContent = student.location;
row.appendChild(firstNameCell);
row.appendChild(locationCell);
tbody.appendChild(row);
});

//Append table body to table and add table to the document
table.appendChild('tbody');
document.body.appendChild('table');
}

//Cll the function to render the table
renderTable(studentsList);