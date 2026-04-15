"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval;

export const CardStack = ({
  items,
  offset,
  scaleFactor
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

    return (
        <div className="relative  h-60 w-60 md:h-60 md:w-150">
            {cards.map((card, index) => {
                return (
                <motion.div
                    key={card.id}
                    className="absolute bg-white h-60 w-60 md:h-60 md:w-120 rounded-3xl shadow-xl border border-gray-300 shadow-black/10 flex flex-col justify-between overflow-hidden"
                    style={{
                        transformOrigin: "top right",
                    }}
                    animate={{
                    top: index * -CARD_OFFSET,
                    right:index* -CARD_OFFSET,
                    scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                    zIndex: cards.length - index, //  decrease z-index for the cards that are behind
                    }}>
                    <div className="border-b border-gray-300 p-2 h-15 flex items-center bg-linear-to-br from-amber-500/30 via-[#252D4B]/10 to-green-500/30">
                        <p className="font-bold text-xl">{card.name}</p>
                    </div>
                    <div className="font-normal text-neutral-700">{card.content}</div>
                </motion.div>
                );
            })}
        </div>
    );
};
