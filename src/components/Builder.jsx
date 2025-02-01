import EducationalExpSection from "./EducationalExpSection"
import GeneralInfoSection from "./GeneralInfoSection"
import PracticalExpSection from "./PracticalExpSection"
import { Accordion } from "./Accordion"
import "../styles/Builder.css"

export default function Builder({ resume, updateResume }) {
    return (
        <div id="builder">
            <Accordion title="General Information">
                <GeneralInfoSection resume={resume} updateResume={updateResume} />
            </Accordion>
            <Accordion title="Education">
                <EducationalExpSection resume={resume} updateResume={updateResume} />
            </Accordion>
            <Accordion title="Practical Experience">
                <PracticalExpSection resume={resume} updateResume={updateResume} />
            </Accordion>
        </div>
    )
}
