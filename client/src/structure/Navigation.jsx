import Home from "../pages/Home";
import Profile from "../pages/Profile";

export const nav = [
    {path : "/" , name : "Home", element: <Home /> , isProtect: false},
    {path : "/profile/" , name : "Profile", element: <Profile /> , isProtect: true},

]