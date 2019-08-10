import React from 'react';
import Terminal from 'terminal-in-react';

const TerminalApp = () => {
    const showMsg = () => 'hi im stuff';
    return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>  
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            'open-google': () => window.open('google.com', '_blank'),
            showmsg: showMsg,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg='Hello World! type help for list of commands'
        />
      </div>
    );
}

export default TerminalApp;