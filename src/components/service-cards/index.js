import React, { useState } from "react";
import ServiceCard from "../service-card";
import { cn as bem } from "@bem-react/classname";
import "./style.css";
import backgroundImage from "../../assets/bg-rotated.png";
import backgroundImg from "../../assets/test_bg_upside.png";
import backgroundIm from "../../assets/test_bg_upside_right.png";
import backgroundI from "../../assets/test_bg_upside_down.png";
import backgroundDev from "../../assets/bg_dev.jpg";
import backgroundDes from "../../assets/bg_des.jpg";

// const ServiceCards = () => {
//   const cn = bem("Plan");
//   const [isOpen, setIsOpen] = useState(null);

//   function handleClick(index) {
//     setIsOpen((prevIsOpen) => (prevIsOpen === index ? null : index));
//   }

//   const services = [
//     {
//       title: "Design Services",
//       // number:"01",
//       description: " UI/UX Design , Responsive Web Design , Graphic Design",
//       bulletPoints: ["UI/UX Design: crafting user interfaces and experiences.", "Responsive Web Design: ensuring websites look good on all devices.", "Graphic Design: Creating visual content.",

//     ],
//     backgroundImage: backgroundI,
//     // backgroundImage: backgroundImage,
//     // backgroundImage: backgroundDes,
//     },
//     // ... add other service categories here
//     {
//       title: "Development Services",
//       // number:"02",
//       description: "Frontend Development , Backend Development , Full Stack Development, Web Application Development",
//       bulletPoints: [
//         "Frontend Development: building the client-facing part of websites using technologies like HTML, CSS, and JavaScript.",

//         "Backend Development: developing server-side logic and integration, databases, and application programming interfaces (APIs).",

//         "Full Stack Development: offering end-to-end web solutions that encompass both front-end and back-end development.",

//         "  Web Application Development: building dynamic and interactive web applications tailored to specific business needs.",
//       ],
//       backgroundImage: backgroundImage,
//       // backgroundImage: backgroundDev,
//     },
//     {
//       title: "Support & Maintenance Services",
//       // number:"03",
//       description: "Website Maintenance,Hosting Solutions, Technical Support",
//       bulletPoints: [
//         " Website Maintenance: regular updates and maintenance to keep websites running smoothly and securely.",
//         "Hosting Solutions: providing reliable web hosting services with different plans to meet varied needs.",
//         "Technical Support: offering ongoing technical support to handle any issues or queries related to website performance.",

//       ],
//       backgroundImage: backgroundIm,
//     },
//     {
//       title: "Others Services",
//       // number:"04",
//       description: "Search Engine Optimization (SEO), Web Accessibility ",
//       bulletPoints: [
//         " Search Engine Optimization (SEO): optimizing websites to rank higher in search engine results and attract more organic traffic.",
//         "Web Accessibility: ensuring that websites are accessible to individuals with disabilities, compliant with WCAG guidelines.",
//       ],
//       backgroundImage: backgroundImg ,
//     },
//   ];

//   return (
//     <section className={cn("container")}>
//       <div className={cn("")}>
//         {services.map((service, index) => (
//           <ServiceCard
//             key={service.title}
//             title={service.title}
//             number={service.number}
//             description={service.description}
//             bulletPoints={service.bulletPoints}
//             index={index}
//             isOpen={index === isOpen}
//             onClick={() => handleClick(index)}
//             backgroundImage={service.backgroundImage}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServiceCards;

function ServiceCards() {
  let servicesTitle = ["S", "E", "R", "V", "I", "C", "E", "S"];

  const services = [
    {
      title: "Design Services",
      number:"01",
      description: " UI/UX Design , Responsive Web Design , Graphic Design",
      bulletPoints: ["UI/UX Design: crafting user interfaces and experiences.", "Responsive Web Design: ensuring websites look good on all devices.", "Graphic Design: creating visual content."],
    },

    {
      title: "Development Services",
      number:"02",
      description: "Frontend Development , Backend Development , Full Stack Development, Web Application Development",
      bulletPoints: [
        "Frontend Development: building the client-facing part of websites using technologies like HTML, CSS, and JavaScript.",

        "Backend Development: developing server-side logic and integration, databases, and application programming interfaces (APIs).",

        "Full Stack Development: offering end-to-end web solutions that encompass both front-end and back-end development.",

        "  Web Application Development: building dynamic and interactive web applications tailored to specific business needs.",
      ],
    },
    {
      number:"03",
      title: "Support & Maintenance Services",

      description: "Website Maintenance,Hosting Solutions, Technical Support",
      bulletPoints: [
        " Website Maintenance: regular updates and maintenance to keep websites running smoothly and securely.",
        "Hosting Solutions: providing reliable web hosting services with different plans to meet varied needs.",
        "Technical Support: offering ongoing technical support to handle any issues or queries related to website performance.",
      ],
    },
    {
      number:"04",
      title: "Others Services",

      description: "Search Engine Optimization (SEO), Web Accessibility ",
      bulletPoints: [
        " Search Engine Optimization (SEO): optimizing websites to rank higher in search engine results and attract more organic traffic.",
        "Web Accessibility: ensuring that websites are accessible to individuals with disabilities, compliant with WCAG guidelines.",
      ],
    },
  ];
  const [isOpen, setIsOpen] = useState(null);

  function handleClick(index) {
    setIsOpen((prevIsOpen) => (prevIsOpen === index ? null : index));
  }

  return (
    <section className="services-section">
      <div className="services-wrapper">
        <h2>02/</h2>
        <span className="title-wrapper">
          {servicesTitle.map((lettre, key) => {
            const style = { transitionDelay: `${key * 0.07}s` };
            return (
              <span key={key} className="services-title" style={style}>
                {lettre}
              </span>
            );
          })}
        </span>
      </div>
      <div className="service-card-wrapper">
        {/* <ServiceCard number={"01"} title={"Design Services"} style={{ borderTop: "2px solid grey", marginTop: "85px" }} onClick={() => handleClick(id)} id={0}></ServiceCard>
        <ServiceCard number={"02"} title={"Development Services"}></ServiceCard>
        <ServiceCard number={"03"} title={"Support & Maintenance Services"}></ServiceCard>
        <ServiceCard number={"04"} title={"Others Services"}></ServiceCard> */}
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
             style={{ borderTop: "2px solid grey", marginTop: "85px" }}
           />
         ))} 
      </div>
    </section>
  );
}

export default ServiceCards;
