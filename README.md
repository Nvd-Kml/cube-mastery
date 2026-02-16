# CubeMastery 🧊⏱️

A modern, responsive, single-page algorithmic trainer and reference library for speedcubers. Designed to help you shave seconds off your PB by drilling F2L, OLL, and PLL cases with precision. Whether you are warming up on a standard 3x3 or dropping times on a MagLev Ball-Core setup, CubeMastery provides the perfect environment to practice your lookahead and muscle memory.

Access it here: https://nvd-kml.github.io/cube-mastery/

![CubeMastery Demo](https://img.shields.io/badge/Status-Active-success) ![Vanilla JS](https://img.shields.io/badge/Javascript-Vanilla_ES6-yellow) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue)

## ✨ Features

### 📚 The Library
* **Complete CFOP Database:** Master all 41 F2L, 57 OLL, and 21 PLL cases.
* **Dynamic Visualizations:** Uses the WCA VisualCube API to render cases precisely. F2L cases display in an isometric 3D view with irrelevant pieces greyed out, while OLL/PLL cases display in a 2D top-down perspective to easily spot side stickers and swap arrows.
* **Fuzzy Search & Filters:** Instantly search for an algorithm by typing the moves (e.g., `R U R'`), or filter by shape/case type (e.g., "Disconnected Pairs", "Awkward Shapes").
* **Multiple Alternatives:** Includes optimal algorithms alongside popular alternatives (including `F` moves, `d` moves, and back-slot variations).

### 🏋️‍♂️ The Trainer Engine
* **Custom Drill Sessions:** Check off individual cases or entire subsets to build a custom training queue. The engine randomizes the queue to prevent sequential memorization.
* **WCA-Style Stopwatch:** Hold the `Spacebar` to ready the timer (turns green), release to start, and tap again to stop.
* **Auto-Generated Setups:** The engine automatically calculates and displays the exact reverse-scramble needed to set up your cube for the active case.
* **Quality of Life Toggles:** * **Auto-Next:** Automatically advances to the next scramble 1 second after stopping the timer.
  * **Show Hint:** Toggles the optimal solution on the screen if you forget an algorithm mid-solve.

## 🚀 Running the Project Locally

Because this project utilizes modern ES6 JavaScript Modules (`<script type="module">`), it cannot be run simply by double-clicking the `index.html` file due to browser CORS security restrictions. 

To run it locally, you need a local development server.

**Option 1: Using VS Code (Recommended)**
1. Install the **Live Server** extension by Ritwick Dey.
2. Open the project folder in VS Code.
3. Right-click `index.html` and select **Open with Live Server**.

**Option 2: Using Python**
If you have Python installed, open your terminal, navigate to the project folder, and run:
```bash
# Python 3
python -m http.server 8000

Then open your browser to http://localhost:8000.
```

## 📂 Project Structure

```
/cube-mastery
│── index.html        # Main dashboard and UI layout
├── /css
│   └── style.css     # Custom animations and overrides
└── /js
    ├── data.js       # The database (F2L, OLL, PLL arrays & algorithms)
    └── app.js        # The core logic (View router, rendering, and timer engine)
```

## 🙏 Credits & Acknowledgements
- Algorithms: Optimal algorithms sourced from [CubeSkills](https://www.cubeskills.com/) by Feliks Zemdegs & Andy Klise. Alternative F2L algorithms curated from [SpeedCubeDB](https://www.speedcubedb.com/).
- Visualizations: All cube imagery generated dynamically via the [WCA VisualCube API](https://visualcube.api.cubing.net/).
- Google Gemini Pro for help in code changes.
