import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import { CommonProgress } from "./components/common/CommonProgress";
import ProtectedRoute from "./components/protected/ProtectedRoute";
import ExamSchedule from "./page/ExamSchedule";

const User = lazy(() => import("./page/User"));
const Dashboard = lazy(() => import("./page/Dashboard"));
const Category = lazy(() => import("./page/Category"));

const Signin = lazy(() => import("./page/Signin"));

const AllQuiz = lazy(() => import("./page/AllQuiz"));
const Quiz = lazy(() => import("./page/Quiz"));
const Results = lazy(() => import("./page/Results"));
const Study = lazy(() => import("./page/Study"));
const Questions = lazy(() => import("./page/Questions"));
const TermsCondition = lazy(() => import("./page/TermsCondition"));
const AboutUs = lazy(() => import("./page/AboutUs"));
const ViewResult = lazy(() => import("./page/ViewResult"));
const AllStudy = lazy(() => import("./page/AllStudy"));
const Signup = lazy(() => import("./page/Signup"));
const ForgotPassword = lazy(() => import("./page/ForgotPassword"));
const ResetPassword = lazy(() => import("./page/ResetPassword"));

const App = () => {
  return (
    <Routes>
      {/* Dashboard */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <Dashboard />
            </Suspense>
          </MainLayout>
        }
      />
      <Route
        path="/examschedule"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <ExamSchedule />
            </Suspense>
          </MainLayout>
        }
      />
      <Route
        path="/login"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <Signin />
            </Suspense>
          </MainLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <Signup />
            </Suspense>
          </MainLayout>
        }
      />
      {/* Study */}
      <Route
        path="/allstudy"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <AllStudy />
            </Suspense>
          </MainLayout>
        }
      />
      <Route
        path="/allstudy/study/:id"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <Study />
            </Suspense>
          </MainLayout>
        }
      />
      {/* Category */}
      <Route
        path="/category"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <Category />
            </Suspense>
          </MainLayout>
        }
      />
      <Route
        path="/category/quiz"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <Quiz />
            </Suspense>
          </MainLayout>
        }
      />
      {/* Quiz */}
      <Route
        path="/allquiz"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <AllQuiz />
            </Suspense>
          </MainLayout>
        }
      />
      <Route
        path="/allquiz/quiz"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <Quiz />
            </Suspense>
          </MainLayout>
        }
      />
      {/* Questions */}
      <Route
        path="/questions"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Suspense fallback={<CommonProgress />}>
                <Questions />
              </Suspense>
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
              <Suspense fallback={<CommonProgress />}>
                <Results />
              </Suspense>
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/results/viewresults/:id"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Suspense fallback={<CommonProgress />}>
                <ViewResult />
              </Suspense>
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
              <Suspense fallback={<CommonProgress />}>
                <User />
              </Suspense>
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/edit"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Suspense fallback={<CommonProgress />}>
                <User />
              </Suspense>
            </MainLayout>
          </ProtectedRoute>
        }
      />
      {/* Quiz */}
      <Route
        path="/terms"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <TermsCondition />
            </Suspense>
          </MainLayout>
        }
      />
      <Route
        path="/aboutus"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <AboutUs />
            </Suspense>
          </MainLayout>
        }
      />
      // ForgotPassword & Reset Password
      <Route
        path="/forgotpassword"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <ForgotPassword />
            </Suspense>
          </MainLayout>
        }
      />
      <Route
        path="/reset-password/:token"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <ResetPassword />
            </Suspense>
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default App;
