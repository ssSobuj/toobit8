import React from 'react';
import { useTranslation } from "react-i18next";

const IncomeTop = ({data}) => {
    const { t } = useTranslation();

    return (
        <div style={{ padding: '0 0.5rem' }}>
            <div className="quan-header-wrap" style={{ maxWidth: 600, margin: '0 auto' }}>
                <div
                    className="glass-card"
                    style={{
                        background: 'linear-gradient(120deg, rgba(1,50,168,0.18) 0%, rgba(45,225,163,0.10) 100%)',
                        borderRadius: 24,
                        boxShadow: '0 8px 32px 0 rgba(1,50,168,0.10)',
                        padding: '2rem 1.5rem',
                        position: 'relative',
                        overflow: 'hidden',
                        border: '1.5px solid rgba(90,108,255,0.10)'
                    }}
                >
                    {/* Top section */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="vip-level" style={{ background: 'rgba(90,108,255,0.10)', borderRadius: 12, padding: '0.25rem 1rem', fontWeight: 600, color: '#5a6cff', fontSize: 16 }}>
                            {t('vip')}-{data?.my_vip}
                        </div>
                        <div style={{ fontSize: 18, fontWeight: 700, color: '#0132A8', fontFamily: 'Poppins, Montserrat, Segoe UI, Arial, sans-serif' }}>
                            {t('quantitative_account')} {data?.authbal?.balance}
                        </div>
                    </div>

                    {/* Stats grid */}
                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.2rem 0.5rem' }}>
                        <div className="stat-card" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 18, fontWeight: 700, color: '#2de1a3', marginBottom: 4 }}>0.00</div>
                            <div style={{ fontSize: 13, color: '#7a7e9f' }}>{t('trial_fee')}</div>
                        </div>
                        <div className="stat-card" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 18, fontWeight: 700, color: '#2de1a3', marginBottom: 4 }}>{data?.todayTrad || 0}</div>
                            <div style={{ fontSize: 13, color: '#7a7e9f' }}>{t('profit_assets')}</div>
                        </div>
                        <div className="stat-card" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 18, fontWeight: 700, color: '#2de1a3', marginBottom: 4 }}>{data?.allIncomeToday || 0}</div>
                            <div style={{ fontSize: 13, color: '#7a7e9f' }}>{t('todays_earnings')}</div>
                        </div>
                        <div className="stat-card" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 18, fontWeight: 700, color: '#2de1a3', marginBottom: 4 }}>{data?.allIncomes || 0}</div>
                            <div style={{ fontSize: 13, color: '#7a7e9f' }}>{t('total_revenue')}</div>
                        </div>
                        <div className="stat-card" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 18, fontWeight: 700, color: '#2de1a3', marginBottom: 4 }}>{data?.totalDays || 0}</div>
                            <div style={{ fontSize: 13, color: '#7a7e9f' }}>{t('quantifiable_number_of_days')}</div>
                        </div>
                        <div className="stat-card" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 18, fontWeight: 700, color: '#2de1a3', marginBottom: 4 }}>{data?.leftdays || 0}</div>
                            <div style={{ fontSize: 13, color: '#7a7e9f' }}>{t('countdown_days')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncomeTop;