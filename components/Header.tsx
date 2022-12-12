/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";

type HeaderProps = {
  sair(): void
}

export const Header: NextPage<HeaderProps> = ({ sair }) => {
  return (
    <div className="container-header">
      <img src="/logo.svg" alt="Logo Fiap" className="logo" />
      <button><span>+</span>Adicionar tarefa</button>
      <div className="desktop">
        <span>Olá, ...</span>
        <img src="/exit-desktop.svg" alt="Sair" onClick={sair} />
      </div>
      <div className="mobile">
        <span>Olá, ...</span>
        <img src="/exit-mobile.svg" alt="Sair" onClick={sair} />
      </div>
    </div>
  );
}