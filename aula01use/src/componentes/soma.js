import React, {useState} from 'react';

function CalculadoraDeSoma(){
    const[numero1, SetNumero1]= useState('');
    const[numero2, SetNumero2]= useState('');
    const[soma, SetSoma]= useState(null);
    const[sub, SetSubtracao]= useState(null);

    const calculadoraSoma = () =>{
        const resultado = Number(numero1) + Number(numero2);
        SetSoma(resultado);
    };

    const calculadoraSubtracao = () =>{
        const resultado = Number(numero1) - Number(numero2);
        SetSoma(resultado);
    };

    return(
        <div> 
            <input type="number"
            value={numero1}
            onChange={(e) => SetNumero1(e.target.value)}
            placeholder= " Digite o primeiro número" 
            />

             <input type="number"
              value={numero2}
              onChange={(e) => SetNumero2(e.target.value)}
              placeholder='Digite o segundo numero' 
              />

              <button onClick={calculadoraSoma}> Calcular Soma</button>
              {soma !==null && <p> Resultado:{soma}</p>}
              <button onClick={calculadoraSubtracao}> Calcular Subtração</button>
              {sub !==null && <p> Resultado:{sub}</p>}
        </div> 
         );
}

export default CalculadoraDeSoma;