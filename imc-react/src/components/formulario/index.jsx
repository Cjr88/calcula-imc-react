import { useState } from "react";


const Formulario = () => {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [result, setResult] = useState('')

    const calculaImc = () => {
        const imc = peso / (altura * altura);
        const imcFormatado = imc.toFixed(2);
        setResult(+imcFormatado)
        if (imc < 17) {
            setResult(`De acordo com a tabela do IMC o seu peso se encontra muito abaixo do peso, tenha cuidado! Esse peso é prejudicial a sua saúde!`);
        } else if (imc >= 17 && imc <= 18.49) {
            setResult('De acordo com a tabela do IMC o seu peso se encontra abaixo do peso. Se alimente melhor! ');
        } else if (imc >= 18.5 && imc <= 24.99) {
            setResult('De acordo com a tabela do IMC o seu peso se encontra normal. Continue assim!');
        } else if (imc >= 25 && imc <= 29.99) {
            setResult('De acordo com a tabela do IMC o seu peso se encontra acima do peso. Atenção redobrada na sua alimentação!');
        } else if (imc >= 30 && imc <= 34.99) {
            setResult('De acordo com a tabela do IMC o seu peso se encontra em um grau de Obesidade I. Tenha cuidado esse peso é muito prejudicial a saúde!');
        } else if (imc >= 36.99 && imc <= 35.99){
            setResult('De acordo com a tabela do IMC o seu peso se encontra em um grau de Obesidade II. Procure a ajuda de um profissional!');
        }else {
            setResult('')
        }

    }

    return (
        <div className="container">
            <input
                type="number"
                placeholder="Peso (KG)"
                value={peso}
                onChange={(e) => setPeso(parseFloat(+e.target.value))}
            />
            <input
                type="number"
                placeholder="Altura (M)"
                value={altura}
                onChange={(e) => setAltura(parseFloat(+e.target.value))}
            />
            <button onClick={calculaImc} >Calcular</button>
            <p className="resultado">{result}</p>
        </div>

    )
}
export default Formulario;