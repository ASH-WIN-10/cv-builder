import { useState } from "react"
import "./App.css"
import Builder from "./components/Builder"
import Resume from "./components/Resume"
import initialResume from "./data"

function App() {
    const [resume, updateResume] = useState(initialResume)

    return (
        <>
            <Builder resume={resume} updateResume={updateResume} />
            <Resume resume={resume} />
        </>
    )
}

export default App
