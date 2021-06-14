import React, { useEffect } from 'react';

const Server = () => {

  

  return (
    <div>
      Server is being rendered.

      <button onClick={()=>{localStorage.setItem("griffinbot_settings", JSON.stringify({api_key: "test"}));}}>
        Set Local Storage
      </button>
      <button onClick={()=>{localStorage.clear();}}>
        Clear Local Storage
      </button>

      <h1>{localStorage.getItem("griffinbot_settings")}</h1>
    </div>
  );
};

export default Server;
