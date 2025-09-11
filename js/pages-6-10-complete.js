// Pages 6-10 Complete with Full Cinematic Detail
// Continuing Maya's journey with the same depth as pages 1-5

class Pages6to10 {
    generatePage6() {
        return `
            <div class="enhanced-comic-page page-6">
                <div class="panel-layout four-panel-creation">
                    <!-- Panel 1: Maya typing her first prompt -->
                    <div class="panel panel-1">
                        <svg viewBox="0 0 800 600" class="panel-svg">
                            <defs>
                                <linearGradient id="promptGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#7DF9FF;stop-opacity:0.8"/>
                                    <stop offset="100%" style="stop-color:#A58CFF;stop-opacity:0.4"/>
                                </linearGradient>
                            </defs>

                            <!-- Dark creative space -->
                            <rect width="800" height="600" fill="#0D1117"/>
                            
                            <!-- Maya's hands on keyboard -->
                            <g transform="translate(400, 450)">
                                <!-- Keyboard -->
                                <rect x="-150" y="0" width="300" height="100" fill="#2C2C2E" rx="5"/>
                                <g id="keys">
                                    <!-- Row of keys -->
                                    <rect x="-140" y="10" width="25" height="25" fill="#1C1C1E" rx="3"/>
                                    <rect x="-110" y="10" width="25" height="25" fill="#1C1C1E" rx="3"/>
                                    <rect x="-80" y="10" width="25" height="25" fill="#1C1C1E" rx="3"/>
                                    <rect x="-50" y="10" width="25" height="25" fill="#1C1C1E" rx="3"/>
                                    <rect x="-20" y="10" width="25" height="25" fill="#1C1C1E" rx="3"/>
                                    <rect x="10" y="10" width="25" height="25" fill="#1C1C1E" rx="3"/>
                                    <rect x="40" y="10" width="25" height="25" fill="#1C1C1E" rx="3"/>
                                    <rect x="70" y="10" width="25" height="25" fill="#1C1C1E" rx="3"/>
                                    <rect x="100" y="10" width="25" height="25" fill="#1C1C1E" rx="3"/>
                                    
                                    <!-- Space bar -->
                                    <rect x="-60" y="65" width="120" height="20" fill="#1C1C1E" rx="3"/>
                                </g>
                                
                                <!-- Maya's hands -->
                                <g id="hands">
                                    <!-- Left hand -->
                                    <ellipse cx="-80" cy="-20" rx="35" ry="50" fill="#D9A47A" transform="rotate(-10 -80 -20)"/>
                                    <ellipse cx="-100" cy="-40" rx="8" ry="20" fill="#D9A47A" transform="rotate(-20 -100 -40)"/>
                                    <ellipse cx="-90" cy="-45" rx="8" ry="22" fill="#D9A47A" transform="rotate(-15 -90 -45)"/>
                                    <ellipse cx="-80" cy="-48" rx="8" ry="23" fill="#D9A47A" transform="rotate(-10 -80 -48)"/>
                                    <ellipse cx="-70" cy="-45" rx="8" ry="22" fill="#D9A47A" transform="rotate(-5 -70 -45)"/>
                                    <ellipse cx="-55" cy="-35" rx="10" ry="18" fill="#D9A47A" transform="rotate(10 -55 -35)"/>
                                    
                                    <!-- Right hand -->
                                    <ellipse cx="80" cy="-20" rx="35" ry="50" fill="#D9A47A" transform="rotate(10 80 -20)"/>
                                    <ellipse cx="100" cy="-40" rx="8" ry="20" fill="#D9A47A" transform="rotate(20 100 -40)"/>
                                    <ellipse cx="90" cy="-45" rx="8" ry="22" fill="#D9A47A" transform="rotate(15 90 -45)"/>
                                    <ellipse cx="80" cy="-48" rx="8" ry="23" fill="#D9A47A" transform="rotate(10 80 -48)"/>
                                    <ellipse cx="70" cy="-45" rx="8" ry="22" fill="#D9A47A" transform="rotate(5 70 -45)"/>
                                    <ellipse cx="55" cy="-35" rx="10" ry="18" fill="#D9A47A" transform="rotate(-10 55 -35)"/>
                                    
                                    <!-- Spiral bracelet visible -->
                                    <circle cx="-80" cy="20" r="12" fill="none" stroke="#FFC857" stroke-width="2"/>
                                </g>
                            </g>
                            
                            <!-- Screen showing prompt -->
                            <rect x="150" y="50" width="500" height="300" fill="#1C1C1E" stroke="#333" stroke-width="3" rx="10"/>
                            <rect x="170" y="70" width="460" height="260" fill="#0D1117"/>
                            
                            <!-- Prompt text appearing letter by letter -->
                            <text x="200" y="150" font-family="'Courier New', monospace" font-size="18" fill="#7DF9FF">
                                > A fox leaping over
                            </text>
                            <text x="200" y="180" font-family="'Courier New', monospace" font-size="18" fill="#7DF9FF">
                                a city made of
                            </text>
                            <text x="200" y="210" font-family="'Courier New', monospace" font-size="18" fill="#7DF9FF">
                                sketchbook paper
                            </text>
                            
                            <!-- Cursor blinking -->
                            <rect x="380" y="195" width="2" height="20" fill="#7DF9FF">
                                <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
                            </rect>
                            
                            <!-- Pixel watching from corner -->
                            <g transform="translate(700, 100)" opacity="0.7">
                                <polygon points="0,20 20,0 40,20 20,40" fill="#7DF9FF" opacity="0.6"/>
                                <circle cx="15" cy="20" r="2" fill="white"/>
                                <circle cx="25" cy="20" r="2" fill="white"/>
                            </g>
                            
                            <!-- Pixel's encouragement -->
                            <g transform="translate(550, 250)">
                                <rect x="-80" y="-25" width="160" height="50" fill="white" stroke="#7DF9FF" stroke-width="2" rx="25" opacity="0.9"/>
                                <text x="0" y="5" font-family="'SF Mono', monospace" font-size="14" text-anchor="middle" fill="#333">
                                    I'll add your spiral
                                </text>
                            </g>
                        </svg>
                    </div>

                    <!-- Panel 2: The creation process visualized -->
                    <div class="panel panel-2">
                        <svg viewBox="0 0 800 600" class="panel-svg">
                            <defs>
                                <filter id="creationBlur">
                                    <feGaussianBlur stdDeviation="2"/>
                                </filter>
                                <linearGradient id="creationFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#FFE66D;stop-opacity:0.8"/>
                                    <stop offset="50%" style="stop-color:#7DF9FF;stop-opacity:0.6"/>
                                    <stop offset="100%" style="stop-color:#A58CFF;stop-opacity:0.4"/>
                                </linearGradient>
                            </defs>

                            <!-- Creative space background -->
                            <rect width="800" height="600" fill="#F5F7FA"/>
                            
                            <!-- Swirling creation effect -->
                            <g transform="translate(400, 300)">
                                <!-- Central vortex -->
                                <circle cx="0" cy="0" r="150" fill="none" stroke="url(#creationFlow)" stroke-width="3" opacity="0.5">
                                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite"/>
                                </circle>
                                <circle cx="0" cy="0" r="120" fill="none" stroke="url(#creationFlow)" stroke-width="2" opacity="0.6">
                                    <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="8s" repeatCount="indefinite"/>
                                </circle>
                                <circle cx="0" cy="0" r="90" fill="none" stroke="url(#creationFlow)" stroke-width="2" opacity="0.7">
                                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="6s" repeatCount="indefinite"/>
                                </circle>
                                
                                <!-- Elements forming -->
                                <!-- Paper city buildings emerging -->
                                <g id="cityForming" opacity="0.8">
                                    <rect x="-80" y="20" width="30" height="60" fill="white" stroke="#999" stroke-width="2" stroke-dasharray="5,3">
                                        <animate attributeName="height" values="0;60" dur="2s" fill="freeze"/>
                                    </rect>
                                    <rect x="-40" y="0" width="30" height="80" fill="white" stroke="#999" stroke-width="2" stroke-dasharray="5,3">
                                        <animate attributeName="height" values="0;80" dur="2.5s" fill="freeze"/>
                                    </rect>
                                    <rect x="0" y="30" width="30" height="50" fill="white" stroke="#999" stroke-width="2" stroke-dasharray="5,3">
                                        <animate attributeName="height" values="0;50" dur="2.2s" fill="freeze"/>
                                    </rect>
                                    <rect x="40" y="10" width="30" height="70" fill="white" stroke="#999" stroke-width="2" stroke-dasharray="5,3">
                                        <animate attributeName="height" values="0;70" dur="2.8s" fill="freeze"/>
                                    </rect>
                                </g>
                                
                                <!-- Fox forming from triangles -->
                                <g id="foxForming" transform="translate(0, -50)">
                                    <polygon points="0,0 -30,40 30,40" fill="#E9724C" opacity="0.7">
                                        <animateTransform attributeName="transform" type="scale" values="0;1" dur="3s" fill="freeze"/>
                                    </polygon>
                                    <polygon points="-15,30 -25,50 -5,50" fill="#D8613C" opacity="0.8">
                                        <animateTransform attributeName="transform" type="scale" values="0;1" dur="3.2s" fill="freeze"/>
                                    </polygon>
                                    <polygon points="15,30 5,50 25,50" fill="#D8613C" opacity="0.8">
                                        <animateTransform attributeName="transform" type="scale" values="0;1" dur="3.4s" fill="freeze"/>
                                    </polygon>
                                    <!-- Fox eyes -->
                                    <circle cx="-8" cy="15" r="3" fill="white">
                                        <animate attributeName="r" values="0;3" dur="3.5s" fill="freeze"/>
                                    </circle>
                                    <circle cx="8" cy="15" r="3" fill="white">
                                        <animate attributeName="r" values="0;3" dur="3.5s" fill="freeze"/>
                                    </circle>
                                    <circle cx="-8" cy="15" r="2" fill="black">
                                        <animate attributeName="r" values="0;2" dur="3.6s" fill="freeze"/>
                                    </circle>
                                    <circle cx="8" cy="15" r="2" fill="black">
                                        <animate attributeName="r" values="0;2" dur="3.6s" fill="freeze"/>
                                    </circle>
                                </g>
                                
                                <!-- Maya's spiral appearing in the sky -->
                                <g transform="translate(100, -100)">
                                    <circle cx="0" cy="0" r="30" fill="none" stroke="#FFC857" stroke-width="3" stroke-dasharray="190" stroke-dashoffset="190">
                                        <animate attributeName="stroke-dashoffset" values="190;0" dur="4s" fill="freeze"/>
                                    </circle>
                                    <path d="M0 -30 Q30 0 0 30 Q-30 0 0 -30" fill="none" stroke="#FFD700" stroke-width="2" stroke-dasharray="190" stroke-dashoffset="190">
                                        <animate attributeName="stroke-dashoffset" values="190;0" dur="4.5s" fill="freeze"/>
                                    </path>
                                </g>
                            </g>
                            
                            <!-- Progress indicator -->
                            <rect x="100" y="550" width="600" height="6" fill="#E0E0E0" rx="3"/>
                            <rect x="100" y="550" width="0" height="6" fill="url(#creationFlow)" rx="3">
                                <animate attributeName="width" values="0;600" dur="5s" fill="freeze"/>
                            </rect>
                            
                            <!-- Sound effect text -->
                            <text x="400" y="100" font-family="'Comic Sans MS', cursive" font-size="24" text-anchor="middle" fill="#7DF9FF" opacity="0.6">
                                *whirr-blip-zing*
                            </text>
                        </svg>
                    </div>

                    <!-- Panel 3: The result appearing -->
                    <div class="panel panel-3">
                        <svg viewBox="0 0 800 600" class="panel-svg">
                            <!-- Result screen -->
                            <rect width="800" height="600" fill="#1C1C1E"/>
                            
                            <!-- Frame for artwork -->
                            <rect x="100" y="50" width="600" height="400" fill="white" stroke="#7DF9FF" stroke-width="4" rx="10" filter="url(#screenGlow)"/>
                            
                            <!-- The created artwork -->
                            <g transform="translate(400, 250)">
                                <!-- Paper texture background -->
                                <rect x="-280" y="-180" width="560" height="360" fill="#FFFEF7" opacity="0.9"/>
                                
                                <!-- Paper city -->
                                <g id="paperCity">
                                    <rect x="-150" y="50" width="40" height="80" fill="white" stroke="#999" stroke-width="2"/>
                                    <line x1="-145" y1="70" x2="-115" y2="70" stroke="#999" stroke-width="1"/>
                                    <line x1="-145" y1="90" x2="-115" y2="90" stroke="#999" stroke-width="1"/>
                                    <line x1="-145" y1="110" x2="-115" y2="110" stroke="#999" stroke-width="1"/>
                                    
                                    <rect x="-100" y="30" width="40" height="100" fill="white" stroke="#999" stroke-width="2"/>
                                    <rect x="-95" y="40" width="10" height="15" fill="#E0E0E0"/>
                                    <rect x="-80" y="40" width="10" height="15" fill="#E0E0E0"/>
                                    <rect x="-95" y="65" width="10" height="15" fill="#E0E0E0"/>
                                    <rect x="-80" y="65" width="10" height="15" fill="#E0E0E0"/>
                                    
                                    <rect x="-50" y="60" width="40" height="70" fill="white" stroke="#999" stroke-width="2"/>
                                    <rect x="0" y="40" width="40" height="90" fill="white" stroke="#999" stroke-width="2"/>
                                    <rect x="50" y="50" width="40" height="80" fill="white" stroke="#999" stroke-width="2"/>
                                    <rect x="100" y="35" width="40" height="95" fill="white" stroke="#999" stroke-width="2"/>
                                </g>
                                
                                <!-- Fox leaping -->
                                <g id="leapingFox" transform="translate(0, -50)">
                                    <!-- Arc motion path -->
                                    <path d="M-150 30 Q0 -80 150 30" fill="none" stroke="#E9724C" stroke-width="2" stroke-dasharray="5,5" opacity="0.5"/>
                                    
                                    <!-- Fox body -->
                                    <g transform="rotate(-30)">
                                        <ellipse cx="0" cy="0" rx="40" ry="25" fill="#E9724C"/>
                                        <!-- Head -->
                                        <polygon points="-30,-10 -40,10 -20,10" fill="#E9724C"/>
                                        <!-- Ears -->
                                        <polygon points="-35,-10 -38,-20 -32,-15" fill="#D8613C"/>
                                        <polygon points="-25,-10 -28,-20 -22,-15" fill="#D8613C"/>
                                        <!-- Tail -->
                                        <path d="M35 0 Q50 -15 60 -10 Q55 5 45 10" fill="#E9724C"/>
                                        <!-- Legs extended in leap -->
                                        <ellipse cx="-15" cy="20" rx="4" ry="15" fill="#D8613C" transform="rotate(45 -15 20)"/>
                                        <ellipse cx="-5" cy="20" rx="4" ry="15" fill="#D8613C" transform="rotate(30 -5 20)"/>
                                        <ellipse cx="15" cy="20" rx="4" ry="15" fill="#D8613C" transform="rotate(-30 15 20)"/>
                                        <ellipse cx="25" cy="20" rx="4" ry="15" fill="#D8613C" transform="rotate(-45 25 20)"/>
                                    </g>
                                </g>
                                
                                <!-- Maya's spiral in the sky -->
                                <g transform="translate(180, -120)">
                                    <circle cx="0" cy="0" r="25" fill="#FFC857" opacity="0.3"/>
                                    <circle cx="0" cy="0" r="25" fill="none" stroke="#FFC857" stroke-width="3"/>
                                    <path d="M0 -25 Q25 0 0 25 Q-25 0 0 -25" fill="none" stroke="#FFD700" stroke-width="2"/>
                                </g>
                                
                                <!-- Paper texture lines -->
                                <line x1="-280" y1="-150" x2="280" y2="-150" stroke="#F0F0F0" stroke-width="0.5"/>
                                <line x1="-280" y1="-100" x2="280" y2="-100" stroke="#F0F0F0" stroke-width="0.5"/>
                                <line x1="-280" y1="-50" x2="280" y2="-50" stroke="#F0F0F0" stroke-width="0.5"/>
                                <line x1="-280" y1="0" x2="280" y2="0" stroke="#F0F0F0" stroke-width="0.5"/>
                                <line x1="-280" y1="50" x2="280" y2="50" stroke="#F0F0F0" stroke-width="0.5"/>
                                <line x1="-280" y1="100" x2="280" y2="100" stroke="#F0F0F0" stroke-width="0.5"/>
                                <line x1="-280" y1="150" x2="280" y2="150" stroke="#F0F0F0" stroke-width="0.5"/>
                            </g>
                            
                            <!-- Maya's reaction -->
                            <text x="400" y="500" font-family="'Comic Sans MS', cursive" font-size="18" text-anchor="middle" fill="white">
                                "It looks like me—just bigger!"
                            </text>
                        </svg>
                    </div>

                    <!-- Panel 4: Credits display -->
                    <div class="panel panel-4">
                        <svg viewBox="0 0 800 600" class="panel-svg">
                            <defs>
                                <linearGradient id="creditsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style="stop-color:#1C1C1E;stop-opacity:1"/>
                                    <stop offset="100%" style="stop-color:#0D1117;stop-opacity:1"/>
                                </linearGradient>
                            </defs>

                            <!-- Dark tech background -->
                            <rect width="800" height="600" fill="url(#creditsGrad)"/>
                            
                            <!-- Pixel displaying credits -->
                            <g transform="translate(150, 100)">
                                <polygon points="0,30 30,0 60,30 30,60" fill="#7DF9FF" opacity="0.8"/>
                                <circle cx="20" cy="30" r="2" fill="white"/>
                                <circle cx="40" cy="30" r="2" fill="white"/>
                                <path d="M20 40 Q30 45 40 40" fill="none" stroke="white" stroke-width="1.5"/>
                            </g>
                            
                            <!-- Credits panel -->
                            <rect x="200" y="150" width="400" height="300" fill="rgba(255,255,255,0.05)" stroke="#7DF9FF" stroke-width="2" rx="10"/>
                            
                            <!-- Header -->
                            <rect x="200" y="150" width="400" height="50" fill="rgba(125,249,255,0.1)"/>
                            <text x="400" y="180" font-family="'SF Mono', monospace" font-size="18" text-anchor="middle" fill="#7DF9FF" font-weight="bold">
                                CONTENT CREDENTIALS
                            </text>
                            
                            <!-- Credits details -->
                            <g transform="translate(400, 250)">
                                <!-- Author -->
                                <g transform="translate(-150, 0)">
                                    <circle cx="0" cy="0" r="20" fill="none" stroke="#FFE66D" stroke-width="2"/>
                                    <text x="0" y="5" font-family="Arial" font-size="16" text-anchor="middle" fill="#FFE66D">A</text>
                                    <text x="0" y="-35" font-family="Arial" font-size="12" text-anchor="middle" fill="#8B949E">Author</text>
                                    <text x="0" y="40" font-family="'SF Mono', monospace" font-size="14" text-anchor="middle" fill="white">Maya</text>
                                </g>
                                
                                <!-- Plus sign -->
                                <text x="0" y="5" font-family="Arial" font-size="24" text-anchor="middle" fill="#8B949E">+</text>
                                
                                <!-- Tool -->
                                <g transform="translate(150, 0)">
                                    <rect x="-20" y="-20" width="40" height="40" fill="none" stroke="#A58CFF" stroke-width="2" rx="5"/>
                                    <text x="0" y="5" font-family="Arial" font-size="16" text-anchor="middle" fill="#A58CFF">T</text>
                                    <text x="0" y="-35" font-family="Arial" font-size="12" text-anchor="middle" fill="#8B949E">Tool</text>
                                    <text x="0" y="40" font-family="'SF Mono', monospace" font-size="14" text-anchor="middle" fill="white">Pixel</text>
                                </g>
                            </g>
                            
                            <!-- License info -->
                            <g transform="translate(400, 350)">
                                <rect x="-100" y="-20" width="200" height="40" fill="rgba(255,107,107,0.1)" stroke="#FF6B6B" stroke-width="2" rx="5"/>
                                <text x="0" y="5" font-family="Arial" font-size="14" text-anchor="middle" fill="#FF6B6B">
                                    All Rights Reserved
                                </text>
                            </g>
                            
                            <!-- Bottom text -->
                            <text x="400" y="420" font-family="Arial" font-size="12" text-anchor="middle" fill="#8B949E">
                                Credit is embedded inside the file
                            </text>
                            
                            <!-- Maya and Pixel dialogue -->
                            <g transform="translate(400, 500)">
                                <!-- Maya -->
                                <ellipse cx="-100" cy="0" rx="80" ry="30" fill="white" stroke="#333" stroke-width="2"/>
                                <text x="-100" y="5" font-family="'Comic Sans MS', cursive" font-size="14" text-anchor="middle" fill="#333">
                                    "You didn't steal."
                                </text>
                                
                                <!-- Pixel -->
                                <rect x="20" y="-15" width="120" height="30" fill="white" stroke="#7DF9FF" stroke-width="2" rx="15"/>
                                <text x="80" y="5" font-family="'SF Mono', monospace" font-size="14" text-anchor="middle" fill="#333">
                                    "We cooperated."
                                </text>
                            </g>
                        </svg>
                    </div>
                </div>

                <!-- Page narration -->
                <div class="audio-narrator" data-text="Page 6: First co-creation. Maya types with trembling fingers: 'A fox leaping over a city made of sketchbook paper.' She watches in wonder as Pixel weaves her words into art, adding her spiral signature to the sky. The credits appear: Maya (Author) + Pixel (Tool). Not theft. Cooperation."></div>
            </div>
        `;
    }

    generatePage7() {
        return `
            <div class="enhanced-comic-page page-7">
                <div class="panel-layout refinement-grid">
                    <!-- Full page showing refinement process -->
                    <svg viewBox="0 0 1920 1080" class="page-svg cinematic">
                        <defs>
                            <linearGradient id="controlGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style="stop-color:#4ECDC4;stop-opacity:1"/>
                                <stop offset="50%" style="stop-color:#7DF9FF;stop-opacity:1"/>
                                <stop offset="100%" style="stop-color:#A58CFF;stop-opacity:1"/>
                            </linearGradient>
                        </defs>

                        <!-- Workshop background -->
                        <rect width="1920" height="1080" fill="#F5F7FA"/>
                        
                        <!-- Control panel interface -->
                        <rect x="100" y="100" width="800" height="880" fill="#1C1C1E" stroke="#333" stroke-width="4" rx="15"/>
                        <rect x="120" y="120" width="760" height="840" fill="#0D1117"/>
                        
                        <!-- Sliders section -->
                        <g transform="translate(200, 200)">
                            <text x="0" y="0" font-family="'SF Mono', monospace" font-size="20" fill="#7DF9FF">
                                ADJUST YOUR STYLE
                            </text>
                            
                            <!-- Line Springiness -->
                            <g transform="translate(0, 50)">
                                <text x="0" y="0" font-family="Arial" font-size="16" fill="white">Line Springiness</text>
                                <rect x="0" y="10" width="400" height="8" fill="#30363D" rx="4"/>
                                <rect x="0" y="10" width="280" height="8" fill="url(#controlGrad)" rx="4"/>
                                <circle cx="280" cy="14" r="12" fill="#7DF9FF" stroke="white" stroke-width="2">
                                    <animate attributeName="cx" values="280;320;280" dur="3s" repeatCount="indefinite"/>
                                </circle>
                                <text x="420" y="18" font-family="'SF Mono', monospace" font-size="14" fill="#8B949E">70%</text>
                            </g>
                            
                            <!-- Paper Grain -->
                            <g transform="translate(0, 120)">
                                <text x="0" y="0" font-family="Arial" font-size="16" fill="white">Paper Grain</text>
                                <rect x="0" y="10" width="400" height="8" fill="#30363D" rx="4"/>
                                <rect x="0" y="10" width="120" height="8" fill="url(#controlGrad)" rx="4"/>
                                <circle cx="120" cy="14" r="12" fill="#7DF9FF" stroke="white" stroke-width="2">
                                    <animate attributeName="cx" values="120;80;120" dur="2.5s" repeatCount="indefinite"/>
                                </circle>
                                <text x="420" y="18" font-family="'SF Mono', monospace" font-size="14" fill="#8B949E">30%</text>
                            </g>
                            
                            <!-- Color Warmth -->
                            <g transform="translate(0, 190)">
                                <text x="0" y="0" font-family="Arial" font-size="16" fill="white">Color Warmth</text>
                                <rect x="0" y="10" width="400" height="8" fill="#30363D" rx="4"/>
                                <rect x="0" y="10" width="240" height="8" fill="url(#controlGrad)" rx="4"/>
                                <circle cx="240" cy="14" r="12" fill="#7DF9FF" stroke="white" stroke-width="2"/>
                                <text x="420" y="18" font-family="'SF Mono', monospace" font-size="14" fill="#8B949E">60%</text>
                            </g>
                            
                            <!-- Spiral Prominence -->
                            <g transform="translate(0, 260)">
                                <text x="0" y="0" font-family="Arial" font-size="16" fill="white">Spiral Prominence</text>
                                <rect x="0" y="10" width="400" height="8" fill="#30363D" rx="4"/>
                                <rect x="0" y="10" width="360" height="8" fill="#FFC857" rx="4"/>
                                <circle cx="360" cy="14" r="12" fill="#FFD700" stroke="white" stroke-width="2"/>
                                <text x="420" y="18" font-family="'SF Mono', monospace" font-size="14" fill="#8B949E">90%</text>
                            </g>
                        </g>
                        
                        <!-- Live preview area -->
                        <rect x="1000" y="100" width="800" height="600" fill="white" stroke="#7DF9FF" stroke-width="4" rx="15"/>
                        
                        <!-- Artwork being adjusted in real-time -->
                        <g transform="translate(1400, 400)">
                            <!-- Base artwork -->
                            <rect x="-350" y="-250" width="700" height="500" fill="#FFFEF7" opacity="0.9"/>
                            
                            <!-- Adjustable elements -->
                            <!-- Lines with variable springiness -->
                            <path d="M-300 -100 Q-200 -150 -100 -100 Q0 -50 100 -100 Q200 -150 300 -100" 
                                  fill="none" stroke="#333" stroke-width="2">
                                <animate attributeName="d" 
                                        values="M-300 -100 Q-200 -150 -100 -100 Q0 -50 100 -100 Q200 -150 300 -100;
                                                M-300 -100 Q-200 -120 -100 -100 Q0 -80 100 -100 Q200 -120 300 -100;
                                                M-300 -100 Q-200 -150 -100 -100 Q0 -50 100 -100 Q200 -150 300 -100"
                                        dur="3s" repeatCount="indefinite"/>
                            </path>
                            
                            <!-- Paper texture overlay -->
                            <g opacity="0.3" id="grainAdjust">
                                <circle cx="-200" cy="-50" r="1" fill="#999"/>
                                <circle cx="-150" cy="20" r="0.8" fill="#999"/>
                                <circle cx="-80" cy="-80" r="1.2" fill="#999"/>
                                <circle cx="50" cy="50" r="0.9" fill="#999"/>
                                <circle cx="120" cy="-30" r="1" fill="#999"/>
                                <circle cx="200" cy="80" r="0.7" fill="#999"/>
                                <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2.5s" repeatCount="indefinite"/>
                            </g>
                            
                            <!-- Prominent spiral -->
                            <g transform="translate(0, -150)">
                                <circle cx="0" cy="0" r="40" fill="none" stroke="#FFC857" stroke-width="4">
                                    <animate attributeName="stroke-width" values="4;6;4" dur="2s" repeatCount="indefinite"/>
                                </circle>
                                <path d="M0 -40 Q40 0 0 40 Q-40 0 0 -40" fill="none" stroke="#FFD700" stroke-width="3">
                                    <animate attributeName="stroke-width" values="3;5;3" dur="2s" repeatCount="indefinite"/>
                                </path>
                            </g>
                        </g>
                        
                        <!-- Maya's hand drawing on top -->
                        <g transform="translate(1400, 500)">
                            <ellipse cx="0" cy="0" rx="40" ry="60" fill="#D9A47A" transform="rotate(30)"/>
                            <!-- Holding stylus -->
                            <rect x="15" y="-30" width="8" height="80" fill="#333" transform="rotate(30)"/>
                            <polygon points="19,-35 23,-45 27,-35" fill="#333" transform="rotate(30)"/>
                            
                            <!-- Drawing a figure -->
                            <circle cx="-50" cy="-50" r="5" fill="#FF6B6B" opacity="0.8"/>
                            <rect x="-55" y="-45" width="10" height="20" fill="#FF6B6B" opacity="0.8"/>
                            <line x1="-55" y1="-35" x2="-60" y2="-25" stroke="#FF6B6B" stroke-width="2"/>
                            <line x1="-45" y1="-35" x2="-40" y2="-25" stroke="#FF6B6B" stroke-width="2"/>
                        </g>
                        
                        <!-- Dialogue section at bottom -->
                        <g transform="translate(500, 900)">
                            <!-- Maya -->
                            <circle cx="0" cy="0" r="30" fill="#D9A47A"/>
                            <ellipse cx="-8" cy="-5" rx="5" ry="7" fill="white"/>
                            <ellipse cx="8" cy="-5" rx="5" ry="7" fill="white"/>
                            <circle cx="-8" cy="-5" r="3" fill="#4B3621"/>
                            <circle cx="8" cy="-5" r="3" fill="#4B3621"/>
                            <path d="M-10 10 Q0 15 10 10" fill="none" stroke="#B8766D" stroke-width="2"/>
                            
                            <ellipse cx="80" cy="0" rx="100" ry="40" fill="white" stroke="#333" stroke-width="3"/>
                            <text x="80" y="-5" font-family="'Comic Sans MS', cursive" font-size="15" text-anchor="middle" fill="#333">
                                "More spring."
                            </text>
                            <text x="80" y="15" font-family="'Comic Sans MS', cursive" font-size="15" text-anchor="middle" fill="#333">
                                "Less grain."
                            </text>
                        </g>
                        
                        <g transform="translate(1000, 900)">
                            <!-- Pixel -->
                            <polygon points="0,20 20,0 40,20 20,40" fill="#7DF9FF" opacity="0.8"/>
                            <circle cx="15" cy="20" r="2" fill="white"/>
                            <circle cx="25" cy="20" r="2" fill="white"/>
                            
                            <rect x="60" y="-20" width="100" height="40" fill="white" stroke="#7DF9FF" stroke-width="3" rx="20"/>
                            <text x="110" y="5" font-family="'SF Mono', monospace" font-size="15" text-anchor="middle" fill="#333">
                                "Applied."
                            </text>
                        </g>
                        
                        <g transform="translate(1400, 900)">
                            <!-- Maya confident -->
                            <circle cx="0" cy="0" r="30" fill="#D9A47A"/>
                            <path d="M-12 10 Q0 18 12 10" fill="none" stroke="#B8766D" stroke-width="3"/>
                            
                            <ellipse cx="80" cy="0" rx="120" ry="40" fill="white" stroke="#333" stroke-width="3"/>
                            <text x="80" y="-5" font-family="'Comic Sans MS', cursive" font-size="15" text-anchor="middle" fill="#333">
                                "Hand beats algorithm"
                            </text>
                            <text x="80" y="15" font-family="'Comic Sans MS', cursive" font-size="15" text-anchor="middle" fill="#4169E1" font-weight="bold">
                                "here."
                            </text>
                        </g>
                        
                        <!-- Export button -->
                        <rect x="100" y="900" width="800" height="60" fill="#4ECDC4" stroke="#333" stroke-width="3" rx="30"/>
                        <text x="500" y="940" font-family="Arial" font-size="24" text-anchor="middle" fill="white" font-weight="bold">
                            EXPORT WITH CREDENTIALS
                        </text>
                        
                        <!-- C2PA badge preview -->
                        <g transform="translate(1700, 750)">
                            <rect x="-50" y="-25" width="100" height="50" fill="white" stroke="#333" stroke-width="2" rx="5"/>
                            <path d="M-30 -10 L-30 10 L0 20 L30 10 L30 -10 L0 -20 Z" fill="#4169E1"/>
                            <path d="M-10 -5 L-2 3 L10 -10" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
                            <text x="0" y="-35" font-family="Arial" font-size="12" text-anchor="middle" fill="#333">
                                C2PA Badge
                            </text>
                        </g>
                    </svg>
                </div>

                <!-- Page narration -->
                <div class="audio-narrator" data-text="Page 7: Control in her hands. Maya adjusts sliders - more spring in the lines, less paper grain. She draws directly on top with her stylus, adding human touches the algorithm could never imagine. 'Hand beats algorithm here,' she says with growing confidence. Pixel responds instantly to her choices. She's not being replaced - she's conducting a digital orchestra."></div>
            </div>
        `;
    }

    generatePage8() {
        return `
            <div class="enhanced-comic-page page-8">
                <div class="panel-layout exploration-montage">
                    <!-- 6-panel montage grid -->
                    <div class="montage-grid">
                        <!-- Panel 1: Jellyfish Balloons -->
                        <div class="montage-panel">
                            <svg viewBox="0 0 400 400" class="panel-svg">
                                <defs>
                                    <radialGradient id="jellyfishGrad1" cx="50%" cy="30%">
                                        <stop offset="0%" style="stop-color:#E6F3FF;stop-opacity:0.8"/>
                                        <stop offset="100%" style="stop-color:#7DF9FF;stop-opacity:0.3"/>
                                    </radialGradient>
                                </defs>
                                
                                <!-- Old map background -->
                                <rect width="400" height="400" fill="#F4E8D0"/>
                                <path d="M50 100 Q150 80 250 100" fill="none" stroke="#C4A57B" stroke-width="1" opacity="0.5"/>
                                <path d="M100 200 Q200 180 300 200" fill="none" stroke="#C4A57B" stroke-width="1" opacity="0.5"/>
                                <path d="M80 300 Q180 280 280 300" fill="none" stroke="#C4A57B" stroke-width="1" opacity="0.5"/>
                                <text x="100" y="350" font-family="'Georgia', serif" font-size="10" fill="#8B7355" opacity="0.5">Mare Nostrum</text>
                                
                                <!-- Jellyfish balloons -->
                                <g transform="translate(120, 150)">
                                    <ellipse cx="0" cy="0" rx="40" ry="50" fill="url(#jellyfishGrad1)"/>
                                    <path d="M-30 40 Q-25 60 -30 80" fill="none" stroke="#7DF9FF" stroke-width="2" opacity="0.6">
                                        <animate attributeName="d" values="M-30 40 Q-25 60 -30 80;M-30 40 Q-35 60 -30 80;M-30 40 Q-25 60 -30 80" dur="3s" repeatCount="indefinite"/>
                                    </path>
                                    <path d="M-10 45 Q-5 65 -10 85" fill="none" stroke="#7DF9FF" stroke-width="2" opacity="0.6">
                                        <animate attributeName="d" values="M-10 45 Q-5 65 -10 85;M-10 45 Q-15 65 -10 85;M-10 45 Q-5 65 -10 85" dur="2.5s" repeatCount="indefinite"/>
                                    </path>
                                    <path d="M10 45 Q5 65 10 85" fill="none" stroke="#7DF9FF" stroke-width="2" opacity="0.6">
                                        <animate attributeName="d" values="M10 45 Q5 65 10 85;M10 45 Q15 65 10 85;M10 45 Q5 65 10 85" dur="2.8s" repeatCount="indefinite"/>
                                    </path>
                                    <path d="M30 40 Q25 60 30 80" fill="none" stroke="#7DF9FF" stroke-width="2" opacity="0.6">
                                        <animate attributeName="d" values="M30 40 Q25 60 30 80;M30 40 Q35 60 30 80;M30 40 Q25 60 30 80" dur="3.2s" repeatCount="indefinite"/>
                                    </path>
                                    <!-- String -->
                                    <line x1="0" y1="50" x2="0" y2="150" stroke="#999" stroke-width="1"/>
                                </g>
                                
                                <g transform="translate(250, 120)">
                                    <ellipse cx="0" cy="0" rx="35" ry="45" fill="url(#jellyfishGrad1)"/>
                                    <path d="M-25 35 Q-20 55 -25 75" fill="none" stroke="#A58CFF" stroke-width="2" opacity="0.6">
                                        <animate attributeName="d" values="M-25 35 Q-20 55 -25 75;M-25 35 Q-30 55 -25 75;M-25 35 Q-20 55 -25 75" dur="2.7s" repeatCount="indefinite"/>
                                    </path>
                                    <path d="M0 40 Q5 60 0 80" fill="none" stroke="#A58CFF" stroke-width="2" opacity="0.6">
                                        <animate attributeName="d" values="M0 40 Q5 60 0 80;M0 40 Q-5 60 0 80;M0 40 Q5 60 0 80" dur="3s" repeatCount="indefinite"/>
                                    </path>
                                    <path d="M25 35 Q20 55 25 75" fill="none" stroke="#A58CFF" stroke-width="2" opacity="0.6">
                                        <animate attributeName="d" values="M25 35 Q20 55 25 75;M25 35 Q30 55 25 75;M25 35 Q20 55 25 75" dur="2.5s" repeatCount="indefinite"/>
                                    </path>
                                    <!-- String -->
                                    <line x1="0" y1="45" x2="0" y2="145" stroke="#999" stroke-width="1"/>
                                </g>
                                
                                <!-- Maya's comment -->
                                <ellipse cx="300" cy="350" rx="60" ry="25" fill="white" stroke="#333" stroke-width="2"/>
                                <text x="300" y="355" font-family="'Comic Sans MS', cursive" font-size="12" text-anchor="middle" fill="#333">
                                    "Keep my warm blues"
                                </text>
                            </svg>
                        </div>

                        <!-- Panel 2: Thread City -->
                        <div class="montage-panel">
                            <svg viewBox="0 0 400 400" class="panel-svg">
                                <!-- Canvas background -->
                                <rect width="400" height="400" fill="#FFF8E7"/>
                                
                                <!-- Thread city buildings -->
                                <g transform="translate(200, 250)">
                                    <!-- Building 1 -->
                                    <g id="building1">
                                        <line x1="-120" y1="50" x2="-120" y2="-80" stroke="#333" stroke-width="2" stroke-dasharray="8,3"/>
                                        <line x1="-100" y1="50" x2="-100" y2="-75" stroke="#333" stroke-width="2" stroke-dasharray="8,3"/>
                                        <line x1="-80" y1="50" x2="-80" y2="-70" stroke="#333" stroke-width="2" stroke-dasharray="8,3"/>
                                        <!-- Cross-stitching -->
                                        <line x1="-120" y1="-30" x2="-80" y2="-30" stroke="#666" stroke-width="1"/>
                                        <line x1="-120" y1="0" x2="-80" y2="0" stroke="#666" stroke-width="1"/>
                                        <line x1="-120" y1="30" x2="-80" y2="30" stroke="#666" stroke-width="1"/>
                                    </g>
                                    
                                    <!-- Building 2 -->
                                    <g id="building2">
                                        <line x1="-40" y1="50" x2="-40" y2="-100" stroke="#4169E1" stroke-width="2" stroke-dasharray="6,4"/>
                                        <line x1="-20" y1="50" x2="-20" y2="-95" stroke="#4169E1" stroke-width="2" stroke-dasharray="6,4"/>
                                        <line x1="0" y1="50" x2="0" y2="-90" stroke="#4169E1" stroke-width="2" stroke-dasharray="6,4"/>
                                        <!-- Windows as knots -->
                                        <circle cx="-30" cy="-50" r="3" fill="#4169E1"/>
                                        <circle cx="-10" cy="-50" r="3" fill="#4169E1"/>
                                        <circle cx="-30" cy="-20" r="3" fill="#4169E1"/>
                                        <circle cx="-10" cy="-20" r="3" fill="#4169E1"/>
                                    </g>
                                    
                                    <!-- Building 3 -->
                                    <g id="building3">
                                        <line x1="40" y1="50" x2="40" y2="-85" stroke="#8B4513" stroke-width="2" stroke-dasharray="10,2"/>
                                        <line x1="60" y1="50" x2="60" y2="-80" stroke="#8B4513" stroke-width="2" stroke-dasharray="10,2"/>
                                        <line x1="80" y1="50" x2="80" y2="-75" stroke="#8B4513" stroke-width="2" stroke-dasharray="10,2"/>
                                        <!-- Woven pattern -->
                                        <path d="M40 -40 Q50 -35 60 -40 Q70 -45 80 -40" fill="none" stroke="#A0522D" stroke-width="1"/>
                                        <path d="M40 -10 Q50 -5 60 -10 Q70 -15 80 -10" fill="none" stroke="#A0522D" stroke-width="1"/>
                                    </g>
                                    
                                    <!-- Ground threads -->
                                    <line x1="-150" y1="50" x2="150" y2="50" stroke="#666" stroke-width="3"/>
                                    <line x1="-150" y1="55" x2="150" y2="55" stroke="#999" stroke-width="2"/>
                                </g>
                                
                                <!-- Pixel's response -->
                                <rect x="250" y="350" width="120" height="30" fill="white" stroke="#7DF9FF" stroke-width="2" rx="15"/>
                                <text x="310" y="370" font-family="'SF Mono', monospace" font-size="11" text-anchor="middle" fill="#333">
                                    "Thread tension matched"
                                </text>
                            </svg>
                        </div>

                        <!-- Panel 3: Musical Trees -->
                        <div class="montage-panel">
                            <svg viewBox="0 0 400 400" class="panel-svg">
                                <!-- Dreamy background -->
                                <rect width="400" height="400" fill="#E8F5E8"/>
                                
                                <!-- Musical trees -->
                                <g transform="translate(100, 250)">
                                    <!-- Tree trunk -->
                                    <rect x="-15" y="0" width="30" height="80" fill="#8B4513"/>
                                    <!-- Foliage as musical notes -->
                                    <ellipse cx="0" cy="-40" rx="50" ry="70" fill="rgba(107,144,128,0.3)"/>
                                    <!-- Musical notes as leaves -->
                                    <g id="notes1">
                                        <ellipse cx="-20" cy="-50" rx="8" ry="6" fill="#333" transform="rotate(-20 -20 -50)"/>
                                        <line x1="-12" y1="-50" x2="-12" y2="-70" stroke="#333" stroke-width="2"/>
                                        <path d="M-12 -70 Q-8 -75 -4 -70" fill="none" stroke="#333" stroke-width="2"/>
                                        
                                        <ellipse cx="15" cy="-60" rx="8" ry="6" fill="#333" transform="rotate(15 15 -60)"/>
                                        <line x1="23" y1="-60" x2="23" y2="-80" stroke="#333" stroke-width="2"/>
                                        
                                        <ellipse cx="0" cy="-30" rx="8" ry="6" fill="#333"/>
                                        <line x1="8" y1="-30" x2="8" y2="-50" stroke="#333" stroke-width="2"/>
                                        <path d="M8 -50 Q12 -55 16 -50" fill="none" stroke="#333" stroke-width="2"/>
                                    </g>
                                </g>
                                
                                <g transform="translate(250, 230)">
                                    <!-- Tree trunk -->
                                    <rect x="-12" y="0" width="24" height="70" fill="#8B4513"/>
                                    <!-- Foliage -->
                                    <ellipse cx="0" cy="-35" rx="45" ry="60" fill="rgba(107,144,128,0.3)"/>
                                    <!-- Musical notes -->
                                    <g id="notes2">
                                        <ellipse cx="-15" cy="-40" rx="8" ry="6" fill="#333" transform="rotate(-15 -15 -40)"/>
                                        <line x1="-7" y1="-40" x2="-7" y2="-60" stroke="#333" stroke-width="2"/>
                                        
                                        <ellipse cx="20" cy="-45" rx="8" ry="6" fill="#333" transform="rotate(20 20 -45)"/>
                                        <line x1="28" y1="-45" x2="28" y2="-65" stroke="#333" stroke-width="2"/>
                                        <path d="M28 -65 Q32 -70 36 -65" fill="none" stroke="#333" stroke-width="2"/>
                                    </g>
                                </g>
                                
                                <!-- Sound waves -->
                                <path d="M50 200 Q60 190 70 200 Q80 210 90 200" fill="none" stroke="#6B9080" stroke-width="1" opacity="0.5">
                                    <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" repeatCount="indefinite"/>
                                </path>
                                <path d="M300 180 Q310 170 320 180 Q330 190 340 180" fill="none" stroke="#6B9080" stroke-width="1" opacity="0.5">
                                    <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2.5s" repeatCount="indefinite"/>
                                </path>
                                
                                <!-- Maya's adjustment -->
                                <ellipse cx="300" cy="350" rx="50" ry="20" fill="white" stroke="#333" stroke-width="2"/>
                                <text x="300" y="355" font-family="'Comic Sans MS', cursive" font-size="12" text-anchor="middle" fill="#333">
                                    "Soften shadows"
                                </text>
                            </svg>
                        </div>

                        <!-- Panel 4: Spiral Kites -->
                        <div class="montage-panel">
                            <svg viewBox="0 0 400 400" class="panel-svg">
                                <!-- Sunset sky -->
                                <defs>
                                    <linearGradient id="sunsetSky" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style="stop-color:#FFE6CC;stop-opacity:1"/>
                                        <stop offset="50%" style="stop-color:#FFB347;stop-opacity:1"/>
                                        <stop offset="100%" style="stop-color:#FF8C69;stop-opacity:1"/>
                                    </linearGradient>
                                </defs>
                                <rect width="400" height="400" fill="url(#sunsetSky)"/>
                                
                                <!-- Spiral kites -->
                                <g transform="translate(150, 100)">
                                    <!-- Kite 1 -->
                                    <g transform="rotate(15)">
                                        <polygon points="0,0 -30,20 0,60 30,20" fill="#FFC857" opacity="0.8"/>
                                        <line x1="0" y1="0" x2="0" y2="60" stroke="#333" stroke-width="1"/>
                                        <line x1="-30" y1="20" x2="30" y2="20" stroke="#333" stroke-width="1"/>
                                        <!-- Spiral on kite -->
                                        <circle cx="0" cy="30" r="12" fill="none" stroke="#FFD700" stroke-width="2"/>
                                        <path d="M0 18 Q12 30 0 42 Q-12 30 0 18" fill="none" stroke="#FFD700" stroke-width="1.5"/>
                                    </g>
                                    <!-- String -->
                                    <path d="M0 60 Q20 100 10 150 Q30 200 20 250" fill="none" stroke="#666" stroke-width="1"/>
                                </g>
                                
                                <g transform="translate(280, 80)">
                                    <!-- Kite 2 -->
                                    <g transform="rotate(-20)">
                                        <polygon points="0,0 -25,18 0,50 25,18" fill="#A58CFF" opacity="0.8"/>
                                        <line x1="0" y1="0" x2="0" y2="50" stroke="#333" stroke-width="1"/>
                                        <line x1="-25" y1="18" x2="25" y2="18" stroke="#333" stroke-width="1"/>
                                        <!-- Spiral -->
                                        <circle cx="0" cy="25" r="10" fill="none" stroke="#8A2BE2" stroke-width="2"/>
                                        <path d="M0 15 Q10 25 0 35 Q-10 25 0 15" fill="none" stroke="#8A2BE2" stroke-width="1.5"/>
                                    </g>
                                    <!-- String -->
                                    <path d="M0 50 Q-15 90 -5 140 Q-20 190 -10 240" fill="none" stroke="#666" stroke-width="1"/>
                                </g>
                                
                                <!-- Wind lines -->
                                <path d="M50 150 L100 145" stroke="white" stroke-width="1" opacity="0.4"/>
                                <path d="M60 200 L110 195" stroke="white" stroke-width="1" opacity="0.4"/>
                                <path d="M250 120 L300 115" stroke="white" stroke-width="1" opacity="0.4"/>
                                
                                <!-- Pixel's note -->
                                <rect x="250" y="350" width="120" height="30" fill="white" stroke="#A58CFF" stroke-width="2" rx="15"/>
                                <text x="310" y="370" font-family="'SF Mono', monospace" font-size="11" text-anchor="middle" fill="#333">
                                    "Spiral motif weaved"
                                </text>
                            </svg>
                        </div>

                        <!-- Panel 5: Maya and Noor viewing -->
                        <div class="montage-panel">
                            <svg viewBox="0 0 400 400" class="panel-svg">
                                <!-- Room background -->
                                <rect width="400" height="400" fill="#FAFAF9"/>
                                
                                <!-- Computer screen -->
                                <rect x="100" y="50" width="200" height="150" fill="#2C2C2E" stroke="#1C1C1E" stroke-width="3"/>
                                <rect x="110" y="60" width="180" height="130" fill="#7DF9FF" opacity="0.3"/>
                                
                                <!-- Maya and Noor -->
                                <g transform="translate(150, 280)">
                                    <!-- Maya -->
                                    <circle cx="0" cy="0" r="35" fill="#D9A47A"/>
                                    <ellipse cx="-10" cy="-5" rx="6" ry="8" fill="white"/>
                                    <ellipse cx="10" cy="-5" rx="6" ry="8" fill="white"/>
                                    <circle cx="-10" cy="-5" r="4" fill="#4B3621"/>
                                    <circle cx="10" cy="-5" r="4" fill="#4B3621"/>
                                    <!-- Excited smile -->
                                    <path d="M-15 10 Q0 20 15 10" fill="none" stroke="#B8766D" stroke-width="2" stroke-linecap="round"/>
                                    <!-- Hair -->
                                    <path d="M-35 -15 Q-40 -30 -30 -35 Q0 -40 30 -35 Q40 -30 35 -15" fill="#2B2B2B"/>
                                </g>
                                
                                <g transform="translate(250, 280)">
                                    <!-- Noor -->
                                    <circle cx="0" cy="0" r="35" fill="#C8A882"/>
                                    <ellipse cx="-10" cy="-5" rx="6" ry="8" fill="white"/>
                                    <ellipse cx="10" cy="-5" rx="6" ry="8" fill="white"/>
                                    <circle cx="-10" cy="-5" r="4" fill="#4B3621"/>
                                    <circle cx="10" cy="-5" r="4" fill="#4B3621"/>
                                    <!-- Impressed expression -->
                                    <ellipse cx="0" cy="12" rx="8" ry="6" fill="#B8766D"/>
                                    <!-- Beanie -->
                                    <path d="M-35 -20 Q-35 -35 0 -38 Q35 -35 35 -20" fill="#8B008B"/>
                                </g>
                                
                                <!-- Dialogue -->
                                <ellipse cx="200" cy="350" rx="80" ry="30" fill="white" stroke="#333" stroke-width="2"/>
                                <text x="200" y="350" font-family="'Comic Sans MS', cursive" font-size="12" text-anchor="middle" fill="#333">
                                    "It's like you"
                                </text>
                                <text x="200" y="365" font-family="'Comic Sans MS', cursive" font-size="12" text-anchor="middle" fill="#4169E1">
                                    "multiplied!"
                                </text>
                            </svg>
                        </div>

                        <!-- Panel 6: Ms. Rivera approval -->
                        <div class="montage-panel">
                            <svg viewBox="0 0 400 400" class="panel-svg">
                                <!-- Library background -->
                                <rect width="400" height="400" fill="#FAFAF9"/>
                                
                                <!-- Market poster on wall -->
                                <rect x="50" y="50" width="150" height="200" fill="white" stroke="#333" stroke-width="3"/>
                                <text x="125" y="100" font-family="Arial Black" font-size="18" text-anchor="middle" fill="#FF6B6B">
                                    SATURDAY
                                </text>
                                <text x="125" y="130" font-family="Arial" font-size="14" text-anchor="middle" fill="#333">
                                    Community
                                </text>
                                <text x="125" y="150" font-family="Arial" font-size="14" text-anchor="middle" fill="#333">
                                    Market
                                </text>
                                <rect x="85" y="170" width="80" height="60" fill="#FFE66D" opacity="0.3"/>
                                <text x="125" y="205" font-family="Arial" font-size="12" text-anchor="middle" fill="#333">
                                    Sell Your Art!
                                </text>
                                
                                <!-- Ms. Rivera -->
                                <g transform="translate(300, 250)">
                                    <!-- Body -->
                                    <rect x="-40" y="0" width="80" height="120" fill="#9370DB" rx="10"/>
                                    <!-- Head -->
                                    <circle cx="0" cy="-40" r="35" fill="#C8A882"/>
                                    <!-- Glasses -->
                                    <circle cx="-12" cy="-40" r="12" fill="none" stroke="#333" stroke-width="2"/>
                                    <circle cx="12" cy="-40" r="12" fill="none" stroke="#333" stroke-width="2"/>
                                    <line x1="0" y1="-40" x2="0" y2="-40" stroke="#333" stroke-width="2"/>
                                    <!-- Smile -->
                                    <path d="M-15 -25 Q0 -15 15 -25" fill="none" stroke="#8B6F47" stroke-width="2"/>
                                    
                                    <!-- Thumbs up -->
                                    <g transform="translate(50, 40)">
                                        <ellipse cx="0" cy="0" rx="20" ry="30" fill="#C8A882"/>
                                        <ellipse cx="-8" cy="-15" rx="8" ry="12" fill="#C8A882" transform="rotate(-30 -8 -15)"/>
                                    </g>
                                </g>
                                
                                <!-- Speech -->
                                <ellipse cx="300" cy="350" rx="70" ry="25" fill="white" stroke="#9370DB" stroke-width="2"/>
                                <text x="300" y="350" font-family="'Comic Sans MS', cursive" font-size="11" text-anchor="middle" fill="#9370DB">
                                    "Market table's"
                                </text>
                                <text x="300" y="365" font-family="'Comic Sans MS', cursive" font-size="11" text-anchor="middle" fill="#9370DB">
                                    "open Saturday!"
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Page narration -->
                <div class="audio-narrator" data-text="Page 8: Exploration explosion! Maya's creativity multiplies as she experiments. Jellyfish balloons float over ancient maps. Cities built from thread and tension. Trees that grow musical notes. Spiral kites dancing at dusk. Each creation carries her signature spiral, her unique vision amplified but never replaced. Noor gasps: 'It's like you multiplied!' Ms. Rivera sees potential: 'Market table's open Saturday!'"></div>
            </div>
        `;
    }

    generatePage9() {
        return `
            <div class="enhanced-comic-page page-9">
                <div class="panel-layout planning-session">
                    <!-- Full scene: Kitchen table planning -->
                    <svg viewBox="0 0 1920 1080" class="page-svg cinematic">
                        <defs>
                            <linearGradient id="eveningLight" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#FFE4B5;stop-opacity:1"/>
                                <stop offset="100%" style="stop-color:#DEB887;stop-opacity:0.5"/>
                            </linearGradient>
                        </defs>

                        <!-- Kitchen evening scene -->
                        <rect width="1920" height="1080" fill="url(#eveningLight)"/>
                        
                        <!-- Kitchen table -->
                        <rect x="400" y="600" width="1120" height="40" fill="#8B4513"/>
                        <rect x="450" y="640" width="60" height="400" fill="#654321"/>
                        <rect x="1410" y="640" width="60" height="400" fill="#654321"/>
                        
                        <!-- Prints spread on table -->
                        <g id="prints">
                            <!-- Print 1 -->
                            <rect x="500" y="500" width="200" height="150" fill="white" stroke="#333" stroke-width="2" transform="rotate(-5 600 575)"/>
                            <rect x="520" y="520" width="160" height="110" fill="#E6F3FF"/>
                            <circle cx="600" cy="575" r="20" fill="#FFC857" opacity="0.5"/>
                            
                            <!-- Print 2 -->
                            <rect x="750" y="480" width="200" height="150" fill="white" stroke="#333" stroke-width="2" transform="rotate(3 850 555)"/>
                            <rect x="770" y="500" width="160" height="110" fill="#FFE6CC"/>
                            <path d="M850 550 L820 580 L880 580 Z" fill="#E9724C" opacity="0.6"/>
                            
                            <!-- Print 3 -->
                            <rect x="1000" y="510" width="200" height="150" fill="white" stroke="#333" stroke-width="2" transform="rotate(-2 1100 585)"/>
                            <rect x="1020" y="530" width="160" height="110" fill="#E8F5E8"/>
                            <circle cx="1100" cy="585" r="25" fill="none" stroke="#6B9080" stroke-width="3"/>
                            
                            <!-- Print 4 -->
                            <rect x="1250" y="490" width="200" height="150" fill="white" stroke="#333" stroke-width="2" transform="rotate(5 1350 565)"/>
                            <rect x="1270" y="510" width="160" height="110" fill="#F4E8D0"/>
                        </g>
                        
                        <!-- Price tags -->
                        <g id="priceTags">
                            <!-- Tag 1 -->
                            <rect x="550" y="450" width="100" height="40" fill="#FFE66D" stroke="#333" stroke-width="2" rx="5"/>
                            <text x="600" y="475" font-family="Arial" font-size="18" text-anchor="middle" fill="#333" font-weight="bold">
                                $15
                            </text>
                            
                            <!-- Tag 2 -->
                            <rect x="800" y="430" width="100" height="40" fill="#FFE66D" stroke="#333" stroke-width="2" rx="5"/>
                            <text x="850" y="455" font-family="Arial" font-size="18" text-anchor="middle" fill="#333" font-weight="bold">
                                $20
                            </text>
                            
                            <!-- Tag 3 -->
                            <rect x="1050" y="460" width="100" height="40" fill="#FFE66D" stroke="#333" stroke-width="2" rx="5"/>
                            <text x="1100" y="485" font-family="Arial" font-size="18" text-anchor="middle" fill="#333" font-weight="bold">
                                $15
                            </text>
                        </g>
                        
                        <!-- QR code placeholder -->
                        <rect x="1300" y="400" width="80" height="80" fill="white" stroke="#333" stroke-width="2"/>
                        <g id="qrPattern">
                            <rect x="1310" y="410" width="10" height="10" fill="#333"/>
                            <rect x="1330" y="410" width="10" height="10" fill="#333"/>
                            <rect x="1350" y="410" width="10" height="10" fill="#333"/>
                            <rect x="1310" y="430" width="10" height="10" fill="#333"/>
                            <rect x="1350" y="430" width="10" height="10" fill="#333"/>
                            <rect x="1310" y="450" width="10" height="10" fill="#333"/>
                            <rect x="1330" y="450" width="10" height="10" fill="#333"/>
                            <rect x="1350" y="450" width="10" height="10" fill="#333"/>
                            <text x="1340" y="495" font-family="Arial" font-size="10" text-anchor="middle" fill="#333">
                                Tip Jar
                            </text>
                        </g>
                        
                        <!-- Dad examining prints -->
                        <g transform="translate(700, 400)">
                            <!-- Body -->
                            <rect x="-60" y="0" width="120" height="180" fill="#4682B4"/>
                            <!-- Head -->
                            <circle cx="0" cy="-60" r="45" fill="#8B7355"/>
                            <!-- Eyes looking at prints -->
                            <ellipse cx="-15" cy="-65" rx="8" ry="10" fill="white"/>
                            <ellipse cx="15" cy="-65" rx="8" ry="10" fill="white"/>
                            <circle cx="-15" cy="-63" r="6" fill="#4B3621"/>
                            <circle cx="15" cy="-63" r="6" fill="#4B3621"/>
                            <!-- Thoughtful expression -->
                            <path d="M-20 -45 Q0 -40 20 -45" fill="none" stroke="#654321" stroke-width="2"/>
                            <!-- Beard -->
                            <ellipse cx="0" cy="-30" rx="40" ry="25" fill="#5C4033" opacity="0.5"/>
                            
                            <!-- Hand holding print -->
                            <ellipse cx="80" cy="50" rx="30" ry="45" fill="#8B7355" transform="rotate(30 80 50)"/>
                            <rect x="100" y="20" width="120" height="90" fill="white" stroke="#333" stroke-width="2" transform="rotate(30 160 65)"/>
                        </g>
                        
                        <!-- Maya explaining -->
                        <g transform="translate(1200, 400)">
                            <!-- Body -->
                            <rect x="-50" y="0" width="100" height="150" fill="#2E86AB"/>
                            <!-- Head animated with enthusiasm -->
                            <circle cx="0" cy="-50" r="40" fill="#D9A47A"/>
                            <!-- Excited eyes -->
                            <ellipse cx="-12" cy="-55" rx="10" ry="12" fill="white"/>
                            <ellipse cx="12" cy="-55" rx="10" ry="12" fill="white"/>
                            <circle cx="-10" cy="-55" r="7" fill="#4B3621"/>
                            <circle cx="14" cy="-55" r="7" fill="#4B3621"/>
                            <circle cx="-8" cy="-57" r="2" fill="white"/>
                            <circle cx="16" cy="-57" r="2" fill="white"/>
                            <!-- Talking mouth -->
                            <ellipse cx="0" cy="-30" rx="12" ry="8" fill="#B8766D"/>
                            <!-- Hair -->
                            <path d="M-40 -70 Q-45 -85 -30 -90 Q0 -95 30 -90 Q45 -85 40 -70" fill="#2B2B2B"/>
                            
                            <!-- Pointing to screen -->
                            <ellipse cx="60" cy="30" rx="20" ry="35" fill="#D9A47A" transform="rotate(45 60 30)"/>
                            <ellipse cx="75" cy="10" rx="8" ry="20" fill="#D9A47A" transform="rotate(45 75 10)"/>
                        </g>
                        
                        <!-- Laptop showing dashboard -->
                        <rect x="1400" y="450" width="300" height="180" fill="#2C2C2E" stroke="#1C1C1E" stroke-width="3"/>
                        <rect x="1410" y="460" width="280" height="160" fill="#0D1117"/>
                        
                        <!-- Dashboard content -->
                        <g transform="translate(1550, 540)">
                            <text x="0" y="-50" font-family="'SF Mono', monospace" font-size="14" text-anchor="middle" fill="#7DF9FF">
                                CREATOR DASHBOARD
                            </text>
                            
                            <!-- Attribution setting -->
                            <rect x="-120" y="-20" width="240" height="30" fill="rgba(125,249,255,0.1)" stroke="#7DF9FF" stroke-width="1" rx="5"/>
                            <circle cx="-100" cy="-5" r="5" fill="#56D364"/>
                            <text x="-80" y="0" font-family="Arial" font-size="12" fill="white">Attribution: VISIBLE</text>
                            
                            <!-- Tips setting -->
                            <rect x="-120" y="20" width="240" height="30" fill="rgba(165,140,255,0.1)" stroke="#A58CFF" stroke-width="1" rx="5"/>
                            <circle cx="-100" cy="35" r="5" fill="#56D364"/>
                            <text x="-80" y="40" font-family="Arial" font-size="12" fill="white">Tips: ENABLED</text>
                        </g>
                        
                        <!-- Pixel on screen -->
                        <g transform="translate(1450, 500)" opacity="0.8">
                            <polygon points="0,15 15,0 30,15 15,30" fill="#7DF9FF"/>
                            <circle cx="10" cy="15" r="1.5" fill="white"/>
                            <circle cx="20" cy="15" r="1.5" fill="white"/>
                        </g>
                        
                        <!-- Dialogue bubbles -->
                        <g transform="translate(700, 250)">
                            <!-- Dad's question -->
                            <rect x="-120" y="-40" width="240" height="80" fill="white" stroke="#333" stroke-width="3" rx="20"/>
                            <path d="M-30 40 L-10 35 L0 50 Z" fill="white" stroke="#333" stroke-width="3"/>
                            <text x="0" y="-10" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#333">
                                "How do buyers know"
                            </text>
                            <text x="0" y="15" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#4682B4">
                                "it's YOU?"
                            </text>
                        </g>
                        
                        <g transform="translate(1200, 250)">
                            <!-- Maya's answer -->
                            <rect x="-140" y="-40" width="280" height="80" fill="white" stroke="#333" stroke-width="3" rx="20"/>
                            <path d="M30 40 L50 35 L60 50 Z" fill="white" stroke="#333" stroke-width="3"/>
                            <text x="0" y="-10" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#333">
                                "Content Credentials"
                            </text>
                            <text x="0" y="15" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#FFC857">
                                "+ my spiral!"
                            </text>
                        </g>
                        
                        <!-- Label showing licensing options -->
                        <g transform="translate(960, 800)">
                            <rect x="-200" y="-50" width="400" height="100" fill="rgba(255,255,255,0.95)" stroke="#333" stroke-width="2" rx="10"/>
                            <text x="0" y="-20" font-family="Arial" font-size="14" text-anchor="middle" fill="#333" font-weight="bold">
                                LICENSING OPTIONS:
                            </text>
                            <text x="-100" y="5" font-family="Arial" font-size="12" fill="#FF6B6B">• All Rights Reserved - Prints</text>
                            <text x="-100" y="25" font-family="Arial" font-size="12" fill="#4169E1">• BY-NC - School posters</text>
                            <text x="100" y="5" font-family="Arial" font-size="12" fill="#56D364">• Tips enabled</text>
                            <text x="100" y="25" font-family="Arial" font-size="12" fill="#FFE66D">• QR for online store</text>
                        </g>
                        
                        <!-- Family high-five moment -->
                        <g transform="translate(960, 950)">
                            <!-- Three hands meeting -->
                            <!-- Dad's hand -->
                            <ellipse cx="-100" cy="0" rx="40" ry="55" fill="#8B7355" transform="rotate(-30 -100 0)"/>
                            <!-- Maya's hand -->
                            <ellipse cx="0" cy="-20" rx="35" ry="50" fill="#D9A47A" transform="rotate(0 0 -20)"/>
                            <!-- Mom's hand (implied) -->
                            <ellipse cx="100" cy="0" rx="38" ry="52" fill="#C8A882" transform="rotate(30 100 0)"/>
                            
                            <!-- Impact effect -->
                            <circle cx="0" cy="-10" r="30" fill="#FFE66D" opacity="0.3"/>
                            <circle cx="0" cy="-10" r="20" fill="#FFE66D" opacity="0.5"/>
                            <circle cx="0" cy="-10" r="10" fill="#FFE66D" opacity="0.7"/>
                            
                            <text x="0" y="-60" font-family="'Comic Sans MS', cursive" font-size="20" text-anchor="middle" fill="#333" font-weight="bold">
                                "I'm not hiding."
                            </text>
                            <text x="0" y="-35" font-family="'Comic Sans MS', cursive" font-size="20" text-anchor="middle" fill="#FFC857" font-weight="bold">
                                "I'm SIGNING!"
                            </text>
                        </g>
                    </svg>
                </div>

                <!-- Page narration -->
                <div class="audio-narrator" data-text="Page 9: Business planning at the kitchen table. Dad asks the practical question: 'How do buyers know it's YOU?' Maya shows him - Content Credentials embedded, her spiral signature visible, attribution on every listing. She's choosing her licenses: All Rights Reserved for prints, BY-NC for school use. Tips enabled. QR codes ready. The family high-fives. 'I'm not hiding. I'm SIGNING!'"></div>
            </div>
        `;
    }

    generatePage10() {
        return `
            <div class="enhanced-comic-page page-10">
                <div class="market-scene">
                    <!-- Community fair scene -->
                    <svg viewBox="0 0 1920 1080" class="page-svg cinematic">
                        <defs>
                            <linearGradient id="morningMarket" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1"/>
                                <stop offset="100%" style="stop-color:#98D8E8;stop-opacity:1"/>
                            </linearGradient>
                            
                            <pattern id="grassTexture" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect width="20" height="20" fill="#90EE90"/>
                                <line x1="5" y1="0" x2="5" y2="20" stroke="#7CCD7C" stroke-width="0.5"/>
                                <line x1="10" y1="0" x2="10" y2="20" stroke="#7CCD7C" stroke-width="0.5"/>
                                <line x1="15" y1="0" x2="15" y2="20" stroke="#7CCD7C" stroke-width="0.5"/>
                            </pattern>
                        </defs>

                        <!-- Sky -->
                        <rect width="1920" height="600" fill="url(#morningMarket)"/>
                        
                        <!-- Ground -->
                        <rect x="0" y="600" width="1920" height="480" fill="url(#grassTexture)"/>
                        
                        <!-- Market stalls in background -->
                        <g id="backgroundStalls" opacity="0.7">
                            <!-- Stall 1 -->
                            <rect x="100" y="400" width="200" height="150" fill="#8B4513"/>
                            <polygon points="100,400 200,350 400,350 300,400" fill="#A0522D"/>
                            <rect x="120" y="420" width="160" height="100" fill="#FFE4B5" opacity="0.5"/>
                            
                            <!-- Stall 2 -->
                            <rect x="400" y="420" width="200" height="130" fill="#8B4513"/>
                            <polygon points="400,420 500,370 700,370 600,420" fill="#A0522D"/>
                            <rect x="420" y="440" width="160" height="90" fill="#E6E6FA" opacity="0.5"/>
                            
                            <!-- Stall 3 -->
                            <rect x="1400" y="410" width="200" height="140" fill="#8B4513"/>
                            <polygon points="1400,410 1500,360 1700,360 1600,410" fill="#A0522D"/>
                        </g>
                        
                        <!-- Maya's stall - prominent -->
                        <g id="mayaStall" transform="translate(960, 500)">
                            <!-- Table -->
                            <rect x="-300" y="100" width="600" height="20" fill="#654321"/>
                            <rect x="-280" y="120" width="40" height="150" fill="#4A3C28"/>
                            <rect x="240" y="120" width="40" height="150" fill="#4A3C28"/>
                            
                            <!-- Canopy -->
                            <polygon points="-350,0 0,-100 350,0" fill="#2E86AB" stroke="#1C5A7A" stroke-width="3"/>
                            <polygon points="-350,0 -300,100 300,100 350,0" fill="#2E86AB" opacity="0.8"/>
                            
                            <!-- Banner -->
                            <rect x="-200" y="-50" width="400" height="80" fill="#FFC857" stroke="#333" stroke-width="3" rx="10"/>
                            <text x="0" y="-10" font-family="'Bebas Neue', sans-serif" font-size="36" text-anchor="middle" fill="#333">
                                BRUSH & BYTE
                            </text>
                            <text x="0" y="20" font-family="Arial" font-size="18" text-anchor="middle" fill="#333">
                                By Maya - AI Enhanced, Human Created
                            </text>
                            
                            <!-- Badge icons on banner -->
                            <g transform="translate(-250, -25)">
                                <circle cx="0" cy="0" r="15" fill="white" stroke="#333" stroke-width="2"/>
                                <text x="0" y="5" font-family="Arial" font-size="18" text-anchor="middle" fill="#333">©</text>
                            </g>
                            <g transform="translate(250, -25)">
                                <rect x="-15" y="-15" width="30" height="30" fill="white" stroke="#333" stroke-width="2" rx="5"/>
                                <path d="M-10 -5 L-3 2 L10 -10" stroke="#4169E1" stroke-width="3" fill="none"/>
                            </g>
                            
                            <!-- Prints displayed -->
                            <g id="displayedPrints">
                                <!-- Print 1 -->
                                <rect x="-250" y="40" width="100" height="120" fill="white" stroke="#333" stroke-width="2"/>
                                <rect x="-240" y="50" width="80" height="80" fill="#E6F3FF"/>
                                <circle cx="-200" cy="90" r="15" fill="#FFC857" opacity="0.6"/>
                                <text x="-200" y="145" font-family="Arial" font-size="10" text-anchor="middle" fill="#333">Fox & City</text>
                                
                                <!-- Print 2 -->
                                <rect x="-120" y="40" width="100" height="120" fill="white" stroke="#333" stroke-width="2"/>
                                <rect x="-110" y="50" width="80" height="80" fill="#FFE6CC"/>
                                <polygon points="-70,70 -90,100 -50,100" fill="#A58CFF" opacity="0.6"/>
                                <text x="-70" y="145" font-family="Arial" font-size="10" text-anchor="middle" fill="#333">Kite Dreams</text>
                                
                                <!-- Print 3 -->
                                <rect x="10" y="40" width="100" height="120" fill="white" stroke="#333" stroke-width="2"/>
                                <rect x="20" y="50" width="80" height="80" fill="#E8F5E8"/>
                                <circle cx="60" cy="90" r="20" fill="none" stroke="#6B9080" stroke-width="3"/>
                                <text x="60" y="145" font-family="Arial" font-size="10" text-anchor="middle" fill="#333">Music Trees</text>
                                
                                <!-- Print 4 -->
                                <rect x="140" y="40" width="100" height="120" fill="white" stroke="#333" stroke-width="2"/>
                                <rect x="150" y="50" width="80" height="80" fill="#F4E8D0"/>
                                <path d="M190 90 Q180 70 170 90" fill="none" stroke="#8B7355" stroke-width="2"/>
                                <text x="190" y="145" font-family="Arial" font-size="10" text-anchor="middle" fill="#333">Thread City</text>
                            </g>
                            
                            <!-- Price tags -->
                            <rect x="-250" y="170" width="100" height="30" fill="#FFE66D" stroke="#333" stroke-width="2" rx="5"/>
                            <text x="-200" y="190" font-family="Arial" font-size="16" text-anchor="middle" fill="#333" font-weight="bold">$15</text>
                            
                            <rect x="-120" y="170" width="100" height="30" fill="#FFE66D" stroke="#333" stroke-width="2" rx="5"/>
                            <text x="-70" y="190" font-family="Arial" font-size="16" text-anchor="middle" fill="#333" font-weight="bold">$20</text>
                            
                            <rect x="10" y="170" width="100" height="30" fill="#FFE66D" stroke="#333" stroke-width="2" rx="5"/>
                            <text x="60" y="190" font-family="Arial" font-size="16" text-anchor="middle" fill="#333" font-weight="bold">$15</text>
                            
                            <rect x="140" y="170" width="100" height="30" fill="#FFE66D" stroke="#333" stroke-width="2" rx="5"/>
                            <text x="190" y="190" font-family="Arial" font-size="16" text-anchor="middle" fill="#333" font-weight="bold">$18</text>
                        </g>
                        
                        <!-- Maya at her booth -->
                        <g transform="translate(960, 650)">
                            <!-- Body -->
                            <rect x="-50" y="0" width="100" height="150" fill="#2E86AB"/>
                            <!-- Paint splatters on hoodie -->
                            <circle cx="-20" cy="50" r="5" fill="#FFE66D" opacity="0.7"/>
                            <circle cx="15" cy="70" r="4" fill="#FF6B6B" opacity="0.6"/>
                            <circle cx="-5" cy="90" r="3" fill="#4ECDC4" opacity="0.5"/>
                            
                            <!-- Head - confident -->
                            <circle cx="0" cy="-50" r="40" fill="#D9A47A"/>
                            <!-- Eyes bright -->
                            <ellipse cx="-12" cy="-55" rx="10" ry="12" fill="white"/>
                            <ellipse cx="12" cy="-55" rx="10" ry="12" fill="white"/>
                            <circle cx="-10" cy="-55" r="7" fill="#4B3621"/>
                            <circle cx="14" cy="-55" r="7" fill="#4B3621"/>
                            <circle cx="-8" cy="-57" r="3" fill="white"/>
                            <circle cx="16" cy="-57" r="3" fill="white"/>
                            <!-- Confident smile -->
                            <path d="M-15 -30 Q0 -20 15 -30" fill="none" stroke="#B8766D" stroke-width="3" stroke-linecap="round"/>
                            <!-- Hair neat in bun -->
                            <path d="M-40 -70 Q-45 -85 -30 -90 Q0 -95 30 -90 Q45 -85 40 -70" fill="#2B2B2B"/>
                            <ellipse cx="0" cy="-85" rx="20" ry="15" fill="#2B2B2B"/>
                            
                            <!-- Spiral bracelet visible -->
                            <circle cx="45" cy="80" r="10" fill="none" stroke="#FFC857" stroke-width="2"/>
                        </g>
                        
                        <!-- Customer interaction -->
                        <g transform="translate(700, 650)">
                            <!-- Customer (parent) -->
                            <rect x="-40" y="0" width="80" height="140" fill="#4169E1"/>
                            <circle cx="0" cy="-50" r="35" fill="#C8A882"/>
                            <ellipse cx="-10" cy="-55" rx="7" ry="9" fill="white"/>
                            <ellipse cx="10" cy="-55" rx="7" ry="9" fill="white"/>
                            <circle cx="-10" cy="-55" r="5" fill="#654321"/>
                            <circle cx="10" cy="-55" r="5" fill="#654321"/>
                            <!-- Examining print -->
                            <rect x="50" y="20" width="80" height="100" fill="white" stroke="#333" stroke-width="2" transform="rotate(-10 90 70)"/>
                        </g>
                        
                        <!-- Dialogue exchange -->
                        <g transform="translate(700, 500)">
                            <ellipse cx="0" cy="0" rx="120" ry="50" fill="white" stroke="#333" stroke-width="3"/>
                            <path d="M-30 45 L-10 40 L0 50 Z" fill="white" stroke="#333" stroke-width="3"/>
                            <text x="0" y="-10" font-family="'Comic Sans MS', cursive" font-size="15" text-anchor="middle" fill="#333">
                                "Did AI do this?"
                            </text>
                        </g>
                        
                        <g transform="translate(960, 500)">
                            <rect x="-150" y="-40" width="300" height="80" fill="white" stroke="#333" stroke-width="3" rx="20"/>
                            <path d="M-30 40 L-10 35 L0 50 Z" fill="white" stroke="#333" stroke-width="3"/>
                            <text x="0" y="-10" font-family="'Comic Sans MS', cursive" font-size="15" text-anchor="middle" fill="#333">
                                "I did—WITH AI."
                            </text>
                            <text x="0" y="15" font-family="'Comic Sans MS', cursive" font-size="15" text-anchor="middle" fill="#FFC857">
                                "My name's in the file!"
                            </text>
                        </g>
                        
                        <!-- Print back label detail -->
                        <g transform="translate(1400, 600)">
                            <rect x="-100" y="-80" width="200" height="160" fill="white" stroke="#333" stroke-width="3"/>
                            <rect x="-90" y="-70" width="180" height="140" fill="#F5F5F5"/>
                            <text x="0" y="-40" font-family="Arial" font-size="12" text-anchor="middle" fill="#333" font-weight="bold">
                                CONTENT CREDENTIALS
                            </text>
                            <text x="0" y="-20" font-family="Arial" font-size="11" text-anchor="middle" fill="#333">
                                Created by: Maya
                            </text>
                            <text x="0" y="0" font-family="Arial" font-size="11" text-anchor="middle" fill="#333">
                                Tool: Pixel (AI Assistant)
                            </text>
                            <text x="0" y="20" font-family="Arial" font-size="11" text-anchor="middle" fill="#333">
                                License: All Rights Reserved
                            </text>
                            <rect x="-30" y="35" width="60" height="25" fill="#4169E1" rx="5"/>
                            <text x="0" y="52" font-family="Arial" font-size="10" text-anchor="middle" fill="white">
                                C2PA Verified
                            </text>
                        </g>
                        
                        <!-- Cash register sound effect -->
                        <g transform="translate(1100, 700)">
                            <rect x="-40" y="-30" width="80" height="60" fill="#696969" stroke="#333" stroke-width="2"/>
                            <rect x="-35" y="-25" width="70" height="30" fill="#333"/>
                            <text x="0" y="-5" font-family="'Courier New', monospace" font-size="16" text-anchor="middle" fill="#00FF00">
                                $15.00
                            </text>
                            <text x="0" y="50" font-family="'Comic Sans MS', cursive" font-size="20" text-anchor="middle" fill="#4ECDC4" font-style="italic">
                                *cha-ching*
                            </text>
                        </g>
                        
                        <!-- Other kids watching from nearby -->
                        <g transform="translate(1300, 750)">
                            <circle cx="0" cy="0" r="25" fill="#B8A789"/>
                            <circle cx="40" cy="5" r="25" fill="#D4B5A0"/>
                            <circle cx="80" cy="0" r="25" fill="#C8A882"/>
                            <!-- Interested expressions -->
                            <text x="40" y="-40" font-family="Arial" font-size="12" text-anchor="middle" fill="#666" font-style="italic">
                                "Cool!"
                            </text>
                        </g>
                        
                        <!-- Crowd in background -->
                        <g id="crowd" opacity="0.5">
                            <ellipse cx="200" cy="700" rx="30" ry="50" fill="#8B7355"/>
                            <ellipse cx="250" cy="710" rx="30" ry="50" fill="#C8A882"/>
                            <ellipse cx="300" cy="700" rx="30" ry="50" fill="#B8A789"/>
                            <ellipse cx="1600" cy="700" rx="30" ry="50" fill="#D4B5A0"/>
                            <ellipse cx="1650" cy="710" rx="30" ry="50" fill="#8B7355"/>
                            <ellipse cx="1700" cy="705" rx="30" ry="50" fill="#C8A882"/>
                        </g>
                        
                        <!-- Success indicator -->
                        <g transform="translate(960, 350)">
                            <circle cx="0" cy="0" r="40" fill="#56D364" opacity="0.3"/>
                            <circle cx="0" cy="0" r="30" fill="#56D364" opacity="0.5"/>
                            <path d="M-15 0 L-5 10 L15 -10" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
                        </g>
                    </svg>
                </div>

                <!-- Page narration -->
                <div class="audio-narrator" data-text="Page 10: Market day triumph. Maya's booth stands proud: 'BRUSH & BYTE - By Maya - AI Enhanced, Human Created.' A parent asks the inevitable question: 'Did AI do this?' Maya's confident response: 'I did—WITH AI. My name's in the file!' The cash register sings. Other kids watch with interest. Each print carries its credentials on the back. Success isn't just the sale—it's the transparency, the pride, the proof that human and AI can create together without theft, only collaboration."></div>
            </div>
        `;
    }
}

// Export the complete pages
if (typeof window !== 'undefined') {
    window.Pages6to10 = Pages6to10;
    const pages = new Pages6to10();
    
    // Add to enhanced novel
    if (window.enhancedNovel) {
        window.enhancedNovel.generatePage6 = pages.generatePage6.bind(pages);
        window.enhancedNovel.generatePage7 = pages.generatePage7.bind(pages);
        window.enhancedNovel.generatePage8 = pages.generatePage8.bind(pages);
        window.enhancedNovel.generatePage9 = pages.generatePage9.bind(pages);
        window.enhancedNovel.generatePage10 = pages.generatePage10.bind(pages);
    }
}