#!/usr/bin/node
const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split the data into rows and filter out empty lines
    const rows = data.split('\n').filter((row) => row.trim() !== '');
    
    // Remove the header (first row)
    const headers = rows.shift();
    
    if (rows.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Initialize a container to hold students by field
    const fieldStudents = {};
    let totalStudents = 0;

    // Process each row
    rows.forEach((row) => {
      const studentData = row.split(',');
      if (studentData.length >= 4) {  // Ensure the row has enough data (columns)
        const firstName = studentData[0].trim();
        const field = studentData[3].trim();

        // If the field is not in the object, initialize it
        if (!fieldStudents[field]) {
          fieldStudents[field] = [];
        }

        // Add student to the corresponding field
        fieldStudents[field].push(firstName);
        totalStudents++;
      }
    });

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students per field and their names
    for (const [field, students] of Object.entries(fieldStudents)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    // Handle file read errors
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
