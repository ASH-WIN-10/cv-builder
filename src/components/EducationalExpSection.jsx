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
                        id="schoolName"
                        value={schoolName}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="degree">Degree: </label>
                    <input
                        type="text"
                        name="degree"
                        id="degree"
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
                            id="startDate"
                            value={startDate}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="endDate">End Date: </label>
                        <input
                            type="text"
                            name="endDate"
                            id="endDate"
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

    function removeEducation(e) {
        const schoolName = e.currentTarget.previousSibling.textContent
        updateResume({
            ...resume,
            education: resume.education.filter(
                (edu) => edu.schoolName !== schoolName,
            ),
        })
    }

    function openDialog(e) {
        if (e.currentTarget.tagName === "BUTTON")
            updateEducation({
                schoolName: "",
                degree: "",
                startDate: "",
                endDate: "",
            })
        dialogRef.current?.showModal()
    }

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
