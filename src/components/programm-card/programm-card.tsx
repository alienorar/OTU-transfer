import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const tabs = ["Bakalavr", "Magistr"] as const;

type Program = {
  name: string;
  duration: number;
  price: number;
};

type Props = {
  programNames: string[];
  fullTimePrograms: Program[];
  partTimePrograms: Program[];
};

export default function Programs({
  programNames,
  fullTimePrograms,
  partTimePrograms,
}: Props) {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("Bakalavr");
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (name: string) => {
    setOpenItem((prev) => (prev === name ? null : name));
  };

  return (
    <div className="lg:px-20 lg:py-28 py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gray-100 py-5 px-6 rounded-xl"
      >
        {/* Tabs */}
        <div className="flex mb-4 gap-2">
          {tabs.map((tab) => (
            <motion.button
              layout
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenItem(null);
              }}
              whileTap={{ scale: 0.97 }}
              className={`px-6 py-2 rounded-md font-semibold transition-colors duration-300 ${
                activeTab === tab
                  ? "bg-white shadow text-[#050556]"
                  : "bg-transparent text-gray-500"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Accordions */}
        <div className="grid md:grid-cols-2 gap-3 items-start">
          {programNames.map((programName) => {
            const isOpen = openItem === programName;
            const fullTime = fullTimePrograms.find((p) => p.name === programName);
            const partTime = partTimePrograms.find((p) => p.name === programName);

            return (
              <motion.div
                key={programName}
                layout
                className="bg-white rounded-lg shadow px-4 py-3"
              >
                <button
                  onClick={() => toggleItem(programName)}
                  className="flex justify-between items-center w-full text-left font-medium text-[#050556]"
                >
                  {programName}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-2"
                  >
                    <FaChevronDown />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden mt-3 pt-3 space-y-4 text-sm"
                    >
                      {fullTime && (
                        <div className="flex flex-col text-gray-800 gap-1">
                          <div className="flex justify-between font-semibold text-[#050556]">
                            <span>Kunduzgi</span>
                            <span className="text-gray-500">
                              {fullTime.duration} yil
                            </span>
                          </div>
                          <div className="text-lg font-bold text-gray-800">
                            {fullTime.price.toLocaleString()} so'm
                          </div>
                        </div>
                      )}

                      {partTime && (
                        <div className="flex flex-col text-gray-800 gap-1 pt-2">
                          <div className="flex justify-between font-semibold text-[#050556]">
                            <span>Sirtqi</span>
                            <span className="text-gray-500">
                              {partTime.duration} yil
                            </span>
                          </div>

                          <div className="text-lg font-bold text-gray-800">
                            {partTime.price.toLocaleString()} so'm
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
