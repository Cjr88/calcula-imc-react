import { useState } from "react";

const Formulario = () => {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultadoImc, setResultadoImc] = useState('');

    const calculaImc = (peso, altura) => {
        altura = altura / 100;
        const imc = peso / (altura * altura);

        if (imc < 17) {
            setResultadoImc(` Muito abaixo do peso!`);
        } else if (imc >= 17 && imc <= 18.49) {
            setResultadoImc(`Abaixo do peso!`);
        } else if (imc >= 18.5 && imc <= 24.99) {
            setResultadoImc(`Peso normal!`);
        } else if (imc >= 25 && imc <= 29.99) {
            setResultadoImc(`Acima do peso!`);
        } else if (imc >= 30 && imc <= 34.99) {
            setResultadoImc(`Obesidade I`);
        } else {
            setResultadoImc(`Obesidade II`);
        }

    }

    return (
        <form >
            <input type="number" placeholder="Peso" value={peso} onChange={evento => setPeso(parseFloat(evento.target.value))} />
            <input type="number" placeholder="Altura" value={altura} onChange={evento => setAltura(parseFloat(evento.target.value))} />
            <button type="submit" onClick={calculaImc}>Calcular</button> 
            <p>{resultadoImc}</p>
        </form>
    )
}
export default Formulario;