import axios from 'axios';
import { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import { useNavigate, useParams } from 'react-router-dom';
import './style.css';
function NewAtivitie() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ativitie, setAtivitie] = useState({
        question: '',
        answers: [],
    });

    const handleQuestionChange = (e) => {
        setAtivitie({
            ...ativitie,
            question: e.target.value,
        });
    };

    const handleAnswerChange = (e, index) => {
        var answers = ativitie.answers;
        answers[index] = { ...answers[index], answer: e.target.value };
        setAtivitie({
            ...ativitie,
            answers,
        });
    };

    const handleCorrectAnswerChange = (e, index) => {
        var answers = ativitie.answers;
        answers[index] = { ...answers[index], correct: e.target.checked };
        setAtivitie({
            ...ativitie,
            answers,
        });
    };

    const handleewAnswerClick = (e) => {
        setAtivitie({
            ...ativitie,
            answers: [
                ...ativitie.answers,
                {
                    answer: '',
                    correct: false,
                },
            ],
        });
    };

    const handleSubmit = () => {
        console.log(ativitie);
        axios
            .post(`https://esoft-bckd.herokuapp.com/subjects/${id}/ativitie`, ativitie)
            .then((response) => {
                NotificationManager.success('Atividade criada com sucesso!');
                navigate(`/admin/subjects/${id}`);
            })
            .catch((error) => {
                NotificationManager.error('Erro ao criar atividade');
            });
    };

    return (
        <>
            <div className="esoft-content">
                <div className="esoft-content-title">
                    <h2>Nova Atividade</h2>
                </div>

                <div className="esoft-content-ativitie">
                    <div className="esoft-content-ativitie-question">
                        <div className="esoft-content-ativitie-question-title">
                            <h3>Pergunta</h3>
                        </div>
                        <textarea
                            name="question"
                            id="question"
                            value={ativitie?.question}
                            onChange={handleQuestionChange}
                        ></textarea>
                    </div>
                    <button className="esoft-content-subjects-new-ativitie" onClick={handleewAnswerClick}>
                        Nova Resposta
                    </button>

                    <div className="esoft-content-ativitie-answers">
                        {ativitie?.answers?.map((answer, index) => {
                            return (
                                <div key={index}>
                                    <div className="esoft-content-ativitie-answers-answer">
                                        <textarea
                                            onChange={(e) => {
                                                handleAnswerChange(e, index);
                                            }}
                                            type="text"
                                            name="answer"
                                            id="answer"
                                            value={answer?.answer}
                                        />
                                        <div className="esoft-content-ativitie-answers-answer-correct">
                                            <input
                                                className="checkbox-correct"
                                                type="checkbox"
                                                name="correct"
                                                id="correct"
                                                onChange={(e) => {
                                                    handleCorrectAnswerChange(e, index);
                                                }}
                                                checked={answer?.correct}
                                            />
                                            <label htmlFor="correct" value={answer.correct}>
                                                Correta
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {ativitie?.answers?.length > 1 && ativitie?.question?.length > 10 && (
                        <div className="esoft-content-ativitie-create">
                            <button className="esoft-content-ativitie-create-btn" onClick={handleSubmit}>
                                Criar Atividade
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default NewAtivitie;
