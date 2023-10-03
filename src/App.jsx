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
import Signup from "./page/Signup";
import MainLayout from "./components/layouts/MainLayout";

const App = () => {
  return (
    <Routes>
      {/* Dashboard */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />

      <Route path="/login" element={<MainLayout><Signin /></MainLayout>} />
      <Route path="/signup" element={<MainLayout><Signup /></MainLayout>} />

      {/* Study */}
      <Route
        path="/allstudy"
        element={
          <MainLayout>
            <AllStudy />
          </MainLayout>
        }
      />
      <Route
        path="/allstudy/study/:id"
        element={
          <MainLayout>
            <Study />
          </MainLayout>
        }
      />

      {/* Category */}
      <Route
        path="/category"
        element={
          <MainLayout>
            <Category />
          </MainLayout>
        }
      />
      <Route
        path="/category/quiz"
        element={
          <MainLayout>
            <Quiz />
          </MainLayout>
        }
      />

      {/* Quiz */}
      <Route
        path="/allquiz"
        element={
          <MainLayout>
            <AllQuiz />
          </MainLayout>
        }
      />
      <Route
        path="/allquiz/quiz"
        element={
          <MainLayout>
            <Quiz />
          </MainLayout>
        }
      />

      {/* Questions */}
      <Route
        path="/questions"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Questions />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* Results */}
      <Route
        path="/results"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Results />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/results/viewresults/:id"
        element={
          <ProtectedRoute>
            <MainLayout>
              <ViewResult />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* Users */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <MainLayout>
              <User />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/edit"
        element={
          <ProtectedRoute>
            <MainLayout>
              <User />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* Quiz */}
      <Route
        path="/terms"
        element={
          <MainLayout>
            <TermsCondition />
          </MainLayout>
        }
      />
      <Route
        path="/aboutus"
        element={
          <MainLayout>
            <AboutUs />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default App;
