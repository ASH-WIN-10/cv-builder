import EducationalExpSection from "./EducationalExpSection"
import GeneralInfoSection from "./GeneralInfoSection"
import PracticalExpSection from "./PracticalExpSection"
import { Accordion } from "./Accordion"
import "../styles/Builder.css"
import { initialEmptyResume, initialMockResume } from "../data"

export default function Builder({ resume, updateResume }) {
    function clearResume() {
        updateResume(initialEmptyResume)
    }

    function loadExample() {
        updateResume(initialMockResume)
    }

    return (
        <div id="builder">
            <div id="dataBtns">
                <button onClick={clearResume}>Clear Resume</button>
                <button onClick={loadExample}>Load Example</button>
            </div>

            <Accordion title="General Information">
                <GeneralInfoSection
                    resume={resume}
                    updateResume={updateResume}
                />
            </Accordion>

            <Accordion title="Education">
                <EducationalExpSection
                    resume={resume}
                    updateResume={updateResume}
                />
            </Accordion>

            <Accordion title="Practical Experience">
                <PracticalExpSection
                    resume={resume}
                    updateResume={updateResume}
                />
            </Accordion>
        </div>
    )
}
