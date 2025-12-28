import { Routes, Route } from "react-router-dom";
import {
  DiscoverProperty,
  FeaturedPropperty,
  Hero,
  SaveMoney,
  WhyChoose,
  History,
  Customers,
  Blog,
  SignIn,
  SignUp,
  Contact,
  PropertyList,
  BlogList,
  PropertyDetails,
} from "./pages";

import { Navbar, Footer } from "./shared";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <div className="w-full">
      <Navbar />

      {/* 👇 فقط این بخش تغییر می‌کند */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <DiscoverProperty />
              <FeaturedPropperty/>
              <SaveMoney />
              <WhyChoose />
              <History />
              <Customers />
              <Blog />
            </>
          }
        />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/propertyList" element={<PropertyList/>}></Route>
        <Route path="/blogList" element={<BlogList/>}></Route>
        <Route path="/propertyDetails/:id" element={<PropertyDetails/>}></Route>
        <Route path="/blogDetails/:id" element={<BlogDetails/>}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
