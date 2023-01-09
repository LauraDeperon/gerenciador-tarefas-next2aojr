/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { useState } from 'react';
import { executeRequest } from "../services/api";

type RegisterProps = {
    setToken(s: string): void
}

export const Register: NextPage<RegisterProps> = ({ setToken }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const register = async () => {
        try {
            setErrorMsg('');
            if (!name || !password || !email || !passwordConfirm) {
                return setErrorMsg('Favor preencher os campos');
            }

            if (password !== passwordConfirm) {
                return setErrorMsg('As senhas não conferem');
            }

            setLoading(true);

            const body = {
                name,
                email,
                password
            }
            const login = email;

            const bodyLogin = {
                login,
                password
            }

            const result = await executeRequest('register', 'POST', body);
            if (result && result.data) {
                const result = await executeRequest('login', 'POST', bodyLogin);
                if (result && result.data) {
                    const obj = result.data;
                    localStorage.setItem('accessToken', obj.token);
                    localStorage.setItem('name', obj.name);
                    localStorage.setItem('email', obj.email);
                    setToken(obj.token);
                    window.location.href = "/"
                }
            }
        } catch (e: any) {
            if (e?.response?.data?.error) {
                setErrorMsg(e?.response?.data?.error);
            } else {
                setErrorMsg('Ocorreu erro ao efetuar cadastro da conta');
            }
        }

        setLoading(false);
    }



    return (
        <div className="container-register">
            <img src="/logo.svg" alt="Logo Fiap" className="logo" />
            <div className="form">
                {errorMsg && <p>{errorMsg}</p>}
                <div>
                    <input type='text' placeholder="Nome"
                        value={name} onChange={event => setName(event.target.value)}
                    />
                </div>

                <div>
                    <input type='text' placeholder="E-mail"
                        value={email} onChange={event => setEmail(event.target.value)}
                    />
                </div>

                <div>
                    <input type='password' placeholder="Senha"
                        value={password} onChange={event => setPassword(event.target.value)}
                    />
                </div>

                <div>
                    <input type='password' placeholder="Confirmar Senha"
                        value={passwordConfirm} onChange={event => setPasswordConfirm(event.target.value)}
                    />
                </div>

                <button onClick={register} disabled={loading}>{loading ? '...Carregando' : 'Cadastrar'}</button>
            </div>
        </div>
    );
}