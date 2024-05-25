
import { Route, Routes } from "react-router-dom";

// IMPORT COMPONENTS
import Header from "./headerSection/Header";
import HeaderNav from "./HeaderNav";

// IMPORT PAGES
import Register from "../pages/Register";
import Profile from "../pages/profilePage";
import HotelIndex from "../pages/HotelIndex";
import HotelShow from "../pages/HotelShow";
import UpdateReview from "../pages/UpdateReview"
import ProfileTest from "../pages/ProfileTest"
import NewReviewForm from "../pages/NewReview";

const Main = (props) => {

    return (
        <main>

          <HeaderNav /> 
          
          <Routes>
            <Route path="/newReview" element={<NewReviewForm userIdLoggedIn={props.userIdLoggedIn} URL={props.URL} />} />
            <Route path="/" element={<Header />} />
            <Route path="/register" element={<Register handleLogin={props.handleLogin} handleCreateUser={props.handleCreateUser} URL={props.URL}/>} />
            <Route path="/profile" element={<Profile currentUser={props.currentUser} URL={props.URL}/>} />
    
            <Route exact path="/hotels" element={<HotelIndex URL={props.URL} currentUser={props.currentUser} />}/>
            
            <Route 
                exact path="/hotels/:id" 
                element={
                    <HotelShow 
                        URL={props.URL} 
                        userIdLoggedIn = {props.userIdLoggedIn}
                    />
                }/>
            
            </Routes>
            {props.userIdLoggedIn ?
            <div>
                <Routes>
                    <Route 
                        exact path="/reviews/:id" 
                        element={
                            <UpdateReview 
                                URL={props.URL} 
                                userIdLoggedIn = {props.userIdLoggedIn}
                            />
                        }/>
                    <Route 
                        exact path="/test/profile" 
                        element={
                            <ProfileTest 
                                URL={props.URL} 
                                userIdLoggedIn = {props.userIdLoggedIn}
                                currentUser={props.currentUser}
                            />
                        }/>
                </Routes>
            </div>
            :
           null
            }
          
    
          {/* <Footer /> */}
    
    
        </main>
      );

}

export default Main
