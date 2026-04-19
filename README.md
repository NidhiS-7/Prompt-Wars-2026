<div align="center">
  <img src="./velocity-venue/public/logo.png" height="120" alt="VenueFlow Logo" />
  <h1>VenueFlow</h1>
  
  <p><strong>A smart command center for managing massive crowds at live events.</strong></p>

  <p>
    <img src="https://img.shields.io/badge/REACT-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white" />
  </p>
</div>

---

## ⚡ What is VenueFlow?

Hey there! **VenueFlow** is a dashboard I built to act as a "Mission Control" for huge live events. The goal here is simple: eliminate those awful bottlenecks and massive lines you always get stuck in at stadiums or concerts.

It works by tracking everything happening at an event—from sensor pings and security patrols to external subway delays—and wrapping it all up in a really clean, dark-mode SCADA interface.

## 🚀 Cool Stuff It Does

* **Manage Multiple Venues:** You can monitor everything from a 100K-seat open-air stadium to an indoor concert hall. Just add a new venue and the dashboard adapts to it!
* **Dynamic Maps:** Based on the type of venue you create, the dashboard literally redraws its background structural map. (For example, if you track a racetrack, you'll actually see a geometric circuit instead of a football pitch!)
* **Deep Dive Analytics:** The homepage keeps things simple, but if you want to dig into actual raw system logs or pinpoint wait times for specific pizza stands, just click a module and it expands into a full diagnostic layout. 
* **Simulated Chaos:** We wrote a custom engine that throws random surges, reroutes, and delays at the map so you can see how the system handles realistic crowd flows.

---

## 🛠️ How to run it locally

If you want to spin this up on your machine, it's pretty easy. Make sure you have Node installed!

1. Jump into the frontend folder:
   ```bash
   cd velocity-venue
   ```

2. Install the packages:
   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

4. Head over to `http://localhost:5173/` in your browser.

---

## 🏗️ What's Next? (Google Ecosystem)

I designed VenueFlow so it can hook up directly with real-world Google infrastructure:
- **Google Maps API**: Replacing the simulated heatmaps with actual triangulated crowd density based on location services.
- **Firebase**: Using realtime database streams to push events instead of our local system polling loop.
- **Google Pay/Wallet**: Analyzing transaction velocity at concession stands to automatically predict when food lines are dropping!

---

> _Built with ❤️ by **Nidhi** during the 2026 Prompt Wars. Built using **Antigravity** and proudly deployed via **Google Cloud**._
