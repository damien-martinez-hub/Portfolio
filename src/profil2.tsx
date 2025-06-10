'use client';
import styles from './App.css';

import {  useRef } from 'react';
import { useState, useEffect } from 'react';
//import Button from 'react-bootstrap/Button';
import React from "react";
import Nav from 'react-bootstrap/Nav';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Card from 'react-bootstrap/Card';
import AppName from '../src/components/AppName.tsx';
import Chat from '../src/components/Chat.tsx';
import Headings from '../src/components/Header.tsx';
import SearchBar from '../src/components/searchBar.tsx';
import Button from '../src/components/Button.tsx';

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import DefaultLogo from "../src/img/openai_logo.png";
import OpenAI from "openai";

interface ChatMessage {
  prompt: string;
  response: string;
}

const openai = new OpenAI({
  apiKey: env.OPEN_AI_KEY,
 dangerouslyAllowBrowser: true
});

interface AppState {
  inputValue: string;
  chatMessages: ChatMessage[];
}

function Profil() {
 const [img_logo] = useState(DefaultLogo);
const [state, setState] = useState<AppState>(() => {
    const localValue = localStorage.getItem('appState');
    if (localValue === null) {
      return {
        inputValue: '',
        chatMessages: [],
      };
    }
    return JSON.parse(localValue);
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Update state with the new input value
    setState((prevState) => ({
      ...prevState,
      inputValue: event.target.value,
    }));
  };
   
 // State to manage the input value
  //const [inputValue, setInputValue] = useState('');
  // State to manage chat messages
  //const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);



  // Function to handle button click
  const handleSend = async () => {
    if (state.inputValue.trim() === '') return;

    const chatPrompt = `You: ${state.inputValue}`;

    try {
    

      const chatCompletion = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          store: true,
          messages: [
            {"role": "user", "content":state.inputValue},
          ],
});

      const responseContent =
        chatCompletion.choices[0]?.message?.content || 'No response';
     
      const newChatMessage: ChatMessage = {
        prompt: chatPrompt,
        response: responseContent,
      };

      // Add the new chat message to the chat messages
      // Append the new chat message to the array
      setState((prevState) => ({
        ...prevState,
        chatMessages: [...prevState.chatMessages, newChatMessage],
        inputValue: '',
      }));
    } catch (error) {
      console.error('Error fetching chat completion:', error);
      const errorMessage = 'Error fetching chat completion';
      const newChatMessage: ChatMessage = {
        prompt: chatPrompt,
        response: errorMessage,
      };
      // Append the error message to the array
      setState((prevState) => ({
        ...prevState,
        chatMessages: [...prevState.chatMessages, newChatMessage],
        inputValue: '',
      }));
    }


  };
     const handleClearChat = () => {
    // Clear the chat messages state
    setState((prevState) => ({
      ...prevState,
      chatMessages: [],
      inputValue: '',
    }));

    // Remove chat history from localStorage
    localStorage.removeItem('appState');
  };

 const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
   if (event.key === 'Enter' && !event.shiftKey) {
     event.preventDefault(); // Prevent the default action (newline)
     handleSend();
   }
 };

  return (
    <>
      <AppName>
        <div>
          <span>Damien </span>ChatBot
        </div>
      </AppName>
      <div>
        <Headings>
          <div>
            <br></br>
            
          </div>
        </Headings>
      </div>

      <div className="bg-white shadow-md rounded-lg border-4 border-solid max-w-2xl w-full ml-[30%]">
            <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
                <p className="text-lg font-semibold">Admin Bot</p>
                
            </div>
            <div id="chatbox" className="p-4 h-80 overflow-y-auto">
              <div className="chat-container">
                    <Chat>
                      {/* Map over the chat messages to render each one */}
                      {state.chatMessages.map((message, index) => (
                        <div key={index} className="chatConversations">

                          <div className="chat-prompt">{message.prompt}</div>

                          

                      <div className="chat-response flex items-start gap-2.5">
              <img className="w-8 h-8 rounded-full" src={img_logo} alt="Jese image" />
              <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">BotAI</span>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400"></span>
                  </div>
                  <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{message.response}</p>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
              </div>
              
            </div>

            </div>
                      ) ) }


           
                    </Chat>
                      </div>
      </div>
                  <div className="searchBar-container">
                    <SearchBar >
                         <Button textContent="Clear Chat" handleClick={handleClearChat} />
                      <textarea
                        className="search-input"
                        placeholder="Enter your text"
                        value={state.inputValue}
                        // Use the handleInputChange function
                        onChange={handleInputChange}
                        // Use the handleKeyDown function
                        onKeyDown={handleKeyDown}
                      />
                    
                      <Button
                        textContent="Send"
                        handleClick={handleSend}
                      />
                    </SearchBar>
                  </div>

                  </div>

            


      
    </>
)};

    export default Profil;
