import { f2lCases, ollCases, pllCases } from './data.js';

// --- Local Storage Stats Engine ---
let userStats = JSON.parse(localStorage.getItem('cubemastery_stats')) || { F2L: {}, OLL: {}, PLL: {} };

function saveTime(stage, id, timeMs) {
    let timeSec = parseFloat((timeMs / 1000).toFixed(2));
    if (!userStats[stage][id]) userStats[stage][id] = [];
    userStats[stage][id].push(timeSec);
    localStorage.setItem('cubemastery_stats', JSON.stringify(userStats));
}

function getPB(stage, id) {
    if (!userStats[stage] || !userStats[stage][id] || userStats[stage][id].length === 0) return null;
    return Math.min(...userStats[stage][id]).toFixed(2);
}

// --- State Management ---
let currentView = 'learn'; 
let currentStage = 'F2L'; 
let currentCategory = 'All';
let searchQuery = '';

const stageConfig = {
    'F2L': { data: f2lCases, stageStr: 'f2l', viewStr: null, prefix: 'Case' },
    'OLL': { data: ollCases, stageStr: 'oll', viewStr: 'plan', prefix: 'OLL' },
    'PLL': { data: pllCases, stageStr: 'pll', viewStr: 'plan', prefix: 'PLL' }
};

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

function getCategories(data) {
    const categories = new Set(data.map(item => item.cat));
    return ['All', ...Array.from(categories)];
}

// ==========================================
// VIEW ROUTER (Desktop + Mobile Nav Sync)
// ==========================================
const desktopInactive = 'nav-btn desktop-nav w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all';
const desktopActive = 'nav-btn desktop-nav w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all bg-blue-600/10 text-blue-400 font-bold border border-blue-500/20';

const mobileInactive = 'nav-btn mobile-nav flex-1 flex flex-col items-center p-2 rounded-lg text-slate-500 hover:text-slate-300 transition-colors';
const mobileActive = 'nav-btn mobile-nav flex-1 flex flex-col items-center p-2 rounded-lg text-blue-400 transition-colors';

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        currentView = e.currentTarget.getAttribute('data-view');

        document.querySelectorAll('.desktop-nav').forEach(b => {
            b.className = b.getAttribute('data-view') === currentView ? desktopActive : desktopInactive;
        });
        
        document.querySelectorAll('.mobile-nav').forEach(b => {
            b.className = b.getAttribute('data-view') === currentView ? mobileActive : mobileInactive;
        });
        
        document.querySelectorAll('.view-section').forEach(sec => sec.classList.add('hidden'));
        document.getElementById(`view-${currentView}`).classList.remove('hidden');
        
        if (currentView === 'train' && timerState === 'IDLE') {
            document.getElementById('train-active-panel').classList.add('hidden');
            document.getElementById('train-setup-panel').classList.remove('hidden');
            renderTrainerSetup();
        } else if (currentView === 'learn') {
            renderCards(); 
        }
    });
});

document.querySelectorAll('.logo-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        document.querySelector('.nav-btn[data-view="learn"]').click(); 
    });
});

// ==========================================
// LEARN LIBRARY LOGIC
// ==========================================
const container = document.getElementById('card-container');
const filterPills = document.getElementById('filter-pills');

function renderFilters() {
    const config = stageConfig[currentStage];
    const categories = getCategories(config.data);
    
    filterPills.innerHTML = categories.map(cat => {
        const isActive = cat === currentCategory;
        const activeClasses = isActive ? "bg-blue-600/20 border-blue-500 text-blue-400" : "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700";
        return `<button class="filter-btn px-3 py-1 rounded-full text-sm font-semibold transition-all cursor-pointer border ${activeClasses}" data-cat="${cat}">${cat}</button>`;
    }).join('');

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentCategory = e.target.getAttribute('data-cat');
            renderApp();
        });
    });
}

function renderCards() {
    const config = stageConfig[currentStage];
    let filteredData = config.data;
    
    if (currentCategory !== 'All') filteredData = filteredData.filter(c => c.cat === currentCategory);
    if (searchQuery) {
        const q = searchQuery.toLowerCase().replace(/[()']/g, '');
        filteredData = filteredData.filter(c => {
            const searchString = `${c.id} ${c.cat} ${c.opt} ${c.alts ? c.alts.join(' ') : c.alt}`.toLowerCase().replace(/[()']/g, '');
            return searchString.includes(q);
        });
    }

    document.getElementById('results-count').textContent = `Showing ${filteredData.length} algorithms`;

    container.innerHTML = filteredData.map(c => {
        const setupScramble = getSetupScramble(c.opt);
        const urlAlg = c.opt.replace(/[()]/g, '');
        let imgUrl = `https://visualcube.api.cubing.net/visualcube.php?fmt=svg&size=150&stage=${config.stageStr}&bg=t&sch=y,r,g,w,o,b&case=${encodeURIComponent(urlAlg)}`;
        if (config.viewStr) imgUrl += `&view=${config.viewStr}`;

        const pb = getPB(currentStage, c.id);
        const pbHtml = pb ? `<span class="bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 px-2 py-1 rounded text-xs font-bold flex items-center"><i class="fa-solid fa-trophy mr-1"></i> PB: ${pb}s</span>` : '';

        let altsHtml = '';
        if (c.alts && c.alts.length > 0) {
            let altBlocks = c.alts.map((alt, i) => `
                <div class="p-3 mb-2 last:mb-0 rounded-lg border border-slate-700 bg-slate-900/50">
                    <span class="block text-xs text-slate-400 font-bold mb-1">Alternative ${i + 1}</span>
                    <p class="font-mono text-slate-300 break-words">${alt}</p>
                </div>`).join('');
            
            altsHtml += `
                <details class="group mt-2">
                    <summary class="cursor-pointer text-sm font-bold text-blue-400 hover:text-blue-300 flex items-center select-none py-2">
                        <i class="fa-solid fa-chevron-right mr-2 transition-transform duration-200 group-open:rotate-90"></i>
                        View Alternative${c.alts.length > 1 ? 's' : ''}
                    </summary>
                    <div class="mt-2 pl-3 border-l-2 border-blue-500/30 animate-fade-in">
                        ${altBlocks}
                    </div>
                </details>`;
        }

        return `
        <div class="bg-slate-800 rounded-2xl p-4 sm:p-6 border border-slate-700 cube-hover flex flex-col sm:flex-row items-start gap-4 sm:gap-6 animate-fade-in relative">
            <div class="flex-shrink-0 bg-slate-900 p-4 rounded-xl border border-slate-700 flex flex-col items-center gap-4 h-auto w-full sm:w-40 mx-auto">
                <img src="${imgUrl}" alt="${config.prefix} Case ${c.id}" class="w-full h-auto object-contain max-w-[8rem] sm:max-w-none">
                <button class="train-this-btn w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-3 sm:py-2 rounded transition-colors" data-id="${c.id}" data-stage="${currentStage}">Train Case</button>
            </div>
            <div class="flex-grow w-full">
                <div class="flex flex-wrap gap-2 justify-between items-center mb-2">
                    <h3 class="text-xl font-bold">${config.prefix} ${c.id} <span class="text-sm font-normal text-slate-400 ml-2">${c.cat}</span></h3>
                    ${pbHtml}
                </div>
                <div class="space-y-3 mt-4">
                    <div class="p-3 rounded-lg border border-blue-500/30 bg-blue-500/10"><span class="block text-xs text-blue-400 font-bold mb-1">Setup Scramble</span><p class="font-mono text-sm text-blue-300 break-words">${setupScramble}</p></div>
                    <div class="p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10"><span class="block text-xs text-emerald-400 font-bold mb-1">Optimal Solution</span><p class="font-mono text-base sm:text-lg text-emerald-400 optimal-algo break-words">${c.opt}</p></div>
                    ${altsHtml}
                </div>
            </div>
        </div>`;
    }).join('');

    document.querySelectorAll('.train-this-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            trainSpecificCase(e.target.getAttribute('data-stage'), e.target.getAttribute('data-id'));
        });
    });
}

document.querySelectorAll('.stage-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        document.querySelectorAll('.stage-tab').forEach(t => t.className = 'stage-tab px-4 sm:px-6 py-2 rounded-md font-bold transition-all text-slate-400 hover:text-white text-sm sm:text-base');
        e.target.className = 'stage-tab px-4 sm:px-6 py-2 rounded-md font-bold transition-all bg-blue-600 text-white shadow-lg text-sm sm:text-base';
        currentStage = e.target.id.replace('tab-', '').toUpperCase();
        currentCategory = 'All';
        renderApp();
    });
});

document.getElementById('search-input').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderCards();
});

function renderApp() {
    renderFilters();
    renderCards();
}

// ==========================================
// TRAINER SETUP & ENGINE
// ==========================================
let trainSelectedStage = 'F2L';
let trainCurrentCategory = 'All';
let selectedTrainCases = new Set();

let trainQueue = [];
let currentTrainIndex = 0;

function updateSelectionCount() {
    document.getElementById('train-selection-count').textContent = `${selectedTrainCases.size} Cases Selected`;
}

function renderTrainFilters() {
    const config = stageConfig[trainSelectedStage];
    const categories = getCategories(config.data);
    
    document.getElementById('train-filter-pills').innerHTML = categories.map(cat => {
        const isActive = cat === trainCurrentCategory;
        const activeClasses = isActive ? "bg-blue-600/20 border-blue-500 text-blue-400" : "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700";
        return `<button class="train-filter-btn px-3 py-1 rounded-full text-sm font-semibold transition-all cursor-pointer border ${activeClasses}" data-cat="${cat}">${cat}</button>`;
    }).join('');

    document.querySelectorAll('.train-filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            trainCurrentCategory = e.target.getAttribute('data-cat');
            renderTrainerSetup();
        });
    });
}

function renderTrainerSetup() {
    renderTrainFilters();
    const config = stageConfig[trainSelectedStage];
    let displayCategories = getCategories(config.data).filter(cat => cat !== 'All');
    if (trainCurrentCategory !== 'All') displayCategories = [trainCurrentCategory];
    
    let html = '';
    displayCategories.forEach(cat => {
        const catCases = config.data.filter(c => c.cat === cat);
        const allChecked = catCases.every(c => selectedTrainCases.has(c.id));
        
        // Category Header & Checkbox (Now with animated inner square)
        html += `
        <div class="mb-8 animate-fade-in">
            <label class="flex items-center mb-4 cursor-pointer group w-fit">
                <div class="relative flex items-center justify-center">
                    <input type="checkbox" id="cat-${cat.replace(/\s+/g, '-')}" class="cat-checkbox peer sr-only" data-cat="${cat}" ${allChecked ? 'checked' : ''}>
                    <div class="w-6 h-6 bg-slate-800 border-2 border-slate-600 rounded flex items-center justify-center peer-checked:bg-blue-600 peer-checked:border-blue-500 transition-all shadow-inner group-hover:border-blue-400 after:content-[''] after:w-2.5 after:h-2.5 after:bg-white after:rounded-sm after:scale-0 peer-checked:after:scale-100 after:transition-transform after:duration-200"></div>
                </div>
                <span class="ml-3 text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors select-none">${cat}</span>
            </label>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 pl-0 sm:pl-5 sm:border-l-2 border-slate-800 sm:ml-3">
        `;
        
        catCases.forEach(c => {
            const isChecked = selectedTrainCases.has(c.id);
            const urlAlg = c.opt.replace(/[()]/g, '');
            let imgUrl = `https://visualcube.api.cubing.net/visualcube.php?fmt=svg&size=80&stage=${config.stageStr}&bg=t&sch=y,r,g,w,o,b&case=${encodeURIComponent(urlAlg)}`;
            if (config.viewStr) imgUrl += `&view=${config.viewStr}`;

            // Individual Case Card & Checkbox (Now with animated inner square)
            html += `
                <label class="relative flex flex-col items-center p-3 border-2 border-slate-700 bg-slate-800/50 rounded-xl cursor-pointer hover:bg-slate-700 hover:border-slate-500 transition-all ${isChecked ? 'border-blue-500 bg-blue-600/10 ring-1 ring-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.15)]' : ''}">
                    <div class="absolute top-2 left-2 z-10">
                        <input type="checkbox" class="case-checkbox peer sr-only" value="${c.id}" data-cat="${cat}" ${isChecked ? 'checked' : ''}>
                        <div class="w-5 h-5 bg-slate-900 border-2 border-slate-600 rounded flex items-center justify-center peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-all after:content-[''] after:w-2 after:h-2 after:bg-white after:rounded-sm after:scale-0 peer-checked:after:scale-100 after:transition-transform after:duration-200"></div>
                    </div>
                    <img src="${imgUrl}" class="w-16 h-16 mb-2 pointer-events-none drop-shadow-lg" />
                    <span class="text-sm font-bold ${isChecked ? 'text-blue-400' : 'text-slate-300'} pointer-events-none transition-colors">${config.prefix} ${c.id}</span>
                </label>
            `;
        });
        html += `</div></div>`;
    });
    
    document.getElementById('trainer-case-list').innerHTML = html;
    
    document.querySelectorAll('.case-checkbox').forEach(box => {
        box.addEventListener('change', (e) => {
            if (e.target.checked) selectedTrainCases.add(e.target.value);
            else selectedTrainCases.delete(e.target.value);
            
            renderTrainerSetup();
            updateSelectionCount();
        });
    });
    
    document.querySelectorAll('.cat-checkbox').forEach(catBox => {
        catBox.addEventListener('change', (e) => {
            const catCases = config.data.filter(c => c.cat === e.target.getAttribute('data-cat'));
            catCases.forEach(c => e.target.checked ? selectedTrainCases.add(c.id) : selectedTrainCases.delete(c.id));
            renderTrainerSetup();
            updateSelectionCount();
        });
    });
    
    updateSelectionCount();
}

document.querySelectorAll('.train-stage-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        document.querySelectorAll('.train-stage-tab').forEach(t => t.className = 'train-stage-tab flex-1 md:flex-none px-4 md:px-6 py-2 rounded-md font-bold transition-all text-slate-400 hover:text-white text-sm md:text-base');
        e.target.className = 'train-stage-tab flex-1 md:flex-none px-4 md:px-6 py-2 rounded-md font-bold transition-all bg-blue-600 text-white shadow-lg text-sm md:text-base';
        trainSelectedStage = e.target.getAttribute('data-stage');
        trainCurrentCategory = 'All'; 
        selectedTrainCases.clear(); 
        renderTrainerSetup();
    });
});

// ==========================================
// TIMER EXECUTION & TOUCH MECHANICS
// ==========================================
let timerState = 'IDLE'; 
let startTime = 0;
let timerInterval = null;

const timerDisplay = document.getElementById('timer-display');
const scrambleDisplay = document.getElementById('train-scramble');
const imageDisplay = document.getElementById('train-image');
const placeholderDisplay = document.getElementById('train-placeholder');
const autoNextToggle = document.getElementById('auto-next-toggle');
const showSolutionToggle = document.getElementById('show-solution-toggle');
const solutionContainer = document.getElementById('train-solution-container');
const solutionText = document.getElementById('train-solution');
const trainPbDisplay = document.getElementById('train-pb-display');
const trainPbText = document.getElementById('train-pb-text');
const trainActivePanel = document.getElementById('train-active-panel');
const trainNavButtons = document.getElementById('train-nav-buttons');
const prevCaseBtn = document.getElementById('prev-case-btn');
const nextCaseBtn = document.getElementById('next-case-btn');

showSolutionToggle.addEventListener('change', () => {
    if (trainQueue.length > 0 && currentTrainIndex < trainQueue.length) {
        solutionContainer.classList.toggle('hidden', !showSolutionToggle.checked);
    }
});

document.getElementById('start-selected-btn').addEventListener('click', () => {
    if (selectedTrainCases.size === 0) return alert("Select at least one case to train!");
    const config = stageConfig[trainSelectedStage];
    trainQueue = config.data.filter(c => selectedTrainCases.has(c.id));
    trainQueue.sort(() => Math.random() - 0.5); 
    currentTrainIndex = 0;
    
    document.getElementById('train-setup-panel').classList.add('hidden');
    document.getElementById('train-active-panel').classList.remove('hidden');
    loadActiveTrainCase();
});

function trainSpecificCase(stage, id) {
    const config = stageConfig[stage];
    const specificCase = config.data.find(c => c.id === id);
    if (specificCase) {
        trainQueue = [specificCase];
        currentTrainIndex = 0;
        trainSelectedStage = stage;
        
        document.querySelector('.mobile-nav[data-view="train"]').click();
        document.getElementById('train-setup-panel').classList.add('hidden');
        document.getElementById('train-active-panel').classList.remove('hidden');
        loadActiveTrainCase();
    }
}

function updateTrainerPBUI(stage, id) {
    const pb = getPB(stage, id);
    if (pb) {
        trainPbText.textContent = `${pb}s`;
        trainPbDisplay.classList.remove('hidden');
    } else {
        trainPbDisplay.classList.add('hidden');
    }
}

function loadActiveTrainCase() {
    if (trainQueue.length === 0) return;
    
    // Check if session is complete
    if (currentTrainIndex >= trainQueue.length) {
        scrambleDisplay.textContent = "Session Complete!";
        solutionContainer.classList.add('hidden'); 
        trainPbDisplay.classList.add('hidden');
        imageDisplay.classList.add('hidden');
        placeholderDisplay.classList.remove('hidden');
        trainNavButtons.classList.add('hidden'); // Hide Skip/Prev on complete
        timerDisplay.textContent = "0.00";
        document.getElementById('train-queue-counter').textContent = "Done";
        return;
    }

    // Initialize UI for Active Case
    trainNavButtons.classList.remove('hidden');
    prevCaseBtn.disabled = currentTrainIndex === 0;

    const c = trainQueue[currentTrainIndex];
    const config = stageConfig[trainSelectedStage];
    
    document.getElementById('train-queue-counter').textContent = `Case ${currentTrainIndex + 1} / ${trainQueue.length}`;
    scrambleDisplay.textContent = getSetupScramble(c.opt);
    
    solutionText.textContent = c.opt;
    solutionContainer.classList.toggle('hidden', !showSolutionToggle.checked);
    
    updateTrainerPBUI(trainSelectedStage, c.id);

    const urlAlg = c.opt.replace(/[()]/g, '');
    let imgUrl = `https://visualcube.api.cubing.net/visualcube.php?fmt=svg&size=300&stage=${config.stageStr}&bg=t&sch=y,r,g,w,o,b&case=${encodeURIComponent(urlAlg)}`;
    if (config.viewStr) imgUrl += `&view=${config.viewStr}`;
    
    imageDisplay.src = imgUrl;
    imageDisplay.classList.remove('hidden');
    placeholderDisplay.classList.add('hidden');

    timerDisplay.textContent = "0.00";
    timerDisplay.style.color = "white";
    timerState = 'IDLE';
}

document.getElementById('stop-session-btn').addEventListener('click', () => {
    timerState = 'IDLE';
    clearInterval(timerInterval);
    document.getElementById('train-active-panel').classList.add('hidden');
    document.getElementById('train-setup-panel').classList.remove('hidden');
});

function updateTimer() {
    timerDisplay.textContent = ((Date.now() - startTime) / 1000).toFixed(2);
}

function handleTimerDown(e) {
    if (e.target.closest('button') || e.target.closest('label') || e.target.tagName === 'INPUT') return;
    if (trainActivePanel.classList.contains('hidden') || currentView !== 'train' || trainQueue.length === 0) return;
    
    if (e.type === 'keydown' && e.code !== 'Space') return;
    if (e.type === 'keydown') e.preventDefault();
    
    if (timerState === 'IDLE' || timerState === 'STOPPED') {
        timerState = 'READY';
        timerDisplay.style.color = '#22c55e'; 
    } 
    else if (timerState === 'RUNNING') {
        timerState = 'STOPPED';
        clearInterval(timerInterval);
        let finalTimeMs = Date.now() - startTime;
        timerDisplay.textContent = (finalTimeMs / 1000).toFixed(2);
        
        const currentCase = trainQueue[currentTrainIndex];
        saveTime(trainSelectedStage, currentCase.id, finalTimeMs);
        updateTrainerPBUI(trainSelectedStage, currentCase.id);
        
        if (autoNextToggle.checked && currentTrainIndex < trainQueue.length) {
            setTimeout(() => {
                if (timerState === 'STOPPED') {
                    currentTrainIndex++;
                    loadActiveTrainCase();
                }
            }, 1000); 
        }
    }
}

function handleTimerUp(e) {
    if (e.type === 'keyup' && e.code !== 'Space') return;
    if (timerState === 'READY') {
        timerState = 'RUNNING';
        timerDisplay.style.color = 'white';
        startTime = Date.now();
        timerInterval = setInterval(updateTimer, 10);
    }
}

// Attach Keyboard & Touch Events
window.addEventListener('keydown', handleTimerDown);
window.addEventListener('keyup', handleTimerUp);
trainActivePanel.addEventListener('touchstart', handleTimerDown, {passive: false});
trainActivePanel.addEventListener('touchend', handleTimerUp);

// --- NEW NAVIGATION BUTTON LISTENERS ---
prevCaseBtn.addEventListener('click', () => {
    if (currentTrainIndex > 0) {
        clearInterval(timerInterval);
        timerState = 'IDLE';
        currentTrainIndex--;
        loadActiveTrainCase();
    }
});

nextCaseBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerState = 'IDLE';
    currentTrainIndex++;
    loadActiveTrainCase();
});

// ==========================================
// INITIALIZATION & PWA SERVICE WORKER
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderApp();
    renderTrainerSetup();
    
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('Service Worker Registered!', reg))
        .catch(err => console.error('Service Worker Registration Failed:', err));
    }
});