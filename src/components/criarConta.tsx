import FormularioCadastro from "./formularioCadastro";

const CriarConta = () => {
    return (
        <div className="flex flex-col justify-center bg-yellow-light w-3/6 rounded-r-lg py-24 px-40 gap-12">
            <div className="flex flex-col items-center">
                <h1 className="text-5xl font-bold">Crie sua conta</h1>
                <p className="text-2xl">Preencha o formulário</p>
            </div>
            <FormularioCadastro />
        </div>
    );
}

export default CriarConta;