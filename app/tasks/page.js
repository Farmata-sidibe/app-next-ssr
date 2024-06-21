import React from 'react';
import Link from 'next/link';
import TaskList from '../components/TaskList';
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Home() {
  const tasks = await getData()

  return (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
  
    <div>
      
      <h1>Liste des tâches</h1>
        <TaskList tasks={tasks} />
    </div>

  </main>
)
}
