import React from "react";
import ServiceCard from "../service-card";
import { cn as bem } from "@bem-react/classname";

const ServiceCards = () => {
  const cn = bem("Plan");

  const services = [
    {
      title: "Design Services",
      description: " UI/UX Design , Responsive Web Design , Graphic Design",
      bulletPoints: ["UI/UX Design: Crafting user interfaces and experiences.", "Responsive Web Design: Ensuring websites look good on all devices.", "Graphic Design: Creating visual content."],
    },
    // ... add other service categories here
    {
      title: "Development Services",
      description: "Frontend Development , Backend Development , Full Stack Development, Web Application Development",
      bulletPoints: [
        "Frontend Development: Building the client-facing part of websites using technologies like HTML, CSS, and JavaScript.",

        "Backend Development: Developing server-side logic and integration, databases, and application programming interfaces (APIs).",

        "Full Stack Development: Offering end-to-end web solutions that encompass both front-end and back-end development.",

        "  Web Application Development: Building dynamic and interactive web applications tailored to specific business needs.",
      ],
    },
    {
      title: "Support & Maintenance Services",
      description: "Website Maintenance,Hosting Solutions, Technical Support",
      bulletPoints: [
        " Website Maintenance: Regular updates and maintenance to keep websites running smoothly and securely.",
        "Hosting Solutions: Providing reliable web hosting services with different plans to meet varied needs.",
        "Technical Support: Offering ongoing technical support to handle any issues or queries related to website performance.",
      ],
    },
    {
      title: "Others",
      description: "Search Engine Optimization (SEO), Web Accessibility ",
      bulletPoints: [
        " Search Engine Optimization (SEO): Optimizing websites to rank higher in search engine results and attract more organic traffic.",
        "Web Accessibility: Ensuring that websites are accessible to individuals with disabilities, compliant with WCAG guidelines.",
      ],
    },
  ];

  return (
    <section className={cn("container")}>
      <div className={cn("")}>
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} bulletPoints={service.bulletPoints} />
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
