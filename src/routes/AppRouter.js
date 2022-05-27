import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../common/MainLayout';
import AboutPage from '../Pages/AboutPage';
import ContentPage from '../Pages/ContentPage';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import StudentContent from '../Pages/ContentPage/Student';
import ChatWidget from '../Components/Chat';
import ChatPage from '../Pages/ChatPage';
import StudentGuard from '../guards/StudentGuard';
import SubjectContent from '../Pages/ContentPage/Student/SubjectPage';
import VideoPage from '../Pages/Videopage';

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="" element={<Navigate to="/home" />} />
                <Route
                    path="/authentication/login"
                    element={
                        <MainLayout>
                            <LoginPage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/authentication/register"
                    element={
                        <MainLayout>
                            <RegisterPage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/home"
                    element={
                        <MainLayout>
                            <HomePage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <MainLayout>
                            <AboutPage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/content"
                    element={
                        <MainLayout>
                            <ContentPage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/student/content"
                    element={
                        <StudentGuard>
                            <MainLayout>
                                <StudentContent />
                            </MainLayout>
                        </StudentGuard>
                    }
                />
                <Route
                    path="/student/content/:id"
                    element={
                        <StudentGuard>
                            <MainLayout>
                                <SubjectContent />
                            </MainLayout>
                        </StudentGuard>
                    }
                />
                <Route
                    path="/student/content/:subjectId/video/:id"
                    element={
                        <StudentGuard>
                            <MainLayout>
                                <VideoPage />
                            </MainLayout>
                        </StudentGuard>
                    }
                />
                <Route
                    path="/student/chat-online"
                    element={
                        <MainLayout>
                            <ChatPage />
                        </MainLayout>
                    }
                />
            </Routes>
            <ChatWidget />
        </>
    );
}

export default AppRouter;
