const { generateStory, generateImage } = require('../utils/openai');
const Token = require('../models/Token');

async function createStory(req, res) {
  const { token, childName, additionalChildren, theme } = req.body;

  try {
    // Verificar se o token é válido
    const tokenRecord = await Token.findOne({ where: { token, used: false } });
    if (!tokenRecord) {
      return res.status(400).json({ error: 'Token inválido ou já utilizado.' });
    }

    // Gerar história e imagens
    const childrenNames = [childName, ...additionalChildren];
    const story = await generateStory(theme, childrenNames);
    const imageUrl = await generateImage(`Ilustração para a história: ${theme}`);

    // Marcar token como usado
    await tokenRecord.update({ used: true });

    // Retornar resposta
    res.json({ story, imageUrl });
  } catch (error) {
    console.error('Erro ao gerar história:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
}

module.exports = { createStory };