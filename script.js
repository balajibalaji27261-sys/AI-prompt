
// Generate Prompt Function
function generatePrompt() {

    // Get input values
    const role = document.getElementById("role").value.trim();
    const task = document.getElementById("task").value.trim();
    const context = document.getElementById("context").value.trim();
    const constraints = document.getElementById("constraints").value.trim();
    const format = document.getElementById("format").value;

    const output = document.getElementById("output");
    const message = document.getElementById("message");

    // Check required fields
    if (!role || !task) {
        message.style.color = "red";
        message.innerText = "Please enter at least Role and Task!";
        return;
    }

    // Create prompt
    let prompt = `Act as ${role}.

Your Task:
${task}`;

    if (context) {
        prompt += `\n\nContext:
${context}`;
    }

    if (constraints) {
        prompt += `\n\nConstraints:
${constraints}`;
    }

    if (format) {
        prompt += `\n\nOutput Format:
Present the response in ${format} format.`;
    }

    prompt += `\n\nPlease provide a clear, accurate, well-organized and helpful response.`;

    // Display generated prompt
    output.innerText = prompt;

    message.style.color = "green";
    message.innerText = "Prompt generated successfully!";
}


// Copy Prompt Function
async function copyPrompt() {

    const output = document.getElementById("output");
    const message = document.getElementById("message");

    const prompt = output.innerText;

    if (!prompt || output.querySelector(".placeholder")) {
        message.style.color = "red";
        message.innerText = "Generate a prompt before copying!";
        return;
    }

    try {
        await navigator.clipboard.writeText(prompt);

        message.style.color = "green";
        message.innerText = "Prompt copied successfully!";

    } catch (error) {
        message.style.color = "red";
        message.innerText = "Copy failed. Please use Ctrl+C to copy.";
    }
}


// Clear All Function
function clearAll() {

    document.getElementById("role").value = "";
    document.getElementById("task").value = "";
    document.getElementById("context").value = "";
    document.getElementById("constraints").value = "";
    document.getElementById("format").value = "";

    document.getElementById("output").innerHTML =
        '<p class="placeholder">Your generated prompt will appear here...</p>';

    document.getElementById("message").innerText = "";
}


// Load Sample Prompt Function
function loadSample() {

    document.getElementById("role").value =
        "an experienced computer science teacher";

    document.getElementById("task").value =
        "Explain Artificial Intelligence and its applications.";

    document.getElementById("context").value =
        "I am a first-year college student learning the fundamentals of AI.";

    document.getElementById("constraints").value =
        "Use simple English, avoid complicated technical terms, and include real-world examples.";

    document.getElementById("format").value =
        "Bullet Points";

    generatePrompt();
}
