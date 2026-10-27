import React from 'react';

function StudentList({ students, setStudents }) {
  
 return (
    <div>
      <h2>Student List</h2>

      {students.map(student => (
        <p key={student.id}>
          {student.id}. {student.name}
          <button onClick={() => deleteStudent(student.id)}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
}

export default StudentList;