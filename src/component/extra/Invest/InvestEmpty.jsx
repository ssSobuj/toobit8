import React from 'react';
import noData from "../../../assets/images/no-data.png";
const InvestEmpty = () => {
    return (
        <div data-v-ede7987f="" className="mt-10px">
            <div data-v-156e3583="" className="base-list a-t-30">
                <div data-v-156e3583="" className="base-list-nodata">
                    <div className="van-empty">
                        <div className="van-empty__image" style={{ width: '80px', height: '80px' }}>
                            <img src={noData} alt="Empty state" />
                        </div>
                        <p className="van-empty__description">Empty</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestEmpty;