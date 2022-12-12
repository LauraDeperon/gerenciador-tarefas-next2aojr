/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";

type HomeProps = {
    setToken(s: string): void
}

export const Home: NextPage<HomeProps> = ({ setToken }) => {
    const doLogout = () => {
        try {
            localStorage.clear();
            setToken('');
        } catch (e: any) {
            console.log('Ocorreu erro ao efetuar login:', e);
        }
    }

    return (
        <>
            <h1>Home</h1>
            <img src="/Exit.svg" alt="Sair" onClick={doLogout} />
        </>
    );
}