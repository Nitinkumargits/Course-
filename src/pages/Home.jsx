import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Play,
  Star,
  Users,
  Clock,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Award,
  Sparkles,
  Zap,
  Target,
  BookOpen,
} from "lucide-react";
import { courses } from "../data/courses";
import MagneticButton from "../components/MagneticButton";
import MorphingShapes from "../components/MorphingShapes";
import RevealAnimation from "../components/RevealAnimation";
import GSAPParallaxContainer from "../components/GSAPParallaxContainer";
import GSAPTextReveal from "../components/GSAPTextReveal";
import GSAPWordAnimation from "../components/GSAPWordAnimation";
import GSAPImageParallax from "../components/GSAPImageParallax";
import GSAPHeroAnimation from "../components/GSAPHeroAnimation";
import GSAPAdvancedText from "../components/GSAPAdvancedText";
import GSAPButtonAnimation from "../components/GSAPButtonAnimation";

const Home = () => {
  const featuredCourses = courses.slice(0, 3);
  const { scrollY } = useScroll();

  // Parallax transforms
  const heroY = useTransform(scrollY, [0, 500], [0, -150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -300]);
  const floatingElementsY = useTransform(scrollY, [0, 800], [0, -200]);

  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Students",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BookOpen,
      value: "200+",
      label: "Courses",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      value: "98%",
      label: "Success Rate",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support",
      color: "from-orange-500 to-red-500",
    },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: CheckCircle,
      title: "Lifetime Access",
      description: "Get lifetime access to all course materials and updates",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Earn industry-recognized certificates upon completion",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: Users,
      title: "Community Support",
      description:
        "Join our vibrant community of learners and get peer support",
      color: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <GSAPParallaxContainer className="min-h-screen">
      {/* Hero Section with Enhanced GSAP Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        {/* Morphing Background Shapes with GSAP Parallax */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0"
          data-parallax="0.3"
          data-direction="up">
          <MorphingShapes />
        </motion.div>

        {/* Floating Elements with GSAP Parallax */}
        <motion.div
          style={{ y: floatingElementsY }}
          className="absolute inset-0 pointer-events-none"
          data-parallax="0.5"
          data-direction="up">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 text-blue-400 opacity-30">
            <Sparkles size={40} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-1/3 right-1/3 text-purple-400 opacity-30">
            <Zap size={35} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-1/3 left-1/3 text-green-400 opacity-30">
            <Target size={30} />
          </motion.div>
        </motion.div>

        {/* Hero Content with Enhanced GSAP Animations */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GSAPHeroAnimation>
            <div className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight text-center">
              <GSAPAdvancedText
                text="Learn Without Limits"
                className="block text-center"
                delay={0.2}
                duration={1.2}
                stagger={0.15}
                direction="up"
                effect="elastic"
              />
            </div>

            <p className="hero-description text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Master new skills with our comprehensive online courses. Learn
              from industry experts and advance your career.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
              <GSAPButtonAnimation delay={1.2} effect="bounce">
                <MagneticButton intensity={0.4} scale={1.05}>
                  <Link to="/courses">
                    <button
                      className="hero-button inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg backdrop-blur-sm"
                      data-cursor="pointer"
                      data-cursor-text="Explore Courses">
                      <BookOpen className="mr-2" size={20} />
                      Browse Courses
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                  </Link>
                </MagneticButton>
              </GSAPButtonAnimation>

              <GSAPButtonAnimation delay={1.4} effect="elastic">
                <MagneticButton intensity={0.3} scale={1.05}>
                  <button
                    className="hero-button inline-flex items-center px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500 transition-all duration-300 shadow-lg"
                    data-cursor="pointer"
                    data-cursor-text="Watch Demo">
                    <Play className="mr-2" size={20} />
                    Watch Demo
                  </button>
                </MagneticButton>
              </GSAPButtonAnimation>
            </div>
          </GSAPHeroAnimation>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section with Creative GSAP Animations */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
        {/* Dynamic Multi-Layer Background */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 1000], [0, -200]) }}
          className="absolute inset-0"
          data-parallax="0.1"
          data-direction="up">
          {/* Large morphing shapes with blue theme */}
          <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full mix-blend-multiply blur-3xl animate-blob" />
          <div className="absolute bottom-1/3 right-1/6 w-88 h-88 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/30 to-blue-400/30 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-4000" />
        </motion.div>

        {/* Floating Geometric Patterns */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 800], [0, -150]) }}
          className="absolute inset-0 pointer-events-none"
          data-parallax="0.2"
          data-direction="up">
          {/* Animated geometric shapes */}
          <motion.div
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360, 720],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/6 left-1/8 w-24 h-24 border-4 border-blue-400/50 rounded-3xl rotate-45"
          />
          <motion.div
            animate={{
              y: [0, 35, 0],
              rotate: [0, -180, -360],
              scale: [1, 0.6, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-1/4 right-1/8 w-20 h-20 bg-purple-400/40 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 90, 180],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "sine.inOut",
              delay: 4,
            }}
            className="absolute bottom-1/5 left-1/6 w-28 h-28 border-4 border-indigo-400/50 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 38, 0],
              rotate: [0, -270, -540],
              scale: [1, 0.7, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/4 right-1/6 w-22 h-22 bg-pink-400/40 transform rotate-45"
          />
        </motion.div>

        {/* Floating Icon System */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 600], [0, -120]) }}
          className="absolute inset-0 pointer-events-none"
          data-parallax="0.3"
          data-direction="up">
          <motion.div
            animate={{
              y: [0, -35, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "sine.inOut",
            }}
            className="absolute top-1/5 left-1/6 text-blue-400 opacity-35">
            <Sparkles size={48} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -8, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "sine.inOut",
              delay: 1.5,
            }}
            className="absolute top-1/3 right-1/4 text-purple-400 opacity-35">
            <Zap size={44} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 6, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "sine.inOut",
              delay: 3,
            }}
            className="absolute bottom-1/4 left-1/4 text-indigo-400 opacity-35">
            <Target size={40} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 32, 0],
              rotate: [0, -5, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "sine.inOut",
              delay: 2.5,
            }}
            className="absolute bottom-1/3 right-1/5 text-pink-400 opacity-35">
            <Star size={36} />
          </motion.div>
        </motion.div>

        {/* Particle System */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 400], [0, -80]) }}
          className="absolute inset-0 pointer-events-none"
          data-parallax="0.4"
          data-direction="up">
          {[...Array(18)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -60, 0],
                x: [0, Math.sin(i * 0.3) * 30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.4, 1.2, 0.4],
              }}
              transition={{
                duration: 7 + i * 0.2,
                repeat: Infinity,
                ease: "sine.inOut",
                delay: i * 0.15,
              }}
              className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              style={{
                left: `${5 + i * 5}%`,
                top: `${10 + i * 3}%`,
              }}
            />
          ))}
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}>
            {/* Animated title with gradient */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true }}>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Our Impact
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">in Numbers</span>
            </motion.h2>

            {/* Animated subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}>
              Join thousands of learners who have transformed their careers with
              our comprehensive courses
            </motion.p>

            {/* Decorative elements */}
            <motion.div
              className="flex justify-center items-center mt-8 space-x-4"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}>
              <motion.div
                className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"
                animate={{
                  scaleX: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="w-16 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                animate={{
                  scaleX: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative text-center"
                initial={{ opacity: 0, y: 100, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -20,
                  rotateY: 5,
                  scale: 1.05,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}>
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[3px]">
                  <div className="w-full h-full bg-white/90 dark:bg-gray-800/90 rounded-3xl"></div>
                </div>

                {/* Floating background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                <div className="relative z-10 p-8">
                  {/* Enhanced icon with 3D effects */}
                  <motion.div
                    className={`relative inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-r ${stat.color} mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 15,
                      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}>
                    {/* Icon glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <stat.icon className="text-white relative z-10" size={36} />

                    {/* Floating particles around icon */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-400 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.9, 0.5],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3 + 0.5,
                      }}
                    />
                  </motion.div>

                  {/* Enhanced value with counter animation */}
                  <motion.h3
                    className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1 + 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}>
                    {stat.value}
                  </motion.h3>

                  {/* Enhanced label */}
                  <motion.p
                    className="text-gray-600 dark:text-gray-400 font-medium text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                    viewport={{ once: true }}>
                    {stat.label}
                  </motion.p>

                  {/* Animated progress indicator */}
                  <motion.div
                    className="mt-6 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.9 }}
                    viewport={{ once: true }}>
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 2, delay: index * 0.1 + 1.1 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>

                  {/* Floating accent elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full"
                    animate={{
                      scale: [1, 1.6, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3 + 1,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Creative GSAP Animations */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 dark:from-gray-900 dark:via-emerald-900 dark:to-teal-900 relative overflow-hidden">
        {/* Dynamic Multi-Layer Background */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 1200], [0, -250]) }}
          className="absolute inset-0"
          data-parallax="0.08"
          data-direction="up">
          {/* Large morphing shapes with green theme */}
          <div className="absolute top-1/4 left-1/8 w-80 h-80 bg-gradient-to-r from-emerald-400/25 to-teal-400/25 rounded-full mix-blend-multiply blur-3xl animate-blob" />
          <div className="absolute bottom-1/3 right-1/8 w-96 h-96 bg-gradient-to-r from-cyan-400/25 to-blue-400/25 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-green-400/25 to-emerald-400/25 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-4000" />
        </motion.div>

        {/* Floating Geometric Patterns */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 1000], [0, -180]) }}
          className="absolute inset-0 pointer-events-none"
          data-parallax="0.25"
          data-direction="up">
          {/* Animated geometric shapes */}
          <motion.div
            animate={{
              y: [0, -35, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/6 left-1/6 w-20 h-20 border-3 border-emerald-400/40 rounded-2xl rotate-45"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -90, -180],
              scale: [1, 0.7, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-1/4 right-1/6 w-16 h-16 bg-teal-400/30 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, -28, 0],
              rotate: [0, 45, 90],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "sine.inOut",
              delay: 4,
            }}
            className="absolute bottom-1/5 left-1/4 w-24 h-24 border-3 border-cyan-400/40 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 32, 0],
              rotate: [0, -135, -270],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/4 right-1/4 w-18 h-18 bg-green-400/30 transform rotate-45"
          />
        </motion.div>

        {/* Floating Icon System */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 800], [0, -120]) }}
          className="absolute inset-0 pointer-events-none"
          data-parallax="0.35"
          data-direction="up">
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 8, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "sine.inOut",
            }}
            className="absolute top-1/5 left-1/5 text-emerald-400 opacity-30">
            <BookOpen size={40} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 25, 0],
              rotate: [0, -6, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "sine.inOut",
              delay: 1.5,
            }}
            className="absolute top-1/3 right-1/4 text-teal-400 opacity-30">
            <Target size={36} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -22, 0],
              rotate: [0, 5, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "sine.inOut",
              delay: 3,
            }}
            className="absolute bottom-1/4 left-1/3 text-cyan-400 opacity-30">
            <Zap size={32} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 28, 0],
              rotate: [0, -4, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "sine.inOut",
              delay: 2.5,
            }}
            className="absolute bottom-1/3 right-1/5 text-green-400 opacity-30">
            <Star size={28} />
          </motion.div>
        </motion.div>

        {/* Particle System */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 600], [0, -100]) }}
          className="absolute inset-0 pointer-events-none"
          data-parallax="0.45"
          data-direction="up">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.sin(i * 0.5) * 25, 0],
                opacity: [0.2, 0.7, 0.2],
                scale: [0.3, 1.1, 0.3],
              }}
              transition={{
                duration: 6 + i * 0.3,
                repeat: Infinity,
                ease: "sine.inOut",
                delay: i * 0.2,
              }}
              className="absolute w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
              style={{
                left: `${8 + i * 6}%`,
                top: `${15 + i * 4}%`,
              }}
            />
          ))}
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}>
            {/* Animated title with gradient */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true }}>
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Why Choose
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Our Platform?
              </span>
            </motion.h2>

            {/* Animated subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}>
              Experience the future of online education with our cutting-edge
              platform and innovative learning technologies
            </motion.p>

            {/* Decorative elements */}
            <motion.div
              className="flex justify-center items-center mt-8 space-x-4"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}>
              <motion.div
                className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
                animate={{
                  scaleX: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                animate={{
                  scaleX: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 100, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -15,
                  rotateY: 5,
                  scale: 1.02,
                  boxShadow: "0 40px 80px rgba(16, 185, 129, 0.3)",
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}>
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
                  <div className="w-full h-full bg-white/90 dark:bg-gray-800/90 rounded-3xl"></div>
                </div>

                {/* Floating background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-900/20 dark:to-teal-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                <div className="relative z-10">
                  {/* Enhanced icon with 3D effects */}
                  <motion.div
                    className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 10,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}>
                    {/* Icon glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <feature.icon
                      className="text-white relative z-10"
                      size={32}
                    />

                    {/* Floating particles around icon */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    />
                  </motion.div>

                  {/* Enhanced title with typewriter effect */}
                  <motion.h3
                    className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}>
                    {feature.title}
                  </motion.h3>

                  {/* Enhanced description */}
                  <motion.p
                    className="text-gray-600 dark:text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.7 }}
                    viewport={{ once: true }}>
                    {feature.description}
                  </motion.p>

                  {/* Animated progress indicator */}
                  <motion.div
                    className="mt-6 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.9 }}
                    viewport={{ once: true }}>
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 1.1 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>

                  {/* Floating accent elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-1 h-1 bg-teal-400 rounded-full"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3 + 1,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section with Creative GSAP Animations */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 relative overflow-hidden">
        {/* Dynamic Background with Multiple Layers */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 1400], [0, -300]) }}
          className="absolute inset-0"
          data-parallax="0.05"
          data-direction="up">
          {/* Large morphing shapes */}
          <div className="absolute top-1/4 right-1/6 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full mix-blend-multiply blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-4000" />
        </motion.div>

        {/* Floating Geometric Shapes */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 1200], [0, -200]) }}
          className="absolute inset-0 pointer-events-none"
          data-parallax="0.3"
          data-direction="up">
          {/* Animated geometric shapes */}
          <motion.div
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/6 right-1/8 w-16 h-16 border-2 border-indigo-400/30 rounded-lg rotate-45"
          />
          <motion.div
            animate={{
              y: [0, 35, 0],
              rotate: [0, -180, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            className="absolute top-1/3 left-1/8 w-12 h-12 bg-violet-400/20 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 90, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "sine.inOut",
              delay: 6,
            }}
            className="absolute bottom-1/5 right-1/6 w-20 h-20 border-2 border-pink-400/30 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -270, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/3 left-1/4 w-14 h-14 bg-cyan-400/20 transform rotate-45"
          />
        </motion.div>

        {/* Particle System */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 1000], [0, -150]) }}
          className="absolute inset-0 pointer-events-none"
          data-parallax="0.4"
          data-direction="up">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -60, 0],
                x: [0, Math.sin(i) * 30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                ease: "sine.inOut",
                delay: i * 0.3,
              }}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              style={{
                left: `${10 + i * 7}%`,
                top: `${20 + i * 5}%`,
              }}
            />
          ))}
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our most popular and highly-rated courses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
                initial={{ opacity: 0, y: 100, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -20,
                  rotateY: 5,
                  scale: 1.02,
                  boxShadow: "0 40px 80px rgba(59, 130, 246, 0.3)",
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}>
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
                  <div className="w-full h-full bg-white/80 dark:bg-gray-800/80 rounded-3xl"></div>
                </div>

                <div className="relative overflow-hidden rounded-3xl">
                  <GSAPImageParallax
                    src={course.image}
                    alt={course.title}
                    speed={0.3}
                    scale={1.15}
                    className="h-56 w-full object-cover"
                  />

                  {/* Animated overlay with multiple layers */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}>
                    {/* Floating preview button */}
                    <motion.div
                      className="absolute bottom-6 left-6 right-6"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}>
                      <motion.button
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-white/20 backdrop-blur-md text-white py-3 px-6 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 font-medium">
                        <Play className="inline mr-2" size={18} />
                        Watch Preview
                      </motion.button>
                    </motion.div>

                    {/* Animated corner accent */}
                    <motion.div
                      className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  {/* Floating category badge */}
                  <motion.div
                    className="absolute top-4 left-4"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}>
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                      {course.category}
                    </span>
                  </motion.div>
                </div>

                <div className="p-8 relative">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"></div>

                  <div className="relative z-10">
                    {/* Rating with animated stars */}
                    <motion.div
                      className="flex items-center justify-between mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.1 + 0.6 + i * 0.1,
                              type: "spring",
                              stiffness: 300,
                            }}
                            viewport={{ once: true }}>
                            <Star
                              className={`${
                                i < Math.floor(course.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              } transition-colors duration-300`}
                              size={16}
                            />
                          </motion.div>
                        ))}
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-2">
                          {course.rating}
                        </span>
                      </div>

                      {/* Animated student count */}
                      <motion.div
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                        viewport={{ once: true }}>
                        <Users size={14} className="mr-1" />
                        <span>{course.students.toLocaleString()}</span>
                      </motion.div>
                    </motion.div>

                    {/* Title with typewriter effect */}
                    <motion.h3
                      className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}>
                      {course.title}
                    </motion.h3>

                    {/* Description with fade-in */}
                    <motion.p
                      className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-2 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}>
                      {course.description}
                    </motion.p>

                    {/* Course stats with staggered animation */}
                    <motion.div
                      className="flex items-center justify-between mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                      viewport={{ once: true }}>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <motion.div
                          className="flex items-center"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}>
                          <Clock size={14} className="mr-1" />
                          {course.duration}
                        </motion.div>
                      </div>

                      {/* Price with bounce animation */}
                      <motion.div
                        className="text-right"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + 1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        viewport={{ once: true }}>
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          ${course.price}
                        </div>
                        {course.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">
                            ${course.originalPrice}
                          </div>
                        )}
                      </motion.div>
                    </motion.div>

                    {/* Enhanced CTA button */}
                    <Link to={`/course/${course.id}`}>
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                          y: -2,
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1 + 1.2,
                          type: "spring",
                          stiffness: 200,
                        }}
                        viewport={{ once: true }}
                        className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 relative overflow-hidden group">
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <span className="relative z-10 flex items-center justify-center">
                          <BookOpen className="mr-2" size={18} />
                          Explore Course
                          <ArrowRight
                            className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                            size={18}
                          />
                        </span>
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}>
            <Link to="/courses">
              <motion.button
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                  boxShadow: "0 30px 60px rgba(59, 130, 246, 0.4)",
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold text-lg rounded-3xl transition-all duration-500 shadow-2xl overflow-hidden">
                {/* Animated background particles */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating elements around button */}
                <motion.div
                  className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full"
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, -180, -360],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{
                    y: [0, -6, 0],
                    rotate: [0, 90, 180],
                    scale: [1, 1.4, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                <span className="relative z-10 flex items-center">
                  <Sparkles
                    className="mr-3 group-hover:rotate-12 transition-transform duration-300"
                    size={20}
                  />
                  Explore All Courses
                  <ArrowRight
                    className="ml-3 group-hover:translate-x-2 transition-transform duration-300"
                    size={20}
                  />
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </GSAPParallaxContainer>
  );
};

export default Home;
