import Header from "../components/Header";
import Button from "../components/Button";
import Title from "../components/Title";
import Poster from "../components/Poster";
import OfficePrinter from "../assets/img/Print-On-Demand-Service-in-Bangalore.png";
import PrinterFairyTales from "../assets/img/images.jpg";
import "../styles/homepage.css";
import IconCard from "../components/IconCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faListCheck, faPrint } from "@fortawesome/free-solid-svg-icons";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
export default function HomePage() {
    const navigate = useNavigate();
    const { auth, setAuth } = useAuth();
    
    const currentUser = JSON.parse(sessionStorage.getItem('user'));
    const loggedIn = useRef(false);
    
    useEffect(() => {
        console.log("Check session effect at 127.0.0.1!");
        if (currentUser) {
            console.log("Update auth!!!");
            setAuth({user: currentUser});
            loggedIn.current = true;
        }
    }, []);

    useEffect(() => {
        console.log("User logged in?");
        if (Object.hasOwn(auth, 'user') && auth.user !== null) {
            if (auth.user.isAdmin) {
                console.log(typeof auth.user);
                console.log("Assminnnn");
                navigate(
                    '/admin',
                    { replace: true } 
                )
            } else {
                console.log(typeof auth.user);
                console.log("Studentttt");
                navigate(
                    '/student',
                    { replace: true }
                )
            }
            return;
        }
    });
    
    return (
        <div className="homepage">
            <Header />
            <main>
                <article className="homepage-main" id="home">
                    <div className="homepage-main-left">
                        <Title smallText={"WELCOME TO PRINT SYSTEM OF SIU"}/>
                        <Button 
                            link="#"
                        >
                            Khám phá ngay
                        </Button>
                    </div>
                    <Poster src={OfficePrinter} alt="Office Printer Poster" />
                </article>   
                <article className="about-us" id="about-us">
                    <section className="intro">
                        <h2>Giới thiệu</h2>
                        <p>
                            SYSTEM IS DESIGNED BY SIU
                        </p>
                    </section>
                    <section className="foundation">
                        <h2>Thành lập</h2>
                        <p>
                            SYSTEM IS DESIGNED BY SIU 
                        </p>
                    </section>
                </article>        
                <article className="services" id="services">
                    <h2>Dịch vụ</h2>
                    <div className="cards">
                        <IconCard 
                            icon={<FontAwesomeIcon icon={faFaceSmile} color="#0D99FF"/>}
                            title="WELCOME"
                            description="please aske me any questions"
                        />
                        <IconCard 
                            icon={<FontAwesomeIcon icon={faPrint} color="#0D99FF"/>}
                            title="Print documents"
                            description="provide all print services"
                        />
                        <IconCard 
                            icon={<FontAwesomeIcon icon={faListCheck} color="#0D99FF"/>}
                            title="options"
                            description="provide options"
                        />
                    </div>
                </article> 
                <article className="contact" id="contact">
                    <Poster src={PrinterFairyTales} alt="Printer Fairy Tales Poster" />
                    <ContactInfo />
                </article>
            </main>
            <Footer />
            <Copyright />
        </div>
    );
}