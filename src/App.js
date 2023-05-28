import React from "react";
import { Route, Routes } from "react-router-dom";
import User from "./page/User";
import Dashboard from "./page/Dashboard";
import Category from "./page/Category";

import Signin from "./page/Signin";
import ProtectedRoute from "./components/protected/ProtectedRoute";
import AllQuiz from "./page/AllQuiz";
import Quiz from "./page/Quiz";
import Results from "./page/Results";
import Study from "./page/Study";
import Questions from "./page/Questions";
import TermsCondition from "./page/TermsCondition";
import AboutUs from "./page/AboutUs";
import ViewResult from "./page/ViewResult";
import AllStudy from "./page/AllStudy";





const App = () => {
  return (
    
      <Routes>
        
        {/* Dashboard */}
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute> } />

        <Route path="/login" element={<Signin /> } />

        {/* Study */}
        <Route path="/allstudy" element={<ProtectedRoute><AllStudy /></ProtectedRoute>} />
        <Route path="/allstudy/study/:id" element={<ProtectedRoute><Study /></ProtectedRoute>} />

        {/* Category */}
        <Route path="/category" element={<ProtectedRoute><Category /></ProtectedRoute>} />
        <Route path="/category/quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />

        {/* Quiz */}
        <Route path="/allquiz" element={<ProtectedRoute><AllQuiz /></ProtectedRoute>} />
        <Route path="/allquiz/quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />

       
        {/* Questions */}
        <Route path="/questions" element={<ProtectedRoute><Questions /></ProtectedRoute>} />

         {/* Results */}
         <Route path="/results" element={<ProtectedRoute><Results /></ProtectedRoute>} />
         <Route path="/results/viewresults/:id" element={<ProtectedRoute><ViewResult /></ProtectedRoute>} />
        

        {/* Users */}
        <Route path="/profile" element={<ProtectedRoute><User/></ProtectedRoute>} />
        <Route path="/users/edit" element={<ProtectedRoute><User/></ProtectedRoute>} />
 
        {/* Quiz */}
        <Route path="/terms" element={<ProtectedRoute><TermsCondition /></ProtectedRoute>} />
        <Route path="/aboutus" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />

        
      </Routes>
   
  );
};

export default App;
