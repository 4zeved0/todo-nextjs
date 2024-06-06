import { create } from 'zustand';

interface State {
  addTaskPopUp: boolean;
  isCompleted: boolean;
  dueDate: Date;
  nameTask: string;
}

interface Actions {
  toggleAddTaskPopUp: () => void;
  updateTaskName: (nameTask: State['nameTask']) => void
  updateDate: (dueDate: State['dueDate']) => void
}

export type ZustandStore = State & Actions;

const useStore = create<ZustandStore>((set) => ({
  addTaskPopUp: false,
  toggleAddTaskPopUp: () => set((state) => ({ addTaskPopUp: !state.addTaskPopUp })),
  isCompleted: false,
  dueDate: new Date(),
  nameTask: '',
  updateTaskName: (nameTask) => set(() => ({ nameTask: nameTask })),
  updateDate: (dueDate) => set(() => ({ dueDate: dueDate })),
}));

export default useStore;
