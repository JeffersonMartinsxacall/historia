const Token = require('../models/Token');
const generateToken = require('../utils/tokenGenerator');

// Função deve estar definida como "generateTokens"
async function generateTokens(req, res) {
  const { quantity } = req.body;

  try {
    const tokens = [];
    for (let i = 0; i < quantity; i++) {
      const token = generateToken();
      tokens.push(token);
      await Token.create({ token });
    }

    res.json({ success: true, tokens });
  } catch (error) {
    console.error('Erro ao gerar tokens:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
}

// Exporte a função corretamente
module.exports = { generateTokens }; // ✅ Exportação correta