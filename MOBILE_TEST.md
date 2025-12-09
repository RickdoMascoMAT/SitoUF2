# Come Testare la Versione Mobile dal PC

## ✅ Modifiche Implementate

Il sito è ora completamente responsive e mobile-friendly con:
- **Hamburger Menu** per la navigazione su schermi piccoli
- **Layout adattivo** per tutti i componenti
- **Font e spaziature** ottimizzate per mobile
- **Immagini e card** che si adattano alle dimensioni dello schermo
- **Breakpoints** a 768px e 480px per diversi dispositivi

---

## 🔍 Metodi per Testare da PC

### **Metodo 1: DevTools di Chrome/Edge (Consigliato)**

1. **Avvia il server di sviluppo**:
   ```bash
   npm run dev
   ```

2. **Apri il browser** (Chrome o Edge) e vai all'URL mostrato (es. `http://localhost:5173`)

3. **Apri DevTools**:
   - Premi `F12` oppure `Ctrl + Shift + I`
   - Oppure: Click destro → "Ispeziona"

4. **Attiva la modalità dispositivo**:
   - Clicca sull'icona del telefono/tablet in alto a sinistra nella toolbar DevTools
   - Oppure premi `Ctrl + Shift + M`

5. **Scegli il dispositivo** dal menu a tendina:
   - iPhone 12/13/14/15
   - Samsung Galaxy S20/S21
   - iPad
   - Pixel 5/6/7
   - Oppure imposta dimensioni personalizzate

6. **Testa diverse orientazioni**:
   - Clicca sull'icona di rotazione per passare da portrait a landscape

7. **Testa il touch**:
   - Abilita "Touch" nella toolbar per simulare eventi touch

---

### **Metodo 2: Ridimensiona la Finestra del Browser**

1. Avvia il server: `npm run dev`
2. Apri il sito nel browser
3. Ridimensiona manualmente la finestra del browser
4. Il menu hamburger apparirà quando la larghezza è < 768px

---

### **Metodo 3: Firefox Responsive Design Mode**

1. Avvia il server: `npm run dev`
2. Apri Firefox e vai al sito
3. Premi `Ctrl + Shift + M` per aprire Responsive Design Mode
4. Scegli un dispositivo predefinito o imposta dimensioni personalizzate

---

### **Metodo 4: Testa su Dispositivo Mobile Reale**

1. **Assicurati che PC e smartphone siano sulla stessa rete WiFi**

2. **Trova l'indirizzo IP del tuo PC**:
   ```bash
   ipconfig
   ```
   Cerca "Indirizzo IPv4" (es. 192.168.1.5)

3. **Avvia il server con accesso esterno**:
   ```bash
   npm run dev -- --host
   ```

4. **Sul telefono**, apri il browser e vai a:
   ```
   http://[INDIRIZZO_IP_PC]:5173
   ```
   Esempio: `http://192.168.1.5:5173`

---

## 📱 Breakpoints Implementati

- **Desktop**: > 768px
  - Menu orizzontale completo
  - Layout a più colonne
  - Effetti hover completi

- **Tablet/Mobile**: ≤ 768px
  - Hamburger menu
  - Layout a colonna singola
  - Font e spaziature ridotte
  - Card a larghezza completa

- **Mobile Piccolo**: ≤ 480px
  - Font ulteriormente ridotti
  - Spaziature compatte
  - Ottimizzato per schermi molto piccoli

---

## 🎨 Funzionalità Mobile Specifiche

✅ **Hamburger Menu**: Click per aprire/chiudere il menu
✅ **Scroll Automatico**: Click sui link del menu chiude automaticamente il menu
✅ **Touch Friendly**: Pulsanti e link con area touch adeguata (min 44x44px)
✅ **Testo Leggibile**: Font-size minimo 14px su mobile piccoli
✅ **Immagini Responsive**: Si adattano al contenitore
✅ **Form Ottimizzati**: Input e select ben dimensionati per touch
✅ **Background Fixed Disabled**: Su mobile usa background-attachment: scroll per performance

---

## 🧪 Cosa Testare

- [ ] Apertura/chiusura hamburger menu
- [ ] Navigazione tra sezioni
- [ ] Compilazione form di iscrizione
- [ ] Visualizzazione card servizi
- [ ] Scroll dei testimonial
- [ ] Visualizzazione piani prezzi
- [ ] Form di contatto
- [ ] Tutte le animazioni e transizioni

---

## 🚀 Comandi Utili

```bash
# Avvio normale
npm run dev

# Avvio con accesso da rete locale (per testare da telefono)
npm run dev -- --host

# Build per produzione
npm run build

# Preview della build
npm run preview
```

---

## 💡 Suggerimenti

1. **Testa su più dispositivi/risoluzioni** per assicurarti che tutto funzioni bene
2. **Verifica la velocità di caricamento** su connessioni 3G/4G simulate (DevTools → Network throttling)
3. **Controlla l'accessibilità** con lo screen reader simulato
4. **Testa orientamento landscape e portrait**
5. **Verifica che tutti i touch target siano sufficientemente grandi** (min 44x44px)

---

## 🐛 Risoluzione Problemi

**Il menu hamburger non appare?**
- Assicurati che la larghezza finestra sia < 768px

**Il sito non si carica dal telefono?**
- Verifica che PC e telefono siano sulla stessa rete WiFi
- Controlla che il firewall non blocchi la porta 5173
- Usa `npm run dev -- --host` invece di `npm run dev`

**Le immagini sono troppo grandi?**
- Le immagini sono già ottimizzate con dimensioni responsive
- Per ulteriori ottimizzazioni, vedi `OTTIMIZZA_IMMAGINI.md`

---

Buon testing! 🎉

