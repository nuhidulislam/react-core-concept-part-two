import {useEffect, UseState } from 'react';

export default function Users(){
  const [users, setUsers] = UseState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(data => setUsers(data));
      }, []);

  
  return (
    <div>
      <h3>User:{users.length}</h3>
    </div>
  );
}
