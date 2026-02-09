📖 Readify | Interactive Reading Companion
Readify is a modern, responsive web application designed for bibliophiles to explore libraries, track reading progress, and create an ambient reading environment. Built with a focus on Modular JavaScript and Glassmorphism UI, it offers a seamless app-like experience as a Progressive Web App (PWA).

✨ Key Features
10-File Modular Infrastructure: Logic is decoupled into dedicated modules (auth, explorer, tracker, etc.) to prevent "Spaghetti Code" and ensure stability.

Smart Book Explorer: Real-time filtering by title, author, or genre using ES6 high-order functions.

Personalized Accounts: Stateful user profiles that store "Saved Books" in browser Local Storage for persistent access.

Reading Tracker: A mathematical engine that calculates completion percentages and estimates days remaining based on reading speed.

Ambient Reading Flow: Integrated audio sanctuary with togglable soundscapes (Acoustic, Lo-Fi, Rain) managed by logical sound-collision prevention.

Memory-Optimized Modals: Detailed book views are injected into the DOM only upon request to save system memory.

🎨 Design Philosophy
Glassmorphism: A UI aesthetic utilizing backdrop-filter blur, vibrant gradients, and floating background "blobs".

Typography: Hero headers at 3.5rem for brand identity, with body copy at 1rem and a 1.6 line-height for maximum readability.

Theme Engine: Full support for Light and Dark modes with persistent user preference saved to the browser.

🛠️ Technical Stack
Frontend: HTML5, CSS3 (Custom Variables), ES6+ JavaScript.

Persistence: Browser localStorage API for stateful user data.

Architecture: Modular Script Pattern (10-file system).

Framework: None (Pure Vanilla JS for maximum performance).
