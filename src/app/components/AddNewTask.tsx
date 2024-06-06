"use client"

import useStore from '@/app/lib/stores/useStore';
import AddTaskInDb from '@/app/api/tasks/AddTaskInDb';
import { convertStringToDate } from '../utils/dateUtils';

export default function AddNewTask() {
  const { addTaskPopUp, toggleAddTaskPopUp, updateTaskName, updateDate, nameTask } = useStore();

  const updateDbInformations = () => {
    const nameTaskHTML = document.getElementById('nameHtml') as HTMLInputElement
    const dateTaskHTML = document.getElementById('dueDateHtml') as HTMLInputElement

    if (nameTaskHTML.value && dateTaskHTML.value !== '') {
      updateTaskName(nameTaskHTML.value)
      updateDate(convertStringToDate(dateTaskHTML.value))
      AddTaskInDb()
      console.log(nameTask);

    } else {
      console.log("Favor preencher campos");
    }
  }


  return (
    <div>
      {addTaskPopUp ?
        <div className='inset-center bg-[#26355D] py-8 px-10 rounded-md shadow-md text-slate-100'>
          <div className='absolute left-3 top-3' onClick={() => toggleAddTaskPopUp()}>
            <svg className='hover:fill-red-500 hover:bg-red-500 rounded-full p-1' fill="none" viewBox="0 0 24 24" height="1.5em" width="1.5em">
              <path
                fill="currentColor"
                d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
              />
            </svg>
          </div>
          <h1 className='mb-10 text-center'>Adicionar Tarefa</h1>
          <form className='flex flex-col gap-5'>
            <div className='flex flex-col'>
              <label>Qual nome da tarefa?</label>
              <input id='nameHtml' className='p-2 rounded-md text-[#26355D] focus:outline-none' required
              ></input>
            </div>
            <div className='flex flex-col'>
              <label>Data para finalizar</label>
              <input id='dueDateHtml' className='p-2 rounded-md text-[#26355D] focus:outline-none' type='date' required
              ></input>
            </div>
            <button
              type='submit'
              className='bg-slate-100 rounded-md py-2 text-[#26355D] hover:bg-[#26355D] hover:text-slate-100 hover:border-slate-200 hover:border-[1px]'
              onClick={(e) => {
                e.preventDefault();
                updateDbInformations()
                AddTaskInDb()
              }
              }
            >Salvar</button>
          </form>
        </div> :
        <button
          className="absolute bottom-10 right-10 rounded-full bg-[#26355D] p-3 text-white"
          onClick={() => toggleAddTaskPopUp()}
        >
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1.5em"
            width="1.5em"
          >
            <path d="M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4z" />
          </svg>
        </button>
      }
    </div >
  );
}
