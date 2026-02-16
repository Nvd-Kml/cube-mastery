import { f2lCases, ollCases, pllCases } from './data.js';

// --- State Management ---
let currentStage = 'F2L'; 
let currentCategory = 'All';
let searchQuery = '';

// DOM Elements
const container = document.getElementById('card-container');
const filterPills = document.getElementById('filter-pills');
const searchInput = document.getElementById('search-input');
const resultsCount = document.getElementById('results-count');

// Maps the stage string to the correct array and API parameters
const stageConfig = {
    'F2L': { data: f2lCases, stageStr: 'f2l', viewStr: null, prefix: 'Case' },
    'OLL': { data: ollCases, stageStr: 'oll', viewStr: 'plan', prefix: 'OLL' },
    'PLL': { data: pllCases, stageStr: 'pll', viewStr: 'plan', prefix: 'PLL' }
};

// Math helper for Scrambles
function getSetupScramble(alg) {
    let cleanAlg = alg.replace(/[()]/g, '');
    let moves = cleanAlg.trim().split(/\s+/);
    moves.reverse();
    return moves.map(move => {
        if (move.endsWith("2'")) return move.replace("2'", "2");
        if (move.endsWith("'")) return move.slice(0, -1);
        if (move.endsWith("2")) return move;
        return move + "'"; 
    }).join(' ');
}

// Extract unique categories for the current stage
function getCategories(data) {
    const categories = new Set(data.map(item => item.cat));
    return ['All', ...Array.from(categories)];
}

// Render the category pill buttons
function renderFilters() {
    const config = stageConfig[currentStage];
    const categories = getCategories(config.data);
    
    filterPills.innerHTML = categories.map(cat => {
        const isActive = cat === currentCategory;
        const baseClasses = "px-3 py-1 rounded-full text-sm font-semibold transition-all cursor-pointer border";
        const activeClasses = isActive 
            ? "bg-blue-600/20 border-blue-500 text-blue-400" 
            : "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-slate-200";
        return `<button class="filter-btn ${baseClasses} ${activeClasses}" data-cat="${cat}">${cat}</button>`;
    }).join('');

    // Attach click listeners to pills
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentCategory = e.target.getAttribute('data-cat');
            renderApp();
        });
    });
}

// Render the algorithm cards based on current state
function renderCards() {
    const config = stageConfig[currentStage];
    
    // 1. Filter by Category
    let filteredData = config.data;
    if (currentCategory !== 'All') {
        filteredData = filteredData.filter(c => c.cat === currentCategory);
    }

    // 2. Filter by Search Query (searches ID, Category, Optimal Alg, and Alternative Algs)
    if (searchQuery) {
        const q = searchQuery.toLowerCase().replace(/[()']/g, ''); // strip punctuation for easier searching
        filteredData = filteredData.filter(c => {
            const searchString = `${c.id} ${c.cat} ${c.opt} ${c.alts ? c.alts.join(' ') : c.alt}`.toLowerCase().replace(/[()']/g, '');
            return searchString.includes(q);
        });
    }

    resultsCount.textContent = `Showing ${filteredData.length} algorithms`;

    // 3. Build HTML
    container.innerHTML = filteredData.map(c => {
        const setupScramble = getSetupScramble(c.opt);
        const urlAlg = c.opt.replace(/[()]/g, '');
        let imgUrl = `https://visualcube.api.cubing.net/visualcube.php?fmt=svg&size=150&stage=${config.stageStr}&bg=t&sch=y,r,g,w,o,b&case=${encodeURIComponent(urlAlg)}`;
        if (config.viewStr) imgUrl += `&view=${config.viewStr}`;

        // Alternatives Logic
        let altsHtml = '';
        if (c.alts && c.alts.length > 0) {
            altsHtml += `
            <div class="p-3 rounded-lg border border-slate-700 bg-slate-900/50">
                <span class="block text-xs text-slate-400 font-bold mb-1 uppercase tracking-wider">Alternative 1</span>
                <p class="font-mono text-slate-300">${c.alts[0]}</p>
            </div>`;

            if (c.alts.length > 1) {
                let extraAlts = '';
                for (let i = 1; i < c.alts.length; i++) {
                    extraAlts += `
                    <div class="p-3 mt-2 rounded-lg border border-slate-700 bg-slate-900/50">
                        <span class="block text-xs text-slate-400 font-bold mb-1 uppercase tracking-wider">Alternative ${i + 1}</span>
                        <p class="font-mono text-slate-300">${c.alts[i]}</p>
                    </div>`;
                }
                altsHtml += `
                <details class="group mt-2">
                    <summary class="cursor-pointer text-sm font-bold text-blue-400 hover:text-blue-300 flex items-center select-none transition-colors">
                        <i class="fa-solid fa-chevron-right mr-2 transition-transform duration-200 group-open:rotate-90"></i>
                        Show ${c.alts.length - 1} More Alternatives
                    </summary>
                    <div class="mt-2 pl-3 border-l-2 border-blue-500/30 space-y-2 animate-fade-in">
                        ${extraAlts}
                    </div>
                </details>`;
            }
        } else if (c.alt) {
            altsHtml += `
            <div class="p-3 rounded-lg border border-slate-700 bg-slate-900/50">
                <span class="block text-xs text-slate-400 font-bold mb-1 uppercase tracking-wider">Alternative</span>
                <p class="font-mono text-slate-300">${c.alt}</p>
            </div>`;
        }

        return `
        <div class="bg-slate-800 rounded-2xl p-6 border border-slate-700 cube-hover flex flex-col sm:flex-row items-start gap-6 animate-fade-in">
            <div class="flex-shrink-0 bg-slate-900 p-4 rounded-xl border border-slate-700 flex justify-center items-center h-36 w-36">
                <img src="${imgUrl}" alt="${config.prefix} Case ${c.id}" class="w-full h-full object-contain">
            </div>
            <div class="flex-grow w-full">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold">${config.prefix} ${c.id} <span class="text-sm font-normal text-slate-400 ml-2">${c.cat}</span></h3>
                </div>
                <div class="space-y-3 mt-4">
                    <div class="p-3 rounded-lg border border-blue-500/30 bg-blue-500/10">
                        <span class="block text-xs text-blue-400 font-bold mb-1 uppercase tracking-wider">Setup Scramble</span>
                        <p class="font-mono text-sm text-blue-300">${setupScramble}</p>
                    </div>
                    <div class="p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10">
                        <span class="block text-xs text-emerald-400 font-bold mb-1 uppercase tracking-wider">Optimal Solution</span>
                        <p class="font-mono text-lg text-emerald-400 optimal-algo">${c.opt}</p>
                    </div>
                    ${altsHtml}
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// Master function to sync UI with State
function renderApp() {
    renderFilters();
    renderCards();
}

// --- Event Listeners ---

// Main Tabs Logic
document.querySelectorAll('.stage-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        // Reset styles for all tabs
        document.querySelectorAll('.stage-tab').forEach(t => {
            t.className = 'stage-tab px-6 py-2 rounded-md font-bold transition-all text-slate-400 hover:text-white';
        });
        
        // Add active style to clicked tab
        e.target.className = 'stage-tab px-6 py-2 rounded-md font-bold transition-all bg-blue-600 text-white shadow-lg';
        
        // Update State and Re-render
        currentStage = e.target.id.replace('tab-', '').toUpperCase();
        currentCategory = 'All'; // Reset category when switching stages
        renderApp();
    });
});

// Search Logic
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderCards(); // Only need to re-render cards, not the filter pills
});

// Initial Load
document.addEventListener('DOMContentLoaded', renderApp);