const { GoogleGenAI } = require("@google/genai");
const fs = require("fs");
const express = require("express");
const app = express();

//reads key from key.txt
const ai = new GoogleGenAI({ apiKey: fs.readFileSync("key.txt","utf8").trim() });

//routes
app.use(express.static("public"));
app.get("/ask", async (req,res)=>{
    const r = await ai.models.generateContent({ model:"gemini-2.5-flash", contents:req.query.prompt||"" });
    res.send(r.text);
});
app.listen(3000);
