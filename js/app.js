// /js/app.js

import { f2lCases, ollCases, pllCases } from './data.js';

function getSetupScramble(alg) {
    let cleanAlg = alg.replace(/[()]/g, '');
    let moves = cleanAlg.trim().split(/\s+/);
    moves.reverse();
    let invertedMoves = moves.map(move => {
        if (move.endsWith("2'")) return move.replace("2'", "2");
        if (move.endsWith("'")) return move.slice(0, -1);
        if (move.endsWith("2")) return move;
        return move + "'"; 
    });
    return invertedMoves.join(' ');
}

// Generate Cards generic function
function generateCards(data, containerId, stageStr, viewStr, prefix) {
    const container = document.getElementById(containerId);
    let htmlContent = '';

    data.forEach(c => {
        const setupScramble = getSetupScramble(c.opt);
        const urlAlg = c.opt.replace(/[()]/g, '');
        
        let imgUrl = `https://visualcube.api.cubing.net/visualcube.php?fmt=svg&size=150&stage=${stageStr}&bg=t&sch=y,r,g,w,o,b&case=${encodeURIComponent(urlAlg)}`;
        if (viewStr) imgUrl += `&view=${viewStr}`;

        // --- Build the Alternatives HTML block ---
        let altsHtml = '';
        
        // Check if the new 'alts' array exists and has items (New F2L format)
        if (c.alts && c.alts.length > 0) {
            
            // Always show the 1st alternative
            altsHtml += `
            <div class="p-3 rounded-lg border border-slate-700 bg-slate-900/50">
                <span class="block text-xs text-slate-400 font-bold mb-1 uppercase tracking-wider">Alternative 1</span>
                <p class="font-mono text-slate-300">${c.alts[0]}</p>
            </div>`;

            // If there are more than 1 alternatives, wrap the rest in a collapsible accordion
            if (c.alts.length > 1) {
                let extraAlts = '';
                for (let i = 1; i < c.alts.length; i++) {
                    extraAlts += `
                    <div class="p-3 mt-2 rounded-lg border border-slate-700 bg-slate-900/50">
                        <span class="block text-xs text-slate-400 font-bold mb-1 uppercase tracking-wider">Alternative ${i + 1}</span>
                        <p class="font-mono text-slate-300">${c.alts[i]}</p>
                    </div>`;
                }
                
                // The <details> tag creates a native accordion. 
                // Tailwind's 'group' and 'group-open' classes animate the arrow rotation.
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
        } 
        // Fallback for OLL/PLL which might still use the old single 'alt: "string"' format
        else if (c.alt) {
            altsHtml += `
            <div class="p-3 rounded-lg border border-slate-700 bg-slate-900/50">
                <span class="block text-xs text-slate-400 font-bold mb-1 uppercase tracking-wider">Alternative</span>
                <p class="font-mono text-slate-300">${c.alt}</p>
            </div>`;
        }

        // --- Construct the final Card HTML ---
        htmlContent += `
        <div class="bg-slate-800 rounded-2xl p-6 border border-slate-700 cube-hover flex flex-col sm:flex-row items-start gap-6">
            <div class="flex-shrink-0 bg-slate-900 p-4 rounded-xl border border-slate-700 flex justify-center items-center h-36 w-36">
                <img src="${imgUrl}" alt="${prefix} Case ${c.id}" class="w-full h-full object-contain">
            </div>
            <div class="flex-grow w-full">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold">${prefix} ${c.id} <span class="text-sm font-normal text-slate-400 ml-2">${c.cat}</span></h3>
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
    });

    container.innerHTML = htmlContent;
}

// Initialize Rendering and Scrollspy
document.addEventListener('DOMContentLoaded', () => {
    generateCards(f2lCases, 'f2l-container', 'f2l', null, 'Case');
    generateCards(ollCases, 'oll-container', 'oll', 'plan', 'OLL');
    generateCards(pllCases, 'pll-container', 'pll', 'plan', 'PLL');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/30');
                    link.classList.add('hover:text-blue-400', 'text-slate-300');
                });

                const activeId = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.nav-link[href="#${activeId}"]`);
                if (activeLink) {
                    activeLink.classList.remove('hover:text-blue-400', 'text-slate-300');
                    activeLink.classList.add('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/30');
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('section[id]').forEach(sec => observer.observe(sec));
});