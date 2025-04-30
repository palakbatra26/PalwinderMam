import { Route, Routes } from "react-router-dom";
import { SignIn } from "@clerk/clerk-react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FacultyList from "./components/FacultyList";
import FeeStructure from "./components/FeeStructure";
import MessMenu from "./components/MessMenu";
import Facilities from "./components/Facilities";
import Studentcomitte from "./components/Studentcomitte";
import QueryForm from "./components/QueryForm";
import Helplineno from "./components/Helplineno";
import Notifications from "./components/Notifications";
import RoomAllotment from "./components/RoomAllotment";
import AdminPanel from "./components/AdminPanel";
import ProtectedRoute from "./components/ProtectedRoute";
import PayFee from './components/PayFee';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faculty" element={<FacultyList />} />
          <Route path="/feestructure" element={<FeeStructure />} />
          <Route path="/messmenu" element={<MessMenu />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/Studentcomitte" element={<Studentcomitte />} />
          <Route 
            path="/room-allotment" 
            element={
              <ProtectedRoute>
                <RoomAllotment />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            } 
          />
          <Route path="/queryform" element={<QueryForm />} />
          <Route path="/helpline" element={<Helplineno />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/payfee" element={<PayFee />} />
          <Route 
            path="/sign-in/*" 
            element={
              <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>
                <SignIn routing="path" path="/sign-in" />
              </div>
            } 
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
