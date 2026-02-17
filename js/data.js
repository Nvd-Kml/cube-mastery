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
    { id: 1, cat: 'Dot Shapes', opt: "(R U2 R') (R' F R F') U2 (R' F R F')", alts: ["R U2 R2 F R F' U2 R' F R F'", "y R U' R2 D' r U' r' D R2 U R'", "F R U R' U' R F U' r' U R U M'", "L' U2 L2 F' L' F U2 L F' L' F"] },
    { id: 2, cat: 'Dot Shapes', opt: "F (R U R' U') F' f (R U R' U') f'", alts: ["y' R U' R2 D' r U r' D R2 U R'", "F R U R' U' S R U R' U' F'", "F R U R' U' F' F R U R U F", "y r U r U2 R U2 R' U2 r U' r'"] },
    { id: 3, cat: 'Dot Shapes', opt: "y' f (R U R' U') f' U' F (R U R' U') F", alts: ["y R' F2 R2 U2 R' F R U2 R2 F2 R", "y' f R U R' U' F' U F R U R' U' F'", "r' R2 U R' U r U2 r' U M'", "M R U R' U r U2 r U M'"] },
    { id: 4, cat: 'Dot Shapes', opt: "y' f (R U R' U') f U F (R U R' U') F", alts: ["y' R' F2 R2 U2 R' F' R U2 R2 F2 R", "y' f R U R' U' F U F R U R' U' F'", "R' F R F' U' S R' U R U R S", "y F U R U R' F U' F R U R' U' F"] },
    { id: 17, cat: 'Dot Shapes', opt: "(R U R' U) (R' F R F') U2 (R' F R F')", alts: ["R U R' U R' F R F' U2 R' F R F'", "y2 F R' F' R U S R U' R' S'", "y2 F R' F' R2 r' U R U' R' U' M'", "y' F r U r U' S r' F r S'"] },
    { id: 18, cat: 'Dot Shapes', opt: "y (R U2 R') (R' F R F') U2 M' (U R U' r')", alts: ["y R U2 R2 F R F' U2 M' U R U' r'", "y F S' R U' R' S R U2 R' U' F", "F U R' U R U2 r2 U' R U' R' U2 r", "R D r U' r' D' R' U' R2 F R F' R"] },
    { id: 19, cat: 'Dot Shapes', opt: "M U (R U R' U') M' (R' F R F')", alts: ["y S' R U R' S U' R' F R F'", "M U R U R U' M' R' F R F'", "R' U2 F R U R' U' F2 U2 F R", "r U R U R' U' r' R2 F R F'"] },
    { id: 20, cat: 'Dot Shapes', opt: "(r U R' U') M2 (U R U' R') U' M'", alts: ["F U R' U' M2 U R U' R' U' M'", "M' U2 M U2 M' U M U2 M' U2 M", "S R U R' S' U M' U R U' R'", "S R' U R U R U R U' R' S'"] },

    // --- Square Shapes ---
    { id: 5, cat: 'Square Shapes', opt: "r' U2 (R U R' U) r", alts: ["U2 R U R' U r", "y2 l' U2 L U L' U l", "y2 R' F2 r U r F R", "y2 R' F2 L F L' F R"] },
    { id: 6, cat: 'Square Shapes', opt: "r U2 (R' U' R U') r'", alts: ["U2 R' U' R U' r'", "F U' R2 D R' U' R D' R2 U F'", "y2 l U2 L' U L U l'", "y' x' D R2 U' R' U R' D' x"] },

    // --- Lightning Shapes ---
    { id: 7, cat: 'Lightning Shapes', opt: "r (U R' U R) U2 r'", alts: ["r U R' U R U2 r'", "S R U R U R U2 R' U S'", "L' U2 L U2 L F' L' F", "y2 l U L U L U2 l'"] },
    { id: 8, cat: 'Lightning Shapes', opt: "y2 r' (U' R U' R') U2 r", alts: ["y2 r' U' R U' R' U2 r", "l U L' U' L' U2 l", "R U2 R' U2 R' F R F'", "R' F r U' r' F2 R"] },
    { id: 11, cat: 'Lightning Shapes', opt: "M (R U R U R U2 R') U M'", alts: ["r' R2 U R' U R U2 R' U M'", "y2 r U R' U R F R F R U2 r'", "S R U R' U R U2 R' U2 S'", "M R U R' U R U2 R' U M'"] },
    { id: 12, cat: 'Lightning Shapes', opt: "y' M' (R' U' R U' R' U2 R) U' M", alts: ["y' M' R' U' R U' R' U2 R U M", "F R U R' U' F' U F R U R' U' F'", "y' S R' U' R U' R' U2 R U2 S'", "y l L2 U L' U' L U2 L U' M'"] },
    { id: 39, cat: 'Lightning Shapes', opt: "y L F (L' U L U) F U' L'", alts: ["y' R U R' F' U' F U R U2 R'", "y' f' r U r U r' F r S", "y L F L' U L U F U' L'", "y' f' L F L' U' L' U L S"] },
    { id: 40, cat: 'Lightning Shapes', opt: "y R' F (R U R' U') F' U R", alts: ["y R' F R U R U F U R", "y' f R' F' R U R U' R' S'", "R r D r' U r D' r' U' R'", "y' L' U L F U F' U' L' U2 L"] },

    // --- Fish Shapes ---
    { id: 9, cat: 'Fish Shapes', opt: "y (R U R' U') (R' F R) (R U R' U') F'", alts: ["y R U R' U' R' F R2 U R' U' F", "R U2 R' U' S' R U' R' S", "y2 F' U' F r U' r' U r U r'", "y' L' U L U' L F' L' F L' U2 L"] },
    { id: 10, cat: 'Fish Shapes', opt: "(R U R' U) (R' F R F') (R U2 R')", alts: ["R U R' U R' F R F' R U2 R'", "y F U F' R' F R U R' F' R", "y M' R' U2 R U R U R U M", "y2 L' U L U L F' L2 U L U F"] },
    { id: 35, cat: 'Fish Shapes', opt: "(R U2 R') (R' F R F') (R U2 R')", alts: ["R U2 R2 F R F' R U2 R'", "F R U R' U' F' R U R' U R U2 R'", "y L' U2 L2 F' L' F L' U2 L", "R U2 R' d' R' F R U' R' F' R"] },
    { id: 37, cat: 'Fish Shapes', opt: "F R (U' R' U') (R U R') F'", alts: ["F R' F' R U R U' R'", "F R U' R' U' R U R' F'", "y F r U r U r F r", "y2 r2 D' r U' r' D r U r"] },

    // --- Knight Move Shapes ---
    { id: 13, cat: 'Knight Move Shapes', opt: "(r U' r') U (r U r') (F' U F)", alts: ["F U R U2 R' U' R U R' F'", "F U R U R2 F' R U R U' R'", "U r U r U r F U F", "r U r U r U r y L' U L"] },
    { id: 14, cat: 'Knight Move Shapes', opt: "R' F (R U R') F R (F U' F')", alts: ["R' F R U R' F' R F U' F", "U R' U' r' F R2 U R' U' F'", "F U L' U L2 F L' U' L' U L", "l U l U l U L F U' F"] },
    { id: 15, cat: 'Knight Move Shapes', opt: "(r' U' r) (R' U' R U) (r' U r)", alts: ["r' U R U R U r U r", "y2 l' U' l L U L U l' U l", "r' U' M' U' R U r U r", "y2 R' F' R L' U L U R' F R"] },
    { id: 16, cat: 'Knight Move Shapes', opt: "(r U r') (R U R' U') (r U' r')", alts: ["U r R U R' U' r U' r'", "U M U R' U' r U' r", "y2 R' F R U R' U' F' R U' R' U2 R", "y2 l U l' L' U' L U' l U' l'"] },

    // --- OCLL (Cross) ---
    { id: 21, cat: 'OCLL', opt: "(R U R' U) (R U' R' U) (R U2 R')", alts: ["R U R' U R U R' U R U2 R'", "y R U2 R' U R U R U R' U R'", "y F R U R' U R U R U R U F", "R' U' R U' R' U R U' R' U2 R"] },
    { id: 22, cat: 'OCLL', opt: "R U2 (R2' U') (R2 U') (R2' U') U' R", alts: ["R U2 R2 U' R2 U' R2 U2 R", "R' U2 R2 U R2 U R2 U2 R'", "F R U R' U' S' R U R' U F'", "F R U R' U' F' F R U R' U' F'"] },
    { id: 23, cat: 'OCLL', opt: "R2 D (R' U2 R) D' (R' U2 R')", alts: ["R2 D R' U2 R D' R' U2 R'", "y2 R2 D' R U2 R' D R U2 R", "R U R U R U2 R2 U' R U' R' U2 R", "y' R U2 R' U' R U' R' L' U2 L U L U L"] },
    { id: 24, cat: 'OCLL', opt: "(r U R' U') (r' F R F')", alts: ["r U R' U' r' F R F", "y' x' R U R' D R U' R' D' x", "y2 R' F' r U R U' r' F", "y R U R D R' U' R D' R2"] },
    { id: 25, cat: 'OCLL', opt: "y (F' r U R') (U' r' F R)", alts: ["R U2 R D R' U2 R D' R2", "y F r U R' U' r' F R", "F R F r U R U' r'", "x R' U R D' R' U' R D x'"] },
    { id: 26, cat: 'OCLL', opt: "y R U2 (R' U' R U') R'", alts: ["y R U2 R' U' R U' R'", "R' U R U' R' U2 R", "y2 L' U' L U' L' U2 L", "y2 L' U R U L U R'"] },
    { id: 27, cat: 'OCLL', opt: "(R U R' U) (R U2 R')", alts: ["R U R U R U2 R'", "y' R' U2 R U R U R", "y L' U2 L U L U L", "y2 L U L U L U2 L'"] },

    // --- All Corners Oriented ---
    { id: 28, cat: 'All Corners Oriented', opt: "(r U R' U') M (U R U' R')", alts: ["F U R' U' M U R U' R'", "R' F R S R' F' R S'", "F U R' U r R U R U' R", "y2 M' U M U2 M' U M"] },
    { id: 57, cat: 'All Corners Oriented', opt: "(R U R' U') M' (U R U' r')", alts: ["R U R' U' M' U R U' r'", "y R U' R' S R U R' S", "y R U R' S' R U' R' S", "R U R U' R' r U R U' r"] },

    // --- Awkward Shapes ---
    { id: 29, cat: 'Awkward Shapes', opt: "y (R U R') U (R U' R') (F' U' F) (R U R')", alts: ["r2 D' r U r D r2 U r U r", "y R U R' U' R U' R' F' U F R U R'", "y S' R U R' U' R' F R F' U S", "M U R U R' U' R' F R F' M'"] },
    { id: 30, cat: 'Awkward Shapes', opt: "y2 F U (R U2 R') U' (R U2 R') U' F'", alts: ["y' r' D r U r' D r2 U' r' U r U r", "y2 F U R U2 R' U' R U2 R' U' F'", "y2 F R' F R2 U' R' U' R U R' F2", "y S' R' U' R F R' U R U' F'"] },
    { id: 41, cat: 'Awkward Shapes', opt: "y2 (R U R' U) (R U2 R') F (R U R' U') F'", alts: ["y2 R U R U R U2 R' F R U R' U' F'", "y2 F U R2 D R' U' R R D' R D' R2 F", "y' S U' R' F U F U R S", "M U F L' U' L U F M'"] },
    { id: 42, cat: 'Awkward Shapes', opt: "(R' U' R U') (R' U2 R) F (R U R' U') F'", alts: ["R' U' R U' R' U2 R F R U R' U F", "y F S R U R U F U S", "y R F R F R' F R F R U R' U' R U R'", "y R' U' F2 u' R U R' D R2 B"] },

    // --- P Shapes ---
    { id: 31, cat: 'P Shapes', opt: "(R' U' F) (U R U' R') F' R", alts: ["R U F U R U' R' F R", "y2 S' L' U' L U L F' L' F", "y S R U R' U' F U' F", "y' F R' F R U R U R U R U' R'"] },
    { id: 32, cat: 'P Shapes', opt: "S (R U R' U') (R' F R f')", alts: ["S R U R' U' R' F R f", "y2 L U F U L U L F L", "R U B' U' R' U R B R'", "y' R' F R F' U r U r U r U r"] },
    { id: 43, cat: 'P Shapes', opt: "y R' U' (F' U F) R", alts: ["y R' U' F' U F R", "y2 F U' L' U L F", "F L U L U f", "B' U' R' U R B"] },
    { id: 44, cat: 'P Shapes', opt: "f (R U R' U') f'", alts: ["F R U R' U' F", "y2 F U R U' R' F'", "y R U B U' B' R'", "y' L U F U F' L'"] },

    // --- T Shapes ---
    { id: 33, cat: 'T Shapes', opt: "(R U R' U') (R' F R F')", alts: ["R U R U' R' F R F", "y2 L' U' L U L F' L' F", "y2 r F r U r U r F", "R U R F U' F R U' R'"] },
    { id: 45, cat: 'T Shapes', opt: "F (R U R' U') F'", alts: ["F R U R' U' F'", "y R' F' U F U R", "y2 f U R U' R' f'", "y2 F L' U' L U F"] },

    // --- C Shapes ---
    { id: 34, cat: 'C Shapes', opt: "y2 R U R2 U' R' F (R U R U) F'", alts: ["y f R f U r U R U M", "y2 R U R2 U' R' F R U R U' F'", "F R U R' U' R' F r U R U' r", "y2 R U R' U' B' R' F R F B"] },
    { id: 46, cat: 'C Shapes', opt: "R' U (R' F R F') U R", alts: ["R' U' R' F R F U R", "R' F U F R U' R' U2 R", "y F R U R U F U R U R U R U2 R'", "l' U2 L2 F' L' F U L' U L"] },

    // --- W Shapes ---
    { id: 36, cat: 'W Shapes', opt: "y2 (L' U' L U') (L' U L U') (L' U L) (L F' L' F)", alts: ["y R U R2 F' U' F U R2 U2 R'", "y2 L' U L U' L' U L U L F L' F", "y2 R U R' F' R U R' U' R' F R U R' F R F", "y2 R' F' U' F2 U R U' R' F' R"] },
    { id: 38, cat: 'W Shapes', opt: "(R U R' U) (R U' R' U') (R' F R F')", alts: ["R U R U R U' R' U' R' F R F", "y F R U R S U R U R' F'", "U R' U' r' F R U R U' R' F'", "y2 L U L' U L U' L' U' L' B L B'"] },

    // --- L Shapes ---
    { id: 47, cat: 'L Shapes', opt: "F' (L' U' L U) (L' U' L U) F", alts: ["F L U L U L U L U F", "y' F R' F' R U2 R U' R' U R U2 R'", "R' U' R' E R F' R' E R F U R", "y' R' F U F U F U F U R"] },
    { id: 48, cat: 'L Shapes', opt: "F (R U R' U') (R U R' U') F'", alts: ["F R U R' U' R U R' U' F'", "y2 f U R U' R' U R U' R' F'", "R U2 R' U' R U R' U2 R' F R F", "F R' F' U2 R U R' U R2 U2 R'"] },
    { id: 49, cat: 'L Shapes', opt: "y2 r U' (r2 U) (r2 U) (r2) U' r", alts: ["y2 r U r2 U r2 U r2 U' r", "l U l2 U l2 U l2 U l", "R B R2 F R2 B R2 F' R", "y2 R' F R' F' R2 U2 B' R B R"] },
    { id: 50, cat: 'L Shapes', opt: "r' U (r2 U') (r2 U') (r2) U r'", alts: ["r U r2 U' r2 U' r2 U r", "y2 R' F R2 B' R2 F' R2 B R", "y' R U2 R' U' R U' R' F R U R' U' F'", "y2 U l2 U l2 U l2 U l"] },
    { id: 53, cat: 'L Shapes', opt: "(r' U' R U') (R' U R U') (R' U2 r)", alts: ["F U R U' R' U R U' R' U2 r", "y2 l' U L U' L' U L U L' U2 l", "y r' U2 R U R U R U R' U r", "y' l' U2 L U L U L U L"] },
    { id: 54, cat: 'L Shapes', opt: "(r U R' U) (R U' R' U) (R U2 r')", alts: ["r U R' U R U R U R U2 r", "y' r U2 R' U' R U R' U' R U' r'", "y' r U r R U R' U' R U R' U' r U r", "y2 T U L U L U L' U L U2 l"] },

    // --- Line Shapes ---
    { id: 51, cat: 'Line Shapes', opt: "f (R U R' U') (R U R' U') f'", alts: ["y2 F U R U' R' U R U R' F'", "F R U R' U' R U R' U' f'", "y' R' U' R' F R F' R U' R' U2 R F R F R U' R' U", "y r' F U F U F U F U r"] },
    { id: 52, cat: 'Line Shapes', opt: "y2 R' (F' U' F U') (R U R' U) R", alts: ["y2 R' F' U' F U R U R' U R", "R U R U R U' B U' B' R'", "R U R U R d' R U' R' F'", "R U R U R U' R U' R' F'"] },
    { id: 55, cat: 'Line Shapes', opt: "R U2 R2 (U' R U' R') U2 (F R F')", alts: ["y R F U R U' R2 F' R2 U R' U' R", "y R' F R U R U R2 F' R2 U' R' U R U R'", "R U2 R2 U' R U' R' U2 F R F'", "r U2 R2 F R F U2 r' F R F"] },
    { id: 56, cat: 'Line Shapes', opt: "(r U r') (U R U' R') (U R U' R') (r U' r')", alts: ["U r U R U' R' U R U' R' r U r", "r U r U R U' R' M' U R U2 r'", "F R U R U' R F r U R' U' r'", "r U r U' R' U R U' R' U R r U r"] }
];

// ==========================================
// PLL ALGORITHMS (21 Cases)
// ==========================================
export const pllCases = [
    // --- EPLL (Edges Only) ---
    { id: 'H', cat: 'EPLL', opt: "(M2 U' M2) U2 (M2 U' M2)", alts: ["M2 U M2 U2 M2 U' M2", "M2 U M2 U2 M2 U M2", "R2 S2 R2 U' R2 S2 R2", "M2 U2 M2 U M2 U2 M2"] },
    { id: 'Ua', cat: 'EPLL', opt: "y2 (M2 U M) U2 (M' U M2)", alts: ["y2 M2 U M U2 M' U M2", "R U R U R' U' R2 U' R' U R' U R", "y R2 U' S' U2 S U' R2", "y2 R U R U R U R U' R' U' R2"] },
    { id: 'Ub', cat: 'EPLL', opt: "y2 (M2 U' M) U2 (M' U' M2)", alts: ["y2 M2 U M U2 M' U' M2", "R' U R U' R' U' R' U R U R2", "R2' U R U R' U' R3 U' R' U R'", "y2 R2 U R U R' U' R' U' R' U R'"] },
    { id: 'Z', cat: 'EPLL', opt: "(M2 U) (M2 U) (M' U2) M2 (U2 M')", alts: ["M' U' M2 U' M2 U' M' U2 M2", "M2 U M2 U M' U2 M2 U2 M'", "y M2 U' M2 U' M' U2 M2 U2 M'", "y M' U M2 U M2 U M' U2 M2"] },

    // --- CPLL (Corners Only) ---
    { id: 'Aa', cat: 'CPLL', opt: "x (R' U R') D2 (R U' R') D2 R2 x'", alts: ["x R U R' D2 R U' R' D2 R2 x'", "y' x L2 D2 L' U' L D2 L' U L", "L' U R' D2 R U' R' D2 R2 x'", "y x' R2 D2 R' U' R D2 R' U R' x"] },
    { id: 'Ab', cat: 'CPLL', opt: "x R2 D2 (R U R') D2 (R U R) x'", alts: ["x R2 D2 R U R' D2 R U' R x'", "y' x L U L D2 L' U L D2 L2", "y x' R U' R D2 R' U R D2 R2 x", "R' B' R U R D R' U R D' R2 B R"] },
    { id: 'E', cat: 'CPLL', opt: "y x' (R U' R' D) (R U R' D') (R U R' D) (R U R' D') x", alts: ["y x' R U' R' D R U R' D' R U R' D R U' R' D' x", "y R' U' R' D' R U' R' D R U R' D' R U R D R2", "R2 U F R U R U' R' U R U R U R U F U' R2", "y x' L' U L D' L' U L D L' U L D' L' U L D"] },

    // --- Adjacent Swap ---
    { id: 'F', cat: 'Adjacent Swap', opt: "y (R' U' F') (R U R' U') R' F R2 (U' R' U') (R U R' U) R", alts: ["y R' U' F R U R' U' R' F R2 U' R' U' R U R U R", "y R' F R f R' F R2 U R' U' R' F' R2 U R' S", "R' U R U' R2 F' U' F U R F R' F R2", "y R2 F R F' R' U' F' U F R2 U R' U' R"] },
    { id: 'Ja', cat: 'Adjacent Swap', opt: "y (R' U L') U2 (R U' R') U2 R L", alts: ["y2 x R2 F R F R U2 r U r U2 x'", "y R' U L' U2 R U' R' U2 R L", "L' U L F L U L U L F L2 U L", "R U L U R' U2 L U' L' U2 L"] },
    { id: 'Jb', cat: 'Adjacent Swap', opt: "(R U R' F') (R U R' U') R' F R2 U' R'", alts: ["R U R' F' R U R' U' R' F R2 U' R'", "R U2 R' U' R U2 L' U R' U' L", "r' F R F r U2 R' U R U2 R'", "L' U R U L U2 R' U R U2 R'"] },
    { id: 'Ra', cat: 'Adjacent Swap', opt: "y (R U' R' U') (R U R D) (R' U' R D') (R' U2 R')", alts: ["y R U' R' U R U R D R' U' R D' R' U2 R'", "y R U R' F R U2 R' U2 R' F R U R U2 R'", "L U2 L' U2 L F' L' U L U L F L2", "y R U R U R U R U R' D' R U' R' D R2 U R'"] },
    { id: 'Rb', cat: 'Adjacent Swap', opt: "(R' U2) (R U2) (R' F R) (U R' U' R') F R2", alts: ["R' U2 R U2 R' F R U R' U' R' F' R2", "y R2 F R U R U' R' F' R U2 R' U2 R", "R' U2 R' D' R U' R' D R U R U' R' U' R", "y R' U R U R' U' R' D' R U R' D R U2 R"] },
    { id: 'T', cat: 'Adjacent Swap', opt: "(R U R' U') (R' F R2) (U' R' U') (R U R' F')", alts: ["R U R' U' R' F R2 U' R' U' R U R' F'", "l b d L' U' F U2 L' U' L' U L U F S M r u E U' R'", "R U R' U' R' F R2 U' R U F L' U L", "R2 u R2 u' R2 F2 u' F2 u F2"] },

    // --- Diagonal Swap ---
    { id: 'Na', cat: 'Diagonal Swap', opt: "(R U R' U) (R U R' F') (R U R' U') R' F R2 U' R' U2 (R U' R')", alts: ["R U R U R U R' F R U R' U' R' F R2 U' R' U2 R U' R'", "F R U R' U' R' F R2 F U R U R U F' R'", "R F U R U R U F R2 F R U R U' R' F", "r D r U2 r' D r U2 r D r U2 r' D r U2 r D r"] },
    { id: 'Nb', cat: 'Diagonal Swap', opt: "(R' U R U R') (F U' F) (R U R) (F R' F') (R U R)", alts: ["R' U R U' R' F' U' F R U R' F R' F' R U' R", "r' D' F r U' r' F' D r2 U r' U' r' F r F'", "R' U L' U2 R U' L R' U L' U2 R U' L", "L U L U L' U' L F L' U L U L F L2 U L U2 L' U L"] },
    { id: 'V', cat: 'Diagonal Swap', opt: "(R' U R' U') (R D' R' D) (R' U D') (R2 U' R2) D R2", alts: ["R' U R U R D' R' D R' U D' R2 U' R2 D R2", "R' U R U' R' f' U' R U2 R' U' R U' R' F R", "y R U R U R' D R D' R U' D R2 U R2 D' R2", "R' U R' U' y R' F' R2 U' R' U R' F R F"] },
    { id: 'Y', cat: 'Diagonal Swap', opt: "F R (U' R' U') (R U R' F') (R U R' U') (R' F R F')", alts: ["F R U' R' U R U R F R U R' U' R' F R F", "F R' F R2 U' R' U' R U R' F' R U R' U' F'", "R2 U' R2 U' R2 U F U F' R2 F U' F", "F R' F' R U R U' R2 U' R U R F U F"] },

    // --- G Perms ---
    { id: 'Ga', cat: 'G Perms', opt: "R2 (U R' U R' U' R U') R2 D (U' R' U R) D'", alts: ["R2 U R U R' U' R U' R2 D U' R' U R D'", "R2 u R U R' U' R u' R2 F' U F", "y R U R' F R U R' U' R' F R U R' F R2 U' R' U' R U R' F'", "R2 u R' U R' U' R u' R2 y' R U R"] },
    { id: 'Gb', cat: 'G Perms', opt: "(R' U' R U) D' R2 (U R' U R U' R U') R2 D", alts: ["D R' U R U D' R2 U R' U R U R U' R2", "R' U' R U D' R2 U R' U R U R U' R2 D", "y F U F R2 u R' U R U' R u' R2", "R' d' F R2 u R' U R U' R u' R2"] },
    { id: 'Gc', cat: 'G Perms', opt: "R2 (U' R U' R U R' U) R2 D' (U R U' R') D", alts: ["R2 U R U' R U R' U R2 D' U R U' R' D", "y2 R2 F2 R U2 R U2 R' F R U R' U' R' F R2", "D R2 U' R U' R U R' U R2 D' U R U' R'", "R2 u' R U' R U R' u R2 f R' f'"] },
    { id: 'Gd', cat: 'G Perms', opt: "(R U R' U') D R2 (U' R U' R' U R' U) R2 D'", alts: ["R U R' U' D R2 U' R U' R' U R' U R2 D'", "D' R U R' U' D R2 U' R U' R' U R U R2", "R U R y' R2 u' R U' R' U R' u R2", "y R2 F' R U R U' R' F' R U2 R' U2 R' F2 R2"] }
];