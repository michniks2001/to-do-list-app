import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import Cookies from 'js-cookie';

const Navbar = () => {
    let user = Cookies.get('user_id')

    const handleLogout = () => {
        Cookies.remove('user_id');
        window.location.href = "/login";
    }

    if (user !== undefined) {
        return (
            <nav className="navbar">
                <ul className="main">
                    <li key="main"><Link to="/calendar">
                        Calendar
                    </Link></li>
                    <li key="tasks">
                    <Link to="/task-view">
                        Task View
                    </Link>
                    </li>
                    <li key="create-task"><Link to="/create-task">
                        Create Task
                    </Link></li>
                </ul>

                <ul className="user">
                    <li key="profile"><Link to="/profile">Profile</Link></li>
                    <li
                        key="logout"
                        onClick={handleLogout}
                        style={{
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            position: 'relative',
                            textDecoration: 'none',
                            color: 'black',
                        }}
                        onMouseEnter={
                            (e) => e.target.style.color = '#007bff'
                        }
                        onMouseLeave={
                            (e) => e.target.style.color = 'black'
                        }
                        ><Link to="/login" onClick={() => Cookies.remove('user_id')}>Logout</Link></li>
                </ul>
            </nav>
        );
    } else {
        return (
            <nav className="navbar">
                <ul className="main">
                    <li key="main"><Link to="/calendar">
                        Calendar
                    </Link></li>
                    <li key="tasks">
                    <Link to="/task-view">
                        Task View
                    </Link>
                    </li>
                    <li key="create-task"><Link to="/create-task">
                        Create Task
                    </Link></li>
                </ul>

                <ul className="user">
                    <li key="login"><Link to="/login">Login</Link></li>
                    <li key="sign-up"><Link to="/sign-up">Sign Up</Link></li>
                </ul>
            </nav>
        );
    }
};

export default Navbar;
