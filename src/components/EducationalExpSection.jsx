import { useRef, useState } from "react"

export default function EducationalExpSection({ resume, updateResume }) {
    const dialogRef = useRef(null)
    const [education, updateEducation] = useState({
        schoolName: "",
        degree: "",
        startDate: "",
        endDate: ""
    })

    function handleInputChange(e) {
        const { name, value } = e.target
        updateEducation({ ...education, [name]: value })
    }

    function addNewEducation(e) {
        e.preventDefault()
        updateResume({ ...resume, education: [...resume.education, education] })
        dialogRef.current?.close()
    }

    return (
        <div id="educationalExp">
            <h3>Educational</h3>
            <button onClick={() => dialogRef.current?.showModal()}>Add Education</button>

            <dialog ref={dialogRef}>
                <h2>Education</h2>
                <form>
                    <div>
                        <label htmlFor="schoolName">School: </label>
                        <input type="text" name="schoolName" onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="degree">Degree: </label>
                        <input type="text" name="degree" onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="startDate">Start Date: </label>
                        <input type="date" name="startDate" onChange={handleInputChange} />

                        <label htmlFor="endDate">End Date: </label>
                        <input type="date" name="endDate" onChange={handleInputChange} />
                    </div>

                    <button type="button" onClick={() => dialogRef.current?.close()}>Cancel</button>
                    <button onClick={addNewEducation}>Save</button>
                </form>
            </dialog>
        </div>
    )
}
