import { Topbar } from "../components/Topbar";
import { Sidebar } from "../components/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() =>
  import("./Dashboard").then((module) => ({ default: module.Dashboard }))
);
const Users = lazy(() =>
  import("./Users/Users").then((module) => ({ default: module.Users }))
);
const Priests = lazy(() =>
  import("./Priests/Priests").then((module) => ({ default: module.Priests }))
);
const Temples = lazy(() =>
  import("./Temples/Temples").then((module) => ({ default: module.Temples }))
);
const Certifications = lazy(() =>
  import("./Certification/Certifications").then((module) => ({
    default: module.Certifications,
  }))
);
const Qualifications = lazy(() =>
  import("./Qualification/Qualifications").then((module) => ({
    default: module.Qualifications,
  }))
);
const PoojaGroceries = lazy(() =>
  import("./PoojaGrocery/PoojaGroceries").then((module) => ({
    default: module.PoojaGroceries,
  }))
);
const NotificationTemplates = lazy(() =>
  import("./NotificationTemplates/NotificationTemplates").then((module) => ({
    default: module.NotificationTemplates,
  }))
);
const Comments = lazy(() =>
  import("./Comments/Comments").then((module) => ({ default: module.Comments }))
);

const Services = lazy(() =>
  import("./Services/Services").then((module) => ({ default: module.Services }))
);

const Bookings = lazy(() =>
  import("./Bookings/Bookings").then((module) => ({ default: module.Bookings }))
);
const ViewTemple = lazy(() =>
  import("./Temples/ViewTemple").then((module) => ({
    default: module.ViewTemple,
  }))
);

export const Layout = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="wrapper">
      <Topbar />
      <Sidebar />
      <main role="main" className="main-content">
        <div className="container-fluid">
          <Suspense>
            <Routes>
              {!token ? (
                <Route
                  path="*"
                  element={<Navigate to="/auth/login" replace />}
                />
              ) : (
                <>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/priests" element={<Priests />} />
                  <Route path="/temples" element={<Temples />} />
                  <Route path="/temples/:id/view" element={<ViewTemple />} />
                  <Route path="/certifications" element={<Certifications />} />
                  <Route path="/qualifications" element={<Qualifications />} />
                  <Route path="/comments" element={<Comments />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/orders" element={<Bookings />} />
                  <Route path="/pooja-grocery" element={<PoojaGroceries />} />
                  <Route
                    path="/notification-templates"
                    element={<NotificationTemplates />}
                  />
                  <Route
                    path="*"
                    element={<Navigate to="/dashboard" replace />}
                  />
                </>
              )}
            </Routes>
          </Suspense>
        </div>
      </main>
    </div>
  );
};
