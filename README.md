# Syed Ayaan Ali - Portfolio Website

A modern, responsive portfolio website showcasing my DevOps engineering skills and projects.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth transitions between sections
- **Resume Download**: Direct download link for my resume
- **Project Showcase**: Detailed descriptions of key projects
- **Contact Information**: Easy ways to get in touch

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Ion Icons

## Project Structure

```
portfolio/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── images/
│   │   └── (your images here)
│   └── files/
│       └── SYED_AYAAN_ALI_RESUME.pdf
└── README.md
```

## How to Push to GitHub

### First Time Setup:

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   ```

2. **Add all files**:
   ```bash
   git add .
   ```

3. **Commit changes**:
   ```bash
   git commit -m "Initial commit: Portfolio website"
   ```

4. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Name it something like `portfolio` or `syed-ayaan-ali.github.io`
   - Don't initialize with README (since you already have files)

5. **Add GitHub remote**:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   ```

6. **Push to GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

### For Subsequent Updates:

```bash
git add .
git commit -m "Updated portfolio content"
git push
```

## GitHub Pages Deployment

To host your portfolio on GitHub Pages:

1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be available at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

**Pro Tip**: If you name your repository `YOUR-USERNAME.github.io`, it will be available at `https://YOUR-USERNAME.github.io/`

## Important Notes

### Before Pushing:

1. **Add your avatar image**: Place your profile picture at `assets/images/my-avatar.png`
2. **Add icons**: Make sure all icon files referenced in the HTML exist in `assets/images/`
3. **Update favicon**: Add your logo at `assets/images/logo.ico`

### Missing Files to Add:

The following files are referenced in the HTML but need to be added to the `assets/images/` folder:
- `my-avatar.png` (your profile picture)
- `logo.ico` (website favicon)
- `icon-dev.svg` (cloud infrastructure icon)
- `icon-app.svg` (docker/containerization icon)
- `icon-design.svg` (CI/CD icon)
- `icon-photo.svg` (monitoring icon)

## Contact

- **Email**: ali.ayaan1107@gmail.com
- **Phone**: +91 7000212793
- **LinkedIn**: [syed-ayaan-ali](https://www.linkedin.com/in/syed-ayaan-ali)
- **GitHub**: [syed-ayaan-alii](https://github.com/syed-ayaan-alii)

## License

This portfolio is open source and available for personal use.

---

**Built with ❤️ by Syed Ayaan Ali**
