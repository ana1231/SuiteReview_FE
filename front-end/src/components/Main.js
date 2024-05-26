import { Route, Routes } from "react-router-dom";

// IMPORT COMPONENTS
import Header from "./headerSection/Header";
import HeaderNav from "./HeaderNav";

// IMPORT PAGES
import Register from "../pages/Register";
import Profile from "../pages/profilePage";
import HotelIndex from "../pages/HotelIndex";
import HotelShow from "../pages/HotelShow";
import UpdateReview from "../pages/UpdateReview";
import ProfileTest from "../pages/ProfileTest";
import NewReviewForm from "../pages/NewReview";

const Main = (props) => {
  return (
    <main>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Header />} />

        <Route
          path="/register"
          element={
            <Register
              URL={props.URL}
              userIdLoggedIn={props.userIdLoggedIn}
              setUserId={props.setUserId}
              setCurrentUser={props.setCurrentUser}
            />
          }
        />

        <Route
          exact
          path="/hotels"
          element={
            <HotelIndex URL={props.URL} currentUser={props.currentUser} userIdLoggedIn={props.userIdLoggedIn}/>
          }
        />
        <Route
          exact
          path="/hotels/:id"
          element={
            <HotelShow URL={props.URL} userIdLoggedIn={props.userIdLoggedIn} currentUser={props.currentUser} />
          }
        />
      </Routes>

      {props.userIdLoggedIn ? (
        <div>
          <Routes>
            <Route
              exact
              path="/reviews/:id"
              element={
                <UpdateReview
                  URL={props.URL}
                  userIdLoggedIn={props.userIdLoggedIn}
                />
              }
            />
            <Route
              exact
              path="/profile"
              element={
                <ProfileTest
                  URL={props.URL}
                  userIdLoggedIn={props.userIdLoggedIn}
                  currentUser={props.currentUser}
                />
              }
            />
            <Route
              path="/newReview"
              element={
                <NewReviewForm
                  userIdLoggedIn={props.userIdLoggedIn}
                  URL={props.URL}
                />
              }
            />
          </Routes>
        </div>
      ) : null}

      {/* <Footer /> */}
    </main>
  );
};

export default Main;
