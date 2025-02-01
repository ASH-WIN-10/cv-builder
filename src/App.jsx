import { useState } from "react"
import "./App.css"
import Builder from "./components/Builder"
import Resume from "./components/Resume"

function App() {
    const [resume, updateResume] = useState({
        name: "",
        email: "",
        phoneNum: "",
        education: [],
        practicalExp: []
    })

    return (
        <>
            <Builder resume={resume} updateResume={updateResume} />
            <Resume resume={resume} />
        </>
    )
}

export default App
