const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const OpenAI = require('openai');
// Directly using the API key
const openai = new OpenAI({
    apiKey: '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', // Replace with your actual API key
});
// Server Setup
const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3002'], // Allow specified origins
}));
// Endpoints
app.post("/chat", async (req, res) => {
    const { prompt } = req.body;
    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 512,
            temperature: 0,
        });
        res.send(completion.choices[0].message.content);
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).send('An error occurred');
    }
});
const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});