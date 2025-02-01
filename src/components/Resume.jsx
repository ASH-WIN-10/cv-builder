export default function Resume(props) {
    const resume = props.resume;
    return (
        <div id="resume">
            <h2>Resume</h2>
            <div>
                <h3>General</h3>
                <span>Name: {resume.name}</span><br />
                <span>Email: {resume.email}</span><br />
                <span>Phone Number: {resume.phoneNum}</span><br />
            </div>
            <div>
                <h3>Education</h3>
                {resume.education.map((edu) => (
                    <div key={edu.schoolName}>
                        <span>School: {edu.schoolName}</span><br />
                        <span>Degree: {edu.degree}</span><br />
                        <span>Start Date: {edu.startDate}</span><br />
                        <span>End Date: {edu.endDate}</span><br />
                    </div>
                ))}
            </div>
            <div>
                <h3>Experiences</h3>
                {resume.practicalExp.map((exp) => (
                    <div key={exp.companyName}>
                        <span>Company: {exp.companyName}</span><br />
                        <span>Job Title: {exp.jobTitle}</span><br />
                        <span>Start Date: {exp.startDate}</span><br />
                        <span>End Date: {exp.endDate}</span><br />
                        <span>Main Responsibilities: {exp.jobDesc}</span><br />
                    </div>
                ))}
            </div>
        </div>
    )
}
