import React,{useState} from 'react'
import { useTranslation } from 'react-i18next';
import '../assets/i18next/index'
import './Header.css'
import {BsFillArrowDownSquareFill} from 'react-icons/bs';
import {AiOutlineGlobal} from 'react-icons/ai';
import { Rings } from 'react-loader-spinner';
export default function () {
    const { t, i18n } = useTranslation()
    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.id)
    };
    const [click,setClick] = useState(false);
    function Open() {
        setClick(() => setClick(true))
    }
    function Close() {
        setClick(() => setClick(false))
    }
  
  return (
    <>
    <div className='flexbox'>
       
       <div className='menu'>
           <ul>
               <li>{t("Home")}</li>
               <li>{t("About")}</li>
               <li>{t("Service")}</li>
               <li>{t("Contact")}</li>
           </ul>
       </div>
       <ul>
           <div>
               <span><AiOutlineGlobal  className='language' onClick={() => Open()}/></span>
               <div className={click ? "modal" : "active"}>
                   {click && 
                    <div onClick={() => Close()}>
                        <li  id='en'  onClick={changeLanguage} >En</li>
                    </div>
                   }
                   {click &&  
                    <div onClick={() => Close()}>
                        <li id='hy' onClick={changeLanguage}>Հայ</li>
                    </div>  
                   }
                   <div className='button'>
                       {click &&  <button onClick={() => Close()}>X</button>}
                   </div>
               </div>
           </div>
       </ul>
    </div>
    </>
    
    
  )
}
