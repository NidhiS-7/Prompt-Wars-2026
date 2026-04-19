<div align="center">
  <img src="./velocity-venue/public/logo.png" height="120" alt="VenueFlow Logo" />
  <h1>VenueFlow</h1>
  
  <p><strong>A smart command center for managing large crowds at live events.</strong></p>

  <p>
    <img src="https://img.shields.io/badge/REACT-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white" />
  </p>
</div>

---

## ⚡ Overview

**VenueFlow** is a centralized operational dashboard designed to act as a "Mission Control" for large-scale live events. The main objective of this system is to reduce crowd congestion and eliminate wait times at stadiums and arenas.

It works by tracking essential event data—including sensor networks, security patrols, and external transit delays—and displaying it in a clean, dark-mode SCADA interface.

## 🚀 Key Features

* **Multi-Venue Management:** Monitor multiple locations seamlessly. You can add new venues, and the dashboard will adapt to manage anything from a 100K-seat open-air stadium to an indoor concert hall.
* **Dynamic Maps:** The system automatically updates the structural map based on the active venue. For example, selecting a racetrack will display a driving circuit rather than a football pitch.
* **Deep Dive Analytics:** Click on any summary module (like Security Logs or Smart Queues) to expand it into a detailed diagnostic view with historical graphs and system logs. 
* **Live Flow Simulation:** The dashboard features a custom data engine that generates realistic crowd surges, reroutes, and transit delays to show how the system operates under pressure.

---

## 🛠️ Installation Guide

Follow these steps to run the application locally on your machine. Ensure that Node.js is installed before beginning.

1. Open your terminal and navigate to the frontend folder:
   ```bash
   cd velocity-venue
   ```

2. Install the necessary project dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your web browser and go to `http://localhost:5173/`.

---

## 🏗️ Future Integrations

VenueFlow is built to comfortably integrate with real-world Google infrastructure in the future:
- **Google Maps API**: To replace simulated heatmaps with active crowd density tracking using location services.
- **Firebase**: To push live database events instantly without relying on a local polling loop.
- **Google Pay/Wallet**: To analyze transaction speeds at concession stands and accurately predict queue times.

---

> _Created by **Nidhi** during the 2026 Prompt Wars. Built using **Antigravity** and proudly deployed via **Google Cloud**._
