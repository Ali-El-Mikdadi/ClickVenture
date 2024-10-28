import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Trips from "./Pages/Trips";
import PickTrip from "./Pages/PickTrip";
import UserSystem from "./Pages/UserSystem";
import MyTrip from "./Pages/MyTrip";
import GenerateTrip from "./Pages/GenerateTrip";
import ReviewPlace from "./Pages/ReviewPlace";
import Places from "./Pages/places";
import RewardSystem from "./Pages/RewardSystem";
import Reviews from "./Pages/Reviews";
import CreateTrip from "./Pages/CreateTrip";
import GenerateResult from "./Pages/GenerateResult";
import PointsStore from "./Pages/PointsStore";
import axios from "axios";
import UserContextProvider from "./UserContext";

// The following contexts are used for Generate Trip Prompt
import RegionContext from "./RegionContext";
import BudgetContext from "./BudgetContext";
import TimePeriodContext from "./TimePeriodContext";
import GroupSizeContext from "./GroupSizeContext";
import FavouriteActivitiesContext from "./FavouriteActivitiesContext";
import ReviewPhoto from "./Pages/reviewPhoto";
import FABComponent from "./FBComponent";
axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  const [selectedRegion, setSelectedRegion] = React.useState<string[]>([]);
  const [budget, setBudget] = React.useState([20, 50]);
  const [days, setDays] = React.useState(1);
  const [groupSize, setGroupSize] = React.useState("");
  const [favouriteActivities, setFavouriteActivities] = React.useState<
    string[]
  >([]);

  return (
    <UserContextProvider>
      <Router>
        <RegionContext.Provider value={{ selectedRegion, setSelectedRegion }}>
          <BudgetContext.Provider value={{ budget, setBudget }}>
            <TimePeriodContext.Provider value={{ days, setDays }}>
              <GroupSizeContext.Provider value={{ groupSize, setGroupSize }}>
                <FavouriteActivitiesContext.Provider
                  value={{ favouriteActivities, setFavouriteActivities }}
                >
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/currentTrip/:id" element={<Trips />} />
                    <Route path="/picktrip" element={<PickTrip />} />
                    <Route path="/usersystem/:id" element={<UserSystem />} />
                    <Route path="/mytrip" element={<MyTrip />} />
                    <Route path="/generatetrip" element={<GenerateTrip />} />
                    <Route path="/review/:id" element={<ReviewPlace />} />
                    <Route path="/places/:id" element={<Places />} />
                    <Route path="/rewardsystem" element={<RewardSystem />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/reviewplace" element={<ReviewPlace />} />
                    <Route path="/createtrip/:id" element={<CreateTrip />} />
                    <Route path="/reviewPhoto/:id" element={<ReviewPhoto />} />
                    <Route
                      path="/generateresult"
                      element={<GenerateResult />}
                    />
                    <Route path="/pointsstore" element={<PointsStore />} />
                  </Routes>
                </FavouriteActivitiesContext.Provider>
              </GroupSizeContext.Provider>
            </TimePeriodContext.Provider>
          </BudgetContext.Provider>
        </RegionContext.Provider>
      </Router>
    </UserContextProvider>
  );
}

export default App;
