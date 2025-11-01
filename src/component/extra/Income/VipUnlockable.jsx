import React from "react";

const VipUnlockable = ({
  handleUnlockLevel,
  lavelName,
  quantification,
  profitRation,
  minUnclock,
  numberOfDays,
  currentVip,
}) => {
  const isCurrent = currentVip === lavelName;

  return (
    <div
      data-v-ca6100e8=""
      className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text vip-card"
    >
      <h3
        data-v-ca6100e8=""
        className="base-section-title flex justify-between"
      >
        <div data-v-ca6100e8="" className="flex items-center">
          <div data-v-ca6100e8="" className="vip-name font-you">
            {lavelName}
          </div>
        </div>
        <div
          data-v-ca6100e8=""
          className="unlock-btn"
          onClick={handleUnlockLevel}
        >
          <span>{isCurrent ? "Current VIP" : "Click To Unlock"} {isCurrent}</span>
        </div>
      </h3>

      <div
        data-v-ca6100e8=""
        className="grid grid-cols-1 gap-4px mt-10px bg-$bg-card2 py-5px rd!"
      >
        <div data-v-ca6100e8="" className="vip-info-item">
          <div data-v-ca6100e8="" className="text-$text-gray text-12px">
            Quantification Times Per Day
          </div>
          <div data-v-ca6100e8="" className="font-bold text-14px">
            {quantification}
          </div>
        </div>

        <div data-v-ca6100e8="" className="vip-info-item">
          <div data-v-ca6100e8="" className="text-$text-gray text-12px">
            Profit Ratio
          </div>
          <div data-v-ca6100e8="" className="font-bold text-14px">
            {profitRation}
          </div>
        </div>

        <div data-v-ca6100e8="" className="vip-info-item">
          <div data-v-ca6100e8="" className="text-$text-gray text-12px">
            Minimum Unlock Amount
          </div>
          <div data-v-ca6100e8="" className="font-bold text-14px">
            &le;{minUnclock} USDT
          </div>
        </div>

        <div data-v-ca6100e8="" className="vip-info-item">
          <div data-v-ca6100e8="" className="text-$text-gray text-12px">
            Quantifiable Number Of Days
          </div>
          <div data-v-ca6100e8="" className="font-bold text-14px">
            {numberOfDays}
          </div>
        </div>
      </div>

      <div data-v-ca6100e8="" className="text-sm text-left font-bold mt-8px">
        JASMY QUANT
      </div>
    </div>
  );
};

export default VipUnlockable;
