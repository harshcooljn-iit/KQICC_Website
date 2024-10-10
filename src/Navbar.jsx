import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    let history = useHistory();
    let e1 = document.querySelector(".home-content");
    let [count,setCount] = useState(0);

    function burgerMenu(){
        document.querySelector('.burger').classList.remove('v-class');
        document.querySelector('.navbar').classList.remove('h-nav');
        document.querySelector('.nav-list').classList.add('v-class');
    }
    
    function handleclick1(){
        history.push('/');
        setCount(count+1);
        if (e1){
            e1.scrollIntoView({'behavior':'smooth'});
        }
        burgerMenu();
    }
    let e2 = document.querySelector(".schedule-content");
    function handleclick2(){
        history.push('/');
        setCount(count+1);
        if (e2){
            e2.scrollIntoView({'behavior':'smooth'});
        }
        burgerMenu();
    }
    let e3 = document.querySelector(".register-content");
    function handleclick3(){
        history.push('/');
        setCount(count+1);
        if (e3){
            e3.scrollIntoView({'behavior':'smooth'});
        }
        burgerMenu();
    }
    let e4 = document.querySelector(".about-content");
    function handleclick4(){
        history.push('/');
        setCount(count+1);
        if (e4){
            e4.scrollIntoView({'behavior':'smooth'});
        }
        burgerMenu();
    }
    useEffect(()=>{
        setTimeout(()=>{
            e1 = document.querySelector(".home-content");
            e2 = document.querySelector(".schedule-content");
            e3 = document.querySelector(".register-content");
            e4 = document.querySelector(".about-content");
        },500);
    },[count]);

    const handleBurgerClick = ()=>{
        document.querySelector('.navbar').classList.add('h-nav');
        document.querySelector('.nav-list').classList.remove('v-class');
        document.querySelector('.burger').classList.add('v-class');
    }


    return (
        <div className={`navbar`}>
            <img src="/IIT_Kharagpur_Logo.svg.webp" alt="IIT Logo" className="kgp-logo" />
            <div className="title">KQICC</div>
            <ul className="nav-list v-class">
                <li><button onClick={handleclick1}>Home</button></li>
                <li><button onClick={handleclick2}>Schedule</button></li>
                <li><button onClick={handleclick3}>Register</button></li>
                <li><button onClick={handleclick4}>AboutUs</button></li>
            </ul>
            <div onClick={handleBurgerClick} className="burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    );
}
 
export default Navbar;
