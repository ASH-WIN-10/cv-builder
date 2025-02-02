import { useRef, useState } from "react"
import removeIcon from "../assets/remove.svg"
import addIcon from "../assets/add.svg"

function Dialog({ education, addNewEducation, handleInputChange, dialogRef }) {
    const { schoolName, degree, startDate, endDate } = education
    return (
        <dialog ref={dialogRef}>
            <h2>Education</h2>
            <form>
                <div>
                    <label htmlFor="schoolName">School: </label>
                    <input
                        type="text"
                        name="schoolName"
                        value={schoolName}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="degree">Degree: </label>
                    <input
                        type="text"
                        name="degree"
                        value={degree}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="dates">
                    <div>
                        <label htmlFor="startDate">Start Date: </label>
                        <input
                            type="text"
                            name="startDate"
                            value={startDate}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="endDate">End Date: </label>
                        <input
                            type="text"
                            name="endDate"
                            value={endDate}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="buttons">
                    <button
                        type="button"
                        className="red"
                        onClick={() => dialogRef.current?.close()}>
                        Cancel
                    </button>
                    <button onClick={addNewEducation}> Save </button>
                </div>
            </form>
        </dialog>
    )
}

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
            ...resume,
            education: resume.education.filter(
                (edu) => edu.schoolName !== education.schoolName,
            ),
        })
    }

    const openDialog = () => dialogRef.current?.showModal()

    return (
        <div id="education">
            <Dialog
                education={education}
                addNewEducation={addNewEducation}
                handleInputChange={handleInputChange}
                dialogRef={dialogRef}
            />

            <div className="list">
                {resume.education.map((edu) => (
                    <div key={edu.schoolName}>
                        <span>{edu.schoolName}</span>
                        <button className="icon" onClick={removeEducation}>
                            <img src={removeIcon} alt="remove" />
                        </button>
                    </div>
                ))}
            </div>

            <button className="add" onClick={openDialog}>
                <img src={addIcon} alt="add" />
                <span>Education</span>
            </button>
        </div>
    )
}
