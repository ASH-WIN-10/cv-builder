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

    function removeExperience() {
        updateResume({
            ...resume, practicalExp: resume.practicalExp.filter(
                (exp) => exp.companyName !== experience.companyName)
        })
    }

    const { companyName, jobTitle, startDate, endDate, jobDesc } = experience
    return (
        <div id="practicalExperience">
            <h3>Experience</h3>
            <button onClick={() => dialogRef.current?.showModal()}>Add Experience</button>

            <dialog ref={dialogRef}>
                <h2>Experience</h2>
                <form>
                    <div>
                        <label htmlFor="companyName">Company: </label>
                        <input type="text" name="companyName" value={companyName} onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="jobTitle">Job Title: </label>
                        <input type="text" name="jobTitle" value={jobTitle} onChange={handleInputChange} />                    </div>

                    <div>
                        <label htmlFor="startDate">Start Date: </label>
                        <input type="date" name="startDate" value={startDate} onChange={handleInputChange} />

                        <label htmlFor="endDate">End Date: </label>
                        <input type="date" name="endDate" value={endDate} onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="jobDescr">Main Responsibilities: </label>
                        <textarea name="jobDescr" value={jobDesc} onChange={handleInputChange} />
                    </div>

                    <button type="button" onClick={() => dialogRef.current?.close()}>Cancel</button>
                    <button onClick={addNewExperience}>Save</button>
                </form>
            </dialog>

            <ul>
                {resume.practicalExp.map((exp) => (
                    <li key={exp.companyName}>
                        {exp.companyName}
                        <button onClick={removeExperience}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
