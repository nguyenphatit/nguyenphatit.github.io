"use client";

import AnimationFade from "../animation/animation-fade";
import AnimationTextCharacter from "../animation/animation-text-character";
import { motion } from "framer-motion";

function Card({
  title,
  description,
  tech,
}: {
  title: string;
  description: string;
  tech: string;
}) {
  return (
    <AnimationFade>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex flex-col gap-6 md:flex-row justify-between items-center px-4 md:px-0 mb-8 cursor-pointer select-none"
      >
        <div className="flex-1 w-full ltr:md:mr-3 rtl:md:ml-3 p-4 border-4 border-light-primary dark:border-dark-primary rounded-xl bg-gradient-to-r from-light-primary/30 dark:from-dark-primary/30">
          <div className="text-xl font-bold text-gray-600 dark:text-gray-400">
            /Project
          </div>
          <div className="text-2xl md:text-4xl font-bold text-light-primary dark:text-dark-primary">
            {title}
          </div>
          <div className="text-xl font-bold text-gray-800 dark:text-gray-100">
            {tech}
          </div>
        </div>
        <div className="flex-1">
          <p className="text-xl leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </AnimationFade>
  );
}

export default function Work() {
  return (
    <section className="flex flex-col justify-center items-center relative py-60">
      <div className="container">
        <h1 className="font-heading text-9xl text-light-primary dark:text-dark-primary mb-12 px-4 md:px-0 select-none cursor-default">
          <AnimationTextCharacter text="Works" />
        </h1>
        <Card
          title="Customer Relationship Management"
          tech="React.js, Redux, Redux-Saga, NodeJs, REST API, SequelizeJs, MySQL"
          description="A software application designed to help businesses manage and
          enhance relationships with their customers. It typically
          includes features such as customer information gathering and
          storage, marketing relationship creation, customer service
          management, and customer experience improvement."
        />
        <Card
          title="Virtual Class"
          tech="React.js, Gatsby.js, Redux, Redux-Thunk, Node.js, REST API, Sequelize,js, MySQL"
          description="A fitness class conducted online through video conferencing or
          streaming platforms. Participants can join the class from the
          comfort of their own home or any other location, using their own
          devices such as laptops, tablets, or smartphones"
        />
        <Card
          title="Food Delivery"
          tech="React.js, Redux, Redux-Thunk"
          description="An application that allows customers to browse and order food
          from a wide selection of restaurants and cafes in their local
          area. Customers can view menus, track delivery times, and make
          payments through the app."
        />
        <Card
          title="Drug Marketplace"
          tech="Angular, Angular Material"
          description="This is a website that provides a service for patients to order
          prescription drugs from their doctor, helping them save time and
          effort in purchasing medication. The website may have the
          following features: Prescription upload, Information
          confirmation, Payment method selection, Delivery, and Customer
          support"
        />
        <Card
          title="Billing App"
          tech="Angular, Node.js, REST API, Sequelize.js, MySQL"
          description="This is a website used for commission management, helping
          businesses or individuals easily track and calculate the
          commission payments to their agents or salespeople. The website
          may have the following features: Commission information
          management, Automatic calculation, and Report generation,..etc."
        />
      </div>
    </section>
  );
}
