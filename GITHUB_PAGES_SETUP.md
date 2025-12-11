# 🚀 Setup GitHub Pages

## Metodo 1: Deploy su rickdomascomat.github.io (Repository Separato)

Questo è il metodo attualmente configurato che usa il workflow `deploy-to-user-site.yml`.

### Setup:
1. Vai su GitHub → Settings del repository **untitled** (questo progetto)
2. Vai in **Secrets and variables** → **Actions**
3. Crea un nuovo **Repository secret** chiamato `DEPLOY_TOKEN`
4. Il token deve avere permessi di scrittura sul repository rickdomascomat.github.io

### Come ottenere il token:
1. Vai su GitHub → Settings (del tuo profilo, non del repo)
2. Developer settings → Personal access tokens → Tokens (classic)
3. Generate new token (classic)
4. Seleziona questi permessi:
   - `repo` (tutti i permessi del repository)
5. Copia il token e inseriscilo come secret `DEPLOY_TOKEN`

### Verifica:
Ogni push su main/master farà il deploy automaticamente su rickdomascomat.github.io

---

## Metodo 2: Deploy diretto su GitHub Pages (Raccomandato)

Questo metodo usa il workflow `deploy-pages.yml` ed è più semplice.

### Setup:
1. Vai su GitHub → Settings del repository **untitled**
2. Vai in **Pages** nel menu laterale
3. Sotto **Build and deployment**:
   - Source: seleziona **GitHub Actions**
4. Salva

### Verifica:
Ogni push su main/master farà il build e deploy automaticamente.

Il sito sarà disponibile su: `https://rickdomascomat.github.io/untitled/`

**NOTA**: Se usi questo metodo, devi modificare `vite.config.js`:
```javascript
base: '/untitled/',  // invece di '/'
```

---

## Quale scegliere?

- **Metodo 1** (deploy-to-user-site.yml): Se vuoi che il sito sia su `https://rickdomascomat.github.io/` (root)
- **Metodo 2** (deploy-pages.yml): Se va bene `https://rickdomascomat.github.io/untitled/`

Per disabilitare un metodo, rinomina il file `.yml` in `.yml.disabled` o eliminalo.

---

## Test locale

```bash
npm run build
npm run preview
```

Apri http://localhost:4173 per vedere come apparirà il sito in produzione.

---

## Troubleshooting

### Il sito mostra 404
- Verifica che il file `.nojekyll` sia presente nella root del deploy
- Controlla che `base` in `vite.config.js` corrisponda al percorso corretto

### Il deploy fallisce
- Controlla i logs su GitHub Actions
- Verifica che il `DEPLOY_TOKEN` sia configurato correttamente (Metodo 1)
- Verifica che GitHub Pages sia abilitato (Metodo 2)

### Gli assets non si caricano
- Problema di `base` path in `vite.config.js`
- Per repository user site: `base: '/'`
- Per project site: `base: '/nome-repo/'`

