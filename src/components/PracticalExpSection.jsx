import { useRef, useState } from "react"
import removeIcon from "../assets/remove.svg"
import addIcon from "../assets/add.svg"

function Dialog({
    experience,
    addNewExperience,
    handleInputChange,
    dialogRef,
}) {
    const { companyName, jobTitle, startDate, endDate, jobDesc } = experience
    return (
        <dialog ref={dialogRef}>
            <h2>Experience</h2>
            <form>
                <div>
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
                    />{" "}
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

    function handleInputChange(e) {
        const { name, value } = e.target
        updateExperience({ ...experience, [name]: value })
    }

    function addNewExperience(e) {
        e.preventDefault()
        updateResume({
            ...resume,
            practicalExp: [...resume.practicalExp, experience],
        })
        dialogRef.current?.close()
    }

    function removeExperience(e) {
        const companyName = e.currentTarget.previousSibling.textContent
        updateResume({
            ...resume,
            practicalExp: resume.practicalExp.filter(
                (exp) => exp.companyName !== companyName,
            ),
        })
    }

    function openDialog(e) {
        if (e.currentTarget.tagName === "BUTTON")
            updateExperience({
                companyName: "",
                jobTitle: "",
                startDate: "",
                endDate: "",
                jobDesc: "",
            })
        dialogRef.current?.showModal()
    }

    return (
        <div id="practicalExperience">
            <Dialog
                experience={experience}
                addNewExperience={addNewExperience}
                handleInputChange={handleInputChange}
                dialogRef={dialogRef}
            />
            <div className="list">
                {resume.practicalExp.map((exp) => (
                    <div key={exp.companyName}>
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
