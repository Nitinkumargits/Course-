# EduLearn - Course Selling Website

A modern, responsive React frontend for a course selling platform built with React, Tailwind CSS, and Framer Motion.

## Features

### 🎨 Modern UI/UX

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between themes with smooth animations
- **Modern Design**: Clean, professional interface with beautiful gradients and shadows

### 🎬 Smooth Animations

- **Framer Motion**: Page transitions, hover effects, and micro-interactions
- **Animated Hero Section**: Background animations and floating elements
- **Card Animations**: Scale and fade effects on course cards
- **Form Animations**: Smooth transitions between login/register forms

### 📱 Pages & Components

- **Home Page**: Hero section, featured courses, statistics, and features
- **Courses Page**: Grid layout with advanced filtering and search
- **Course Detail Page**: Comprehensive course information with video preview
- **Cart Page**: Shopping cart with order summary
- **Login/Register Page**: Animated form transitions
- **Responsive Navbar**: Mobile-friendly navigation with search
- **Footer**: Links, social media, and company information

### 🛒 E-commerce Features

- **Shopping Cart**: Add/remove courses, persistent storage
- **Course Filtering**: By category, level, price range, and rating
- **Search Functionality**: Real-time course search
- **User Authentication**: Login/register with form validation
- **Responsive Design**: Mobile-first approach

### 🎯 Technical Features

- **React Router v6**: Modern routing with page transitions
- **Context API**: Global state management for cart and user
- **Local Storage**: Persistent cart and theme preferences
- **Form Validation**: Real-time validation with error messages
- **TypeScript Ready**: Clean, maintainable code structure

## Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Router v6** - Client-side routing
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool and dev server

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project files**

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar with search and cart
│   └── Footer.jsx      # Footer with links and social media
├── context/            # React Context for state management
│   └── AppContext.jsx  # Global state (cart, user, theme)
├── data/               # Mock data and constants
│   └── courses.js      # Sample course data
├── pages/              # Page components
│   ├── Home.jsx        # Landing page with hero and features
│   ├── Courses.jsx     # Course listing with filters
│   ├── CourseDetail.jsx # Individual course page
│   ├── Cart.jsx        # Shopping cart page
│   └── Login.jsx       # Authentication page
├── App.jsx             # Main app component with routing
├── main.jsx            # React app entry point
└── index.css           # Global styles and Tailwind imports
```

## Sample Data

The application includes comprehensive sample data:

- **6 Sample Courses** across different categories
- **Course Categories**: Web Development, Programming, Design, Data Science, Mobile Development, Marketing
- **Course Levels**: Beginner, Intermediate, Advanced
- **Instructor Information**: Names, avatars, and descriptions
- **Course Details**: Prices, ratings, duration, student count

## Key Features Explained

### Dark/Light Mode

- Toggle button in the navbar
- Persists user preference in localStorage
- Smooth transitions between themes
- All components support both themes

### Shopping Cart

- Add courses to cart from course cards or detail page
- Persistent storage using localStorage
- Cart counter in navbar
- Remove items and clear cart functionality
- Order summary with pricing

### Course Filtering

- Filter by category, level, and price range
- Sort by popularity, rating, price, and date
- Real-time search across course titles and descriptions
- Grid and list view modes

### Animations

- Page transitions between routes
- Hover effects on buttons and cards
- Animated hero section with floating elements
- Form transitions and micro-interactions
- Loading states and feedback animations

## Customization

### Adding New Courses

Edit `src/data/courses.js` to add new courses:

```javascript
{
  id: 7,
  title: "Your Course Title",
  instructor: "Instructor Name",
  instructorAvatar: "avatar-url",
  price: 199,
  originalPrice: 299,
  rating: 4.8,
  reviews: 1250,
  duration: "40 hours",
  level: "Beginner",
  category: "Web Development",
  image: "course-image-url",
  description: "Course description",
  // ... other properties
}
```

### Styling

- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for global styles
- Use Tailwind utility classes throughout components

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Vite**: Fast development and build times
- **Code Splitting**: Automatic route-based code splitting
- **Optimized Images**: Responsive images with proper sizing
- **Lazy Loading**: Components load as needed
- **Efficient Animations**: Hardware-accelerated animations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue in the repository or contact the development team.

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
