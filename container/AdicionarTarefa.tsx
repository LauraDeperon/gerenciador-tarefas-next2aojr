/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { NextPage } from 'next';

export const AdicionarTarefa: NextPage = () => {
  return (
    <div className="container-AdicionarTarefa">
      <div>
        <img src="/logo.svg" alt="Logo Fiap" />
        <button>+ Adicionar tarefa</button>
        <h1>Olá, Nome</h1>
        <img src="/exit.svg" alt="Exit" />
      </div>

      <div className="filtrar-tarefas">
        <h1>Tarefas</h1>
        <img src="/mail.svg" alt="Login" />
        <input type='text'>Data prevista de conclusão</input>
        <input type='text'>até</input>
        <input type='combobox'>Status</input>

      </div>


    </div>
  );
}