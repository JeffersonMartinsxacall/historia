const express = require('express');
// Certifique-se de importar generateTokens do tokenController
const { createStory } = require('../controllers/storyController');
const { generateTokens } = require('../controllers/tokenController'); // ✅ Importação correta

const router = express.Router();

// Rotas
router.post('/generate-story', createStory);
router.post('/generate-tokens', generateTokens); // Agora generateTokens está definido

module.exports = router;