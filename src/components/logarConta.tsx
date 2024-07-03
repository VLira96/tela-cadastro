import FormularioLogin from "./formularioLogin";

const LogarConta = () => {
    return (
        <div className="flex flex-col justify-center bg-yellow-light w-3/6 rounded-r-lg py-24 px-40 gap-12">
            <div className="flex flex-col items-center">
                <h1 className="text-5xl font-bold">Entre na sua conta</h1>
                <p className="text-2xl">Preencha o formulário</p>
            </div>
            <FormularioLogin />
        </div>
    );
}

export default LogarConta;