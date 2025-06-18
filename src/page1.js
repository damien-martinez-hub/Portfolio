
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



function BasicExample() {


const inputRef = useRef(null);
const inputRef2 = useRef(null);
const inputRef3 = useRef(null);

   const [avatarURL, setAvatarURL] = useState(DefaultImage);
   const [img2] = useState(DefaultImage2);
   const [img3] = useState(DefaultImage3);
      const [img4] = useState(DefaultImage4);

      
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
    

    <div class=" max-w-64 w-full lg:max-w-full lg:flex" ref={inputRef} onLoad={()=>transFunc(inputRefArr)}>
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('/img/card-left.jpg')"}} title="Woman holding a mug">
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white-500 hover:bg-gray-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 mr-[10%] mt-[3%] flex flex-col justify-between leading-normal ">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">

      </p>
      <div class="text-gray-900 font-bold text-xl mb-2">Intelligence Artificielle</div>
      <p class="text-gray-700 text-base">Abrégée aujourd'hui en IA, l'intelligence artificielle est un enjeu technologique qui intéresse l'économie, la recherche ou la formation et innerve tous les domaines de la société.
        Elle promet de générer des gains de productivité, d'améliorer le bien-être et de contribuer à apporter des solutions aux défis mondiaux que sont, par exemple, le changement climatique, l'épuisement des ressources et les crises sanitaires.
        Le développeur IA est responsable de la conception, du développement et de la mise en œuvre de solutions d'intelligence artificielle. Il utilise des techniques d'apprentissage automatique pour résoudre des problèmes complexes et optimiser les processus métier.
        « L’approche peut paraître basique, mais on a souvent tendance à perdre de vue l’essentiel : la responsabilité première du Développeur IA est d’apporter des réponses à des problèmes, dont la particularité est d’être des problèmes complexes.

De manière romantisée, mais pas pour autant déconnectée de la réalité, on peut dire que le Développeur en Intelligence Artificielle a la tâche passionnante d’être un moteur de la modernité. Avec des outils pas si compliqués que ça, il aide à écrire le futur et à réaliser le plein potentiel – celui de la technologie en général, celui de l’entreprise pour laquelle il travaille, plus spécifiquement 
Les missions d’un Développeur en Intelligence Artificielle peuvent varier en fonction de l’entreprise, du secteur d’activité et du projet spécifique sur lequel il travaille. Il existe cependant un tronc commun de tâches et responsabilités récurrentes auxquelles sont confrontés presque tous les professionnels de cette branche.
        </p>  </div>
    
    <div class="flex items-center space-x-96">
      <img class="w-100 h-[50%] mr-4" src={img2} alt="Ia"/>
      <img class="w-100 h-[50%] mr-4" src={img3} alt="Ia"/>
      {/*<div class="text-sm">
        <p class="text-gray-900 leading-none">Damien Martinez</p>
        //<p class="text-gray-600">Aug 18 2025</p>
      </div>*/}
    </div>
  </div>
</div>
 
 <div class=" max-w-64 w-full lg:max-w-full lg:flex" ref={inputRef2}>
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('/img/card-left.jpg')"}} title="Woman holding a mug">
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white-500 hover:bg-gray-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 mr-[10%] mt-[3%] flex flex-col justify-between leading-normal ">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">

      </p>
      <div class="text-gray-900 font-bold text-xl mb-2">Développeur IA</div>
      <p class="text-gray-700 text-base">   Un Développeur IA est un professionnel qui participe au développement produit d’une entreprise en créant puis en déployant des modèles d’analyse de données issus des technologies de l'Intelligence Artificielle.

Ses missions consistent le plus souvent à concevoir des algorithmes d’analyse ou de prédiction des données afin d’optimiser les performances produites de l’entreprise. Il peut par exemple avoir la responsabilité de mettre en place une technologie de vision par ordinateur ou d’intégrer des modèles de langage produit par des LLM de type ChatGPT.   
Un Développeur d’Application IA doit avoir de solides compétences en programmation, et maîtriser les frameworks IA. Afin de créer des applications, il est doté d’un grand sens créatif dans la conception. Il est capable de résoudre des problèmes algorithmiques et de travailler en équipe pour créer des applications interactives et intelligentes.
  
</p>  </div>
  </div>
</div>
 

<div class=" max-w-64 w-full lg:max-w-full lg:flex" ref={inputRef3} >
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('/img/card-left.jpg')"}} title="Woman holding a mug">
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white-500 hover:bg-gray-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 mr-[10%] mt-[3%] flex flex-col justify-between leading-normal ">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">

      </p>
      <div class="text-gray-900 font-bold text-xl mb-2">Missions</div>
      <p class="text-gray-700 text-base">
✦ Analyse des besoins : Comprendre les exigences et les objectifs du projet d’IA en collaborant avec les parties prenantes, telles que les chefs de projet, les chercheurs en IA et les utilisateurs finaux.<br/>

✦ Collecte et préparation des données : Rassembler, nettoyer et organiser les données nécessaires pour entraîner le modèle d’IA. La qualité et la diversité des données sont essentielles pour obtenir de bons résultats.<br/>
✦ Développement de modèles : Concevoir, mettre en œuvre et optimiser des modèles d’IA en utilisant des techniques d’apprentissage machine, d’apprentissage profond ou d’autres approches en fonction des besoins du projet.<br/>
✦ Entraînement de modèles : Utiliser les données préparées pour entraîner les modèles d’IA et ajuster les paramètres pour améliorer les performances du modèle.<br/>
✦ Validation et évaluation : Évaluer la qualité et la précision des modèles d’IA en utilisant diverses métriques et techniques de validation pour s’assurer que le modèle répond aux critères définis.<br/>
✦ Intégration : Intégrer les modèles d’IA dans les applications et systèmes existants, que ce soit sur des plates-formes web, mobiles ou embarquées.<br/>
✦ Optimisation des performances : Améliorer l’efficacité et l’évolutivité des modèles d’IA pour qu’ils puissent traiter de grandes quantités de données en temps réel.<br/>
✦ Maintenance et mise à jour : Surveiller les performances des modèles en production, corriger les erreurs et les bogues, et mettre à jour les modèles pour qu’ils restent pertinents face à l’évolution des besoins.<br/>
✦ Sécurité et éthique : Prendre en compte les considérations éthiques et de confidentialité dans le développement et l’utilisation des systèmes d’IA.
        </p>  </div> </div>
</div>


<div class="flex align-items space-x-36">
<a href="https://intelligence-artificielle.com/top-entreprises-intelligence-artificielle/" class="ml-[15%] mt-[2%] mb-[2%] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Les plus grandes entreprises d'IA en 2025</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Ici, sont les plus grandes entreprises IA dans le monde actuel en 2025, dans l'ordre croissant..</p>
</a>

<a href="https://lactualite.com/techno/les-fonctionnalites-avancees-des-ia-generatives-a-connaitre-en-2025/" class=" mt-[2%] mb-[2%] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Les fonctionnalités de l'IA générative en 2025</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Article d'actualité qui décrit les nouveautés sur l'IA générative en 2025..</p>
</a>

<a href="https://www.intelligence-artificielle-school.com/ecole/technologies/" class=" mt-[2%] mb-[2%] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Les technologies de l'IA</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Site web intéréssant qui regroupe les technologies primaires de l'IA d'aujourdhui..</p>
</a>
</div>
      </>
  );
}

export default BasicExample;
