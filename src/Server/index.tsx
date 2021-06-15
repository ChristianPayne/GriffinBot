import React, { useEffect } from 'react';

const Server = () => {

  return (
    <div>
      Server is being rendered on the client.

      <button onClick={()=>{localStorage.setItem("griffinbot_settings", JSON.stringify({api_key: "test"}));}}>
        Set Local Storage
      </button>
      <button onClick={()=>{localStorage.removeItem("griffinbot_settings");}}>
        Clear Local Storage
      </button>
      <button onClick={()=>{}}>
        Leave Chat
      </button>

      <h1>{localStorage.getItem("griffinbot_settings")}</h1>
    </div>
  );
};

export default Server;
