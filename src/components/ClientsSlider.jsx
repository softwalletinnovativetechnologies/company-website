import Marquee from "react-fast-marquee";

const ClientsSlider = () => {
  const clients = [
    "TechNova",
    "CloudCore",
    "InnoSoft",
    "NextGen Labs",
    "StartupCo",
    "SoftTech",
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 blur-3xl"></div>

      <div className="relative z-10">
        <p
          className="text-center uppercase tracking-widest text-sm mb-12
        bg-gradient-to-r from-cyan-400 to-white
        bg-clip-text text-transparent font-semibold"
        >
          Trusted by innovative businesses
        </p>

        <Marquee gradient={false} speed={35} pauseOnHover>
          {clients.map((client, index) => (
            <div
              key={index}
              className="mx-10 px-8 py-4 rounded-xl
              bg-white/10 backdrop-blur-lg
              border border-cyan-400/20
              text-slate-200 font-semibold
              shadow-[0_0_20px_rgba(0,255,255,0.15)]
              hover:shadow-[0_0_40px_rgba(0,255,255,0.6)]
              hover:scale-105
              transition duration-300"
            >
              {client}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientsSlider;
