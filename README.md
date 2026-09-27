# 🌿 Jayamahesh Ayurveda & Wellness Clinic (JMAWC)

[![Live Web Application](https://img.shields.io/badge/Live-jayamahesh.web.app-0B823D?style=for-the-badge&logo=google-chrome&logoColor=white)](https://jayamahesh.web.app)
[![React](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Firebase Hosting](https://img.shields.io/badge/Firebase-Hosting-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)

> A classical Kerala Ayurvedic sanctuary and digital wellness portal for **Jayamahesh Ayurveda & Wellness Clinic**, situated in Parassala, Kerala. Engineered with high-performance modern web standards, comprehensive local SEO, and a seamless reservation system.

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Doctor & Practitioner Team](#-doctor--practitioner-team)
- [Therapies Offered](#-therapies-offered)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [SEO & Discoverability](#-seo--discoverability)
- [Clinic Location & Contact](#-clinic-location--contact)
- [Author & Credits](#-author--credits)

---

## 🌿 Overview

**Jayamahesh Ayurveda & Wellness Clinic** is dedicated to authentic, lineage-based Vedic healing in southern Kerala. The web platform provides patients and seekers with an immersive introduction to classical Kerala Panchakarma therapies, an interactive constitutional (Dosha) assessment, Vaidya consultation scheduling, and comprehensive clinic details.

- **Live URL:** [https://jayamahesh.web.app](https://jayamahesh.web.app)
- **Repository:** [GitHub: Ashik-Muhammed/JMawC](https://github.com/Ashik-Muhammed/JMawC)

---

## ✨ Key Features

- **🏛️ Sanctuary Aesthetic & Storytelling:**
  Warm, serene, botanical design inspired by traditional Kerala tharavadu architecture, medicinal herb gardens, and classical copper vats.
- **📋 7 Classical Ayurvedic Therapies:**
  Interactive cards showcasing royal and restorative therapies with modal deep-dives into traditional benefits, preparation steps, and contraindications.
- **🧘 Interactive Dosha (Prakriti) Diagnostic Quiz:**
  A 4-question self-assessment helping visitors evaluate their biological energies (**Vata**, **Pitta**, **Kapha**) and receive customized therapy recommendations.
- **📅 Appointment Booking & Instant WhatsApp Dispatch:**
  A consultation scheduling modal allowing visitors to select their preferred date, time slot, and therapy. Submissions generate an instant pre-filled WhatsApp message containing the complete patient dossier directly to the clinic front desk.
- **📱 Fully Mobile-Responsive:**
  Adaptive layouts, touch-friendly navigation, modal sheets, and smooth typography scaling for mobile devices, tablets, and desktops.
- **⚡ High-Performance:**
  Built with Vite, React 19, native image lazy loading, and modern bundle optimization.

---

## 👩‍⚕️ Doctor & Practitioner Team

The clinic is led by experienced traditional Vaidyas and certified therapists:

| Practitioner | Role | Qualifications / Specialty |
| :--- | :--- | :--- |
| **Dr. Jayalekshmi** | Chief Ayurvedic Physician | **M.D, B.A.M.S** — Pulse diagnosis (*Nadi Pariksha*), herbal formulations, and personalized therapeutic regimens |
| **Maya** | Senior Ayurvedic Therapist | Shirodhara, Takradhara, and synchronized oleation therapies |
| **Rajalekshmi** | Senior Ayurvedic Therapist | Pizhichil, Kizhi poultices, and Kadivasthi spinal restoration |

---

## 🏺 Therapies Offered

1. **Pizhichil** — *The Royal Medicated Oil Stream* (Continuous warm herbal oil bath for neurological vitality, arthritis, and deep rejuvenation).
2. **Dhara** — *Continuous Healing Stream* (Takradhara and Ksheeradhara decoctions poured rhythmically over the forehead or body to pacify Pitta and reduce tension).
3. **Shirovasthi** — *Cranial Medicated Oil Reservoir* (Warm medicated oil retained in an elongated leather cap for cranial nerve renewal and facial palsy).
4. **Abhyangam** — *Synchronized Full-Body Herbal Massage* (Rhythmic two-therapist oleation using authentic herbal oils to stimulate lymph circulation).
5. **Kizhi** — *Warm Botanical Bolus Therapy* (Heated herbal poultice compress for chronic joint stiffness, sciatica, and muscular inflammation).
6. **Kadivasthi** — *Lumbar Oil Reservoir Therapy* (Warm medicated oil held within an organic dough ring on the lower back for disk prolapse and lumbar pain).
7. **Shirodhara** — *Continuous Meditative Stream* (Herbal oil streamed across the third eye to alleviate insomnia, anxiety, and mental exhaustion).

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build System:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Hosting & Backend:** [Firebase Hosting](https://firebase.google.com/docs/hosting) & [Firebase Analytics](https://firebase.google.com/docs/analytics)

---

## 📁 Project Architecture

```plaintext
JMAWC/
├── public/
│   ├── images/               # Therapy and sanctuary photography
│   ├── logo.jpg              # Official clinic insignia & emblem
│   ├── robots.txt            # Crawler indexation guidelines
│   └── sitemap.xml           # XML sitemap with Google Images indexing
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx         # Philosophy, sanctuary grounds & practitioner profiles
│   │   ├── ConsultationModal.tsx    # Appointment scheduling & WhatsApp connect
│   │   ├── DoshaQuizModal.tsx       # 4-stage Prakriti self-assessment engine
│   │   ├── Footer.tsx               # Clinic credentials, operating hours & copyright
│   │   ├── Hero.tsx                 # Hero sanctuary showcase with keyword eyebrow
│   │   ├── JournalSection.tsx       # Ayurvedic wisdom, seasonal dinacharya & herbs
│   │   ├── Logo.tsx                 # Brand insignia component
│   │   ├── Navbar.tsx               # Desktop and responsive mobile drawer navigation
│   │   ├── ReachUsSection.tsx       # Interactive map, location badges & direct contact
│   │   ├── StudioSection.tsx        # 7 Classical therapy showcase & detail triggers
│   │   └── TreatmentDetailModal.tsx # Full treatment protocol modal
│   ├── data/
│   │   └── therapies.ts             # Classical therapy metadata and clinical profiles
│   ├── styles/
│   │   └── index.css                # Tailwind CSS v4 design tokens and custom rules
│   ├── App.tsx                      # Root application layout and modal state
│   ├── firebase.ts                  # Firebase configuration and analytics initialization
│   └── main.tsx                     # React 19 application entrypoint
├── firebase.json                    # Firebase hosting rewrites and cache policies
├── index.html                       # SEO head tags, Google tag (gtag.js), & Schema.org JSON-LD
├── package.json                     # Scripts and dependencies
└── tsconfig.json                    # TypeScript compiler configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ashik-Muhammed/JMawC.git
   cd JMawC
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🌐 Deployment

The application is deployed on **Firebase Hosting**.

### Deploy to Firebase

To deploy the production build to Firebase:

```bash
# 1. Compile production assets
npm run build

# 2. Deploy hosting configuration
npx firebase-tools deploy --only hosting
```

The live website is available at:
👉 **[https://jayamahesh.web.app](https://jayamahesh.web.app)**

---

## 🔍 SEO & Discoverability

The site includes comprehensive on-page, local, and technical search engine optimization:

- **JSON-LD Schema.org Structured Data:**
  - `@type: ["MedicalBusiness", "HealthAndBeautyBusiness"]` with exact coordinates, operational hours (07:30 – 19:30), accepted currencies, payment types, and doctor credentials.
  - Staff profiles for **Dr. Jayalekshmi (M.D, B.A.M.S)**, **Maya**, and **Rajalekshmi**.
  - `MedicalTherapy` schema for all 7 treatments and Nadi Pariksha.
  - `FAQPage` schema addressing visitor FAQs for Google Rich Snippets.
- **Local & Geo Metadata:** `geo.region: IN-KL`, `geo.placename: Parassala, Kerala, India`, `ICBM: 8.340431, 77.156211`.
- **Open Graph & Twitter Cards:** 1200×630 share previews for WhatsApp, Facebook, iMessage, and LinkedIn.
- **XML Sitemap with Google Images:** Indexed at `/sitemap.xml` with image metadata for treatments and doctors.
- **Robots.txt:** Indexable crawler directives at `/robots.txt`.
- **Google Tag (gtag.js):** Integrated with Measurement ID `G-WTH1ZYWGYN` for analytics and automated Google Search Console verification.

---

## 📍 Clinic Location & Contact

- **Address:** Temple Road, near Sree Mahadeva Temple, Parassala, Kerala 695502 (NH 66)
- **Plus Code:** `85R4+79Q Parassala`
- **Phone:** [+91 94438 61260](tel:+919443861260)
- **Email:** [jayamaheshadmin@gmail.com](mailto:jayamaheshadmin@gmail.com)
- **Google Maps:** [JayaMahesh Ayurveda on Google Maps](https://www.google.com/maps/place/JayaMahesh+Ayurveda/@8.3404361,77.1536364,17z/data=!4m6!3m5!1s0x3b05abb5de58e9a9:0xe7a1f43e7d0dc5d9!8m2!3d8.3404308!4d77.1562113!16s%2Fg%2F11v5bkdzhl)
- **Consultation Hours:** Monday – Sunday: 07:30 AM – 07:30 PM (By prior appointment)

---

## 👨‍💻 Author & Credits

- **Author:** **Ashik Muhammed S**
- **Repository:** [Ashik-Muhammed/JMawC](https://github.com/Ashik-Muhammed/JMawC)
- **Organization:** Jayamahesh Ayurveda & Wellness Clinic

---

*© 2026 Jayamahesh Ayurveda & Wellness Clinic. All rights reserved.*
