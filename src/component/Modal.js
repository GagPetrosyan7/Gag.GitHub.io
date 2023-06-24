import React from "react"
import "./modal.css"
import {BsCheckCircleFill,BsXCircleFill} from "react-icons/bs"
import { useState } from "react"
export default function Modal() {
    const [show,setShow] = useState(false);
    // function Click(){
    //     setShow(!show)
    // }
    function close(){
        setShow(false)
    }
    function open(){
        setShow(true)
    }
    return(
        <div className="modal">
            <div className="icon">
            <BsCheckCircleFill color ="green" onClick={open}/>
           </div>
           {show &&
                <div className="wrap">
                    <div className="text">
             <h2 >Modal Hello  <BsXCircleFill  color ="red" onClick={close}/></h2>
            
             </div> 
                </div>
             }
             
        </div>
    )
}