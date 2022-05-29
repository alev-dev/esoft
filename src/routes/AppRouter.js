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
import NotAuthorized from '../common/NotAuthorized';
import AdminGuard from '../guards/AdminGuard';
import Subjects from '../Pages/Admin/SubjectsPage';
import ChatAdmin from '../Pages/Admin/ChatPage';
import StudentsPage from '../Pages/Admin/StudentsPage';
import SubjectContentAdmin from '../Pages/Admin/SubjectsPage/SubjectPage';
import NewAtivitie from '../Pages/Admin/SubjectsPage/NewPage/NewAtivitie';
import NewVideoPage from '../Pages/Admin/SubjectsPage/NewPage/NewVideo';
import DirectChat from '../Pages/Admin/ChatPage/DirectChat';

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
                    path="/admin/subjects"
                    element={
                        <AdminGuard>
                            <MainLayout>
                                <Subjects />
                            </MainLayout>
                        </AdminGuard>
                    }
                />
                <Route
                    path="/admin/subjects/:id"
                    element={
                        <AdminGuard>
                            <MainLayout>
                                <SubjectContentAdmin />
                            </MainLayout>
                        </AdminGuard>
                    }
                />
                <Route
                    path="/admin/subjects/:id/newAtivitie"
                    element={
                        <AdminGuard>
                            <MainLayout>
                                <NewAtivitie />
                            </MainLayout>
                        </AdminGuard>
                    }
                />
                <Route
                    path="/admin/subjects/:id/newVideo"
                    element={
                        <AdminGuard>
                            <MainLayout>
                                <NewVideoPage />
                            </MainLayout>
                        </AdminGuard>
                    }
                />
                <Route
                    path="/admin/chats"
                    element={
                        <AdminGuard>
                            <MainLayout>
                                <ChatAdmin />
                            </MainLayout>
                        </AdminGuard>
                    }
                />
                <Route
                    path="/admin/chats/:id"
                    element={
                        <AdminGuard>
                            <MainLayout>
                                <DirectChat />
                            </MainLayout>
                        </AdminGuard>
                    }
                />
                <Route
                    path="/admin/students"
                    element={
                        <AdminGuard>
                            <MainLayout>
                                <StudentsPage />
                            </MainLayout>
                        </AdminGuard>
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
                <Route path="/notAuthorized" element={<NotAuthorized />} />
            </Routes>
            <ChatWidget />
        </>
    );
}

export default AppRouter;
