import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { getUser } from '../../common/services/token';
import './style.css';
function ChatPage() {
    const [text, settext] = useState('');
    const [messages, setmessages] = useState([]);
    const { _id, name, role } = getUser();
    const myRef = useRef(null);

    useEffect(() => {
        axios.get(`https://esoft-bckd.herokuapp.com/chats/${_id}`).then((response) => {
            setmessages(response.data[0].message);
        });
    }, []);

    useEffect(() => {
        if (myRef.current) {
            myRef.current?.scroll({ top: myRef.current?.scrollHeight, behavior: 'smooth' });
        }
    }, [messages]);

    const handleMessageChange = (e) => {
        settext(e.target.value);
    };
    const handleSubmit = () => {
        var data = {
            message: { text, name, role },
        };
        axios.post(`https://esoft-bckd.herokuapp.com/chats/sendMessage/${_id}`, data).then((response) => {
            setmessages(response.data.message);
        });
    };

    return (
        <div className="esoft-content">
            <div className="esoft-content-title">
                <h2>Direct Chat</h2>
            </div>
            <div className="esoft-chat-body" ref={myRef}>
                {messages?.map((message, index) => (
                    <div key={index} className="esoft-chat-body-message">
                        <div
                            className={
                                message.role == 'Aluno'
                                    ? 'esoft-chat-body-message-content'
                                    : 'esoft-chat-body-message-content-admin'
                            }
                        >
                            <span className="esoft-chat-name">{message.name}</span>

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
    );
}

export default ChatPage;
