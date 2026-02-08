<!-- SETUP GUIDE FOR THE PROPOSAL WEBSITE -->

# 🎯 Quick Setup Guide

## Step 1: Media Files You'll Need

This website requires three types of media files. Here's how to prepare them:

### 📸 PHOTOS (6 images needed)
1. **photo1.jpg** through **photo6.jpg**
   - Use .jpg or .png format
   - Recommended size: 500x500px minimum
   - Can be any square or rectangular ratio
   - These should be your favorite couple memories

   **Quick solution for testing:**
   - Use any 6 images you have
   - Or use placeholder image URLs temporarily
   - Replace with real photos later

### 🎵 BACKGROUND MUSIC
1. **romantic-music.mp3**
   - Format: MP3, WAV, or OGG
   - Length: 5-10 minutes (will loop)
   - Volume: Soft and romantic
   
   **Free sources:**
   - Pixabay: https://pixabay.com/music
   - YouTube Audio Library: https://www.youtube.com/audiolibrary
   - Free Music Archive: https://freemusicarchive.org

### 🎬 PROPOSAL VIDEO
1. **proposal-video.mp4**
   - Format: MP4 (most compatible), WebM, or OGG
   - Length: 30 seconds to 5 minutes
   - Resolution: 1080p recommended
   - Orientation: Landscape (16:9 aspect ratio)
   
   **What to record:**
   - You saying "Will you marry me?" or your proposal message
   - A montage of your favorite moments together
   - A heartfelt video message about your relationship

## Step 2: File Organization

Make sure all files are in the SAME FOLDER:

```
Your Proposal Folder/
├── index.html
├── styles.css
├── script.js
├── photo1.jpg
├── photo2.jpg
├── photo3.jpg
├── photo4.jpg
├── photo5.jpg
├── photo6.jpg
├── romantic-music.mp3
└── proposal-video.mp4
```

## Step 3: Testing Without Real Media

To test the website before you have all media files:

### Option A: Use Placeholder Images (Recommended for testing)
Replace the photo src attributes with online placeholder images:

In `index.html`, change:
```html
<img src="photo1.jpg" alt="Memory 1">
```
To:
```html
<img src="https://via.placeholder.com/300x300/FFB6D9/FFFFFF?text=Photo+1" alt="Memory 1">
```

### Option B: Create Simple Placeholder Images
Use any image editor to create 6 pink placeholder images (300x300px each).

### Option C: Use Your Own Images Temporarily
Just use any 6 images you have, even if not couple photos, to test the layout.

## Step 4: Testing the Website

1. **Open `index.html` in your browser**
   - Simply double-click the file, OR
   - Right-click → Open With → Your browser

2. **Test all features:**
   - ✅ Click envelope to open letter
   - ✅ View photo gallery (scroll or see all)
   - ✅ Click "Next" button to navigate
   - ✅ Click video button to test video playback
   - ✅ Click YES buttons to see confetti

3. **Audio Testing:**
   - Click anywhere if music doesn't autoplay
   - Use ♫ button to toggle music on/off

## Step 5: Customize Your Content

### Change the Letter Text
In `index.html`, find and edit:
```html
<p class="letter-text">I love you so muchhh 💕</p>
```

### Change the Proposal Question
Find and edit:
```html
<h1 class="big-question">Will you be my boyfriend? 💍</h1>
```

### Change Button Text
```html
<button class="yes-button" id="yesBtn">YES 💖</button>
<button class="yesss-button" id="ysssBtn">YESSS 😭💕</button>
```

### Customize Colors
Edit the colors in `styles.css` (around line 13):
```css
:root {
    --primary-pink: #FFB6D9;      /* Main pink */
    --soft-pink: #FFD9E8;          /* Soft pink */
    --light-pink: #FFF0F5;         /* Light background */
    --red-accent: #FF6B9D;         /* Red/rose accent */
}
```

## Step 6: Tips for the Big Moment

✨ **Before Presenting:**
- Test on the device you'll use (laptop/tablet)
- Check all media files load correctly
- Verify volume levels
- Close other browser tabs
- Have the page ready to go

🎬 **During the Presentation:**
- Use full-screen mode (F11) for immersive experience
- Let the animations play naturally
- The transitions will happen smoothly
- The music adds to the emotional moment

💡 **If Something Goes Wrong:**
- Press F12 to open developer console
- Check if error messages appear
- Verify all file names are correct
- Make sure files are in the same folder

## Step 7: Frequently Used Customizations

### Change Music Volume
In `script.js`, find this line (around line 73):
```javascript
audio.volume = 0.3;  // 0 to 1 (0.3 = 30% volume)
```

### Adjust Envelope Auto-transition Time
In `script.js`, find (around line 120):
```javascript
setTimeout(() => {
    goToNextPage();
}, 4000);  // 4000ms = 4 seconds
```

### Add More Photos
1. Create `.photo-item` divs in HTML (copy photo-6 div and paste)
2. Adjust grid columns in CSS if needed
3. Add images with unique rotation classes

### Change Background Gradient
In `styles.css`, find `html, body` (around line 23):
```css
background: linear-gradient(135deg, var(--light-pink) 0%, var(--soft-pink) 100%);
```

## 🚀 Final Checklist

Before the big moment:
- [ ] All 6 photos in correct folder with correct names
- [ ] romantic-music.mp3 in correct folder
- [ ] proposal-video.mp4 in correct folder
- [ ] Tested on actual device/browser you'll use
- [ ] All text customized (letter, question, buttons)
- [ ] Audio working and volume is good
- [ ] Video plays correctly
- [ ] Tested envelope click
- [ ] Tested all buttons
- [ ] Checked responsiveness on your device

## 💝 You're All Set!

Your romantic proposal website is ready to impress. The combination of:
- Soft, dreamy design
- Personalized photos
- Romantic music
- Heartfelt message
- Custom video
- Interactive elements

...will create an unforgettable moment! Good luck! 💕

---

**Questions? Refer to README.md for more details.**
