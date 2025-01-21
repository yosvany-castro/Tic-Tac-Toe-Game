import { useState } from "react"

const Kassandra = () => {
    const [test, setTest] = useState(false)
    const [numero, setNumero] = useState(0)

    return (
        <>
            <h1>Mi numero es {numero}</h1>
            <button onClick={() => {
                setNumero(numero + 2)
            }}>Sumar 2 a mi numero</button>
            <br></br>
            {console.log(`El valor de numero es: ${numero}`)}
            <button onClick={() => {
                setTest(!test)
            }}>Forzar renderizado</button>
        </>
    )
}

export default Kassandra