# 💕 Romantic Proposal Website 💕

A beautiful, interactive romantic proposal website featuring soft animations, romantic music, photo gallery, and a heartfelt question reveal.

## 🎯 Features

✨ **Soft Pastel Design** - Beautiful pink and white color palette
💌 **Interactive Envelope** - Click to open and reveal your message
📸 **Photo Album** - Display your favorite couple photos in a cute polaroid-style layout
🎥 **Video Reveal** - Show a custom proposal video
🌹 **Proposal Question** - Beautifully animated proposal question with rose reveal
❤️ **Floating Hearts** - Continuous animation of floating hearts across all pages
🎵 **Background Music** - Romantic music with mute/unmute toggle
🎉 **Confetti Celebration** - Heart confetti explosion on "YES" response
📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop

## 📁 File Structure

```
proposal-website/
├── index.html          # Main HTML file with page structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript for interactions and animations
├── romantic-music.mp3  # Background music file (you need to add this)
├── proposal-video.mp4  # Proposal video file (you need to add this)
├── photo1.jpg          # Photo memories (6 photos needed)
├── photo2.jpg
├── photo3.jpg
├── photo4.jpg
├── photo5.jpg
├── photo6.jpg
└── README.md           # This file
```

## 🎬 How to Customize

### 1. **Add Your Photos**
Replace `photo1.jpg` through `photo6.jpg` with your couple photos. You can add more photos by:
- Adding more `.photo-item` divs in the HTML
- Adjusting the grid layout in CSS if needed

### 2. **Add Background Music**
Replace `romantic-music.mp3` with your preferred romantic song:
- Supported formats: MP3, WAV, OGG
- Keep the volume at a comfortable level (currently set to 0.3)
- You can adjust the volume in `script.js` line: `audio.volume = 0.3;`

### 3. **Add Proposal Video**
Replace `proposal-video.mp4` with your custom proposal video:
- Supported formats: MP4, WebM, OGG
- Video should be landscape oriented for best display
- The video will auto-transition to the final page when it ends

### 4. **Customize Text**

**Letter Text (Page 1):**
Edit in `index.html`:
```html
<p class="letter-text">I love you so muchhh 💕</p>
```

**Album Title (Page 2):**
```html
<h2 class="album-title">Our little world 💖</h2>
```

**Proposal Question (Page 4):**
```html
<h1 class="big-question">Will you be my boyfriend? 💍</h1>
```

**Button Text:**
```html
<button class="yes-button" id="yesBtn">YES 💖</button>
<button class="yesss-button" id="ysssBtn">YESSS 😭💕</button>
```

**Confirmation Message:**
```html
<p class="confirmation-text" id="confirmationText">Yayyy!! I'm so happy 💕</p>
```

### 5. **Customize Colors**

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-pink: #FFB6D9;
    --soft-pink: #FFD9E8;
    --light-pink: #FFF0F5;
    --blush: #F5E6E8;
    --red-accent: #FF6B9D;
    --white: #FFFFFF;
}
```

### 6. **Adjust Animation Speeds**

In `script.js`, you can modify:
- Heart floating speed: Change `6s` in `float-up` animation (CSS)
- Heart creation frequency: Line ~45: `setInterval(..., 500)` (lower = more frequent)
- Envelope auto-transition: Line ~122: `setTimeout(..., 4000)` (milliseconds)
- Video auto-transition: Line ~142: `setTimeout(..., 1000)` (milliseconds)

## 🚀 How to Use

1. **Extract all files** to a folder
2. **Add your media files:**
   - Photos (photo1.jpg - photo6.jpg)
   - Music (romantic-music.mp3)
   - Video (proposal-video.mp4)
3. **Open `index.html`** in your web browser
4. **Test all interactions:**
   - Click the envelope to open it
   - View photos and click next
   - Click the video button to play your proposal video
   - See the proposal question and click YES/YESSS

## 📱 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎵 Music & Video Tips

**For Music:**
- Use royalty-free sites like:
  - Pixabay (pixabay.com/music)
  - YouTube Audio Library
  - Free Music Archive (freemusicarchive.org)
- Recommended length: 5-10 minutes
- Soft, romantic instrumental works best

**For Video:**
- Keep video under 5 minutes for best experience
- Use 1080p or higher resolution
- Landscape orientation (16:9 aspect ratio)
- MP4 format with H.264 codec for best compatibility

## 🔊 Audio Autoplay Notes

Modern browsers require user interaction before autoplay works. The website handles this:
- Music will attempt to autoplay when page loads
- If autoplay is blocked, it will play on the first user interaction
- Use the music toggle (♫ button) to mute/unmute anytime

## 💡 Tips for Best Experience

1. **Test on the actual device** where you'll present it
2. **Check volume levels** for music - keep it romantic but audible
3. **Verify all media files** load correctly before the big moment
4. **Use landscape mode** on mobile for better presentation
5. **Close unnecessary browser tabs** to avoid audio conflicts
6. **Consider using full-screen mode** (F11) for immersive experience

## 🎨 Design Customization

The website uses CSS animations and gradients. For advanced customization:
- Modify animation durations in `styles.css`
- Change gradient directions and colors
- Adjust spacing and sizing with CSS variables
- Add/remove animation classes

## ❓ Troubleshooting

**Music not playing:**
- Check if browser allows autoplay (click anywhere first)
- Use the music toggle to unmute
- Ensure romantic-music.mp3 is in the same folder

**Photos not showing:**
- Verify image file names match exactly (case-sensitive)
- Check file format (JPG/PNG supported)
- Ensure images are in the same folder as HTML

**Video not playing:**
- Check video format compatibility
- Try MP4 format (most compatible)
- Ensure proposal-video.mp4 is in the same folder

**Animations not smooth:**
- Close heavy applications
- Use modern browser (Chrome/Firefox/Safari)
- Check for GPU acceleration enabled

## 💝 Final Notes

This website is designed to be as romantic and personal as possible. Take time to:
- Choose meaningful photos
- Select the perfect music
- Create a heartfelt video
- Customize colors and text to match your style

The goal is to make your special person feel truly loved and chosen. Enjoy! 💕

---

**Made with ❤️ for your special moment**
