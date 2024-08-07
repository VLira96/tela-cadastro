import ICampoInput from "../interfaces/ICampoInput";

const CampoInput = (props: ICampoInput) => {
    return (
        <input
            className="bg-yellow-dark w-full rounded-xl px-4 py-2 text-2xl placeholder:text-brown-taupe placeholder:font-bold shadow-lg"
            type={props.tipo}
            placeholder={props.placeholder}
            required
        />
    );
}

export default CampoInput;