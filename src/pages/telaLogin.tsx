import CriarConta from "../components/criarConta"
import LadoEsquerdo from "../components/ladoEsquerdo"
import LogarConta from "../components/logarConta";

const TelaLogin = () => {
    return (
        <div className="m-32 flex justify-center h-4/6 drop-shadow-lg">
            <LadoEsquerdo to='/cadastro' childrenLink='CADASTRAR' paragrafo="Crie sua conta agora mesmo."/>
            <LogarConta />
        </div>
    );
}

export default TelaLogin