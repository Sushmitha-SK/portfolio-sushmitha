import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../context/ThemeContext";
import { getAnalytics, logEvent } from "firebase/analytics";
import { app } from "../firebase";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState("");
    const { theme } = useTheme();

    const analytics = getAnalytics(app);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    useEffect(() => {
        const section = document.getElementById("contact");
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        logEvent(analytics, "section_view", { section: "Contact" });
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, [analytics]);



    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");
        logEvent(analytics, "contact_form_submit");

        if (!serviceId || !templateId || !publicKey) {
            console.error("EmailJS environment variables are missing");
            setStatus("error");
            return;
        }

        emailjs
            .sendForm(serviceId, templateId, formRef.current!, publicKey)
            .then(
                () => {
                    setStatus("success");
                    formRef.current?.reset();
                },
                () => {
                    setStatus("error");
                }
            );
    };

    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className={`flex flex-col items-center text-sm pb-4 transition-colors duration-300 ${theme === "dark" ? "bg-darkModeGray" : "bg-gradient-to-br from-white to-blue-50"
                }`}
        >
            <div className="w-full flex-col justify-start items-center gap-2.5 flex my-20">
                <h2
                    id="contact-heading"
                    className={`text-center text-3xl font-bold leading-normal ${theme === "dark" ? "text-white" : "text-gray-800"
                        }`}
                >
                    Contact
                </h2>
                <p
                    className={`max-w-4xl mx-auto text-center text-md font-normal ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                >
                    Have a question or want to work together? Send a message below and
                    we’ll get back to you soon.
                </p>
            </div>

            <form
                ref={formRef}
                onSubmit={sendEmail}
                className="flex flex-col items-center gap-6 w-full max-w-2xl px-4"
                aria-describedby="form-status"
            >
                <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                    <div className="w-full">
                        <label
                            htmlFor="user_name"
                            className={`${theme === "dark" ? "text-gray-300" : "text-black/70"}`}
                        >
                            Your Name
                        </label>
                        <input
                            id="user_name"
                            name="user_name"
                            type="text"
                            placeholder="John Doe"
                            required
                            className={`h-12 p-2 mt-2 w-full border rounded-md outline-none focus:border-indigo-300 transition ${theme === "dark"
                                ? "bg-gray-900 border-gray-600 text-white"
                                : "bg-white border-gray-500/30 text-black"
                                }`}
                        />
                    </div>
                    <div className="w-full">
                        <label
                            htmlFor="user_email"
                            className={`${theme === "dark" ? "text-gray-300" : "text-black/70"}`}
                        >
                            Your Email
                        </label>
                        <input
                            id="user_email"
                            name="user_email"
                            type="email"
                            placeholder="you@example.com"
                            required
                            className={`h-12 p-2 mt-2 w-full border rounded-md outline-none focus:border-indigo-300 transition ${theme === "dark"
                                ? "bg-gray-900 border-gray-600 text-white"
                                : "bg-white border-gray-500/30 text-black"
                                }`}
                        />
                    </div>
                </div>

                <div className="w-full">
                    <label
                        htmlFor="message"
                        className={`${theme === "dark" ? "text-gray-300" : "text-black/70"}`}
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message here..."
                        required
                        className={`w-full mt-2 p-2 h-40 border rounded-md resize-none outline-none focus:border-indigo-300 transition ${theme === "dark"
                            ? "bg-gray-900 border-gray-600 text-white"
                            : "bg-white border-gray-500/30 text-black"
                            }`}
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "sending"}
                    className={`mt-5 h-12 w-56 px-4 mb-5 rounded active:scale-95 transition disabled:opacity-50 bg-darkBlue hover:bg-darkBlue-hover text-white`}
                >
                    {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                <div id="form-status" aria-live="polite">
                    {status === "success" && (
                        <p
                            className={`mt-4 ${theme === "dark" ? "text-green-400" : "text-green-600"
                                }`}
                        >
                            Message sent successfully!
                        </p>
                    )}
                    {status === "error" && (
                        <p
                            className={`mt-4 ${theme === "dark" ? "text-red-400" : "text-red-600"
                                }`}
                        >
                            Something went wrong. Please try again.
                        </p>
                    )}
                </div>
            </form>
        </section>
    );
};

export default Contact;
