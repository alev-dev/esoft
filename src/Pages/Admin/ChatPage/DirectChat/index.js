import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../../../common/services/token';

function DirectChat() {
    const [messages, setmessages] = useState([]);
    const { id } = useParams();
    const [text, settext] = useState('');
    const { name, role } = getUser();
    const myRef = useRef(null);
    useEffect(() => {
        axios.get(`https://esoft-bckd.herokuapp.com/chats/${id}`).then((res) => {
            console.log(res.data[0].message);
            setmessages(res.data[0].message);
        });
    }, []);
    console.log(id);
    const handleMessageChange = (e) => {
        settext(e.target.value);
    };

    const handleSubmit = () => {
        var data = {
            message: { text, name, role },
        };
        axios.post(`https://esoft-bckd.herokuapp.com/chats/sendMessage/${id}`, data).then((response) => {
            console.log(response.data);
            setmessages(response.data.message);
        });
    };
    useEffect(() => {
        if (myRef.current) {
            myRef.current?.scroll({ top: myRef.current?.scrollHeight, behavior: 'smooth' });
        }
    }, [messages]);

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

export default DirectChat;
