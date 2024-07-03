import { Link } from "react-router-dom";
import ILadoEsquerdo from "../interfaces/ILadoEsquerdo";

const LadoEsquerdo = (props: ILadoEsquerdo) => {
    return (
        <div className="flex flex-col-reverse px-10 pb-16 bg-brown-taupe text-gray-light w-1/5 rounded-l-lg gap-48">
            <div className="flex flex-col items-center gap-1">
                <Link className="text-3xl font-bold px-7 pb-2 pt-1 border border-2 rounded-full" to={props.to}>{props.childrenLink}</Link>
                <Link className="text-sm" to='https://www.google.com/url?sa=i&url=https%3A%2F%2Facesso.gov.br%2Ffaq%2F_perguntasdafaq%2Fformarrecuperarconta.html&psig=AOvVaw213nlUQaqPqoEGETEhklOg&ust=1719953899801000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCX8tzdhocDFQAAAAAdAAAAABAE'>Esqueci minha senha</Link>
            </div>
            <div className="">
                <h2 className="text-3xl font-bold">Seja bem vindo!</h2>
                <p className="text-3xl">{props.paragrafo}</p>
            </div>
        </div>
    );
}

export default LadoEsquerdo;