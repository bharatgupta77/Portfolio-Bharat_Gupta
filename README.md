# Portfolio - Bharat Gupta

Welcome to my portfolio! This project showcases my work in web development, focusing on interactive and visually appealing designs.

## 🚀 Tech Stack

This portfolio is built using the following technologies:

- **HTML & CSS** – For structuring and styling the web pages, ensuring a responsive and modern design
- **JSX & React** – To create dynamic and reusable UI components for a seamless user experience
- **Framer Motion** – To add smooth animations and transitions, enhancing the overall interactivity
- **Vite.js** – For fast development, optimized builds, and a better developer experience
- **React Icons** – For consistent iconography throughout the application
- **React Parallax Tilt** – For interactive 3D tilt effects on cards

## 🎨 Features

✔️ **Modern UI/UX** – Designed with a focus on aesthetics and usability

✔️ **Smooth Animations** – Powered by Framer Motion for an engaging experience

✔️ **Optimized Performance** – Built with Vite.js for fast loading and smooth interactions

✔️ **Mobile Responsive** – Ensures a seamless experience across all devices

✔️ **Light & Dark Mode** – Custom-built theming system that allows users to switch between light and dark modes effortlessly

✔️ **Burger Menu** – Responsive navigation for mobile screens

## 🏗️ Project Structure

```
src/
├── common/                 # Reusable components
│   ├── ProjectCard.jsx     # Project showcase cards
│   └── ThemeContext.jsx    # Theme management context
├── sections/               # Main page sections
│   ├── Contact/           # Contact form and information
│   ├── Education/         # Educational background with animations
│   ├── Experiences/       # Professional experience timeline
│   ├── Footer/           # Site footer
│   ├── Hero/             # Landing section with profile
│   ├── NavBar/           # Navigation with mobile burger menu
│   ├── Projects/         # Project portfolio showcase
│   └── Skills/           # Technical skills with animations
├── assets/               # Images, icons, and static files
├── App.jsx              # Main application component
├── App.css              # Global theming system
├── main.jsx             # Application entry point
└── index.css            # Base styles
```

## 🎯 Key Implementation Details

### Theme System
- **Context API** used for global theme state management
- **CSS Custom Properties** for consistent color theming
- **localStorage** persistence for user preference
- **data-theme attribute** for theme switching
- Complete light/dark mode support across all components

### Animation System
- **Framer Motion** integration for smooth page transitions
- **Scroll-triggered animations** with `whileInView`
- **Staggered animations** for list items and cards
- **Interactive hover effects** and micro-interactions
- **3D tilt effects** using React Parallax Tilt

### Responsive Design
- **Mobile-first approach** with CSS breakpoints
- **Burger menu** implementation for mobile navigation
- **Flexible grid layouts** adapting to screen sizes
- **Touch-friendly interactions** for mobile devices

### Component Architecture
- **Modular component structure** with clear separation of concerns
- **CSS Modules** for scoped styling and avoiding conflicts
- **Reusable components** like ProjectCard for consistency
- **Props-based customization** for flexible component usage

### Performance Optimizations
- **Vite.js** for fast development and optimized builds
- **Code splitting** with React lazy loading capabilities
- **Optimized images** and asset management
- **Minimal bundle size** with tree-shaking

## 📱 Sections Overview

### Hero Section
- **Dynamic profile images** that change with theme
- **Social media links** (LinkedIn, GitHub, LeetCode, HackerRank)
- **Resume download** functionality
- **Theme toggle** integrated into the profile area

### Education Section
- **Animated cards** with entrance effects
- **University logos** and detailed coursework information
- **Awards and achievements** highlighting academic excellence
- **Tilt effects** for interactive card experience

### Experience Section
- **Professional timeline** with company details
- **Skill-based filtering** and categorization
- **Animated transitions** between experience items

### Skills Section
- **Categorized skill display** (Frontend, Backend, Database, Tools)
- **Icon-based presentation** with technology logos
- **Staggered animations** for skill category reveals
- **Theme-adaptive** skill card styling

### Projects Section
- **Enhanced project cards** with modern styling and animations
- **GitHub integration** with "View on GitHub" links and icons
- **Technology tags** displaying tech stack for each project
- **Advanced animations** combining pulse, scale, and glow effects
- **Text overflow protection** ensuring content fits properly
- **Responsive grid layout** adapting to screen sizes
- **Interactive hover effects** with smooth transitions

### Contact Section
- **Contact form** with validation (form submission pending)
- **Contact information** with icons and details
- **Split layout** design with info and form sections
- **Professional styling** matching overall theme

## 🛠️ Development Commands

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
npm run lint    # Run ESLint for code quality
```

## 📋 Current Status & Roadmap

### Completed Features ✅
- Complete responsive design implementation
- Light/dark theme system with persistence
- Smooth animations and micro-interactions
- Mobile navigation with burger menu
- All main sections (Hero, Education, Experience, Skills, Projects, Contact)
- Enhanced project cards with GitHub integration and technology tags
- Advanced card animations (pulse, scale, glow effects)
- Text overflow protection and responsive layouts
- Professional styling and layout

### Known Issues 🔧
- GitHub link in Hero section needs to be updated
- Contact form requires submission functionality
- Minor code cleanup needed (console logs, unused imports)

### Planned Enhancements 🚀
- Form submission integration (EmailJS)
- Loading states and error handling
- SEO optimization with meta tags
- Additional project showcases
- Performance monitoring integration

This portfolio demonstrates modern React development practices, responsive design principles, and attention to user experience details. The codebase is well-structured, maintainable, and follows current web development best practices.
