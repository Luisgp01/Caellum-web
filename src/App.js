import {
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Profile from "./views/Profile/Profile";
import NewPost from "./views/Post/NewPost/NewPost";
import EditPost from "./views/Post/EditPost/EditPost";
import ProtectedRoute from "./guards/ProtectedRoute";
import { useAuthContext } from "./contexts/AuthContext";
import PostDetail from "./views/Post/PostDetail/PostDetail";
import CheckoutForm from "./views/Post/CheckoutForm/CheckoutForm";
import Home from "./views/Home/Home";
import UserDetail from "./views/Users/UserDetail/UserDetail";
import Subscriptions from "./views/Subscriptions/Subscriptions";
import Rates from "./views/Rates/Rates";
import Support from "./views/Support/Support";
import '../src/App.scss'

import Footer from "./components/Footer/Footer";
import ControlledCarousel from "./components/Carousel/Carousel";

function App() {
  const { isAuthenticationFetched } = useAuthContext()
  return (
    <div className="App">
     <ControlledCarousel />
      <Navbar />
      <Footer />

      <div className="container">
        {!isAuthenticationFetched ? (
          <p>Loading...</p>
        ) : (
          <Routes>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="rates" element={<Rates />} />
            <Route path="support" element={<Support />} />

            <Route path="/" element={<ProtectedRoute/>} >
              <Route path="profile" element={<Profile />} />
              <Route path="subscriptions" element={<Subscriptions />} />
              <Route path="users/:id" element={<UserDetail />} />
              <Route path="post/new" element={<NewPost />} />
              <Route path="post/:id/edit" element={<EditPost />} />
              <Route path="post/:id" element={<PostDetail />} />
              <Route path="subscribe/:userId" element={<CheckoutForm />} />
            </Route>
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;