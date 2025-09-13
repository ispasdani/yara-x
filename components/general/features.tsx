"use client";

import { FileText, MessageSquare, Search, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: FileText,
    title: "Automated Document Review",
    description:
      "AI-powered analysis of contracts, legal documents, and case files with intelligent highlighting and risk assessment.",
  },
  {
    icon: MessageSquare,
    title: "Legal AI Chat",
    description:
      "Interactive AI assistant trained on legal databases to provide instant answers and legal research support.",
  },
  {
    icon: Search,
    title: "Web Research Agent",
    description:
      "Comprehensive legal research across multiple databases, case law, and regulatory sources with citations.",
  },
  {
    icon: BookOpen,
    title: "Contract Template Library",
    description:
      "Extensive collection of legal templates with AI-powered customization and clause recommendations.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
      delay: 0.2,
    },
  },
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50 w-full">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          className="text-center mb-20 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-5xl md:text-6xl font-bold leading-tight font-serif text-foreground">
            Comprehensive Legal AI Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-3">
            Our integrated suite of AI tools transforms every aspect of legal
            work, from document analysis to research and contract management.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              // Pin hover/tap so nothing changes on interaction
              whileHover={{ scale: 1, y: 0 }}
              whileTap={{ scale: 1, y: 0 }}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center"
            >
              <motion.div
                className="w-16 h-16 bg-gray-900/5 rounded-2xl flex items-center justify-center mx-auto mb-6"
                variants={iconVariants}
              >
                <feature.icon className="h-8 w-8 text-foreground" />
              </motion.div>

              <motion.h3
                className="font-serif text-xl font-semibold text-foreground mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                viewport={{ once: false }}
              >
                {feature.title}
              </motion.h3>

              <motion.p
                className="text-base text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                viewport={{ once: false }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
