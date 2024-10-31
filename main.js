// main.js
const fileInput = document.getElementById('fileInput');
const chooseFileButton = document.querySelector('.btn');

fileInput.addEventListener('change', function() {
    const fileName = this.files[0] ? this.files[0].name : 'No file chosen';
    chooseFileButton.textContent = fileName; // Update file name on button
    chooseFileButton.style.backgroundColor = "#86aaf9";
    chooseFileButton.style.color = "#1b1b2f";
});
