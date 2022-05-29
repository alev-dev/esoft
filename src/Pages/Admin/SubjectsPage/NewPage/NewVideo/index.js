import axios from 'axios';
import { useState } from 'react';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import { useNavigate, useParams } from 'react-router-dom';
import './style.css';
function NewVideoPage() {
    const { id } = useParams();
    const [loading, setloading] = useState(false);
    const [video, setVideo] = useState({
        title: '',
        url: '',
        background: '',
    });
    const navigate = useNavigate();
    const handleChangeTitle = (e) => {
        setVideo({
            ...video,
            title: e.target.value,
        });
    };

    const handleSubmit = () => {
        axios
            .post(`https://esoft-bckd.herokuapp.com/subjects/${id}/video`, video)
            .then((response) => {
                NotificationManager.success('Video criado com sucesso!');
                navigate(`/admin/subjects/${id}`);
            })
            .catch((error) => {
                NotificationManager.error('Erro ao criar video!');
            });
    };

    function onAddVideo(e) {
        e.preventDefault();
        var file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'u45m9vyq');
        setloading(1);
        axios.post(`https://api.cloudinary.com/v1_1/dxyv7aypq/video/upload`, formData).then((response) => {
            setloading(null);
            setVideo({
                ...video,
                url: response.data.secure_url,
                background: response.data.secure_url.replace('mp4', 'jpg'),
            });
        });
    }

    return (
        <div className="esoft-content">
            <div className="esoft-content-title">
                <h2>Novo Vídeo</h2>
            </div>
            <div className="esoft-content-video">
                <div className="esoft-content-video-title">
                    <h3>Título do Vídeo</h3>
                    <input type="text" value={video.title} onChange={handleChangeTitle} />
                </div>
                {loading ? (
                    <div className="esoft-content-video-loading">
                        <div className="esoft-content-video-loading-text">
                            <p>Carregando...</p>
                        </div>
                    </div>
                ) : (
                    video?.url && (
                        <div className="esoft-content-video-preview">
                            <img src={video?.background} alt="Video" />
                        </div>
                    )
                )}
                <div className="esoft-content-video-upload">
                    <label htmlFor="uploadVideo"> Selecionar Video</label>
                    <input id="uploadVideo" type="file" onChange={onAddVideo} />
                </div>
            </div>

            {video?.url && video?.title?.length > 1 && (
                <div className="esoft-content-button">
                    <button className="esoft-content-button-save" onClick={handleSubmit}>
                        Salvar
                    </button>
                </div>
            )}
        </div>
    );
}

export default NewVideoPage;
