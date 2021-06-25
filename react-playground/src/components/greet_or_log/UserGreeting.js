import React from "react-dom"
import Mailbox from "../Mailbox";

const UserGreeting = () => {
    const messages = ['ur a poo', 'u no poo', `the constipation sensation that's sweeping the nation`]
    
    return (
        <div>
            <div>Sah broski</div>

            <div id="messages">
                <Mailbox unreadMessages={messages} />
            </div>
        </div>
    )
        
}

export default UserGreeting; 