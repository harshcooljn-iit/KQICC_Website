import Schedule_card from "./Schedule_card";

const Schedule = () => {
    return (
        <section className="home-content schedule-content" data-aos="fade-right">
            <div className="fest-title" data-aos="fade-right">
                Schedule
            </div>
            <div className="schedule-grid">
                <Schedule_card date="14/10/2024" dayTitle="Live Session on Introduction to Q.I" venue="" time=""/>
                <Schedule_card date="15/10/2024" dayTitle="Session by IBM on Quantum Algo Basics" venue="" time=""/>
                <Schedule_card date="16/10/2024" dayTitle="Live Applications of Q Algo" venue="" time=""/>
                <Schedule_card date="17/10/2024" dayTitle="Lecture from TCG on Applications of QI" venue="" time=""/>
                <Schedule_card date="18/10/2024" dayTitle="Live Quantum Error correction and Machine Learning Applications" venue="" time=""/>
                <Schedule_card date="18/10/2024" dayTitle="Live Session from Fujitsu on Challenges in Quantum Compilations + Notebook Briefings" venue="" time="7:00 pm"/>
                <Schedule_card date="19/10/2024" dayTitle="Hackathon Notebooks"/>
            </div>
        </section>
    );
}
 
export default Schedule;
