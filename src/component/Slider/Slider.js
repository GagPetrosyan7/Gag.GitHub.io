import React,{useState} from 'react'
import '../Slider/Sliider.css'
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'
// import Carousel from 'react-multi-carousel'
// import 'react-multi-carousel/lib/styles.css';
export default function Slider({data}) {
    const [show,setShow] = useState(0);

    const nextSlide = () =>{
        setShow(show === data.length -1 ? 0 : show + 1)
    }
    const prevSlide = () =>{
      setShow(show === 0 ? data.length - 1 : show - 1)
    }
    // const responsive = {
    //     superLargeDesktop: {
    //       // the naming can be any, depends on you.
    //       breakpoint: { max: 4000, min: 3000 },
    //       items: 5
    //     },
    //     desktop: {
    //       breakpoint: { max: 3000, min: 1024 },
    //       items: 3
    //     },
    //     tablet: {
    //       breakpoint: { max: 1024, min: 464 },
    //       items: 2
    //     },
    //     mobile: {
    //       breakpoint: { max: 464, min: 0 },
    //       items: 1
    //     }
    //   };

    
  return (
    <div className='carusel'>
        <BsFillArrowLeftCircleFill onClick={prevSlide}  className='arrow arrow-left'/>
        {data.map((item,index) =>{
            return <img className={show === index ? "slide" : "slide slide-hidden"} src={item.src} alt={item.alt} key={index} />
        })}
        <BsFillArrowRightCircleFill onClick={nextSlide} className='arrow arrow-right'/>
        <b className='indecator'>{data.map((_,index)=>{
            return <button className={show === index ? "clickme" : "clickme  clickme-inActive"} key={index}></button>
        })}</b>
        {/* <Carousel  
        swipeable={false}
       draggable={false}
       showDots={true} 
      responsive={responsive}>
             <div>1</div>
             <div>2</div>
             <div>3</div>
             <div>4</div>
        </Carousel> */}
    </div>
  )
}

