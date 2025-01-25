const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Gerar história com ChatGPT
async function generateStory(theme, childrenNames) {
  const prompt = `Crie uma história infantil sobre ${theme}. Inclua as seguintes crianças como protagonistas: ${childrenNames.join(
    ', '
  )}.`;
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 500,
  });
  return response.choices[0].message.content;
}

// Gerar imagem com DALL-E
async function generateImage(prompt) {
  const response = await openai.images.generate({
    model: 'dall-e-3',
    prompt: prompt,
    n: 1,
    size: '1024x1024',
  });
  return response.data[0].url;
}

module.exports = { generateStory, generateImage };