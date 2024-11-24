import LogoSIU from "./LogoSIU";
import LogoSSPS from "./LogoSSPS";
import NavBar from "./Navbar";
import ProfileIcon from "./ProfileIcon";
import "./../styles/student-header.css";
import Button from "./Button";
import { useAuth } from "../contexts/AuthContext";

export default function StudentHeader(props) {
    const { logout } = useAuth();

    const items = [
        { text: "Trang chủ", link: "/student"}, 
        { text: "In tài liệu", link: "/student/print"},
        { text: "Mua trang in", link: "/student/buy"},
        { text: "Lịch sử in", link: "/student/log"}
    ];

    return (
        <header className="student-header">
            <div className="logo">
                <LogoSIU />
                <LogoSSPS />
            </div>
            <NavBar 
                items={items} 
                static={false} 
            >
                <ProfileIcon />
                <Button link="/" action={logout}>
                    Đăng xuất
                </Button>
            </NavBar>
        </header>
    );
}