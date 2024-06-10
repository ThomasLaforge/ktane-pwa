import { useMemo, useState } from "react"

const words = [

"about",
"every",
"large",
"plant",
"spell",
"these",
"where",
"could",
"house",
"place",
"sound",
"there",
"water",
"write",
"after",
" rst",
"learn",
"point",
"still",
"thing",
"which",
"again",
"found",
"never",
"right",
"study",
"think",
"world",
"below",
"great",
"other",
"small",
"their",
"three",
"would",
]

export default function PasswordGame() {
    const [inputs, setInputs] = useState(["","","","",""])

    const solutions = useMemo(() => {
        let solutions: string[] = []

        for (let i = 0; i < inputs[0].length; i++) {
            const letter = inputs[0][i]
            solutions = [...solutions, ...words.filter(word => word[0] === letter)]
        }

        for(let letterIndex = 1; letterIndex < words[0].length; letterIndex++) {
            let possibleWords: string[] = []
            if(inputs[letterIndex] !== "") {
                for (let i = 0; i < inputs[letterIndex].length; i++) {
                    const letter = inputs[letterIndex][i]
                    possibleWords = [...possibleWords, ...solutions.filter(word => word[letterIndex] === letter)]
                }
                solutions = possibleWords
            }
        }

        return solutions
    }
    , [inputs])

    return (
        <div className='app'>
            <h1>Passwords</h1>
            <p>
                Saisir dans le premier champ toutes les lettres possibles en première position, 
                puis répétez l'opération pour chaque positions jusqu'à ce qu'il ne reste qu'un seul mot possible.
            </p>

            <div className="inputs">
                {inputs.map((input, index) => (
                    <div className="possibilities-input" key={index}>
                        <label htmlFor={"letters-" + index}>Possibilities letter {index + 1}</label>
                        <input value={input} onChange={e => {
                            const newInputs = [...inputs]
                            newInputs[index] = e.target.value
                            setInputs(newInputs)
                        }} />
                    </div>
                ))}
            </div>

            <h2>Solutions</h2>
            <ul>
                {solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                ))}
            </ul>
        </div>
    )

}