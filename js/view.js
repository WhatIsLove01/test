const form = document.getElementById('searchForm');
const resultSection = document.getElementById('result');
const noResultSection = document.getElementById('no-result');
const nameEl = document.getElementById('name');
const aboutEl = document.getElementById('about');
const projectsEl = document.getElementById('projects');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const id = document.getElementById('portfolioId').value.trim();
  if (!id) {
    alert('Введите ID портфолио');
    return;
  }

  resultSection.style.display = 'none';
  noResultSection.style.display = 'none';

  try {
    const docRef = doc(db, "portfolios", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      nameEl.textContent = data.name || 'Без имени';
      aboutEl.textContent = data.about || 'Нет информации';
      projectsEl.textContent = data.projects || 'Нет информации';

      resultSection.style.display = 'block';
    } else {
      noResultSection.style.display = 'block';
    }
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    alert('Ошибка при поиске портфолио.');
  }
});


