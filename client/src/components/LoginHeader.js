import LogoSIU from "./LogoSIU";
import "./../styles/login.css"

export default function LoginHeader() {
    return (
        <header className="ssoLoginHeader">
            <LogoSIU />
            <h1>Central Authentication Service</h1>
        </header>
    );
}