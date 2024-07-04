import { useState } from "react";
import CampoInput from "./campoInput";
import { User } from "../classes/user";

const FormularioLogin = () => {

    const listaUser: User[] = [];

    listaUser.push(new User('Andre', 'andre@email.com', 'andre123'));
    listaUser.push(new User('Felipe', 'felipe@email.com', 'felipe123'));
    listaUser.push(new User('Rilben', 'rilben@email.com', 'rilben123'));

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const verificaEntrada = () => {

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        verificaEntrada();
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-12">
            <CampoInput placeholder="Email" tipo='text' />
            <CampoInput placeholder="Senha" tipo='password ' />
            <button className="bg-brown-taupe text-gray-light text-3xl font-bold px-7 pb-2 pt-1 rounded-full shadow-lg" type="submit">ENTRAR</button>
        </form>
    );
}

export default FormularioLogin;