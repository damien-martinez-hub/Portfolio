
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

import DefaultImage1 from "../src/img/ensoa.png";
import DefaultImage7 from "../src/img/software.png";

function Experiences() {

const inputRef = useRef(null);
const inputRef2 = useRef(null);
const inputRef3 = useRef(null);
const [img4] = useState(DefaultImage7);
const [img1] = useState(DefaultImage1);
  return (

   <>
        


        <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-10">
            <div class="card w-full">
            <div class="card__content text-center relative transition-transform duration-1000 text-white font-bold">
                
                <div class="card__front absolute top-0 bottom-0 right-0 left-0 p-8 justify-center relative w-full flex items-end justify-start text-left bg-[url('../src/img/frontend2.png')]  bg-cover bg-center"  style={{height: "450px"}}>
                <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900">
                        </div>
                        <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                            <a href="#"
                                class="text-xs bg-indigo-600 text-white px-2 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">UNI-COIFFURE</a>
                            <div class="text-black font-regular flex flex-col justify-start">
                                <span class="text-3xl leading-0 font-semibold">01 - 03</span>
                                <div class="flex items-end justify-between"><span class="-mt-3">Janvier </span>
                                <span class="-mt-3 ml-1"> Mars</span>
                                
                                </div>
                         
                            </div>
                        </div>
                        <main class="z-10">
                            <a href="#"
                                class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">
                        ★ Projet: Création d'un site web interactif.(2025)
                        
                            </a>
                        </main>
                </div>
                <div class="card__back absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
                <div class=" absolute top-0 bottom-0 right-0 left-0 p-8 justify-center relative w-full flex items-end justify-start text-left bg-indigo bg-cover bg-center"  style={{height: "450px"}}>
                <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-500">
                        </div>
                        <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                            <a href="https://uni-coiffure.online/projetinfo.php"
                                class="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">LIEN SITE</a>
                            <div class="text-black font-regular flex flex-col justify-start">
                                <span class="text-3xl leading-0 font-semibold">01 - 03</span>
                                <div class="flex items-end justify-between"><span class="-mt-3">Janvier </span>
                                <span class="-mt-3 ml-1"> Mars</span>
                                </div>
                            </div>
                        </div>
                        <main class="z-10">
                            <a href="#"
                                class="text-md tracking-tight font-medium leading-7 font-regular text-black hover:underline">
                        ★ Développer un site web interactif intégrant html, css, javascript, php au sein de
 l'entreprise Uni-coiffure à Saint-Denis (974) ..
                        <br/>★ Gestion et interaction avec une base de donnée pour créer un compte utilisateur.
                        <br/>★ Utilisation du framework Bootstrap pour le front-end.
                        <br/>★ Création d'un calendrier.
                         
                            </a>
                        
                        </main>
                </div>
                </div>
                
            </div>
            </div>
             <div class="card w-full">
            <div class="card__content text-center relative transition-transform duration-1000 text-white font-bold">
                
                <div class="card__front absolute top-0 bottom-0 right-0 left-0 p-8 justify-center relative w-full flex items-end justify-start text-left bg-[url('../src/img/ensoa.png')]  bg-cover bg-center"  style={{height: "450px"}}>
                <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-500">
                        </div>
                        <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                            <a href="#"
                                class="text-xs bg-indigo-600 text-white px-2 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">ENSOA</a>
                            <div class="text-black font-regular flex flex-col justify-start">
                                <span class="text-3xl leading-0 font-semibold">02 - 06</span>
                                <div class="flex items-end justify-between"><span class="-mt-3">Février </span>
                                <span class="-mt-3 ml-1"> Juin</span>
                                
                                </div>
                         
                            </div>
                        </div>
                        <main class="z-10">
                            <a href="#"
                                class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">
                        ★  Engage Volontaire Sous-Officier Armée de Terre(2024)
                        
                            </a>
                        </main>
                </div>
                <div class="card__back absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
                <div class=" absolute top-0 bottom-0 right-0 left-0 p-8 justify-center relative w-full flex items-end justify-start text-left bg-indigo bg-cover bg-center"  style={{height: "450px"}}>
                <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-500">
                        </div>
                        <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                            <a href="#"
                                class="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">ST-MAIXENT</a>
                            <div class="text-black font-regular flex flex-col justify-start">
                                <span class="text-3xl leading-0 font-semibold">02 - 06</span>
                                <div class="flex items-end justify-between"><span class="-mt-3">Février </span>
                                <span class="-mt-3 ml-1"> Juin</span>
                                </div>
                            </div>
                        </div>
                        <main class="z-10">
                            <p
                                class="text-md text-justify tracking-tight font-medium leading-7 font-regular text-black">
                         ★ Suivi de la formation initiale générale pendant 5 mois.
                      <br/>  ★ La spécialité consistait à réaliser l’entretien et les réparations complexes des hélicoptères de l’armée de Terre. Vous travaillez soit sur les moteurs, sur l’ensemble des équipements électroniques et informatiques embarqués (avionique).
                         
                            </p>
                        
                        </main>
                </div>
                </div>
                
            </div>
            </div>

             <div class="card w-full">
            <div class="card__content text-center relative transition-transform duration-1000 text-white font-bold">
                
                <div class="card__front absolute top-0 bottom-0 right-0 left-0 p-8 justify-center relative w-full flex items-end justify-start text-left bg-[url('../src/img/irit.png')]  bg-cover bg-center"  style={{height: "450px"}}>
                <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-500">
                        </div>
                        <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                            <a href="#"
                                class="text-xs bg-indigo-600 text-white px-2 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">IRIT</a>
                            <div class="text-black font-regular flex flex-col justify-start">
                                <span class="text-3xl leading-0 font-semibold">04 - 09</span>
                                <div class="flex items-end justify-between"><span class="-mt-3">Avril </span>
                                <span class="-mt-3 ml-1"> Septembre</span>
                                
                                </div>
                         
                            </div>
                        </div>
                        <main class="z-10">
                            <a href="#"
                                class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">
                        ★  Stagiaire - Compilation JIT (2023)
                        
                            </a>
                        </main>
                </div>
                <div class="card__back absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
                <div class=" absolute top-0 bottom-0 right-0 left-0 p-8 justify-center relative w-full flex items-end justify-start text-left bg-indigo bg-cover bg-center"  style={{height: "450px"}}>
                <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-500">
                        </div>
                        <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                            <a href="#"
                                class="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">TOULOUSE</a>
                            <div class="text-black font-regular flex flex-col justify-start">
                                <span class="text-3xl leading-0 font-semibold">04 - 09</span>
                                <div class="flex items-end justify-between"><span class="-mt-3">Avril </span>
                                <span class="-mt-3 ml-1"> Septembre</span>
                                </div>
                            </div>
                        </div>
                        <main class="z-10">
                            <p
                                class="text-justify tracking-tight font-medium leading-7 font-regular text-black">
                         ★ Générer un simulateur JIT (processeurs hôtes x86 ou ARM), en profitant 
des services deja fournis par GLISS et des propriétés de chaque instruction en mémoire. 

<br/>★ Il sera possible de simuler JIT tous les jeux d'instructions supportes par GUSS (ARM, RISC-V, Sparc, PowerPC, AVR, etc).. 
                     
                            </p>
                        
                        </main>
                </div>
                </div>
                
            </div>
            </div>

            <div class="card w-full">
            <div class="card__content text-center relative transition-transform duration-1000 text-white font-bold">
                
                <div class="card__front absolute top-0 bottom-0 right-0 left-0 p-8 justify-center relative w-full flex items-end justify-start text-left bg-[url('../src/img/irit.png')]  bg-cover bg-center"  style={{height: "450px"}}>
                <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-500">
                        </div>
                        <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                            <a href="#"
                                class="text-xs bg-indigo-600 text-white px-2 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">IRIT</a>
                            <div class="text-black font-regular flex flex-col justify-start">
                                <span class="text-3xl leading-0 font-semibold">01 - 06</span>
                                <div class="flex items-end justify-between"><span class="-mt-3">Janvier </span>
                                <span class="-mt-3 ml-1">Juin</span>
                                
                                </div>
                         
                            </div>
                        </div>
                        <main class="z-10">
                            <a href="#"
                                class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">
                        ★   Stagiaire - Projet Villagil Ville
 Intelligente) (2023)
                            </a>
                        </main>
                </div>
                <div class="card__back absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
                <div class=" absolute top-0 bottom-0 right-0 left-0 p-8 justify-center relative w-full flex items-end justify-start text-left bg-indigo bg-cover bg-center"  style={{height: "450px"}}>
                <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-500">
                        </div>
                        <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                            <a href="#"
                                class="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">TOULOUSE</a>
                            <div class="text-black font-regular flex flex-col justify-start">
                                <span class="text-3xl leading-0 font-semibold">04 - 09</span>
                                <div class="flex items-end justify-between"><span class="-mt-3">Avril </span>
                                <span class="-mt-3 ml-1"> Septembre</span>
                                </div>
                            </div>
                        </div>
                        <main class="z-10">
                            <p
                                class="text-justify tracking-tight font-medium leading-7 font-regular text-black">
                         ★ Ce 
projet vise a améliorer la mobilité en utilisant une approche de ville 
intelligente. Une grande quantité d'informations locales sera 
exploitée pour aider de proposer aux citoyens les meilleurs chemins 
dans la ville en utilisant de multiples moyens de mobilité. 
<br/>★ Développer avec GAML l'interconnexion des flux entre les capteurs. 
                     
                            </p>
                        
                        </main>
                </div>
                </div>
                
            </div>
            </div>
            </div>

 <div class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-10 mt-2">
 <div class="card w-full">
            <div class="card__content text-center relative transition-transform duration-1000 text-white font-bold">
                
                <div class="card__front absolute top-0 bottom-0 right-0 left-0 p-8 justify-center relative w-full flex items-end justify-start text-left bg-[url('../src/img/electronique.png')]  bg-cover bg-center"  style={{height: "450px"}}>
                <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-500">
                        </div>
                        <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                            <a href="#"
                                class="text-xs bg-indigo-600 text-white px-2 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">UNIVERSITE</a>
                            <div class="text-black font-regular flex flex-col justify-start">
                                <span class="text-3xl leading-0 font-semibold">01 - 05</span>
                                <div class="flex items-end justify-between"><span class="-mt-3">Janvier </span>
                                <span class="-mt-3 ml-1">Mai</span>
                                
                                </div>
                         
                            </div>
                        </div>
                        <main class="z-10">
                            <a href="#"
                                class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">
                        ★   Projet Licence Electronique & Informatique (2021)
                            </a>
                        </main>
                </div>
                <div class="card__back absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
                <div class=" absolute top-0 bottom-0 right-0 left-0 p-8 justify-center relative w-full flex items-end justify-start text-left bg-indigo bg-cover bg-center"  style={{height: "450px"}}>
                <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-500">
                        </div>
                        <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                            <a href="#"
                                class="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">ST-DENIS(974)</a>
                            <div class="text-black font-regular flex flex-col justify-start">
                                <span class="text-3xl leading-0 font-semibold">01 - 05</span>
                                <div class="flex items-end justify-between"><span class="-mt-3">Janvier </span>
                                <span class="-mt-3 ml-1"> Mai</span>
                                </div>
                            </div>
                        </div>
                        <main class="z-10">
                            <p
                                class="text-justify tracking-tight font-medium leading-7 font-regular text-black">
                         ★  Le but de ce projet consiste a développer un prototype dune 
camera développée sur ordinateur; connecté d une carte électroniques (Arduino).
<br/>★ Développer une interface graphique avec python 
       <br/>★ Collecter et stocker les données récupérés par l'ordinateur sur une carte arduino.              
                            </p>
                        
                        </main>
                </div>
                </div>
                
            </div>
            </div>
            </div>

</div>
</>
  );
}

export default Experiences;
