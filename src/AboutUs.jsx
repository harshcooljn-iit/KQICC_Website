const AboutUs = () => {
    return (
        <section className="home-content about-content" data-aos="fade-right">
            <div className="fest-title" data-aos="fade-right">
                About us
            </div>
            <div className="about-description">
            We are a passionate and dynamic group of students at the prestigious Indian Institute of Technology (IIT) Kharagpur, united by a shared curiosity and an unwavering excitement for the future of quantum computing. Our organization, the Kharagpur Quantum Information and Computing Club (KQICC), serves as a vibrant community where we come together to delve into the fascinating and rapidly evolving field of quantum technology.

At KQICC, we are dedicated to exploring the intricacies of quantum computing, a realm that holds the potential to revolutionize industries and solve problems that are currently beyond the reach of classical computing. Our members engage in collaborative learning, sharing knowledge and insights that enrich our understanding of quantum principles and practices. Through a variety of engaging activities, we foster an environment where innovation thrives and creativity flourishes.

To facilitate this journey of discovery, we organize a multitude of events such as hands-on workshops, exciting hackathons, and enlightening talks by industry experts. These activities allow us to dive deep into essential topics such as quantum programming, advanced algorithms, and the real-world applications of quantum computing. We utilize powerful tools like Qiskit, a comprehensive framework for quantum programming, which enables us to experiment and develop our skills in a practical context.

Together, we are building the future of technology, one qubit at a time. As we navigate the complexities of quantum mechanics and computing, we remain committed to pushing the boundaries of what is possible. Our collective efforts aim to contribute to advancements that can potentially transform sectors ranging from cryptography to materials science, all while nurturing the next generation of quantum thinkers and innovators.
            </div>
            <div className="logo-container">
            <img src="/ibmlogo.png" alt="fall fest website" className="fest-logo" style={{position:"relative",right:"30vw",top:"10px"}}/>
            <img src="/fallfest.jpg" alt="fall fest website" className="fest-logo" style={{position:"relative",left:"30vw",top:"18px",width:"11vw"}}/>
            </div>
           
        </section>
    );
}
 
export default AboutUs;