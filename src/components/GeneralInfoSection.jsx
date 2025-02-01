export default function GeneralInfoSection({ resume, updateResume }) {
    return (
        <div id="general">
            <h3>General</h3>
            <form>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" onChange={
                        (e) => updateResume({ ...resume, name: e.target.value })
                    } />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" onChange={
                        (e) => updateResume({ ...resume, email: e.target.value })
                    } />
                </div>
                <div>
                    <label htmlFor="phoneNum">Phone Number: </label>
                    <input type="text" name="phoneNum" onChange={
                        (e) => updateResume({ ...resume, phoneNum: e.target.value })
                    } />
                </div>
            </form>
        </div>
    )
}
