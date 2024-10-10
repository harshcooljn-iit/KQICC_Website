import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Register = () => {
    return (
        <section className="home-content register-content" data-aos="fade-right">
            <Link to="/register" className="register-link">
                <div className="register-button" data-aos="fade-right">
                    Register
                </div>
            </Link>
        </section>
    );
};
 
export default Register;