export const f2lCases = [
    // --- BASIC INSERTS (1-4) ---
    { id: 1, cat: 'Basic Inserts', opt: "U R U' R'", alts: ["y L' U' L"] },
    { id: 2, cat: 'Basic Inserts', opt: "y' U' R' U R", alts: ["F R' F' R"] },
    { id: 3, cat: 'Basic Inserts', opt: "y' R' U' R", alts: ["F' U F"] },
    { id: 4, cat: 'Basic Inserts', opt: "R U R'", alts: ["y L U L'"] },

    // --- DISCONNECTED PAIRS (5-10) ---
    { id: 5, cat: 'Disconnected Pairs', opt: "U' R U R' U2 R U' R'", alts: ["y' U2 R' U' R U' R' U R"] },
    { id: 6, cat: 'Disconnected Pairs', opt: "d R' U' R U2 R' U R", alts: ["y' U R' U' R U2 R' U R"] },
    { id: 7, cat: 'Disconnected Pairs', opt: "U' R U2 R' U2 R U' R'", alts: ["U' R U2 R' U R' F R F'"] },
    { id: 8, cat: 'Disconnected Pairs', opt: "d R' U2 R U2 R' U R", alts: ["y' U R' U2 R U2 R' U R"] },
    { id: 9, cat: 'Disconnected Pairs', opt: "U' R U' R' U F' U' F", alts: ["U' R U' R' d R' U' R"] },
    { id: 10, cat: 'Disconnected Pairs', opt: "U' R U R' U R U R'", alts: ["d R' U R d' R U R'"] },

    // --- CONNECTED PAIRS (11-18) ---
    { id: 11, cat: 'Connected Pairs', opt: "U' R U2 R' d R' U' R", alts: ["U' R U2 R' U F' U' F"] },
    { id: 12, cat: 'Connected Pairs', opt: "R U' R' U R U' R' U2 R U' R'", alts: ["R' U2 R2 U R2 U R"] },
    { id: 13, cat: 'Connected Pairs', opt: "y' U R' U R U' R' U' R", alts: ["d R' U R U' R' U' R"] },
    { id: 14, cat: 'Connected Pairs', opt: "U' R U' R' U R U R'", alts: ["U2 R2 U R' U R U2 R2"] },
    { id: 15, cat: 'Connected Pairs', opt: "R U R' U2 R U' R' U R U' R'", alts: ["R' D' R U' R' D R U R U' R'"] },
    { id: 16, cat: 'Connected Pairs', opt: "R U' R' U2 y' R' U' R", alts: ["R U' R' U2 F' U' F"] },
    { id: 17, cat: 'Connected Pairs', opt: "R U2 R' U' R U R'", alts: ["R U R' U' R U2 R' U2 R U R'"] },
    { id: 18, cat: 'Connected Pairs', opt: "y' R' U2 R U R' U' R", alts: ["y L' U2 L U L' U' L"] },

    // --- DISCONNECTED PAIRS (19-22) ---
    { id: 19, cat: 'Disconnected Pairs', opt: "U R U2 R' U R U' R'", alts: ["R U' R' U R U' R' U R U R'"] },
    { id: 20, cat: 'Disconnected Pairs', opt: "y' U' R' U2 R U' R' U R", alts: ["U' R U R' U r U' r' U2 r U r'"] },
    { id: 21, cat: 'Disconnected Pairs', opt: "R U' R' U2 R U R'", alts: ["U2 R' U' R S R f' U' F"] },
    { id: 22, cat: 'Disconnected Pairs', opt: "y' R' U R U2 R' U' R", alts: ["r U' r' U2 r U r'"] },

    // --- CONNECTED PAIRS (23-24) ---
    { id: 23, cat: 'Connected Pairs', opt: "R U' R' U' R U R' U2 R U R'", alts: ["U2 R2 U2 R' U' R U' R2"] },

    // --- CORNER IN SLOT (25-30) ---
    { id: 24, cat: 'Corner In Slot', opt: "U R U' R' d' L' U L", alts: ["F U R U' R' F' R U' R'"] },
    { id: 25, cat: 'Corner In Slot', opt: "U' R' F R F' R U R'", alts: ["R' U' R' U' R' U R U R"] },
    { id: 26, cat: 'Corner In Slot', opt: "U R U' R' F R' F' R", alts: ["R S' R' U R S R'"] },
    { id: 27, cat: 'Corner In Slot', opt: "R U' R' U R U' R'", alts: ["U2 R U' R' U R U' R'"] },
    { id: 28, cat: 'Corner In Slot', opt: "y' R' U R U' R' U R", alts: ["y L' U L U' L' U L"] },
    { id: 29, cat: 'Corner In Slot', opt: "y' R' U' R U R' U' R", alts: ["R' F R F' U R U' R'"] },
    { id: 30, cat: 'Corner In Slot', opt: "R U R' U' R U R'", alts: ["U2 R U R' U' R U R'"] },

    // --- EDGE IN SLOT (31-36) ---
    { id: 31, cat: 'Edge In Slot', opt: "U' R' F R F' R U' R'", alts: ["R U' R' U y' R' U R"] },
    { id: 32, cat: 'Edge In Slot', opt: "U R U' R' U R U' R' U R U' R'", alts: ["R U R' U' R U R' U' R U R'"] },
    { id: 33, cat: 'Edge In Slot', opt: "U' R U' R' U2 R U' R'", alts: ["R U R' U' R U' R' U R U' R'"] },
    { id: 34, cat: 'Edge In Slot', opt: "U R U R' U2 R U R'", alts: ["U' R U2 R' U R U R'"] },
    { id: 35, cat: 'Edge In Slot', opt: "U' R U R' U F' U' F", alts: ["U' R U R' d R' U' R"] },
    { id: 36, cat: 'Edge In Slot', opt: "U F' U' F U' R U R'", alts: ["U2 R' F R F' U2 R U R'"] },

    // --- PIECES IN SLOT (37-41) ---
    { id: 37, cat: 'Pieces In Slot', opt: "R U' R' U' R U R' U2 R U' R'", alts: ["R2 U2 F R2 F' U2 R' U R'"] },
    { id: 38, cat: 'Pieces In Slot', opt: "R U R' U' R U2 R' U' R U R'", alts: ["R U' R' d R' U' R U' R' U' R"] },
    { id: 39, cat: 'Pieces In Slot', opt: "R U2 R U R' U R U2 R2", alts: ["R U R' U2 R U' R' U R U R'"] },
    { id: 40, cat: 'Pieces In Slot', opt: "R U' R' U R U2 R' U R U' R'", alts: ["R U R' F U R U' R' F' U' R'"] },
    { id: 41, cat: 'Pieces In Slot', opt: "R U R' U' R U R' U' R U R'", alts: ["y' R' U' R U R' U' R U R' U' R"] }
];

// ==========================================
// OLL ALGORITHMS (1-57)
// ==========================================
export const ollCases = [
    // --- Dot Shapes ---
    { id: 1, cat: 'Dot Shapes', opt: "(R U2 R2') F R F' U2 R' F R F'", alts: ["y R U' R2 D' r U' r' D R2 U R'"] },
    { id: 2, cat: 'Dot Shapes', opt: "F (R U R' U') F' f (R U R' U') f'", alts: ["F R U R' U' S R U R' U' F'"] },
    { id: 3, cat: 'Dot Shapes', opt: "y' f (R U R' U') f' U' F (R U R' U') F", alts: ["y' f R U R' U' F' U F R U R' U' F'"] },
    { id: 4, cat: 'Dot Shapes', opt: "y' f (R U R' U') f' U F (R U R' U') F", alts: ["y' f R U R' U' F U F R U R' U' F'"] },
    { id: 17, cat: 'Dot Shapes', opt: "(R U R' U) (R' F R F') U2 (R' F R F')", alts: ["y2 F R' F' R U S R U' R' S'"] },
    { id: 18, cat: 'Dot Shapes', opt: "y (R U2 R') (R' F R F') U2 M' (U R U' r')", alts: ["y F S' R U' R' S R U2 R' U' F"] },
    { id: 19, cat: 'Dot Shapes', opt: "M U (R U R' U') M' (R' F R F')", alts: ["y S' R U R' S U' R' F R F'"] },
    { id: 20, cat: 'Dot Shapes', opt: "(r U R' U') M2 (U R U' R') U' M'", alts: ["S R U R' S' U M' U R U' R'"] },

    // --- Square Shapes ---
    { id: 5, cat: 'Square Shapes', opt: "r' U2 (R U R' U) r", alts: ["y2 l' U2 L U L' U l"] },
    { id: 6, cat: 'Square Shapes', opt: "r U2 (R' U' R U') r'", alts: ["F U' R2 D R' U' R D' R2 U F'"] },

    // --- Lightning Shapes ---
    { id: 7, cat: 'Lightning Shapes', opt: "r (U R' U R) U2 r'", alts: ["S R U R' U R U2 R' U S'"] },
    { id: 8, cat: 'Lightning Shapes', opt: "y2 r' (U' R U' R') U2 r", alts: ["R U2 R' U2 R' F R F'"] },
    { id: 11, cat: 'Lightning Shapes', opt: "M (R U R' U R U2 R') U M'", alts: ["S R U R' U R U2 R' U2 S'"] },
    { id: 12, cat: 'Lightning Shapes', opt: "y' M' (R' U' R U' R' U2 R) U' M", alts: ["F R U R' U' F' U F R U R' U' F'"] },
    { id: 39, cat: 'Lightning Shapes', opt: "y L F (L' U L U) F U' L'", alts: ["y' R U R' F' U' F U R U2 R'"] },
    { id: 40, cat: 'Lightning Shapes', opt: "y R' F (R U R' U') F' U R", alts: ["y R' F R U R U' F' U R"] },

    // --- Fish Shapes ---
    { id: 9, cat: 'Fish Shapes', opt: "y (R U R' U') (R' F R) (R U R' U') F'", alts: ["R U2 R' U' S' R U' R' S"] },
    { id: 10, cat: 'Fish Shapes', opt: "(R U R' U) (R' F R F') (R U2 R')", alts: ["y M' R' U2 R U R' U R U M"] },
    { id: 35, cat: 'Fish Shapes', opt: "(R U2 R') (R' F R F') (R U2 R')", alts: ["F R U R' U' F' R U R' U R U2 R'"] },
    { id: 37, cat: 'Fish Shapes', opt: "F R (U' R' U') (R U R') F'", alts: ["F R' F' R U R U' R'"] },

    // --- Knight Move Shapes ---
    { id: 13, cat: 'Knight Move Shapes', opt: "(r U' r') U (r U r') (F' U F)", alts: ["F U R U2 R' U' R U R' F'"] },
    { id: 14, cat: 'Knight Move Shapes', opt: "R' F (R U R') F R (F U' F')", alts: ["F U L' U L2 F L' U' L' U L"] },
    { id: 15, cat: 'Knight Move Shapes', opt: "(r' U' r) (R' U' R U) (r' U r)", alts: ["r' U' M' U' R U r' U r"] },
    { id: 16, cat: 'Knight Move Shapes', opt: "(r U r') (R U R' U') (r U' r')", alts: ["U M U R' U' r U' r'"] },

    // --- OCLL (Cross) ---
    { id: 21, cat: 'OCLL', opt: "(R U R' U) (R U' R' U) (R U2 R')", alts: ["y R U2 R' U' R U R' U' R U R'"] },
    { id: 22, cat: 'OCLL', opt: "R U2 (R2' U') (R2 U') (R2' U2) R", alts: ["F R U R' U' S' R U R' U F'"] },
    { id: 23, cat: 'OCLL', opt: "R2 D (R' U2 R) D' (R' U2 R')", alts: ["y2 R2 D' R U2 R' D R U2 R"] },
    { id: 24, cat: 'OCLL', opt: "(r U R' U') (r' F R F')", alts: ["y' x' R U R' D R U' R' D' x"] },
    { id: 25, cat: 'OCLL', opt: "y (F' r U R') (U' r' F R)", alts: ["R U2 R' D R' U2 R D' R2"] },
    { id: 26, cat: 'OCLL', opt: "y R U2 (R' U' R U') R'", alts: ["R' U R U' R' U2 R"] },
    { id: 27, cat: 'OCLL', opt: "(R U R' U) (R U2 R')", alts: ["y L' U2 L U L' U L"] },

    // --- All Corners Oriented ---
    { id: 28, cat: 'All Corners Oriented', opt: "(r U R' U') M (U R U' R')", alts: ["M' U M U2 M' U M"] },
    { id: 57, cat: 'All Corners Oriented', opt: "(R U R' U') M' (U R U' r')", alts: ["y R U' R' S R U R' S'"] },

    // --- Awkward Shapes ---
    { id: 29, cat: 'Awkward Shapes', opt: "y (R U R') U (R U' R') (F' U' F) (R U R')", alts: ["y S' R U R' U' R' F R F' U S"] },
    { id: 30, cat: 'Awkward Shapes', opt: "y2 F U (R U2 R') U' (R U2 R') U' F'", alts: ["y S' R' U' R F R' U R U' F'"] },
    { id: 41, cat: 'Awkward Shapes', opt: "y2 (R U R' U) (R U2 R') F (R U R' U') F'", alts: ["M U F L' U' L U F M'"] },
    { id: 42, cat: 'Awkward Shapes', opt: "(R' U' R U') (R' U2 R) F (R U R' U') F'", alts: ["y F S R U R' U F' U S'"] },

    // --- P Shapes ---
    { id: 31, cat: 'P Shapes', opt: "(R' U' F) (U R U' R') F' R", alts: ["y S R U R' U' F U' F'"] },
    { id: 32, cat: 'P Shapes', opt: "S (R U R' U') (R' F R f')", alts: ["R U B' U' R' U R B R'"] },
    { id: 43, cat: 'P Shapes', opt: "y R' U' (F' U F) R", alts: ["y R U B U' B' R'"] },
    { id: 44, cat: 'P Shapes', opt: "f (R U R' U') f'", alts: ["F U R U' R' F'"] },

    // --- T Shapes ---
    { id: 33, cat: 'T Shapes', opt: "(R U R' U') (R' F R F')", alts: ["R U R' F U' F' R U' R'"] },
    { id: 45, cat: 'T Shapes', opt: "F (R U R' U') F'", alts: ["y R' F' U F U R"] },

    // --- C Shapes ---
    { id: 34, cat: 'C Shapes', opt: "y2 R U R2 U' R' F (R U R U') F'", alts: ["y f R f' U' r U R' U' M'"] },
    { id: 46, cat: 'C Shapes', opt: "R' U (R' F R F') U R", alts: ["R' U' R' F R F' U R"] },

    // --- W Shapes ---
    { id: 36, cat: 'W Shapes', opt: "y2 (L' U' L U') (L' U L U') (L' U L) (L F' L' F)", alts: ["y2 R' F' U' F2 U R U' R' F' R"] },
    { id: 38, cat: 'W Shapes', opt: "(R U R' U) (R U' R' U') (R' F R F')", alts: ["U R' U' r' F R U R U' R' F'"] },

    // --- L Shapes ---
    { id: 47, cat: 'L Shapes', opt: "F' (L' U' L U) (L' U' L U) F", alts: ["R' U' R' F R F' R' F R F' U R"] },
    { id: 48, cat: 'L Shapes', opt: "F (R U R' U') (R U R' U') F'", alts: ["R U2 R' U' R U R' U2 R' F R F'"] },
    { id: 49, cat: 'L Shapes', opt: "y2 r U' (r2 U) (r2 U) (r2 U') r", alts: ["R B R2 F R2 B R2 F' R"] },
    { id: 50, cat: 'L Shapes', opt: "r' U (r2 U') (r2 U') r2 U r'", alts: ["y' R U2 R' U' R U' R' F R U R' U' F'"] },
    { id: 53, cat: 'L Shapes', opt: "(r' U' R U') (R' U R U') (R' U2 r)", alts: ["F U R U' R' U R U' R' U2 r"] },
    { id: 54, cat: 'L Shapes', opt: "(r U R' U) (R U' R' U) (R U2 r')", alts: ["y' r U2 R' U' R U R' U' R U' r'"] },

    // --- Line Shapes ---
    { id: 51, cat: 'Line Shapes', opt: "f (R U R' U') (R U R' U') f'", alts: ["y' R' U' R' F R F' R U' R' U2 R"] },
    { id: 52, cat: 'Line Shapes', opt: "y2 R' (F' U' F U') (R U R' U) R", alts: ["R U R' U R U' B U' B' R'"] },
    { id: 55, cat: 'Line Shapes', opt: "R U2 R2 (U' R U' R') U2 (F R F')", alts: ["y R' F R U R U' R2 F' R2 U' R' U R U R'"] },
    { id: 56, cat: 'Line Shapes', opt: "(r U r') (U R U' R') (U R U' R') (r U' r')", alts: ["r U r' U R U' R' M' U R U2 r'"] }
];

// ==========================================
// PLL ALGORITHMS (21 Cases)
// ==========================================
export const pllCases = [
    // --- EPLL (Edges Only) ---
    { id: 'H', cat: 'EPLL', opt: "M2 U M2 U2 M2 U M2", alts: ["M2 U' M2 U2 M2 U' M2"] },
    { id: 'Ua', cat: 'EPLL', opt: "y2 M2 U M U2 M' U M2", alts: ["R U R' U R' U' R2 U' R' U R' U R"] },
    { id: 'Ub', cat: 'EPLL', opt: "y2 M2 U' M U2 M' U' M2", alts: ["R' U R' U' R' U' R' U R U R2"] },
    { id: 'Z', cat: 'EPLL', opt: "M' U M2 U M2 U M' U2 M2", alts: ["M2 U M2 U M' U2 M2 U2 M'"] },

    // --- CPLL (Corners Only) ---
    { id: 'Aa', cat: 'CPLL', opt: "x (R' U R') D2 (R U' R') D2 R2 x'", alts: ["y' x L2 D2 L' U' L D2 L' U L x'"] },
    { id: 'Ab', cat: 'CPLL', opt: "x R2 D2 (R U R') D2 (R U' R) x'", alts: ["y x' R U' R D2 R' U R D2 R2 x"] },
    { id: 'E', cat: 'CPLL', opt: "y x' (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') x", alts: ["R2 U F R U R U' R' U' R U R' U' R U F' U' R2"] },

    // --- Adjacent Swap ---
    { id: 'F', cat: 'Adjacent Swap', opt: "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R", alts: ["y R' F R f R' F R2 U R' U' R' F' R2 U R' S"] },
    { id: 'Ja', cat: 'Adjacent Swap', opt: "y (R' U L') U2 (R U' R') U2 R L", alts: ["y2 x R2 F R F' R U2 r' U r U2 x'"] },
    { id: 'Jb', cat: 'Adjacent Swap', opt: "(R U R' F') (R U R' U') R' F R2 U' R'", alts: ["R U2 R' U' R U2 L' U R' U' L"] },
    { id: 'Ra', cat: 'Adjacent Swap', opt: "y (R U' R' U') (R U R D) (R' U' R D') (R' U2 R')", alts: ["y R U' R' U R U R D R' U' R D' R' U2 R'"] },
    { id: 'Rb', cat: 'Adjacent Swap', opt: "(R' U2) (R U2) (R' F R) (U R' U' R') F R2", alts: ["y R2 F R U R U' R' F' R U2 R' U2 R"] },
    { id: 'T', cat: 'Adjacent Swap', opt: "(R U R' U') (R' F R2) (U' R' U') (R U R' F')", alts: ["R U R' U' R' F R2 U' R' U F' L' U L"] },

    // --- Diagonal Swap ---
    { id: 'Na', cat: 'Diagonal Swap', opt: "(R U R' U) (R U R' F') (R U R' U') R' F R2 U' R' U2 (R U' R')", alts: ["r D r U2 r' D r U2 r D r U2 r' D r U2 r D r"] },
    { id: 'Nb', cat: 'Diagonal Swap', opt: "(R' U R U') (R' F' U' F) (R U R' F) R' F' (R U' R)", alts: ["r' D' F r U' r' F' D r2 U r' U' r' F r F'"] },
    { id: 'V', cat: 'Diagonal Swap', opt: "(R' U R' U') (R D' R' D) (R' U D') (R2 U' R2) D R2", alts: ["R' U R' d' R' F' R2 U' R' U R' F R F"] },
    { id: 'Y', cat: 'Diagonal Swap', opt: "F R (U' R' U') (R U R' F') (R U R' U') (R' F R F')", alts: ["F R' F R2 U' R' U' R U R' F' R U R' U' F'"] },

    // --- G Perms ---
    { id: 'Ga', cat: 'G Perms', opt: "R2 (U R' U R' U' R U') R2 D (U' R' U R) D'", alts: ["R2 u R U R' U' R u' R2 F' U F"] },
    { id: 'Gb', cat: 'G Perms', opt: "(R' U' R U) D' R2 (U R' U R U' R U') R2 D", alts: ["y F U F' R2 u R' U R U' R u' R2"] },
    { id: 'Gc', cat: 'G Perms', opt: "R2 (U' R U' R U R' U) R2 D' (U R U' R') D", alts: ["R2 u' R U' R U R' u R2 f R' f'"] },
    { id: 'Gd', cat: 'G Perms', opt: "(R U R' U') D R2 (U' R U' R' U R' U) R2 D'", alts: ["R U R' y' R2 u' R U' R' U R' u R2"] }
];