import PropTypes from "prop-types";
const userData = [
    {
        name: "Mukesh",
        city: "New Delhi",
        role: "Front End Developer",
        skills: ["UI/UX", "HTML", "CSS","Javascript", "React Js", "Node Js", "AWS"],
        online: false,
        image: "images/1.jpg",
    },
    {
        name: "Rishi",
        city: "Mumbai",
        role: "Back End Developer",
        skills: ["UI/UX", "PHP", "Node Js", "AWS"],
        online: true,
        image: "images/2.jpg",
    },
    {
        name: "Rithanya",
        city: "Kolkata",
        role: "DevOps Engineer",
        skills: ["Agile", "Jenkins", "GIT","Javascript", "Python", "CI/CD Pipeline", "AWS", "Shell", "Bash"],
        online: true,
        image: "images/3.jpg",
    },
]

function User(props){
    return (
    <div className="card-container">
        <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
        <img src={props.image} className="img" alt="user" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.role}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    </div>
    );
}
export const UserCard = () => {
  return (
        <>
        {userData.map((user, index)=>(
            <User key={index} name={user.name} city={user.city} role={user.role} online={user.online} image={user.image} skills= {user.skills} />
        ))}
        </>
  )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    online: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
};