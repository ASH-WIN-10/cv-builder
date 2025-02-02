import "../styles/Resume.css"
import emailIcon from "../assets/email.svg"
import phoneIcon from "../assets/phone.svg"

export default function Resume({ resume }) {
    return (
        <div id="resume">
            <div className="general">
                <div>
                    <span>{resume.name}</span>
                </div>
                <div>
                    <div>
                        <img src={emailIcon} alt="email" />
                        <span>{resume.email}</span>
                    </div>
                    <div>
                        <img src={phoneIcon} alt="phone" />
                        <span>{resume.phoneNum}</span>
                    </div>
                </div>
            </div>

            <div className="experience">
                <div className="heading">
                    <span>Experience</span>
                </div>

                <div className="list">
                    {resume.education.map((edu) => (
                        <div key={edu.schoolName} className="listItem">
                            <div>
                                <span>
                                    {edu.startDate} - {edu.endDate}
                                </span>
                            </div>
                            <div>
                                <strong>{edu.schoolName}</strong>
                                <span>{edu.degree}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="experience">
                <div className="heading">
                    <span>Experience</span>
                </div>

                <div className="list">
                    {resume.practicalExp.map((exp) => (
                        <div key={exp.companyName} className="listItem">
                            <div>
                                <span>
                                    {exp.startDate} - {exp.endDate}
                                </span>
                            </div>
                            <div>
                                <strong>{exp.companyName}</strong>
                                <i>{exp.jobTitle}</i>
                                <span>{exp.jobDesc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
