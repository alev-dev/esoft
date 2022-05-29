import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
function ChatAdmin() {
    const [chats, setchats] = useState([]);

    useEffect(() => {
        axios.get('https://esoft-bckd.herokuapp.com/chats').then((res) => {
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
                            <Link to={`${chat.user?._id}`}>
                                <div className="esoft-content-chats-chat">
                                    <div className="esoft-content-chats-chat-item">{`Aluno : ${chat.user.name}`}</div>
                                    <div className="esoft-content-chats-chat-item">{`Email : ${chat.user.email}`}</div>
                                    <div className="esoft-content-chats-chat-item">{`Semestre : ${chat.user.semester}`}</div>
                                    <div className="esoft-content-chats-chat-item">{`Mensagens : ${
                                        chat.user.messages ? chat.user.messages : 0
                                    }`}</div>
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
