import cad from './cad.png'
import stocksImg from './stocks.jpeg'
import faceImg from './face.png'
import {useEffect, useRef} from "react"

function Popup(props) {
    const popupRef = useRef(null)


    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
    });
    const handleOutsideClick = (e)=>{
        if(popupRef.current && !popupRef.current.contains(e.target)){
            props.setCadClicked(false);
            props.setAlgoClicked(false);
            props.setFoodClicked(false);
            props.setFaceClicked(false);
        }
    }
    return (
    <div className="popupFull">
        {props.cadClicked ? 
        <div className = "popupCard" ref = {popupRef}>
            <img src={cad} className='popupImg'/>
            <h1 className="projectTitle">CADbot</h1>
            <a>Click here to view CADbot Beta</a>
            <p>Revolutionize your CAD and 3D-printing experience with CADbot, your personal AI assistant for everything CAD-related. Use it to create printable design files in an instant by simply typing out or drawing your intended object, or save time by downloading and refining CADbot's returned file. However you decide to use it, your CAD experience will never be same.</p>
        </div> : 
        props.algoClicked ? 
        <div className = "popupCard" ref = {popupRef}>
        <img src={stocksImg} className='popupImg'/>
        <h1 className="projectTitle">Algorithmic Stock Trading</h1>
        <a>Click here to view the platform</a>
        <p>End-to-end algorithmic stock trading platform, with backtested stock data.</p>
        </div>: 
        props.faceClicked ? 
        <div className = "popupCard" ref = {popupRef}>
        <img src={faceImg} className='popupImg'/>
        <h1 className="projectTitle">FindMe: Interactive Facial Recognition</h1>
        <a href='https://main--fascinating-tapioca-035312.netlify.app/' target="_blank">Click here to view the site</a>
        <p>Upload images or turn on your webcam, and your face will be detected.</p>
        </div>: 
        <div className = "popupCard" ref = {popupRef}>
        <img src={faceImg} className='popupImg'/>
        <h1 className="projectTitle">Food Allergy Grades</h1>
        <a>Click here to view the site</a>
        <p>Find and rate restraunts in your locality by their accomodations to your allergies.</p>
        </div>
        }
    </div>
    )
  }
  
  export default Popup