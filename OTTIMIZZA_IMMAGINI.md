# 🖼️ OTTIMIZZAZIONE IMMAGINI NECESSARIA

## ⚠️ PROBLEMA ATTUALE

Le immagini nella sezione servizi sono TROPPO PESANTI e causano lag:

- `nutrition.jpg` = **5.1 MB** ❌
- `personal-training.jpg` = **3.65 MB** ❌

**Totale: 8.75 MB solo per 2 immagini!**

## ✅ OBIETTIVO

Le immagini dovrebbero essere:
- **Max 200-300 KB ciascuna**
- Formato ottimizzato (JPEG 80% qualità o WebP)
- Dimensioni giuste (max 1200px larghezza)

## 🔧 COME OTTIMIZZARE

### Opzione 1: Online (VELOCE)
1. Vai su **https://tinypng.com** o **https://squoosh.app**
2. Carica `nutrition.jpg` e `personal-training.jpg`
3. Scarica le versioni ottimizzate
4. Sostituisci i file in `src/assets/`

### Opzione 2: Photoshop/GIMP
1. Apri l'immagine
2. Riduci dimensioni a max 1200px larghezza
3. Salva come JPEG con qualità 70-80%

### Opzione 3: Automatico con Sharp (Node.js)
```bash
npm install sharp --save-dev
```

Crea file `optimize-images.js`:
```javascript
const sharp = require('sharp');

sharp('src/assets/nutrition.jpg')
  .resize(1200, null, { withoutEnlargement: true })
  .jpeg({ quality: 80 })
  .toFile('src/assets/nutrition-optimized.jpg');

sharp('src/assets/personal-training.jpg')
  .resize(1200, null, { withoutEnlargement: true })
  .jpeg({ quality: 80 })
  .toFile('src/assets/personal-training-optimized.jpg');
```

Poi esegui:
```bash
node optimize-images.js
```

## 🎯 RISULTATO ATTESO

Dopo ottimizzazione:
- `nutrition.jpg` = **~200 KB** ✅ (riduzione del 96%)
- `personal-training.jpg` = **~200 KB** ✅ (riduzione del 95%)

**Il sito sarà 40x più veloce nella sezione servizi!** 🚀

## 📝 OTTIMIZZAZIONI CSS GIÀ APPLICATE

Ho già applicato queste ottimizzazioni CSS per ridurre il lag:
- ✅ Rimosso scale e box-shadow sulle immagini al hover
- ✅ Disabilitato ::before con gradient radiale pesante
- ✅ Semplificato hover: solo translateY e border-color
- ✅ Rimosso text-shadow dal titolo hover
- ✅ Transizioni ridotte a solo transform e border-color

Ma **le immagini vanno comunque ottimizzate** per performance ottimali!

