"use client";

import { useEffect, useState } from "react";
import { Card } from "../shared/card";
import { SlideButton, Text, Title } from "../shared/ui";
import SlideBack from "../public/SlideBack.svg";
import SlideNext from "../public/SlideNext.svg";

export const ThirdMain = ({}) => {
  const [DataFetch, setDataFetch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [CountCard] = useState(8);

  useEffect(() => {
    const animeFetchQuery = async () => {
      try {
        const allDataFetch = [];
        let page = 1;
        while (page <= 5) {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          const responce = await fetch(
            `https://api.jikan.moe/v4/top/manga?sfw=true&page=${page}`
          );
          const data = await responce.json();
          console.log(data);
          if (data.data && data.data.length > 0) {
            allDataFetch.push(...data.data);
          }
          page++;
        }
        setDataFetch(allDataFetch);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    animeFetchQuery();
  }, []);

  const lastCard = currentPage * CountCard;
  const firstCard = lastCard - CountCard;
  const paginateDataAnime = DataFetch.slice(firstCard, lastCard);
  const totalPage = Math.ceil(DataFetch.length / CountCard);
  const NextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const PrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className=" flex justify-center items-center pt-16 flex-col">
      <div className="max-w-max rounded-3xl flex justify-center py-2.5 px-10 bg-[#222222]">
        <Title title="Список Манги" />
      </div>
      {loading && (
        <div className=" text-green-100 bg-gray-500 px-5 py-5 rounded-2xl font-medium text-6xl font-[AlegrayMedium] mt-5">
          Loading...
        </div>
      )}

      <div className="mt-4 grid grid-cols-4 gap-8">
        {paginateDataAnime.map((item, i) => (
          <Card DataFetch={item} key={item.mal_id} />
        ))}
      </div>
      <div className="flex gap-4">
        <Text text={currentPage} />
        <Text text="as" />
        <Text text={totalPage} />
      </div>

      <div className="flex gap-14 mb-6 mt-6">
        <button
          onClick={PrevPage}
          disabled={currentPage === 1}
          className="w-12 h-12 text-black bg-amber-50 rounded-full flex items-center justify-center disabled:bg-gray-300"
        >
          <SlideButton img={SlideBack} />
        </button>
        <button
          onClick={NextPage}
          disabled={currentPage === totalPage}
          className="w-12 h-12 text-black bg-amber-50 rounded-full flex items-center justify-center disabled:bg-gray-300 hover:text-gray-50"
        >
          <SlideButton img={SlideNext} />
        </button>
      </div>
    </div>
  );
};
