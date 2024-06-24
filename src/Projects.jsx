import foodImg from './food2.jpeg'
import faceImg from './face.png'
import stocksImg from './stocks.jpeg'
import cad from './cad.png'
import { useState } from 'react'
import Popup from './Popup.jsx'
function Projects(props) {
    const [cadClicked, setCadClicked] = useState(false);
    const [algoClicked, setAlgoClicked] = useState(false);
    const [faceClicked, setFaceClicked] = useState(false);
    const [foodClicked, setFoodClicked] = useState(false);
    const handleCadClick = () => {
        setCadClicked(true);
        setAlgoClicked(false);
        setFaceClicked(false);
        setFoodClicked(false);
    }
    const handleAlgoClick = () => {
        setCadClicked(false);
        setAlgoClicked(true);
        setFaceClicked(false);
        setFoodClicked(false);
    }
    const handleFaceClick = () => {
        setCadClicked(false);
        setAlgoClicked(false);
        setFaceClicked(true);
        setFoodClicked(false);
    }
    const handleFoodClick = () => {
        setCadClicked(false);
        setAlgoClicked(false);
        setFaceClicked(false);
        setFoodClicked(true);
    }
    return (
    <div className="projects" ref = {props.projectReference}>
        {cadClicked === false && algoClicked === false && faceClicked===false && foodClicked===false ? 
        <div>
        <h1>Projects</h1>
        <div className="projectTable" >
            <div className="projectBox" onClick={handleCadClick}>
                <img className="thumbnail"  src={cad}/>
                <div className="projectInfo">
                    <h1 className="projectTitle">
                        Automated CAD Designs
                    </h1>
                    <p className="description">
                        Make printable 3d models from text input and hand-drawn sketches.
                    </p>
                </div>
            </div>
            <div className="projectBox" onClick={handleAlgoClick}>
                <img className="thumbnail"  src={stocksImg}/>
                <div className="projectInfo" >
                    <h1 className="projectTitle">
                        Algorithmic Stock Trading
                    </h1>
                    <p className="description">
                        End-to-end algorithmic stock trading platform, with backtested stock data.
                    </p>
                </div>
            </div>
            <div className="projectBox" onClick={handleFaceClick}>
                <img className="thumbnail" src = {faceImg}/>
                <div className="projectInfo" >
                    <h1 className="projectTitle">
                        FindMe
                    </h1>
                    <p className="description">
                        Interactive facial detection, compatible with webcams and static image upload
                    </p>
                </div>
            </div>
            <div className="projectBox" onClick={handleFoodClick}>
                <img className="thumbnail" src={foodImg}/>
                <div className="projectInfo">
                    <h1 className="projectTitle">
                        Food Allergy Grades
                    </h1>
                    <p className="description">
                        Find and rate restraunts in your locality by their accomodations to your allergies.
                    </p>
                </div>
            </div>
        </div>
        </div>
        : <Popup cadClicked={cadClicked} setCadClicked={setCadClicked} algoClicked={algoClicked} setAlgoClicked={setAlgoClicked} foodClicked={foodClicked} setFoodClicked={setFoodClicked} faceClicked={faceClicked} setFaceClicked={setFaceClicked} />}
      </div>
    )
  }
  
  export default Projects