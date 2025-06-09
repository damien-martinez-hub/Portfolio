
'use client';
import styles from './App.css';
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
import {APIProvider, Map} from '@vis.gl/react-google-maps';

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import DefaultImage1 from "../src/img/bill_gates.png";
import DefaultImage2 from "../src/img/developpeur.png";
import DefaultImage3 from "../src/img/matrix_fond.jpg";

function Profil_page() {
const [img1] = useState(DefaultImage1);
const [img2] = useState(DefaultImage2);
const [img3] = useState(DefaultImage3);

  return (

   <>

<section class="w-full overflow-hidden dark:bg-gray-900">

    <div class="flex flex-col">
  
        <img src={img3} alt="User Cover"
                class="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] h-[11rem]" />


        <div class="sm:w-[60%] w-[90%] mx-auto flex">
            <img src={img2} alt="User Profile"
                    class="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] w-[7rem] h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] bottom-[3rem]" />

      
            <h1
                class="w-full text-left my-4 sm:mx-4 pl-4 text-gray-800 lg:text-4xl md:text-3xl sm:text-3xl text-xl font-serif">
                Damien Martinez - Développeur IA</h1>

        </div>

        <div
            class="xl:w-[60%] lg:w-[90%] md:w-[90%] sm:w-[92%] w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 -top-4">
                   <div class="space-y-4 max-w-4xl mx-auto mt-[2%] ml-[0%]">
  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 fill-teal-500" viewBox="0 0 35 30" fill="none">
    <path
      d="M22.3838 27.6777C23.5264 28.9961 25.3721 29.6992 27.4814 29.6992C31.6123 29.6992 34.249 26.9746 34.249 22.7559C34.249 18.625 31.5244 15.6367 27.6572 15.6367C26.8662 15.6367 25.9873 15.8125 25.1084 16.0762C24.5811 9.48438 27.833 4.03516 32.2275 2.36523L31.7881 0.871094C24.2295 3.77148 19.4834 11.1543 19.4834 19.8555C19.4834 22.668 20.5381 25.7441 22.3838 27.6777ZM0.499023 19.8555C0.499023 24.6895 3.22363 29.6992 8.49707 29.6992C12.54 29.6992 15.1768 26.9746 15.1768 22.7559C15.1768 18.625 12.4521 15.6367 8.67285 15.6367C7.88184 15.6367 7.00293 15.8125 6.12402 16.0762C5.59668 9.48438 8.84863 4.03516 13.2432 2.36523L12.7158 0.871094C5.24512 3.77148 0.499023 11.1543 0.499023 19.8555Z">
    </path>
  </svg>
  <p class="md:text-lg leading-relaxed">Software is a great combination between artistry and engineering.</p>
  <div class="flex items-center gap-2">
    <p><span class="font-bold">Bill Gates</span></p>
  </div>
</div>
            <p class="w-fit text-gray-700 dark:text-gray-400 text-md">Passionné d'informatique et d'électronique, mes premières expériences m'ont permis de renforcer mes acquis et d'appréhender 
                l'utilisation des différents outils et techniques en Informatique/Electronique,Energie et Automatique. 
                Etudiant motivé, je bénéficie d'expériences pratiques tournées vers la programmation informatique
                (developpement informatique) .Mes compétences favorites se caractérisent par la programmation de microcontrbleurs et 
                l'embarqué (logiciel Atmel Studio, et VHDL). Pendant mes etudes en licences,je dispose des acquis theoriques en EEA dont 
                I'analyse descircuits et systemes electronique, les tansferts radiatifs et thermiques, des connaissances dans I'environnement
                 de calcul numerique scientifique et en traitement du signal. Cependant, je souhaite debuter ma carrière dans le domaine de l'Informatique backend/front-end auquel (grâce à mes acquis théoriques) je puisse développer des competences 
                  techniques. En quête de nouveaux challenges, afin de renforcer mes competences techniques et de developper mon 
                  experience professionnelle , je souhaite rejoindre une organisation a laquelle je pourrais apporter mon dynamisme et goût du challenge.</p>


     
            <div class="w-full my-auto py-6 flex flex-col justify-center gap-2">
                <div class="w-full flex sm:flex-row flex-col gap-2 justify-center">
                    <div class="w-full">
                        <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                            <div class="flex flex-col pb-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">First Name</dt>
                                <dd class="text-lg font-semibold">Damien</dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Last Name</dt>
                                <dd class="text-lg font-semibold">Martinez</dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Gender</dt>
                                <dd class="text-lg font-semibold">Male</dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Github</dt>
                                <dd class="text-lg"><a href="https://github.com/damien-martinez-hub">Lien Git</a></dd>
                            </div>
                        </dl>
                    </div>
                    <div class="w-full">
                        <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                            <div class="flex flex-col pb-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Location</dt>
                                <dd class="text-lg font-semibold">Saint-Denis(974),La Réunion </dd>
                            </div>

                            <div class="flex flex-col pt-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone Number</dt>
                                <dd class="text-lg font-semibold">+262 6 93 81 60 78</dd>
                            </div>
                            <div class="flex flex-col pt-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
                                <dd class="text-lg font-semibold">damienmartinez591@gmail.com</dd>
                            </div>

                            <div class="flex flex-col pt-3">
                                <dt class="mb-1 text-gray-1000 md:text-lg ">Website </dt>
                                <dd class="text-lg"><a href="https://uni-coiffure.online/projetinfo.php">Uni-coiffure </a></dd>
                            </div>
                            
                        </dl>
                    </div>
                </div>
                
                <div class="my-10 lg:w-[60%] md:h-[14rem] w-full h-[10rem]">
        
                    <h1
                        class="w-fit font-serif my-4 pb-1 pr-2 rounded-b-md border-b-4 border-blue-600 dark:border-b-4 dark:border-yellow-600 dark:text-white lg:text-4xl md:text-3xl text-xl">
                        My Location</h1>

                   <APIProvider apiKey={"AIzaSyDosh6SAOBebHaSZtEqq4yL64Y35EHvqvo"}>
                    <Map
                    style={{width: '100vw', height: '150vh'}}
                    defaultCenter={{lat: -20.8937121, lng: 55.4560189 }}
                    defaultZoom={15.5}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    />
                </APIProvider>
                <br/>
                </div>
            </div>

            <div
                class="fixed right-2 bottom-20 flex flex-col rounded-sm bg-gray-200 text-gray-500 dark:bg-gray-200/80 dark:text-gray-700 hover:text-gray-600 hover:dark:text-gray-400">
                <a href="https://www.linkedin.com/in/damien-martinez-b2979331b/">
                    <div class="p-2 hover:text-primary hover:dark:text-primary">
                        <svg class="lg:w-6 lg:h-6 w-4 h-4 text-blue-500" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                                clip-rule="evenodd" />
                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                        </svg>

                    </div>
                </a>
             
                <a href="https://www.facebook.com/profile.php?id=61577179501200">
                    <div class="p-2 hover:text-blue-500 hover:dark:text-blue-500">
                        <svg class="lg:w-6 lg:h-6 w-4 h-4 text-blue-700" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                </a>
                
            </div>

        </div>
    </div>
</section>
      </>
  )
}

export default Profil_page;












