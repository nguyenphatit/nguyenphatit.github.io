"use client";

import AnimationFade from "../animation/animation-fade";
import AnimationTextCharacter from "../animation/animation-text-character";

export default function Work() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative">
      <div className="container">
        <h1 className="font-heading text-9xl text-light-primary dark:text-dark-primary mb-12 px-4 md:px-0">
          <AnimationTextCharacter text="Works" />
        </h1>
        <AnimationFade>
          <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-0 mb-8">
            <div className="flex-1 w-full md:mr-3 p-4 border-4 border-light-primary dark:border-dark-primary rounded-xl">
              <div className="text-xl font-bold text-gray-600 dark:text-gray-400">
                /Project
              </div>
              <div className="text-2xl md:text-4xl font-bold text-light-primary dark:text-dark-primary">
                Customer Relationship Management
              </div>
              <div className="text-xl font-bold text-gray-800 dark:text-gray-100">
                React.js, Redux, Redux-Saga, Node.js, REST API, Sequelize,js,
                MySQL
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xl leading-relaxed">
                A software application designed to help businesses manage and
                enhance relationships with their customers. It typically
                includes features such as customer information gathering and
                storage, marketing relationship creation, customer service
                management, and customer experience improvement.
              </p>
            </div>
          </div>
        </AnimationFade>
        <AnimationFade>
          <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-0 mb-8">
            <div className="flex-1 w-full md:mr-3 p-4 border-4 border-light-primary dark:border-dark-primary rounded-xl">
              <div className="text-xl font-bold text-gray-600 dark:text-gray-400">
                /Project
              </div>
              <div className="text-2xl md:text-4xl font-bold text-light-primary dark:text-dark-primary">
                Virtual Class
              </div>
              <div className="text-xl font-bold text-gray-800 dark:text-gray-100">
                React.js, Gatsby.js, Redux, Redux-Thunk, Node.js, REST API,
                Sequelize,js, MySQL
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xl leading-relaxed">
                A fitness class conducted online through video conferencing or
                streaming platforms. Participants can join the class from the
                comfort of their own home or any other location, using their own
                devices such as laptops, tablets, or smartphones
              </p>
            </div>
          </div>
        </AnimationFade>
        <AnimationFade>
          <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-0 mb-8">
            <div className="flex-1 w-full md:mr-3 p-4 border-4 border-light-primary dark:border-dark-primary rounded-xl">
              <div className="text-xl font-bold text-gray-600 dark:text-gray-400">
                /Project
              </div>
              <div className="text-2xl md:text-4xl font-bold text-light-primary dark:text-dark-primary">
                Food Delivery
              </div>
              <div className="text-xl font-bold text-gray-800 dark:text-gray-100">
                React.js, Redux, Redux-Thunk
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xl leading-relaxed">
                An application that allows customers to browse and order food
                from a wide selection of restaurants and cafes in their local
                area. Customers can view menus, track delivery times, and make
                payments through the app.
              </p>
            </div>
          </div>
        </AnimationFade>
        <AnimationFade>
          <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-0 mb-8">
            <div className="flex-1 w-full md:mr-3 p-4 border-4 border-light-primary dark:border-dark-primary rounded-xl">
              <div className="text-xl font-bold text-gray-600 dark:text-gray-400">
                /Project
              </div>
              <div className="text-2xl md:text-4xl font-bold text-light-primary dark:text-dark-primary">
                Drug Marketplace
              </div>
              <div className="text-xl font-bold text-gray-800 dark:text-gray-100">
                Angular, Angular Material
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xl leading-relaxed">
                This is a website that provides a service for patients to order
                prescription drugs from their doctor, helping them save time and
                effort in purchasing medication. The website may have the
                following features: Prescription upload, Information
                confirmation, Payment method selection, Delivery, and Customer
                support
              </p>
            </div>
          </div>
        </AnimationFade>
        <AnimationFade>
          <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-0 mb-8">
            <div className="flex-1 w-full md:mr-3 p-4 border-4 border-light-primary dark:border-dark-primary rounded-xl">
              <div className="text-xl font-bold text-gray-600 dark:text-gray-400">
                /Project
              </div>
              <div className="text-2xl md:text-4xl font-bold text-light-primary dark:text-dark-primary">
                Billing App
              </div>
              <div className="text-xl font-bold text-gray-800 dark:text-gray-100">
                Angular, Node.js, REST API, Sequelize.js, MySQL
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xl leading-relaxed">
                This is a website used for commission management, helping
                businesses or individuals easily track and calculate the
                commission payments to their agents or salespeople. The website
                may have the following features: Commission information
                management, Automatic calculation, and Report generation,..etc.
              </p>
            </div>
          </div>
        </AnimationFade>
      </div>
    </section>
  );
}
