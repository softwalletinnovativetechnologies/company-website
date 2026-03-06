import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AIRegister = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:5000/api/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
          }),
        },
      );

      const order = await res.json();

      const options = {
        key: "rzp_test_SF9gQqBJH2B5mx",

        amount: order.amount,

        currency: "INR",

        name: "Softwallet Innovative Technologies",

        description: "AI Certification Exam",

        order_id: order.id,

        handler: async function (response) {
          await fetch("http://localhost:5000/api/payment/payment-success", {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              name: form.name,
              email: form.email,
              phone: form.phone,
              qualification: form.qualification,
              message: form.message,
              paymentId: response.razorpay_payment_id,
            }),
          });

          alert("Payment Successful & Registration Completed 🚀");

          navigate("/");
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.open();
    } catch (err) {
      console.log(err);

      alert("Payment Failed");
    }
  };

  return (
    <div className="relative overflow-hidden text-white">
      <div
        className="fixed inset-0 bg-cover bg-center animate-zoomSlow"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b')",
        }}
      />

      <div className="fixed inset-0 bg-gradient-to-b from-[#02131a]/80 via-[#02131a]/60 to-[#02131a]/90"></div>

      <div className="relative z-10 py-32 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-12 rounded-3xl
bg-white/10 backdrop-blur-xl
border border-white/20
shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          <h1 className="text-5xl font-bold mb-10 text-cyan-400">
            Register for AI Exam
          </h1>

          <form onSubmit={handlePayment} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/20 border border-white/30"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/20 border border-white/30"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/20 border border-white/30"
            />

            <input
              type="text"
              name="qualification"
              placeholder="Qualification"
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/20 border border-white/30"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about your interest in AI"
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/20 border border-white/30"
            />

            <button
              type="submit"
              className="px-10 py-4 rounded-full
bg-gradient-to-r from-cyan-400 to-blue-500
font-semibold
shadow-[0_0_25px_rgba(0,255,255,0.5)]
hover:scale-105 transition"
            >
              Pay 1000 & Register Now
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AIRegister;
