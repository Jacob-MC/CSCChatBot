const { GoogleGenAI } = require("@google/genai");
const readlineSync = require("readline-sync");
const fs = require('fs');

//read key from key.txt file
const ai = new GoogleGenAI({ apiKey: fs.readFileSync('key.txt', 'utf8') });

(async function main() {
    while (true) {
        const input = readlineSync.question("Ask Gemini: ");
        const res = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: input,
        });
        console.log("\nGemini:", res.text, "\n");
    }
})();