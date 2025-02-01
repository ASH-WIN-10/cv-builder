export default function GeneralInfoSection({ resume, updateResume }) {
    function handleInputChange(e) {
        const { name, value } = e.target
        updateResume({ ...resume, [name]: value })
    }

    const { name, email, phoneNum } = resume
    return (
        <div id="general">
            <h3>General</h3>
            <form>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" value={name} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" value={email} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="phoneNum">Phone Number: </label>
                    <input type="text" name="phoneNum" value={phoneNum} onChange={handleInputChange} />
                </div>
            </form>
        </div>
    )
}
