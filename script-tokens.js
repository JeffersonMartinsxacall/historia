document.getElementById('tokenForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const quantity = document.getElementById('quantity').value;

  try {
    const response = await fetch('https://tarifaminima.top/historia/api/generate-tokens', {
      method: 'POST', // ✅ Método POST
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity }),
    });

    const data = await response.json();

    if (response.ok) {
      const tokenList = document.getElementById('tokenList');
      tokenList.innerHTML = data.tokens.map(token => `<li>${token}</li>`).join('');
      document.getElementById('tokenResult').classList.remove('hidden');
    } else {
      alert(data.error || 'Erro ao gerar tokens.');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao conectar ao servidor.');
  }
});