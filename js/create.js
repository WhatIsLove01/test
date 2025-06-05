
const form = document.getElementById('portfolioForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const id = document.getElementById('portfolioId').value.trim();
  const name = document.getElementById('name').value.trim();
  const about = document.getElementById('about').value.trim();
  const projects = document.getElementById('projects').value.trim();

  if (!id || !name) {
    alert('Пожалуйста, заполните обязательные поля');
    return;
  }

  try {
    await setDoc(doc(db, "portfolios", id), {
      name,
      about,
      projects
    });
    alert('Портфолио успешно сохранено!');
    form.reset();
  } catch (error) {
    console.error("Ошибка сохранения:", error);
    alert('Ошибка при сохранении портфолио.');
  }
});
