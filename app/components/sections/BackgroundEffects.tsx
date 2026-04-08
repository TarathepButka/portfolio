export function BackgroundEffects() {
  return (
    <>
      {/* Animated Grid Removed */}

      {/* Floating Orbs */}
      <div
        className="orb orb-white"
        style={{ width: 400, height: 400, top: "10%", left: "-10%" }}
      />
      <div
        className="orb orb-white"
        style={{
          width: 350,
          height: 350,
          top: "60%",
          right: "-8%",
          animationDelay: "3s",
        }}
      />
      <div
        className="orb orb-white"
        style={{
          width: 250,
          height: 250,
          top: "30%",
          right: "20%",
          animationDelay: "5s",
        }}
      />
    </>
  );
}
