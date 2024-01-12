import React from "react";
import { cn as bem } from "@bem-react/classname";
import WorkFlowCard from "../work-flow-card";
import "./style.css";

const WorkFlow = () => {
  const cn = bem("Work-flow-section");
  return (
    <section className={cn("")}>
      <WorkFlowCard
        id={"work-flow"}
        number={"01"}
        name={"Preliminary Research"}
        content={
          "At the outset of our development process, we conduct a targeted analysis of market trends, competition, and user demographics. This crucial step ensures that the final product aligns closely with user needs and stands out in the competitive landscape."
        }
      ></WorkFlowCard>
      <WorkFlowCard
        id={"work-flow"}
        number={"02"}
        name={"Analytics Overview"}
        content={
          "Through meticulous analytics, we validate each prototype against requirements, ensuring the end product aligns with client expectations. We deliver a clear list of technical tasks, precise cost estimates, and project timelines."
        }
      ></WorkFlowCard>
        <WorkFlowCard
        id={"work-flow"}
        number={"03"}
        name={"Prototype Crafting"}
        content={
          "We meticulously transform functional requirements into user scenarios and divide them into structured screens. Our creation of a comprehensive map detailing screen transitions streamlines application logic, enhancing overall usability to accelerate user goal attainment."
        }
      ></WorkFlowCard>
      <WorkFlowCard
        id={"work-flow"}
        number={"04"}
        name={"UI/UX Design Elegance"}
        content={
          "Our design philosophy prioritizes user-friendliness — ensuring intuitive understanding of the interface and effortless discovery of required functionalities. Strategic use of animation not only enriches the interaction with your product but also aids in content navigation, imbuing a lasting impression."
        }
      ></WorkFlowCard>
        <WorkFlowCard
        id={"work-flow"}
        number={"05"}
        name={"Product Development"}
        content={
          "We prioritize a product-centric development strategy, which allows us to deliver websites that resonate with users and contribute significantly to your business's financial success. Our team is dedicated to working closely with you to create an in-depth technical specification and enumerate a precise set of product functionalities, all derived from extensive market and user research."
        }
      ></WorkFlowCard>
            <WorkFlowCard
        id={"work-flow"}
        number={"06"}
        name={"Quality Verification"}
        content={
          "This critical phase, which comes before a product's launch, focuses on meticulously evaluating the features through comprehensive regression testing. The outcome of these diligent efforts ensures that upon passing these tests, the application is deemed fit for public deployment."
        }
      ></WorkFlowCard>
              <WorkFlowCard
        id={"work-flow"}
        number={"07"}
        name={"Release"}
        content={
          "Once the product has passed thorough testing to ensure its quality and effectiveness, it is ready for official release."
        }
      ></WorkFlowCard>
       <WorkFlowCard
        id={"work-flow"}
        number={"08"}
        name={"Support & Maintenance"}
        content={
          "Our comprehensive offerings include not only the initial deployment of the product into the market but also continuous support and maintenance services to ensure its long-term success and adaptability."
        }
      ></WorkFlowCard>
    </section>
  );
};

export default WorkFlow;
