document.getElementById('storyForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const token = document.getElementById('token').value;
  const childName = document.getElementById('childName').value;
  const additionalChildren = document.getElementById('additionalChildren').value.split(',').map(name => name.trim());
  const theme = document.getElementById('theme').value;

  try {
    const response = await fetch('https://tarifaminima.top/historia/api/generate-story', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, childName, additionalChildren, theme }),
    });

    const data = await response.json();

    if (response.ok) {
      document.getElementById('storyText').textContent = data.story;
      document.getElementById('storyImage').src = data.imageUrl;
      document.getElementById('storyResult').classList.remove('hidden');
    } else {
      alert(data.error || 'Erro ao gerar história.');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao conectar ao servidor.');
  }
});