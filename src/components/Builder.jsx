import EducationalExpSection from "./EducationalExpSection"
import GeneralInfoSection from "./GeneralInfoSection"
import PracticalExpSection from "./PracticalExpSection"

export default function Builder() {
    return (
        <div id="builder">
            <GeneralInfoSection />
            <EducationalExpSection />
            <PracticalExpSection />
        </div>
    )
}
