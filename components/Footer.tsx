/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';

type FooterProps = {
  sair(): void
}

export const Header: NextPage<FooterProps> = ({sair}) => {
  return (
    <div className='container-header'>
      <img src='/logo.svg' alt='Logo Fiap' />
      <button><span>+</span>Adicionar tarefa</button>
      <div className='desktop'>
        <span>Olá, ...</span>
        <img src="/Exit.svg" alt="Sair" onClick={sair}/>
      </div>
      <div className='mobile'>
        <span>Olá, ...</span>
        <img src="/Exit-1.svg" alt="Sair" onClick={sair} />
      </div>
    </div>
  )
};
