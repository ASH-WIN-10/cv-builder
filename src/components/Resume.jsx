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
        </div>
    )
}
