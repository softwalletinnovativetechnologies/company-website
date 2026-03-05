import { motion } from "framer-motion";
import { useState } from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 100, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Services = () => {
  const [popup, setPopup] = useState(false);

  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote / Srinagar, India",
      type: "Full-Time",
      desc: "Build modern web interfaces using React.js, Tailwind CSS, and RESTful APIs.",
    },
    {
      title: "Backend Developer",
      location: "Remote / Srinagar, India",
      type: "Full-Time",
      desc: "Develop scalable APIs and microservices using Node.js or Django.",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Contract",
      desc: "Design intuitive and user-friendly experiences for mobile and web.",
    },
    {
      title: "Digital Marketing Specialist",
      location: "Srinagar, India",
      type: "Full-Time",
      desc: "Plan and execute SEO, social media, and paid advertising campaigns.",
    },
    {
      title: "Robotics Engineer",
      location: "Remote / Srinagar, India",
      type: "Full-Time",
      desc: "Develop cutting-edge robotic systems and automation technologies.",
    },
    {
      title: "Artificial Intelligence Specialist",
      location: "Remote / Srinagar, India",
      type: "Full-Time",
      desc: "Design and implement intelligent AI systems and machine learning models.",
    },
  ];

  return (
    <div className="relative overflow-hidden text-white">
      {/* PREMIUM BACKGROUND */}
      <div
        className="fixed inset-0 bg-cover bg-center animate-zoomSlow -z-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      <div className="fixed inset-0 bg-gradient-to-b from-[#02131a]/80 via-[#02131a]/70 to-[#02131a]/90" />

      {/* FLOATING LIGHTS */}
      <div className="absolute top-24 left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-24 right-20 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative z-10 py-32 px-6">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto mb-32"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-cyan-400">Services</span>
          </h1>

          <p className="text-slate-300 text-lg">
            We deliver innovative software solutions, modern web applications,
            and advanced digital technologies that empower businesses to scale,
            innovate, and succeed in the digital era.
          </p>
        </motion.div>

        {/* SERVICES DIAGRAM */}
        <section className="py-32 text-center relative">
          <h2 className="text-5xl font-bold mb-24 tracking-wide">EXPERTISE</h2>

          {/* horizontal line */}
          <div className="absolute left-0 right-0 top-[140px] h-[2px] bg-cyan-400/40"></div>

          <div className="flex flex-wrap justify-center gap-20 max-w-6xl mx-auto">
            {[
              { icon: "💻", title: "Web Development" },
              { icon: "⚙️", title: "Software Solutions" },
              { icon: "🤖", title: "AI & Automation" },
              { icon: "🎨", title: "UI/UX Design" },
              { icon: "🚀", title: "Digital Transformation" },
              { icon: "☁️", title: "Cloud & DevOps" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center relative"
              >
                {/* vertical connector */}
                <div className="w-[2px] h-16 bg-cyan-400/50"></div>

                {/* icon circle */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center
bg-gradient-to-br from-cyan-500 to-blue-600
shadow-[0_0_25px_rgba(0,255,255,0.6)]
text-3xl"
                >
                  {item.icon}
                </div>

                <p className="mt-6 text-slate-200 font-medium">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CURRENT OPENINGS */}
        <section className="py-24">
          <h2 className="text-4xl font-bold text-center mb-20">
            Current Openings
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto"
          >
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                variants={card}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  rotateX: 6,
                  rotateY: -6,
                }}
                className="relative p-8 rounded-3xl text-white
bg-gradient-to-br from-[#0f2027]/80 via-[#203a43]/80 to-[#2c5364]/80
backdrop-blur-xl border border-cyan-400/30
shadow-[0_0_40px_rgba(0,255,255,0.15)]
transition-all duration-500
hover:shadow-[0_0_60px_rgba(0,255,255,0.4)]
hover:border-cyan-400/60"
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                  {job.title}
                </h3>

                <p className="text-sm text-slate-300 mb-1">
                  <b>Location:</b> {job.location}
                </p>

                <p className="text-sm text-slate-300 mb-3">
                  <b>Type:</b> {job.type}
                </p>

                <p className="text-sm text-slate-300 mb-6">{job.desc}</p>

                <button
                  onClick={() => setPopup(true)}
                  className="px-7 py-3 rounded-full font-medium
bg-gradient-to-r from-cyan-400 to-blue-500
shadow-[0_0_20px_rgba(0,255,255,0.6)]
hover:shadow-[0_0_40px_rgba(0,255,255,0.9)]
hover:scale-105 transition duration-300"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* SEND RESUME */}
        <section className="text-center py-24">
          <h2 className="text-3xl font-semibold mb-6">
            Don’t see a role that fits?
          </h2>

          <p className="text-slate-300 mb-10">
            We’re always looking for talented people. Send your resume and we’ll
            contact you when a relevant opportunity opens.
          </p>

          <button
            onClick={() => setPopup(true)}
            className="px-10 py-4 rounded-full
            bg-gradient-to-r from-cyan-400 to-blue-500
            shadow-[0_0_30px_rgba(0,255,255,0.6)]
            hover:scale-110 transition"
          >
            Send Resume
          </button>
        </section>

        {/* POPUP */}
        {popup && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-10 text-center max-w-md text-black">
              <h3 className="text-xl font-semibold mb-4">Apply for Position</h3>

              <p className="mb-6">
                Send your resume at
                <br />
                <b>info@softwalletinnovativetechnologies.cloud</b>
              </p>

              <button
                onClick={() => setPopup(false)}
                className="px-6 py-3 bg-cyan-600 text-white rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
