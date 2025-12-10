CLEANUP - Repository 'untitled'

Scopo: elenco di file e modifiche proposte per pulire asset e dipendenze non utilizzate.

Azioni già eseguite (alla data odierna):
- Rimosso i file non usati dalla cartella del progetto:
  - `src/assets/nutrition.jpg` (rimosso)
  - `src/assets/personal-training.jpg` (rimosso)
  - `public/fonts/Futura-Medium.woff2` (rimosso)
  - `optimize-images.js` (rimosso)
  - `src/assets/erasebg-transformed.png` (rimosso)
  - `src/assets/hero-bg.jpg` (rimosso)
- Aggiornato `package.json` rimuovendo `@types/react` e `@types/react-dom` e `sharp` dai `devDependencies`.
- Rimosso la cartella `dist/` (build output) dal repository locale e aggiunta regola in `.gitignore`.

File/Asset rimasti non rimossi (usati dall'app):
- src/assets/erasebg-transformed-downscaled.png
- src/assets/hero-bg-downscaled.png
- src/assets/nutrition-downscaled.png
- src/assets/personal-training-downscaled.png
- public/vite.svg

Note su dipendenze:
- `@types/react` e `@types/react-dom`: rimossi (progetto in JavaScript). Se intendi migrare a TypeScript, reinstallali.
- `sharp`: rimosso (lo script `optimize-images.js` è stato rimosso). Se vuoi ripristinare lo script, reinstallare `sharp` e ripristinare il file.

Istruzioni consigliate (passi successivi):
1. Controlla lo stato Git e crea un branch per la pulizia (es. `cleanup-apply`) se vuoi organizzare le modifiche su un branch dedicato:
   - git checkout -b cleanup-apply
2. Verifica i cambiamenti e committa:
   - git add -A
   - git commit -m "chore: remove unused assets and cleanup devDependencies"
3. Verifica il funzionamento locale:
   - npm ci
   - npm run dev
   - oppure npm run build
4. Se vuoi mantenere invece degli archivi: crea `archive/` e sposta i file importanti prima di eliminarli definitivamente.

Rollback (se necessario):
- Se vuoi ripristinare i file rimossi, puoi recuperare dal commit precedente (se hai già committato) oppure ripristinarli manualmente dal backup.

Se vuoi, posso eseguire i comandi Git per creare un commit con le modifiche applicate e/o creare un branch e pusharlo; dimmi se vuoi che proceda.
