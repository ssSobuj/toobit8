import React from 'react';
import investPackage from "../../../assets/images/invest-package.webp"
import { Link } from 'react-router-dom';

const InvestPackageList = ({ price, dailyRate, cycle, packageName }) => {
    return (
        <div data-v-ede7987f="" className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text pt-8px!">
            <Link to="/invest-product/:id">
                <h3 data-v-ede7987f="" className="base-section-title mb-10px mb-10px">{packageName}</h3>
                <div data-v-ede7987f="" className="level-info">
                    <div data-v-ede7987f="" className="left">
                        <img
                            data-v-ede7987f=""
                            src={investPackage}
                            className="vip-img"
                            alt={packageName}
                        />
                    </div>
                    <div data-v-ede7987f="" className="right">
                        <div data-v-ede7987f="" className="item">
                            <div data-v-ede7987f="" className="title"><em data-v-ede7987f=""></em>Price</div>
                            <div data-v-ede7987f="" className="value">{price} USDT</div>
                        </div>
                        <div data-v-ede7987f="" className="item">
                            <div data-v-ede7987f="" className="title"><em data-v-ede7987f=""></em>Daily Rate</div>
                            <div data-v-ede7987f="" className="value c-green">{dailyRate}% </div>
                        </div>
                        <div data-v-ede7987f="" className="item">
                            <div data-v-ede7987f="" className="title"><em data-v-ede7987f=""></em>Cycle</div>
                            <div data-v-ede7987f="" className="value">{cycle} Day</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default InvestPackageList;