import { Button, ContentLayout, MainLayout } from "@/components";
import { Fragment, useState } from "react";
import { MdWork } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";

export const About = () => {
  const [route, setRoute] = useState("about");
  return (
    <MainLayout>
      <ContentLayout className="flex-col bg-[#09644E]  justify-center items-center  ">
        <div className=" w-full md:h-[70vh] h-[60vh] flex justify-center items-center ">
          <img
            className="md:w-[400px] w-[250px] drop-shadow-xl"
            src="/logo/asyf-logo.png"
            alt=""
          />
        </div>
        <div className="w-full min-h-screen md:px-[15vh] px-9 md:py-[8vh] py-10 bg-[#F0F2F5] flex md:flex-row flex-col gap-5">
          <div className="md:w-1/4 w-full flex md:flex-col flex-row gap-4">
            <div
              onClick={() => setRoute("about")}
              className={`cursor-pointer font-semibold  md:text-lg text-base flex flex-row items-center gap-3 ${
                route == "about"
                  ? "bg-[#09644E] hover:bg-[#07382c] text-white"
                  : "bg-gray-300 hover:bg-gray-400 text-black"
              } px-4 py-3 rounded-lg`}
            >
              <TbListDetails className="text-xl" />
              <h1 className="">About</h1>
            </div>
            <div
              onClick={() => setRoute("job")}
              className={`cursor-pointer font-semibold  md:text-lg text-base flex flex-row items-center gap-3 ${
                route != "about"
                  ? "bg-[#09644E] hover:bg-[#07382c] text-white"
                  : "bg-gray-300 hover:bg-gray-400 text-black"
              } px-4 py-3 rounded-lg`}
            >
              <MdWork className="text-xl" />
              <h1 className="">Job and Function</h1>
            </div>
          </div>
          <div className="md:w-3/4 w-full text-justify md:text-lg text-base gap-4 flex flex-col">
            {route == "about" ? (
              <Fragment>
                <p>
                  The ASEAN Youth Forum is a forum organized by ASEAN
                  (Association of Southeast Asian Nations) to bring together
                  youth from all ASEAN member countries to discuss and exchange
                  information on important issues affecting the ASEAN region.
                  This forum aims to increase youth participation in the ASEAN
                  regional integration process and to develop a better
                  understanding of the needs and expectations of ASEAN youth. In
                  this forum, ASEAN youth can introduce themselves, interact,
                  collaborate, and create networks with other youth from across
                  the ASEAN region.
                </p>
                <h1 className="font-bold md:text-3xl text-xl">History</h1>
                <p>
                  The history of the ASEAN Youth Forum began in 1975 when ASEAN
                  established. This forum aims to facilitate dialogue and
                  exchanges between ASEAN youths in an effort to improve
                  understanding and regional cooperation among member countries
                  ASEAN. Every year, young people from all over ASEAN gather to
                  discuss important issues faced by the ASEAN community, such as
                  peace and security, economic empowerment, environment, and
                  health. This forum is also a place to build networking and
                  strengthening ties between ASEAN youth. Besides In addition,
                  the ASEAN Youth Forum is also working with the ASEAN Summit
                  and ASEAN Ministerial Meetings to convey views and aspirations
                  ASEAN youth at the policy level. This forum is a forum what is
                  important is for the youth of ASEAN to cast their voice in
                  ASEAN policy-making and enhancing their role in advancing the
                  ASEAN community.
                </p>
              </Fragment>
            ) : (
              <Fragment>
                <h1 className="font-bold md:text-3xl text-xl">Job</h1>
                <ol className="list-decimal pl-5">
                  <li>
                    Participate actively in discussions and question and answer
                    sessions. Participants must strive to provide constructive
                    contributions and views in every given opportunity.
                  </li>
                  <li>
                    Develop ideas and solutions to issues discussed in the
                    forum. Participants are expected to be able to solve
                    problems faced in their respective countries by providing
                    innovative and creative ideas.
                  </li>
                  <li>
                    Develop networking and cooperation with other participants
                    in the forum. Participants can establish relationships with
                    other youth from different countries and develop cooperation
                    that benefits each country.
                  </li>
                  <li>
                    Implement ideas and solutions generated at AYF into
                    activities or projects in their respective countries.
                    Participants must try to apply the ideas and solutions that
                    have been discussed at the AYF to have a positive impact on
                    their environment.
                  </li>
                  <li>
                    Share experiences and knowledge gained at AYF with others in
                    their respective countries. Participants can share the
                    knowledge and experience gained at AYF with colleagues and
                    other youth in their respective countries to broaden
                    understanding and awareness of important issues in Asia.
                  </li>
                </ol>
                <h1 className="font-bold md:text-3xl text-xl">Function</h1>
                <ol className="list-decimal pl-5">
                  <li>
                    As a forum for Asian youth to exchange information and
                    experiences. AYF provides opportunities for participants to
                    interact with youth from various countries in Asia, so that
                    they can broaden their horizons and knowledge about
                    important issues in Asia.
                  </li>
                  <li>
                    As a platform for discussing issues affecting Asia and the
                    world in general. AYF provides an opportunity for
                    participants to discuss important issues such as peace,
                    security, environment and human rights, as well as seek
                    innovative and creative solutions.
                  </li>
                  <li>
                    As a place to build networks and collaboration. AYF provides
                    opportunities for participants to establish relationships
                    and cooperate with other youth in different countries, so as
                    to expand networks and build fruitful partnerships.
                  </li>
                  <li>
                    As an arena to develop leadership and social skills. AYF
                    provides opportunities for participants to develop social
                    skills such as communication, teamwork, and leadership
                    through discussions, presentations, and other activities.
                  </li>
                  <li>
                    As a means to drive positive change in Asia. AYF provides an
                    opportunity for participants to fight for important issues
                    and find innovative and creative solutions, so as to drive
                    positive change in Asia.
                  </li>
                </ol>
              </Fragment>
            )}
          </div>
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
