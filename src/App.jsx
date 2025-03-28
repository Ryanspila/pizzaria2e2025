import { useState } from "react"

function App(){

   const  [nome, setNome] = useState ('Ronaldo')

   var idade= 18;
   let time = 'palmeiras';
   const pi = 3.14;
    
  const Formulario = (props)=>{
    const  [nome, setNome] = useState ('Ronaldo')
    const  [idade, setIdade] = useState ('18')
    const [time, setTime] = useState ('palmeiras')
    const  [pi] = useState ('3.14')

    //var idade = 18;
    //let time = 'Palmeiras';
    //const pi = 3.14;




     return (
      <div>

  <input 
        className="nome"  
        onChange={(e)=>{set(e.target.value)}} 
        placeholder= {props.sombra}     
        type="text" />

      <button
       className="botao"
       onClick={()=>
        {alert(props.nome + 'idade é' + props.idade)}}
      
      >
        CLIQUE AQUI
      </button>
      </div>


     )
  } 

    return (
      <div>
        <h3>Pizzaria 2E</h3>

        <Formulario nome="Ryan"  
            idade={45}
        sombra="Digite nome.." />
        <Formulario nome="Miguel"  sombra="Digite nome.." />
        <Formulario nome="Luiz"  sombra="Digite nome.." />
        <Formulario nome="Ruan"  sombra="valor de pi"/>

      

      </div>
    )
}

  export default App