import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Star,
  Clock,
  Users,
  Play,
  CheckCircle,
  ArrowLeft,
  ShoppingCart,
  Heart,
  Share2,
  Award,
  BookOpen,
  Download,
  Sparkles,
  Zap,
} from "lucide-react";
import { courses } from "../data/courses";
import { useApp } from "../context/AppContext";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cart } = useApp();
  const [activeTab, setActiveTab] = useState("overview");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { scrollY } = useScroll();

  // Parallax transforms
  const heroY = useTransform(scrollY, [0, 300], [0, -100]);
  const backgroundY = useTransform(scrollY, [0, 500], [0, -200]);

  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Course not found
          </h1>
          <Link to="/courses" className="text-blue-600 hover:text-blue-700">
            Back to courses
          </Link>
        </div>
      </div>
    );
  }

  const isInCart = cart.some((item) => item.id === course.id);

  const handleAddToCart = () => {
    addToCart(course);
  };

  const handleBuyNow = () => {
    if (!isInCart) {
      addToCart(course);
    }
    navigate("/cart");
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "curriculum", label: "Curriculum", icon: Play },
    { id: "instructor", label: "Instructor", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      {/* Enhanced Hero Section with Parallax */}
      <section className="relative py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Background Elements */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-10 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 400], [0, -100]) }}
          className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 text-blue-400 opacity-30">
            <Sparkles size={30} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-1/3 right-1/3 text-purple-400 opacity-30">
            <Zap size={25} />
          </motion.div>
        </motion.div>

        {/* Hero Content with Parallax */}
        <motion.div
          style={{ y: heroY }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6">
            <motion.button
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to courses
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}>
              {course.title}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              {course.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center items-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}>
              <div className="flex items-center">
                <Star className="h-6 w-6 text-yellow-400 fill-current mr-2" />
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {course.rating}
                </span>
                <span className="text-gray-600 dark:text-gray-400 ml-1">
                  ({course.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-blue-500 mr-2" />
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {course.students.toLocaleString()}
                </span>
                <span className="text-gray-600 dark:text-gray-400 ml-1">
                  students
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-green-500 mr-2" />
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {course.duration}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                  {course.category}
                </span>
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200">
                    <Heart className="h-5 w-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-gray-400 hover:text-blue-500 transition-colors duration-200">
                    <Share2 className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {course.title}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                  <span className="text-gray-900 dark:text-white font-medium">
                    {course.rating}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-1">
                    ({course.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Users className="h-5 w-5 mr-1" />
                  {course.students.toLocaleString()} students
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Clock className="h-5 w-5 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Award className="h-5 w-5 mr-1" />
                  {course.level}
                </div>
              </div>

              {/* Preview Video */}
              <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-6">
                <div className="aspect-video">
                  {isVideoPlaying ? (
                    <iframe
                      src={course.previewVideo}
                      title="Course Preview"
                      className="w-full h-full"
                      allowFullScreen
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsVideoPlaying(true)}
                        className="flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-200">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </motion.button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-8">
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      whileHover={{ y: -2 }}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                        activeTab === tab.id
                          ? "border-blue-500 text-blue-600 dark:text-blue-400"
                          : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      }`}>
                      <tab.icon className="h-4 w-4 mr-2" />
                      {tab.label}
                    </motion.button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === "overview" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      About this course
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {course.longDescription}
                    </p>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      What you'll learn
                    </h4>
                    <ul className="space-y-2">
                      {course.modules.map((module, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center text-gray-600 dark:text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          {module}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {activeTab === "curriculum" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Course Curriculum
                    </h3>
                    <div className="space-y-4">
                      {course.modules.map((module, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                              <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                                {index + 1}
                              </span>
                            </div>
                            <span className="text-gray-900 dark:text-white font-medium">
                              {module}
                            </span>
                          </div>
                          <div className="flex items-center text-gray-500 dark:text-gray-400">
                            <Clock className="h-4 w-4 mr-1" />
                            <span className="text-sm">2-3 hours</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "instructor" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      About the instructor
                    </h3>
                    <div className="flex items-start space-x-4">
                      <img
                        src={course.instructorAvatar}
                        alt={course.instructor}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {course.instructor}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          Senior Instructor & Industry Expert
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          With over 10 years of experience in the field,{" "}
                          {course.instructor} has helped thousands of students
                          master new skills and advance their careers.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-24">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    ${course.price}
                  </div>
                  {course.originalPrice > course.price && (
                    <div className="text-lg text-gray-500 line-through mb-2">
                      ${course.originalPrice}
                    </div>
                  )}
                  <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                    {Math.round(
                      ((course.originalPrice - course.price) /
                        course.originalPrice) *
                        100
                    )}
                    % OFF
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleBuyNow}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    {isInCart ? "Go to Cart" : "Buy Now"}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    disabled={isInCart}
                    className={`w-full font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center ${
                      isInCart
                        ? "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}>
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    {isInCart ? "Added to Cart" : "Add to Cart"}
                  </motion.button>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    This course includes:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <Play className="h-5 w-5 text-blue-500 mr-3" />
                      {course.duration} of video content
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <Download className="h-5 w-5 text-blue-500 mr-3" />
                      Downloadable resources
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <Award className="h-5 w-5 text-blue-500 mr-3" />
                      Certificate of completion
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <Users className="h-5 w-5 text-blue-500 mr-3" />
                      Access to community
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
