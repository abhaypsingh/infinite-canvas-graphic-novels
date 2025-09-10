// Infinite Canvas - Main Application Module

class InfiniteCanvas {
    constructor() {
        this.currentNovel = null;
        this.currentPage = 1;
        this.totalPages = 15;
        this.isImmersive = false;
        this.isAudioEnabled = false;
        this.theme = localStorage.getItem('theme') || 'dark';
        this.readingProgress = {};
        this.init();
    }

    init() {
        this.setupTheme();
        this.setupEventListeners();
        this.loadReadingProgress();
        this.initializeAnimations();
        this.setupPWA();
    }

    setupTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
    }

    setupEventListeners() {
        // Navigation
        document.getElementById('menuToggle')?.addEventListener('click', this.toggleMenu.bind(this));
        document.getElementById('themeToggle')?.addEventListener('click', this.toggleTheme.bind(this));
        
        // Hero actions
        document.getElementById('startReading')?.addEventListener('click', () => {
            document.getElementById('library')?.scrollIntoView({ behavior: 'smooth' });
        });
        
        document.getElementById('watchDemo')?.addEventListener('click', this.playDemo.bind(this));
        
        // Search
        document.getElementById('searchInput')?.addEventListener('input', this.handleSearch.bind(this));
        
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', this.handleFilter.bind(this));
        });
        
        // Reader controls
        document.getElementById('closeReader')?.addEventListener('click', this.closeReader.bind(this));
        document.getElementById('prevPage')?.addEventListener('click', this.previousPage.bind(this));
        document.getElementById('nextPage')?.addEventListener('click', this.nextPage.bind(this));
        document.getElementById('toggleImmersive')?.addEventListener('click', this.toggleImmersive.bind(this));
        document.getElementById('toggleAudio')?.addEventListener('click', this.toggleAudio.bind(this));
        document.getElementById('toggleSettings')?.addEventListener('click', this.openSettings.bind(this));
        
        // Keyboard navigation
        document.addEventListener('keydown', this.handleKeyboard.bind(this));
        
        // Touch gestures for mobile
        this.setupTouchGestures();
    }

    toggleMenu() {
        const navMenu = document.getElementById('navMenu');
        const menuToggle = document.getElementById('menuToggle');
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    }

    toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
        
        // Animate theme transition
        document.body.style.transition = 'background-color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    handleSearch(e) {
        const query = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.novel-card');
        
        cards.forEach(card => {
            const title = card.querySelector('.novel-title')?.textContent.toLowerCase();
            const description = card.querySelector('.novel-description')?.textContent.toLowerCase();
            const matches = title?.includes(query) || description?.includes(query);
            
            card.style.display = matches ? '' : 'none';
            card.style.animation = matches ? 'fadeIn 0.3s ease' : '';
        });
    }

    handleFilter(e) {
        const filter = e.target.dataset.filter;
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        const cards = document.querySelectorAll('.novel-card');
        cards.forEach(card => {
            const tags = card.dataset.tags?.split(',') || [];
            const show = filter === 'all' || tags.includes(filter);
            card.style.display = show ? '' : 'none';
        });
    }

    playDemo() {
        // Create demo overlay
        const overlay = document.createElement('div');
        overlay.className = 'demo-overlay';
        overlay.innerHTML = `
            <div class="demo-content">
                <h2>Experience the Future of Graphic Novels</h2>
                <video autoplay loop muted>
                    <source src="demo.mp4" type="video/mp4">
                    <div class="demo-placeholder">Demo video coming soon</div>
                </video>
                <button class="btn btn-primary" onclick="this.parentElement.parentElement.remove()">Close Demo</button>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    openNovel(novelId) {
        this.currentNovel = novelId;
        this.currentPage = 1;
        
        const reader = document.getElementById('novelReader');
        reader.style.display = 'flex';
        reader.classList.add('active');
        
        this.loadNovelData(novelId);
        this.renderPage(1);
        this.updateProgress();
    }

    closeReader() {
        const reader = document.getElementById('novelReader');
        reader.classList.remove('active');
        setTimeout(() => {
            reader.style.display = 'none';
        }, 300);
        
        this.saveReadingProgress();
    }

    loadNovelData(novelId) {
        // Load novel metadata
        if (novelId === 'brush-and-byte') {
            this.totalPages = 15;
            document.getElementById('readerNovelTitle').textContent = 'Brush & Byte';
            this.generateThumbnails();
        }
    }

    renderPage(pageNum) {
        const content = document.getElementById('pageContent');
        
        // Clear existing content
        content.innerHTML = '';
        
        // Generate page content based on novel and page number
        if (this.currentNovel === 'brush-and-byte') {
            const pageData = this.getBrushBytePageData(pageNum);
            content.innerHTML = pageData;
        }
        
        // Update page indicator
        document.getElementById('pageIndicator').textContent = `Page ${pageNum} of ${this.totalPages}`;
        
        // Update progress bar
        const progress = (pageNum / this.totalPages) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
        
        // Animate page transition
        content.style.animation = 'pageTransition 0.3s ease';
    }

    getBrushBytePageData(pageNum) {
        const pages = {
            1: `
                <div class="comic-page">
                    <div class="splash-panel">
                        <svg viewBox="0 0 800 1200" class="page-svg">
                            <defs>
                                <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style="stop-color:#FFE66D;stop-opacity:0.3" />
                                    <stop offset="100%" style="stop-color:#7DF9FF;stop-opacity:0.1" />
                                </linearGradient>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>
                            
                            <!-- Background -->
                            <rect width="800" height="1200" fill="url(#skyGrad)"/>
                            
                            <!-- Art room -->
                            <rect x="50" y="300" width="700" height="600" fill="#F5F7FA" stroke="#DDE3EA" stroke-width="2" rx="10"/>
                            
                            <!-- Maya at desk -->
                            <ellipse cx="400" cy="600" rx="80" ry="120" fill="#2E86AB"/>
                            <circle cx="400" cy="500" r="40" fill="#D9A47A"/>
                            
                            <!-- Sketchbook -->
                            <rect x="350" y="650" width="100" height="140" fill="white" stroke="#333" stroke-width="2" transform="rotate(-5 400 720)"/>
                            
                            <!-- Spiral bracelet glow -->
                            <circle cx="420" cy="620" r="15" fill="none" stroke="#FFC857" stroke-width="3" filter="url(#glow)"/>
                            
                            <!-- Pixel silhouette -->
                            <g opacity="0.3" transform="translate(500, 400)">
                                <polygon points="0,20 20,0 40,20 20,40" fill="#7DF9FF"/>
                                <polygon points="20,0 40,20 60,0 40,-20" fill="#A58CFF"/>
                            </g>
                            
                            <!-- Thought bubble -->
                            <ellipse cx="300" cy="400" rx="120" ry="60" fill="white" stroke="#999" stroke-width="2" stroke-dasharray="5,5"/>
                            <text x="300" y="410" font-family="Arial" font-size="14" text-anchor="middle" fill="#333">
                                What if AI steals my drawings?
                            </text>
                            
                            <!-- Title -->
                            <text x="400" y="100" font-family="Arial Black" font-size="72" text-anchor="middle" fill="#1a1a2e">
                                BRUSH & BYTE
                            </text>
                            
                            <!-- Narration -->
                            <rect x="50" y="1000" width="700" height="100" fill="rgba(0,0,0,0.7)" rx="5"/>
                            <text x="400" y="1040" font-family="Arial" font-size="16" text-anchor="middle" fill="white">
                                Sometimes, the canvas feels like a sky too big for one small brush.
                            </text>
                            
                            <!-- Credit badge -->
                            <g transform="translate(650, 1100)">
                                <rect width="120" height="40" fill="white" stroke="#333" rx="5"/>
                                <text x="60" y="25" font-family="Arial" font-size="10" text-anchor="middle">
                                    Created by Maya + Pixel
                                </text>
                            </g>
                        </svg>
                    </div>
                </div>
            `,
            2: `
                <div class="comic-page grid-2x2">
                    <div class="panel">
                        <svg viewBox="0 0 400 400" class="panel-svg">
                            <!-- Panel 1: Teacher handing flyer -->
                            <rect width="400" height="400" fill="#F5F7FA"/>
                            <rect x="150" y="100" width="100" height="150" fill="#6B9080"/>
                            <circle cx="200" cy="80" r="30" fill="#D9A47A"/>
                            <rect x="180" y="200" width="80" height="120" fill="white" stroke="#333"/>
                            <text x="200" y="50" font-family="Arial" font-size="14" text-anchor="middle">Mr. López</text>
                            <text x="200" y="350" font-family="Arial" font-size="12" text-anchor="middle">
                                "Library's hosting an AI Art Lab!"
                            </text>
                        </svg>
                    </div>
                    <div class="panel">
                        <svg viewBox="0 0 400 400" class="panel-svg">
                            <!-- Panel 2: Flyer close-up -->
                            <rect width="400" height="400" fill="#F5F7FA"/>
                            <rect x="50" y="50" width="300" height="300" fill="white" stroke="#333" stroke-width="3"/>
                            <text x="200" y="150" font-family="Arial Black" font-size="24" text-anchor="middle">
                                AI ART LAB
                            </text>
                            <text x="200" y="200" font-family="Arial" font-size="16" text-anchor="middle">
                                Learn Ethical Co-Creation
                            </text>
                            <circle cx="150" cy="250" r="20" fill="none" stroke="#7DF9FF" stroke-width="3"/>
                            <path d="M145 250 L155 260 L165 240" stroke="#7DF9FF" stroke-width="3" fill="none"/>
                        </svg>
                    </div>
                    <div class="panel">
                        <svg viewBox="0 0 400 400" class="panel-svg">
                            <!-- Panel 3: Noor shows phone -->
                            <rect width="400" height="400" fill="#F5F7FA"/>
                            <rect x="100" y="150" width="80" height="140" fill="#333" rx="10"/>
                            <rect x="110" y="170" width="60" height="100" fill="white"/>
                            <text x="140" y="200" font-family="Arial" font-size="10" text-anchor="middle">
                                Artists Say AI
                            </text>
                            <text x="140" y="215" font-family="Arial" font-size="10" text-anchor="middle">
                                Copied Their Style
                            </text>
                            <ellipse cx="250" cy="320" rx="80" ry="30" fill="white" stroke="#333"/>
                            <text x="250" y="325" font-family="Arial" font-size="12" text-anchor="middle">
                                "This stuff freaks me out"
                            </text>
                        </svg>
                    </div>
                    <div class="panel">
                        <svg viewBox="0 0 400 400" class="panel-svg">
                            <!-- Panel 4: Maya's anxious eyes -->
                            <rect width="400" height="400" fill="#E9724C" opacity="0.2"/>
                            <ellipse cx="150" cy="200" rx="60" ry="40" fill="white"/>
                            <circle cx="150" cy="200" r="25" fill="#2B2B2B"/>
                            <ellipse cx="250" cy="200" rx="60" ry="40" fill="white"/>
                            <circle cx="250" cy="200" r="25" fill="#2B2B2B"/>
                            <text x="200" y="320" font-family="Arial" font-size="14" text-anchor="middle" fill="#333" opacity="0.7">
                                "I want to be seen. Not scraped."
                            </text>
                        </svg>
                    </div>
                </div>
            `,
            3: this.generatePage3(),
            4: this.generatePage4(),
            5: this.generatePage5(),
            6: this.generatePage6(),
            7: this.generatePage7(),
            8: this.generatePage8(),
            9: this.generatePage9(),
            10: this.generatePage10(),
            11: this.generatePage11(),
            12: this.generatePage12(),
            13: this.generatePage13(),
            14: this.generatePage14(),
            15: this.generatePage15()
        };
        
        return pages[pageNum] || '<div class="page-placeholder">Page content loading...</div>';
    }

    generatePage3() {
        return `
            <div class="comic-page grid-2x2">
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Kitchen scene with Dad -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <rect x="50" y="200" width="300" height="150" fill="#A67C52"/>
                        <circle cx="150" cy="150" r="35" fill="#D9A47A"/>
                        <rect x="120" y="180" width="60" height="80" fill="#495057"/>
                        <ellipse cx="250" cy="100" rx="80" ry="40" fill="white" stroke="#333"/>
                        <text x="250" y="105" font-family="Arial" font-size="12" text-anchor="middle">
                            "AI is... stealing art."
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Dad's hand with cocoa -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <ellipse cx="200" cy="250" rx="40" ry="60" fill="#D9A47A"/>
                        <ellipse cx="200" cy="150" rx="50" ry="30" fill="#6B4C41"/>
                        <path d="M150 150 Q200 100 250 150" fill="none" stroke="white" stroke-width="3" opacity="0.6"/>
                        <text x="200" y="350" font-family="Arial" font-size="14" text-anchor="middle">
                            "Let's learn before we fear."
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Spiral bracelet focus -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <circle cx="200" cy="200" r="80" fill="none" stroke="#FFC857" stroke-width="8"/>
                        <path d="M200 120 Q280 200 200 280 Q120 200 200 120" fill="none" stroke="#FFC857" stroke-width="4"/>
                        <text x="200" y="350" font-family="Arial" font-size="14" text-anchor="middle">
                            "Your spiral is yours."
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Night city window -->
                        <rect width="400" height="400" fill="#1E2A44"/>
                        <rect x="50" y="50" width="300" height="200" fill="none" stroke="#FFDF91" stroke-width="3"/>
                        <rect x="100" y="100" width="40" height="60" fill="#FFDF91"/>
                        <rect x="180" y="120" width="40" height="60" fill="#FFDF91"/>
                        <rect x="260" y="90" width="40" height="60" fill="#FFDF91"/>
                        <rect x="150" y="280" width="100" height="60" fill="#7DF9FF" opacity="0.5" rx="5"/>
                        <text x="200" y="370" font-family="Arial" font-size="12" text-anchor="middle" fill="white">
                            "Maybe I need a telescope."
                        </text>
                    </svg>
                </div>
            </div>
        `;
    }

    generatePage4() {
        return `
            <div class="comic-page grid-2x2">
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Library Makerspace wide shot -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <rect x="30" y="50" width="100" height="150" fill="#6B9080" opacity="0.3"/>
                        <text x="80" y="125" font-family="Arial Black" font-size="16" text-anchor="middle" fill="#333">
                            CONSENT
                        </text>
                        <rect x="150" y="50" width="100" height="150" fill="#FFD166" opacity="0.3"/>
                        <text x="200" y="125" font-family="Arial Black" font-size="16" text-anchor="middle" fill="#333">
                            CREDIT
                        </text>
                        <rect x="270" y="50" width="100" height="150" fill="#7DF9FF" opacity="0.3"/>
                        <text x="320" y="125" font-family="Arial Black" font-size="16" text-anchor="middle" fill="#333">
                            CREATE
                        </text>
                        <text x="200" y="350" font-family="Arial" font-size="14" text-anchor="middle">
                            "AI can assist. You stay the author."
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Terminal screen -->
                        <rect width="400" height="400" fill="#1a1a2e"/>
                        <rect x="50" y="50" width="300" height="200" fill="#0a0a0f" stroke="#7DF9FF" stroke-width="2"/>
                        <text x="200" y="100" font-family="monospace" font-size="14" text-anchor="middle" fill="#7DF9FF">
                            Training: OFF by default
                        </text>
                        <rect x="150" y="150" width="100" height="40" fill="#4ECDC4" rx="5"/>
                        <text x="200" y="175" font-family="Arial" font-size="14" text-anchor="middle" fill="white">
                            OPT-IN
                        </text>
                        <text x="200" y="320" font-family="Arial" font-size="12" text-anchor="middle" fill="white">
                            "Nothing learns unless you say yes."
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Content Credentials badge -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <rect x="100" y="100" width="200" height="200" fill="white" stroke="#333" stroke-width="3" rx="10"/>
                        <path d="M200 150 L150 200 L200 250 L250 200 Z" fill="#7DF9FF" opacity="0.5"/>
                        <path d="M180 200 L195 215 L220 185" stroke="#333" stroke-width="4" fill="none"/>
                        <text x="200" y="350" font-family="Arial" font-size="12" text-anchor="middle">
                            "Your name travels with your art."
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Maya's hopeful face -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <circle cx="200" cy="180" r="60" fill="#D9A47A"/>
                        <ellipse cx="180" cy="170" rx="15" ry="10" fill="white"/>
                        <circle cx="180" cy="170" r="8" fill="#2B2B2B"/>
                        <ellipse cx="220" cy="170" rx="15" ry="10" fill="white"/>
                        <circle cx="220" cy="170" r="8" fill="#2B2B2B"/>
                        <path d="M180 210 Q200 220 220 210" fill="none" stroke="#333" stroke-width="2"/>
                        <text x="200" y="350" font-family="Arial" font-size="12" text-anchor="middle">
                            "So it won't copy without asking?"
                        </text>
                    </svg>
                </div>
            </div>
        `;
    }

    generatePage5() {
        return `
            <div class="comic-page page-5-layout">
                <div class="panel panel-wide">
                    <svg viewBox="0 0 800 300" class="panel-svg">
                        <!-- Pixel appears -->
                        <rect width="800" height="300" fill="#0a0a0f"/>
                        <defs>
                            <radialGradient id="pixelGlow">
                                <stop offset="0%" style="stop-color:#7DF9FF;stop-opacity:0.8" />
                                <stop offset="100%" style="stop-color:#A58CFF;stop-opacity:0.2" />
                            </radialGradient>
                        </defs>
                        <g transform="translate(400, 150)">
                            <!-- Pixel fox form -->
                            <polygon points="-40,0 0,-40 40,0 0,40" fill="url(#pixelGlow)" opacity="0.8"/>
                            <polygon points="-20,-20 20,-20 0,0" fill="#FFFFFF" opacity="0.9"/>
                            <polygon points="-30,10 -10,30 10,30 30,10" fill="url(#pixelGlow)" opacity="0.6"/>
                        </g>
                        <rect x="250" y="220" width="300" height="50" fill="white" stroke="#7DF9FF" stroke-width="2" rx="25"/>
                        <text x="400" y="250" font-family="monospace" font-size="14" text-anchor="middle" fill="#333">
                            Hello, Maya. I'm Pixel. May I help?
                        </text>
                    </svg>
                </div>
                <div class="panel-row">
                    <div class="panel panel-small">
                        <svg viewBox="0 0 200 200" class="panel-svg">
                            <!-- Consent toggle -->
                            <rect width="200" height="200" fill="#1a1a2e"/>
                            <rect x="50" y="80" width="100" height="40" fill="#333" rx="20"/>
                            <circle cx="130" cy="100" r="15" fill="#4ECDC4"/>
                            <text x="100" y="150" font-family="Arial" font-size="10" text-anchor="middle" fill="white">
                                Style Card: ON
                            </text>
                        </svg>
                    </div>
                    <div class="panel panel-small">
                        <svg viewBox="0 0 200 200" class="panel-svg">
                            <!-- Accept tap -->
                            <rect width="200" height="200" fill="#1a1a2e"/>
                            <circle cx="100" cy="100" r="40" fill="#4ECDC4" opacity="0.3"/>
                            <circle cx="100" cy="100" r="30" fill="#4ECDC4" opacity="0.5"/>
                            <circle cx="100" cy="100" r="20" fill="#4ECDC4"/>
                            <text x="100" y="105" font-family="Arial" font-size="12" text-anchor="middle" fill="white">
                                TAP
                            </text>
                        </svg>
                    </div>
                    <div class="panel panel-small">
                        <svg viewBox="0 0 200 200" class="panel-svg">
                            <!-- Scanning sketches -->
                            <rect width="200" height="200" fill="#FAFAF9"/>
                            <rect x="50" y="30" width="100" height="140" fill="white" stroke="#333" stroke-width="2"/>
                            <line x1="20" y1="100" x2="180" y2="100" stroke="#7DF9FF" stroke-width="3" opacity="0.6"/>
                            <circle cx="100" cy="100" r="5" fill="#7DF9FF"/>
                        </svg>
                    </div>
                </div>
                <div class="panel panel-wide">
                    <svg viewBox="0 0 800 200" class="panel-svg">
                        <!-- Style Card display -->
                        <rect width="800" height="200" fill="#1a1a2e"/>
                        <rect x="150" y="30" width="500" height="140" fill="rgba(125,249,255,0.1)" stroke="#7DF9FF" stroke-width="2" rx="10"/>
                        <text x="400" y="70" font-family="Arial Black" font-size="18" text-anchor="middle" fill="#7DF9FF">
                            MAYA'S STYLE CARD
                        </text>
                        <text x="400" y="100" font-family="Arial" font-size="12" text-anchor="middle" fill="white">
                            Brush pressure: playful | Line cadence: springy
                        </text>
                        <text x="400" y="120" font-family="Arial" font-size="12" text-anchor="middle" fill="white">
                            Palette: warm-cool pops | Signature: spiral motif
                        </text>
                        <text x="400" y="150" font-family="Arial" font-size="14" text-anchor="middle" fill="#A58CFF">
                            Ready to co-create?
                        </text>
                    </svg>
                </div>
            </div>
        `;
    }

    generatePage6() {
        return `
            <div class="comic-page grid-2x2">
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Prompt input -->
                        <rect width="400" height="400" fill="#1a1a2e"/>
                        <rect x="50" y="150" width="300" height="100" fill="#0a0a0f" stroke="#7DF9FF" stroke-width="2" rx="5"/>
                        <text x="200" y="190" font-family="monospace" font-size="12" text-anchor="middle" fill="#7DF9FF">
                            > A fox leaping over a city
                        </text>
                        <text x="200" y="210" font-family="monospace" font-size="12" text-anchor="middle" fill="#7DF9FF">
                            made of sketchbook paper
                        </text>
                        <text x="200" y="320" font-family="Arial" font-size="12" text-anchor="middle" fill="white">
                            "I'll add your spiral in the skyline."
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Generated art preview -->
                        <rect width="400" height="400" fill="#F5F7FA"/>
                        <g opacity="0.8">
                            <!-- Paper city -->
                            <rect x="50" y="200" width="60" height="120" fill="white" stroke="#333" stroke-width="2"/>
                            <rect x="130" y="180" width="60" height="140" fill="white" stroke="#333" stroke-width="2"/>
                            <rect x="210" y="220" width="60" height="100" fill="white" stroke="#333" stroke-width="2"/>
                            <rect x="290" y="190" width="60" height="130" fill="white" stroke="#333" stroke-width="2"/>
                        </g>
                        <!-- Fox arc -->
                        <path d="M100 150 Q200 50 300 150" fill="none" stroke="#E9724C" stroke-width="4"/>
                        <ellipse cx="200" cy="100" rx="30" ry="20" fill="#E9724C"/>
                        <!-- Spiral moon -->
                        <circle cx="320" cy="80" r="30" fill="none" stroke="#FFC857" stroke-width="3"/>
                        <path d="M320 50 Q350 80 320 110" fill="none" stroke="#FFC857" stroke-width="2"/>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Credits display -->
                        <rect width="400" height="400" fill="#1a1a2e"/>
                        <rect x="50" y="100" width="300" height="200" fill="rgba(255,255,255,0.1)" stroke="white" stroke-width="2" rx="10"/>
                        <text x="200" y="140" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="white">
                            CREDITS EMBEDDED
                        </text>
                        <text x="200" y="180" font-family="Arial" font-size="12" text-anchor="middle" fill="#7DF9FF">
                            Author: Maya
                        </text>
                        <text x="200" y="200" font-family="Arial" font-size="12" text-anchor="middle" fill="#A58CFF">
                            Tool: Pixel
                        </text>
                        <text x="200" y="220" font-family="Arial" font-size="12" text-anchor="middle" fill="#FFE66D">
                            License: All Rights Reserved
                        </text>
                        <text x="200" y="260" font-family="Arial" font-size="10" text-anchor="middle" fill="white">
                            Credit inside the file
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Maya smiling -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <circle cx="200" cy="180" r="60" fill="#D9A47A"/>
                        <path d="M170 200 Q200 220 230 200" fill="none" stroke="#333" stroke-width="3"/>
                        <circle cx="180" cy="170" r="5" fill="#333"/>
                        <circle cx="220" cy="170" r="5" fill="#333"/>
                        <text x="200" y="320" font-family="Arial" font-size="14" text-anchor="middle">
                            "You didn't steal. You cooperated."
                        </text>
                        <circle cx="250" cy="200" r="8" fill="none" stroke="#FFC857" stroke-width="2"/>
                    </svg>
                </div>
            </div>
        `;
    }

    generatePage7() {
        return `
            <div class="comic-page grid-2x2">
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Adjustment sliders -->
                        <rect width="400" height="400" fill="#1a1a2e"/>
                        <text x="200" y="80" font-family="Arial" font-size="16" text-anchor="middle" fill="white">
                            Line Springiness
                        </text>
                        <rect x="50" y="100" width="300" height="20" fill="#333" rx="10"/>
                        <circle cx="250" cy="110" r="15" fill="#7DF9FF"/>
                        
                        <text x="200" y="180" font-family="Arial" font-size="16" text-anchor="middle" fill="white">
                            Paper Grain
                        </text>
                        <rect x="50" y="200" width="300" height="20" fill="#333" rx="10"/>
                        <circle cx="150" cy="210" r="15" fill="#A58CFF"/>
                        
                        <text x="200" y="320" font-family="Arial" font-size="12" text-anchor="middle" fill="white">
                            "More spring. Less grain."
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Hand drawing on top -->
                        <rect width="400" height="400" fill="#F5F7FA"/>
                        <rect x="100" y="100" width="200" height="200" fill="white" stroke="#333" stroke-width="2"/>
                        <!-- AI generated base -->
                        <rect x="120" y="180" width="40" height="80" fill="#E9E9E9"/>
                        <rect x="180" y="160" width="40" height="100" fill="#E9E9E9"/>
                        <rect x="240" y="190" width="40" height="70" fill="#E9E9E9"/>
                        <!-- Hand-drawn additions -->
                        <circle cx="140" cy="170" r="5" fill="#333"/>
                        <circle cx="200" cy="150" r="5" fill="#333"/>
                        <circle cx="260" cy="180" r="5" fill="#333"/>
                        <line x1="140" y1="170" x2="130" y2="160" stroke="#333" stroke-width="2"/>
                        <line x1="200" y1="150" x2="210" y2="140" stroke="#333" stroke-width="2"/>
                        <text x="200" y="350" font-family="Arial" font-size="12" text-anchor="middle">
                            "Hand beats algorithm here."
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Export window -->
                        <rect width="400" height="400" fill="#1a1a2e"/>
                        <rect x="50" y="50" width="300" height="300" fill="#0a0a0f" stroke="#7DF9FF" stroke-width="2" rx="10"/>
                        <text x="200" y="100" font-family="Arial" font-size="16" text-anchor="middle" fill="white">
                            EXPORT OPTIONS
                        </text>
                        <rect x="100" y="140" width="200" height="40" fill="rgba(125,249,255,0.2)" stroke="#7DF9FF" stroke-width="2" rx="5"/>
                        <circle cx="120" cy="160" r="8" fill="#7DF9FF"/>
                        <text x="200" y="165" font-family="Arial" font-size="12" text-anchor="middle" fill="white">
                            Show C2PA Badge
                        </text>
                        <text x="200" y="250" font-family="Arial" font-size="12" text-anchor="middle" fill="#A58CFF">
                            "Yes, small in the corner."
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Finished piece with signature -->
                        <rect width="400" height="400" fill="#F5F7FA"/>
                        <rect x="50" y="50" width="300" height="280" fill="white" stroke="#333" stroke-width="3"/>
                        <!-- Artwork placeholder -->
                        <rect x="100" y="100" width="200" height="150" fill="url(#skyGrad)" opacity="0.5"/>
                        <!-- Spiral signature -->
                        <path d="M280 280 Q290 270 300 280 Q290 290 280 280" fill="none" stroke="#FFC857" stroke-width="3"/>
                        <!-- C2PA badge -->
                        <rect x="290" y="290" width="40" height="20" fill="white" stroke="#333" rx="3"/>
                        <text x="310" y="303" font-family="Arial" font-size="8" text-anchor="middle">C2PA</text>
                        <text x="200" y="360" font-family="Arial" font-size="14" text-anchor="middle">
                            "This feels... mine."
                        </text>
                    </svg>
                </div>
            </div>
        `;
    }

    generatePage8() {
        return `
            <div class="comic-page grid-3x2">
                ${[1,2,3,4,5,6].map(i => `
                    <div class="panel panel-small">
                        <svg viewBox="0 0 200 200" class="panel-svg">
                            ${this.generateMontagePanelContent(i)}
                        </svg>
                    </div>
                `).join('')}
            </div>
        `;
    }

    generateMontagePanelContent(index) {
        const panels = {
            1: `<!-- Jellyfish balloons -->
                <rect width="200" height="200" fill="#E6F3FF"/>
                <ellipse cx="100" cy="80" rx="30" ry="40" fill="rgba(125,249,255,0.5)"/>
                <path d="M100 120 Q90 140 100 160" fill="none" stroke="#7DF9FF" stroke-width="2"/>
                <text x="100" y="180" font-family="Arial" font-size="10" text-anchor="middle">
                    "Keep my warm blues"
                </text>`,
            2: `<!-- Thread city -->
                <rect width="200" height="200" fill="#FFF8E7"/>
                <line x1="50" y1="150" x2="50" y2="50" stroke="#333" stroke-width="2" stroke-dasharray="5,2"/>
                <line x1="100" y1="150" x2="100" y2="30" stroke="#333" stroke-width="2" stroke-dasharray="5,2"/>
                <line x1="150" y1="150" x2="150" y2="70" stroke="#333" stroke-width="2" stroke-dasharray="5,2"/>
                <text x="100" y="180" font-family="Arial" font-size="10" text-anchor="middle">
                    "Thread tension matched"
                </text>`,
            3: `<!-- Musical trees -->
                <rect width="200" height="200" fill="#E8F5E8"/>
                <ellipse cx="100" cy="120" rx="40" ry="60" fill="rgba(107,144,128,0.3)"/>
                <circle cx="80" cy="100" r="8" fill="none" stroke="#333" stroke-width="2"/>
                <circle cx="120" cy="110" r="8" fill="none" stroke="#333" stroke-width="2"/>
                <text x="100" y="180" font-family="Arial" font-size="10" text-anchor="middle">
                    "Soften shadows"
                </text>`,
            4: `<!-- Spiral kites -->
                <rect width="200" height="200" fill="#FFE6CC"/>
                <path d="M100 50 L80 80 L100 110 L120 80 Z" fill="#FFC857" opacity="0.6"/>
                <path d="M100 110 Q100 150 90 180" fill="none" stroke="#333" stroke-width="2"/>
                <text x="100" y="180" font-family="Arial" font-size="10" text-anchor="middle">
                    "Spiral motif weaved"
                </text>`,
            5: `<!-- Maya and Noor -->
                <rect width="200" height="200" fill="#FAFAF9"/>
                <circle cx="70" cy="100" r="25" fill="#D9A47A"/>
                <circle cx="130" cy="100" r="25" fill="#C8A882"/>
                <text x="100" y="160" font-family="Arial" font-size="10" text-anchor="middle">
                    "It's like you multiplied"
                </text>`,
            6: `<!-- Ms. Rivera thumbs up -->
                <rect width="200" height="200" fill="#FAFAF9"/>
                <ellipse cx="100" cy="100" rx="30" ry="40" fill="#D9A47A"/>
                <circle cx="100" cy="120" r="10" fill="#D9A47A"/>
                <rect x="95" y="100" width="10" height="20" fill="#D9A47A"/>
                <text x="100" y="170" font-family="Arial" font-size="10" text-anchor="middle">
                    "Market table Saturday"
                </text>`
        };
        return panels[index] || '';
    }

    generatePage9() {
        return `
            <div class="comic-page grid-2x2">
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Dad reviewing prints -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <rect x="100" y="150" width="200" height="150" fill="white" stroke="#333" stroke-width="2"/>
                        <rect x="120" y="180" width="160" height="100" fill="#F0F0F0"/>
                        <circle cx="150" cy="100" r="30" fill="#D9A47A"/>
                        <text x="200" y="350" font-family="Arial" font-size="12" text-anchor="middle">
                            "How do buyers know it's you?"
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Price tags -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <rect x="100" y="100" width="200" height="100" fill="white" stroke="#333" stroke-width="3"/>
                        <text x="200" y="130" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">
                            Limited Print - Signed
                        </text>
                        <text x="200" y="160" font-family="Arial" font-size="20" font-weight="bold" text-anchor="middle">
                            $15
                        </text>
                        <rect x="160" y="170" width="80" height="80" fill="none" stroke="#333" stroke-dasharray="2,2"/>
                        <text x="200" y="280" font-family="Arial" font-size="10" text-anchor="middle">
                            All Rights Reserved for prints
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Dashboard view -->
                        <rect width="400" height="400" fill="#1a1a2e"/>
                        <rect x="50" y="50" width="300" height="250" fill="#0a0a0f" stroke="#7DF9FF" stroke-width="2"/>
                        <text x="200" y="100" font-family="monospace" font-size="14" text-anchor="middle" fill="#7DF9FF">
                            Attribution: VISIBLE
                        </text>
                        <text x="200" y="130" font-family="monospace" font-size="14" text-anchor="middle" fill="#A58CFF">
                            Tips: ENABLED
                        </text>
                        <circle cx="100" cy="200" r="8" fill="#4ECDC4"/>
                        <text x="130" y="205" font-family="Arial" font-size="12" fill="white">Credit on listing</text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Family high-five -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <ellipse cx="150" cy="200" rx="30" ry="40" fill="#D9A47A"/>
                        <ellipse cx="250" cy="200" rx="30" ry="40" fill="#D9A47A"/>
                        <line x1="180" y1="200" x2="220" y2="200" stroke="#333" stroke-width="3"/>
                        <text x="200" y="320" font-family="Arial" font-size="14" text-anchor="middle">
                            "I'm not hiding. I'm signing."
                        </text>
                    </svg>
                </div>
            </div>
        `;
    }

    generatePage10() {
        return `
            <div class="comic-page grid-2x2">
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Community fair wide shot -->
                        <rect width="400" height="400" fill="#87CEEB"/>
                        <rect x="50" y="200" width="300" height="150" fill="#8B7355"/>
                        <rect x="100" y="150" width="80" height="100" fill="white" stroke="#333" stroke-width="2"/>
                        <rect x="220" y="150" width="80" height="100" fill="white" stroke="#333" stroke-width="2"/>
                        <text x="200" y="100" font-family="Arial Black" font-size="16" text-anchor="middle">
                            BRUSH & BYTE
                        </text>
                        <text x="200" y="120" font-family="Arial" font-size="12" text-anchor="middle">
                            By Maya
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Customer interaction -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <circle cx="150" cy="150" r="35" fill="#C8A882"/>
                        <circle cx="250" cy="150" r="35" fill="#D9A47A"/>
                        <ellipse cx="200" cy="280" rx="100" ry="40" fill="white" stroke="#333" stroke-width="2"/>
                        <text x="200" y="280" font-family="Arial" font-size="11" text-anchor="middle">
                            "I did—with AI. My name's in the file."
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Print label close-up -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <rect x="50" y="100" width="300" height="200" fill="white" stroke="#333" stroke-width="3"/>
                        <text x="200" y="150" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">
                            Created by Maya + Pixel (tool)
                        </text>
                        <text x="200" y="180" font-family="Arial" font-size="11" text-anchor="middle">
                            License: All Rights Reserved
                        </text>
                        <text x="200" y="210" font-family="Arial" font-size="11" text-anchor="middle">
                            Content Credentials attached
                        </text>
                        <rect x="170" y="230" width="60" height="30" fill="#7DF9FF" opacity="0.3" rx="5"/>
                        <text x="200" y="250" font-family="Arial" font-size="10" text-anchor="middle">C2PA</text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- First sale -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <rect x="150" y="150" width="100" height="60" fill="#4ECDC4" rx="10"/>
                        <text x="200" y="185" font-family="Arial Black" font-size="20" text-anchor="middle" fill="white">
                            $$$
                        </text>
                        <circle cx="200" cy="280" r="40" fill="#D9A47A"/>
                        <path d="M180 290 Q200 300 220 290" fill="none" stroke="#333" stroke-width="2"/>
                        <text x="200" y="360" font-family="Arial" font-size="12" text-anchor="middle">
                            "Thank you."
                        </text>
                    </svg>
                </div>
            </div>
        `;
    }

    generatePage11() {
        return `
            <div class="comic-page grid-2x2">
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Challenger with phone -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <circle cx="150" cy="150" r="35" fill="#B8A789"/>
                        <rect x="200" y="140" width="80" height="120" fill="#333" rx="10"/>
                        <rect x="210" y="160" width="60" height="80" fill="white"/>
                        <path d="M230 200 Q240 190 250 200" fill="none" stroke="#333" stroke-width="2"/>
                        <text x="200" y="320" font-family="Arial" font-size="12" text-anchor="middle">
                            "I copied your spiral thing."
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Pixel hovering near Maya -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <circle cx="200" cy="200" r="40" fill="#D9A47A"/>
                        <g transform="translate(280, 150)" opacity="0.7">
                            <polygon points="0,15 15,0 30,15 15,30" fill="#7DF9FF"/>
                        </g>
                        <rect x="250" y="100" width="120" height="40" fill="white" stroke="#7DF9FF" stroke-width="2" rx="20"/>
                        <text x="310" y="125" font-family="monospace" font-size="10" text-anchor="middle">
                            Show what only you can do?
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Maya drawing live -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <rect x="100" y="100" width="200" height="200" fill="white" stroke="#333" stroke-width="2"/>
                        <path d="M150 200 Q200 150 250 200" fill="none" stroke="#333" stroke-width="3"/>
                        <circle cx="200" cy="180" r="5" fill="#FFC857"/>
                        <path d="M200 180 L220 160 L240 180" fill="none" stroke="#E9724C" stroke-width="2"/>
                        <text x="200" y="50" font-family="Arial" font-size="10" text-anchor="middle">
                            skritch-skritch
                        </text>
                        <text x="100" y="350" font-family="Arial" font-size="10">Crowd: "Whoa"</text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Pixel enhancing -->
                        <rect width="400" height="400" fill="#1a1a2e"/>
                        <rect x="100" y="100" width="200" height="200" fill="#0a0a0f" stroke="#7DF9FF" stroke-width="2"/>
                        <circle cx="200" cy="200" r="60" fill="none" stroke="#A58CFF" stroke-width="3" opacity="0.5"/>
                        <circle cx="200" cy="200" r="40" fill="none" stroke="#7DF9FF" stroke-width="3" opacity="0.7"/>
                        <text x="200" y="350" font-family="Arial" font-size="12" text-anchor="middle" fill="white">
                            "More glow. Keep uneven lines."
                        </text>
                    </svg>
                </div>
            </div>
        `;
    }

    generatePage12() {
        return `
            <div class="comic-page grid-2x2">
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Finished live piece -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <rect x="50" y="50" width="300" height="250" fill="white" stroke="#333" stroke-width="3"/>
                        <g opacity="0.8">
                            <path d="M100 150 Q200 100 300 150" fill="none" stroke="#E9724C" stroke-width="4"/>
                            <circle cx="200" cy="125" r="30" fill="#FFC857" opacity="0.5"/>
                            <rect x="100" y="180" width="200" height="80" fill="rgba(125,249,255,0.2)"/>
                        </g>
                        <text x="200" y="320" font-family="Arial" font-size="12" text-anchor="middle">
                            "This is my voice. AI is my microphone."
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Ms. Rivera uploading -->
                        <rect width="400" height="400" fill="#1a1a2e"/>
                        <rect x="100" y="100" width="200" height="150" fill="#0a0a0f" stroke="#7DF9FF" stroke-width="2"/>
                        <text x="200" y="140" font-family="monospace" font-size="11" text-anchor="middle" fill="#7DF9FF">
                            Credit: ATTACHED
                        </text>
                        <text x="200" y="160" font-family="monospace" font-size="11" text-anchor="middle" fill="#A58CFF">
                            License: SET
                        </text>
                        <rect x="150" y="190" width="100" height="30" fill="#4ECDC4" rx="5"/>
                        <text x="200" y="210" font-family="Arial" font-size="12" text-anchor="middle" fill="white">
                            LIST IT
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Challenger sheepish -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <circle cx="200" cy="150" r="40" fill="#B8A789"/>
                        <circle cx="185" cy="145" r="5" fill="#333"/>
                        <circle cx="215" cy="145" r="5" fill="#333"/>
                        <path d="M185 170 Q200 165 215 170" fill="none" stroke="#333" stroke-width="2"/>
                        <text x="200" y="280" font-family="Arial" font-size="12" text-anchor="middle">
                            "...Yours feels alive."
                        </text>
                        <text x="200" y="320" font-family="Arial" font-size="11" text-anchor="middle" fill="#666">
                            Maya: "Make your own motif."
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Noor with badge -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <circle cx="200" cy="150" r="40" fill="#C8A882"/>
                        <ellipse cx="200" cy="250" rx="30" ry="20" fill="#FFE66D" stroke="#333" stroke-width="2"/>
                        <text x="200" y="255" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">
                            AUTHOR
                        </text>
                        <text x="200" y="320" font-family="Arial" font-size="12" text-anchor="middle">
                            "Wear it."
                        </text>
                    </svg>
                </div>
            </div>
        `;
    }

    generatePage13() {
        return `
            <div class="comic-page grid-2x2">
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Maya teaching crowd -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <circle cx="200" cy="100" r="30" fill="#D9A47A"/>
                        <rect x="150" y="130" width="100" height="80" fill="#2E86AB"/>
                        <g>
                            <circle cx="100" cy="250" r="20" fill="#B8A789"/>
                            <circle cx="150" cy="260" r="20" fill="#C8A882"/>
                            <circle cx="200" cy="250" r="20" fill="#D4B5A0"/>
                            <circle cx="250" cy="260" r="20" fill="#B8A789"/>
                            <circle cx="300" cy="250" r="20" fill="#C8A882"/>
                        </g>
                        <text x="200" y="350" font-family="Arial" font-size="14" text-anchor="middle">
                            "Three rules: Consent. Credit. Create."
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Whiteboard diagram -->
                        <rect width="400" height="400" fill="white"/>
                        <rect x="50" y="50" width="300" height="250" fill="#F9F9F9" stroke="#333" stroke-width="2"/>
                        <circle cx="100" cy="150" r="30" fill="#FFE66D"/>
                        <text x="100" y="155" font-size="10" text-anchor="middle">HAND</text>
                        <line x1="130" y1="150" x2="170" y2="150" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
                        <circle cx="200" cy="150" r="30" fill="#7DF9FF"/>
                        <text x="200" y="155" font-size="10" text-anchor="middle">AI</text>
                        <line x1="230" y1="150" x2="270" y2="150" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
                        <circle cx="300" cy="150" r="30" fill="#4ECDC4"/>
                        <text x="300" y="155" font-size="10" text-anchor="middle">SELL</text>
                        <defs>
                            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#333"/>
                            </marker>
                        </defs>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Parents nodding -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <g>
                            <circle cx="150" cy="150" r="35" fill="#B8A789"/>
                            <circle cx="250" cy="150" r="35" fill="#C8A882"/>
                        </g>
                        <ellipse cx="200" cy="280" rx="120" ry="40" fill="white" stroke="#333" stroke-width="2"/>
                        <text x="200" y="280" font-family="Arial" font-size="12" text-anchor="middle">
                            "So money?" - "Prints, commissions, tips."
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Pixel speaking -->
                        <rect width="400" height="400" fill="#1a1a2e"/>
                        <g transform="translate(200, 200)">
                            <polygon points="-40,0 0,-40 40,0 0,40" fill="#7DF9FF" opacity="0.8"/>
                            <polygon points="-20,-20 20,-20 0,0" fill="#FFFFFF" opacity="0.9"/>
                        </g>
                        <rect x="100" y="280" width="200" height="40" fill="white" stroke="#7DF9FF" stroke-width="2" rx="20"/>
                        <text x="200" y="305" font-family="monospace" font-size="12" text-anchor="middle">
                            And your style stays yours.
                        </text>
                    </svg>
                </div>
            </div>
        `;
    }

    generatePage14() {
        return `
            <div class="comic-page grid-2x2">
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Sales dashboard at home -->
                        <rect width="400" height="400" fill="#2a2a3e"/>
                        <rect x="50" y="50" width="300" height="200" fill="#0a0a0f" stroke="#7DF9FF" stroke-width="2"/>
                        <text x="200" y="100" font-family="monospace" font-size="14" text-anchor="middle" fill="#4ECDC4">
                            SALES: 3 | TIPS: $12
                        </text>
                        <rect x="100" y="130" width="200" height="20" fill="#333"/>
                        <rect x="100" y="130" width="120" height="20" fill="#4ECDC4"/>
                        <text x="200" y="300" font-family="Arial" font-size="12" text-anchor="middle" fill="white">
                            "Your work paid for pizza."
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Spiral bracelet close-up -->
                        <rect width="400" height="400" fill="#1a1a2e"/>
                        <circle cx="200" cy="200" r="100" fill="none" stroke="#FFC857" stroke-width="12"/>
                        <path d="M200 100 Q300 200 200 300 Q100 200 200 100" fill="none" stroke="#FFC857" stroke-width="6"/>
                        <text x="200" y="350" font-family="Arial" font-size="12" text-anchor="middle" fill="white">
                            "Thanks for not replacing me."
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- Filing prints -->
                        <rect width="400" height="400" fill="#FAFAF9"/>
                        <rect x="100" y="100" width="200" height="250" fill="#8B7355" stroke="#333" stroke-width="3"/>
                        <rect x="120" y="120" width="160" height="30" fill="white"/>
                        <text x="200" y="140" font-family="Arial Black" font-size="16" text-anchor="middle">
                            VOICE
                        </text>
                        <rect x="120" y="160" width="160" height="170" fill="#F5F5F5"/>
                        <text x="200" y="370" font-family="Arial" font-size="12" text-anchor="middle">
                            "Tomorrow: clouds that sing."
                        </text>
                    </svg>
                </div>
                <div class="panel">
                    <svg viewBox="0 0 400 400" class="panel-svg">
                        <!-- City window at night -->
                        <rect width="400" height="400" fill="#1E2A44"/>
                        <rect x="50" y="50" width="300" height="200" fill="none" stroke="#FFDF91" stroke-width="3"/>
                        <g>
                            <rect x="80" y="100" width="40" height="60" fill="#FFDF91" opacity="0.8"/>
                            <rect x="150" y="80" width="40" height="80" fill="#FFDF91" opacity="0.7"/>
                            <rect x="220" y="110" width="40" height="50" fill="#FFDF91" opacity="0.9"/>
                            <rect x="290" y="90" width="40" height="70" fill="#FFDF91" opacity="0.6"/>
                        </g>
                        <circle cx="350" cy="50" r="3" fill="white" opacity="0.8"/>
                        <circle cx="320" cy="30" r="2" fill="white" opacity="0.6"/>
                        <circle cx="370" cy="70" r="2" fill="white" opacity="0.7"/>
                        <text x="200" y="320" font-family="Arial" font-size="11" text-anchor="middle" fill="white" opacity="0.9">
                            "The sky didn't shrink. Her brush got louder."
                        </text>
                    </svg>
                </div>
            </div>
        `;
    }

    generatePage15() {
        return `
            <div class="comic-page">
                <div class="splash-panel final">
                    <svg viewBox="0 0 800 1200" class="page-svg">
                        <defs>
                            <linearGradient id="finalSkyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color:#1E2A44;stop-opacity:1" />
                                <stop offset="50%" style="stop-color:#7DF9FF;stop-opacity:0.3" />
                                <stop offset="100%" style="stop-color:#FFE66D;stop-opacity:0.2" />
                            </linearGradient>
                            <filter id="finalGlow">
                                <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        
                        <!-- Background -->
                        <rect width="800" height="1200" fill="url(#finalSkyGrad)"/>
                        
                        <!-- City silhouette -->
                        <g opacity="0.6">
                            <rect x="50" y="600" width="100" height="400" fill="#2a2a3e"/>
                            <rect x="180" y="550" width="100" height="450" fill="#2a2a3e"/>
                            <rect x="310" y="620" width="100" height="380" fill="#2a2a3e"/>
                            <rect x="440" y="580" width="100" height="420" fill="#2a2a3e"/>
                            <rect x="570" y="600" width="100" height="400" fill="#2a2a3e"/>
                            <rect x="700" y="650" width="80" height="350" fill="#2a2a3e"/>
                        </g>
                        
                        <!-- Rooftop -->
                        <rect x="200" y="500" width="400" height="20" fill="#333"/>
                        
                        <!-- Maya painting -->
                        <ellipse cx="300" cy="450" rx="40" ry="60" fill="#2E86AB"/>
                        <circle cx="300" cy="380" r="30" fill="#D9A47A"/>
                        <rect x="280" y="430" width="40" height="70" fill="#2E86AB"/>
                        <ellipse cx="320" cy="440" rx="25" ry="15" fill="#D9A47A"/>
                        
                        <!-- Giant spiral comet mural -->
                        <path d="M350 300 Q450 200 550 300 Q450 400 350 300" 
                              fill="none" stroke="#FFC857" stroke-width="8" filter="url(#finalGlow)"/>
                        <path d="M550 300 Q600 320 650 300 Q700 280 750 300" 
                              fill="none" stroke="#E9724C" stroke-width="6" opacity="0.8"/>
                        
                        <!-- Pixel arc -->
                        <g transform="translate(400, 250)" opacity="0.7">
                            <polygon points="0,30 30,0 60,30 30,60" fill="#7DF9FF" filter="url(#finalGlow)"/>
                            <polygon points="30,0 60,30 90,0 60,-30" fill="#A58CFF" filter="url(#finalGlow)"/>
                        </g>
                        
                        <!-- Speech bubble -->
                        <rect x="100" y="100" width="600" height="80" fill="white" stroke="#333" stroke-width="3" rx="10"/>
                        <text x="400" y="130" font-family="Arial" font-size="18" text-anchor="middle">
                            AI didn't steal my art.
                        </text>
                        <text x="400" y="160" font-family="Arial" font-size="18" text-anchor="middle">
                            It helped me show the world it was mine.
                        </text>
                        
                        <!-- C2PA Badge -->
                        <rect x="680" y="1100" width="100" height="60" fill="white" stroke="#333" stroke-width="2" rx="5"/>
                        <text x="730" y="1125" font-family="Arial" font-size="10" text-anchor="middle">
                            Created by
                        </text>
                        <text x="730" y="1140" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle">
                            MAYA + PIXEL
                        </text>
                        <text x="730" y="1155" font-family="Arial" font-size="8" text-anchor="middle">
                            All Rights Reserved
                        </text>
                        
                        <!-- Maya's signature spiral -->
                        <path d="M650 1050 Q670 1030 690 1050 Q670 1070 650 1050" 
                              fill="none" stroke="#FFC857" stroke-width="4" filter="url(#finalGlow)"/>
                    </svg>
                </div>
            </div>
        `;
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.renderPage(this.currentPage);
        }
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.renderPage(this.currentPage);
        }
    }

    updateProgress() {
        const progress = (this.currentPage / this.totalPages) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
        
        // Save progress
        this.readingProgress[this.currentNovel] = {
            currentPage: this.currentPage,
            totalPages: this.totalPages,
            lastRead: Date.now()
        };
        this.saveReadingProgress();
    }

    generateThumbnails() {
        const container = document.getElementById('pageThumbnails');
        container.innerHTML = '';
        
        for (let i = 1; i <= this.totalPages; i++) {
            const thumb = document.createElement('div');
            thumb.className = 'thumbnail';
            thumb.dataset.page = i;
            thumb.innerHTML = `<span>${i}</span>`;
            thumb.addEventListener('click', () => {
                this.currentPage = i;
                this.renderPage(i);
                this.updateProgress();
            });
            container.appendChild(thumb);
        }
    }

    toggleImmersive() {
        this.isImmersive = !this.isImmersive;
        document.body.classList.toggle('immersive-mode', this.isImmersive);
        
        if (this.isImmersive) {
            this.enterFullscreen();
        } else {
            this.exitFullscreen();
        }
    }

    toggleAudio() {
        this.isAudioEnabled = !this.isAudioEnabled;
        const btn = document.getElementById('toggleAudio');
        btn.classList.toggle('active', this.isAudioEnabled);
        
        if (this.isAudioEnabled) {
            this.startNarration();
        } else {
            this.stopNarration();
        }
    }

    startNarration() {
        // Placeholder for AI narration
        console.log('AI narration started');
    }

    stopNarration() {
        // Placeholder for stopping narration
        console.log('AI narration stopped');
    }

    openSettings() {
        // Create settings modal
        const modal = document.createElement('div');
        modal.className = 'settings-modal';
        modal.innerHTML = `
            <div class="settings-content">
                <h2>Reading Settings</h2>
                <div class="setting-item">
                    <label>Text Size</label>
                    <input type="range" min="12" max="24" value="16" id="textSize">
                </div>
                <div class="setting-item">
                    <label>Reading Speed</label>
                    <input type="range" min="0.5" max="2" step="0.1" value="1" id="readingSpeed">
                </div>
                <div class="setting-item">
                    <label>Panel Transitions</label>
                    <select id="transitionStyle">
                        <option value="fade">Fade</option>
                        <option value="slide">Slide</option>
                        <option value="zoom">Zoom</option>
                    </select>
                </div>
                <button class="btn btn-primary" onclick="this.parentElement.parentElement.remove()">Close</button>
            </div>
        `;
        document.body.appendChild(modal);
    }

    handleKeyboard(e) {
        if (document.getElementById('novelReader').style.display === 'none') return;
        
        switch(e.key) {
            case 'ArrowLeft':
                this.previousPage();
                break;
            case 'ArrowRight':
                this.nextPage();
                break;
            case 'Escape':
                this.closeReader();
                break;
            case 'f':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    this.toggleImmersive();
                }
                break;
        }
    }

    setupTouchGestures() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        const reader = document.getElementById('pageContainer');
        
        reader?.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        reader?.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });
        
        this.handleSwipe = () => {
            if (touchEndX < touchStartX - 50) {
                this.nextPage();
            }
            if (touchEndX > touchStartX + 50) {
                this.previousPage();
            }
        };
    }

    enterFullscreen() {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    }

    exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

    loadReadingProgress() {
        const saved = localStorage.getItem('readingProgress');
        if (saved) {
            this.readingProgress = JSON.parse(saved);
        }
    }

    saveReadingProgress() {
        localStorage.setItem('readingProgress', JSON.stringify(this.readingProgress));
    }

    initializeAnimations() {
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.novel-card, .feature-card').forEach(el => {
            observer.observe(el);
        });
    }

    setupPWA() {
        // Register service worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js').catch(err => {
                console.log('Service worker registration failed:', err);
            });
        }
    }
}

// Initialize app
const app = new InfiniteCanvas();

// Global function for opening novels
window.openNovel = function(novelId) {
    app.openNovel(novelId);
};

// Make available globally
window.InfiniteCanvas = InfiniteCanvas;