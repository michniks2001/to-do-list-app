import Cookies from 'js-cookie';

const UpdateName = () => {
    const handleSubmit = () => {
        let user = Cookies.get('user_id');
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        fetch(`http://localhost:8000/users/profile/${user}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ first_name: firstName, last_name: lastName }),
        })
    }


    return (
        <div className="form-container">
            <form className="main-form">
                <h1>Update Name</h1>
                <label htmlFor="first-name">First Name</label>
                <input className="text-enter" type="text" id="first-name" name="first-name" required />
                <label htmlFor="last-name">Last Name</label>
                <input className="text-enter" type="text" id="last-name" name="last-name" required />
                <button className="submit-button" type="submit" onClick={handleSubmit}>Update</button>
            </form>
        </div>
    )
}

export default UpdateName;