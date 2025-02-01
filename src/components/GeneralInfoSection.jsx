export default function GeneralInfoSection() {
    return (
        <div id="general">
            <h3>General</h3>
            <form>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" />
                </div>
                <div>
                    <label htmlFor="phone-number">Phone Number: </label>
                    <input type="text" name="phone-number" />
                </div>
            </form>
        </div>
    )
}
