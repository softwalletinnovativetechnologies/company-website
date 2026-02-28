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
    <section className="py-16 bg-white border-t border-slate-200">
      <p className="text-center text-slate-500 uppercase tracking-widest text-sm mb-8">
        Trusted by innovative businesses
      </p>

      <Marquee gradient={false} speed={50}>
        {clients.map((client, index) => (
          <div
            key={index}
            className="mx-12 text-xl font-semibold text-slate-400"
          >
            {client}
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ClientsSlider;
