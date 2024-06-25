import image from "./image.jpg";
function AboutMe(props) {
    const handleClick = () => {
        props.projectReference.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }
    return (
      <div className="aboutMe" ref = {props.aboutReference}>
        <div id = "aboutMeBody">
            <img src = {image} style ={{aspectRatio: "inherit", maxHeight: "50%", maxWidth: "30%", marginRight: "10%"}}/>
            <div id = "Personal_Description">
                <h1 id = "name">Samagra Pandey</h1>
                <a href='https://www.linkedin.com/in/samagra-pandey-691a1822b/'>LinkedIn</a>
                <a href='https://github.com/samagrapandey05'>Github</a>
                <p>
                    Hello there, my name is Samagra Pandey. I'm an undergraduate computer science student at UCLA. I am passionate about building software tools to solve real-world issues, and about expanding the domain of our knowledge in cutting edge fields, from machine learning to quantum computing.
                </p>
            </div>
        </div>
        <button id = "scrollDownButton" onClick={handleClick}>▼</button>
      </div>
    )
  }
  
  export default AboutMe