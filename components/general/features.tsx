"use client";

import { FileText, MessageSquare, Search, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguageData } from "@/hooks/useLanguageData";
import type { LanguageData } from "@/types/languageDataTypes";

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

const DEFAULT_MAIN_FEATURES: LanguageData["public"]["mainFeatures"] = {
  mainFeaturesTitle: { title: "Comprehensive Legal AI Platform" },
  mainFeaturesDescription: {
    title:
      "Our integrated suite of AI tools transforms every aspect of legal work, from document analysis to research and contract management.",
  },
  featureOneTitle: { title: "Automated Document Review" },
  featureOneDescription: {
    title:
      "AI-powered analysis of contracts, legal documents, and case files with intelligent highlighting and risk assessment.",
  },
  featureTwoTitle: { title: "Legal AI Chat" },
  featureTwoDescription: {
    title:
      "Interactive AI assistant trained on legal databases to provide instant answers and legal research support.",
  },
  featureThreeTitle: { title: "Web Research Agent" },
  featureThreeDescription: {
    title:
      "Comprehensive legal research across multiple databases, case law, and regulatory sources with citations.",
  },
  featureFourTitle: { title: "Contract Template Library" },
  featureFourDescription: {
    title:
      "Extensive collection of legal templates with AI-powered customization and clause recommendations.",
  },
};

const Features = () => {
  const { langData } = useLanguageData();
  const t = langData?.public.mainFeatures ?? DEFAULT_MAIN_FEATURES;

  const features = [
    {
      icon: FileText,
      title: t.featureOneTitle.title,
      description: t.featureOneDescription.title,
    },
    {
      icon: MessageSquare,
      title: t.featureTwoTitle.title,
      description: t.featureTwoDescription.title,
    },
    {
      icon: Search,
      title: t.featureThreeTitle.title,
      description: t.featureThreeDescription.title,
    },
    {
      icon: BookOpen,
      title: t.featureFourTitle.title,
      description: t.featureFourDescription.title,
    },
  ];

  return (
    <section
      id="features"
      className="py-24 w-full"
      style={{ backgroundColor: "var(--muted)" }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          className="text-center mb-20 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
            {t.mainFeaturesTitle.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-3">
            {t.mainFeaturesDescription.title}
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
              className="border rounded-xl p-8 text-center"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "var(--muted)" }}
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
