import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Project from "../Pages/Project";
import Task from "../Pages/Task";
import Team from "../Pages/Team";
import Report from "../Pages/Report";
import Message from "../Pages/Message";
import Notification from "../Pages/Notification";
import Files from "../Pages/Files";
import Setting from "../Pages/Setting";
import BasicPage from "../Component/BasicPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/project" element={<Project />} />
      <Route path="/task" element={<Task />} />
      <Route path="/team" element={<Team />} />
      <Route path="/calendar" element={<BasicPage title="Calendar" description="Manage your schedule and deadlines." />} />
      <Route path="/report" element={<Report />} />
      <Route path="/message" element={<Message />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/files" element={<Files />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
}

export default AppRoutes;