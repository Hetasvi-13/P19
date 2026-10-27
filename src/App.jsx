import React, { useState } from 'react';
import StudentList from './Components/StudentList';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Rahul' },
    { id: 2, name: 'Priya' },
    { id: 3, name: 'Amit' }
  ]);

  return <StudentList students={students} setStudents={setStudents} />;
}

export default App;