import { useState } from 'react'
import './App.css'
import React from "react";
import ChatBot from "react-chatbotify";



function App() {
  const [sessionId, setSessionId] = useState(() => {
    // Generate a random session ID on first load
    return Math.random().toString(36).substring(2, 15);
  });

  const chatApiUrl = "/api/chat";
  //const chatApiUrl = "YOUR_API_GATEWAY_URL";
  
  const settings = {
    general: {
      embedded: true
    },
    header :{
      showAvatar: false,
      title : "Course Assistant"
    },
    footer :{
      text : "ABC Training Center"
    }
  }


  async function chat(params) {
    
    console.log(params.userInput);
    console.log(sessionId);
    const response = await fetch(chatApiUrl, {
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
        prompt: params.userInput,
        session_id: sessionId
      })
    });

    const data = await response.json();

    let responseText = '';
    responseText = data.response;
    
    // Update session ID if it's returned in the response
    if (data.session_id) {
      setSessionId(data.session_id);
    }
    
    return responseText;

  }

  const flow = {
    start: {
      message: "Hello, I am your Course Assistant! How can I help you?",
      path: "chat_loop",
    },
    chat_loop: {
      message: async (params) => {
        console.log(params);
        return await chat(params);
      },
      path: "chat_loop"
    },
  }

  return (
    <>
      <h2 style={{ marginTop: 0 }}>Training Center Assistant Demo </h2>
      
        <ChatBot settings={settings}   flow={flow}/>
 
    </>
  )
}

export default App
