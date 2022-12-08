/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDB } from '../../middlewares/database';
import { jwtValidator } from '../../middlewares/jwt';
import { TaskModel } from '../../models/TaskModel';
import { DefaultMsgResponse } from '../../types/DefaultMsgResponse';
import { Task } from '../../types/Task';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<DefaultMsgResponse | object>
) => {
  try {
    const userId = req?.body?.userId ? req.body.userId : req?.query?.userId;

    switch (req.method) {
      case 'GET':
        return await getTasks(req, res, userId);
      case 'POST':
        return await postTasks(req, res, userId);
      default:
        return res
          .status(405)
          .json({ error: 'O Método HTTP informado não existe' });
    }
  } catch (e: any) {
    console.log('Ocorreu erro ao utilizar as tarefa:', e);
    res
      .status(500)
      .json({ error: 'Ocorreu erro ao utilizar as tarefa,tente novamente' });
  }
};

const getTasks = async (
  req: NextApiRequest,
  res: NextApiResponse<DefaultMsgResponse | object>,
  userId: string
) => {
  const result = await TaskModel.find();
  return res.status(200).json(result);
};

const postTasks = async (
  req: NextApiRequest,
  res: NextApiResponse<DefaultMsgResponse | object>, userId:string
) => {

  const { name, finishDate, finishPrevisionDate} = req.body as Task;
  if(!name){
    return res
        .status(400)
        .json({ error: 'Obrigatório nome da Tarefa' });
  }
  if(!finishPrevisionDate){
    return res
        .status(400)
        .json({ error: 'Obrigatório Previsão da Data Final da Tarefa' });
  }
 
  const task = {name, finishDate, finishPrevisionDate, userId}
  await TaskModel.create(task);

  return res.status(200).json({ message: 'Tarefa cadastrada com sucesso' });
};

export default connectToDB(handler);
