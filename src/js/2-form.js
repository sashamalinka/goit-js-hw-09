const form = document.querySelector(".feedback-form");

const formData = {
  email: "",
  message: "",
};

// Ключ для локального сховища
const STORAGE_KEY = "feedback-form-state";

// Завантаження даних із локального сховища при завантаженні сторінки
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  Object.assign(formData, JSON.parse(savedData));
  form.email.value = formData.email;
  form.message.value = formData.message;
}

// Функція для оновлення formData і збереження в локальне сховище
form.addEventListener("input", (event) => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Обробник відправки форми
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert("Fill please all fields");
    return;
  }

  console.log("Form Data:", formData);

  // Очищення даних
  localStorage.removeItem(STORAGE_KEY);
  formData.email = "";
  formData.message = "";
  form.reset();
});