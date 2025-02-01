import EducationalExpSection from "./EducationalExpSection"
import GeneralInfoSection from "./GeneralInfoSection"
import PracticalExpSection from "./PracticalExpSection"

export default function Builder({ resume, updateResume }) {
    return (
        <div id="builder">
            <GeneralInfoSection resume={resume} updateResume={updateResume} />
            <EducationalExpSection resume={resume} updateResume={updateResume} />
            <PracticalExpSection resume={resume} updateResume={updateResume} />
        </div>
    )
}
