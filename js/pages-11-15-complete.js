// Pages 11-15 COMPLETE with FULL Cinematic Detail
// No more placeholders - finishing Maya's complete journey

class Pages11to15 {
    generatePage11() {
        return `
            <div class="enhanced-comic-page page-11">
                <div class="panel-layout challenge-confrontation">
                    <!-- The Challenge Scene -->
                    <svg viewBox="0 0 1920 1080" class="page-svg cinematic">
                        <defs>
                            <radialGradient id="tensionGrad" cx="50%" cy="50%">
                                <stop offset="0%" style="stop-color:#FF6B6B;stop-opacity:0.3"/>
                                <stop offset="100%" style="stop-color:#8B0000;stop-opacity:0.1"/>
                            </radialGradient>
                        </defs>

                        <!-- Market background with tension -->
                        <rect width="1920" height="1080" fill="#87CEEB"/>
                        <rect width="1920" height="1080" fill="url(#tensionGrad)"/>
                        
                        <!-- Ground -->
                        <rect x="0" y="700" width="1920" height="380" fill="#90EE90"/>
                        
                        <!-- Challenger kid approaching -->
                        <g transform="translate(600, 600)">
                            <!-- Body - aggressive stance -->
                            <rect x="-50" y="0" width="100" height="150" fill="#FF6347"/>
                            <!-- Head -->
                            <circle cx="0" cy="-50" r="40" fill="#B8A789"/>
                            <!-- Smirking expression -->
                            <ellipse cx="-12" cy="-55" rx="8" ry="10" fill="white"/>
                            <ellipse cx="12" cy="-55" rx="8" ry="10" fill="white"/>
                            <circle cx="-12" cy="-53" r="5" fill="#333"/>
                            <circle cx="12" cy="-53" r="5" fill="#333"/>
                            <path d="M-20 -35 Q0 -30 20 -40" fill="none" stroke="#8B6F47" stroke-width="2"/>
                            <!-- Spiky hair -->
                            <path d="M-40 -70 L-35 -85 L-30 -70" fill="#4B0082"/>
                            <path d="M-20 -75 L-15 -90 L-10 -75" fill="#4B0082"/>
                            <path d="M0 -75 L5 -90 L10 -75" fill="#4B0082"/>
                            <path d="M20 -75 L25 -90 L30 -75" fill="#4B0082"/>
                            <path d="M35 -70 L40 -85 L45 -70" fill="#4B0082"/>
                            
                            <!-- Holding phone -->
                            <rect x="50" y="20" width="60" height="100" fill="#1C1C1E" rx="5"/>
                            <rect x="55" y="30" width="50" height="80" fill="white"/>
                        </g>
                        
                        <!-- Maya at her booth - defensive but strong -->
                        <g transform="translate(1200, 600)">
                            <!-- Body tensed -->
                            <rect x="-50" y="0" width="100" height="150" fill="#2E86AB"/>
                            <!-- Head - worried but determined -->
                            <circle cx="0" cy="-50" r="40" fill="#D9A47A"/>
                            <!-- Eyes showing concern -->
                            <ellipse cx="-12" cy="-55" rx="10" ry="12" fill="white"/>
                            <ellipse cx="12" cy="-55" rx="10" ry="12" fill="white"/>
                            <circle cx="-10" cy="-53" r="7" fill="#4B3621"/>
                            <circle cx="14" cy="-53" r="7" fill="#4B3621"/>
                            <!-- Eyebrows furrowed -->
                            <path d="M-25 -70 Q-12 -75 0 -70" fill="none" stroke="#2B2B2B" stroke-width="3"/>
                            <path d="M0 -70 Q12 -75 25 -70" fill="none" stroke="#2B2B2B" stroke-width="3"/>
                            <!-- Mouth - determined line -->
                            <line x1="-10" y1="-30" x2="10" y2="-30" stroke="#B8766D" stroke-width="2"/>
                            <!-- Hair -->
                            <path d="M-40 -70 Q-45 -85 -30 -90 Q0 -95 30 -90 Q45 -85 40 -70" fill="#2B2B2B"/>
                            
                            <!-- Hands clenched -->
                            <ellipse cx="-45" cy="80" rx="20" ry="25" fill="#D9A47A"/>
                            <ellipse cx="45" cy="80" rx="20" ry="25" fill="#D9A47A"/>
                        </g>
                        
                        <!-- Phone screen showing copied spiral -->
                        <g transform="translate(700, 400)">
                            <rect x="-100" y="-150" width="200" height="300" fill="#1C1C1E" stroke="#333" stroke-width="4" rx="10"/>
                            <rect x="-90" y="-130" width="180" height="260" fill="white"/>
                            
                            <!-- Crude AI copy of spiral -->
                            <circle cx="0" cy="-30" r="40" fill="none" stroke="#FFB347" stroke-width="5" stroke-dasharray="10,5"/>
                            <path d="M0 -70 Q30 -30 0 10 Q-30 -30 0 -70" fill="none" stroke="#FFB347" stroke-width="4" opacity="0.7"/>
                            
                            <!-- Text on phone -->
                            <text x="0" y="80" font-family="Arial" font-size="14" text-anchor="middle" fill="#333">
                                "AI copied your spiral"
                            </text>
                            <text x="0" y="100" font-family="Arial" font-size="12" text-anchor="middle" fill="#666">
                                "See? Same thing!"
                            </text>
                        </g>
                        
                        <!-- Dialogue confrontation -->
                        <g transform="translate(600, 450)">
                            <rect x="-150" y="-40" width="300" height="80" fill="white" stroke="#FF6B6B" stroke-width="3" rx="20"/>
                            <path d="M30 40 L50 35 L60 50 Z" fill="white" stroke="#FF6B6B" stroke-width="3"/>
                            <text x="0" y="-10" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#333">
                                "I asked a chatbot to copy"
                            </text>
                            <text x="0" y="15" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#FF6B6B">
                                "your spiral thing. Look!"
                            </text>
                        </g>
                        
                        <g transform="translate(1200, 450)">
                            <ellipse cx="0" cy="0" rx="100" ry="40" fill="white" stroke="#333" stroke-width="3"/>
                            <path d="M-30 35 L-10 30 L0 40 Z" fill="white" stroke="#333" stroke-width="3"/>
                            <text x="0" y="0" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#333">
                                "It's NOT the same."
                            </text>
                        </g>
                        
                        <!-- Pixel appearing beside Maya -->
                        <g transform="translate(1350, 500)" opacity="0.8">
                            <polygon points="0,30 30,0 60,30 30,60" fill="#7DF9FF" filter="url(#pixelGlow)"/>
                            <circle cx="20" cy="30" r="3" fill="white"/>
                            <circle cx="40" cy="30" r="3" fill="white"/>
                            <path d="M20 40 Q30 45 40 40" fill="none" stroke="white" stroke-width="2"/>
                        </g>
                        
                        <!-- Pixel's whisper to Maya -->
                        <g transform="translate(1350, 420)">
                            <rect x="-80" y="-25" width="160" height="50" fill="white" stroke="#7DF9FF" stroke-width="2" rx="25" stroke-dasharray="5,3"/>
                            <text x="0" y="-5" font-family="'SF Mono', monospace" font-size="13" text-anchor="middle" fill="#333">
                                "Want to show what"
                            </text>
                            <text x="0" y="15" font-family="'SF Mono', monospace" font-size="13" text-anchor="middle" fill="#7DF9FF">
                                "only YOU can do?"
                            </text>
                        </g>
                        
                        <!-- Maya's realization - eyes lighting up -->
                        <g transform="translate(1200, 480)">
                            <circle cx="-10" cy="0" r="3" fill="white"/>
                            <circle cx="14" cy="0" r="3" fill="white"/>
                            <text x="0" y="-20" font-family="Arial" font-size="10" text-anchor="middle" fill="#666" font-style="italic">
                                *spark*
                            </text>
                        </g>
                        
                        <!-- Crowd gathering -->
                        <g id="gatheringCrowd" opacity="0.7">
                            <!-- Left side crowd -->
                            <ellipse cx="300" cy="700" rx="40" ry="60" fill="#8B7355"/>
                            <ellipse cx="360" cy="710" rx="40" ry="60" fill="#C8A882"/>
                            <ellipse cx="420" cy="700" rx="40" ry="60" fill="#B8A789"/>
                            <ellipse cx="480" cy="705" rx="40" ry="60" fill="#D4B5A0"/>
                            
                            <!-- Right side crowd -->
                            <ellipse cx="1500" cy="700" rx="40" ry="60" fill="#C8A882"/>
                            <ellipse cx="1560" cy="710" rx="40" ry="60" fill="#8B7355"/>
                            <ellipse cx="1620" cy="700" rx="40" ry="60" fill="#B8A789"/>
                            
                            <!-- Curious expressions -->
                            <text x="400" y="650" font-family="Arial" font-size="12" text-anchor="middle" fill="#666">
                                "What's happening?"
                            </text>
                            <text x="1550" y="650" font-family="Arial" font-size="12" text-anchor="middle" fill="#666">
                                "Let's watch!"
                            </text>
                        </g>
                        
                        <!-- Visual comparison -->
                        <g transform="translate(960, 800)">
                            <!-- Real spiral -->
                            <g transform="translate(-150, 0)">
                                <text x="0" y="-80" font-family="Arial" font-size="14" text-anchor="middle" fill="#333" font-weight="bold">
                                    Maya's Real Spiral
                                </text>
                                <circle cx="0" cy="0" r="30" fill="none" stroke="#FFC857" stroke-width="3"/>
                                <path d="M0 -30 Q30 0 0 30 Q-30 0 0 -30" fill="none" stroke="#FFD700" stroke-width="2"/>
                                <!-- Unique details -->
                                <circle cx="10" cy="-10" r="2" fill="#FFC857"/>
                                <circle cx="-8" cy="12" r="1.5" fill="#FFD700"/>
                                <path d="M-15 -15 Q-10 -20 -5 -15" fill="none" stroke="#FFC857" stroke-width="1"/>
                            </g>
                            
                            <!-- VS -->
                            <text x="0" y="5" font-family="Arial Black" font-size="20" text-anchor="middle" fill="#FF6B6B">
                                VS
                            </text>
                            
                            <!-- Copied spiral -->
                            <g transform="translate(150, 0)">
                                <text x="0" y="-80" font-family="Arial" font-size="14" text-anchor="middle" fill="#333" font-weight="bold">
                                    AI Copy Attempt
                                </text>
                                <circle cx="0" cy="0" r="30" fill="none" stroke="#FFB347" stroke-width="5" stroke-dasharray="10,5" opacity="0.8"/>
                                <path d="M0 -30 Q25 0 0 30 Q-25 0 0 -30" fill="none" stroke="#FFB347" stroke-width="4" opacity="0.6"/>
                                <!-- Missing soul -->
                                <text x="0" y="50" font-family="Arial" font-size="10" text-anchor="middle" fill="#999">
                                    (no soul, no story)
                                </text>
                            </g>
                        </g>
                        
                        <!-- Maya's determination building -->
                        <g transform="translate(1200, 900)">
                            <ellipse cx="0" cy="0" rx="120" ry="50" fill="white" stroke="#333" stroke-width="3"/>
                            <text x="0" y="-10" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#333">
                                "...Yes."
                            </text>
                            <text x="0" y="15" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#4169E1" font-weight="bold">
                                "I'll show you."
                            </text>
                        </g>
                    </svg>
                </div>

                <!-- Page narration -->
                <div class="audio-narrator" data-text="Page 11: The challenge arrives. A kid claims he got AI to copy Maya's spiral. 'See? Same thing!' But Maya sees the difference immediately - the copy has no soul, no story, no hand behind it. Pixel whispers: 'Want to show what only YOU can do?' A crowd gathers. This is Maya's moment to prove that human creativity partnered with AI is irreplaceable. 'I'll show you.'"></div>
            </div>
        `;
    }

    generatePage12() {
        return `
            <div class="enhanced-comic-page page-12">
                <div class="proving-authenticity">
                    <!-- Maya demonstrates live -->
                    <svg viewBox="0 0 1920 1080" class="page-svg cinematic">
                        <defs>
                            <radialGradient id="spotlightGrad" cx="50%" cy="40%">
                                <stop offset="0%" style="stop-color:#FFFFFF;stop-opacity:0.8"/>
                                <stop offset="50%" style="stop-color:#FFE66D;stop-opacity:0.4"/>
                                <stop offset="100%" style="stop-color:#000000;stop-opacity:0.2"/>
                            </radialGradient>
                            
                            <filter id="liveGlow">
                                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>

                        <!-- Dramatic lighting -->
                        <rect width="1920" height="1080" fill="#2C1810"/>
                        <ellipse cx="960" cy="540" rx="600" ry="400" fill="url(#spotlightGrad)"/>
                        
                        <!-- Maya's booth as stage -->
                        <rect x="600" y="600" width="720" height="20" fill="#654321"/>
                        <rect x="650" y="620" width="40" height="150" fill="#4A3C28"/>
                        <rect x="1230" y="620" width="40" height="150" fill="#4A3C28"/>
                        
                        <!-- Large canvas/tablet for live drawing -->
                        <rect x="750" y="200" width="420" height="350" fill="white" stroke="#333" stroke-width="4" rx="10"/>
                        <rect x="770" y="220" width="380" height="310" fill="#FFFEF7"/>
                        
                        <!-- Maya drawing live -->
                        <g transform="translate(960, 450)">
                            <!-- Body in motion -->
                            <rect x="-50" y="0" width="100" height="150" fill="#2E86AB"/>
                            <!-- Right arm extended drawing -->
                            <ellipse cx="60" cy="40" rx="25" ry="60" fill="#D9A47A" transform="rotate(30 60 40)"/>
                            <!-- Hand with pencil -->
                            <ellipse cx="90" cy="20" rx="20" ry="30" fill="#D9A47A" transform="rotate(45 90 20)"/>
                            <rect x="105" y="5" width="8" height="60" fill="#FFC857" transform="rotate(45 109 35)"/>
                            <polygon points="113,2 117,0 115,8" fill="#333" transform="rotate(45 115 4)"/>
                            
                            <!-- Head - focused concentration -->
                            <circle cx="0" cy="-50" r="40" fill="#D9A47A"/>
                            <!-- Eyes focused on work -->
                            <ellipse cx="-8" cy="-55" rx="8" ry="10" fill="white"/>
                            <ellipse cx="15" cy="-52" rx="8" ry="10" fill="white"/>
                            <circle cx="-6" cy="-53" r="5" fill="#4B3621"/>
                            <circle cx="17" cy="-50" r="5" fill="#4B3621"/>
                            <!-- Concentrated expression -->
                            <path d="M-5 -30 L5 -30" stroke="#B8766D" stroke-width="2"/>
                            <!-- Tongue out in concentration -->
                            <ellipse cx="12" cy="-28" rx="5" ry="3" fill="#FF69B4" opacity="0.6"/>
                            
                            <!-- Hair with movement -->
                            <path d="M-40 -70 Q-45 -85 -30 -90 Q0 -95 30 -90 Q45 -85 40 -70" fill="#2B2B2B"/>
                            <path d="M-35 -65 Q-38 -75 -32 -70" fill="none" stroke="#2B2B2B" stroke-width="2"/>
                            <path d="M35 -65 Q38 -75 32 -70" fill="none" stroke="#2B2B2B" stroke-width="2"/>
                        </g>
                        
                        <!-- The live drawing appearing -->
                        <g transform="translate(960, 370)">
                            <!-- Dynamic spiral being drawn -->
                            <path d="M0 -60 Q40 -40 50 0" fill="none" stroke="#333" stroke-width="3" stroke-linecap="round">
                                <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="2s" repeatCount="indefinite"/>
                            </path>
                            <path d="M50 0 Q40 40 0 60" fill="none" stroke="#333" stroke-width="3" stroke-linecap="round">
                                <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                            </path>
                            <path d="M0 60 Q-40 40 -50 0" fill="none" stroke="#333" stroke-width="3" stroke-linecap="round">
                                <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="2s" begin="1s" repeatCount="indefinite"/>
                            </path>
                            <path d="M-50 0 Q-40 -40 0 -60" fill="none" stroke="#333" stroke-width="3" stroke-linecap="round">
                                <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="2s" begin="1.5s" repeatCount="indefinite"/>
                            </path>
                            
                            <!-- Spiral transforming into fox -->
                            <g opacity="0.8">
                                <polygon points="60,0 80,30 100,0" fill="#E9724C" opacity="0">
                                    <animate attributeName="opacity" values="0;0.8" dur="1s" begin="2s" fill="freeze"/>
                                </polygon>
                                <!-- Fox features emerging -->
                                <circle cx="70" cy="10" r="2" fill="white" opacity="0">
                                    <animate attributeName="opacity" values="0;1" dur="0.5s" begin="2.5s" fill="freeze"/>
                                </circle>
                                <circle cx="90" cy="10" r="2" fill="white" opacity="0">
                                    <animate attributeName="opacity" values="0;1" dur="0.5s" begin="2.5s" fill="freeze"/>
                                </circle>
                            </g>
                            
                            <!-- Transforming into city -->
                            <g opacity="0.8">
                                <rect x="-80" y="40" width="20" height="40" fill="white" stroke="#999" stroke-width="1" opacity="0">
                                    <animate attributeName="opacity" values="0;0.8" dur="1s" begin="3s" fill="freeze"/>
                                </rect>
                                <rect x="-50" y="30" width="20" height="50" fill="white" stroke="#999" stroke-width="1" opacity="0">
                                    <animate attributeName="opacity" values="0;0.8" dur="1s" begin="3.2s" fill="freeze"/>
                                </rect>
                                <rect x="-20" y="35" width="20" height="45" fill="white" stroke="#999" stroke-width="1" opacity="0">
                                    <animate attributeName="opacity" values="0;0.8" dur="1s" begin="3.4s" fill="freeze"/>
                                </rect>
                            </g>
                        </g>
                        
                        <!-- Sound effects of drawing -->
                        <text x="850" y="350" font-family="'Comic Sans MS', cursive" font-size="16" fill="#666" font-style="italic" opacity="0.8">
                            *skritch*
                        </text>
                        <text x="1070" y="380" font-family="'Comic Sans MS', cursive" font-size="16" fill="#666" font-style="italic" opacity="0.8">
                            *skritch*
                        </text>
                        <text x="900" y="420" font-family="'Comic Sans MS', cursive" font-size="16" fill="#666" font-style="italic" opacity="0.8">
                            *scratch*
                        </text>
                        
                        <!-- Pixel enhancing in real-time -->
                        <g transform="translate(1200, 350)">
                            <polygon points="0,30 30,0 60,30 30,60" fill="#7DF9FF" opacity="0.7" filter="url(#liveGlow)"/>
                            <circle cx="20" cy="30" r="3" fill="white"/>
                            <circle cx="40" cy="30" r="3" fill="white"/>
                            
                            <!-- Light beams to drawing -->
                            <line x1="0" y1="30" x2="-100" y2="50" stroke="#7DF9FF" stroke-width="2" opacity="0.5">
                                <animate attributeName="opacity" values="0.5;0.2;0.5" dur="1s" repeatCount="indefinite"/>
                            </line>
                            <line x1="30" y1="30" x2="-70" y2="20" stroke="#A58CFF" stroke-width="2" opacity="0.5">
                                <animate attributeName="opacity" values="0.5;0.2;0.5" dur="1.2s" repeatCount="indefinite"/>
                            </line>
                            <line x1="60" y1="30" x2="-40" y2="80" stroke="#FFE66D" stroke-width="2" opacity="0.5">
                                <animate attributeName="opacity" values="0.5;0.2;0.5" dur="0.8s" repeatCount="indefinite"/>
                            </line>
                        </g>
                        
                        <!-- Dialogue during creation -->
                        <g transform="translate(960, 250)">
                            <rect x="-150" y="-40" width="300" height="80" fill="white" stroke="#333" stroke-width="3" rx="20"/>
                            <text x="0" y="-10" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#333">
                                "My spiral becomes a comet..."
                            </text>
                            <text x="0" y="15" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#FFC857">
                                "then a fox tail..."
                            </text>
                        </g>
                        
                        <g transform="translate(1200, 280)">
                            <rect x="-100" y="-30" width="200" height="60" fill="white" stroke="#7DF9FF" stroke-width="3" rx="30"/>
                            <text x="0" y="-5" font-family="'SF Mono', monospace" font-size="14" text-anchor="middle" fill="#333">
                                "Adding depth at tail..."
                            </text>
                            <text x="0" y="15" font-family="'SF Mono', monospace" font-size="14" text-anchor="middle" fill="#7DF9FF">
                                "Keeping YOUR lines."
                            </text>
                        </g>
                        
                        <!-- Crowd reactions -->
                        <g id="crowdAmazed">
                            <!-- Left crowd -->
                            <g transform="translate(400, 700)">
                                <ellipse cx="0" cy="0" rx="40" ry="60" fill="#8B7355"/>
                                <ellipse cx="-8" cy="-30" rx="6" ry="8" fill="white"/>
                                <ellipse cx="8" cy="-30" rx="6" ry="8" fill="white"/>
                                <ellipse cx="0" cy="-10" rx="8" ry="6" fill="#8B6F47"/>
                                <text x="0" y="-70" font-family="Arial" font-size="14" text-anchor="middle" fill="#333">
                                    "Whoa!"
                                </text>
                            </g>
                            
                            <g transform="translate(480, 710)">
                                <ellipse cx="0" cy="0" rx="40" ry="60" fill="#C8A882"/>
                                <circle cx="-8" cy="-30" r="5" fill="white"/>
                                <circle cx="8" cy="-30" r="5" fill="white"/>
                                <circle cx="0" cy="-10" r="6" fill="#B8766D"/>
                                <text x="0" y="-70" font-family="Arial" font-size="12" text-anchor="middle" fill="#333">
                                    "Amazing!"
                                </text>
                            </g>
                            
                            <!-- Right crowd -->
                            <g transform="translate(1500, 700)">
                                <ellipse cx="0" cy="0" rx="40" ry="60" fill="#B8A789"/>
                                <ellipse cx="-8" cy="-30" rx="7" ry="9" fill="white"/>
                                <ellipse cx="8" cy="-30" rx="7" ry="9" fill="white"/>
                                <path d="M-10 -10 Q0 -5 10 -10" fill="none" stroke="#8B6F47" stroke-width="2"/>
                                <text x="0" y="-70" font-family="Arial" font-size="14" text-anchor="middle" fill="#333">
                                    "She's creating!"
                                </text>
                            </g>
                        </g>
                        
                        <!-- The challenger watching, realizing -->
                        <g transform="translate(600, 700)">
                            <!-- Body shrinking -->
                            <rect x="-40" y="0" width="80" height="140" fill="#FF6347" opacity="0.8"/>
                            <!-- Head down -->
                            <circle cx="0" cy="-40" r="35" fill="#B8A789"/>
                            <!-- Eyes looking at ground -->
                            <ellipse cx="-10" cy="-40" rx="7" ry="5" fill="white"/>
                            <ellipse cx="10" cy="-40" rx="7" ry="5" fill="white"/>
                            <circle cx="-10" cy="-38" r="4" fill="#333"/>
                            <circle cx="10" cy="-38" r="4" fill="#333"/>
                            <!-- Sheepish expression -->
                            <path d="M-15 -25 Q0 -20 15 -25" fill="none" stroke="#8B6F47" stroke-width="2"/>
                        </g>
                        
                        <!-- Final artwork reveal -->
                        <g transform="translate(960, 900)">
                            <rect x="-200" y="-50" width="400" height="100" fill="rgba(255,255,255,0.95)" stroke="#FFD700" stroke-width="3" rx="10"/>
                            <text x="0" y="-20" font-family="'Georgia', serif" font-size="18" text-anchor="middle" fill="#333" font-weight="bold">
                                "This is my voice."
                            </text>
                            <text x="0" y="5" font-family="'Georgia', serif" font-size="18" text-anchor="middle" fill="#7DF9FF">
                                "AI is my microphone."
                            </text>
                            <text x="0" y="30" font-family="'Georgia', serif" font-size="16" text-anchor="middle" fill="#666" font-style="italic">
                                "Together, we sing louder."
                            </text>
                        </g>
                    </svg>
                </div>

                <!-- Page narration -->
                <div class="audio-narrator" data-text="Page 12: The proof unfolds live. Maya draws with fierce concentration - her spiral becomes a comet, transforms into a fox tail, flows into a paper city skyline. Pixel enhances in real-time, adding depth while preserving her uneven, human lines. The crowd gasps. The challenger's smirk fades. This isn't copying - it's collaboration. 'This is my voice. AI is my microphone. Together, we sing louder.'"></div>
            </div>
        `;
    }

    generatePage13() {
        return `
            <div class="enhanced-comic-page page-13">
                <div class="teaching-moment">
                    <!-- Maya becomes the teacher -->
                    <svg viewBox="0 0 1920 1080" class="page-svg cinematic">
                        <defs>
                            <linearGradient id="wisdomLight" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#FFE66D;stop-opacity:0.3"/>
                                <stop offset="50%" style="stop-color:#7DF9FF;stop-opacity:0.2"/>
                                <stop offset="100%" style="stop-color:#A58CFF;stop-opacity:0.1"/>
                            </linearGradient>
                        </defs>

                        <!-- Warm teaching environment -->
                        <rect width="1920" height="1080" fill="#FAFAF9"/>
                        <rect width="1920" height="1080" fill="url(#wisdomLight)"/>
                        
                        <!-- Maya's booth transformed into teaching space -->
                        <rect x="400" y="700" width="1120" height="30" fill="#8B4513"/>
                        
                        <!-- Whiteboard/Large display -->
                        <rect x="600" y="200" width="720" height="400" fill="white" stroke="#333" stroke-width="4" rx="10"/>
                        <rect x="620" y="220" width="680" height="360" fill="#FAFAFA"/>
                        
                        <!-- The Three Rules displayed -->
                        <g transform="translate(960, 400)">
                            <text x="0" y="-150" font-family="'Bebas Neue', sans-serif" font-size="48" text-anchor="middle" fill="#333">
                                THE THREE RULES
                            </text>
                            
                            <!-- Rule 1: CONSENT -->
                            <g transform="translate(-250, -50)">
                                <circle cx="0" cy="0" r="60" fill="#4ECDC4" opacity="0.2"/>
                                <circle cx="0" cy="0" r="50" fill="none" stroke="#4ECDC4" stroke-width="4"/>
                                <path d="M-25 0 L-10 15 L25 -20" stroke="#4ECDC4" stroke-width="6" fill="none" stroke-linecap="round"/>
                                <text x="0" y="90" font-family="Arial Black" font-size="24" text-anchor="middle" fill="#4ECDC4">
                                    CONSENT
                                </text>
                                <text x="0" y="115" font-family="Arial" font-size="14" text-anchor="middle" fill="#666">
                                    You choose what to share
                                </text>
                            </g>
                            
                            <!-- Rule 2: CREDIT -->
                            <g transform="translate(0, -50)">
                                <rect x="-60" y="-60" width="120" height="120" fill="#FFE66D" opacity="0.2" rx="20"/>
                                <rect x="-50" y="-50" width="100" height="100" fill="none" stroke="#FFE66D" stroke-width="4" rx="15"/>
                                <text x="0" y="10" font-family="Arial" font-size="72" text-anchor="middle" fill="#FFE66D">©</text>
                                <text x="0" y="90" font-family="Arial Black" font-size="24" text-anchor="middle" fill="#FFE66D">
                                    CREDIT
                                </text>
                                <text x="0" y="115" font-family="Arial" font-size="14" text-anchor="middle" fill="#666">
                                    Your name stays yours
                                </text>
                            </g>
                            
                            <!-- Rule 3: CREATE -->
                            <g transform="translate(250, -50)">
                                <polygon points="0,-60 52,30 -52,30" fill="#A58CFF" opacity="0.2"/>
                                <polygon points="0,-50 42,25 -42,25" fill="none" stroke="#A58CFF" stroke-width="4"/>
                                <circle cx="0" cy="-10" r="5" fill="#A58CFF"/>
                                <text x="0" y="90" font-family="Arial Black" font-size="24" text-anchor="middle" fill="#A58CFF">
                                    CREATE
                                </text>
                                <text x="0" y="115" font-family="Arial" font-size="14" text-anchor="middle" fill="#666">
                                    Together, not replaced
                                </text>
                            </g>
                        </g>
                        
                        <!-- Maya teaching -->
                        <g transform="translate(960, 650)">
                            <!-- Body animated, gesturing -->
                            <rect x="-50" y="0" width="100" height="150" fill="#2E86AB"/>
                            <!-- Left arm pointing -->
                            <ellipse cx="-70" cy="50" rx="20" ry="60" fill="#D9A47A" transform="rotate(-45 -70 50)"/>
                            <ellipse cx="-100" cy="20" rx="15" ry="25" fill="#D9A47A" transform="rotate(-45 -100 20)"/>
                            <!-- Right arm gesturing -->
                            <ellipse cx="70" cy="50" rx="20" ry="60" fill="#D9A47A" transform="rotate(30 70 50)"/>
                            
                            <!-- Head - confident teacher -->
                            <circle cx="0" cy="-50" r="40" fill="#D9A47A"/>
                            <!-- Eyes bright, engaged -->
                            <ellipse cx="-12" cy="-55" rx="10" ry="12" fill="white"/>
                            <ellipse cx="12" cy="-55" rx="10" ry="12" fill="white"/>
                            <circle cx="-10" cy="-55" r="7" fill="#4B3621"/>
                            <circle cx="14" cy="-55" r="7" fill="#4B3621"/>
                            <!-- Sparkles in eyes -->
                            <circle cx="-8" cy="-57" r="2" fill="white"/>
                            <circle cx="16" cy="-57" r="2" fill="white"/>
                            <circle cx="-12" cy="-52" r="1" fill="white"/>
                            <circle cx="12" cy="-52" r="1" fill="white"/>
                            <!-- Teaching smile -->
                            <path d="M-18 -30 Q0 -20 18 -30" fill="none" stroke="#B8766D" stroke-width="3" stroke-linecap="round"/>
                            <!-- Hair pulled back neatly -->
                            <path d="M-40 -70 Q-45 -85 -30 -90 Q0 -95 30 -90 Q45 -85 40 -70" fill="#2B2B2B"/>
                            <ellipse cx="0" cy="-85" rx="25" ry="18" fill="#2B2B2B"/>
                            
                            <!-- Author badge worn proudly -->
                            <rect x="-30" y="20" width="60" height="25" fill="#FFE66D" stroke="#333" stroke-width="2" rx="12"/>
                            <text x="0" y="37" font-family="Arial" font-size="14" text-anchor="middle" fill="#333" font-weight="bold">
                                AUTHOR
                            </text>
                        </g>
                        
                        <!-- Audience of children -->
                        <g id="studentAudience">
                            <!-- Row 1 - closest -->
                            <g transform="translate(600, 800)">
                                <!-- Student 1 -->
                                <ellipse cx="0" cy="0" rx="35" ry="50" fill="#B8A789"/>
                                <circle cx="0" cy="-60" r="30" fill="#B8A789"/>
                                <ellipse cx="-8" cy="-65" rx="6" ry="8" fill="white"/>
                                <ellipse cx="8" cy="-65" rx="6" ry="8" fill="white"/>
                                <circle cx="-8" cy="-65" r="4" fill="#333"/>
                                <circle cx="8" cy="-65" r="4" fill="#333"/>
                                <!-- Taking notes -->
                                <rect x="-20" y="20" width="40" height="50" fill="white" stroke="#333" stroke-width="1"/>
                                <line x1="-15" y1="30" x2="15" y2="30" stroke="#999" stroke-width="1"/>
                                <line x1="-15" y1="40" x2="10" y2="40" stroke="#999" stroke-width="1"/>
                            </g>
                            
                            <g transform="translate(750, 810)">
                                <!-- Student 2 -->
                                <ellipse cx="0" cy="0" rx="35" ry="50" fill="#C8A882"/>
                                <circle cx="0" cy="-60" r="30" fill="#C8A882"/>
                                <!-- Beanie -->
                                <path d="M-30 -75 Q-30 -85 0 -88 Q30 -85 30 -75" fill="#FF69B4"/>
                                <!-- Raised hand -->
                                <ellipse cx="30" cy="-80" rx="15" ry="20" fill="#C8A882" transform="rotate(-30 30 -80)"/>
                            </g>
                            
                            <g transform="translate(900, 800)">
                                <!-- Student 3 - the former challenger -->
                                <ellipse cx="0" cy="0" rx="35" ry="50" fill="#FF6347" opacity="0.8"/>
                                <circle cx="0" cy="-60" r="30" fill="#B8A789"/>
                                <!-- Now interested -->
                                <ellipse cx="-8" cy="-65" rx="7" ry="9" fill="white"/>
                                <ellipse cx="8" cy="-65" rx="7" ry="9" fill="white"/>
                                <circle cx="-8" cy="-63" r="5" fill="#333"/>
                                <circle cx="8" cy="-63" r="5" fill="#333"/>
                                <!-- Slight smile -->
                                <path d="M-10 -50 Q0 -45 10 -50" fill="none" stroke="#8B6F47" stroke-width="2"/>
                            </g>
                            
                            <g transform="translate(1050, 820)">
                                <!-- Student 4 -->
                                <ellipse cx="0" cy="0" rx="35" ry="50" fill="#4169E1"/>
                                <circle cx="0" cy="-60" r="30" fill="#D4B5A0"/>
                                <!-- Glasses -->
                                <circle cx="-10" cy="-65" r="10" fill="none" stroke="#333" stroke-width="2"/>
                                <circle cx="10" cy="-65" r="10" fill="none" stroke="#333" stroke-width="2"/>
                                <line x1="0" y1="-65" x2="0" y2="-65" stroke="#333" stroke-width="2"/>
                            </g>
                            
                            <g transform="translate(1200, 810)">
                                <!-- Student 5 -->
                                <ellipse cx="0" cy="0" rx="35" ry="50" fill="#90EE90"/>
                                <circle cx="0" cy="-60" r="30" fill="#8B7355"/>
                                <!-- Curly hair -->
                                <circle cx="-20" cy="-80" r="8" fill="#654321"/>
                                <circle cx="-10" cy="-85" r="8" fill="#654321"/>
                                <circle cx="0" cy="-87" r="8" fill="#654321"/>
                                <circle cx="10" cy="-85" r="8" fill="#654321"/>
                                <circle cx="20" cy="-80" r="8" fill="#654321"/>
                            </g>
                            
                            <!-- Row 2 - parents in back -->
                            <g transform="translate(700, 900)" opacity="0.8">
                                <ellipse cx="0" cy="0" rx="40" ry="60" fill="#8B4513"/>
                                <circle cx="0" cy="-70" r="35" fill="#A0522D"/>
                                <!-- Parent nodding -->
                                <path d="M-15 -50 Q0 -45 15 -50" fill="none" stroke="#8B6F47" stroke-width="2"/>
                            </g>
                            
                            <g transform="translate(850, 910)" opacity="0.8">
                                <ellipse cx="0" cy="0" rx="40" ry="60" fill="#483D8B"/>
                                <circle cx="0" cy="-70" r="35" fill="#C8B88B"/>
                                <!-- Parent smiling -->
                                <path d="M-12 -50 Q0 -45 12 -50" fill="none" stroke="#B8A876" stroke-width="2"/>
                            </g>
                        </g>
                        
                        <!-- Questions from audience -->
                        <g transform="translate(750, 720)">
                            <ellipse cx="0" cy="0" rx="80" ry="35" fill="white" stroke="#333" stroke-width="2"/>
                            <path d="M0 30 L10 35 L20 30" fill="white" stroke="#333" stroke-width="2"/>
                            <text x="0" y="5" font-family="'Comic Sans MS', cursive" font-size="14" text-anchor="middle" fill="#333">
                                "How do we start?"
                            </text>
                        </g>
                        
                        <g transform="translate(1050, 740)">
                            <ellipse cx="0" cy="0" rx="70" ry="30" fill="white" stroke="#333" stroke-width="2"/>
                            <path d="M0 25 L10 30 L20 25" fill="white" stroke="#333" stroke-width="2"/>
                            <text x="0" y="5" font-family="'Comic Sans MS', cursive" font-size="14" text-anchor="middle" fill="#333">
                                "Can we sell too?"
                            </text>
                        </g>
                        
                        <!-- Maya's responses -->
                        <g transform="translate(960, 550)">
                            <rect x="-180" y="-40" width="360" height="80" fill="white" stroke="#333" stroke-width="3" rx="20"/>
                            <text x="0" y="-10" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#333">
                                "Choose what you share."
                            </text>
                            <text x="0" y="15" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#4169E1">
                                "AI is a tool, not a thief."
                            </text>
                        </g>
                        
                        <!-- Pixel helping demonstrate -->
                        <g transform="translate(1150, 400)" opacity="0.8">
                            <polygon points="0,40 40,0 80,40 40,80" fill="#7DF9FF" filter="url(#pixelGlow)"/>
                            <circle cx="30" cy="40" r="3" fill="white"/>
                            <circle cx="50" cy="40" r="3" fill="white"/>
                            <path d="M30 50 Q40 55 50 50" fill="none" stroke="white" stroke-width="2"/>
                        </g>
                        
                        <!-- Pixel's supportive message -->
                        <g transform="translate(1150, 320)">
                            <rect x="-80" y="-25" width="160" height="50" fill="white" stroke="#7DF9FF" stroke-width="2" rx="25"/>
                            <text x="0" y="-5" font-family="'SF Mono', monospace" font-size="13" text-anchor="middle" fill="#333">
                                "Every style is unique."
                            </text>
                            <text x="0" y="15" font-family="'SF Mono', monospace" font-size="13" text-anchor="middle" fill="#7DF9FF">
                                "I'm here to help."
                            </text>
                        </g>
                        
                        <!-- Visual flow diagram on board -->
                        <g transform="translate(960, 200)">
                            <line x1="-300" y1="0" x2="300" y2="0" stroke="#333" stroke-width="2" marker-end="url(#arrowFlow)"/>
                            
                            <!-- Step 1 -->
                            <g transform="translate(-250, 0)">
                                <circle cx="0" cy="0" r="20" fill="#4ECDC4"/>
                                <text x="0" y="5" font-family="Arial" font-size="16" text-anchor="middle" fill="white">1</text>
                                <text x="0" y="-35" font-family="Arial" font-size="12" text-anchor="middle" fill="#333">Choose</text>
                            </g>
                            
                            <!-- Step 2 -->
                            <g transform="translate(0, 0)">
                                <circle cx="0" cy="0" r="20" fill="#FFE66D"/>
                                <text x="0" y="5" font-family="Arial" font-size="16" text-anchor="middle" fill="#333">2</text>
                                <text x="0" y="-35" font-family="Arial" font-size="12" text-anchor="middle" fill="#333">Create</text>
                            </g>
                            
                            <!-- Step 3 -->
                            <g transform="translate(250, 0)">
                                <circle cx="0" cy="0" r="20" fill="#A58CFF"/>
                                <text x="0" y="5" font-family="Arial" font-size="16" text-anchor="middle" fill="white">3</text>
                                <text x="0" y="-35" font-family="Arial" font-size="12" text-anchor="middle" fill="#333">Credit</text>
                            </g>
                            
                            <defs>
                                <marker id="arrowFlow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <path d="M0,0 L0,6 L9,3 z" fill="#333"/>
                                </marker>
                            </defs>
                        </g>
                        
                        <!-- The challenger asking a genuine question -->
                        <g transform="translate(900, 720)">
                            <ellipse cx="0" cy="0" rx="100" ry="40" fill="white" stroke="#FF6347" stroke-width="2"/>
                            <path d="M0 35 L10 40 L20 35" fill="white" stroke="#FF6347" stroke-width="2"/>
                            <text x="0" y="-5" font-family="'Comic Sans MS', cursive" font-size="14" text-anchor="middle" fill="#333">
                                "Can you teach me"
                            </text>
                            <text x="0" y="15" font-family="'Comic Sans MS', cursive" font-size="14" text-anchor="middle" fill="#FF6347">
                                "to find MY voice?"
                            </text>
                        </g>
                        
                        <!-- Maya's encouraging response -->
                        <g transform="translate(960, 850)">
                            <rect x="-100" y="-30" width="200" height="60" fill="white" stroke="#FFC857" stroke-width="3" rx="30"/>
                            <text x="0" y="-5" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#333">
                                "Of course!"
                            </text>
                            <text x="0" y="20" font-family="'Comic Sans MS', cursive" font-size="16" text-anchor="middle" fill="#FFC857">
                                "Let's start with YOUR spiral."
                            </text>
                        </g>
                    </svg>
                </div>

                <!-- Page narration -->
                <div class="audio-narrator" data-text="Page 13: Maya the teacher. The crowd has become a classroom. She shares the three rules: CONSENT (you choose), CREDIT (your name stays), CREATE (together, not replaced). Parents nod understanding. Kids take notes. The challenger who tried to copy her now asks genuinely: 'Can you teach me to find MY voice?' Maya's answer: 'Of course! Let's start with YOUR spiral.' From fear to teaching, Maya has transformed."></div>
            </div>
        `;
    }

    generatePage14() {
        return `
            <div class="enhanced-comic-page page-14">
                <div class="quiet-victory">
                    <!-- Evening at home - success measured -->
                    <svg viewBox="0 0 1920 1080" class="page-svg cinematic">
                        <defs>
                            <linearGradient id="eveningGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#FF8C69;stop-opacity:0.8"/>
                                <stop offset="50%" style="stop-color:#FFB347;stop-opacity:0.6"/>
                                <stop offset="100%" style="stop-color:#4B0082;stop-opacity:0.4"/>
                            </linearGradient>
                            
                            <radialGradient id="screenLight" cx="50%" cy="50%">
                                <stop offset="0%" style="stop-color:#7DF9FF;stop-opacity:0.6"/>
                                <stop offset="100%" style="stop-color:#7DF9FF;stop-opacity:0"/>
                            </radialGradient>
                        </defs>

                        <!-- Cozy home evening -->
                        <rect width="1920" height="1080" fill="#2C1810"/>
                        
                        <!-- Window showing twilight -->
                        <rect x="200" y="200" width="400" height="500" fill="url(#eveningGlow)"/>
                        <rect x="200" y="200" width="400" height="500" fill="none" stroke="#8B7355" stroke-width="10"/>
                        <line x1="400" y1="200" x2="400" y2="700" stroke="#8B7355" stroke-width="6"/>
                        <line x1="200" y1="450" x2="600" y2="450" stroke="#8B7355" stroke-width="6"/>
                        
                        <!-- City lights beginning to twinkle -->
                        <g id="cityLights">
                            <rect x="250" y="500" width="60" height="100" fill="#1a1a2e"/>
                            <rect x="260" y="510" width="15" height="20" fill="#FFDF91">
                                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite"/>
                            </rect>
                            <rect x="285" y="510" width="15" height="20" fill="#FFDF91">
                                <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2.5s" repeatCount="indefinite"/>
                            </rect>
                            <rect x="260" y="540" width="15" height="20" fill="#FFDF91">
                                <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.8s" repeatCount="indefinite"/>
                            </rect>
                            
                            <rect x="350" y="480" width="80" height="120" fill="#16213e"/>
                            <rect x="360" y="490" width="20" height="25" fill="#FFDF91" opacity="0.7"/>
                            <rect x="390" y="490" width="20" height="25" fill="#FFDF91">
                                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="4s" repeatCount="indefinite"/>
                            </rect>
                            <rect x="360" y="525" width="20" height="25" fill="#FFDF91" opacity="0.6"/>
                            
                            <rect x="480" y="520" width="70" height="80" fill="#1a1a2e"/>
                            <rect x="490" y="530" width="18" height="22" fill="#FFDF91" opacity="0.8"/>
                            <rect x="520" y="530" width="18" height="22" fill="#FFDF91" opacity="0.5"/>
                        </g>
                        
                        <!-- Kitchen table with laptop -->
                        <rect x="700" y="700" width="800" height="40" fill="#8B4513"/>
                        <rect x="750" y="740" width="50" height="300" fill="#654321"/>
                        <rect x="1400" y="740" width="50" height="300" fill="#654321"/>
                        
                        <!-- Laptop showing dashboard -->
                        <g transform="translate(1100, 650)">
                            <rect x="-150" y="0" width="300" height="180" fill="#2C2C2E" stroke="#1C1C1E" stroke-width="3"/>
                            <rect x="-140" y="10" width="280" height="160" fill="#0D1117"/>
                            <ellipse cx="0" cy="90" rx="180" ry="120" fill="url(#screenLight)"/>
                            
                            <!-- Dashboard content -->
                            <text x="0" y="40" font-family="'SF Mono', monospace" font-size="16" text-anchor="middle" fill="#7DF9FF">
                                TODAY'S SALES
                            </text>
                            
                            <!-- Sales counter -->
                            <rect x="-100" y="60" width="60" height="40" fill="rgba(86,211,100,0.2)" stroke="#56D364" stroke-width="2" rx="5"/>
                            <text x="-70" y="85" font-family="'Courier New', monospace" font-size="20" text-anchor="middle" fill="#56D364">
                                3
                            </text>
                            <text x="-70" y="115" font-family="Arial" font-size="10" text-anchor="middle" fill="#8B949E">
                                Prints Sold
                            </text>
                            
                            <!-- Tips counter -->
                            <rect x="-30" y="60" width="60" height="40" fill="rgba(255,230,109,0.2)" stroke="#FFE66D" stroke-width="2" rx="5"/>
                            <text x="0" y="85" font-family="'Courier New', monospace" font-size="20" text-anchor="middle" fill="#FFE66D">
                                $12
                            </text>
                            <text x="0" y="115" font-family="Arial" font-size="10" text-anchor="middle" fill="#8B949E">
                                Tips
                            </text>
                            
                            <!-- New followers -->
                            <rect x="40" y="60" width="60" height="40" fill="rgba(165,140,255,0.2)" stroke="#A58CFF" stroke-width="2" rx="5"/>
                            <text x="70" y="85" font-family="'Courier New', monospace" font-size="20" text-anchor="middle" fill="#A58CFF">
                                7
                            </text>
                            <text x="70" y="115" font-family="Arial" font-size="10" text-anchor="middle" fill="#8B949E">
                                New Fans
                            </text>
                            
                            <!-- Progress bar -->
                            <rect x="-100" y="130" width="200" height="8" fill="#30363D" rx="4"/>
                            <rect x="-100" y="130" width="140" height="8" fill="#4ECDC4" rx="4"/>
                            <text x="0" y="155" font-family="Arial" font-size="10" text-anchor="middle" fill="#8B949E">
                                70% to weekly goal
                            </text>
                        </g>
                        
                        <!-- Maya at table, peaceful -->
                        <g transform="translate(900, 600)">
                            <!-- Body relaxed -->
                            <rect x="-50" y="0" width="100" height="150" fill="#2E86AB"/>
                            <!-- Paint splatters still there -->
                            <circle cx="-20" cy="50" r="5" fill="#FFE66D" opacity="0.7"/>
                            <circle cx="15" cy="70" r="4" fill="#FF6B6B" opacity="0.6"/>
                            
                            <!-- Head - content -->
                            <circle cx="0" cy="-50" r="40" fill="#D9A47A"/>
                            <!-- Eyes soft, satisfied -->
                            <ellipse cx="-12" cy="-55" rx="9" ry="11" fill="white"/>
                            <ellipse cx="12" cy="-55" rx="9" ry="11" fill="white"/>
                            <circle cx="-10" cy="-54" r="6" fill="#4B3621"/>
                            <circle cx="14" cy="-54" r="6" fill="#4B3621"/>
                            <!-- Gentle smile -->
                            <path d="M-15 -30 Q0 -25 15 -30" fill="none" stroke="#B8766D" stroke-width="2" stroke-linecap="round"/>
                            <!-- Hair loose, relaxed -->
                            <path d="M-40 -70 Q-45 -85 -30 -90 Q0 -95 30 -90 Q45 -85 40 -70" fill="#2B2B2B"/>
                            <path d="M-35 -65 Q-30 -75 -25 -70" fill="none" stroke="#2B2B2B" stroke-width="2"/>
                            <path d="M35 -65 Q30 -75 25 -70" fill="none" stroke="#2B2B2B" stroke-width="2"/>
                            
                            <!-- Spiral bracelet glowing softly -->
                            <circle cx="45" cy="80" r="12" fill="none" stroke="#FFC857" stroke-width="2">
                                <animate attributeName="opacity" values="0.8;0.5;0.8" dur="4s" repeatCount="indefinite"/>
                            </circle>
                        </g>
                        
                        <!-- Dad bringing cocoa again -->
                        <g transform="translate(700, 550)">
                            <!-- Body -->
                            <rect x="-50" y="0" width="100" height="160" fill="#4682B4"/>
                            <!-- Head -->
                            <circle cx="0" cy="-50" r="40" fill="#8B7355"/>
                            <!-- Proud expression -->
                            <ellipse cx="-12" cy="-55" rx="7" ry="9" fill="white"/>
                            <ellipse cx="12" cy="-55" rx="7" ry="9" fill="white"/>
                            <circle cx="-12" cy="-55" r="5" fill="#4B3621"/>
                            <circle cx="12" cy="-55" r="5" fill="#4B3621"/>
                            <path d="M-20 -35 Q0 -25 20 -35" fill="none" stroke="#654321" stroke-width="2" stroke-linecap="round"/>
                            
                            <!-- Holding two mugs -->
                            <ellipse cx="50" cy="60" rx="25" ry="35" fill="#8B7355"/>
                            <rect x="60" y="40" width="40" height="30" fill="#8B4513" rx="5"/>
                            <ellipse cx="80" cy="40" rx="20" ry="5" fill="#3D2314"/>
                            
                            <ellipse cx="-50" cy="60" rx="25" ry="35" fill="#8B7355"/>
                            <rect x="-90" y="40" width="40" height="30" fill="#8B4513" rx="5"/>
                            <ellipse cx="-70" cy="40" rx="20" ry="5" fill="#3D2314"/>
                        </g>
                        
                        <!-- Dialogue -->
                        <g transform="translate(700, 450)">
                            <rect x="-100" y="-35" width="200" height="70" fill="white" stroke="#333" stroke-width="3" rx="20"/>
                            <path d="M-20 35 L0 30 L10 40 Z" fill="white" stroke="#333" stroke-width="3"/>
                            <text x="0" y="-5" font-family="'Comic Sans MS', cursive" font-size="15" text-anchor="middle" fill="#333">
                                "Your work paid for"
                            </text>
                            <text x="0" y="20" font-family="'Comic Sans MS', cursive" font-size="15" text-anchor="middle" fill="#4682B4">
                                "pizza tonight!"
                            </text>
                        </g>
                        
                        <g transform="translate(900, 470)">
                            <ellipse cx="0" cy="0" rx="100" ry="40" fill="white" stroke="#333" stroke-width="3"/>
                            <path d="M-20 35 L0 30 L10 40 Z" fill="white" stroke="#333" stroke-width="3"/>
                            <text x="0" y="-5" font-family="'Comic Sans MS', cursive" font-size="15" text-anchor="middle" fill="#333">
                                "And a new"
                            </text>
                            <text x="0" y="20" font-family="'Comic Sans MS', cursive" font-size="15" text-anchor="middle" fill="#FFC857">
                                "brush pack!"
                            </text>
                        </g>
                        
                        <!-- Portfolio filing system visible -->
                        <g transform="translate(1400, 500)">
                            <rect x="-80" y="0" width="160" height="200" fill="#8B7355" stroke="#654321" stroke-width="3"/>
                            <rect x="-70" y="10" width="140" height="40" fill="white"/>
                            <text x="0" y="35" font-family="Arial Black" font-size="20" text-anchor="middle" fill="#333">
                                VOICE
                            </text>
                            <!-- Filed prints visible -->
                            <rect x="-65" y="60" width="130" height="20" fill="#E6F3FF"/>
                            <rect x="-65" y="85" width="130" height="20" fill="#FFE6CC"/>
                            <rect x="-65" y="110" width="130" height="20" fill="#E8F5E8"/>
                            <rect x="-65" y="135" width="130" height="20" fill="#F4E8D0"/>
                            <rect x="-65" y="160" width="130" height="20" fill="#FFE4E1"/>
                        </g>
                        
                        <!-- Pixel resting peacefully -->
                        <g transform="translate(1100, 500)" opacity="0.6">
                            <polygon points="0,30 30,0 60,30 30,60" fill="#7DF9FF"/>
                            <circle cx="20" cy="30" r="2" fill="white"/>
                            <circle cx="40" cy="30" r="2" fill="white"/>
                            <path d="M20 38 Q30 42 40 38" fill="none" stroke="white" stroke-width="1.5"/>
                        </g>
                        
                        <!-- Pixel's gentle words -->
                        <g transform="translate(1100, 440)">
                            <rect x="-80" y="-25" width="160" height="50" fill="white" stroke="#7DF9FF" stroke-width="2" rx="25" opacity="0.9"/>
                            <text x="0" y="-5" font-family="'SF Mono', monospace" font-size="13" text-anchor="middle" fill="#333">
                                "Thanks for not"
                            </text>
                            <text x="0" y="15" font-family="'SF Mono', monospace" font-size="13" text-anchor="middle" fill="#7DF9FF">
                                "replacing me."
                            </text>
                        </g>
                        
                        <g transform="translate(900, 380)">
                            <rect x="-100" y="-25" width="200" height="50" fill="white" stroke="#333" stroke-width="3" rx="25"/>
                            <text x="0" y="-5" font-family="'Comic Sans MS', cursive" font-size="14" text-anchor="middle" fill="#333">
                                "I can't be you."
                            </text>
                            <text x="0" y="15" font-family="'Comic Sans MS', cursive" font-size="14" text-anchor="middle" fill="#7DF9FF">
                                "I can amplify you."
                            </text>
                        </g>
                        
                        <!-- Tomorrow's plan -->
                        <g transform="translate(900, 800)">
                            <rect x="-120" y="-30" width="240" height="60" fill="white" stroke="#333" stroke-width="3" rx="20"/>
                            <text x="0" y="-5" font-family="'Comic Sans MS', cursive" font-size="15" text-anchor="middle" fill="#333">
                                "Tomorrow:"
                            </text>
                            <text x="0" y="20" font-family="'Comic Sans MS', cursive" font-size="15" text-anchor="middle" fill="#A58CFF">
                                "clouds that sing."
                            </text>
                        </g>
                        
                        <g transform="translate(1100, 800)">
                            <rect x="-80" y="-25" width="160" height="50" fill="white" stroke="#7DF9FF" stroke-width="2" rx="25"/>
                            <text x="0" y="5" font-family="'SF Mono', monospace" font-size="14" text-anchor="middle" fill="#7DF9FF">
                                "I'll hum along."
                            </text>
                        </g>
                        
                        <!-- Window reflection showing stars -->
                        <g id="stars" opacity="0.8">
                            <circle cx="300" cy="250" r="2" fill="white">
                                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="450" cy="280" r="1.5" fill="white">
                                <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3.5s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="520" cy="230" r="1" fill="white">
                                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.8s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="380" cy="320" r="1.8" fill="white">
                                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3.2s" repeatCount="indefinite"/>
                            </circle>
                        </g>
                        
                        <!-- Final narration caption -->
                        <g transform="translate(960, 980)">
                            <rect x="-300" y="-30" width="600" height="60" fill="rgba(0,0,0,0.8)" rx="10"/>
                            <text x="0" y="-5" font-family="'Georgia', serif" font-size="16" text-anchor="middle" fill="white" font-style="italic">
                                "The sky didn't shrink."
                            </text>
                            <text x="0" y="20" font-family="'Georgia', serif" font-size="16" text-anchor="middle" fill="#FFE66D" font-style="italic">
                                "Her brush got louder."
                            </text>
                        </g>
                    </svg>
                </div>

                <!-- Page narration -->
                <div class="audio-narrator" data-text="Page 14: Quiet victory at home. The dashboard shows modest success - 3 sales, $12 in tips, 7 new fans. But the real victory is deeper. Dad brings cocoa: 'Your work paid for pizza!' Maya files her prints in a portfolio labeled 'VOICE.' She thanks Pixel for not replacing her. Pixel responds: 'I can't be you. I can amplify you.' Tomorrow she'll create clouds that sing. Pixel will hum along. The sky didn't shrink. Her brush got louder."></div>
            </div>
        `;
    }

    generatePage15() {
        return `
            <div class="enhanced-comic-page page-15">
                <div class="final-transformation">
                    <!-- Epic rooftop mural scene -->
                    <svg viewBox="0 0 1920 1080" class="page-svg cinematic">
                        <defs>
                            <!-- Complex gradients for finale -->
                            <linearGradient id="finalSky" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color:#1E2A44;stop-opacity:1"/>
                                <stop offset="30%" style="stop-color:#4B0082;stop-opacity:1"/>
                                <stop offset="60%" style="stop-color:#FF8C69;stop-opacity:1"/>
                                <stop offset="100%" style="stop-color:#FFE66D;stop-opacity:1"/>
                            </linearGradient>
                            
                            <radialGradient id="muralGlow" cx="50%" cy="50%">
                                <stop offset="0%" style="stop-color:#FFC857;stop-opacity:1"/>
                                <stop offset="30%" style="stop-color:#7DF9FF;stop-opacity:0.8"/>
                                <stop offset="60%" style="stop-color:#A58CFF;stop-opacity:0.6"/>
                                <stop offset="100%" style="stop-color:#FFE66D;stop-opacity:0.3"/>
                            </radialGradient>
                            
                            <filter id="epicGlow">
                                <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>

                        <!-- Dramatic sky -->
                        <rect width="1920" height="1080" fill="url(#finalSky)"/>
                        
                        <!-- City skyline silhouette -->
                        <g id="citySkyline" opacity="0.8">
                            <rect x="100" y="600" width="120" height="480" fill="#0a0a0f"/>
                            <rect x="250" y="550" width="140" height="530" fill="#16213e"/>
                            <rect x="420" y="620" width="110" height="460" fill="#0a0a0f"/>
                            <rect x="560" y="580" width="130" height="500" fill="#1a1a2e"/>
                            <rect x="720" y="600" width="100" height="480" fill="#16213e"/>
                            <rect x="850" y="650" width="120" height="430" fill="#0a0a0f"/>
                            <rect x="1000" y="590" width="150" height="490" fill="#1a1a2e"/>
                            <rect x="1180" y="610" width="110" height="470" fill="#16213e"/>
                            <rect x="1320" y="640" width="130" height="440" fill="#0a0a0f"/>
                            <rect x="1480" y="600" width="140" height="480" fill="#1a1a2e"/>
                            <rect x="1650" y="630" width="120" height="450" fill="#16213e"/>
                            <rect x="1800" y="650" width="100" height="430" fill="#0a0a0f"/>
                            
                            <!-- Windows lit up in buildings -->
                            <g id="windowLights">
                                <rect x="120" y="620" width="20" height="25" fill="#FFDF91" opacity="0.8"/>
                                <rect x="150" y="620" width="20" height="25" fill="#FFDF91" opacity="0.6"/>
                                <rect x="180" y="620" width="20" height="25" fill="#FFDF91" opacity="0.9"/>
                                <rect x="120" y="660" width="20" height="25" fill="#FFDF91" opacity="0.7"/>
                                <rect x="180" y="660" width="20" height="25" fill="#FFDF91" opacity="0.8"/>
                                
                                <rect x="280" y="580" width="25" height="30" fill="#FFDF91" opacity="0.8"/>
                                <rect x="320" y="580" width="25" height="30" fill="#FFDF91" opacity="0.7"/>
                                <rect x="280" y="625" width="25" height="30" fill="#FFDF91" opacity="0.9"/>
                                <rect x="320" y="625" width="25" height="30" fill="#FFDF91" opacity="0.6"/>
                                <rect x="360" y="625" width="25" height="30" fill="#FFDF91" opacity="0.8"/>
                                
                                <!-- More windows -->
                                <rect x="580" y="600" width="20" height="25" fill="#FFDF91" opacity="0.7"/>
                                <rect x="610" y="600" width="20" height="25" fill="#FFDF91" opacity="0.8"/>
                                <rect x="640" y="600" width="20" height="25" fill="#FFDF91" opacity="0.6"/>
                                <rect x="580" y="640" width="20" height="25" fill="#FFDF91" opacity="0.9"/>
                                
                                <rect x="1040" y="620" width="30" height="35" fill="#FFDF91" opacity="0.8"/>
                                <rect x="1080" y="620" width="30" height="35" fill="#FFDF91" opacity="0.7"/>
                                <rect x="1040" y="670" width="30" height="35" fill="#FFDF91" opacity="0.6"/>
                                
                                <!-- Animated window -->
                                <rect x="1080" y="670" width="30" height="35" fill="#FFDF91">
                                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="4s" repeatCount="indefinite"/>
                                </rect>
                            </g>
                        </g>
                        
                        <!-- Rooftop -->
                        <rect x="600" y="500" width="720" height="40" fill="#2C2C2E"/>
                        <rect x="600" y="540" width="720" height="10" fill="#1C1C1E"/>
                        
                        <!-- Giant mural wall -->
                        <rect x="650" y="200" width="620" height="300" fill="#F5F5F5" stroke="#333" stroke-width="4"/>
                        
                        <!-- The mural Maya is creating -->
                        <g id="epicMural" transform="translate(960, 350)">
                            <!-- Base spiral that started it all -->
                            <circle cx="0" cy="0" r="100" fill="none" stroke="#FFC857" stroke-width="8" filter="url(#epicGlow)">
                                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="60s" repeatCount="indefinite"/>
                            </circle>
                            
                            <!-- Spiral transforming into comet -->
                            <path d="M0 -100 Q100 -50 120 50 Q100 100 0 100 Q-100 100 -120 50 Q-100 -50 0 -100" 
                                  fill="none" stroke="#FFD700" stroke-width="6" filter="url(#epicGlow)">
                                <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="45s" repeatCount="indefinite"/>
                            </path>
                            
                            <!-- Comet tail flowing into fox -->
                            <path d="M120 50 Q180 60 240 40 Q280 20 300 -20" 
                                  fill="none" stroke="#E9724C" stroke-width="5" opacity="0.8">
                                <animate attributeName="stroke-dasharray" values="0,500;500,0" dur="5s" repeatCount="indefinite"/>
                            </path>
                            
                            <!-- Fox leaping -->
                            <g transform="translate(200, -50)">
                                <polygon points="0,0 -40,40 40,40" fill="#E9724C" opacity="0.8"/>
                                <polygon points="-30,35 -40,60 -20,60" fill="#D8613C" opacity="0.9"/>
                                <polygon points="30,35 20,60 40,60" fill="#D8613C" opacity="0.9"/>
                                <!-- Fox eyes -->
                                <circle cx="-10" cy="20" r="4" fill="white"/>
                                <circle cx="10" cy="20" r="4" fill="white"/>
                                <circle cx="-10" cy="20" r="2" fill="black"/>
                                <circle cx="10" cy="20" r="2" fill="black"/>
                                <!-- Tail -->
                                <path d="M40 40 Q70 30 90 40 Q85 55 70 60 Q50 55 40 40" fill="#E9724C" opacity="0.8"/>
                            </g>
                            
                            <!-- Paper city skyline -->
                            <g transform="translate(-200, 50)">
                                <rect x="0" y="0" width="30" height="50" fill="white" stroke="#999" stroke-width="2" stroke-dasharray="5,3"/>
                                <rect x="40" y="-20" width="30" height="70" fill="white" stroke="#999" stroke-width="2" stroke-dasharray="5,3"/>
                                <rect x="80" y="-10" width="30" height="60" fill="white" stroke="#999" stroke-width="2" stroke-dasharray="5,3"/>
                                <rect x="120" y="-30" width="30" height="80" fill="white" stroke="#999" stroke-width="2" stroke-dasharray="5,3"/>
                                <rect x="160" y="-15" width="30" height="65" fill="white" stroke="#999" stroke-width="2" stroke-dasharray="5,3"/>
                            </g>
                            
                            <!-- Digital elements merging -->
                            <g id="digitalElements" opacity="0.7">
                                <polygon points="-150,-80 -130,-100 -110,-80 -130,-60" fill="#7DF9FF">
                                    <animate attributeName="opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite"/>
                                </polygon>
                                <rect x="150" y="-100" width="20" height="20" fill="#A58CFF" transform="rotate(45 160 -90)">
                                    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite"/>
                                </rect>
                                <circle cx="-180" cy="20" r="10" fill="#FFE66D">
                                    <animate attributeName="r" values="10;15;10" dur="4s" repeatCount="indefinite"/>
                                </circle>
                            </g>
                        </g>
                        
                        <!-- Maya painting on scaffolding -->
                        <g transform="translate(800, 450)">
                            <!-- Scaffolding -->
                            <rect x="-100" y="50" width="200" height="10" fill="#696969"/>
                            <rect x="-90" y="60" width="10" height="100" fill="#696969"/>
                            <rect x="80" y="60" width="10" height="100" fill="#696969"/>
                            
                            <!-- Maya in action -->
                            <g transform="translate(0, 0)">
                                <!-- Body in painting clothes -->
                                <rect x="-40" y="0" width="80" height="120" fill="#2E86AB"/>
                                <!-- Paint splatters everywhere -->
                                <circle cx="-20" cy="30" r="6" fill="#FFE66D" opacity="0.8"/>
                                <circle cx="15" cy="50" r="5" fill="#FF6B6B" opacity="0.7"/>
                                <circle cx="-5" cy="70" r="4" fill="#4ECDC4" opacity="0.6"/>
                                <circle cx="25" cy="40" r="5" fill="#A58CFF" opacity="0.7"/>
                                <circle cx="-15" cy="90" r="4" fill="#7DF9FF" opacity="0.6"/>
                                
                                <!-- Right arm extended painting -->
                                <ellipse cx="60" cy="30" rx="25" ry="70" fill="#D9A47A" transform="rotate(45 60 30)"/>
                                <!-- Hand with brush -->
                                <ellipse cx="90" cy="0" rx="20" ry="30" fill="#D9A47A" transform="rotate(60 90 0)"/>
                                <rect x="105" y="-15" width="12" height="80" fill="#8B4513"/>
                                <ellipse cx="111" cy="-20" rx="15" ry="8" fill="#FFC857"/>
                                
                                <!-- Head - determined and joyful -->
                                <circle cx="0" cy="-50" r="40" fill="#D9A47A"/>
                                <!-- Eyes focused but happy -->
                                <ellipse cx="-12" cy="-55" rx="10" ry="12" fill="white"/>
                                <ellipse cx="12" cy="-55" rx="10" ry="12" fill="white"/>
                                <circle cx="-10" cy="-55" r="7" fill="#4B3621"/>
                                <circle cx="14" cy="-55" r="7" fill="#4B3621"/>
                                <!-- Sparkles in eyes -->
                                <circle cx="-8" cy="-57" r="2" fill="white"/>
                                <circle cx="16" cy="-57" r="2" fill="white"/>
                                <circle cx="-13" cy="-52" r="1" fill="white"/>
                                <circle cx="11" cy="-52" r="1" fill="white"/>
                                <!-- Big confident smile -->
                                <path d="M-20 -30 Q0 -20 20 -30" fill="none" stroke="#B8766D" stroke-width="3" stroke-linecap="round"/>
                                <!-- Hair in messy bun with strands -->
                                <path d="M-40 -70 Q-45 -85 -30 -90 Q0 -95 30 -90 Q45 -85 40 -70" fill="#2B2B2B"/>
                                <ellipse cx="0" cy="-85" rx="28" ry="22" fill="#2B2B2B"/>
                                <path d="M-30 -65 Q-35 -75 -28 -70" fill="none" stroke="#2B2B2B" stroke-width="3"/>
                                <path d="M30 -65 Q35 -75 28 -70" fill="none" stroke="#2B2B2B" stroke-width="3"/>
                                <path d="M-20 -68 Q-22 -78 -15 -73" fill="none" stroke="#2B2B2B" stroke-width="2"/>
                                <path d="M20 -68 Q22 -78 15 -73" fill="none" stroke="#2B2B2B" stroke-width="2"/>
                                
                                <!-- Spiral bracelet glowing bright -->
                                <circle cx="45" cy="70" r="15" fill="none" stroke="#FFC857" stroke-width="4" filter="url(#epicGlow)"/>
                                <path d="M45 55 Q60 70 45 85 Q30 70 45 55" fill="none" stroke="#FFD700" stroke-width="3" filter="url(#epicGlow)"/>
                            </g>
                        </g>
                        
                        <!-- Pixel as ethereal guide -->
                        <g transform="translate(1100, 350)" opacity="0.9">
                            <!-- Larger, more majestic form -->
                            <polygon points="0,-100 -80,50 80,50" fill="url(#muralGlow)" filter="url(#epicGlow)"/>
                            <polygon points="-60,30 -80,80 -40,80" fill="#7DF9FF" opacity="0.8"/>
                            <polygon points="60,30 40,80 80,80" fill="#A58CFF" opacity="0.8"/>
                            <!-- Face -->
                            <polygon points="0,-60 -40,0 0,60 40,0" fill="white" opacity="0.95"/>
                            <circle cx="-15" cy="-10" r="8" fill="#0D1117"/>
                            <circle cx="15" cy="-10" r="8" fill="#0D1117"/>
                            <circle cx="-15" cy="-10" r="4" fill="white"/>
                            <circle cx="15" cy="-10" r="4" fill="white"/>
                            <path d="M-20 20 Q0 30 20 20" fill="none" stroke="#0D1117" stroke-width="3" stroke-linecap="round"/>
                            
                            <!-- Light streams connecting to mural -->
                            <g opacity="0.5">
                                <line x1="0" y1="0" x2="-140" y2="0" stroke="url(#muralGlow)" stroke-width="4">
                                    <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" repeatCount="indefinite"/>
                                </line>
                                <line x1="-40" y1="30" x2="-180" y2="50" stroke="url(#muralGlow)" stroke-width="3">
                                    <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2.5s" repeatCount="indefinite"/>
                                </line>
                                <line x1="40" y1="30" x2="-100" y2="-50" stroke="url(#muralGlow)" stroke-width="3">
                                    <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2.2s" repeatCount="indefinite"/>
                                </line>
                            </g>
                        </g>
                        
                        <!-- The message -->
                        <g transform="translate(960, 150)">
                            <rect x="-350" y="-60" width="700" height="120" fill="white" stroke="#333" stroke-width="4" rx="20" opacity="0.95"/>
                            <text x="0" y="-25" font-family="'Georgia', serif" font-size="24" text-anchor="middle" fill="#333" font-weight="bold">
                                "AI didn't steal my art."
                            </text>
                            <text x="0" y="5" font-family="'Georgia', serif" font-size="24" text-anchor="middle" fill="#7DF9FF" font-weight="bold">
                                "It helped me show the world"
                            </text>
                            <text x="0" y="35" font-family="'Georgia', serif" font-size="24" text-anchor="middle" fill="#FFC857" font-weight="bold">
                                "it was MINE."
                            </text>
                        </g>
                        
                        <!-- Content Credentials badge prominent -->
                        <g transform="translate(1500, 450)">
                            <rect x="-80" y="-60" width="160" height="120" fill="white" stroke="#333" stroke-width="3" rx="10"/>
                            <text x="0" y="-30" font-family="Arial" font-size="14" text-anchor="middle" fill="#333" font-weight="bold">
                                CONTENT CREDENTIALS
                            </text>
                            <text x="0" y="-10" font-family="Arial" font-size="12" text-anchor="middle" fill="#666">
                                Created by
                            </text>
                            <text x="0" y="10" font-family="Arial" font-size="16" text-anchor="middle" fill="#333" font-weight="bold">
                                MAYA
                            </text>
                            <text x="0" y="30" font-family="Arial" font-size="12" text-anchor="middle" fill="#666">
                                + Pixel (tool)
                            </text>
                            <rect x="-40" y="40" width="80" height="30" fill="#4169E1" rx="5"/>
                            <path d="M-20 55 L-10 60 L0 50" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
                            <text x="20" y="60" font-family="Arial" font-size="12" fill="white">C2PA</text>
                        </g>
                        
                        <!-- Maya's signature spiral - large and proud -->
                        <g transform="translate(1250, 450)">
                            <circle cx="0" cy="0" r="50" fill="none" stroke="#FFC857" stroke-width="6" filter="url(#epicGlow)"/>
                            <path d="M0 -50 Q50 0 0 50 Q-50 0 0 -50" fill="none" stroke="#FFD700" stroke-width="5" filter="url(#epicGlow)"/>
                            <text x="0" y="80" font-family="'Brush Script MT', cursive" font-size="24" text-anchor="middle" fill="#FFC857">
                                Maya
                            </text>
                        </g>
                        
                        <!-- People gathering below to watch -->
                        <g id="gathering" opacity="0.7">
                            <!-- Crowd silhouettes -->
                            <ellipse cx="400" cy="900" rx="40" ry="80" fill="#333"/>
                            <ellipse cx="480" cy="910" rx="40" ry="80" fill="#333"/>
                            <ellipse cx="560" cy="900" rx="40" ry="80" fill="#333"/>
                            <ellipse cx="640" cy="905" rx="40" ry="80" fill="#333"/>
                            <ellipse cx="720" cy="900" rx="40" ry="80" fill="#333"/>
                            
                            <ellipse cx="1200" cy="900" rx="40" ry="80" fill="#333"/>
                            <ellipse cx="1280" cy="910" rx="40" ry="80" fill="#333"/>
                            <ellipse cx="1360" cy="905" rx="40" ry="80" fill="#333"/>
                            <ellipse cx="1440" cy="900" rx="40" ry="80" fill="#333"/>
                            <ellipse cx="1520" cy="910" rx="40" ry="80" fill="#333"/>
                            
                            <!-- Comments floating up -->
                            <text x="500" y="850" font-family="Arial" font-size="14" fill="#FFE66D" opacity="0.8">
                                "Amazing!"
                            </text>
                            <text x="700" y="830" font-family="Arial" font-size="14" fill="#7DF9FF" opacity="0.8">
                                "Inspiring!"
                            </text>
                            <text x="1300" y="840" font-family="Arial" font-size="14" fill="#A58CFF" opacity="0.8">
                                "Beautiful!"
                            </text>
                        </g>
                        
                        <!-- Stars in the sky -->
                        <g id="finalStars">
                            <circle cx="200" cy="100" r="3" fill="white" opacity="0.9">
                                <animate attributeName="opacity" values="0.9;0.3;0.9" dur="3s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="400" cy="150" r="2" fill="white" opacity="0.8">
                                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3.5s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="600" cy="80" r="2.5" fill="white" opacity="0.85">
                                <animate attributeName="opacity" values="0.85;0.3;0.85" dur="2.8s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="800" cy="120" r="2" fill="white" opacity="0.7">
                                <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3.2s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="1000" cy="90" r="3" fill="white" opacity="0.9">
                                <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.5s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="1200" cy="110" r="2" fill="white" opacity="0.8">
                                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3.8s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="1400" cy="140" r="2.5" fill="white" opacity="0.85">
                                <animate attributeName="opacity" values="0.85;0.3;0.85" dur="3s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="1600" cy="100" r="2" fill="white" opacity="0.75">
                                <animate attributeName="opacity" values="0.75;0.2;0.75" dur="3.3s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="1800" cy="130" r="3" fill="white" opacity="0.9">
                                <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.7s" repeatCount="indefinite"/>
                            </circle>
                        </g>
                        
                        <!-- Final thought -->
                        <g transform="translate(960, 980)">
                            <rect x="-400" y="-40" width="800" height="80" fill="rgba(0,0,0,0.9)" rx="10"/>
                            <text x="0" y="-10" font-family="'Georgia', serif" font-size="20" text-anchor="middle" fill="white" font-style="italic">
                                "My voice didn't disappear in the machine."
                            </text>
                            <text x="0" y="20" font-family="'Georgia', serif" font-size="20" text-anchor="middle" fill="#FFC857" font-style="italic" font-weight="bold">
                                "It echoed across the universe."
                            </text>
                        </g>
                    </svg>
                </div>

                <!-- Page narration -->
                <div class="audio-narrator" data-text="Page 15: The transformation complete. Maya paints a massive rooftop mural as the city watches. Her spiral becomes a comet, transforms into a fox, flows into a paper city - all enhanced by Pixel's ethereal light. The Content Credentials badge stands proud. Her signature blazes golden. Crowds gather below in awe. The message rings clear: 'AI didn't steal my art. It helped me show the world it was MINE.' Her voice didn't disappear in the machine. It echoed across the universe. This is not the end. It's the beginning of a new way to create - together, credited, empowered. Maya found her voice. Now she helps others find theirs."></div>
            </div>
        `;
    }
}

// Initialize and export
const pages11to15 = new Pages11to15();

if (typeof window !== 'undefined') {
    window.Pages11to15 = Pages11to15;
    
    // Add to enhanced novel if it exists
    if (window.enhancedNovel) {
        window.enhancedNovel.generatePage11 = pages11to15.generatePage11.bind(pages11to15);
        window.enhancedNovel.generatePage12 = pages11to15.generatePage12.bind(pages11to15);
        window.enhancedNovel.generatePage13 = pages11to15.generatePage13.bind(pages11to15);
        window.enhancedNovel.generatePage14 = pages11to15.generatePage14.bind(pages11to15);
        window.enhancedNovel.generatePage15 = pages11to15.generatePage15.bind(pages11to15);
    }
}