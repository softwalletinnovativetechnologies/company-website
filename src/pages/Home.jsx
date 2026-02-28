import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaRocket, FaShieldAlt, FaLightbulb, FaUsers } from "react-icons/fa";
import ClientsSlider from "../components/ClientsSlider";
import Footer from "../components/Footer";
const services = [
  {
    title: "Web Development",
    desc: "High-performance, scalable web applications tailored for your business growth.",
  },
  {
    title: "Software Solutions",
    desc: "Custom software solutions to streamline operations and enhance productivity.",
  },
  {
    title: "UI/UX Design",
    desc: "Modern and intuitive user experiences designed for engagement and conversion.",
  },
  {
    title: "Digital Transformation",
    desc: "Empowering businesses with innovative digital solutions and automation.",
  },
];

const features = [
  {
    icon: <FaRocket />,
    title: "Innovative Approach",
    desc: "We use modern technologies to build scalable and future-ready solutions.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Reliable & Secure",
    desc: "Security-first development ensuring safe and robust digital platforms.",
  },
  {
    icon: <FaLightbulb />,
    title: "Creative Solutions",
    desc: "Blending creativity with technology to craft unique business solutions.",
  },
  {
    icon: <FaUsers />,
    title: "Client-Centric Focus",
    desc: "We prioritize client needs and deliver tailored digital experiences.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 120, // neeche se aane ka effect
    scale: 0.9,
    rotateX: 25, // girne jaisa depth tilt
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const glassCard =
  "bg-white/15 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-10 transition-all duration-500 hover:shadow-indigo-500/30";

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="fixed inset-0 bg-cover bg-center animate-zoomSlow"
        style={{
          backgroundImage: "url('/src/assets/background/bg_img.png')",
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#02131a]/80 via-[#02131a]/60 to-white/70" />

      <div className="relative z-10">
        {/* HERO */}
        <section className="min-h-[90vh] flex items-center justify-center px-6 text-center">
          <div className="max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              Transforming Businesses with{" "}
              <span className="text-indigo-300">
                <Typewriter
                  words={[
                    "Innovative Solutions",
                    "Smart Technologies",
                    "Digital Excellence",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={2000}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-slate-200"
            >
              Softwallet Innovative Technologies delivers cutting-edge software,
              web, and digital solutions that empower businesses to innovate,
              scale, and succeed in the modern digital world.
            </motion.p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
              Our Premium Services
            </h2>
          </div>

          <div className="[perspective:1200px]">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -15, scale: 1.06, rotateY: 8 }}
                  className={`${glassCard} text-slate-100 min-h-[240px] flex flex-col justify-center`}
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-200 text-sm">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
              Why Choose Softwallet
            </h2>
          </div>

          <div className="[perspective:1200px]">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6"
            >
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -12, scale: 1.05, rotateY: -8 }}
                  className={`${glassCard} text-slate-100 min-h-[260px] flex flex-col justify-center`}
                >
                  <div className="text-blue-300 text-3xl mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-200 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
              Industries We Serve
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6"
          >
            {[
              "Healthcare",
              "Finance & Banking",
              "E-Commerce",
              "Education",
              "Real Estate",
              "Logistics",
              "Travel & Hospitality",
              "Startups & Enterprises",
            ].map((industry, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.05, rotateY: 6 }}
                className={`${glassCard} text-slate-100 min-h-[200px] flex items-center justify-center text-center`}
              >
                {industry}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section className="py-24 text-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Recent Projects
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6"
          >
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.05, rotateY: 6 }}
                className={`${glassCard} text-slate-100 min-h-[220px] flex flex-col justify-center`}
              >
                <h3 className="text-xl font-semibold mb-3">
                  Project Title {i + 1}
                </h3>
                <p className="text-slate-200 text-sm">
                  Innovative digital solution crafted to enhance business
                  performance and customer engagement.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
              What Our Clients Say
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6"
          >
            {[
              "Excellent service and support!",
              "Highly professional team!",
              "Amazing digital solutions!",
            ].map((review, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.05, rotateY: -6 }}
                className={`${glassCard} text-slate-100 min-h-[220px] flex flex-col justify-center`}
              >
                <p className="mb-4">"{review}"</p>
                <h4 className="font-semibold">Client {i + 1}</h4>
                <span className="text-sm text-slate-300">Business Owner</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-24 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto px-6"
          >
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business Digitally?
              </h2>
              <p className="text-indigo-100 mb-8">
                Partner with Softwallet Innovative Technologies to build
                scalable, secure, and future-ready digital solutions tailored to
                your goals.
              </p>
              <button className="px-10 py-4 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300">
                Get a Free Consultation
              </button>
            </div>
          </motion.div>
        </section>

        <ClientsSlider />
      </div>
    </div>
  );
};

export default Home;
