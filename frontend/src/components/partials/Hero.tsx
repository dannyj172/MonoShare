const Hero = () => {
  return (
    <main className="text-center mt-75 mb-100 z-10">
      {/* give sideways gradient which goes blue-none-blue-none-blue-none and then animate it to infinitely scroll sideways */}
      <div className="mb-20 relative">
        <div className="hero-glow" />
        <h1 className="text-5xl mb-3 z-10 blur-[0.3px] text-shadow-[0_0_10px_rgb(238_238_238/0.3)]">
          Your Shared Secret
        </h1>
        <h1 className="text-5xl font-bold text-(--main-light-blue) hero-text-glow z-10">
          Delivered. Viewed. Deleted.
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        <p className="text-(--gray) text-lg electrolize blur-[0.5px]">
          The safest choice for discrete information sharing.
        </p>

        <button className="main-btn">
          Begin{" "}
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </main>
  );
};

export default Hero;
