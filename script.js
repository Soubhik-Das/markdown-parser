const text = document.querySelector("#editor");
const clearBtn = document.querySelector("#clearBtn");
const preview = document.querySelector("#preview");

// Default content for the editor when the page loads
const defaultContent = `# Welcome!
## Start editing here...
[Learn about markdown](https://www.markdownguide.org/basic-syntax/)`;


// Function to initialize the editor with default content
function loadContent() {
    text.value = defaultContent; // Set default Markdown text
    updatePreview(defaultContent); // Render the default content in the preview
}

// Function to convert Markdown input to HTML and apply syntax highlighting
function updatePreview(content) {
    preview.innerHTML = marked.parse(content); // Convert Markdown to HTML
    document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightElement(block); // Apply syntax highlighting to code blocks
    });
}

// Function to clear the text area and preview
function clearContent() {
    text.value = ""; // Clear the input field
    preview.innerHTML = ""; // Clear the preview section
}

// Configure marked.js to enable syntax highlighting for code blocks
marked.setOptions({
    highlight: function (code) {
        return hljs.highlightAuto(code).value; // Auto-detect language and highlight
    },
});

// Event listener for real-time Markdown preview updates
text.addEventListener("input", () => {
    updatePreview(text.value);
});

// Event listener for clearing the editor and preview
clearBtn.addEventListener("click", clearContent);

// Load default content when the page is first loaded
loadContent();
