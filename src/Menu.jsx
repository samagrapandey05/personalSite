function Menu(props) {
    const routeHome = () =>{ 
        props.aboutReference.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }
    const routeProjects = () =>{ 
        props.projectReference.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }
    return (
        <div className = "header">
            <button onClick={routeHome} className="menuButtons">
                About Me
            </button>
            
            <button onClick={routeProjects} className="menuButtons">Projects</button>
            

        </div>
    )
  }
  
  export default Menu