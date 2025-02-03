export default function GeneralInfoSection({ resume, updateResume }) {
    function handleInputChange(e) {
        const { name, value } = e.target
        updateResume({ ...resume, [name]: value })
    }

    const { name, email, phoneNum } = resume
    return (
        <div id="general">
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="phoneNum">Phone Number</label>
                    <input
                        type="text"
                        name="phoneNum"
                        id="phoneNum"
                        value={phoneNum}
                        onChange={handleInputChange}
                    />
                </div>
            </form>
        </div>
    )
}
