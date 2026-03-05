import { motion } from "framer-motion";
import { FaRocket, FaShieldAlt, FaLightbulb, FaUsers } from "react-icons/fa";
import ClientsSlider from "../components/ClientsSlider";
import HexCard from "../components/HexCard";
import TimelineItem from "../components/TimelineItem";
import TestimonialCard from "../components/TestimonialCard";
import HexIndustry from "../components/HexIndustry";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const goToServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const goToIndustries = () => {
    document.getElementById("industries")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="relative overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="fixed inset-0 bg-cover bg-center animate-zoomSlow"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b')",
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#02131a]/80 via-[#02131a]/60 to-white/70" />

      <div className="relative z-10">
        {/* HERO */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-40">
          {/* HERO TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
              DIGITAL <span className="text-cyan-400">BACKBONE</span>
            </h1>

            <p className="mt-3 text-lg text-gray-300">
              Engineering smart software solutions that power innovation,
              accelerate growth, and shape the digital future.{" "}
            </p>

            <button className="mt-8 px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </motion.div>

          {/* HEXAGON GRID */}
          {/* HEXAGON GRID */}
          <div className="mt-24 flex flex-col items-center gap-6">
            <div className="flex gap-8">
              <HexCard title="About Us" onClick={() => navigate("/about")} />

              <HexCard
                title="Job Openings"
                onClick={() => navigate("/services")}
              />

              <HexCard title="Services" onClick={goToServices} />
            </div>

            <div className="flex gap-8 -mt-10">
              <HexCard title="Industries we serve" onClick={goToIndustries} />

              <HexCard
                title="Contact Us"
                onClick={() => navigate("/contact")}
              />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
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
        <section className="py-32 text-white relative">
          <h2 className="text-4xl font-bold text-center mb-24">
            Why Choose Softwallet
          </h2>

          <div className="relative max-w-5xl mx-auto">
            {/* CENTER LINE */}

            <div
              className="absolute left-1/2 top-0 h-full w-[3px] 
bg-gradient-to-br from-[#0f2027]/80 via-[#203a43]/80 to-[#2c5364]/80
      backdrop-blur-xl border border-cyan-400/30
      shadow-xl group-hover:shadow-cyan-400/60
-translate-x-1/2"
            ></div>

            <div className="space-y-24">
              <TimelineItem
                title="Innovative Approach"
                text="We use modern technologies to build scalable and future-ready solutions."
                side="left"
              />

              <TimelineItem
                title="Reliable & Secure"
                text="Security-first development ensuring safe and robust digital platforms."
                side="right"
              />

              <TimelineItem
                title="Creative Solutions"
                text="Blending creativity with technology to craft unique business solutions."
                side="left"
              />

              <TimelineItem
                title="Client-Centric Focus"
                text="We prioritize client needs and deliver tailored digital experiences."
                side="right"
              />
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section
          id="industries"
          className="py-32 text-white text-center relative overflow-hidden"
        >
          <h2 className="text-4xl font-bold mb-20">Industries We Serve</h2>

          {/* floating container animation */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-6"
          >
            {/* Row 1 */}
            <div className="flex gap-6">
              <HexIndustry icon="🏛️" title="Government" delay={0} />
              <HexIndustry icon="🛍️" title="Retail" delay={0.1} />
              <HexIndustry icon="🏥" title="Healthcare" delay={0.2} />
            </div>

            {/* Row 2 */}
            <div className="flex gap-6 -mt-10">
              <HexIndustry icon="🎭" title="Entertainment" delay={0.3} />
              <HexIndustry icon="🏨" title="Hotel" delay={0.4} />
              <HexIndustry icon="📡" title="Telecom" delay={0.5} />
              <HexIndustry icon="🍽️" title="Restaurants" delay={0.6} />
            </div>

            {/* Row 3 */}
            <div className="flex gap-6 -mt-10">
              <HexIndustry icon="⚽" title="Sports" delay={0.7} />
              <HexIndustry icon="🏦" title="Banking" delay={0.8} />
              <HexIndustry icon="💻" title="Technology" delay={0.9} />
            </div>
          </motion.div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-32 text-white text-center overflow-hidden">
          <h2 className="text-4xl font-bold mb-20">What Our Clients Say</h2>

          <div className="relative w-full overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
              className="flex gap-10 w-max"
            >
              <TestimonialCard
                name="Rahul Sharma"
                role="CEO, TechNova Solutions"
                text="Softwallet transformed our entire digital infrastructure. Their development team delivered a highly scalable platform that significantly improved our performance."
              />

              <TestimonialCard
                name="Ayesha Khan"
                role="Founder, UrbanCart"
                text="The UI/UX design and development quality exceeded our expectations. Our customers now enjoy a seamless and modern shopping experience."
              />

              <TestimonialCard
                name="Michael Johnson"
                role="Director, FinCore Banking"
                text="Their security-first approach gave us confidence to launch our fintech platform. Professional team with deep technical expertise."
              />

              <TestimonialCard
                name="David Lee"
                role="CTO, GlobalTech Systems"
                text="Outstanding service and timely delivery. Softwallet helped us implement advanced automation tools that boosted operational efficiency."
              />

              <TestimonialCard
                name="Sophia Martinez"
                role="Product Manager, NextWave Digital"
                text="Working with Softwallet was a great experience. Their innovative solutions helped us scale faster and reach new markets."
              />
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 flex justify-center items-center relative overflow-hidden">
          {/* background glow */}
          <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl w-full px-10 py-16 rounded-3xl
bg-gradient-to-br from-[#0f2027]/90 via-[#203a43]/90 to-[#2c5364]/90
border border-cyan-400/30
shadow-[0_0_60px_rgba(0,255,255,0.25)]
backdrop-blur-xl text-center"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6
bg-gradient-to-r from-cyan-300 to-white
bg-clip-text text-transparent"
            >
              Ready to Transform Your Business Digitally?
            </h2>

            <p className="text-slate-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Partner with Softwallet Innovative Technologies to build scalable,
              secure, and future-ready digital solutions tailored to your goals.
            </p>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full font-semibold
bg-gradient-to-r from-cyan-400 to-blue-500
text-white
shadow-[0_0_25px_rgba(0,255,255,0.6)]
hover:shadow-[0_0_50px_rgba(0,255,255,0.9)]
transition duration-300"
            >
              Get a Free Consultation
            </motion.button>
          </motion.div>
        </section>

        <ClientsSlider />
      </div>
    </div>
  );
};

export default Home;
