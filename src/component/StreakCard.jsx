// StreakCard.jsx
import React from "react";

/**
 * StreakCard
 * - uses Bootstrap classes + inline styles
 * - blue theme, white text
 * - renders 1..100 reward boxes
 * - responsive: col-3 (xs ≈ 4/row), col-sm-2 (6/row), col-md-1 (12/row)
 */
export default function StreakCard({ current = 0, goal = 100 }) {
  const items = Array.from({ length: goal }, (_, i) => i + 1);

  // Inline style objects
  const outerStyle = {
    background: "rgba(10, 76, 255, 0.15)", // bluish translucent
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    borderRadius: 16,
    padding: 20,
    maxWidth: 720,
    width: "100%",
    boxShadow: "0 8px 30px rgba(10,30,60,0.18)",
    border: "1px solid rgba(10,76,255,0.18)",
    color: "#fff",
  };

  const infoBoxStyle = {
    background: "rgba(10, 76, 255, 0.2)",
    border: "1px solid rgba(10,76,255,0.28)",
    borderRadius: 12,
    padding: "10px 12px",
    marginBottom: 18,
    textAlign: "center",
    fontSize: 14,
  };

  const cellStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "12px 8px",
    borderRadius: 12,
    border: "1px solid rgba(10,76,255,0.22)",
    background: "rgba(7, 45, 150, 0.12)", // darker translucent blue
    color: "#fff",
    minHeight: 64,
    gap: 6,
  };

  const specialCellStyle = {
    ...cellStyle,
    background:
      "linear-gradient(180deg, rgba(10,76,255,0.18), rgba(3,37,160,0.12))",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
  };

  const btnStyle = {
    background: "linear-gradient(90deg, #2B6BFF 0%, #1E4EFF 100%)",
    border: "none",
    color: "#fff",
    fontWeight: 700,
    padding: "12px 18px",
    borderRadius: 14,
    width: "100%",
    fontSize: 18,
  };

  return (
    <div style={outerStyle} className="mx-auto">
      <h2
        style={{
          fontSize: 22,
          fontWeight: 700,
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        Current Streak: {current} / {goal} Days
      </h2>

      <div style={infoBoxStyle}>
        Claim daily to maintain your streak and earn bonuses. Missing a day will
        reset your progress.
      </div>

      <div className="container-fluid px-0">
        <div className="row g-2">
          {items.map((n) => {
            const isMilestone =
              // make some larger/highlighted ones (e.g., every 40th or every 10th)
              n === 40 || n === 80 || n === 100;
            return (
              <div
                key={n}
                className="col-3 col-sm-2 col-md-1 d-flex"
                // ensure the inner cell stretches equally
                style={{ alignItems: "stretch" }}
              >
                <div
                  style={isMilestone ? specialCellStyle : cellStyle}
                  className="w-100"
                >
                  <p style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>
                    {n}
                  </p>
                  <p style={{ margin: 0, fontSize: 12 }}>
                    {
                      // sample rewards: show 1 USDT for some milestone numbers to match original pattern
                      n === 40 || n === 80 || n === 100 ? "1 USDT" : "0.01 USDT"
                    }
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <button style={btnStyle} className="btn mt-2" disabled>
          Claim Daily Reward
        </button>
      </div>
    </div>
  );
}
