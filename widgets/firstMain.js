"use client";

import { Genre, NavigateButton, SlideButton, SoonAnime, Text, Title } from "../shared/ui";
import SlideBack from "../public/SlideBack.svg";
import SlideNext from "../public/SlideNext.svg";
import { useEffect, useState } from "react";

export const FirstMain = ({}) => {
  const [loader, setLoader] = useState(true);
  const [paginateData, setPaginateData] = useState([]);
  const [currentAnime, setCurrentAnime] = useState(0);
  const [animeTitle, setAnimeTitle] = useState("Title");
  const [animeGenres, setAnimeGenres] = useState([]);
  const [animeYear, setAnimeYear] = useState("Rating");
  const [animeStudio, setAnimeStudio] = useState("Studio");
  const [animeRation, setAnimeRatin] = useState("Ratin");
  const [animeLink, setAnimeLink] = useState("Link");
  const [animeImg, setAnimeImg] = useState("Img");

  useEffect(() => {
    const mainFetchQuery = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const responce = await fetch(
          "https://api.jikan.moe/v4/seasons/upcoming?sfw=true&limit=5"
        );
        const data = await responce.json();
        setPaginateData(data.data);
        DisplayPage(0, data.data);

        console.log(data);  
      } catch { 
        console.error("Error", error);
      } finally {
        setLoader(false);
      }
    };
    mainFetchQuery();
  }, []);
  
  const DisplayPage = (index, data = paginateData) => {
    if (data[index]) {
      const anime = data[index];
      setAnimeTitle(anime.title);
      setAnimeGenres(anime.genres);
      setAnimeYear(anime.aired.string);
      setAnimeLink(anime.url);
      setAnimeImg(anime.images.webp.large_image_url);
      setAnimeStudio(anime.studios[0].name);
      setAnimeRatin(anime.rating);
      setCurrentAnime(index);
    }
  };

  const NextPage = () => {
    if (currentAnime < paginateData.length - 1) {
      DisplayPage(currentAnime + 1);
    }
  };

  const PrevPage = () => {
    if (currentAnime > 0) {
      DisplayPage(currentAnime - 1);
    }
  };

  return (

    <div className="bg-[#4D5D52] rounded-2xl max-h-[600px] mt-8 flex relative">
     {loader && (
            <div className="bg-[#4D5D52]/70 absolute text-8xl flex flex-1 w-full z-99 h-full items-center justify-center"> Loading... </div>
        )}
      <div className="flex-1 flex p-6">
        <div className="flex gap-6 flex-col justify-between">
          <Title title={animeTitle} />

          <div className="mt-4 mb-6 flex gap-4 flex-wrap">
            <Text text="Genres-> " />
            {animeGenres.map((item, i) => {
              return <Genre genre={item.name} key={i} />;
            })}
          </div>
          <div className="flex gap-4">
            <Text text="Date release:" />
            <Text text={animeYear} />
          </div>
          <div className="flex gap-4">
            <Text text="Studio:" />
            <Text text={animeStudio} />
          </div>
          <div className="flex gap-4">
            <Text text="Rating:" />
            <Text text={animeRation} />
          </div>
          <NavigateButton title="Посмотреть" link={animeLink} />
        </div>
      </div>

      <div className="flex-1 min-h-[300px] relative">
        <img
          src={animeImg}
          alt={animeTitle}
          className="w-full h-full object-cover rounded-r-2xl "
        />
        <div className="absolute  top-[5%] right-[5%]">
            <SoonAnime/>
        </div>
        <div className="flex gap-4 mt-6 absolute  bottom-[5%] right-[5%]">
          <button
            onClick={PrevPage}
            disabled={currentAnime === 0}
            className="w-12 h-12 text-black bg-amber-50 rounded-full flex items-center justify-center disabled:bg-gray-300"
          >
            <SlideButton img={SlideBack} />
          </button>
          <button
            onClick={NextPage}
            disabled={currentAnime === paginateData.length - 1}
            className="w-12 h-12 text-black bg-amber-50 rounded-full flex items-center justify-center disabled:bg-gray-300 hover:text-gray-50"
          >
            <SlideButton img={SlideNext} />
          </button>
        </div>
      </div>
    </div>
  );
};
