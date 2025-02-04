import { useRef, useState } from "react"
import { emptyEducation } from "../data"
import removeIcon from "../assets/remove.svg"
import addIcon from "../assets/add.svg"
import editIcon from "../assets/edit.svg"

function Dialog({ education, updateEducation, addNewEducation, dialogRef }) {
    function handleInputChange(e) {
        const { name, value } = e.target
        updateEducation({ ...education, [name]: value })
    }

    const { id, schoolName, degree, startDate, endDate } = education
    return (
        <dialog ref={dialogRef}>
            <h2>Education</h2>
            <form>
                <div>
                    <input type="hidden" name="id" value={id} />

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

    function addNewEducation(e) {
        e.preventDefault()

        if (education.id !== 0) {
            const updatedEducation = resume.education.map((edu) =>
                edu.id === education.id ? education : edu,
            )
            updateResume({ ...resume, education: updatedEducation })
        } else {
            const edu = { ...education, id: resume.education.length + 1 }
            updateResume({ ...resume, education: [...resume.education, edu] })
        }

        dialogRef.current?.close()
    }

    function removeEducation(e) {
        const id = parseInt(e.currentTarget.parentElement.dataset.id)
        updateResume({
            ...resume,
            education: resume.education.filter((edu) => edu.id !== id),
        })
    }

    function openDialog(e) {
        if (e.currentTarget.id === "addBtn") updateEducation(emptyEducation)
        else if (e.currentTarget.id === "editBtn") {
            const id = parseInt(e.currentTarget.parentElement.dataset.id)
            const edu = resume.education.find((edu) => edu.id === id)
            updateEducation(edu)
        }

        dialogRef.current?.showModal()
    }

    return (
        <div id="education">
            <Dialog
                education={education}
                updateEducation={updateEducation}
                addNewEducation={addNewEducation}
                dialogRef={dialogRef}
            />

            <div className="list">
                {resume.education.map((edu) => (
                    <div key={edu.id}>
                        <span>{edu.schoolName}</span>
                        <div data-id={edu.id}>
                            <button
                                id="editBtn"
                                className="icon"
                                onClick={openDialog}>
                                <img src={editIcon} alt="edit" />
                            </button>
                            <button
                                id="removeBtn"
                                className="icon"
                                onClick={removeEducation}>
                                <img src={removeIcon} alt="remove" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <button id="addBtn" className="add" onClick={openDialog}>
                <img src={addIcon} alt="add" />
                <span>Education</span>
            </button>
        </div>
    )
}
