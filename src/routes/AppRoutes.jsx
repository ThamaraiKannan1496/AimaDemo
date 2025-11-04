import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
