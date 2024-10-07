document.addEventListener('DOMContentLoaded', () => {
    const addSkillBtn = document.getElementById('add-skill-btn');
    const modal = document.getElementById('add-skill-modal');
    const closeBtn = document.querySelector('.btn-cancel');
    const form = document.getElementById('add-skill-form');
    const skillsContainer = document.querySelector('.skills-container');

    addSkillBtn.onclick = function() {
        modal.style.display = 'block';
    };

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    form.onsubmit = function(e) {
        e.preventDefault(); 

        const domain = document.getElementById('domain').value.trim(); 
        const skillInputs = document.querySelectorAll('.pro1 input[type="text"]'); 
        const proficiencyInputs = document.querySelectorAll('.pro2 input[type="number"]'); 

        if (!domain) {
            alert('Domain is required.');
            return;
        }

        let hasValidSkill = false;
        skillInputs.forEach((skillInput, index) => {
            const skillName = skillInput.value.trim();
            const proficiency = proficiencyInputs[index].value;

            if (skillName && proficiency) {
                hasValidSkill = true;
            }
        });

        if (!hasValidSkill) {
            alert('At least one skill and its proficiency are required.');
            return;
        }

        const newCard = document.createElement('div');
        newCard.className = 'skill-card';
        newCard.innerHTML = `<h4>${domain}</h4>`;

        skillInputs.forEach((skillInput, index) => {
            const skillName = skillInput.value.trim();
            const proficiency = proficiencyInputs[index].value;

            if (skillName && proficiency) {
                newCard.innerHTML += `<div class="skill-para">
                    <div>${skillName}</div><div>${proficiency} %</div>
                </div>
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${proficiency}%"></div>
                </div>`;
            }
        });

        skillsContainer.appendChild(newCard);

        form.reset();

        modal.style.display = 'none';
    };
});
