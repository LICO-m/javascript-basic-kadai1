const clickBtn = document.getElementById('btn');
const newText = document.getElementById('text')
clickBtn.addEventListener('click', () => {
newText.textContent = "ボタンをクリックしました";
});