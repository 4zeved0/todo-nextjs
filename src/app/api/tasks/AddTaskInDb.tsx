"use server"
import { prisma } from "@/app/api/db/index";
import useStore from "@/app/lib/stores/useStore";

// type TaskModel = {
//   id: number;
//   name: string;
//   dueDate: Date;
//   isCompleted: boolean;
//   createdAt: Date;
// };

export default async function AddTaskInDb() {
  const { nameTask, dueDate } = useStore.getState()

  console.log(nameTask, dueDate);

  // try {
  //   const task = await prisma.task.create({
  //     data: {
  //       name: nameTask,
  //       dueDate: dueDate,
  //       isCompleted: false,
  //     },
  //   });
  //   console.log('Tarefa adicionada com sucesso:', task);
  //   return task;
  // } catch (error) {
  //   console.error('Erro ao adicionar a tarefa:', error);
  //   throw error;
  // }
}
