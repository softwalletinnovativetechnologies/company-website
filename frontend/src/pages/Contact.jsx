import { motion } from "framer-motion";
import { useState } from "react";
import contactBg from "../assets/background/contact_bg.jpeg";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <div className="relative overflow-hidden text-white">
      {/* PREMIUM BACKGROUND */}

      <div
        className="fixed inset-0 bg-cover bg-center animate-zoomSlow -z-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* overlay for readability */}

      <div className="fixed inset-0 bg-gradient-to-b from-[#02131a]/70 via-[#02131a]/60 to-[#02131a]/80 -z-10"></div>

      {/* floating glow */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-400/20 blur-[120px] rounded-full animate-pulse"></div>

      <div className="relative z-10 py-32 px-6">
        {/* HERO */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
            Contact <span className="text-cyan-400">Softwallet</span>
          </h1>

          <p className="text-slate-300 mt-6 text-lg leading-relaxed">
            Have a project idea or a business inquiry? Our team at{" "}
            <span className="text-cyan-300 font-medium">
              Softwallet Innovative Technologies
            </span>{" "}
            is here to help. Reach out to us and let’s build something amazing
            together.
          </p>
        </motion.div>

        {/* CONTACT INFO CARDS */}

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-24">
          <ContactCard
            icon="📧"
            title="Email Us"
            text="info@softwalletinnovativetechnologies.cloud"
          />

          <ContactCard icon="📞" title="Call Us" text="+91 9596393658" />

          <ContactCard
            icon="📍"
            title="Our Location"
            text="Srinagar, Jammu & Kashmir, India"
          />
        </div>

        {/* FORM + MAP */}

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* FORM */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 rounded-3xl
            bg-white/10 backdrop-blur-2xl
            border border-white/20
            shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
          >
            <h2 className="text-3xl font-bold mb-8">Send a Message</h2>

            <form
              action="https://formsubmit.co/info@softwalletinnovativetechnologies.cloud"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* FormSubmit settings */}

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Contact Query" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_replyto" value="email" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl
                bg-white/20 border border-white/30
                placeholder:text-slate-300
                focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl
                bg-white/20 border border-white/30
                placeholder:text-slate-300
                focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-xl
                bg-white/20 border border-white/30
                placeholder:text-slate-300
                focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <button
                type="submit"
                className="px-8 py-4 rounded-full
                bg-gradient-to-r from-cyan-400 to-blue-500
                text-white font-semibold
                shadow-[0_0_20px_rgba(0,255,255,0.5)]
                hover:scale-110 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* MAP */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-3xl overflow-hidden
            border border-white/20
            shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <iframe
              src="https://www.google.com/maps?q=Srinagar%20Jammu%20and%20Kashmir&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>

      {/* SUCCESS POPUP */}

      {success && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-10 right-10
          bg-green-500 text-white
          px-6 py-4 rounded-xl
          shadow-xl"
        >
          Message sent successfully 🚀
        </motion.div>
      )}
    </div>
  );
};

const ContactCard = ({ icon, title, text }) => (
  <motion.div
    whileHover={{
      scale: 1.06,
      y: -10,
    }}
    className="relative group p-[1px] rounded-3xl
    bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500
    shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
  >
    <div
      className="p-10 rounded-3xl text-center
      bg-[#0f172a]/80 backdrop-blur-xl
      border border-white/10"
    >
      <div
        className="w-16 h-16 mx-auto mb-6 flex items-center justify-center
        rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500
        text-3xl shadow-[0_0_20px_rgba(0,255,255,0.5)]"
      >
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>

      <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
    </div>
  </motion.div>
);

export default Contact;
