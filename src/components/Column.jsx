import './Column.css';
import useStore from '../store';
import Task from './Task';
import { shallow } from 'zustand/shallow';

export default function Column({ state }) {
  const tasks = useStore(store => store.tasks.filter(task => task.state === state), shallow);
  return (
    <div className='column'>
      <p>{state}</p>
      <Task title="Todo"/>
    </div>
  )
}
