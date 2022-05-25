import { useState } from 'react';
import './style.css';
function ChatPage() {
    const [messages, setmessages] = useState([
        { content: 'oi', created_at: '2020-05-05' },
        { content: 'tudo bem ?', created_at: '2020-05-05' },
        { content: 'queria saber quando vai lançar novo conteudo', created_at: '2020-05-05' },
    ]);

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
                    {messages.map((message, index) => (
                        <div key={index} className="esoft-chat-body-message">
                            <div className="esoft-chat-body-message-content">
                                <p>{message.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ChatPage;
