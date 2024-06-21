import React from 'react';
import Link from 'next/link';
import TaskList from '@/app/components/TaskList';


export async function generateMetadata({ params }) {
  // read route params
  const {userId} = params;

  // fetch data
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
  const tasks = await res.json();
 
  return {
    title: tasks.length ? `User ${tasks[0].userId} tâche` : 'Utilisateur non trouvé',
    description: tasks.length ? `Tâches pour l'utilisateur ${tasks[0].userId}` : 'Utilisateur non trouvé'
  }
}

async function getData(userId) {
    
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function UserTasks({params}) {
  const {userId} = params;
  const tasks = await getData(userId)
  return (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
  
    <div>
        <h1>Liste des tâches pour le user {tasks[0]?.userId}</h1>
        <TaskList tasks={tasks} />

    </div>

  </main>
)
}
