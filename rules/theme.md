# Portfolio Theme System Reference

This document outlines the complete theming system for Bharat Gupta's portfolio, including all CSS custom properties used for light and dark modes.

## Theme Structure

The portfolio uses CSS custom properties (CSS variables) defined in `src/App.css` to implement a comprehensive light/dark theme system. Themes are toggled using the `data-theme` attribute on the body element.

## Light Theme (Default)
*Applied when `data-theme` is not set or equals "light"*

### Background & Base Colors
- `--background-color: #ffffff` - Main page background (white)
- `--text-color: #222222` - Primary text color (dark gray)
- `--form-text-color: #555555` - Form text color (medium gray)
- `--footer-text-color: #888888` - Footer text color (light gray)

### Button Colors
- `--btn-color: #0987f2` - Primary button background (blue)
- `--btn-text-color: #ffffff` - Button text color (white)

### Card System
- `--card-bg: #ffffff` - Card background (white)
- `--card-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1)` - Card drop shadow
- `--card-hover-shadow: 0px 12px 32px rgba(0, 0, 0, 0.15)` - Card hover shadow
- `--card-hover-bg: rgba(255, 255, 255, 0.001)` - Card hover background
- `--project-card-bg: #ffffff00` - Project card background (transparent)

### Skills Section
- `--skills-container-bg: #ffffff` - Skills container background (white)
- `--skills-container-border: rgba(0, 0, 0, 0.1)` - Skills container border
- `--skills-card-bg: #f9f9f9` - Individual skill card background (light gray)
- `--skills-card-border: rgba(0, 0, 0, 0.08)` - Skill card border
- `--skills-card-hover-bg: rgba(255, 255, 255, 0.001)` - Skill card hover
- `--skills-category-text-color: #222222` - Skills category text (dark gray)
- `--skills-title-text-color: #222222` - Skills title text (dark gray)

### Navigation Bar
- `--navbar-background: #ffffff` - Navbar background (white)
- `--navbar-box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3)` - Navbar shadow
- `--navbarList-text-color: #222222` - Navbar link text (dark gray)
- `--burger-background-bar: #222222` - Burger menu bars (dark gray)
- `--burger-bar-text-color: #222222` - Burger menu text (dark gray)

### Education Section
- `--education-bg-color: #ffffff` - Education section background (white)
- `--education-text-color: #222222` - Education text (dark gray)
- `--education-text-color-heading: #222222` - Education headings (dark gray)

### Contact Section
- `--contact-card-bg: #ffffff` - Contact card background (white)
- `--contact-border-color: #e0e0e0` - Contact form borders (light gray)
- `--contact-right-border-color: #e0e0e0` - Contact section divider
- `--contact-input-bg: #ffffff` - Form input background (white)
- `--contact-text-color: #1a1a1a` - Contact text (very dark gray)
- `--contact-label-color: #333333` - Form label color (dark gray)
- `--contact-heading: #333333` - Contact headings (dark gray)
- `--contact-info-text-color: #333333` - Contact info text (dark gray)
- `--contact-primary-color: #4f46e5` - Primary accent (indigo-600)
- `--contact-primary-color-hover: #4338ca` - Primary hover (indigo-700)
- `--contact-btn-text: #ffffff` - Contact button text (white)

## Dark Theme
*Applied when `data-theme="dark"`*

### Background & Base Colors
- `--background-color: #222222` - Main page background (dark gray)
- `--text-color: #ffffff` - Primary text color (white)
- `--form-text-color: #ffffff` - Form text color (white)
- `--footer-text-color: #bbbbbb` - Footer text color (light gray)

### Button Colors
- `--btn-color: #ffffff` - Primary button background (white)
- `--btn-text-color: #222222` - Button text color (dark gray)

### Card System
- `--card-bg: #292727` - Card background (dark brown-gray)
- `--card-border: rgba(255, 255, 255, 0.01)` - Card border (subtle white)
- `--card-shadow: 0px 6px 18px rgba(0, 0, 0, 0.09)` - Card drop shadow
- `--card-hover-shadow: 0px 12px 32px rgba(0, 0, 0, 0.3)` - Card hover shadow
- `--card-hover-bg: rgba(255, 255, 255, 0.001)` - Card hover background
- `--project-card-bg: #ffffff` - Project card background (white)

### Skills Section
- `--skills-container-bg: #292727` - Skills container background (dark brown-gray)
- `--skills-container-border: rgba(255, 255, 255, 0.15)` - Skills container border
- `--skills-card-bg: #ffffff` - Individual skill card background (white)
- `--skills-card-border: rgba(255, 255, 255, 0.1)` - Skill card border
- `--skills-card-hover-bg: rgba(255, 255, 255, 0.001)` - Skill card hover
- `--skills-text-color: #222222` - Skills text (dark gray)
- `--skills-category-text-color: #ffffff` - Skills category text (white)
- `--skills-title-text-color: #ffffff` - Skills title text (white)

### Navigation Bar
- `--navbar-background: #222222` - Navbar background (dark gray)
- `--navbar-box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3)` - Navbar shadow
- `--navbarList-text-color: #ffffff` - Navbar link text (white)
- `--burger-bar-text-color: #ffffff` - Burger menu text (white)

### Education Section
- `--education-bg-color: #292727` - Education section background (dark brown-gray)
- `--education-text-color: #ffffff` - Education text (white)
- `--education-headingText-color: #ffffff` - Education headings (white)

### Contact Section
- `--contact-card-bg: #292727` - Contact card background (dark brown-gray)
- `--contact-border-color: rgba(255, 255, 255, 0.01)` - Contact form borders
- `--contact-right-border-color: #464545` - Contact section divider (medium gray)
- `--contact-input-bg: #ffffff` - Form input background (white)
- `--contact-text-color: #f5f5f5` - Contact text (very light gray)
- `--contact-label-color: #bbbbbb` - Form label color (light gray)
- `--contact-heading: #bbbbbb` - Contact headings (light gray)
- `--contact-info-text-color: #bbbbbb` - Contact info text (light gray)
- `--contact-primary-color: #6366f1` - Primary accent (indigo-500)
- `--contact-primary-color-hover: #818cf8` - Primary hover (indigo-400)
- `--contact-btn-text: #ffffff` - Contact button text (white)

## Global Typography Styles

### Font Families
- **Headings (h1)**: "Rubik", sans-serif
- **Body (h2, h3, p)**: "Roboto Mono", monospace

### Font Sizes
- **h1**: 32px
- **h2, h3**: 20px
- **p**: 16px (weight: 300)

### Text Transforms
- **h1, h2**: uppercase

## Layout Properties

### Body
- `background-color: var(--background-color)`
- `width: 98%`
- `overflow-x: hidden`
- Centers content with flexbox

### Root Container
- `gap: 60px` between sections
- Flex column layout

## Usage Notes

1. **Theme Switching**: Controlled via `ThemeContext.jsx` using React Context
2. **Theme Persistence**: Stored in localStorage
3. **Theme Application**: Uses `data-theme` attribute on document.body
4. **Variable Usage**: All components should reference CSS variables, not hardcoded colors
5. **Color Consistency**: Dark theme maintains visual hierarchy while inverting brightness

## Color Palette Summary

### Light Theme Palette
- **Primary Background**: #ffffff (white)
- **Primary Text**: #222222 (dark gray)
- **Cards**: #ffffff (white) with #f9f9f9 (light gray) variants
- **Accent**: #0987f2 (blue), #4f46e5 (indigo)

### Dark Theme Palette  
- **Primary Background**: #222222 (dark gray)
- **Primary Text**: #ffffff (white)
- **Cards**: #292727 (dark brown-gray)
- **Accent**: #ffffff (white), #6366f1 (indigo)

This theming system ensures consistent visual identity across both light and dark modes while maintaining accessibility and user preference support.