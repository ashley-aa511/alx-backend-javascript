/**
*
*Return list of students ids
*@Author - Ashley
*/
export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
      return students.map(student => student.id);
  }
  return [];
}
