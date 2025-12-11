# 🚀 GUIDA RAPIDA - Deploy su GitHub Pages

## ✅ Passi da seguire SU GITHUB (fai questo PRIMA di pushare):

1. **Vai sul tuo repository su GitHub**
   - Apri: https://github.com/RickdoMascoMAT/untitled

2. **Clicca su "Settings"** (in alto a destra del repository)

3. **Nel menu laterale sinistro, clicca su "Pages"**

4. **Sotto "Build and deployment":**
   - **Source**: Seleziona **"GitHub Actions"** (NON "Deploy from a branch")
   - Clicca Save se appare

5. **FATTO!** ✅

---

## 🚀 Ora fai il commit e push:

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push
```

---

## 📍 Dove trovare il sito:

Dopo il push, vai su:
- **GitHub → Actions** (tab in alto)
- Vedrai il workflow "Deploy to GitHub Pages (Direct)" in esecuzione
- Aspetta che finisca (circa 1-2 minuti)
- Il sito sarà disponibile su: **https://rickdomascomat.github.io/untitled/**

---

## 🔍 Come verificare che funzioni:

1. **Dopo il push**, vai su GitHub → Actions
2. Dovresti vedere un workflow in esecuzione (pallino giallo 🟡)
3. Aspetta che diventi verde ✅
4. Clicca sul workflow per vedere i dettagli
5. Alla fine vedrai l'URL del sito deployato

---

## ⚠️ IMPORTANTE:

- Ho già configurato tutto nel codice
- Ho disabilitato il vecchio workflow che non funzionava
- L'unico passaggio che DEVI fare TU è il punto 1-4 sopra (su GitHub)
- Dopo quello, basta fare commit e push

---

## 🐛 Se qualcosa non va:

1. Controlla su GitHub → Actions per vedere gli errori
2. Verifica di aver selezionato "GitHub Actions" come Source (non "Deploy from a branch")
3. Aspetta qualche minuto, GitHub Pages può impiegare tempo la prima volta

---

## 💡 Vuoi cambiare l'URL del sito?

**Opzione A** - Sito su `rickdomascomat.github.io/untitled/`:
- ✅ Già configurato così! Non fare nulla.

**Opzione B** - Sito su `rickdomascomat.github.io/` (root):
- Rinomina questo repository in "rickdomascomat.github.io"
- Cambia in `vite.config.js`: `base: '/'`
- Poi segui i passi sopra

