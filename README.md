# CV Lab Starter

Стартер для лабораторной работы: персональный CV → CI/CD → GitHub Pages.

## Стек

- [Vite](https://vitejs.dev/) — dev server + бандлер
- Vanilla JS + HTML + CSS (можешь добавить TS / фреймворк — на свой страх и риск, CI/lint придётся подкрутить)
- ESLint 9 (flat config) — линтер
- GitHub Actions — CI + CD

## Локальный запуск

```bash
npm install
npm run dev      # dev server на http://localhost:5173
npm run lint     # проверить код
npm run build    # собрать в dist/
npm run preview  # посмотреть прод-сборку локально
```

## Структура

```
.
├── .github/workflows/
│   ├── ci.yml        # PR → lint + build
│   └── deploy.yml    # main → GitHub Pages
├── src/
│   └── main.js       # JS-точка входа
├── index.html        # CV здесь
├── style.css
├── eslint.config.js
├── vite.config.js
└── package.json
```

## Что делать

1. Форкни template или используй "Use this template".
2. Сделай репо публичным.
3. **Settings → Pages → Source: GitHub Actions** (важно, без этого деплой не пройдёт).
4. Заведи ветку `feature/my-cv`, перепиши `index.html` / `style.css` под свой CV.
5. Открой PR в `main`. Дождись зелёного CI.
6. Merge. Смотри Actions — должен запуститься deploy.
7. Открой `https://<username>.github.io/<repo>/` — твой CV в проде.

Подробнее — `STUDENT_GUIDE.md`.

## Vibe coding log

- **LLM-ассистент:** _ChatGPT_
- **2–3 ключевых промпта:**
  1. _Проблема: терминал пишет zsh: command not found: npm на комманду npm install, что делать_
  2. _Как я могу посмотреть изменения, которые я внесла на сайте_
  3. _Напиши интересную анимацию в качестве нестандартного элемента для CV_
- **Что правил(а) руками после генерации:** _Добавляла сгенерируемый код в рабочие файлы_


## Live URL

> **TODO студент:** вставь сюда (https://uliatekhova-rgb.github.io/vibe/)
