const Schedule_card = (props) => {
    return ( 
        <div className="s-card">
            <div className="date-box">
                {props.date}
            </div>
            <div className="detail-box">
                <div className="day-title">{props.dayTitle}</div>
                <div className="venue">Venue: {props.venue || "TBD"}</div>
                <div className="time">Time: {props.time || "TBD"}</div>
            </div>
        </div>
    );
}
 
export default Schedule_card;