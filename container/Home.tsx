import { NextPage } from "next";
import { Footer } from '../components/Footer';
import { Header } from "../components/Header";

type HomeProps = {
    setToken(s: string): void
}

export const Home: NextPage<HomeProps> = ({ setToken }) => {

    const sair = () => {
        localStorage.clear();
        setToken('');
    }

    const adicionarTarefa = () => {
        localStorage.clear();
        setToken('');
    }

    return (
        <>
            <Header sair={sair} />
            <Footer adicionar={adicionarTarefa} />
        </>
    );
}