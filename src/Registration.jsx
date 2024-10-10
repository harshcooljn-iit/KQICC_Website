import { useState } from "react";

const Registration = () => {
    // let [name,setName] = useState("");
    // let [email,setEmail] = useState("");
    // let [phone,setPhone] = useState("");
    // let [university, setUniversity] = useState("");
    // let [regStatus, setRegStatus] = useState(false);
    const postUrl = "https://script.google.com/macros/s/AKfycbxobC-CX-OFKoZiyCJekDJRSuos1Kq9LuGEymzrEmNbs3SrQFc-3iKS6CvxAn7JB40x/exec";
    function handleSubmit(e) {
        e.preventDefault();
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);
        fetch(
           postUrl,
          {
            method: "POST",
            body: formDatab
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            alert("Added Successfuly");
          });
      }



    return (
        <>
            <form className="reg-form" onSubmit={(e)=>{handleSubmit(e)}}>
                <label>Name: </label>
                <input type="text"
                    required
                    name="name"
                />
                <label>Email ID: </label>
                <input type="email"
                    required
                    name="email"
                />
                <label>Phone: </label>
                <input type="text"
                    required
                    name="phone"
                />
                <label>University: </label>
                <input type="text"
                    required
                    name="university"
                />
                <button type="submit">Register</button>
            </form>
        </>
    );
}
 
export default Registration;