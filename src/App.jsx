import { useState } from "react"
import Builder from "./components/Builder"
import Resume from "./components/Resume"
import { initialMockResume } from "./data"
import "./App.css"

function App() {
    const [resume, updateResume] = useState(initialMockResume)

    return (
        <>
            <Builder resume={resume} updateResume={updateResume} />
            <Resume resume={resume} />
        </>
    )
}

export default App
