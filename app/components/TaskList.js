import React from 'react';
import Link from 'next/link';

const TaskList = async ({ tasks }) => {


  return (
    <ul className='max-w-md divide-y divide-gray-200 dark:divide-gray-700'>
          {tasks.map((task) => (
            <li key={task.id} className="pb-3 pt-3  sm:pb-4">
              <a>{task.title}</a>

              <Link  href={`/tasks/task/${task.id}`}>
                <button className="ml-[20px] bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Voir la tâche</button>
              </Link >
            </li>
          ))}
    </ul>



  );
};

export default TaskList;
