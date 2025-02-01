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
        </div>
    )
}
