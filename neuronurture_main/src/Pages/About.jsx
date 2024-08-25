import React from "react";
import CommonNav from "../Components/NavFooter/CommonNav";
import CommonFooter from "../Components/NavFooter/CommonFooter";

const About = () => {
  return (
    <>
      <CommonNav />
      <div className="h-[105vh]">
        <div className="flex flex-col my-12 mx-12 text-justify">
          <h1 className="text-black text-3xl font-bold">Neuro-Diversity</h1>
          <p className="text-2xl py-1" style={{ maxWidth: "160ch" }}>
            Neurodiversity is a framework for understanding human brain function
            that recognizes the diversity within sensory processing, motor
            abilities, social comfort, cognition, and focus as neurobiological
            differences. The neurodiversity paradigm argues that diversity in
            human cognition is normal and that some conditions generally
            classified as disorders, such as autism, are differences and
            disabilities that are not necessarily pathological.
          </p>

          <h1 className="text-black text-3xl font-bold pt-8">
            Types Neuro-Diversity
          </h1>
          <p className="text-2xl py-1" style={{ maxWidth: "160ch" }}>
            Some of the conditions that are most common among those who describe
            themselves as neurodivergent include:
          </p>
          <ul className="list-disc pl-8 text-justify">
            <li className="py-1 text-xl">
              Autism spectrum disorder - ASD{" "}
              <span className="text-red-700">
                ( trouble with social interactions )
              </span>
            </li>
            <li className="py-1 text-xl">
              Attention-deficit hyperactivity disorder - ADHD{" "}
              <span className="text-red-700">
                (it disrupts a person’s ability to manage their own emotions,
                thoughts and actions)
              </span>
            </li>
            <li className="py-1 text-xl">
              DiGeorge syndrome{" "}
              <span className="text-red-700">
                ( causes heart abnormalities, an impaired immune system and
                developmental delays)
              </span>
            </li>
            <li className="py-1 text-xl">
              Down syndrome{" "}
              <span className="text-red-700">
                (cognitive development challenges )
              </span>
            </li>
            <li className="py-1 text-xl">
              Dyscalculia{" "}
              <span className="text-red-700">(difficulty with math)</span>
            </li>
            <li className="py-1 text-xl">
              Dysgraphia{" "}
              <span className="text-red-700">(difficulty with writing)</span>
            </li>
            <li className="py-1 text-xl">
              Dyslexia{" "}
              <span className="text-red-700">(difficulty with reading)</span>
            </li>
            <li className="py-1 text-xl">
              Dyspraxia{" "}
              <span className="text-red-700">
                (difficulty with coordination)
              </span>
            </li>
            <li className="py-1 text-xl">Sensory processing disorders</li>

            <li className="py-1 text-xl">Intellectual disabilities</li>
            <li className="py-1 text-xl">Social Anxiety</li>
          </ul>
        </div>
      </div>
      <p className="text-center mx-auto text-xl font-semibold text-green-700 pb-2">
        Go to respective links for studing more about each disorder
      </p>
      <p className="text-center mx-auto pb-4">
        Inspired by{" "}
        <a
          href="https://en.wikipedia.org/wiki/Neurodiversity"
          className="decoration-none text-blue-400"
          target="_blank"
          rel="noreferrer"
        >
          Wikipedia
        </a>{" "}
        and{" "}
        <a
          href="https://my.clevelandclinic.org/health/symptoms/23154-neurodivergent"
          className="decoration-none text-blue-400"
          target="_blank"
          rel="noreferrer"
        >
          Cleveland Clinic
        </a>
      </p>
      <CommonFooter />
    </>
  );
};

export default About;
