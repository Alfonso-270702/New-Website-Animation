import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2 } from "../../assets";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase.config";
import { Alert } from "./";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    status: "",
    message: "",
    isAlert: false,
  });

  const handleForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(`Typing: ${name} -> ${value}`); // 🔍 Debugging log
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!contactForm.email.trim()) {
      showAlert("Required fields cannot be empty", "warning");
      return;
    }

    try {
      await addDoc(collection(db, "messages"), contactForm);
      showAlert("Thanks for contacting me", "success");

      // Reset form setelah submit berhasil
      setContactForm({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      showAlert(`Error: ${error.message}`, "danger");
    }
  };

  // Fungsi untuk mengelola alert dengan timeout yang bersih
  const showAlert = (message: string, status: string) => {
    setAlert({ message, status, isAlert: true });

    setTimeout(() => {
      setAlert({ message: "", status: "", isAlert: false });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center flex-col gap-12 my-12"
    >
      {/* Toast Alert Notification */}
      <AnimatePresence>
        {alert.isAlert && (
          <Alert status={alert.status} message={alert.message} />
        )}
      </AnimatePresence>

      {/* Title */}
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Contact
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* Form */}
      <form
        onSubmit={submitForm}
        className="w-full flex flex-col items-center justify-start gap-4"
      >
        <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-[rgba(255,255,255,0.3)] focus:border-primary outline-none text-white"
              value={contactForm.firstName}
              onChange={handleForm}
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-[rgba(255,255,255,0.3)] focus:border-primary outline-none text-white"
              value={contactForm.lastName}
              onChange={handleForm}
            />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md bg-transparent border border-[rgba(255,255,255,0.3)] focus:border-primary outline-none text-white"
            value={contactForm.email}
            onChange={handleForm}
          />
          <textarea
            placeholder="Message here..."
            name="message"
            id="message"
            className="w-full px-4 py-3 rounded-md bg-transparent border border-[rgba(255,255,255,0.3)] focus:border-primary outline-none text-white"
            rows={10}
            value={contactForm.message}
            onChange={handleForm}
          />

          <div className="w-full flex items-center justify-center lg:justify-end">
            <button
              type="submit"
              className="px-12 py-3 bg-gradient-to-br from-primary to-secondary rounded-md w-full lg:w-auto hover:bg-gradient-to-r hover:from-black hover:to-black hover:border hover:border-primary hover:text-primary"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
