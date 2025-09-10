document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const typedText = document.getElementById("typedText");

  const message = "Dear Eli,\n Hello to your parents. Sorry d carry magkita. Next time nalang.\n Enjoy your outing still\n\n -PJ UwU";

  let i = 0;

  function typeWriter() {
    if (i < message.length) {
      typedText.innerHTML += message.charAt(i) === "\n" ? "<br/>" : message.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }

  envelope.addEventListener("click", () => {
    if (!envelope.classList.contains("open")) {
      envelope.classList.add("open");
      setTimeout(typeWriter, 800); // start typing after envelope opens
    }
  });
});
