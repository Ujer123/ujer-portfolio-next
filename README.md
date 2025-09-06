# Ujer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, interactive UI components, and optimized performance.

## 🚀 Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Modern Design** with dark theme
- 📱 **Fully Responsive** across all devices
- 🎭 **Smooth Animations** with Framer Motion
- 🎯 **TypeScript** for type safety
- 💎 **Tailwind CSS** for styling
- 🎪 **Interactive Components** with hover effects
- 📧 **Contact Form** integration
- 🔄 **Floating Navigation** with mobile support
- ⚡ **Optimized Performance** and SEO

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Email:** EmailJS
- **Package Manager:** npm

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skill.tsx         # Skills showcase
│   ├── DemoCard.tsx      # Projects showcase
│   └── ...
├── config/               # Configuration files
│   └── site.ts          # Site configuration
├── data/                # Data files
│   └── index.ts         # Site data
├── lib/                 # Utility functions
│   ├── utils.ts         # General utilities
│   └── animations.ts    # Animation presets
├── types/               # TypeScript types
│   └── index.ts         # Global types
└── public/              # Static assets
    ├── icons/           # Skill icons
    └── projects/        # Project images
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/next-ujer-portfolio.git
   cd next-ujer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Configuration

### Site Configuration
Edit `config/site.ts` to update:
- Site metadata
- Author information  
- Social links
- SEO settings

### Content Management
Update content in `data/index.ts`:
- Navigation items
- Skills and technologies
- Projects portfolio
- Experience details

## 🎨 Customization

### Colors
The project uses a purple-blue gradient theme. Update colors in:
- Custom Tailwind configuration
- CSS custom properties in globals.css

### Animations
Animation presets are available in `lib/animations.ts`:
- Fade in/out effects
- Slide animations
- Scale transitions
- Hover effects

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

## 🔧 Performance Optimizations

- ✅ Next.js Image optimization
- ✅ Code splitting and lazy loading
- ✅ Font optimization with Google Fonts
- ✅ Minimal JavaScript bundle
- ✅ CSS optimization
- ✅ SEO meta tags

## 📧 Contact Form

The contact form uses EmailJS for email delivery. To set up:

1. Create an EmailJS account
2. Configure your email service
3. Update environment variables
4. Test the contact form

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- Railway  
- AWS Amplify

## 👨‍💻 Author

**Ujer**
- Portfolio: [Your Portfolio URL]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)
- Email: your.email@example.com

---

⭐ Star this repository if you found it helpful!
