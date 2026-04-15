import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, X } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thanks for reaching out! We'll get back to you soon.");
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-neon-primary font-bold uppercase tracking-widest text-sm">
            Get in Touch
          </h2>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            Contact Our Cafe
          </h1>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Have a question about our menu, delivery, or want to book a large
            table? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-neon-primary/30 text-neon-primary rounded-2xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      Our Location
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Espresso Street, Coffee City, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-neon-primary/30 text-neon-primary rounded-2xl">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      Phone Number
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-neon-primary/30 text-neon-primary rounded-2xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      Email Address
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      hello@yourcafe.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-gray-100 dark:border-slate-800">
                <p className="font-bold text-gray-900 dark:text-white mb-4">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  {[X].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="p-3 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 rounded-full hover:bg-neon-primary hover:text-white transition-all"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Embedded Map Placeholder */}
            <div className="h-64 bg-gray-200 dark:bg-slate-800 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400 italic">
                <div className="h-64 bg-gray-200 dark:bg-slate-800 rounded-3xl overflow-hidden relative shadow-inner">
                  <iframe
                    title="Cafe Location"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1751.971876876368!2d85.69787180109991!3d20.164403568078693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1776249979654!5m2!1sen!2sin"
                    className="w-full h-full grayscale-[0.2] contrast-[1.1]"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-orange-500 outline-none transition-all dark:text-white"
                    placeholder="John Doe"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-orange-500 outline-none transition-all dark:text-white"
                    placeholder="john@example.com"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-orange-500 outline-none transition-all dark:text-white">
                  <option>General Inquiry</option>
                  <option>Table Reservation</option>
                  <option>Order Support</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-orange-500 outline-none transition-all dark:text-white"
                  placeholder="How can we help you?"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-neon-primary to-amber-500 text-white font-black rounded-xl hover:bg-neon-primary transform hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-lg shadow-orange-200 dark:shadow-none"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
