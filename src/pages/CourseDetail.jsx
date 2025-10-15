import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
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
  ChevronDown,
  ChevronUp,
  MessageCircle,
  ThumbsUp,
  Bookmark,
  Eye,
  TrendingUp,
  Target,
  Lightbulb,
  Code,
  Database,
  Globe,
  Smartphone,
  BarChart3,
  Mail,
  ExternalLink,
} from "lucide-react";
import { courses } from "../data/courses";
import { useApp } from "../context/AppContext";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cart } = useApp();
  const [activeTab, setActiveTab] = useState("overview");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [expandedModules, setExpandedModules] = useState({});
  const [hoveredModule, setHoveredModule] = useState(null);
  const [showReviews, setShowReviews] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [progress, setProgress] = useState(0);
  const [notifications, setNotifications] = useState([]);
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
    addNotification("Course added to cart!", "success");
  };

  const handleBuyNow = () => {
    if (!isInCart) {
      addToCart(course);
    }
    navigate("/cart");
  };

  const addNotification = (message, type = "success") => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3000);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    addNotification(
      isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      "success"
    );
  };

  const handleShare = () => {
    setShowShareMenu(!showShareMenu);
  };

  const toggleModule = (moduleIndex) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleIndex]: !prev[moduleIndex],
    }));
  };

  const handleRatingClick = (rating) => {
    setUserRating(rating);
    addNotification(
      `Thank you for rating this course ${rating} stars!`,
      "success"
    );
  };

  const handleRatingHover = (rating) => {
    setHoveredRating(rating);
  };

  const handleRatingLeave = () => {
    setHoveredRating(0);
  };

  // Simulate progress based on user interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(25); // Simulate 25% progress
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Close share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showShareMenu && !event.target.closest(".share-menu-container")) {
        setShowShareMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showShareMenu]);

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      rating: 5,
      comment:
        "Excellent course! The instructor explains complex concepts in a very clear way.",
      date: "2 days ago",
      helpful: 12,
    },
    {
      id: 2,
      name: "Sarah Wilson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      rating: 4,
      comment:
        "Great content and practical examples. Highly recommended for Python developers.",
      date: "1 week ago",
      helpful: 8,
    },
    {
      id: 3,
      name: "Mike Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      rating: 5,
      comment:
        "Perfect for intermediate developers looking to advance their Python skills.",
      date: "2 weeks ago",
      helpful: 15,
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "curriculum", label: "Curriculum", icon: Play },
    { id: "instructor", label: "Instructor", icon: Award },
    { id: "reviews", label: "Reviews", icon: MessageCircle },
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
                    onClick={handleWishlist}
                    className={`p-2 transition-colors duration-200 ${
                      isWishlisted
                        ? "text-red-500"
                        : "text-gray-400 hover:text-red-500"
                    }`}>
                    <Heart
                      className={`h-5 w-5 ${
                        isWishlisted ? "fill-current" : ""
                      }`}
                    />
                  </motion.button>
                  <div className="relative share-menu-container">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleShare}
                      className="p-2 text-gray-400 hover:text-blue-500 transition-colors duration-200">
                      <Share2 className="h-5 w-5" />
                    </motion.button>
                    <AnimatePresence>
                      {showShareMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                          <button className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
                            <Mail className="h-4 w-4 mr-2" />
                            Email
                          </button>
                          <button className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Copy Link
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
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

              {/* Enhanced Preview Video */}
              <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-6 group">
                <div className="aspect-video">
                  {isVideoPlaying ? (
                    <iframe
                      src={course.previewVideo}
                      title="Course Preview"
                      className="w-full h-full"
                      allowFullScreen
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 relative">
                      {/* Video thumbnail overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>

                      {/* Play button with enhanced animation */}
                      <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsVideoPlaying(true)}
                        className="relative flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300 backdrop-blur-sm border border-white border-opacity-20">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-white bg-opacity-10 rounded-full"></motion.div>
                        <Play className="h-10 w-10 text-white ml-1 relative z-10" />
                      </motion.button>

                      {/* Video duration badge */}
                      <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                        2:30
                      </div>

                      {/* Video title overlay */}
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-semibold mb-1">
                          Course Preview
                        </h3>
                        <p className="text-sm opacity-80">
                          Get a taste of what you'll learn
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Video controls overlay */}
                {isVideoPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute top-4 right-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsVideoPlaying(false)}
                      className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all duration-200">
                      <Eye className="h-5 w-5" />
                    </motion.button>
                  </motion.div>
                )}
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
                    <div className="space-y-3">
                      {course.modules.map((module, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
                          <motion.button
                            whileHover={{
                              backgroundColor: "rgba(59, 130, 246, 0.05)",
                            }}
                            onClick={() => toggleModule(index)}
                            onMouseEnter={() => setHoveredModule(index)}
                            onMouseLeave={() => setHoveredModule(null)}
                            className="w-full flex items-center justify-between p-4 text-left transition-colors duration-200">
                            <div className="flex items-center">
                              <motion.div
                                className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3"
                                animate={{
                                  scale: hoveredModule === index ? 1.1 : 1,
                                  backgroundColor:
                                    hoveredModule === index
                                      ? "rgba(59, 130, 246, 0.2)"
                                      : undefined,
                                }}
                                transition={{ duration: 0.2 }}>
                                <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                                  {index + 1}
                                </span>
                              </motion.div>
                              <div>
                                <span className="text-gray-900 dark:text-white font-medium">
                                  {module}
                                </span>
                                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-1">
                                  <Clock className="h-3 w-3 mr-1" />
                                  <span>2-3 hours</span>
                                  <span className="mx-2">•</span>
                                  <span>5 lessons</span>
                                </div>
                              </div>
                            </div>
                            <motion.div
                              animate={{
                                rotate: expandedModules[index] ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}>
                              <ChevronDown className="h-5 w-5 text-gray-400" />
                            </motion.div>
                          </motion.button>

                          <AnimatePresence>
                            {expandedModules[index] && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="border-t border-gray-200 dark:border-gray-600">
                                <div className="p-4 space-y-3">
                                  {[
                                    "Introduction to the topic",
                                    "Core concepts and theory",
                                    "Hands-on practice",
                                    "Real-world examples",
                                    "Quiz and assessment",
                                  ].map((lesson, lessonIndex) => (
                                    <motion.div
                                      key={lessonIndex}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        duration: 0.2,
                                        delay: lessonIndex * 0.1,
                                      }}
                                      className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                                      {lesson}
                                      <span className="ml-auto text-gray-400">
                                        15 min
                                      </span>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
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
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                      About the instructor
                    </h3>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
                      <div className="flex items-start space-x-6">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="relative">
                          <img
                            src={course.instructorAvatar}
                            alt={course.instructor}
                            className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-600 shadow-lg"
                          />
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="h-5 w-5 text-white" />
                          </div>
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {course.instructor}
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                            Senior Instructor & Industry Expert
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            With over 10 years of experience in the field,{" "}
                            {course.instructor} has helped thousands of students
                            master new skills and advance their careers.
                          </p>

                          {/* Instructor stats */}
                          <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                10+
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                Years Experience
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                50K+
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                Students Taught
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                4.9
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                Average Rating
                              </div>
                            </div>
                          </div>

                          {/* Skills */}
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                              Expertise
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {[
                                "Python",
                                "Data Science",
                                "Machine Learning",
                                "Web Development",
                              ].map((skill, index) => (
                                <motion.span
                                  key={skill}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    duration: 0.2,
                                    delay: index * 0.1,
                                  }}
                                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "reviews" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Student Reviews
                      </h3>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowReviews(!showReviews)}
                        className="text-blue-600 dark:text-blue-400 font-medium">
                        {showReviews ? "Hide Reviews" : "Show All Reviews"}
                      </motion.button>
                    </div>

                    {/* Rating summary */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-gray-900 dark:text-white">
                            {course.rating}
                          </div>
                          <div className="flex items-center justify-center mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-5 w-5 ${
                                  star <= course.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <div className="text-gray-600 dark:text-gray-400 text-sm">
                            Based on {course.reviews} reviews
                          </div>
                        </div>

                        {/* Rating breakdown */}
                        <div className="flex-1 ml-8">
                          {[5, 4, 3, 2, 1].map((rating) => (
                            <div
                              key={rating}
                              className="flex items-center mb-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400 w-8">
                                {rating}
                              </span>
                              <Star className="h-4 w-4 text-yellow-400 fill-current mr-2" />
                              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{
                                    width: `${
                                      rating === 5
                                        ? 70
                                        : rating === 4
                                        ? 20
                                        : rating === 3
                                        ? 7
                                        : rating === 2
                                        ? 2
                                        : 1
                                    }%`,
                                  }}
                                  transition={{ duration: 1, delay: 0.5 }}
                                  className="bg-yellow-400 h-2 rounded-full"
                                />
                              </div>
                              <span className="text-sm text-gray-600 dark:text-gray-400 w-8">
                                {rating === 5
                                  ? 70
                                  : rating === 4
                                  ? 20
                                  : rating === 3
                                  ? 7
                                  : rating === 2
                                  ? 2
                                  : 1}
                                %
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* User rating input */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        Rate this course
                      </h4>
                      <div className="flex items-center space-x-2 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <motion.button
                            key={star}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleRatingClick(star)}
                            onMouseEnter={() => handleRatingHover(star)}
                            onMouseLeave={handleRatingLeave}
                            className="focus:outline-none">
                            <Star
                              className={`h-8 w-8 ${
                                star <= (hoveredRating || userRating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300 hover:text-yellow-300"
                              }`}
                            />
                          </motion.button>
                        ))}
                      </div>
                      {userRating > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-green-600 dark:text-green-400 text-sm">
                          Thank you for your rating!
                        </motion.div>
                      )}
                    </div>

                    {/* Reviews list */}
                    <div className="space-y-4">
                      {reviews
                        .slice(0, showReviews ? reviews.length : 2)
                        .map((review, index) => (
                          <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-start space-x-4">
                              <img
                                src={review.avatar}
                                alt={review.name}
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h5 className="font-semibold text-gray-900 dark:text-white">
                                    {review.name}
                                  </h5>
                                  <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <Star
                                        key={star}
                                        className={`h-4 w-4 ${
                                          star <= review.rating
                                            ? "text-yellow-400 fill-current"
                                            : "text-gray-300"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-3">
                                  {review.comment}
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                  <span>{review.date}</span>
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center space-x-1 hover:text-blue-600 dark:hover:text-blue-400">
                                    <ThumbsUp className="h-4 w-4" />
                                    <span>Helpful ({review.helpful})</span>
                                  </motion.button>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
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
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-4 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    {isInCart ? "Go to Cart" : "Buy Now"}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-2">
                      →
                    </motion.div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    disabled={isInCart}
                    className={`w-full font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center ${
                      isInCart
                        ? "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600"
                    }`}>
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    {isInCart ? "Added to Cart" : "Add to Cart"}
                  </motion.button>

                  {/* Progress indicator */}
                  {progress > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-green-800 dark:text-green-200 font-medium text-sm">
                          Your Progress
                        </span>
                        <span className="text-green-600 dark:text-green-400 font-bold text-sm">
                          {progress}%
                        </span>
                      </div>
                      <div className="w-full bg-green-200 dark:bg-green-800 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="bg-green-500 h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    This course includes:
                  </h4>
                  <ul className="space-y-4">
                    {[
                      {
                        icon: Play,
                        text: `${course.duration} of video content`,
                        color: "text-blue-500",
                      },
                      {
                        icon: Download,
                        text: "Downloadable resources",
                        color: "text-green-500",
                      },
                      {
                        icon: Award,
                        text: "Certificate of completion",
                        color: "text-yellow-500",
                      },
                      {
                        icon: Users,
                        text: "Access to community",
                        color: "text-purple-500",
                      },
                      {
                        icon: Bookmark,
                        text: "Lifetime access",
                        color: "text-red-500",
                      },
                      {
                        icon: Smartphone,
                        text: "Mobile & desktop access",
                        color: "text-indigo-500",
                      },
                    ].map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center text-gray-600 dark:text-gray-300 group cursor-pointer">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          className={`${feature.color} mr-3 transition-colors duration-200`}>
                          <feature.icon className="h-5 w-5" />
                        </motion.div>
                        <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                          {feature.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Course stats */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Course Statistics
                    </h5>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {course.students.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Students
                        </div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {course.rating}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Rating
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-8 right-8 z-50">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleBuyNow}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg cursor-pointer">
          <ShoppingCart className="h-6 w-6" />
        </motion.div>
      </motion.div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 left-8 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg z-50">
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}>
          ↑
        </motion.div>
      </motion.button>

      {/* Notifications */}
      <div className="fixed top-20 right-4 z-50 space-y-2">
        <AnimatePresence>
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 300, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 300, scale: 0.8 }}
              className={`p-4 rounded-lg shadow-lg border-l-4 ${
                notification.type === "success"
                  ? "bg-green-50 border-green-500 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : "bg-red-50 border-red-500 text-red-800 dark:bg-red-900 dark:text-red-200"
              }`}>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="font-medium">{notification.message}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CourseDetail;
