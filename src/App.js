import Carousel from "react-multi-carousel";
import Header from "./component/Header";
import Slider from "./component/Slider/Slider";
import {data} from './data/caruselDate'
import { useState,useEffect } from "react";
import { Rings } from "react-loader-spinner";
import Card from "./component/Card/Card";
import About from "./component/About/About";
import Modal from "./component/Modal";

function App() {
  const [loading,setLoading] = useState(false);
  useEffect(() =>{
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    },2000);
},[])
  return (
    <div className="App">
      {/* {loading ?
      <Rings   
      height="20%"
      width="100%"
      color="blue"
      radius="2"
      wrapperStyle={{}}
      wrapperClass="rings-loading"
      visible={true}
      ariaLabel="rings-loading" 
      /> :
          <>
             <Header />
              <Slider data={data}/>
              <Card 
                max={30}
              />
            <About 
           
            html="With the help of 
            HTML, you can easily 
            create a relatively simple, 
            but beautifully designed document. 
            In addition to simplifying document 
            structure, HTML supported hypertext.
             Multimedia capabilities were added a 
             little later. Originally, the HTML
              language was created as a way to construct 
              and design documents, a way to display them 
              regardless of the output medium used 
              (screen, printer, etc.). The text in the original
               HTML format had to be reproduced without
                stylistic and structural modification on the 
                equipment with different technical equipment
                 (the color screen of a modern computer, the
                   monochrome screen of an organizer, the 
                   limited-sized screen of mobile phones or 
                   text audio reproduction programs or equipment). 
            However, the 
            modern use of HTML is far from its original meaning."             
            />
          </> 
        } */}
        
        <Modal/>
    </div>
  );
}

export default App;
