import axios from 'axios';
import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { getUser } from '../../common/services/token';
import './style.css';
function ChatPage() {
    const [text, settext] = useState('');
    const [messages, setmessages] = useState([]);
    const { _id, name, role } = getUser();

    useEffect(() => {
        axios.get(`https://esoft-bckd.herokuapp.com/chats/${_id}`).then((response) => {
            setmessages(response.data[0].message);
        });
    }, []);

    const handleMessageChange = (e) => {
        settext(e.target.value);
    };
    const handleSubmit = () => {
        var data = {
            message: { text, name, role },
            userId: _id,
        };
        axios.post(`https://esoft-bckd.herokuapp.com/chats/sendMessage/${_id}`, data).then((response) => {
            setmessages(response.data.message);
        });
    };

    return (
        <div className="esoft-content">
            <div className="esoft-chat">
                <div className="esoft-chat-header">
                    <div className="esoft-chat-header-title">
                        <h3>Chat Online</h3>
                    </div>
                    <div className="esoft-chat-header-subtitle">
                        <p>Deixe sua mensagem para que os professores possam conversar com você</p>
                    </div>
                </div>
                <div className="esoft-chat-body">
                    {messages?.map((message, index) => (
                        <div key={index} className="esoft-chat-body-message">
                            <div
                                className={
                                    message.role == 'Aluno'
                                        ? 'esoft-chat-body-message-content'
                                        : 'esoft-chat-body-message-content-admin'
                                }
                            >
                                <p>{message.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="esoft-chat-footer">
                    <input
                        type="text"
                        value={text}
                        name="message"
                        placeholder="Digite sua mensagem"
                        onChange={(e) => handleMessageChange(e)}
                    />
                    <button className="esoft-chat-footer-btn" onClick={handleSubmit}>
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChatPage;
