
# Product Requirements Document: DrLee.ai Landing Page (V3 - Rigorous Edition)

## 1. Executive Overview

**Product:** DrLee.ai - The First-Principles Path to AI Mastery

**Purpose:** This landing page must serve two distinct but related audiences: the **Career Advancer** and the **Founder/Builder**. It will fuse the aspirational, cinematic feel of **MasterClass.com** with the intellectual rigor of **MIT/Stanford Executive Education**. The page will feature a dual-theme design (dark/light) to cater to both user mindsets, and it will be fully responsive and mobile-friendly. This document provides the detailed specifications for its creation, intended for use with a tool like Windsurf or by a development team.

**North Star Document:** All specifications are derived from the **PricingSuggestions.md** document, which outlines the core business strategy, audience segmentation, and value propositions.

---

## 2. Dual-Theme Design Philosophy

- **Dark Theme (Default - "The Studio"):** This theme, inspired by MasterClass, uses the **Vortex Background** from 21st.dev to create a premium, cinematic, and focused experience. It’s designed for the individual learner, the late-night deep dive, and the aspirational journey. The typography will feature elegant serif headlines.
- **Light Theme (User-Selectable - "The School"):** This theme, inspired by MIT/Stanford Exec Ed, uses the **Particles** background from 21st.dev to create a clean, professional, and academic feel. It’s designed for the enterprise buyer, the daytime professional, and the institutional mindset. The typography will use clean, modern sans-serif headlines.
- **Theme Switcher:** A prominent, user-facing toggle (e.g., a sun/moon icon) in the navigation bar will allow for manual switching between modes. The user's preference will be saved in local storage for session persistence.

---

## 3. Page Architecture & UI Components (Mobile-First)

### **3.1. Navigation Bar**
- **Mobile:** A clean, minimalist hamburger menu that slides in from the left, revealing primary navigation links. The menu background will match the current theme.
- **Desktop:** A fixed/sticky header (80px height) with the DrLee.ai logo, primary navigation links ("Masterclass Catalog," "For Enterprise," "About"), a primary CTA ("Explore Catalog"), and the theme switcher toggle.

### **3.2. Hero Section**
- **Layout:** Full-width, centered copy. The background will be the animated Vortex (dark theme) or Particles (light theme).
- **Copy Structure:**
  - **Pre-headline:** "For the Career Advancer & the Founder/Builder"
  - **Headline (H1):** "Stop Consuming the Future. Start Building It."
  - **Subheadline:** "Whether you’re building a career or building a company, the path to a defensible moat is through first principles. This is where you become the architect."
  - **Dual CTA Strategy:**
    - Primary: "Explore the Catalog" (Solid, branded button)
    - Secondary: "Watch the Manifesto" (Ghost button with play icon)

### **3.3. Problem/Pain Point Section**
- **Layout:** A 2-column grid on desktop, stacking to a single column on mobile. Each column addresses one of the core avatars.
- **Content Components:**
  - **Section Headline:** "The Two Paths"
  - **Column 1: The Career Advancer**
    - Headline: "The Application Black Hole"
    - Copy: "You’re a talented developer, but your resume is lost in a sea of 10,000 applicants. You’re stuck in the tutorial trap, and you lack the first-principles knowledge to stand out."
  - **Column 2: The Founder/Builder**
    - Headline: "The Build vs. Buy Dilemma"
    - Copy: "You’re a visionary founder, but your company is built on rented land—dependent on APIs you don’t control. You need to build a technical moat, but you can’t afford a $5M engineering team."

### **3.4. Solution Positioning Section**
- **Layout:** A single column of centered text, fully responsive.
- **Content Components:**
  - **Headline:** "The First-Principles Path to Mastery"
  - **Solution Narrative:** "DrLee.ai is a new kind of institution, combining the rigor of MIT with the storytelling of MasterClass. We don’t just teach you to use the tools; we teach you how to build them. This is how you forge an unshakeable moat—for your career or your company."

### **3.5. Masterclass Catalog Section (Restructured)**
- **Layout:** A responsive grid of course cards with a mobile-friendly filtering system.
- **Functionality:**
  - **Tabs/Dropdown:** On desktop, a tabbed interface to filter by the **two primary categories**: "Citizen Developer" (7 courses, including Vibe Marketing, AI-Native University, and Token Economy) and "Hardcore Developers" (14 courses). On mobile, this becomes a clean, accessible dropdown menu.
  - **Course Cards:** Each card will display the course title, subtitle, and a "View Syllabus" button.
  - **Modal:** Clicking "View Syllabus" will open a full-screen, mobile-friendly modal with the complete course details (including the 3-paragraph description and 10-12 modules), preventing the user from leaving the page.

### **3.6. ROI / Moat-Building Section**
- **Layout:** A 2-column grid on desktop, stacking on mobile.
- **Content Components:**
  - **Headline:** "This is Not an Expense. It is How You Build Your Moat."
  - **Column 1: For the Career Advancer**
    - Metric: "Land a $250K+ AI Engineering Role"
    - Visual: A graph showing the salary trajectory of a DrLee.ai graduate vs. a typical developer.
  - **Column 2: For the Founder/Builder**
    - Metric: "Build a Defensible Product Without a $5M Seed Round"
    - Visual: A diagram showing the cost savings of building vs. hiring/buying.

### **3.7. Social Proof / Testimonials Section**
- **Layout:** A mobile-first carousel/slider that is fully swipeable on touch devices.
- **Content:** Testimonials from both Career Advancers ("I got the job…") and Founders ("We got the term sheet…").

### **3.8. Final Call to Action (CTA) Section**
- **Layout:** A clean, simple, full-width section.
- **Content:**
  - **Headline:** "Your Future is Not a Spectator Sport. It’s Time to Build."
  - **Primary CTA:** "Explore the Full Catalog"

### **3.9. Footer**
- **Layout:** A clean, single-column layout on mobile that expands to a 4-column layout on desktop.

---

## 4. Technical Specifications

- **Framework:** The page should be built with a modern, responsive framework like Tailwind CSS.
- **Mobile-First:** All styles and layouts must be developed for mobile devices first, then scaled up to larger screens using media queries.
- **Performance:** The page must be optimized for fast loading times on mobile networks, with a target Lighthouse performance score of 90+.
- **Accessibility:** The page must be fully accessible, meeting WCAG 2.1 AA standards.
- **Interactive Components:** The Vortex and Particles backgrounds from 21st.dev will be implemented as the themes.
