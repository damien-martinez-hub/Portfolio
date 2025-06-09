
'use client';
//import styles from './App.css';
import { useState, useRef } from 'react';
//import Button from 'react-bootstrap/Button';
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Profil from './profil2.tsx';
import { createRoot } from 'react-dom/client';
import root from './App.js';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Card from 'react-bootstrap/Card';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import DefaultImage from "../src/img/ia_img.jpg";
import DefaultImage2 from "../src/img/copilot.jpg";
import DefaultImage3 from "../src/img/openai.jpg";
import DefaultImage4 from "../src/img/mistral.png";
import DefaultImage5 from "../src/img/frontend.png";
import DefaultImage6 from "../src/img/dev_pack.png";
import DefaultImage7 from "../src/img/software.png";
import DefaultImage8 from "../src/img/autre.png";

function Competences() {


const inputRef = useRef(null);
const inputRef2 = useRef(null);
const inputRef3 = useRef(null);

   const [avatarURL, setAvatarURL] = useState(DefaultImage);
   const [img2] = useState(DefaultImage2);
   const [img3] = useState(DefaultImage3);
      const [img4] = useState(DefaultImage4);
      const [img5] = useState(DefaultImage5);
   const [img6] = useState(DefaultImage6);
   const [img7] = useState(DefaultImage7);
    const [img8] = useState(DefaultImage8);
      let inputRefArr = [
  inputRef ,
   inputRef2,
   inputRef3,
];
    const [myRefs] = useState(inputRefArr);

      function transFunc(props){
//  const node = prop.current;
        let count=2;
        {props.map(
         ( myref,index)=>
      { myref.current.style="position:relative;left:-500px;transition:"+count+"s;margin-left:500px";count++; }

        )}
       
    }



  return (

   <>

<div className="min-w-screen h-max animated fadeIn faster  left-0 top-0 flex justify-center items-center  outline-none bg-no-repeat bg-center bg-cover"  style={{backgroundImage: "url(https://images.unsplash.com/photo-1555421689-491a97ff2040?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)"}} id="modal-id">
   	<div className="absolute opacity-80"></div>
<div className="relative min-h-screen flex flex-col items-center justify-center "> 
   

<div className="grid mt-0  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <div className="flex flex-col">
            <div className="bg-white border-2 shadow-md rounded-3xl p-4 hover:scale-110 duration-300">
                <div className="flex-none lg:flex">
                    <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                        <img src={img5}
                            alt="Just a flower" className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl" />
                    </div>
                    <div className="flex-auto ml-3 justify-evenly py-2">
                        <div className="flex flex-wrap ">
                            <h2 className="flex-auto font-medium text-2xl">Web Pack</h2>
                        </div>
                        <p className="mt-3"></p>
                        <div className="flex py-4  text-sm text-gray-1000">
                            <div className="flex-1 inline-flex items-center text-xl">
                               <p>★ HTML ★ CSS ★ Javascript ★ Php</p>
                            </div>
                           
                        </div>
                        <div className="flex p-4 pb-2 border-t border-gray-1000 "></div>
                         <div className="flex py-4  text-sm text-gray-1000">
                            <div className="flex-1 inline-flex items-center text-xl">
                               <p>★ NodeJS ☆React ★Bootstrap ☆TailwindCss</p>
                            </div>
                           
                        </div>
                        
                       
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col ">
            <div className="bg-white border-2 shadow-md  rounded-3xl p-4 hover:scale-110 duration-300">
                <div className="flex-none lg:flex">
                    <div className=" h-full w-full lg:h-48 lg:w-48  lg:mb-0 mb-3">
                        <img src={img6} alt="Just a flower" className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl" />
                    </div>
                    <div className="flex-auto ml-3 justify-evenly py-2">
                        <div className="flex flex-wrap ">
                            
                            <h2 className="flex-auto text-2xl font-medium">Dev Pack</h2>
                        </div>
                        <p className="mt-3"></p>
                        <div className="flex py-4  text-sm">
                            <div className="flex-1 inline-flex items-center text-xl">
                                 <p>★ Python ★ Java ★ C ★ C++</p>
                            </div>
                           
                        </div>
                        <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                        <div className="flex space-x-3 text-sm font-medium">
                            <div className="flex-auto flex space-x-3 text-xl">
                                 <p>★ SQL ★ VHDL ★ SCILAB ★ Bash</p>
                            </div>
                
                        </div>
                    </div>
                </div>
            </div>
        </div>

         <div className="flex flex-col">
            <div className="bg-white border-2 shadow-md  rounded-3xl p-4 hover:scale-110 duration-300">
                <div className="flex-none lg:flex">
                    <div className=" h-full w-full lg:h-56 lg:w-48   lg:mb-0 mb-3">
                        <img src={img7}
                            alt="Just a flower" className=" w-full  object-scale-down lg:object-cover  lg:h-56 rounded-2xl" />
                    </div>
                    <div className="flex-auto ml-3 justify-evenly py-2">
                        <div className="flex flex-wrap ">
                            
                            <h2 className="flex-auto text-2xl font-medium">Logiciels maitrisés</h2>
                        </div>
                        <p className="mt-3"></p>
                        <div className="flex py-4  text-sm">
                            <div className="flex-1 inline-flex items-center text-xl">
                                 <p>★ Cadence CLAD ★ PSIM ★ COMSOL
                            </p>
                            </div>
                    
                        </div>     
                        <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                        <div className="flex space-x-3 text-sm font-medium">
                            <div className="flex-auto flex space-x-3 text-xl">
                                 <p>★ Atmel Studio ★ Arduino ★Visual Studio  </p>
                            </div>
                
                        </div>

                        <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                        <div className="flex space-x-3 text-sm font-medium">
                            <div className="flex-auto flex space-x-3 text-xl">
                                 <p>★ Xilinx ★ PostgreSQL ★ Arduino ★Gaml </p>
                            </div>
                
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col">
            <div className="bg-white border-2 shadow-md  rounded-3xl p-4 hover:scale-110 duration-300">
                <div className="flex-none lg:flex">
                    <div className=" h-full w-full lg:h-56 lg:w-48   lg:mb-0 mb-3">
                        <img src={img8}
                            alt="Just a flower" className=" w-full  object-scale-down lg:object-cover  lg:h-56 rounded-2xl" />
                    </div>
                    <div className="flex-auto ml-3 justify-evenly py-2">
                        <div className="flex flex-wrap ">
                            
                            <h2 className="flex-auto text-2xl font-medium">Autre..</h2>
                        </div>
                        <p className="mt-3"></p>
                        <div className="flex py-4  text-sm">
                            <div className="flex-1 inline-flex items-center text-xl">
                                 <p>★ Ocaml ★ GAML ★ XSE
                            </p>
                            </div>
                    
                        </div>     
                        <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                        <div className="flex space-x-3 text-sm font-medium">
                            <div className="flex-auto flex space-x-3 text-xl">
                                 <p> ... </p>
                            </div>
                
                        </div>

                        <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                        <div className="flex space-x-3 text-sm font-medium">
                            <div className="flex-auto flex space-x-3 text-xl">
                                 <p> ... </p>
                            </div>
                
                        </div>
                    </div>
                </div>
            </div>
        </div>

</div>
</div>
 </div>
 





      </>
  );
}

export default Competences;
