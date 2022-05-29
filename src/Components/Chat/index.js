import './style.css';
import ChatIcon from '../../assets/chat.png';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
function ChatWidget() {
    const location = useLocation();
    const user = useSelector((state) => state.user);

    if (location.pathname.includes('chat-online') || user?.userlogged?.role !== 'Aluno') {
        return null;
    }

    return (
        <>
            <Link to="/student/chat-online">
                <div className="chat-widget">
                    <img src={ChatIcon} alt="Chat" />
                </div>
            </Link>
        </>
    );
}

export default ChatWidget;
