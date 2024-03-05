document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("copyButton");
    copyButton.style.display = "none"; // Initially hide the copy button
});

async function getQuote() {
    const quoteContainer = document.getElementById("quote");
    const quoteContent = document.getElementById("quoteContent");
    const quoteAuthor = document.getElementById("quoteAuthor");
    const copyButton = document.getElementById("copyButton");

    quoteContainer.classList.remove("fade-in");
    quoteContent.innerHTML = ""; // Clear previous quote
    quoteAuthor.innerHTML = "";
    copyButton.style.display = "none"; // Hide the copy button

    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();

        if (response.ok) {
            const { content, author } = data;
            quoteContent.textContent = `"${content}"`;
            quoteAuthor.textContent = `- ${author}`;
            copyButton.style.display = "inline-block"; // Show the copy button
        } else {
            quoteContainer.innerHTML = "<p>Failed to fetch a quote. Please try again later.</p>";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        quoteContainer.innerHTML = "<p>An error occurred. Please try again later.</p>";
    } finally {
        quoteContainer.classList.add("fade-in");
    }
}

function copyQuote() {
    const quoteText = document.getElementById("quote").innerText;

    const textarea = document.createElement("textarea");
    textarea.value = quoteText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("Quote copied to clipboard!");
}
