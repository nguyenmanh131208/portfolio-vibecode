<div align="center">
<h1 style="font-size: 3em; font-weight: bold; color: #2d3748;">
Modern Portfolio Template
</h1>
<p style="font-size: 1.2em; color: #64748b;">
A portfolio template for Full Stack Developers & Designers, built with modern HTML, Tailwind CSS, and JavaScript.
</p>
<p style="font-size: 1.1em; color: #7c3aed; font-weight: 500;">
This is a vibecode project written by AI.
</p>
<p>
<a href="#-key-features" style="text-decoration: none; margin: 5px;">
<img src="https://img.shields.io/badge/Features-✨-blueviolet?style=for-the-badge" alt="Features Badge">
</a>
<a href="#-tech-stack" style="text-decoration: none; margin: 5px;">
<img src="https://img.shields.io/badge/Tech-Stack-blue?style=for-the-badge" alt="Tech Stack Badge">
</a>
<a href="#-setup" style="text-decoration: none; margin: 5px;">
<img src="https://img.shields.io/badge/Setup-🚀-green?style=for-the-badge" alt="Setup Badge">
</a>
</p>
</div>

<div align="center" style="margin-top: 20px; margin-bottom: 20px;">
<p><em>Screenshot of the portfolio page.</em></p>
<img src="https://github.com/user-attachments/assets/fa74c54c-dc88-4b22-a6a9-5cf87435b378" alt="Project Screenshot" style="width: 80%; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
</div>

📖 About The Project
This is a meticulously designed, highly interactive, and fully responsive single-page portfolio template. This project is more than just an online CV; it's a platform to showcase your skills, projects, and work experience in a visually stunning and impressive way.

✨ Key Features
This project is packed with modern features to deliver the best user experience:

🎨 Modern & Clean Design: The interface is built with Tailwind CSS, ensuring consistency and easy customization.

🌓 Light/Dark Mode: Seamlessly switch themes with a smooth transition to protect users' eyes.

🚀 Smooth Animations:

AOS (Animate On Scroll): Elements animate into view as the user scrolls.

GSAP & ScrollTrigger: Enhances animations for key components.

🌌 Interactive Particle Background: The hero section features a dynamic background that interacts with the user's cursor, powered by Particles.js.

✍️ Typing Effect: Animate your introduction with a professional typing effect from Typed.js.

📊 Project Filtering: Easily categorize and display projects by type (Web App, Mobile App, UI/UX).

📈 Animated Skill Bars: Visualize your skill proficiency with dynamic, animated bars.

📜 Experience Timeline: Present your career journey in a clean, easy-to-follow timeline.

📱 Fully Responsive: Flawless display on all devices, from mobile phones to desktops.

🖱️ Custom Cursor: A unique cursor provides a premium feel.

✉️ Contact Form: A built-in contact form with validation and interactive effects.

<hr>

🛠️ Tech Stack
This project is built with leading-edge technologies and libraries:

<table width="100%" style="border: none; margin-top: 15px;">
<tr>
<td width="50%" valign="top">
<h4 style="color: #2563eb;">Frontend</h4>
<ul>
<li>HTML5</li>
<li>Tailwind CSS</li>
<li>JavaScript (ES6+)</li>
</ul>
</td>
<td width="50%" valign="top">
<h4 style="color: #2563eb;">JavaScript Libraries</h4>
<ul>
<li><a href="https://github.com/michalsnik/aos" target="_blank">AOS</a> (Animate on Scroll)</li>
<li><a href="https://greensock.com/gsap/" target="_blank">GSAP</a> (GreenSock Animation Platform)</li>
<li><a href="https://github.com/VincentGarreau/particles.js/" target="_blank">Particles.js</a></li>
<li><a href="https://github.com/mattboldt/typed.js/" target="_blank">Typed.js</a></li>
<li><a href="https://www.chartjs.org/" target="_blank">Chart.js</a></li>
</ul>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<h4 style="color: #2563eb;">Tools & Icons</h4>
<ul>
<li>Font Awesome (for icons)</li>
<li>Google Fonts</li>
</ul>
</td>
<td width="50%" valign="top">
<h4 style="color: #2563eb;">Design Based On</h4>
<ul>
<li>Figma</li>
<li>Adobe XD</li>
</ul>
</td>
</tr>
</table>

📂 Project Directory
The project has a straightforward structure:
```
your-repository-name/
├── 📄 index.html      # The main HTML file with all content
├── 🎨 style.css       # Custom styles, theming, and animations
└── ⚙️ index.js        # JavaScript for all interactive features
```
🚀 Setup
Since this is a pure frontend project, you don't need complex installation steps.

Clone the repository:
```
git clone [https://github.com/your-username/your-repository-name.git](https://github.com/nguyenmanh131208/portfolio-vibecode.git)
```
Navigate to the project directory:
```
cd portfolio-vibecode-main
```
Open the index.html file:
Simply open the index.html file in your favorite web browser, and you're good to go!
<br>
Tip: You can use an extension like "Live Server" in VS Code to get hot-reloading functionality.

<hr>

🔧 Usage & Customization
Customizing the portfolio with your information is easy.

Personal Information: Open the index.html file and edit the text content directly in sections like #about, #experience, and #contact.

Name and Titles: In the index.js file, find the initializeTyped() function to change the text strings for the typing animation.

JavaScript
```
// in index.js
new Typed('#typed-text', {
    strings: ['Your Name', 'A Developer', 'A Designer'],
    // ... other options
});
```
Projects: Edit the .portfolio-item cards in index.html to add or modify your projects. Don't forget to update the images and technology tags.

Skills: Change the .skill-bar elements in index.html. Adjust the inline style="width: XX%" to reflect your proficiency.

Colors and Theme: Open the style.css file. Modify the color variables in the :root and [data-theme="dark"] blocks to create a brand new look.

CSS
```
/* in style.css */
:root {
    --primary-color: #2563eb; /* Change the main accent color here */
    /* ... */
}
```
<div style="background-color: #f0f7ff; border-left: 5px solid #2563eb; padding: 15px; margin-top: 20px; border-radius: 5px;">
<p style="margin: 0; font-weight: bold; color: #2d3748;">
Thank you for visiting! If you find this project useful, don't forget to give it a ⭐!
</p>
</div>
