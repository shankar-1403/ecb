import Layout from "../components/Layout";
import { InfoIcon, Sparkles } from "lucide-react";
import pooja_dubey from "../assets/teamwebp/pooja_dubey.webp";
import puja_sharma from "../assets/teamwebp/puja_sharma.webp";
import bhatiasir_ from "../assets/teamwebp/bhatiasir_.webp";
import rameshkumar_img from "../assets/teamwebp/rameshkumar_img.webp";
import vijay_sharma from "../assets/teamwebp/vijay_sharma.webp";
import { motion } from "framer-motion";

const leadership = [
  {
    name: "Ramesh Kumar",
    role: "Chairman",
    img: rameshkumar_img,
  },
];

const team = [
  {
    name: "Vijay Sharma",
    img: vijay_sharma,
  },
  {
    name: "Pooja Dubey",
    img: pooja_dubey,
  },
  {
    name: "Ashwini Bhatia",
    img: bhatiasir_,
  },
  {
    name: "Puja Sharma",
    img: puja_sharma,
  },
];

function Team() {
  return (
    <Layout>

      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, hsl(24, 90%, 50%) 0%, transparent 45%), radial-gradient(circle at 80% 60%, hsl(145, 60%, 40%) 0%, transparent 45%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500 mb-4 mx-auto">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span className="text-sm font-semibold">Our Team</span>
          </div>

          <h1 className="mt-5 max-w-4xl mx-auto text-3xl font-bold text-[#1D2F4F] sm:text-4xl md:text-5xl lg:text-6xl">
            Meet the People Behind{" "}
            <span className="bg-linear-to-br from-amber-500 via-amber-600 to-green-600 bg-clip-text text-transparent">
              ECB
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-muted-foreground sm:text-lg">
            A collective of professionals supporting entrepreneurs and MSMEs across India.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-[#1D2F4F] text-center">
            Leadership
          </h2>

          <div className="mt-12 flex justify-center">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-10 items-center max-w-4xl group"
              >

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="relative"
                >
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-green-500 opacity-20 blur-lg group-hover:opacity-40 transition"></div>

                  <img
                    src={member.img}
                    alt={member.name}
                    className="relative w-full h-auto max-h-[300px] sm:max-h-[350px] md:h-80 md:max-h-none object-contain md:object-cover rounded-2xl shadow-lg"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="text-center md:text-left"
                >
                  <h3 className="text-2xl font-bold text-[#1D2F4F]">
                    {member.name}
                  </h3>

                  <p className="text-amber-600 font-semibold mt-1">
                    {member.role}
                  </p>

                  <p className="mt-4 text-muted-foreground text-sm sm:text-base">
                    A visionary leader guiding ECB to build a strong ecosystem for entrepreneurs and MSMEs.
                  </p>
                </motion.div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-[#F9FAFB]">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-[#1D2F4F]">
            Management Team
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group relative rounded-2xl bg-white shadow-md overflow-hidden transition hover:shadow-2xl hover:-translate-y-2"
              >

                <div className="overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-auto max-h-[220px] sm:max-h-[240px] md:h-64 md:max-h-none object-contain md:object-cover transition group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#1D2F4F] group-hover:text-amber-600 transition">
                    {member.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {member.role}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </Layout>
  );
}

export default Team;