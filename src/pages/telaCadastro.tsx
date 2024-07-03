import CriarConta from "../components/criarConta";
import LadoEsquerdo from "../components/ladoEsquerdo";

const TelaCadastro = () => {
    return (
        <div className="m-32 flex justify-center h-4/6 drop-shadow-lg">
            <LadoEsquerdo to='/login' childrenLink='ENTRAR' paragrafo="Acesse sua conta agora mesmo." />
            <CriarConta />
        </div>
    );
}

export default TelaCadastro;