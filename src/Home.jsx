import { useEffect,useRef } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(()=>{
        Aos.init({duration:1500});
    },[]);

    return (
        <section className="home-content" data-aos="fade-right">
            <div className="fest-title" data-aos="fade-right">
                QISKIT FALL FEST 2024
            </div>
            <div className="club-name" data-aos="fade-right">
                Kharagpur Quantum Informatics & Computing Club 
            </div>
        </section>
    );
}

 
export default Home;