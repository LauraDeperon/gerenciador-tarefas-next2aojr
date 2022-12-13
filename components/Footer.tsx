/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';

type FooterProps = {
  adicionar(): void
}

export const Footer: NextPage<FooterProps> = ({ adicionar }) => {
  return (

    <div className='container-footer'>
      <span>© Copyright 2021. Todos os direitos reservados</span>
      <button><img src="/adicionar-mobile.svg" alt="Adicionar Tarefa" onClick={adicionar} />Adicionar uma tarefa</button>
    </div>

  )
};
