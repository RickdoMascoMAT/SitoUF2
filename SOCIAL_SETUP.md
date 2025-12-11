# Guida alla Configurazione dei Social Media

## 📱 Instagram

### Come ottenere il link di un post Instagram:

1. Apri Instagram e vai al post che vuoi incorporare
2. Clicca sui tre puntini (...) in alto a destra del post
3. Seleziona "Incorpora" o "Embed"
4. Copia il codice generato da Instagram
5. Apri il file `src/components/Social.jsx`
6. Cerca la riga con `data-instgrm-permalink="https://www.instagram.com/p/ESEMPIO/..."`
7. Sostituisci `ESEMPIO` con l'ID del tuo post

**Esempio:**
- URL del post: `https://www.instagram.com/p/ABC123xyz/`
- ID del post: `ABC123xyz`

### Aggiornare il nome utente Instagram:

Nel file `src/components/Social.jsx` e `src/components/Footer.jsx` e `src/components/Header.jsx`, cerca:
```javascript
href="https://www.instagram.com/ironrhino"
```
E sostituisci `ironrhino` con il tuo username Instagram.

---

## 🎥 YouTube

### Come ottenere l'ID di un video YouTube:

1. Apri il video YouTube che vuoi incorporare
2. Copia l'URL del video dalla barra degli indirizzi
3. L'ID del video si trova dopo `v=` nell'URL

**Esempio:**
- URL completo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID del video: `dQw4w9WgXcQ`

### Configurare i video YouTube:

1. Apri il file `src/components/Social.jsx`
2. Cerca `VIDEO_ID_1` e sostituiscilo con l'ID del tuo primo video (tutorial esercizi)
3. Cerca `VIDEO_ID_2` e sostituiscilo con l'ID del tuo secondo video (ricette)

**Prima:**
```javascript
src="https://www.youtube.com/embed/VIDEO_ID_1"
```

**Dopo:**
```javascript
src="https://www.youtube.com/embed/dQw4w9WgXcQ"
```

### Aggiornare il nome del canale YouTube:

Nei file `src/components/Social.jsx`, `src/components/Footer.jsx` e `src/components/Header.jsx`, cerca:
```javascript
href="https://www.youtube.com/@ironrhino"
```
E sostituisci `@ironrhino` con il tuo handle YouTube (con la @).

---

## 🔧 Personalizzazioni Avanzate

### Cambiare i titoli dei video:

Nel file `src/components/Social.jsx`, puoi modificare:
```javascript
<h4>Tutorial Esercizi</h4>
```
e
```javascript
<h4>Ricette Fitness</h4>
```

### Aggiungere più video:

Puoi duplicare il blocco `<div className="video-container">` per aggiungere più video:

```javascript
<div className="video-container">
  <h4>Titolo del Video</h4>
  <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/TUO_VIDEO_ID"
    title="Descrizione"
    style={{ border: 0 }}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
```

---

## ✅ Checklist

- [ ] Aggiornato username Instagram in Header.jsx
- [ ] Aggiornato username Instagram in Footer.jsx
- [ ] Aggiornato username Instagram in Social.jsx
- [ ] Inserito link post Instagram in Social.jsx
- [ ] Aggiornato handle YouTube in Header.jsx
- [ ] Aggiornato handle YouTube in Footer.jsx
- [ ] Aggiornato handle YouTube in Social.jsx
- [ ] Inserito ID video 1 (Tutorial Esercizi) in Social.jsx
- [ ] Inserito ID video 2 (Ricette Fitness) in Social.jsx

---

## 📝 Note

- Dopo aver modificato i file, salva e riavvia il server di sviluppo se necessario
- Gli embed di Instagram potrebbero richiedere qualche secondo per caricarsi
- Assicurati che i video YouTube siano pubblici o non elencati

