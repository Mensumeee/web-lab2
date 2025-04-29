// Add dynamic functionality to CV elements
document.addEventListener('DOMContentLoaded', function() {
    // Make sections collapsible
    const makeCollapsible = () => {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const heading = section.querySelector('h2');
            // Only add if not already clickable
            if (!heading.getAttribute('data-clickable')) {
                heading.setAttribute('data-clickable', 'true');
                heading.style.cursor = 'pointer';
                heading.insertAdjacentHTML('beforeend', '<span class="toggle-icon"> ▼</span>');
                
                heading.addEventListener('click', () => {
                    const content = Array.from(section.children).filter(child => child !== heading);
                    const icon = heading.querySelector('.toggle-icon');
                    
                    content.forEach(el => {
                        if (el.style.display === 'none') {
                            el.style.display = '';
                            icon.textContent = ' ▼';
                        } else {
                            el.style.display = 'none';
                            icon.textContent = ' ▶';
                        }
                    });
                });
            }
        });
    };

    // Create add buttons
    const addButtons = () => {
        // For education
        if (!document.getElementById('addEducationBtn')) {
            const educationSection = document.querySelector('.education-item:last-child');
            if (educationSection) {
                educationSection.insertAdjacentHTML('afterend', 
                    '<button id="addEducationBtn" class="dynamic-btn">+ Add Education</button>');
                
                document.getElementById('addEducationBtn').addEventListener('click', () => {
                    const newItem = document.createElement('div');
                    newItem.className = 'education-item dynamic-added';
                    newItem.innerHTML = `
                        <h3 contenteditable="true">New Education</h3>
                        <p class="degree" contenteditable="true">Degree</p>
                        <p class="duration" contenteditable="true">Year - Year</p>
                        <button class="dynamic-remove-btn">Remove</button>
                    `;
                    document.getElementById('addEducationBtn').before(newItem);
                    
                    newItem.querySelector('.dynamic-remove-btn').addEventListener('click', function() {
                        this.parentElement.remove();
                    });
                });
            }
        }

        // For experience
        if (!document.getElementById('addExperienceBtn')) {
            const experienceSection = document.querySelector('.experience-item:last-child');
            if (experienceSection) {
                experienceSection.insertAdjacentHTML('afterend', 
                    '<button id="addExperienceBtn" class="dynamic-btn">+ Add Experience</button>');
                
                document.getElementById('addExperienceBtn').addEventListener('click', () => {
                    const newItem = document.createElement('div');
                    newItem.className = 'experience-item dynamic-added';
                    newItem.innerHTML = `
                        <p class="job-title" contenteditable="true">New Position</p>
                        <p class="job-period" contenteditable="true">Year - Year</p>
                        <p class="job-company" contenteditable="true">Company</p>
                        <p class="job-description" contenteditable="true">Description</p>
                        <button class="dynamic-remove-btn">Remove</button>
                    `;
                    document.getElementById('addExperienceBtn').before(newItem);
                    
                    newItem.querySelector('.dynamic-remove-btn').addEventListener('click', function() {
                        this.parentElement.remove();
                    });
                });
            }
        }

        // For skills
        if (!document.getElementById('addSkillBtn')) {
            const skillsList = document.querySelector('.skills-list');
            if (skillsList) {
                skillsList.insertAdjacentHTML('beforeend', 
                    '<button id="addSkillBtn" class="dynamic-btn">+ Add Skill</button>');
                
                document.getElementById('addSkillBtn').addEventListener('click', () => {
                    const newItem = document.createElement('li');
                    newItem.className = 'dynamic-added';
                    newItem.contentEditable = true;
                    newItem.textContent = 'New Skill';
                    document.getElementById('addSkillBtn').before(newItem);
                });
            }
        }
    };

    // Add dynamic CSS
    const addDynamicStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            .dynamic-btn {
                background-color: #4CAF50;
                color: white;
                border: none;
                padding: 5px 10px;
                margin: 10px 0;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
                display: block;
            }
            .dynamic-btn:hover {
                background-color: #45a049;
            }
            .dynamic-remove-btn {
                background-color: #f44336;
                color: white;
                border: none;
                padding: 3px 8px;
                margin-top: 5px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 12px;
            }
            .dynamic-remove-btn:hover {
                background-color: #d32f2f;
            }
            .dynamic-added {
                animation: fadeIn 0.3s;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            [contenteditable="true"] {
                border-bottom: 1px dashed #999;
                min-width: 50px;
            }
            .toggle-icon {
                font-size: 0.8em;
                margin-left: 5px;
            }
        `;
        document.head.appendChild(style);
    };

    // Execute functions
    addDynamicStyles();
    makeCollapsible();
    addButtons();
});