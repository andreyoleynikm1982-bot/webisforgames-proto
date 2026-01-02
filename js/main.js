// Main JavaScript for WebIsForGames

// Projects functionality
async function loadProjects() {
    try {
        const response = await fetch('data/projects.json');
        const projects = await response.json();
        displayProjects(projects);
    } catch (error) {
        console.error('Error loading projects:', error);
        displayProjectsError();
    }
}

function displayProjects(projects) {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = projects.map((project, index) => `
        <div class="project-card">
            <div class="project-screenshots">
                <div class="screenshot-carousel" id="carousel-${index}">
                    ${project.screenshots.map(screenshot => `
                        <img src="${screenshot}" alt="${project.title} screenshot" class="screenshot">
                    `).join('')}
                </div>
                <div class="carousel-controls">
                    ${project.screenshots.map((_, i) => `
                        <div class="carousel-dot ${i === 0 ? 'active' : ''}"
                             onclick="changeSlide(${index}, ${i})"></div>
                    `).join('')}
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <button class="btn btn-play" onclick="openLightbox('${project.demoUrl}')">
                    ▶ Play Demo
                </button>
            </div>
        </div>
    `).join('');
}

function displayProjectsError() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    container.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Error loading projects. Please try again later.</p>';
}

// Carousel functionality
let currentSlides = {};

function changeSlide(projectIndex, slideIndex) {
    const carousel = document.getElementById(`carousel-${projectIndex}`);
    const dots = carousel.parentElement.querySelectorAll('.carousel-dot');

    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
    });

    currentSlides[projectIndex] = slideIndex;
}

// Auto-rotate carousel
function initCarousels() {
    const carousels = document.querySelectorAll('.screenshot-carousel');
    carousels.forEach((carousel, index) => {
        currentSlides[index] = 0;
        setInterval(() => {
            const parent = carousel.parentElement;
            const screenshots = carousel.querySelectorAll('.screenshot');
            if (screenshots.length > 0) {
                let nextSlide = (currentSlides[index] + 1) % screenshots.length;
                changeSlide(index, nextSlide);
            }
        }, 5000); // Change every 5 seconds
    });
}

// Lightbox functionality
function openLightbox(url) {
    const lightbox = document.getElementById('lightbox');
    const iframe = document.getElementById('lightbox-iframe');

    if (lightbox && iframe) {
        iframe.src = url;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const iframe = document.getElementById('lightbox-iframe');

    if (lightbox && iframe) {
        lightbox.classList.remove('active');
        iframe.src = '';
        document.body.style.overflow = 'auto';
    }
}

// Close lightbox on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Close lightbox on background click
document.addEventListener('click', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Roadmap/Kanban functionality
async function loadRoadmap() {
    try {
        const response = await fetch('data/roadmap.json');
        const roadmap = await response.json();
        displayKanban(roadmap);
    } catch (error) {
        console.error('Error loading roadmap:', error);
        displayRoadmapError();
    }
}

function displayKanban(roadmap) {
    const board = document.getElementById('kanban-board');
    if (!board) return;

    board.innerHTML = roadmap.columns.map(column => `
        <div class="kanban-column">
            <div class="kanban-column-header">
                <h3 class="kanban-column-title">${column.title}</h3>
                <span class="kanban-column-count">${column.cards.length}</span>
            </div>
            <div class="kanban-cards">
                ${column.cards.map(card => `
                    <div class="kanban-card ${card.priority ? `priority-${card.priority}` : ''}">
                        <div class="kanban-card-title">${card.title}</div>
                        <div class="kanban-card-description">${card.description}</div>
                        ${card.tags ? `
                            <div class="kanban-card-meta">
                                ${card.tags.map(tag => `
                                    <span class="kanban-tag ${tag.toLowerCase()}">${tag}</span>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function displayRoadmapError() {
    const board = document.getElementById('kanban-board');
    if (!board) return;
    board.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Error loading roadmap. Please try again later.</p>';
}

// Initialize based on page
document.addEventListener('DOMContentLoaded', () => {
    // Load projects if on projects page
    if (document.getElementById('projects-container')) {
        loadProjects().then(() => {
            initCarousels();
        });
    }

    // Load roadmap if on roadmap page
    if (document.getElementById('kanban-board')) {
        loadRoadmap();
    }
});
