import { useState } from "react"
import Builder from "./components/Builder"
import Resume from "./components/Resume"
import initialResume from "./data"
import "./App.css"

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
