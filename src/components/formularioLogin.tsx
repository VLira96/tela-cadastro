import CampoInput from "./campoInput";

const FormularioLogin = () => {
    return (
        <form className="flex flex-col items-center gap-12">
            <CampoInput placeholder="Email" />
            <CampoInput placeholder="Senha" />
            <button className="bg-brown-taupe text-gray-light text-3xl font-bold px-7 pb-2 pt-1 rounded-full shadow-lg" type="submit">ENTRAR</button>
        </form>
    );
}

export default FormularioLogin;