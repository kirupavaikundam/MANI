// Basic navigation and functionality

function nextSlide() {
    const slides = document.querySelectorAll('.onboarding-slide');
    let activeIndex = [...slides].findIndex(slide => slide.classList.contains('active'));
    slides[activeIndex].classList.remove('active');
    slides[(activeIndex + 1) % slides.length].classList.add('active');
}

function finishOnboarding() {
    window.location.href = 'dashboard.html';
}

function viewPortfolio() {
    window.location.href = 'portfolio.html';
}

function viewChallenges() {
    window.location.href = 'challenges.html';
}

function viewNews() {
    window.location.href = 'news-insights.html';
}

function investInFund(fund) {
    alert(`Investing in ${fund}...`);
}

function logout() {
    alert('Logged out successfully!');
    window.location.href = 'index.html';
}

function addFund() {
    alert('Add fund functionality to be implemented.');
}

function joinChallenge(challengeId) {
    alert(`Joining Challenge #${challengeId}...`);
}

function readMore() {
    alert('Read more functionality to be implemented.');
}

function sellFund(fund) {
    alert(`Selling ${fund}...`);
}

document.getElementById('settings-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Settings updated successfully!');
});
