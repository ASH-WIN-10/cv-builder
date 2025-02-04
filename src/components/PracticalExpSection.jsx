import { useRef, useState } from "react"
import { emptyPracticalExp } from "../data"
import addIcon from "../assets/add.svg"
import removeIcon from "../assets/remove.svg"

function Dialog({ experience, updateExperience, addNewExperience, dialogRef }) {
    function handleInputChange(e) {
        const { name, value } = e.target
        updateExperience({ ...experience, [name]: value })
    }

    const { id, companyName, jobTitle, startDate, endDate, jobDesc } =
        experience
    return (
        <dialog ref={dialogRef}>
            <h2>Experience</h2>
            <form>
                <div>
                    <input type="hidden" name="id" value={id} />

                    <label htmlFor="companyName">Company: </label>
                    <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        value={companyName}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="jobTitle">Job Title: </label>
                    <input
                        type="text"
                        name="jobTitle"
                        id="jobTitle"
                        value={jobTitle}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="dates">
                    <label htmlFor="startDate">Start Date: </label>
                    <input
                        type="text"
                        name="startDate"
                        id="startDate"
                        value={startDate}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="endDate">End Date: </label>
                    <input
                        type="text"
                        name="endDate"
                        id="endDate"
                        value={endDate}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="description">
                    <label htmlFor="jobDesc">Main Responsibilities: </label>
                    <textarea
                        name="jobDesc"
                        id="jobDesc"
                        value={jobDesc}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="buttons">
                    <button
                        className="red"
                        type="button"
                        onClick={() => dialogRef.current?.close()}>
                        Cancel
                    </button>
                    <button onClick={addNewExperience}>Save</button>
                </div>
            </form>
        </dialog>
    )
}

export default function PracticalExpSection({ resume, updateResume }) {
    const dialogRef = useRef(null)
    const [experience, updateExperience] = useState(resume.practicalExp[0])

    function addNewExperience(e) {
        e.preventDefault()
        const exp = { ...experience, id: resume.practicalExp.length + 1 }
        updateResume({
            ...resume,
            practicalExp: [...resume.practicalExp, exp],
        })
        dialogRef.current?.close()
    }

    function removeExperience(e) {
        const id = parseInt(e.currentTarget.parentElement.dataset.id)
        updateResume({
            ...resume,
            practicalExp: resume.practicalExp.filter((exp) => exp.id !== id),
        })
    }

    function openDialog(e) {
        if (e.currentTarget.tagName === "BUTTON")
            updateExperience(emptyPracticalExp)
        dialogRef.current?.showModal()
    }

    return (
        <div id="practicalExperience">
            <Dialog
                experience={experience}
                updateExperience={updateExperience}
                addNewExperience={addNewExperience}
                dialogRef={dialogRef}
            />

            <div className="list">
                {resume.practicalExp.map((exp) => (
                    <div key={exp.companyName} data-id={exp.id}>
                    <div key={exp.id}>
                        <span>{exp.companyName}</span>
                        <button className="icon" onClick={removeExperience}>
                            <img src={removeIcon} alt="remove" />
                        </button>
                    </div>
                ))}
            </div>

            <button className="add" onClick={openDialog}>
                <img src={addIcon} alt="add" />
                <span>Experience</span>
            </button>
        </div>
    )
}
