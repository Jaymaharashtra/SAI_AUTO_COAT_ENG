import Header from "./component/Header";
import Founder from "./component/FounderDetails/Founder";
import "./App.css";
import NatureOfBusiness from "./component/NatureOfBuisness/NaturofBusiness";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import AboutUs from "./component/AboutUs";
import Contact from "./component/Contact";
import ServicesTab from "./component/ServicesTab";
import UserData from "./component/UserData";
import Payment from "./component/Payment";
import EnquiryForm from "./component/EnquiryForm";

function App() {
  const user = UserData();
  console.log();
  return (
    <>
      <Header /> {/* Navbar always visible */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <div className="container mx-auto py-10 px-6">
  <h2 className="text-3xl font-bold text-center text-red-800 mb-8">
    Our Founders
  </h2>
  </div>
              <div className="user grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 justify-items-center ">
                
                {user.map((ele, index) => (
                  <Founder
                    key={index}
                    name={ele.name}
                    desi={ele.designation}
                    contact={ele.contact}
                    email={ele.Email}
                  />
                ))}
              </div>
              <NatureOfBusiness />
              <EnquiryForm />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesTab />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
