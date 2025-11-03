import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Function to generate a random username and TRX amount
const generateFakeData = () => {
  const prefix = "abcdefghijklmnopqrstuvwxyz";
  const randomUsername = `${prefix[Math.floor(Math.random() * prefix.length)]
    }*****${prefix[Math.floor(Math.random() * prefix.length)]}`;

  // Conversion rate: 1 TRX = 0.07 USDT
  const trxAmount = Math.random() * 10000;
  const usdtAmount = (trxAmount * 0.07).toFixed(2) + " USDT";

  return { name: randomUsername, value: usdtAmount };
};

const HomeWithdrawal = () => {
  const { t } = useTranslation();
  const [newItemIndex, setNewItemIndex] = useState(null);

  // Create an initial list of 15 fake entries
  const [dataList, setDataList] = useState(
    Array.from({ length: 15 }, () => generateFakeData())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a new entry for the first position
      const newEntry = generateFakeData();
      setDataList((prevList) => [newEntry, ...prevList.slice(0, -1)]);
      setNewItemIndex(0);

      // Clear animation flag after animation completes
      setTimeout(() => {
        setNewItemIndex(null);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div data-v-1b3f4761="" className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text membership-list">
      <div data-v-1b3f4761="" className="base-section-title">{t("profit_withdrawal")}</div>
      <div data-v-1b3f4761="" className="swiper swiper-initialized swiper-vertical membership-content max-h-[500px]">
        <div data-v-1b3f4761="" className="swiper-wrapper">
          {dataList.map((item, index) => (
            <AnimatePresence key={`${index}-${item.name}`}>
              {index === newItemIndex ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "40px", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  data-v-1b3f4761=""
                  className={`swiper-slide new-entry`}
                >
                  <div
                    data-v-1b3f4761=""
                    className="flex flex-nowrap h-40px w-full justify-between border-b border-solid border-$border-color items-center"
                  >
                    <div data-v-1b3f4761="" className="w-full text-truncate">
                      {item.name}
                    </div>
                    <div data-v-1b3f4761="" className="font-anton w-full text-right">
                      +{item.value}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div
                  data-v-1b3f4761=""
                  className="swiper-slide"
                >
                  <div
                    data-v-1b3f4761=""
                    className="flex flex-nowrap h-40px w-full justify-between border-b border-solid border-$border-color items-center"
                  >
                    <div data-v-1b3f4761="" className="w-full text-truncate">
                      {item.name}
                    </div>
                    <div data-v-1b3f4761="" className="font-anton w-full text-right">
                      +{item.value}
                    </div>
                  </div>
                </div>
              )}
            </AnimatePresence>
          ))}
          
        </div>
      </div>
     
    </div>
  );
};

export default HomeWithdrawal;
