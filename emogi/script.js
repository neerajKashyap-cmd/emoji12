const emojis = [
  "😀","😂","🥲","😍","😎","🤯","😭","😡",
  "🤡","👻","🔥","💀","✨","🚀","🍕","🐶","🐱","🦄"
];

function generateEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const emojiBox = document.getElementById("emoji");

  emojiBox.innerText = emojis[randomIndex];
  emojiBox.style.transform = "scale(1.2)";

  setTimeout(() => {
    emojiBox.style.transform = "scale(1)";
  }, 150);
}


