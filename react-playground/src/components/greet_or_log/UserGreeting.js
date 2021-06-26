import React from "react-dom"
import Mailbox from "../Mailbox";
import Page from "../Page";
import NumberList from "../list/NumberList";
import Blog from "../blog/Blog"
import NameForm from "../form/NameForm";
import ListForm from "../form/ListForm";
import Reservation from "../form/Reservation";
import Calculator from "../tempcalc/Calculator";
import WelcomeDialog from "../WelcomeDialog";

const UserGreeting = () => {
    const messages = ['forget u kno who', 'and get u no poo', `the constipation sensation that's sweeping the nation`]
    const numbers = [ 8, 6, 7, 5, 3, 0, 9]
    const posts = [
        {id: 1, title: 'Hi Welcome to Chilis', content: 'food'},
        {id: 2, title: `Can't touch this`, content: 'Da nanana nana nana'}
    ]


    return (
        <div>
            <div>Sah broski</div>

            <div id="messages">
                <Mailbox unreadMessages={messages} />
            </div>

            <div id="userBody"> 
                <WelcomeDialog />
                <Page />
                <NumberList numbers={numbers}/>
                <Blog posts={posts}/>
                <NameForm />
                <ListForm />
                <Reservation />
                <Calculator />
            </div>
        </div>
    )
        
}

export default UserGreeting; 