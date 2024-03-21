import Cookies from 'js-cookie';

const UpdateEmail = () => {
    const handleSubmit = () => {
        let user = Cookies.get('user_id');
        const email = document.getElementById('email').value;
        fetch(`http://localhost:8000/users/profile/${user}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        })
    }


    return (
        <div className="form-container">
            <form className="main-form">
                <h1>Update Email</h1>
                <label htmlFor="email">Email</label>
                <input className="text-enter" type="text" id="email" name="email" required />
                <button className="submit-button" type="submit" onClick={handleSubmit}>Update</button>
            </form>
        </div>
    )
}

export default UpdateEmail;