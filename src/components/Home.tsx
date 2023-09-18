import React, { useEffect } from "react";
import MenuItem from "./MenuItem";
import ContactForm from "./ContactForm";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Menu from "./Menu";

const Home = () => {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>("nav a");

    if (links) {
      links.forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href")?.substring(1);
          const targetElement = document.getElementById(targetId || "");

          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: "smooth",
            });
          }
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto text-center">
        <Banner />
        <AboutUs />
        <Menu />
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
