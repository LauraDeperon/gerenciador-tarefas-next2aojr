import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { DefaultMsgResponse } from '../types/DefaultMsgResponse';
import mongoose from 'mongoose';

export const connectToDB =
  (handler: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse<DefaultMsgResponse>) => {
    console.log(
      'Mongo está conectado?',
      mongoose.connections[0].readyState === 1 ? 'Sim' : 'Não'
    );
    if (mongoose.connections[0].readyState === 1) {
      return handler(req, res);
    }

    const { DB_CONNECTION_STRING } = process.env;
    if (!DB_CONNECTION_STRING) {
      return res
        .status(500)
        .json({ error: 'Env DB_CONNECTION_STRING não informada.' });
    }

    mongoose.connection.on('connected', () =>
      console.log('Conectado com Sucesso')
    );
    mongoose.connection.on('error', (error) =>
      console.log('Ocorreu um erro com a conexão ao Banco', error)
    );
    await mongoose.connect(DB_CONNECTION_STRING);

    return handler(req, res);
  };
