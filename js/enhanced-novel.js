// Enhanced Brush & Byte - A Revolutionary Graphic Novel Experience
// This transforms the story into a deeply immersive, emotionally resonant journey

class EnhancedBrushByte {
    constructor() {
        this.currentPage = 1;
        this.totalPages = 15;
        this.audioNarration = {};
        this.animations = {};
    }

    getEnhancedPage(pageNum) {
        const pages = {
            1: this.generatePage1(),
            2: this.generatePage2(),
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
        return pages[pageNum];
    }

    generatePage1() {
        return `
            <div class="enhanced-comic-page page-1">
                <div class="atmospheric-layer"></div>
                <svg viewBox="0 0 1920 1080" class="page-svg cinematic" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <!-- Complex gradients for depth -->
                        <radialGradient id="dreamGlow" cx="50%" cy="30%">
                            <stop offset="0%" style="stop-color:#FFE66D;stop-opacity:0.8">
                                <animate attributeName="stop-opacity" values="0.8;0.4;0.8" dur="4s" repeatCount="indefinite"/>
                            </stop>
                            <stop offset="50%" style="stop-color:#7DF9FF;stop-opacity:0.4"/>
                            <stop offset="100%" style="stop-color:#A58CFF;stop-opacity:0.1"/>
                        </radialGradient>
                        
                        <filter id="paperTexture">
                            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise"/>
                            <feDiffuseLighting in="noise" lighting-color="white" surfaceScale="1">
                                <feDistantLight azimuth="45" elevation="60"/>
                            </feDiffuseLighting>
                        </filter>

                        <filter id="softGlow">
                            <feGaussianBlur stdDeviation="4"/>
                            <feComponentTransfer>
                                <feFuncA type="discrete" tableValues="0 .5 .5 .5 .5 .5 .5 .5 .5 .5 .5 .5 .5 .5 1"/>
                            </feComponentTransfer>
                        </filter>

                        <!-- Animated stars -->
                        <pattern id="stars" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="1" fill="white" opacity="0.8">
                                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="40" cy="25" r="0.5" fill="white" opacity="0.6">
                                <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.5s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="80" cy="60" r="0.8" fill="white" opacity="0.7">
                                <animate attributeName="opacity" values="0.7;0.3;0.7" dur="3.5s" repeatCount="indefinite"/>
                            </circle>
                        </pattern>
                    </defs>

                    <!-- Layered background for depth -->
                    <rect width="1920" height="1080" fill="#0a0a0f"/>
                    <rect width="1920" height="1080" fill="url(#stars)" opacity="0.6"/>
                    <ellipse cx="960" cy="200" rx="800" ry="400" fill="url(#dreamGlow)" opacity="0.3"/>
                    
                    <!-- Art room interior - detailed and lived-in -->
                    <g id="artRoom">
                        <!-- Window with golden hour light -->
                        <rect x="100" y="200" width="400" height="500" fill="#FFE66D" opacity="0.2"/>
                        <rect x="100" y="200" width="400" height="500" fill="none" stroke="#8B7355" stroke-width="8"/>
                        <line x1="300" y1="200" x2="300" y2="700" stroke="#8B7355" stroke-width="4"/>
                        <line x1="100" y1="450" x2="500" y2="450" stroke="#8B7355" stroke-width="4"/>
                        
                        <!-- Light rays -->
                        <path d="M100 200 L600 600 L650 650 L150 200 Z" fill="#FFE66D" opacity="0.15"/>
                        <path d="M400 200 L900 600 L950 650 L450 200 Z" fill="#FFE66D" opacity="0.12"/>
                        
                        <!-- Art supplies scattered on desk -->
                        <rect x="550" y="650" width="820" height="380" fill="#8B6F47" filter="url(#paperTexture)" opacity="0.8"/>
                        <rect x="550" y="650" width="820" height="10" fill="#6B5637"/>
                        
                        <!-- Paint palette -->
                        <ellipse cx="650" cy="750" rx="80" ry="60" fill="#D2B48C"/>
                        <circle cx="630" cy="740" r="15" fill="#FF6B6B"/>
                        <circle cx="660" cy="735" r="15" fill="#4ECDC4"/>
                        <circle cx="685" cy="745" r="15" fill="#FFE66D"/>
                        <circle cx="655" cy="765" r="15" fill="#A58CFF"/>
                        
                        <!-- Brushes in jar -->
                        <rect x="1200" y="700" width="60" height="100" fill="#E6E6FA" opacity="0.5"/>
                        <rect x="1200" y="780" width="60" height="20" fill="#8B7D6B"/>
                        <line x1="1210" y1="700" x2="1210" y2="650" stroke="#8B4513" stroke-width="3"/>
                        <line x1="1220" y1="700" x2="1220" y2="640" stroke="#2F4F4F" stroke-width="3"/>
                        <line x1="1230" y1="700" x2="1230" y2="645" stroke="#B22222" stroke-width="3"/>
                        <line x1="1240" y1="700" x2="1240" y2="655" stroke="#4B0082" stroke-width="3"/>
                        <line x1="1250" y1="700" x2="1250" y2="648" stroke="#228B22" stroke-width="3"/>
                    </g>

                    <!-- Maya - detailed character design -->
                    <g id="maya" transform="translate(960, 540)">
                        <!-- Shadow -->
                        <ellipse cx="0" cy="280" rx="120" ry="30" fill="black" opacity="0.3"/>
                        
                        <!-- Body -->
                        <path d="M-60 100 Q-70 150 -65 200 L-50 260 L50 260 L65 200 Q70 150 60 100 Z" 
                              fill="#2E86AB"/>
                        
                        <!-- Paint splatters on hoodie -->
                        <circle cx="-30" cy="150" r="8" fill="#FFE66D" opacity="0.7"/>
                        <circle cx="20" cy="180" r="6" fill="#FF6B6B" opacity="0.6"/>
                        <circle cx="-10" cy="200" r="5" fill="#4ECDC4" opacity="0.5"/>
                        
                        <!-- Arms -->
                        <ellipse cx="-65" cy="140" rx="20" ry="80" fill="#D9A47A" transform="rotate(-30 -65 140)"/>
                        <ellipse cx="65" cy="140" rx="20" ry="80" fill="#D9A47A" transform="rotate(15 65 140)"/>
                        
                        <!-- Head -->
                        <circle cx="0" cy="0" r="55" fill="#D9A47A"/>
                        
                        <!-- Hair with individual strands -->
                        <path d="M-55 -20 Q-60 -40 -50 -50 Q-30 -60 0 -55 Q30 -60 50 -50 Q60 -40 55 -20" 
                              fill="#2B2B2B"/>
                        <path d="M-40 -30 Q-35 -45 -25 -48" fill="none" stroke="#1a1a1a" stroke-width="2"/>
                        <path d="M40 -30 Q35 -45 25 -48" fill="none" stroke="#1a1a1a" stroke-width="2"/>
                        
                        <!-- Messy bun -->
                        <ellipse cx="5" cy="-45" rx="25" ry="20" fill="#2B2B2B"/>
                        <circle cx="-5" cy="-48" r="5" fill="#1a1a1a"/>
                        <circle cx="12" cy="-43" r="4" fill="#1a1a1a"/>
                        
                        <!-- Face details -->
                        <!-- Eyes - large and expressive -->
                        <ellipse cx="-20" cy="-5" rx="18" ry="22" fill="white"/>
                        <ellipse cx="20" cy="-5" rx="18" ry="22" fill="white"/>
                        <circle cx="-18" cy="-3" r="12" fill="#4B3621"/>
                        <circle cx="22" cy="-3" r="12" fill="#4B3621"/>
                        <circle cx="-16" cy="-5" r="6" fill="black"/>
                        <circle cx="24" cy="-5" r="6" fill="black"/>
                        <circle cx="-14" cy="-7" r="2" fill="white"/>
                        <circle cx="26" cy="-7" r="2" fill="white"/>
                        
                        <!-- Eyebrows showing worry -->
                        <path d="M-35 -25 Q-20 -30 -5 -25" fill="none" stroke="#2B2B2B" stroke-width="2.5"/>
                        <path d="M5 -25 Q20 -30 35 -25" fill="none" stroke="#2B2B2B" stroke-width="2.5"/>
                        
                        <!-- Nose -->
                        <path d="M0 5 L-5 15 L0 18 L5 15 Z" fill="#C8A882" opacity="0.5"/>
                        
                        <!-- Mouth - slightly downturned, worried -->
                        <path d="M-15 30 Q0 25 15 30" fill="none" stroke="#B8766D" stroke-width="2" stroke-linecap="round"/>
                        
                        <!-- Spiral bracelet - glowing -->
                        <g transform="translate(68, 200)">
                            <circle cx="0" cy="0" r="12" fill="none" stroke="#FFC857" stroke-width="3" filter="url(#softGlow)"/>
                            <path d="M0 -12 Q12 0 0 12 Q-12 0 0 -12" fill="none" stroke="#FFD700" stroke-width="2">
                                <animateTransform attributeName="transform" type="rotate" 
                                                from="0 0 0" to="360 0 0" dur="20s" repeatCount="indefinite"/>
                            </path>
                        </g>
                    </g>

                    <!-- Sketchbook - detailed with visible art -->
                    <g id="sketchbook" transform="translate(900, 850)">
                        <rect x="-100" y="-70" width="200" height="140" fill="white" stroke="#333" stroke-width="3" 
                              transform="rotate(-5)" filter="url(#paperTexture)"/>
                        
                        <!-- Spiral binding -->
                        <circle cx="-95" cy="-60" r="4" fill="none" stroke="#666" stroke-width="2" transform="rotate(-5)"/>
                        <circle cx="-95" cy="-40" r="4" fill="none" stroke="#666" stroke-width="2" transform="rotate(-5)"/>
                        <circle cx="-95" cy="-20" r="4" fill="none" stroke="#666" stroke-width="2" transform="rotate(-5)"/>
                        <circle cx="-95" cy="0" r="4" fill="none" stroke="#666" stroke-width="2" transform="rotate(-5)"/>
                        <circle cx="-95" cy="20" r="4" fill="none" stroke="#666" stroke-width="2" transform="rotate(-5)"/>
                        <circle cx="-95" cy="40" r="4" fill="none" stroke="#666" stroke-width="2" transform="rotate(-5)"/>
                        <circle cx="-95" cy="60" r="4" fill="none" stroke="#666" stroke-width="2" transform="rotate(-5)"/>
                        
                        <!-- Sketch on page -->
                        <g transform="rotate(-5)">
                            <circle cx="20" cy="0" r="30" fill="none" stroke="#999" stroke-width="1" stroke-dasharray="2,2"/>
                            <path d="M-10 -20 Q20 -30 50 -20" fill="none" stroke="#666" stroke-width="1"/>
                            <rect x="-40" y="30" width="60" height="25" fill="none" stroke="#999" stroke-width="1"/>
                        </g>
                    </g>

                    <!-- Pixel's ethereal presence - subtle but present -->
                    <g id="pixelHint" transform="translate(1400, 400)" opacity="0.3">
                        <polygon points="0,40 40,0 80,40 40,80" fill="#7DF9FF" filter="url(#softGlow)">
                            <animate attributeName="opacity" values="0.3;0.1;0.3" dur="4s" repeatCount="indefinite"/>
                        </polygon>
                        <polygon points="20,20 60,20 60,60 20,60" fill="#A58CFF" filter="url(#softGlow)">
                            <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite"/>
                        </polygon>
                    </g>

                    <!-- Thought bubble - Maya's fear visualized -->
                    <g id="thoughtBubble" transform="translate(600, 300)">
                        <ellipse cx="0" cy="0" rx="200" ry="100" fill="white" opacity="0.9" filter="url(#softGlow)"/>
                        <circle cx="-80" cy="80" r="20" fill="white" opacity="0.8"/>
                        <circle cx="-110" cy="110" r="15" fill="white" opacity="0.7"/>
                        <circle cx="-130" cy="135" r="10" fill="white" opacity="0.6"/>
                        
                        <!-- Fear visualization inside thought -->
                        <g id="fearVision">
                            <!-- Hand reaching for art -->
                            <path d="M-50 -20 L-30 -10 L-25 0 L-30 10 L-50 5 Z" fill="#333" opacity="0.7"/>
                            <rect x="20" y="-30" width="60" height="40" fill="none" stroke="#666" stroke-width="2" stroke-dasharray="5,5"/>
                            <text x="50" y="0" font-family="Arial" font-size="14" text-anchor="middle" fill="#333">MY ART</text>
                            
                            <!-- Arrow showing theft -->
                            <path d="M-20 0 L10 0" stroke="#FF6B6B" stroke-width="3" marker-end="url(#arrowRed)"/>
                            
                            <!-- Question marks showing uncertainty -->
                            <text x="-80" y="-40" font-family="Arial" font-size="20" fill="#999">?</text>
                            <text x="80" y="40" font-family="Arial" font-size="18" fill="#999">?</text>
                        </g>
                        
                        <defs>
                            <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                <path d="M0,0 L0,6 L9,3 z" fill="#FF6B6B"/>
                            </marker>
                        </defs>
                    </g>

                    <!-- Title with hand-drawn style -->
                    <g id="title" transform="translate(960, 100)">
                        <text x="0" y="0" font-family="'Marker Felt', 'Comic Sans MS', cursive" font-size="90" 
                              text-anchor="middle" fill="none" stroke="white" stroke-width="3">
                            BRUSH & BYTE
                        </text>
                        <text x="0" y="0" font-family="'Marker Felt', 'Comic Sans MS', cursive" font-size="90" 
                              text-anchor="middle" fill="url(#dreamGlow)">
                            BRUSH & BYTE
                        </text>
                        
                        <!-- Decorative underline -->
                        <path d="M-200 20 Q-100 30 0 20 Q100 10 200 20" 
                              fill="none" stroke="#FFC857" stroke-width="3" stroke-linecap="round"/>
                    </g>

                    <!-- Opening narration in elegant box -->
                    <g id="narration" transform="translate(960, 950)">
                        <rect x="-400" y="-40" width="800" height="80" fill="black" opacity="0.8" rx="10"/>
                        <text x="0" y="-10" font-family="'Georgia', serif" font-size="18" text-anchor="middle" 
                              fill="white" font-style="italic">
                            "I used to think creativity was like a secret garden only I could enter."
                        </text>
                        <text x="0" y="15" font-family="'Georgia', serif" font-size="18" text-anchor="middle" 
                              fill="white" font-style="italic">
                            "Then I learned that sometimes, the best gardens grow when you share the seeds."
                        </text>
                    </g>

                    <!-- Subtle animation elements -->
                    <animateTransform xlink:href="#maya" attributeName="transform" 
                                    type="translate" values="960,540; 960,535; 960,540" 
                                    dur="4s" repeatCount="indefinite"/>
                    
                    <animate xlink:href="#thoughtBubble" attributeName="opacity" 
                            values="0; 0.9; 0.9; 0" dur="8s" repeatCount="indefinite"/>
                </svg>

                <!-- Ambient audio cue -->
                <div class="audio-narrator" data-text="Page 1: Maya sits in her art room as golden sunlight streams through the window. Her sketchbook lies open, but her hand hesitates. In the corner, barely visible, geometric shapes pulse with a gentle light - a hint of digital presence watching with curiosity, not threat."></div>
            </div>
        `;
    }

    generatePage2() {
        return `
            <div class="enhanced-comic-page page-2">
                <div class="panel-layout four-panel-grid">
                    <!-- Panel 1: Classroom wide shot -->
                    <div class="panel panel-1">
                        <svg viewBox="0 0 800 600" class="panel-svg">
                            <defs>
                                <linearGradient id="classroomLight" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#FFF8DC;stop-opacity:1"/>
                                    <stop offset="100%" style="stop-color:#F0E68C;stop-opacity:0.5"/>
                                </linearGradient>
                                
                                <pattern id="corkboard" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <rect width="40" height="40" fill="#D2691E"/>
                                    <circle cx="5" cy="5" r="2" fill="#A0522D"/>
                                    <circle cx="25" cy="15" r="1.5" fill="#8B4513"/>
                                    <circle cx="15" cy="30" r="2" fill="#A0522D"/>
                                    <circle cx="35" cy="35" r="1.8" fill="#8B4513"/>
                                </pattern>
                            </defs>

                            <!-- Classroom background -->
                            <rect width="800" height="600" fill="url(#classroomLight)"/>
                            
                            <!-- Back wall with corkboard -->
                            <rect x="0" y="0" width="800" height="350" fill="#F5DEB3"/>
                            <rect x="50" y="50" width="300" height="200" fill="url(#corkboard)" stroke="#8B4513" stroke-width="4"/>
                            
                            <!-- Student artwork on corkboard -->
                            <rect x="80" y="80" width="80" height="100" fill="white" stroke="#333" stroke-width="2" transform="rotate(-5 120 130)"/>
                            <rect x="180" y="90" width="80" height="100" fill="white" stroke="#333" stroke-width="2" transform="rotate(3 220 140)"/>
                            <rect x="260" y="75" width="80" height="100" fill="white" stroke="#333" stroke-width="2" transform="rotate(-2 300 125)"/>
                            
                            <!-- Windows -->
                            <rect x="450" y="80" width="150" height="200" fill="#87CEEB" opacity="0.3" stroke="#8B7355" stroke-width="6"/>
                            <line x1="525" y1="80" x2="525" y2="280" stroke="#8B7355" stroke-width="3"/>
                            <line x1="450" y1="180" x2="600" y2="180" stroke="#8B7355" stroke-width="3"/>
                            
                            <rect x="620" y="80" width="150" height="200" fill="#87CEEB" opacity="0.3" stroke="#8B7355" stroke-width="6"/>
                            <line x1="695" y1="80" x2="695" y2="280" stroke="#8B7355" stroke-width="3"/>
                            <line x1="620" y1="180" x2="770" y2="180" stroke="#8B7355" stroke-width="3"/>
                            
                            <!-- Desks with students -->
                            <g id="desk1" transform="translate(150, 380)">
                                <rect x="0" y="0" width="120" height="80" fill="#8B7355"/>
                                <rect x="0" y="0" width="120" height="5" fill="#654321"/>
                                <!-- Student silhouette -->
                                <ellipse cx="60" cy="-30" rx="35" ry="50" fill="#4169E1"/>
                                <circle cx="60" cy="-80" r="25" fill="#D2B48C"/>
                            </g>
                            
                            <g id="desk2" transform="translate(320, 380)">
                                <rect x="0" y="0" width="120" height="80" fill="#8B7355"/>
                                <rect x="0" y="0" width="120" height="5" fill="#654321"/>
                                <!-- Maya -->
                                <ellipse cx="60" cy="-30" rx="35" ry="50" fill="#2E86AB"/>
                                <circle cx="60" cy="-80" r="25" fill="#D9A47A"/>
                                <!-- Her worried expression visible -->
                                <ellipse cx="50" cy="-85" rx="4" ry="5" fill="white"/>
                                <ellipse cx="70" cy="-85" rx="4" ry="5" fill="white"/>
                                <circle cx="50" cy="-85" r="3" fill="black"/>
                                <circle cx="70" cy="-85" r="3" fill="black"/>
                                <path d="M45 -70 Q60 -65 75 -70" fill="none" stroke="#333" stroke-width="2"/>
                            </g>
                            
                            <g id="desk3" transform="translate(490, 380)">
                                <rect x="0" y="0" width="120" height="80" fill="#8B7355"/>
                                <rect x="0" y="0" width="120" height="5" fill="#654321"/>
                                <!-- Noor -->
                                <ellipse cx="60" cy="-30" rx="35" ry="50" fill="#FF69B4"/>
                                <circle cx="60" cy="-80" r="25" fill="#C8A882"/>
                                <rect x="35" y="-105" width="50" height="20" fill="#8B008B" rx="5"/>
                            </g>
                            
                            <!-- Mr. López at front -->
                            <g id="teacher" transform="translate(400, 250)">
                                <rect x="-40" y="0" width="80" height="120" fill="#6B9080"/>
                                <circle cx="0" cy="-40" r="35" fill="#B8860B"/>
                                <!-- Glasses -->
                                <circle cx="-12" cy="-40" r="12" fill="none" stroke="#333" stroke-width="2"/>
                                <circle cx="12" cy="-40" r="12" fill="none" stroke="#333" stroke-width="2"/>
                                <line x1="0" y1="-40" x2="0" y2="-40" stroke="#333" stroke-width="2"/>
                                <!-- Holding flyers -->
                                <rect x="30" y="20" width="60" height="80" fill="white" stroke="#333" stroke-width="2"/>
                                <text x="60" y="50" font-family="Arial" font-size="8" text-anchor="middle" fill="#333">AI ART</text>
                                <text x="60" y="65" font-family="Arial" font-size="8" text-anchor="middle" fill="#333">LAB</text>
                            </g>
                            
                            <!-- Speech bubble -->
                            <g transform="translate(450, 150)">
                                <ellipse cx="0" cy="0" rx="140" ry="60" fill="white" stroke="#333" stroke-width="3"/>
                                <path d="M-50 50 L-30 40 L-20 60 Z" fill="white" stroke="#333" stroke-width="3"/>
                                <text x="0" y="-15" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#333">
                                    "Exciting news, artists!"
                                </text>
                                <text x="0" y="5" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#333">
                                    "The library is hosting"
                                </text>
                                <text x="0" y="25" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#333">
                                    "an AI Art Lab next week!"
                                </text>
                            </g>
                        </svg>
                    </div>

                    <!-- Panel 2: Close-up on flyer -->
                    <div class="panel panel-2">
                        <svg viewBox="0 0 800 600" class="panel-svg">
                            <defs>
                                <filter id="shadow">
                                    <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                                    <feOffset dx="3" dy="3" result="offsetblur"/>
                                    <feComponentTransfer>
                                        <feFuncA type="linear" slope="0.5"/>
                                    </feComponentTransfer>
                                    <feMerge>
                                        <feMergeNode/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>

                            <!-- Background -->
                            <rect width="800" height="600" fill="#F0E68C"/>
                            
                            <!-- Flyer -->
                            <rect x="150" y="50" width="500" height="500" fill="white" stroke="#333" stroke-width="4" filter="url(#shadow)"/>
                            
                            <!-- Decorative border -->
                            <rect x="170" y="70" width="460" height="460" fill="none" stroke="#7DF9FF" stroke-width="3" stroke-dasharray="10,5"/>
                            
                            <!-- Title -->
                            <text x="400" y="150" font-family="'Bebas Neue', sans-serif" font-size="60" text-anchor="middle" fill="#333">
                                AI ART LAB
                            </text>
                            
                            <!-- Subtitle with gradient -->
                            <defs>
                                <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style="stop-color:#7DF9FF"/>
                                    <stop offset="50%" style="stop-color:#A58CFF"/>
                                    <stop offset="100%" style="stop-color:#FFE66D"/>
                                </linearGradient>
                            </defs>
                            <text x="400" y="200" font-family="Arial" font-size="24" text-anchor="middle" fill="url(#titleGrad)" font-weight="bold">
                                Learn Ethical Co-Creation
                            </text>
                            
                            <!-- Icons and text -->
                            <g transform="translate(250, 280)">
                                <!-- Consent icon -->
                                <circle cx="0" cy="0" r="30" fill="none" stroke="#4ECDC4" stroke-width="4"/>
                                <path d="M-15 0 L-5 10 L15 -10" stroke="#4ECDC4" stroke-width="4" fill="none" stroke-linecap="round"/>
                                <text x="0" y="50" font-family="Arial" font-size="16" text-anchor="middle" fill="#333">CONSENT</text>
                            </g>
                            
                            <g transform="translate(400, 280)">
                                <!-- Credit icon -->
                                <rect x="-30" y="-30" width="60" height="60" fill="none" stroke="#FFE66D" stroke-width="4" rx="10"/>
                                <text x="0" y="5" font-family="Arial" font-size="24" text-anchor="middle" fill="#FFE66D">©</text>
                                <text x="0" y="50" font-family="Arial" font-size="16" text-anchor="middle" fill="#333">CREDIT</text>
                            </g>
                            
                            <g transform="translate(550, 280)">
                                <!-- Create icon -->
                                <polygon points="0,-30 26,15 -26,15" fill="none" stroke="#A58CFF" stroke-width="4"/>
                                <text x="0" y="50" font-family="Arial" font-size="16" text-anchor="middle" fill="#333">CREATE</text>
                            </g>
                            
                            <!-- Details -->
                            <text x="400" y="400" font-family="Arial" font-size="18" text-anchor="middle" fill="#666">
                                Tuesday, 3:30 PM
                            </text>
                            <text x="400" y="430" font-family="Arial" font-size="18" text-anchor="middle" fill="#666">
                                School Library Makerspace
                            </text>
                            <text x="400" y="460" font-family="Arial" font-size="18" text-anchor="middle" fill="#666">
                                Free for all students!
                            </text>
                            
                            <!-- Maya's hand reaching -->
                            <g transform="translate(650, 500)">
                                <ellipse cx="0" cy="0" rx="40" ry="60" fill="#D9A47A" transform="rotate(45)"/>
                                <ellipse cx="-10" cy="-20" rx="8" ry="20" fill="#D9A47A" transform="rotate(40)"/>
                                <ellipse cx="-5" cy="-25" rx="8" ry="20" fill="#D9A47A" transform="rotate(50)"/>
                                <ellipse cx="0" cy="-25" rx="8" ry="20" fill="#D9A47A" transform="rotate(55)"/>
                                <ellipse cx="5" cy="-25" rx="8" ry="20" fill="#D9A47A" transform="rotate(60)"/>
                                <ellipse cx="15" cy="-15" rx="10" ry="18" fill="#D9A47A" transform="rotate(70)"/>
                            </g>
                            
                            <!-- Thought bubble from Maya -->
                            <g transform="translate(200, 480)">
                                <ellipse cx="0" cy="0" rx="100" ry="50" fill="white" stroke="#999" stroke-width="2" stroke-dasharray="5,3" opacity="0.9"/>
                                <text x="0" y="5" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#666" font-style="italic">
                                    "Ethical... Co-what?"
                                </text>
                            </g>
                        </svg>
                    </div>

                    <!-- Panel 3: Noor shows article -->
                    <div class="panel panel-3">
                        <svg viewBox="0 0 800 600" class="panel-svg">
                            <!-- Background - closer view -->
                            <rect width="800" height="600" fill="#F5DEB3"/>
                            
                            <!-- Noor's phone -->
                            <rect x="200" y="150" width="180" height="320" fill="#1C1C1E" rx="20"/>
                            <rect x="210" y="180" width="160" height="260" fill="white"/>
                            
                            <!-- Phone screen content -->
                            <rect x="220" y="190" width="140" height="30" fill="#FF6B6B"/>
                            <text x="290" y="210" font-family="Arial" font-size="14" text-anchor="middle" fill="white" font-weight="bold">
                                BREAKING NEWS
                            </text>
                            
                            <text x="290" y="245" font-family="Arial" font-size="12" text-anchor="middle" fill="#333" font-weight="bold">
                                Artists Worried:
                            </text>
                            <text x="290" y="265" font-family="Arial" font-size="11" text-anchor="middle" fill="#333">
                                "AI Learned From Our
                            </text>
                            <text x="290" y="280" font-family="Arial" font-size="11" text-anchor="middle" fill="#333">
                                Work Without Asking"
                            </text>
                            
                            <!-- Fake article image -->
                            <rect x="230" y="300" width="120" height="80" fill="#E0E0E0"/>
                            <circle cx="290" cy="340" r="20" fill="#999"/>
                            <path d="M270 340 L280 350 L290 330 L300 345 L310 335" stroke="#666" stroke-width="2" fill="none"/>
                            
                            <text x="290" y="405" font-family="Arial" font-size="10" text-anchor="middle" fill="#666">
                                "Many artists say their unique
                            </text>
                            <text x="290" y="418" font-family="Arial" font-size="10" text-anchor="middle" fill="#666">
                                styles were used to train AI
                            </text>
                            <text x="290" y="431" font-family="Arial" font-size="10" text-anchor="middle" fill="#666">
                                without permission or pay..."
                            </text>
                            
                            <!-- Noor's hand -->
                            <g transform="translate(380, 300)">
                                <ellipse cx="0" cy="0" rx="35" ry="50" fill="#C8A882" transform="rotate(-30)"/>
                                <ellipse cx="15" cy="-15" rx="10" ry="18" fill="#C8A882" transform="rotate(-40)"/>
                            </g>
                            
                            <!-- Maya looking worried -->
                            <g transform="translate(550, 300)">
                                <!-- Face close-up -->
                                <circle cx="0" cy="0" r="80" fill="#D9A47A"/>
                                <!-- Wide, worried eyes -->
                                <ellipse cx="-25" cy="-10" rx="22" ry="28" fill="white"/>
                                <ellipse cx="25" cy="-10" rx="22" ry="28" fill="white"/>
                                <circle cx="-23" cy="-8" r="16" fill="#4B3621"/>
                                <circle cx="27" cy="-8" r="16" fill="#4B3621"/>
                                <circle cx="-23" cy="-8" r="10" fill="black"/>
                                <circle cx="27" cy="-8" r="10" fill="black"/>
                                <!-- Small pupils showing fear -->
                                <circle cx="-23" cy="-8" r="4" fill="white"/>
                                <circle cx="27" cy="-8" r="4" fill="white"/>
                                
                                <!-- Worried eyebrows -->
                                <path d="M-50 -40 Q-25 -45 0 -40" fill="none" stroke="#2B2B2B" stroke-width="3"/>
                                <path d="M0 -40 Q25 -45 50 -40" fill="none" stroke="#2B2B2B" stroke-width="3"/>
                                
                                <!-- Concerned mouth -->
                                <ellipse cx="0" cy="35" rx="15" ry="8" fill="#B8766D"/>
                            </g>
                            
                            <!-- Speech bubbles -->
                            <g transform="translate(300, 80)">
                                <ellipse cx="0" cy="0" rx="120" ry="50" fill="white" stroke="#333" stroke-width="3"/>
                                <path d="M-30 45 L-10 35 L0 50 Z" fill="white" stroke="#333" stroke-width="3"/>
                                <text x="0" y="-5" font-family="'Comic Sans MS', cursive" font-size="15" text-anchor="middle" fill="#333">
                                    "This article says AI is
                                </text>
                                <text x="0" y="15" font-family="'Comic Sans MS', cursive" font-size="15" text-anchor="middle" fill="#333">
                                    stealing from artists!"
                                </text>
                            </g>
                            
                            <g transform="translate(550, 450)">
                                <ellipse cx="0" cy="0" rx="100" ry="45" fill="white" stroke="#333" stroke-width="3"/>
                                <path d="M-20 40 L0 35 L10 45 Z" fill="white" stroke="#333" stroke-width="3"/>
                                <text x="0" y="-5" font-family="'Comic Sans MS', cursive" font-size="15" text-anchor="middle" fill="#333">
                                    "What if I lose..."
                                </text>
                                <text x="0" y="15" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#FF6B6B" font-weight="bold">
                                    "ME?"
                                </text>
                            </g>
                        </svg>
                    </div>

                    <!-- Panel 4: Maya's eyes extreme close-up -->
                    <div class="panel panel-4">
                        <svg viewBox="0 0 800 600" class="panel-svg">
                            <defs>
                                <radialGradient id="eyeGrad" cx="50%" cy="50%">
                                    <stop offset="0%" style="stop-color:#8B7355;stop-opacity:1"/>
                                    <stop offset="30%" style="stop-color:#4B3621;stop-opacity:1"/>
                                    <stop offset="60%" style="stop-color:#2F1F0F;stop-opacity:1"/>
                                    <stop offset="100%" style="stop-color:#000000;stop-opacity:1"/>
                                </radialGradient>
                                
                                <filter id="tearShine">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
                                    <feSpecularLighting result="specOut" specularExponent="20" lighting-color="white">
                                        <fePointLight x="50" y="60" z="200"/>
                                    </feSpecularLighting>
                                    <feComposite in="specOut" in2="SourceAlpha" operator="in"/>
                                </filter>
                            </defs>

                            <!-- Dark, worried background -->
                            <rect width="800" height="600" fill="#2C1810"/>
                            
                            <!-- Subtle vignette -->
                            <ellipse cx="400" cy="300" rx="400" ry="300" fill="none" stroke="black" stroke-width="100" opacity="0.5"/>
                            
                            <!-- Left eye -->
                            <g transform="translate(250, 300)">
                                <!-- Eye white -->
                                <ellipse cx="0" cy="0" rx="120" ry="150" fill="white"/>
                                
                                <!-- Iris -->
                                <circle cx="0" cy="0" r="75" fill="url(#eyeGrad)"/>
                                
                                <!-- Iris details -->
                                <circle cx="0" cy="0" r="75" fill="none" stroke="#8B7355" stroke-width="1" stroke-dasharray="2,3" opacity="0.5"/>
                                <circle cx="0" cy="0" r="60" fill="none" stroke="#6B5D4F" stroke-width="1" stroke-dasharray="3,2" opacity="0.4"/>
                                
                                <!-- Pupil dilated with fear -->
                                <circle cx="0" cy="0" r="40" fill="black"/>
                                
                                <!-- Reflection -->
                                <ellipse cx="-15" cy="-20" rx="12" ry="18" fill="white" opacity="0.8"/>
                                <ellipse cx="10" cy="-15" rx="6" ry="8" fill="white" opacity="0.6"/>
                                
                                <!-- Tear forming -->
                                <ellipse cx="0" cy="140" rx="20" ry="15" fill="#B0E0E6" opacity="0.7" filter="url(#tearShine)"/>
                                
                                <!-- Eyelashes -->
                                <path d="M-120 -150 Q-110 -160 -100 -155" fill="none" stroke="#1a1a1a" stroke-width="3"/>
                                <path d="M-80 -160 Q-70 -170 -60 -165" fill="none" stroke="#1a1a1a" stroke-width="3"/>
                                <path d="M-40 -165 Q-30 -175 -20 -170" fill="none" stroke="#1a1a1a" stroke-width="3"/>
                                <path d="M0 -170 Q10 -180 20 -175" fill="none" stroke="#1a1a1a" stroke-width="3"/>
                                <path d="M40 -165 Q50 -175 60 -170" fill="none" stroke="#1a1a1a" stroke-width="3"/>
                                <path d="M80 -160 Q90 -170 100 -165" fill="none" stroke="#1a1a1a" stroke-width="3"/>
                            </g>
                            
                            <!-- Right eye -->
                            <g transform="translate(550, 300)">
                                <!-- Eye white -->
                                <ellipse cx="0" cy="0" rx="120" ry="150" fill="white"/>
                                
                                <!-- Iris -->
                                <circle cx="0" cy="0" r="75" fill="url(#eyeGrad)"/>
                                
                                <!-- Iris details -->
                                <circle cx="0" cy="0" r="75" fill="none" stroke="#8B7355" stroke-width="1" stroke-dasharray="2,3" opacity="0.5"/>
                                <circle cx="0" cy="0" r="60" fill="none" stroke="#6B5D4F" stroke-width="1" stroke-dasharray="3,2" opacity="0.4"/>
                                
                                <!-- Pupil dilated with fear -->
                                <circle cx="0" cy="0" r="40" fill="black"/>
                                
                                <!-- Reflection -->
                                <ellipse cx="-15" cy="-20" rx="12" ry="18" fill="white" opacity="0.8"/>
                                <ellipse cx="10" cy="-15" rx="6" ry="8" fill="white" opacity="0.6"/>
                                
                                <!-- Eyelashes -->
                                <path d="M-100 -165 Q-90 -175 -80 -170" fill="none" stroke="#1a1a1a" stroke-width="3"/>
                                <path d="M-60 -170 Q-50 -180 -40 -175" fill="none" stroke="#1a1a1a" stroke-width="3"/>
                                <path d="M-20 -175 Q-10 -185 0 -180" fill="none" stroke="#1a1a1a" stroke-width="3"/>
                                <path d="M20 -175 Q30 -185 40 -180" fill="none" stroke="#1a1a1a" stroke-width="3"/>
                                <path d="M60 -170 Q70 -180 80 -175" fill="none" stroke="#1a1a1a" stroke-width="3"/>
                                <path d="M100 -165 Q110 -175 120 -170" fill="none" stroke="#1a1a1a" stroke-width="3"/>
                            </g>
                            
                            <!-- Inner monologue text -->
                            <text x="400" y="550" font-family="'Georgia', serif" font-size="20" text-anchor="middle" 
                                  fill="white" font-style="italic" opacity="0.9">
                                "I want to be seen. Not scraped."
                            </text>
                            
                            <!-- Subtle fear visualization in pupils -->
                            <g transform="translate(250, 300)">
                                <text x="0" y="5" font-family="Arial" font-size="8" text-anchor="middle" 
                                      fill="white" opacity="0.3">MINE</text>
                            </g>
                            <g transform="translate(550, 300)">
                                <text x="0" y="5" font-family="Arial" font-size="8" text-anchor="middle" 
                                      fill="white" opacity="0.3">MINE</text>
                            </g>
                        </svg>
                    </div>
                </div>

                <!-- Page narration -->
                <div class="audio-narrator" data-text="Page 2: In art class, Mr. López announces the AI Art Lab with enthusiasm. But when Noor shows Maya an article about AI 'stealing' art, fear grips Maya's heart. Her eyes widen with the weight of a question: What if she loses what makes her art uniquely hers?"></div>
            </div>
        `;
    }

    generatePage3() {
        return `
            <div class="enhanced-comic-page page-3">
                <div class="panel-layout four-panel-emotional">
                    <!-- Panel 1: Kitchen scene with warm lighting -->
                    <div class="panel panel-1">
                        <svg viewBox="0 0 800 600" class="panel-svg">
                            <defs>
                                <radialGradient id="kitchenWarmth" cx="30%" cy="20%">
                                    <stop offset="0%" style="stop-color:#FFE4B5;stop-opacity:1"/>
                                    <stop offset="50%" style="stop-color:#FFDEAD;stop-opacity:0.7"/>
                                    <stop offset="100%" style="stop-color:#F5DEB3;stop-opacity:0.4"/>
                                </radialGradient>
                                
                                <pattern id="tiles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                                    <rect width="50" height="50" fill="#F0F8FF"/>
                                    <rect width="48" height="48" fill="#E6F3FF" x="1" y="1"/>
                                </pattern>
                            </defs>

                            <!-- Kitchen background -->
                            <rect width="800" height="600" fill="url(#kitchenWarmth)"/>
                            
                            <!-- Kitchen window showing evening -->
                            <rect x="50" y="80" width="200" height="250" fill="#4B0082" opacity="0.3"/>
                            <rect x="50" y="80" width="200" height="250" fill="none" stroke="#8B7355" stroke-width="8"/>
                            <line x1="150" y1="80" x2="150" y2="330" stroke="#8B7355" stroke-width="4"/>
                            <line x1="50" y1="205" x2="250" y2="205" stroke="#8B7355" stroke-width="4"/>
                            
                            <!-- Stars visible through window -->
                            <circle cx="100" cy="120" r="2" fill="white" opacity="0.8"/>
                            <circle cx="180" cy="150" r="1.5" fill="white" opacity="0.7"/>
                            <circle cx="220" cy="110" r="1" fill="white" opacity="0.6"/>
                            
                            <!-- Kitchen counter -->
                            <rect x="0" y="400" width="800" height="200" fill="#8B7355"/>
                            <rect x="0" y="400" width="800" height="10" fill="#654321"/>
                            
                            <!-- Stove with pot -->
                            <rect x="300" y="350" width="200" height="150" fill="#2F4F4F"/>
                            <circle cx="350" cy="425" r="30" fill="#1C1C1C"/>
                            <circle cx="450" cy="425" r="30" fill="#1C1C1C"/>
                            <ellipse cx="350" cy="425" rx="25" ry="5" fill="#FF4500" opacity="0.8">
                                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite"/>
                            </ellipse>
                            
                            <!-- Pot on stove -->
                            <ellipse cx="350" cy="400" rx="40" ry="15" fill="#696969"/>
                            <rect x="310" y="385" width="80" height="40" fill="#696969"/>
                            <ellipse cx="350" cy="385" rx="40" ry="15" fill="#808080"/>
                            
                            <!-- Steam -->
                            <path d="M330 380 Q325 360 330 340" fill="none" stroke="white" stroke-width="2" opacity="0.4">
                                <animate attributeName="d" values="M330 380 Q325 360 330 340;M335 380 Q330 360 335 340;M330 380 Q325 360 330 340" dur="3s" repeatCount="indefinite"/>
                            </path>
                            <path d="M350 380 Q355 360 350 340" fill="none" stroke="white" stroke-width="2" opacity="0.4">
                                <animate attributeName="d" values="M350 380 Q355 360 350 340;M345 380 Q350 360 345 340;M350 380 Q355 360 350 340" dur="2.5s" repeatCount="indefinite"/>
                            </path>
                            <path d="M370 380 Q365 360 370 340" fill="none" stroke="white" stroke-width="2" opacity="0.4">
                                <animate attributeName="d" values="M370 380 Q365 360 370 340;M375 380 Q370 360 375 340;M370 380 Q365 360 370 340" dur="3.2s" repeatCount="indefinite"/>
                            </path>
                            
                            <!-- Dad cooking -->
                            <g id="dad" transform="translate(400, 280)">
                                <rect x="-50" y="0" width="100" height="150" fill="#4682B4"/>
                                <circle cx="0" cy="-50" r="40" fill="#8B7355"/>
                                <!-- Kind eyes -->
                                <ellipse cx="-15" cy="-55" rx="8" ry="10" fill="white"/>
                                <ellipse cx="15" cy="-55" rx="8" ry="10" fill="white"/>
                                <circle cx="-15" cy="-55" r="6" fill="#4B3621"/>
                                <circle cx="15" cy="-55" r="6" fill="#4B3621"/>
                                <circle cx="-13" cy="-57" r="2" fill="white"/>
                                <circle cx="17" cy="-57" r="2" fill="white"/>
                                <!-- Warm smile -->
                                <path d="M-20 -35 Q0 -25 20 -35" fill="none" stroke="#654321" stroke-width="2" stroke-linecap="round"/>
                                <!-- Short beard -->
                                <ellipse cx="0" cy="-20" rx="35" ry="20" fill="#5C4033" opacity="0.5"/>
                                
                                <!-- Apron -->
                                <rect x="-40" y="20" width="80" height="100" fill="#FFF8DC" opacity="0.9"/>
                                <text x="0" y="70" font-family="'Comic Sans MS'" font-size="14" text-anchor="middle" fill="#8B4513">
                                    Chef Dad
                                </text>
                                
                                <!-- Wooden spoon -->
                                <rect x="45" y="30" width="8" height="60" fill="#8B4513" transform="rotate(-30 49 60)"/>
                                <ellipse cx="42" cy="20" rx="15" ry="10" fill="#A0522D" transform="rotate(-30 42 20)"/>
                            </g>
                            
                            <!-- Maya slumped at table -->
                            <g id="maya-sad" transform="translate(600, 350)">
                                <!-- Table -->
                                <rect x="-100" y="50" width="200" height="10" fill="#654321"/>
                                <rect x="-80" y="60" width="20" height="100" fill="#4A3C28"/>
                                <rect x="60" y="60" width="20" height="100" fill="#4A3C28"/>
                                
                                <!-- Maya's body slumped -->
                                <ellipse cx="0" cy="20" rx="50" ry="70" fill="#2E86AB" transform="rotate(15)"/>
                                <!-- Arms on table -->
                                <ellipse cx="-30" cy="45" rx="60" ry="20" fill="#D9A47A" transform="rotate(-10)"/>
                                <ellipse cx="30" cy="45" rx="60" ry="20" fill="#D9A47A" transform="rotate(10)"/>
                                
                                <!-- Head resting on arms -->
                                <circle cx="0" cy="20" r="35" fill="#D9A47A"/>
                                <!-- Hair falling down -->
                                <path d="M-35 5 Q-40 30 -35 50" fill="none" stroke="#2B2B2B" stroke-width="8"/>
                                <path d="M-25 0 Q-28 25 -25 45" fill="none" stroke="#2B2B2B" stroke-width="8"/>
                                <path d="M-15 -5 Q-17 20 -15 40" fill="none" stroke="#2B2B2B" stroke-width="8"/>
                                <path d="M15 -5 Q17 20 15 40" fill="none" stroke="#2B2B2B" stroke-width="8"/>
                                <path d="M25 0 Q28 25 25 45" fill="none" stroke="#2B2B2B" stroke-width="8"/>
                                <path d="M35 5 Q40 30 35 50" fill="none" stroke="#2B2B2B" stroke-width="8"/>
                                
                                <!-- One visible eye, looking down -->
                                <ellipse cx="15" cy="18" rx="10" ry="6" fill="white"/>
                                <ellipse cx="15" cy="20" rx="8" ry="4" fill="#4B3621"/>
                                <circle cx="15" cy="20" r="3" fill="black"/>
                            </g>
                            
                            <!-- Speech bubble from Maya -->
                            <g transform="translate(600, 250)">
                                <ellipse cx="0" cy="0" rx="120" ry="50" fill="white" stroke="#333" stroke-width="3"/>
                                <path d="M-30 45 L-10 40 L0 50 Z" fill="white" stroke="#333" stroke-width="3"/>
                                <text x="0" y="-5" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#333">
                                    "Dad... I think AI is"
                                </text>
                                <text x="0" y="15" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#FF6B6B">
                                    "stealing art."
                                </text>
                            </g>
                        </svg>
                    </div>

                    <!-- Panel 2: Dad's hand with cocoa -->
                    <div class="panel panel-2">
                        <svg viewBox="0 0 800 600" class="panel-svg">
                            <defs>
                                <radialGradient id="cocoaSteam" cx="50%" cy="30%">
                                    <stop offset="0%" style="stop-color:#FFFFFF;stop-opacity:0.8"/>
                                    <stop offset="100%" style="stop-color:#F5F5F5;stop-opacity:0"/>
                                </radialGradient>
                            </defs>

                            <!-- Warm background -->
                            <rect width="800" height="600" fill="#FFF8DC"/>
                            
                            <!-- Dad's hand - detailed -->
                            <g transform="translate(400, 350)">
                                <!-- Arm -->
                                <rect x="-40" y="100" width="80" height="150" fill="#4682B4"/>
                                
                                <!-- Hand -->
                                <ellipse cx="0" cy="0" rx="60" ry="90" fill="#8B7355"/>
                                <!-- Fingers -->
                                <ellipse cx="-30" cy="-50" rx="12" ry="35" fill="#8B7355" transform="rotate(-20 -30 -50)"/>
                                <ellipse cx="-10" cy="-60" rx="12" ry="40" fill="#8B7355" transform="rotate(-10 -10 -60)"/>
                                <ellipse cx="10" cy="-60" rx="12" ry="40" fill="#8B7355" transform="rotate(5 10 -60)"/>
                                <ellipse cx="30" cy="-50" rx="12" ry="35" fill="#8B7355" transform="rotate(20 30 -50)"/>
                                <!-- Thumb -->
                                <ellipse cx="40" cy="-10" rx="15" ry="30" fill="#8B7355" transform="rotate(50 40 -10)"/>
                                
                                <!-- Life lines on palm -->
                                <path d="M-20 -20 Q0 -10 20 -20" fill="none" stroke="#7A6651" stroke-width="1" opacity="0.5"/>
                                <path d="M-30 0 Q0 10 30 0" fill="none" stroke="#7A6651" stroke-width="1" opacity="0.5"/>
                                <path d="M-25 20 Q0 25 25 20" fill="none" stroke="#7A6651" stroke-width="1" opacity="0.5"/>
                            </g>
                            
                            <!-- Mug of hot cocoa -->
                            <g transform="translate(400, 250)">
                                <!-- Mug shadow -->
                                <ellipse cx="0" cy="90" rx="70" ry="20" fill="black" opacity="0.2"/>
                                
                                <!-- Mug body -->
                                <rect x="-60" y="-30" width="120" height="100" fill="#8B4513" rx="10"/>
                                <!-- Mug rim -->
                                <ellipse cx="0" cy="-30" rx="60" ry="15" fill="#6B3410"/>
                                <ellipse cx="0" cy="-35" rx="55" ry="12" fill="#4A2310"/>
                                
                                <!-- Handle -->
                                <ellipse cx="75" cy="20" rx="20" ry="35" fill="none" stroke="#8B4513" stroke-width="12" stroke-linecap="round"/>
                                
                                <!-- Cocoa surface -->
                                <ellipse cx="0" cy="-28" rx="50" ry="10" fill="#3D2314"/>
                                
                                <!-- Marshmallows -->
                                <rect x="-20" y="-35" width="15" height="15" fill="white" rx="3" transform="rotate(15 -12.5 -27.5)"/>
                                <rect x="5" y="-38" width="15" height="15" fill="white" rx="3" transform="rotate(-20 12.5 -30.5)"/>
                                <rect x="-8" y="-40" width="12" height="12" fill="white" rx="2" transform="rotate(30 -2 -34)"/>
                                
                                <!-- Steam -->
                                <ellipse cx="0" cy="-80" rx="40" ry="60" fill="url(#cocoaSteam)">
                                    <animateTransform attributeName="transform" type="translate" values="0,0; 5,-10; -5,-20; 0,-30" dur="4s" repeatCount="indefinite"/>
                                </ellipse>
                                <path d="M-20 -40 Q-25 -60 -20 -80 Q-15 -100 -20 -120" fill="none" stroke="white" stroke-width="3" opacity="0.4">
                                    <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite"/>
                                </path>
                                <path d="M0 -40 Q5 -60 0 -80 Q-5 -100 0 -120" fill="none" stroke="white" stroke-width="3" opacity="0.3">
                                    <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3.5s" repeatCount="indefinite"/>
                                </path>
                                <path d="M20 -40 Q25 -60 20 -80 Q15 -100 20 -120" fill="none" stroke="white" stroke-width="3" opacity="0.4">
                                    <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2.8s" repeatCount="indefinite"/>
                                </path>
                                
                                <!-- Text on mug -->
                                <text x="0" y="30" font-family="'Brush Script MT', cursive" font-size="18" text-anchor="middle" fill="#FFF8DC">
                                    Love & Cocoa
                                </text>
                            </g>
                            
                            <!-- Speech bubble -->
                            <g transform="translate(400, 450)">
                                <rect x="-150" y="-40" width="300" height="80" fill="white" stroke="#333" stroke-width="3" rx="20"/>
                                <path d="M-50 40 L-30 35 L-20 50 Z" fill="white" stroke="#333" stroke-width="3"/>
                                <text x="0" y="-10" font-family="'Comic Sans MS', cursive" font-size="18" text-anchor="middle" fill="#4682B4">
                                    "Let's learn about it"
                                </text>
                                <text x="0" y="15" font-family="'Comic Sans MS', cursive" font-size="18" text-anchor="middle" fill="#4682B4">
                                    "before we fear it."
                                </text>
                            </g>
                        </svg>
                    </div>

                    <!-- Panel 3: Spiral bracelet focus - metaphorical -->
                    <div class="panel panel-3">
                        <svg viewBox="0 0 800 600" class="panel-svg">
                            <defs>
                                <radialGradient id="spiralGlow" cx="50%" cy="50%">
                                    <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1"/>
                                    <stop offset="30%" style="stop-color:#FFC857;stop-opacity:0.8"/>
                                    <stop offset="60%" style="stop-color:#FFB347;stop-opacity:0.5"/>
                                    <stop offset="100%" style="stop-color:#FF8C00;stop-opacity:0.1"/>
                                </radialGradient>
                                
                                <filter id="goldenGlow">
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>

                            <!-- Dreamy background -->
                            <rect width="800" height="600" fill="#2C1810"/>
                            <ellipse cx="400" cy="300" rx="350" ry="250" fill="url(#spiralGlow)" opacity="0.3"/>
                            
                            <!-- Maya's wrist and bracelet - large and detailed -->
                            <g transform="translate(400, 300)">
                                <!-- Wrist -->
                                <ellipse cx="0" cy="50" rx="80" ry="120" fill="#D9A47A"/>
                                
                                <!-- Bracelet - intricate spiral design -->
                                <circle cx="0" cy="0" r="100" fill="none" stroke="#FFC857" stroke-width="12" filter="url(#goldenGlow)"/>
                                
                                <!-- Spiral pattern -->
                                <path d="M0 -100 Q100 0 0 100 Q-100 0 0 -100" fill="none" stroke="#FFD700" stroke-width="8" filter="url(#goldenGlow)">
                                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="30s" repeatCount="indefinite"/>
                                </path>
                                
                                <!-- Inner spirals -->
                                <path d="M0 -50 Q50 0 0 50 Q-50 0 0 -50" fill="none" stroke="#FFED8E" stroke-width="4" opacity="0.8">
                                    <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="20s" repeatCount="indefinite"/>
                                </path>
                                
                                <!-- Center gem -->
                                <circle cx="0" cy="0" r="15" fill="#FFD700" filter="url(#goldenGlow)"/>
                                <circle cx="0" cy="0" r="10" fill="#FFF8DC"/>
                                
                                <!-- Radiating light -->
                                <g opacity="0.6">
                                    <line x1="0" y1="-15" x2="0" y2="-130" stroke="#FFD700" stroke-width="2">
                                        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite"/>
                                    </line>
                                    <line x1="15" y1="0" x2="130" y2="0" stroke="#FFD700" stroke-width="2">
                                        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.2s" repeatCount="indefinite"/>
                                    </line>
                                    <line x1="0" y1="15" x2="0" y2="130" stroke="#FFD700" stroke-width="2">
                                        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.4s" repeatCount="indefinite"/>
                                    </line>
                                    <line x1="-15" y1="0" x2="-130" y2="0" stroke="#FFD700" stroke-width="2">
                                        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.6s" repeatCount="indefinite"/>
                                    </line>
                                </g>
                            </g>
                            
                            <!-- Dad's finger pointing to bracelet -->
                            <g transform="translate(550, 250)">
                                <ellipse cx="0" cy="0" rx="25" ry="80" fill="#8B7355" transform="rotate(-30)"/>
                                <ellipse cx="-5" cy="-75" rx="20" ry="30" fill="#8B7355" transform="rotate(-30)"/>
                                <!-- Fingernail -->
                                <ellipse cx="-8" cy="-90" rx="15" ry="10" fill="#C8B088" transform="rotate(-30)"/>
                            </g>
                            
                            <!-- Dialogue -->
                            <g transform="translate(400, 480)">
                                <rect x="-180" y="-35" width="360" height="70" fill="white" stroke="#333" stroke-width="3" rx="15" opacity="0.95"/>
                                <text x="0" y="-5" font-family="'Comic Sans MS', cursive" font-size="18" text-anchor="middle" fill="#4682B4">
                                    "Your spiral is YOURS, Maya."
                                </text>
                                <text x="0" y="20" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#666">
                                    "Tools don't erase the hand that guides them."
                                </text>
                            </g>
                            
                            <!-- Metaphorical representations around the spiral -->
                            <!-- Paint brushes -->
                            <g transform="translate(200, 200)" opacity="0.5">
                                <rect x="-5" y="0" width="10" height="60" fill="#8B4513"/>
                                <ellipse cx="0" cy="-10" rx="8" ry="15" fill="#FF6B6B"/>
                            </g>
                            
                            <!-- Digital pixels -->
                            <g transform="translate(600, 200)" opacity="0.5">
                                <rect x="0" y="0" width="15" height="15" fill="#7DF9FF"/>
                                <rect x="20" y="0" width="15" height="15" fill="#A58CFF"/>
                                <rect x="0" y="20" width="15" height="15" fill="#FFE66D"/>
                                <rect x="20" y="20" width="15" height="15" fill="#4ECDC4"/>
                            </g>
                            
                            <!-- Stars representing dreams -->
                            <g transform="translate(200, 400)" opacity="0.7">
                                <polygon points="0,-20 6,-6 20,-5 8,5 12,20 0,10 -12,20 -8,5 -20,-5 -6,-6" fill="#FFD700"/>
                            </g>
                            <g transform="translate(600, 400)" opacity="0.7">
                                <polygon points="0,-15 4,-4 15,-3 6,3 9,15 0,7 -9,15 -6,3 -15,-3 -4,-4" fill="#FFD700"/>
                            </g>
                        </svg>
                    </div>

                    <!-- Panel 4: Window to night city - hope emerging -->
                    <div class="panel panel-4">
                        <svg viewBox="0 0 800 600" class="panel-svg">
                            <defs>
                                <linearGradient id="nightSky" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style="stop-color:#0C1445;stop-opacity:1"/>
                                    <stop offset="50%" style="stop-color:#1E2A44;stop-opacity:1"/>
                                    <stop offset="100%" style="stop-color:#2C3E50;stop-opacity:1"/>
                                </linearGradient>
                                
                                <filter id="windowReflection">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
                                    <feComponentTransfer>
                                        <feFuncA type="linear" slope="0.5"/>
                                    </feComponentTransfer>
                                </filter>
                            </defs>

                            <!-- Room interior dark -->
                            <rect width="800" height="600" fill="#2C1810"/>
                            
                            <!-- Window frame -->
                            <rect x="150" y="50" width="500" height="400" fill="url(#nightSky)"/>
                            <rect x="150" y="50" width="500" height="400" fill="none" stroke="#8B7355" stroke-width="12"/>
                            <line x1="400" y1="50" x2="400" y2="450" stroke="#8B7355" stroke-width="8"/>
                            <line x1="150" y1="250" x2="650" y2="250" stroke="#8B7355" stroke-width="8"/>
                            
                            <!-- City skyline -->
                            <g id="cityscape">
                                <!-- Buildings -->
                                <rect x="180" y="300" width="80" height="150" fill="#1a1a2e"/>
                                <rect x="280" y="250" width="100" height="200" fill="#16213e"/>
                                <rect x="400" y="280" width="90" height="170" fill="#1a1a2e"/>
                                <rect x="510" y="220" width="80" height="230" fill="#0f172a"/>
                                <rect x="590" y="270" width="70" height="180" fill="#16213e"/>
                                
                                <!-- Windows lit up -->
                                <g id="windows">
                                    <!-- Building 1 windows -->
                                    <rect x="190" y="310" width="15" height="20" fill="#FFDF91" opacity="0.8"/>
                                    <rect x="210" y="310" width="15" height="20" fill="#FFDF91" opacity="0.6"/>
                                    <rect x="230" y="310" width="15" height="20" fill="#FFDF91" opacity="0.9"/>
                                    <rect x="190" y="340" width="15" height="20" fill="#FFDF91" opacity="0.7"/>
                                    <rect x="230" y="340" width="15" height="20" fill="#FFDF91" opacity="0.8"/>
                                    <rect x="190" y="370" width="15" height="20" fill="#FFDF91" opacity="0.9"/>
                                    <rect x="210" y="370" width="15" height="20" fill="#FFDF91" opacity="0.7"/>
                                    
                                    <!-- Building 2 windows -->
                                    <rect x="295" y="270" width="20" height="25" fill="#FFDF91" opacity="0.8"/>
                                    <rect x="325" y="270" width="20" height="25" fill="#FFDF91" opacity="0.7"/>
                                    <rect x="355" y="270" width="20" height="25" fill="#FFDF91" opacity="0.9"/>
                                    <rect x="295" y="305" width="20" height="25" fill="#FFDF91" opacity="0.6"/>
                                    <rect x="325" y="305" width="20" height="25" fill="#FFDF91" opacity="0.8"/>
                                    <rect x="355" y="305" width="20" height="25" fill="#FFDF91" opacity="0.7"/>
                                    <rect x="295" y="340" width="20" height="25" fill="#FFDF91" opacity="0.9"/>
                                    <rect x="355" y="340" width="20" height="25" fill="#FFDF91" opacity="0.8"/>
                                    
                                    <!-- Animated window -->
                                    <rect x="325" y="340" width="20" height="25" fill="#FFDF91">
                                        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="4s" repeatCount="indefinite"/>
                                    </rect>
                                </g>
                            </g>
                            
                            <!-- Stars -->
                            <g id="stars">
                                <circle cx="200" cy="100" r="2" fill="white" opacity="0.9">
                                    <animate attributeName="opacity" values="0.9;0.3;0.9" dur="3s" repeatCount="indefinite"/>
                                </circle>
                                <circle cx="300" cy="120" r="1.5" fill="white" opacity="0.8">
                                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3.5s" repeatCount="indefinite"/>
                                </circle>
                                <circle cx="450" cy="90" r="1" fill="white" opacity="0.7">
                                    <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.8s" repeatCount="indefinite"/>
                                </circle>
                                <circle cx="550" cy="110" r="1.8" fill="white" opacity="0.8">
                                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3.2s" repeatCount="indefinite"/>
                                </circle>
                                <circle cx="600" cy="140" r="1.2" fill="white" opacity="0.6">
                                    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite"/>
                                </circle>
                            </g>
                            
                            <!-- Tablet glowing on windowsill -->
                            <g transform="translate(400, 420)">
                                <rect x="-60" y="-40" width="120" height="80" fill="#1C1C1E" rx="8"/>
                                <rect x="-55" y="-35" width="110" height="65" fill="#7DF9FF" opacity="0.3"/>
                                <rect x="-55" y="-35" width="110" height="65" fill="url(#nightSky)" opacity="0.5" filter="url(#windowReflection)"/>
                                
                                <!-- Glow effect -->
                                <ellipse cx="0" cy="0" rx="80" ry="60" fill="#7DF9FF" opacity="0.2" filter="url(#goldenGlow)"/>
                            </g>
                            
                            <!-- Maya's reflection in window -->
                            <g transform="translate(400, 350)" opacity="0.3">
                                <circle cx="0" cy="0" r="40" fill="#D9A47A"/>
                                <ellipse cx="-12" cy="-5" rx="8" ry="10" fill="white"/>
                                <ellipse cx="12" cy="-5" rx="8" ry="10" fill="white"/>
                                <circle cx="-12" cy="-5" r="6" fill="#4B3621"/>
                                <circle cx="12" cy="-5" r="6" fill="#4B3621"/>
                                <!-- Hopeful expression -->
                                <path d="M-15 15 Q0 20 15 15" fill="none" stroke="#654321" stroke-width="2"/>
                            </g>
                            
                            <!-- Dad's dialogue -->
                            <g transform="translate(400, 520)">
                                <rect x="-150" y="-30" width="300" height="60" fill="white" stroke="#333" stroke-width="3" rx="15" opacity="0.95"/>
                                <text x="0" y="-5" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#4682B4">
                                    "Start with the library lab."
                                </text>
                                <text x="0" y="18" font-family="'Comic Sans MS', cursive" font-size="14" text-anchor="middle" fill="#666">
                                    "Let's see what it's really about."
                                </text>
                            </g>
                            
                            <!-- Maya's thought -->
                            <g transform="translate(250, 150)">
                                <ellipse cx="0" cy="0" rx="130" ry="60" fill="white" stroke="#999" stroke-width="2" stroke-dasharray="5,3" opacity="0.85"/>
                                <text x="0" y="-10" font-family="'Georgia', serif" font-size="15" text-anchor="middle" fill="#666" font-style="italic">
                                    "If the sky is too big..."
                                </text>
                                <text x="0" y="10" font-family="'Georgia', serif" font-size="15" text-anchor="middle" fill="#4169E1" font-style="italic">
                                    "maybe I need a telescope."
                                </text>
                            </g>
                        </svg>
                    </div>
                </div>

                <!-- Page narration -->
                <div class="audio-narrator" data-text="Page 3: At home, Dad's warmth cuts through Maya's fear like cocoa through cold. He points to her spiral bracelet - her signature, her soul. 'Tools don't erase the hand that guides them,' he says. Through the window, the city lights twinkle like possibilities. Maybe learning isn't surrendering. Maybe it's growing stronger."></div>
            </div>
        `;
    }

    // Continue with remaining pages...
    // Pages 4-15 would follow the same pattern of rich, detailed SVG artwork
    // with deep storytelling, character development, and visual metaphors
    // Each page would be similarly enhanced with:
    // - Complex backgrounds with texture and depth
    // - Detailed character expressions and body language
    // - Environmental storytelling through props and settings
    // - Metaphorical visual elements
    // - Dynamic animation and effects
    // - Rich dialogue that develops character and theme
    // - Narrative captions that add emotional depth

    generatePage4() {
        return this.generateRemainingPage(4, "Library Makerspace", "Discovery and Wonder");
    }

    generatePage5() {
        return this.generateRemainingPage(5, "Meeting Pixel", "First Contact with Magic");
    }

    generatePage6() {
        return this.generateRemainingPage(6, "First Creation", "The Dance Begins");
    }

    generatePage7() {
        return this.generateRemainingPage(7, "Refinement", "Finding Her Voice");
    }

    generatePage8() {
        return this.generateRemainingPage(8, "Exploration Montage", "Worlds Unfold");
    }

    generatePage9() {
        return this.generateRemainingPage(9, "Understanding Value", "Worth and Ownership");
    }

    generatePage10() {
        return this.generateRemainingPage(10, "The Market", "Sharing Her Gift");
    }

    generatePage11() {
        return this.generateRemainingPage(11, "The Challenge", "Confronting Doubt");
    }

    generatePage12() {
        return this.generateRemainingPage(12, "Proving Herself", "Authenticity Shines");
    }

    generatePage13() {
        return this.generateRemainingPage(13, "Teaching Others", "Spreading Light");
    }

    generatePage14() {
        return this.generateRemainingPage(14, "Quiet Victory", "Coming Full Circle");
    }

    generatePage15() {
        return this.generateRemainingPage(15, "Transformation Complete", "A New Beginning");
    }

    generateRemainingPage(pageNum, title, theme) {
        // Placeholder for remaining pages
        // Each would be as detailed as pages 1-3
        return `
            <div class="enhanced-comic-page page-${pageNum}">
                <div class="page-content">
                    <h2>${title}</h2>
                    <p>Theme: ${theme}</p>
                    <p>Full enhanced content would be here with the same level of detail as pages 1-3</p>
                </div>
            </div>
        `;
    }
}

// Initialize the enhanced novel
const enhancedNovel = new EnhancedBrushByte();

// Export for use in main app
if (typeof window !== 'undefined') {
    window.EnhancedBrushByte = EnhancedBrushByte;
    window.enhancedNovel = enhancedNovel;
}