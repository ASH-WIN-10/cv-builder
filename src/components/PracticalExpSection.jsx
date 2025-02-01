import { useRef, useState } from "react"

export default function PracticalExpSection({ resume, updateResume }) {
    const dialogRef = useRef(null)
    const [experience, updateExperience] = useState(resume.practicalExp[0])

    function handleInputChange(e) {
        const { name, value } = e.target
        updateExperience({ ...experience, [name]: value })
    }

    function addNewExperience(e) {
        e.preventDefault()
        updateResume({ ...resume, practicalExp: [...resume.practicalExp, experience] })
        dialogRef.current?.close()
    }

    return (
        <div id="practicalExperience">
            <h3>Practical</h3>
            <button onClick={() => dialogRef.current?.showModal()}>Add Experience</button>

            <dialog ref={dialogRef}>
                <h2>Experience</h2>
                <form>
                    <div>
                        <label htmlFor="companyName">Company: </label>
                        <input type="text" name="companyName" onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="positionTitle">Position: </label>
                        <input type="text" name="positionTitle" onChange={handleInputChange} />                    </div>

                    <div>
                        <label htmlFor="startDate">Start Date: </label>
                        <input type="date" name="startDate" onChange={handleInputChange} />

                        <label htmlFor="endDate">End Date: </label>
                        <input type="date" name="endDate" onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="jobDescr">Main Responsibilities: </label>
                        <textarea name="jobDescr" onChange={handleInputChange} />
                    </div>

                    <button type="button" onClick={() => dialogRef.current?.close()}>Cancel</button>
                    <button onClick={addNewExperience}>Save</button>
                </form>
            </dialog>
        </div>
    )
}
