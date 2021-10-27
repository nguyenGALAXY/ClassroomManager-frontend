import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Masonry from 'react-masonry-css';
import ClassroomCard from '../components/ClassroomCard';

export default function Classroom() {
  const [classroom, setclassroom] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/classes')
      .then((res) => res.json())
      .then((data) => setclassroom(data));
  }, []);
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/classes/${id}`, {
      method: 'DELETE'
    });
    const newclassroom = classroom.filter((note) => note.id !== id);
    setclassroom(newclassroom);
  };
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  };
  console.log('Test data', classroom);
  return (
    <Container size="sm">
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {classroom.map((classroom) => (
          <div key={classroom.id}>
            <ClassroomCard classroom={classroom} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
