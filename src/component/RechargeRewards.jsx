import React from 'react';
import SingleHeader from './extra/SingleHeader';
import { useTranslation } from 'react-i18next';

const RechargeRewards = () => {
    const { t } = useTranslation();
    return (
        <div id="app" data-v-app="" className="a-t-30 no-1">
            <div className="van-config-provider" style={{ minHeight: "100vh" }}>
                <div data-v-f5703ed9="" className="box-border min-h-full w-full pt-45px">
                    <SingleHeader pageName={"Recharge Rewards"}></SingleHeader>
                    <div className="px-3 pb-30px">
                        <div
                            data-v-e98dae19=""
                            className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text mt-4"
                            style={{ direction: "ltr" }}
                        >
                            <h1 data-v-e98dae19="" className="mb-10px text-xl font-bold">
                                Invite Friends & Earn Generous Rewards ▷
                            </h1>
                            <div data-v-e98dae19="" className="mb-10px text-$text-gray">
                                Share your exclusive invitation link or code with friends and start earning instantly!
                            </div>
                            <div data-v-e98dae19="" className="rich-text text-base">
                                <p>
                                    Referral Reward Structure:
                                </p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p>Level 1: Earn 10% of your direct invitees’ deposits</p>
                                <p>Level 2: Earn 4% from deposits made by their invitees</p>
                                <p>Level 3: Earn 1% from the next level down</p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p>Example:</p>
                                <p>&nbsp;</p>
                                <p>You invite A, who deposits 1,000 USDT → You receive 100 USDT (10%)</p>
                                <p>A invites B, who deposits 1,000 USDT → You receive 40 USDT (4%)</p>
                                <p>B invites C, who deposits 1,000 USDT → You receive 10 USDT (1%)</p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p>The more your network grows, the more passive income you earn—automatically.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RechargeRewards;