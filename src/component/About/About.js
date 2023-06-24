import React from 'react'
import '../About/about.css'
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import { useTranslation } from 'react-i18next';
export default function About({html}) {
  const { t, i18n } = useTranslation()
  return (
    <div className='aboutus'>
           <h2 className='cardbox'>Abou<span>T</span>us</h2>
           <div className='about'>
                <div>
                    <img src={img4} />
                </div>
                <div className='textbox'>
                       <h2>HT<span>M</span>L</h2>
                      <div>
                       <b>{t("html")}</b>
                      </div>
                    </div>
               </div>
            <div className='about'>
                <div>
                    <img src={img3} />
                </div>
                <div className='textbox'>
                       <h2>Java<span>S</span>crit</h2>
                        <b>{t("about")}</b>
                    </div>
               </div>
             
              
               
            </div>

          
  )
}
