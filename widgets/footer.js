"use client";

import { FooterText, Title, FooterButton } from "../shared/ui";
import { useEffect, useState } from "react";

export const Footer = ({}) => {
  const [trigger, setTrigger] = useState(0);
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

  const [animeRandomImg, setAnineRandomImg] = useState("Img");
  const [animeRandomTitle, setAnineRandomTitle] = useState("Title");
  const [animeRandomEpisodes, setAnineRandomEpisodes] = useState("Episodes");
  const [animeRandomSource, setAnineRandomSource] = useState("Source");
  const [animeRandomDateRealise, setAnineRandomDateRealise] =
    useState("DateRealise");
  const [animeRandomScore, setAnineRandomScore] = useState("Score"); // рейтинг
  const [animeRandomRating, setAnineRandomRating] = useState("Rating"); // ограничение по возрасту
  const [animeRandomStudios, setAnineRandomStudios] = useState([]);
  const [animeRandomProducer, setAnineRandomProducer] = useState([]);
  const [animeRandomThemes, setAnineRandomThemes] = useState([]);
  const [animeRandomSynopsis, setAnineRandomSynopsis] = useState("Synopsis"); // краткий обзор

  useEffect(() => {
    if (trigger > 0) {
      const randomFeatchQuery = async () => {
        try {
          setButtonLoading(true);
          await new Promise((resolve)=> setTimeout(resolve, 2000));

          const responce = await fetch(
            "https://api.jikan.moe/v4/random/anime?sfw=true"
          );
          const randomData = await responce.json();
          const normalizeData = randomData.data;
          if(normalizeData.rating === "G - All Ages" ||
             normalizeData.rating === "PG - Children" ||
             normalizeData.rating === "Rx - Hentai" ){
            console.log("Новый рейтинг");
            return await randomFeatchQuery();
          }
          console.log(normalizeData);
          setAnineRandomImg(normalizeData.images.webp.large_image_url);
          setAnineRandomTitle(normalizeData.title);
          setAnineRandomEpisodes(normalizeData.episodes);
          setAnineRandomSource(normalizeData.source);
          setAnineRandomDateRealise(normalizeData.aired.string);
          setAnineRandomScore(normalizeData.score);
          setAnineRandomRating(normalizeData.rating);
          setAnineRandomStudios(normalizeData.studios);
          setAnineRandomProducer(normalizeData.producers);
          setAnineRandomThemes(normalizeData.themes);
          setAnineRandomSynopsis(normalizeData.synopsis);

          if(animeRandomImg === null){
            setAnineRandomImg(normalizeData.images.jpg.large_image_url);
          }

        } catch (error) {
          console.error("Error", error);
        } finally {
          setLoading(false);
          setButtonLoading(false);
        }
      };
      randomFeatchQuery();
    }
  }, [trigger]);

  const HandleClick = () => {
    setTrigger((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center pt-16 pb-20">
      <Title title="Рандомное аниме" />
      <div className="flex flex-row mt-16 gap-8 h-auto w-full relative">
        <div className="flex flex-col gap-8 flex-1 max-w-[300px]">
          <FooterButton 
            name={buttonLoading ? "Загрузка..." : "Узнать аниме"} 
            func={() => HandleClick()}
            disabled={buttonLoading}
          />
          {
            buttonLoading ? (
              <div className="text-center rounded-2xl px-3 py-3 bg-[#6F8476] text-white py-4">
                Поиск...
              </div>
            ) : (


          <div className="
          rounded-2xl px-3 py-3 bg-[#6F8476]
          max-h-[450px] overflow-x-auto w-auto flex flex-col gap-2
          [&::-webkit-scrollbar]:w-3
        [&::-webkit-scrollbar-thumb]:bg-gray-300
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-thumb]:rounded-full
        ">
            <FooterText name="Title->" text={animeRandomTitle} />
            {animeRandomSynopsis !== null && (
              <FooterText name="Synopsis->" text={animeRandomSynopsis} />
            )}
            {animeRandomEpisodes !== null && (
              <FooterText name="Epicode->" text={animeRandomEpisodes} />
            )}
            {animeRandomScore !== null && (
              <FooterText name="Source->" text={animeRandomSource} />
            )}
            {animeRandomDateRealise !== null && (
              <FooterText name="Date realise->" text={animeRandomDateRealise} />
            )}
            {animeRandomScore !== null && (
              <FooterText name="Score->" text={animeRandomScore} />
            )}
            {animeRandomRating !== null && (
              <FooterText name="Rating->" text={animeRandomRating} />
            )}

            {animeRandomStudios.length !== 0 && (
              <div className="flex gap-2 flex-wrap">
                <FooterText name="Studios->" />
                {animeRandomStudios.map((item, i) => (
                  <FooterText text={item.name} key={i} />
                ))}
              </div>
            )}
            {animeRandomProducer.length !== 0 && (
              <div className="flex gap-2 flex-wrap">
                <FooterText name="Producer->" />
                {animeRandomProducer.map((item, i) => (
                  <FooterText text={item.name} key={i} />
                ))}
              </div>
            )}
            {animeRandomThemes.length !== 0 && (
              <div className="flex gap-2 flex-wrap ">
                <FooterText name="Themes->" />
                {animeRandomThemes.map((item, i) => (
                  <FooterText text={item.name} key={i} />
                ))}
              </div>
            )}
          </div>
                      )
          }
        </div>

        <div className="bg-[#6F8476] rounded-2xl flex flex-1/2 h-[550px] items-center justify-center relative">
          {loading && (
            <div className="absolute w-[100%] h-[100%] flex text-4xl text-white justify-center items-center rounded-2xl bg-[#6F8476]">
              Нажми на узнать аниме...
            </div>
          )}
          {buttonLoading ? (
            <div>
              <img
            className="rounded-2xl w-[800px] h-[500px] object-fit border-3 border-white"
            src="/Footer_Gif.gif"
            alt="Picture"
          />
            </div>
          ): (
          <img
            className="rounded-2xl w-full h-full object-fit border-3 border-white"
            src={animeRandomImg}
            alt="Picture"
          />
          )}

        </div>
      </div>
    </div>
  );
};
