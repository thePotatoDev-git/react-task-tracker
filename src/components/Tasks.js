// const tasks = [
//     {
//         id: 1,
//         text: 'Doctor\'s appointment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: 'School meeting',
//         day: 'Feb 6th at 4:30pm',
//         reminder: true,
//     },
//     {
//         id: 3,
//         text: 'Grocery shopping',
//         day: 'Feb 5th at 7:30pm',
//         reminder: true,
//     },
// ]
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    
    
  return (
    <>
        {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
        ))}
    </>
  )
}

export default Tasks