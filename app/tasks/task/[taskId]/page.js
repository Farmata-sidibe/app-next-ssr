import React from 'react';
import TaskItem from '../../../components/taskItem'

export async function generateMetadata({ params }, parent) {
  // read route params
  const {taskId} = params;
  // fetch data
  const task = await fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`).then((res) => res.json())
 
  return {
    title: task.title,
    description: `Détails de la tâche : ${task.title}`
  }
}


async function getTask(taskId) {

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`);
  if (!res.ok) {
    return {
      notFound: true,
    };
  }
  return res.json()
}
 
export default async function TaskDetail({params}) {

  const {taskId} = params;
  const task = await getTask(taskId);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TaskItem task={task} />

    </main>
)
}


