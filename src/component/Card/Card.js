import React, { useState } from 'react'
import '../Card/Card.css'
import img from '../img/img1.jpg';
import img1 from '../img/img2.jpg';
import img2 from '../img/img3.jpg';
import { useTranslation } from 'react-i18next';
import {BsPersonSquare} from 'react-icons/bs'
export default function ({max}) {
  const [show,setShowLess] = useState(true);
  const [show1,setShowLess1] = useState(true);
  const [show2,setShowLess2] = useState(true);
  const { t, i18n } = useTranslation()

  return (
    <>
      <div className='cardbox'>
            <h2>Card<span>B</span>ox</h2>
     </div>
    <div className='Card'>
        
        <div className='list'>
          
            <img src={img} alt='nkar chka'/>
            <div>
                <h2 className='card'><BsPersonSquare /> {t("card")}</h2>
                <div className='textbox'>
                    <p>{show ? `${t("text").substring(0,max)}...` : t("text")}</p>
                </div>
                <div className='textbox'>
                    <button className='click'
                    onClick={(evt) =>{
                        evt.preventDefault();
                        setShowLess(!show)
                    }}
                    >{show ? t("more") : t("less")}</button>
                </div>
            </div>
        </div>
        <div className='list'>
            <img src={img1} alt='nkar chka'/>
            <div>
                <h2 className='card'> <BsPersonSquare /> {t("card")}</h2>
                <div className='textbox'>
                <p>{show1 ? `${t("text2").substring(0,max)}...` : t("text2")}</p>
                </div>
                <div className='textbox'>
                  <button className='click'
                    onClick={(evt) =>{
                        evt.preventDefault()
                        setShowLess1(!show1)
                    }}
                    >{show1 ? t("more") : t("less")}</button>
                </div>
            </div>
        </div>
        <div className='list'>
            <img src={img2} alt='nkar chka'/>
            <div>
                <h2 className='card'><BsPersonSquare /> {t('card')} </h2>
                <div className='textbox'>
                    <p>{show2 ? `${t("text3").substring(0,max)}` : t("text3")}</p>
                </div>
                <div className='textbox'>
                    <button className='click'
                    onClick={(evt) =>{
                        evt.preventDefault()
                        setShowLess2(!show2)
                    }}
                    >{show2  ? t("more") : t("less")}</button>
                </div>
            </div>
        </div>
      
   
       
    </div>
    </>
  )
}
