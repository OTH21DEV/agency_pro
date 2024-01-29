import React, { useState } from "react";
import ServiceCard from "../service-card";
import { cn as bem } from "@bem-react/classname";
import "./style.css";
import backgroundImage from '../../assets/bg-rotated.png';
import backgroundImg from '../../assets/test_bg_upside.png';
import backgroundIm from '../../assets/test_bg_upside_right.png';
import backgroundI from '../../assets/test_bg_upside_down.png';
import backgroundDev from '../../assets/bg_dev.jpg';
import backgroundDes from '../../assets/bg_des.jpg';
const ServiceCards = () => {
  const cn = bem("Plan");
  const [isOpen, setIsOpen] = useState(null);

  function handleClick(index) {
    setIsOpen((prevIsOpen) => (prevIsOpen === index ? null : index));
  }

  const services = [
    {
      title: "Design Services",
      // number:"01",
      description: " UI/UX Design , Responsive Web Design , Graphic Design",
      bulletPoints: ["UI/UX Design: crafting user interfaces and experiences.", "Responsive Web Design: ensuring websites look good on all devices.", "Graphic Design: Creating visual content.",
    
    ],
    // backgroundImage: backgroundImage,
    backgroundImage: backgroundDes,
    },
    // ... add other service categories here
    {
      title: "Development Services",
      // number:"02",
      description: "Frontend Development , Backend Development , Full Stack Development, Web Application Development",
      bulletPoints: [
        "Frontend Development: building the client-facing part of websites using technologies like HTML, CSS, and JavaScript.",

        "Backend Development: developing server-side logic and integration, databases, and application programming interfaces (APIs).",

        "Full Stack Development: offering end-to-end web solutions that encompass both front-end and back-end development.",

        "  Web Application Development: building dynamic and interactive web applications tailored to specific business needs.",
      ],
      // backgroundImage: backgroundImg,
      backgroundImage: backgroundDev,
    },
    {
      title: "Support & Maintenance Services",
      // number:"03",
      description: "Website Maintenance,Hosting Solutions, Technical Support",
      bulletPoints: [
        " Website Maintenance: regular updates and maintenance to keep websites running smoothly and securely.",
        "Hosting Solutions: providing reliable web hosting services with different plans to meet varied needs.",
        "Technical Support: offering ongoing technical support to handle any issues or queries related to website performance.",

      ],
      backgroundImage: backgroundIm,
    },
    {
      title: "Others Services",
      // number:"04",
      description: "Search Engine Optimization (SEO), Web Accessibility ",
      bulletPoints: [
        " Search Engine Optimization (SEO): optimizing websites to rank higher in search engine results and attract more organic traffic.",
        "Web Accessibility: ensuring that websites are accessible to individuals with disabilities, compliant with WCAG guidelines.",
      ],
      backgroundImage: backgroundI,
    },
  ];

  return (
    <section className={cn("container")}>
      <div className={cn("")}>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            number={service.number}
            description={service.description}
            bulletPoints={service.bulletPoints}
            index={index}
            isOpen={index === isOpen}
            onClick={() => handleClick(index)}
            backgroundImage={service.backgroundImage}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;