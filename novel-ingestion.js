// Infinite Canvas - Novel Ingestion System
// Modular system for adding new graphic novels

class NovelIngestionSystem {
    constructor() {
        this.novels = new Map();
        this.metadata = new Map();
    }

    // Main ingestion method
    async ingestNovel(novelData) {
        const novel = {
            id: this.generateId(novelData.title),
            title: novelData.title,
            author: novelData.author,
            artist: novelData.artist,
            description: novelData.description,
            genre: novelData.genre || [],
            tags: novelData.tags || [],
            pageCount: novelData.pages.length,
            estimatedReadTime: this.calculateReadTime(novelData.pages.length),
            dateAdded: new Date().toISOString(),
            contentCredentials: novelData.contentCredentials || {},
            license: novelData.license || 'All Rights Reserved',
            pages: await this.processPages(novelData.pages),
            coverImage: novelData.coverImage || this.generateCover(novelData),
            metadata: this.extractMetadata(novelData)
        };

        // Store novel
        this.novels.set(novel.id, novel);
        
        // Update index
        await this.updateSearchIndex(novel);
        
        // Generate static files if needed
        await this.generateStaticFiles(novel);
        
        return novel.id;
    }

    // Process individual pages
    async processPages(pages) {
        return pages.map((page, index) => ({
            number: index + 1,
            panels: this.processPanels(page.panels),
            layout: page.layout || this.detectLayout(page.panels),
            dialogue: this.extractDialogue(page),
            narration: page.narration || '',
            soundEffects: page.soundEffects || [],
            annotations: page.annotations || [],
            altText: this.generateAltText(page),
            contentWarnings: page.contentWarnings || []
        }));
    }

    // Process panels within a page
    processPanels(panels) {
        if (!panels) return [];
        
        return panels.map(panel => ({
            id: this.generatePanelId(),
            type: panel.type || 'standard',
            content: panel.content,
            svg: panel.svg || this.convertToSVG(panel),
            position: panel.position,
            size: panel.size,
            transitions: panel.transitions || {},
            camera: panel.camera || {},
            effects: panel.effects || []
        }));
    }

    // Convert various formats to SVG
    convertToSVG(panel) {
        if (panel.svg) return panel.svg;
        
        // Base SVG template
        const svg = `
            <svg viewBox="0 0 ${panel.width || 400} ${panel.height || 400}" class="panel-svg">
                ${panel.image ? this.imageToSVG(panel.image) : ''}
                ${panel.shapes ? this.shapesToSVG(panel.shapes) : ''}
                ${panel.text ? this.textToSVG(panel.text) : ''}
            </svg>
        `;
        
        return svg;
    }

    // Extract dialogue for search and accessibility
    extractDialogue(page) {
        const dialogue = [];
        
        if (page.dialogue) {
            return page.dialogue;
        }
        
        // Extract from panels
        page.panels?.forEach(panel => {
            if (panel.dialogue) {
                dialogue.push(...panel.dialogue);
            }
            if (panel.speechBubbles) {
                panel.speechBubbles.forEach(bubble => {
                    dialogue.push({
                        character: bubble.character,
                        text: bubble.text,
                        type: bubble.type || 'speech'
                    });
                });
            }
        });
        
        return dialogue;
    }

    // Generate alt text for accessibility
    generateAltText(page) {
        let altText = `Page ${page.number || 'unknown'}. `;
        
        if (page.description) {
            altText += page.description;
        } else {
            altText += `Contains ${page.panels?.length || 0} panels. `;
            
            const dialogue = this.extractDialogue(page);
            if (dialogue.length > 0) {
                altText += `Dialogue includes: ${dialogue.slice(0, 3).map(d => `${d.character}: "${d.text}"`).join(', ')}`;
            }
        }
        
        return altText;
    }

    // Detect panel layout automatically
    detectLayout(panels) {
        if (!panels || panels.length === 0) return 'single';
        
        const count = panels.length;
        if (count === 1) return 'splash';
        if (count === 2) return 'two-panel';
        if (count === 3) return 'three-panel';
        if (count === 4) return 'grid-2x2';
        if (count === 6) return 'grid-3x2';
        if (count === 9) return 'grid-3x3';
        
        return 'custom';
    }

    // Generate unique IDs
    generateId(title) {
        return title.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '') + 
            '-' + Date.now().toString(36);
    }

    generatePanelId() {
        return 'panel-' + Math.random().toString(36).substr(2, 9);
    }

    // Calculate estimated read time
    calculateReadTime(pageCount) {
        // Average 1.5 minutes per page for graphic novels
        return Math.ceil(pageCount * 1.5);
    }

    // Extract metadata for SEO and discovery
    extractMetadata(novelData) {
        return {
            isbn: novelData.isbn,
            publisher: novelData.publisher,
            publicationDate: novelData.publicationDate,
            language: novelData.language || 'en',
            ageRating: novelData.ageRating || 'All Ages',
            series: novelData.series,
            volume: novelData.volume,
            keywords: this.extractKeywords(novelData),
            themes: novelData.themes || [],
            awards: novelData.awards || [],
            relatedWorks: novelData.relatedWorks || []
        };
    }

    // Extract keywords for search
    extractKeywords(novelData) {
        const keywords = new Set();
        
        // Add from title
        novelData.title.split(/\s+/).forEach(word => {
            if (word.length > 3) keywords.add(word.toLowerCase());
        });
        
        // Add from description
        if (novelData.description) {
            novelData.description.split(/\s+/).forEach(word => {
                if (word.length > 4) keywords.add(word.toLowerCase());
            });
        }
        
        // Add tags and genres
        [...(novelData.tags || []), ...(novelData.genre || [])].forEach(tag => {
            keywords.add(tag.toLowerCase());
        });
        
        return Array.from(keywords);
    }

    // Generate cover if not provided
    generateCover(novelData) {
        return `
            <svg viewBox="0 0 300 400" class="novel-cover-svg">
                <defs>
                    <linearGradient id="cover-grad-${novelData.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#7DF9FF;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#A58CFF;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="300" height="400" fill="url(#cover-grad-${novelData.id})"/>
                <text x="150" y="200" font-family="Arial Black" font-size="24" text-anchor="middle" fill="white">
                    ${novelData.title}
                </text>
                <text x="150" y="230" font-family="Arial" font-size="14" text-anchor="middle" fill="white" opacity="0.8">
                    ${novelData.author}
                </text>
            </svg>
        `;
    }

    // Update search index
    async updateSearchIndex(novel) {
        // In production, this would update an search service
        const searchData = {
            id: novel.id,
            title: novel.title,
            author: novel.author,
            description: novel.description,
            keywords: novel.metadata.keywords,
            dialogue: novel.pages.flatMap(p => this.extractDialogue(p).map(d => d.text)),
            tags: novel.tags,
            genre: novel.genre
        };
        
        // Store in IndexedDB for offline search
        const db = await this.openDB();
        const tx = db.transaction('searchIndex', 'readwrite');
        await tx.objectStore('searchIndex').put(searchData);
    }

    // Generate static files for the novel
    async generateStaticFiles(novel) {
        // Generate individual page files
        const pageFiles = novel.pages.map(page => ({
            filename: `novels/${novel.id}/page-${page.number}.json`,
            content: JSON.stringify(page)
        }));
        
        // Generate manifest
        const manifest = {
            filename: `novels/${novel.id}/manifest.json`,
            content: JSON.stringify({
                id: novel.id,
                title: novel.title,
                author: novel.author,
                pageCount: novel.pageCount,
                pages: novel.pages.map(p => `page-${p.number}.json`)
            })
        };
        
        // In production, write these files to storage
        console.log('Generated files for', novel.title);
        
        return [manifest, ...pageFiles];
    }

    // Open IndexedDB
    openDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open('InfiniteCanvasDB', 2);
            
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
            
            request.onupgradeneeded = event => {
                const db = event.target.result;
                
                if (!db.objectStoreNames.contains('novels')) {
                    db.createObjectStore('novels', { keyPath: 'id' });
                }
                
                if (!db.objectStoreNames.contains('searchIndex')) {
                    const searchStore = db.createObjectStore('searchIndex', { keyPath: 'id' });
                    searchStore.createIndex('title', 'title', { unique: false });
                    searchStore.createIndex('author', 'author', { unique: false });
                    searchStore.createIndex('keywords', 'keywords', { unique: false, multiEntry: true });
                }
            };
        });
    }

    // Validate novel data before ingestion
    validateNovelData(novelData) {
        const required = ['title', 'author', 'pages'];
        const missing = required.filter(field => !novelData[field]);
        
        if (missing.length > 0) {
            throw new Error(`Missing required fields: ${missing.join(', ')}`);
        }
        
        if (!Array.isArray(novelData.pages) || novelData.pages.length === 0) {
            throw new Error('Novel must have at least one page');
        }
        
        return true;
    }

    // Export novel to various formats
    async exportNovel(novelId, format = 'json') {
        const novel = this.novels.get(novelId);
        if (!novel) throw new Error('Novel not found');
        
        switch(format) {
            case 'json':
                return JSON.stringify(novel, null, 2);
            
            case 'cbz':
                return this.exportAsCBZ(novel);
            
            case 'pdf':
                return this.exportAsPDF(novel);
            
            case 'epub':
                return this.exportAsEPUB(novel);
            
            default:
                throw new Error(`Unsupported export format: ${format}`);
        }
    }

    // Batch import novels
    async batchImport(novels) {
        const results = [];
        
        for (const novelData of novels) {
            try {
                this.validateNovelData(novelData);
                const id = await this.ingestNovel(novelData);
                results.push({ success: true, id, title: novelData.title });
            } catch (error) {
                results.push({ 
                    success: false, 
                    title: novelData.title, 
                    error: error.message 
                });
            }
        }
        
        return results;
    }

    // Search novels
    async searchNovels(query, filters = {}) {
        const db = await this.openDB();
        const tx = db.transaction('searchIndex', 'readonly');
        const store = tx.objectStore('searchIndex');
        
        const results = [];
        const cursor = await store.openCursor();
        
        return new Promise((resolve) => {
            cursor.onsuccess = event => {
                const cursor = event.target.result;
                
                if (cursor) {
                    const item = cursor.value;
                    let matches = false;
                    
                    // Search in title, author, description, keywords
                    const searchFields = [
                        item.title,
                        item.author,
                        item.description,
                        ...item.keywords
                    ].join(' ').toLowerCase();
                    
                    if (searchFields.includes(query.toLowerCase())) {
                        matches = true;
                    }
                    
                    // Apply filters
                    if (matches && filters.genre) {
                        matches = item.genre.includes(filters.genre);
                    }
                    
                    if (matches && filters.author) {
                        matches = item.author.toLowerCase().includes(filters.author.toLowerCase());
                    }
                    
                    if (matches) {
                        results.push(item);
                    }
                    
                    cursor.continue();
                } else {
                    resolve(results);
                }
            };
        });
    }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NovelIngestionSystem;
}

// Example usage
const ingestionSystem = new NovelIngestionSystem();

// Example novel data structure
const exampleNovel = {
    title: "The Digital Awakening",
    author: "Jane Doe",
    artist: "John Smith",
    description: "A cyberpunk adventure in neo-Tokyo",
    genre: ["Sci-Fi", "Cyberpunk"],
    tags: ["technology", "future", "action"],
    license: "Creative Commons BY-NC",
    contentCredentials: {
        creator: "Jane Doe",
        dateCreated: "2024-01-01",
        tool: "Infinite Canvas Studio",
        verified: true
    },
    pages: [
        {
            number: 1,
            layout: "splash",
            panels: [
                {
                    type: "splash",
                    width: 800,
                    height: 1200,
                    content: "Opening scene of neo-Tokyo",
                    dialogue: [
                        {
                            character: "Narrator",
                            text: "The year is 2089...",
                            type: "narration"
                        }
                    ]
                }
            ]
        }
    ]
};