import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Splash from "./pages/splashPage/Splash";
import Login from "./pages/loginPage/Login";
import Home from "./pages/homePage/Home";
import NotFound from "./pages/NotFound/NotFound";
import BloodPost from "./pages/bloodPostPage/BloodPost";
import BloodReservation from "./pages/reservationPage/BloodReservation";
import MyPageMain from "./pages/myPage/MyPageMain";
import MyPageEdit from "./pages/myPage/MyPageEdit";
import PetInfo from "./pages/myPage/PetInfo";
import PetEdit from "./pages/myPage/PetEdit";
import PetRegister from "./pages/myPage/PetRegister";
import AccountManage from "./pages/myPage/AccountManage";
import ReservationList from "./pages/myPage/ReservationList";
import PostWrite from "./pages/postWritePage/PostWrite";
import SignUp from "./pages/signupPage/SignUp";
import SignUpPet from "./pages/signupPage/SignUpPet";
import SignUpSplash from "./pages/signupSplashPage/SignUpSplash";
import BloodPostDetail from "./pages/bloodPostDetailPage/BloodPostDetail";
import CalendarPage from "./pages/calendarPage/CalendarPage";
import Auth from "./pages/loginPage/Auth";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Splash /> }, // 스플래시 화면
      { path: "/login", element: <Login /> }, // 로그인 화면
      { path: "/home", element: <Home /> }, // 홈 화면
      { path: "/bloodPost", element: <BloodPost /> }, // 긴급헐혈 화면
      { path: "/bloodPost/:id", element: <BloodPostDetail /> }, //긴급헌혈 상세게시글 들어가기
      { path: "/reservation", element: <BloodReservation /> }, // 헌열예약 화면
      { path: "/mypagemain", element: <MyPageMain /> }, // 마이페이지 화면
      { path: "/mypageedit", element: <MyPageEdit /> }, // 마이페이지 프로필 수정 화면
      { path: "/petinfo", element: <PetInfo /> }, // 반려견 프로필 수정 화면
      { path: "/petedit", element: <PetEdit /> }, // 반려견 프로필 수정 화면
      { path: "/petregister", element: <PetRegister /> }, // 반려견 프로필 수정 화면
      { path: "/accountmanage", element: <AccountManage /> }, // 마이페이지 계정 관리 화면
      { path: "/reservationlist", element: <ReservationList /> }, // 마이페이지 계정 관리 화면
      { path: "/postwrite", element: <PostWrite /> }, // 긴급헌혈에서 글쓰기 화면
      { path: "/signup", element: <SignUp /> }, //회원가입 화면
      { path: "/signuppet", element: <SignUpPet /> },
      { path: "/signupsplash", element: <SignUpSplash /> },
      { path: "/calendarPage/:id", element: <CalendarPage /> },
      { path:"/auth/kakao/callback", element:<Auth />} ,
    ],
    errorElement: <NotFound />, // 일치하는 경로가 없을 때 표시할 컴포넌트
  },
]);

export default router;
