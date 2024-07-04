import CampoInput from "./campoInput";

const FormularioCadastro = () => {
    return (
        <form className="flex flex-col items-center gap-12">
            <CampoInput placeholder="Nome" tipo='text' />
            <CampoInput placeholder="Email" tipo='text' />
            <CampoInput placeholder="Senha" tipo='password' />
            <button className="bg-brown-taupe text-gray-light text-3xl font-bold px-7 pb-2 pt-1 rounded-full shadow-lg" type="submit">CADASTRAR</button>
        </form>
    );
}

export default FormularioCadastro;