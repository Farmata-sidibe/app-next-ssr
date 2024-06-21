import React from 'react';

const TaskItem = async ({ task }) => {
//     const {taskId} = params;
//   const task = await getTask(taskId);

  if (!task) {
    return <p>Tâche non trouvée</p>;
  }

  return (
    <div>
      <h1>Détails de la tâche</h1>
      <h2>{task.title}</h2>
      <p>Complété : {task.completed ? 'Oui' : 'Non'}</p>
    </div>
  );
};

export default TaskItem;
