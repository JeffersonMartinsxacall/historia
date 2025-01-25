const { v4: uuidv4 } = require('uuid');

// Gerar um token único
function generateToken() {
  return uuidv4(); // Gera um UUID v4 (ex: "f47ac10b-58cc-4372-a567-0e02b2c3d479")
}

module.exports = generateToken;