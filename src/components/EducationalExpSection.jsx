import { useRef, useState } from "react"

export default function EducationalExpSection({ resume, updateResume }) {
    const dialogRef = useRef(null)
    const [education, updateEducation] = useState(resume.education[0])

    function handleInputChange(e) {
        const { name, value } = e.target
        updateEducation({ ...education, [name]: value })
    }

    function addNewEducation(e) {
        e.preventDefault()
        updateResume({ ...resume, education: [...resume.education, education] })
        dialogRef.current?.close()
    }

    function removeEducation() {
        updateResume({
            ...resume, education: resume.education.filter(
                (edu) => edu.schoolName !== education.schoolName)
        })
    }

    const { schoolName, degree, startDate, endDate } = education
    return (
        <div id="education">
            <dialog ref={dialogRef}>
                <h2>Education</h2>
                <form>
                    <div>
                        <label htmlFor="schoolName">School: </label>
                        <input type="text" name="schoolName" value={schoolName} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="degree">Degree: </label>
                        <input type="text" name="degree" value={degree} onChange={handleInputChange} />
                    </div>
                    <div className="dates">
                        <div>
                            <label htmlFor="startDate">Start Date: </label>
                            <input type="text" name="startDate" value={startDate} onChange={handleInputChange} />
                        </div>

                        <div>
                            <label htmlFor="endDate">End Date: </label>
                            <input type="text" name="endDate" value={endDate} onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className="buttons">
                        <button type="button" onClick={() => dialogRef.current?.close()}>Cancel</button>
                        <button onClick={addNewEducation}>Save</button>
                    </div>
                </form>
            </dialog>

            <div className="list">
                {resume.education.map((edu) => (
                    <div key={edu.schoolName}>
                        <span>{edu.schoolName}</span>
                        <button onClick={removeEducation}>Remove</button>
                    </div>
                ))}
            </div>

            <button onClick={() => dialogRef.current?.showModal()}>Add Education</button>
        </div>
    )
}
