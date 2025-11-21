# 🎂 Magical Birthday Website for Your Girlfriend

## 🌟 What's Included

This is a stunning, cinematic birthday website featuring:

### ✨ Features
- **Landing Section** - Glowing "Happy Birthday My Love" text with floating hearts and particles
- **Her Name in a Heart Frame** - Beautiful animated frame with sparkles
- **Photo Gallery** - Smooth auto-sliding showcase for 8 memorable moments
- **Romantic Birthday Message** - Poetic, heartfelt message with stunning typography
- **Interactive Surprise** - Click to reveal floating hearts and a handwritten love note
- **Final Signature** - "Forever yours, Shivam" with glowing animation

### 🎨 Design Elements
- Soft pink and rose color palette with gold accents
- Smooth animations and transitions
- Floating hearts and sparkle effects
- Bokeh-style particle effects
- Elegant fonts: Poppins, Playfair Display, Great Vibes
- Fully responsive (mobile + desktop)
- Custom pink scrollbar

## 🚀 How to View

The website is currently running at: **http://localhost:3000**

Open this URL in your browser to see the magic! ✨

## 📝 Customization Instructions

### 1. Add Her Name
Open `app/page.tsx` and find line 83:
```tsx
[Her Name]
```
Replace `[Her Name]` with your girlfriend's actual name.

### 2. Add Real Photos (Optional)
The gallery currently uses beautiful placeholder gradients. To add real photos:

**Option A - Simple way (using URLs):**
- Upload photos to an image hosting service
- Replace the placeholder div in the photos section with:
```tsx
<img src="YOUR_IMAGE_URL" alt="caption" className="w-full h-full object-cover rounded-2xl" />
```

**Option B - Local images:**
1. Add photos to the `public` folder (e.g., `public/photos/photo1.jpg`)
2. Use Next.js Image component:
```tsx
import Image from 'next/image';
// Then in the photo section:
<Image src="/photos/photo1.jpg" alt="caption" fill className="object-cover rounded-2xl" />
```

### 3. Customize Messages
Edit any text in `app/page.tsx` to personalize:
- Line 93: Main tagline
- Lines 169-187: Birthday message section
- Lines 223-235: Surprise love note
- Line 258: Final signature

### 4. Adjust Photo Transition Speed
Find line 30 in `app/page.tsx`:
```tsx
}, 4000); // Change this number (milliseconds) - 4000 = 4 seconds
```

## 🎵 Adding Background Music (Optional)

Add this code inside the `<section>` for the surprise (around line 196):
```tsx
<audio autoPlay loop>
  <source src="/your-music-file.mp3" type="audio/mp3" />
</audio>
```

Place your music file in the `public` folder.

## 📱 Sharing the Website

### Option 1: Deploy Online (Recommended)
Deploy to Vercel for free:
```bash
npm run build
npx vercel
```
Follow the prompts, and you'll get a live URL to share!

### Option 2: Show on Your Device
- Keep the server running
- Open http://localhost:3000 on your device
- Present it to her!

## 🎁 Tips for the Big Reveal

1. **Full Screen Mode**: Press F11 in browser for immersive experience
2. **Perfect Timing**: Have it open and ready before she sees it
3. **Encourage Interaction**: Tell her to scroll and click the surprise button
4. **Music Ready**: Have romantic music playing in the background
5. **Her Reaction**: Capture her smile (with permission)! 📸

## 💖 Troubleshooting

**Website not loading?**
- Make sure you're in the `birthday-site` folder
- Run: `npm install` then `npm run dev`

**Want to stop the server?**
- Press `Ctrl + C` in the terminal

**Need to restart?**
- `npm run dev`

## 🌹 Final Touch

Before showing her:
1. Replace `[Her Name]` with her actual name
2. Customize the messages if you want to add more personal touches
3. Test all animations by scrolling through once
4. Have the surprise button ready (don't click it until you show her!)

---

**Made with 💕 by Spiky**

*She's going to love it!* ✨
