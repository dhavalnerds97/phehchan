import React from "react";
import { useTheme } from "../../utils/ThemeContext";

const celebsRecsData = [
  "Target Audience: 18 years to 45 years",
  "Engagement Tool",
  "A Interview series with multiple parenting influencers or a celebrity or both will allow access to a much larger consumer base and generate awareness amongst their user bases about the School Chameleon Program.",
  "Celebrities who are parents and have been known to support the education sector formerly would be ideal to represent the School Chameleon Program.",
  <>
    <strong>Anupam Kher</strong>, <strong>Soha Ali Khan</strong>,{" "}
    <strong>Ayushmaan Khurana</strong>, <strong>Kalki Koechlin</strong> would
    make ideal brand ambassadors for the School Chameleon Program
  </>,
  <>
    When focusing on influencers the top recommendations would be{" "}
    <strong>Anupriya Kaur</strong>, <strong>Chhavi Mittal</strong>,
    <strong>Shraddha Singh</strong>, and <strong>Yuvika Abrol</strong>. All the
    Momfluencers mentioned here posses a substantially large base of followers
    which if correctly tapped could become a great asset for the brand.",
  </>,
  "Another added advantage is majority of these Mom-fluencers have their presence on various Social Media platforms such as Twitter, Youtube and Instagram, which you could diversify and increase the outreach to various parents. Some also run their own blogs.",
];

const CelebsRecs = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`text-wrap p-8 lg:p-16 grid grid-cols-1 md:items-center md:grid-cols-2 md:gap-12 lg:gap-16 lg:h-screen ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-slate-800"
      }`}
    >
      <div className="bg-gray-400">Image</div>
      <div className="text-wrap">
        <h2 className=" py-4 font-bold text-xl sm:text-3xl font-georgia ">
          Celebrity and Influencer tie ups
        </h2>
        <ul>
          {celebsRecsData.map((item, index) => (
            <li key={index} className="pb-1 sm:ms-6 sm:list-disc ">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CelebsRecs;
