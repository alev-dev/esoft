import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ChatAdmin() {
    const [chats, setchats] = useState([]);

    useEffect(() => {
        axios.get('https://esoft-bckd.herokuapp.com/chats').then((res) => {
            console.log(res.data);
            setchats(res.data);
        });
    }, []);

    return (
        <div className="esoft-content">
            <div className="esoft-content-title">
                <h2>Chats</h2>
            </div>
            <div className="esoft-content-chats">
                {chats.map((chat, index) => {
                    return (
                        <div key={index} className="esoft-content-chats-list">
                            <Link to={`${chat.user._id}`}>
                                <div className="esoft-content-chats-chat">
                                    <div className="esoft-content-chats-chat-item">{chat.user.name}</div>
                                    <div className="esoft-content-chats-chat-item">{chat.user.email}</div>
                                    <div className="esoft-content-chats-chat-item">{chat.user.semester}</div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ChatAdmin;
