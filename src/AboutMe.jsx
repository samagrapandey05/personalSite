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
                <p>
                    Hello there, my name is Samagra Pandey. I'm a Computer Science student at UCLA. 
                </p>
            </div>
        </div>
        <button id = "scrollDownButton" onClick={handleClick}>▼</button>
      </div>
    )
  }
  
  export default AboutMe