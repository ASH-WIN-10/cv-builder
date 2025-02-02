import { useState } from "react"
import "../styles/Accordion.css"

export function Accordion({ title, children }) {
    const [expanded, setExpanded] = useState(false)

    const toggleSection = () => {
        setExpanded((prevExpanded) => !prevExpanded)
    }

    return (
        <div className="accordion-section">
            {title === "General Information" ? (
                <>
                    <div className="accordion-header expanded">
                        <span className="accordion-title">{title}</span>
                    </div>
                    <div className="accordion-content expanded">{children}</div>
                </>
            ) : (
                <>
                    <div
                        className={`accordion-header ${expanded ? "expanded" : ""}`}
                        onClick={toggleSection}>
                        <span className="accordion-title">{title}</span>
                        <span className="accordion-icon">+</span>
                    </div>
                    <div
                        className={`accordion-content ${expanded ? "expanded" : ""}`}>
                        {children}
                    </div>
                </>
            )}
        </div>
    )
}
