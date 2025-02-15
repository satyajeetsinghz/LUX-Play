import { useState } from "react";
import StoryView from "../Episodes/EpisodeOne/StoryView";
import AboutEpisode from "../Episodes/EpisodeOne/AboutEpisode";
import MainCharacters from "../Episodes/EpisodeOne/MainCharacters";
import EpisodeSummary from "../Episodes/EpisodeOne/EpisodeSummary";

const LuciferEpisodeStory = () => {
  const [activeSection, setActiveSection] = useState("storyView");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sections = {
    storyView: { title: "Story View", component: <StoryView /> },
    mainCharacters: { title: "Main Characters & Arcs", component: <MainCharacters /> },
    episodeSummary: { title: "EP1: The Unredeemable", component: <EpisodeSummary /> },
    aboutEpisode: { title: "About the Episode", component: <AboutEpisode /> },
  };

  return (
    <div className="sm:flex w-full h-screen bg-[url('img/lucifer_background.jpg')] bg-cover bg-center text-white">
      {/* Sidebar Navigation */}
      <div className={`hidden bg-zinc-800/50 p-4 sm:flex flex-col gap-3 transition-all duration-500 ease-in-out ${isSidebarOpen ? "w-64" : " w-[75px] h-[70px] overflow-hidden"}`}>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="mb-4 p-2 hover:b-white hover:text-red-400 flex items-center justify-center w-10 h-10"
        >
          {isSidebarOpen ?  <img src="/img/close-outline.svg" className="invert" /> : <img src="/img/menu-outline.svg" className="invert" />}
        </button>
        {isSidebarOpen && Object.keys(sections).map((key) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`p-3 text-left rounded- transition-all ${activeSection === key ? "bg-red-600" : "bg-zinc-800/50 hover:bg-red-500"
              }`}
          >
            {sections[key].title}
          </button>
        ))}
      </div>

      {/* Mobile View */}
      <div className={`sm:hidden md:hidden xl:hidden lg:hidden bg-zinc-800/50 p-4 flex flex-col gap-3 transition-all duration-500 ease-in-out ${isSidebarOpen ? "w-full h-screen" : " w-[75px] h-[70px] overflow-hidden"}`}>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="mb-4 p-2 hover:b-white hover:text-red-400 flex items-center justify-center w-10 h-10"
        >
          {isSidebarOpen ?  <img src="/img/close-outline.svg" className="invert" /> : <img src="/img/menu-outline.svg" className="invert" />}
        </button>
        {isSidebarOpen && Object.keys(sections).map((key) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`p-3 text-left rounded- transition-all ${activeSection === key ? "bg-red-600" : "bg-zinc-800/50 hover:bg-red-500"
              }`}
          >
            {sections[key].title}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className={`p-6 flex flex-col items-center justify-center transition-all duration-100 ease-in-out mt-[1.5rem] sm:mt-0 ${isSidebarOpen ? "hidden sm:block" : "w-full"}`}>
        <div className="inline-flex items-center">
          <img className='w-7 invert mx-1 -translate-y-1.5' src="/img/play-circle.svg" alt="" />
          <h2 className="text-xl font-semibold text-red-500 mb-4">{sections[activeSection].title}</h2>
        </div>
        <div className="w-full max-w-[75rem] h-[40rem] overflow-y-auto p-4 bg-zinc-800/50 rounded-lg shadow-lg">
          <p className="text-lg">{sections[activeSection].component}</p>
        </div>
      </div>
    </div>
  );
};

export default LuciferEpisodeStory;
