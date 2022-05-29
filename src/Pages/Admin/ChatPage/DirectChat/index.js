import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DirectChat() {
    const [messages, setmessages] = useState([]);
    const { id } = useParams();
    const [text, settext] = useState('');
    useEffect(() => {
        axios.get(`https://esoft-bckd.herokuapp.com/chats/${id}`).then((res) => {
            setmessages(res.data);
        });
    }, []);

    const handleMessageChange = (e) => {
        settext(e.target.value);
    };

    return (
        <div className="esoft-content">
            <div className="esoft-content-title">
                <h2>Direct Chat</h2>
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
                <button className="esoft-chat-footer-btn">Enviar</button>
            </div>
        </div>
    );
}

export default DirectChat;
