import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
function VideoPage() {
    const [video, setvideo] = useState(null);
    const { subjectId, id } = useParams();

    useEffect(() => {
        axios
            .get(`https://esoft-bckd.herokuapp.com/subjects/${subjectId}/video/${id}`)
            .then((res) => {
                setvideo(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="esoft-content">
            <div className="esoft-video-page-header">{video?.title}</div>
            <div className="esoft-video-page-content">
                <iframe
                    width="100%"
                    height="100%"
                    src={video?.url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default VideoPage;
