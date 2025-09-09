# 🎯 Customizable Hackathon Website Template

A modern, responsive hackathon website template built with React, TypeScript, and Tailwind CSS. Originally created for XHorizon hackathon at Mohan Babu University, now available as a customizable template for any hackathon event.

## ✨ Features

- 🎨 **Modern Design** - Dark theme with particle effects and smooth animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast & Lightweight** - Built with Vite for optimal performance  
- 🔧 **Easy Customization** - Configuration-based setup for quick event adaptation
- 🏆 **Prize Showcase** - Dynamic prize and sponsor sections
- ⏰ **Countdown Timer** - Real-time countdown to event
- 📅 **Event Timeline** - Interactive timeline with milestones
- 🤝 **Collaborators Section** - Showcase sponsors and partners
- ❓ **FAQ Section** - Expandable questions and answers
- 🔗 **Social Integration** - Links to social media and contact info
- 💳 **Registration System** - Integrated with Supabase and Stripe

## 🚀 Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/hackathon-website-template.git
   cd hackathon-website-template
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Customize for your event**:
   ```bash
   # Copy example configuration
   cp src/config/techfest-example.ts src/config/event.ts
   
   # Edit the configuration file with your event details
   nano src/config/event.ts
   ```

4. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Supabase credentials
   ```

5. **Start development server**:
   ```bash
   npm run dev
   ```

## 📖 Detailed Customization

See [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for comprehensive instructions on:
- Updating event information
- Changing branding and logos  
- Modifying prize structure
- Adding sponsors/collaborators
- Customizing colors and theme
- Deployment instructions

## 🎯 Example Configurations

### XHorizon (Default) - Mohan Babu University
- **Event**: XHorizon - Where Innovation Meets Infinity
- **Dates**: April 12-13, 2025
- **Prizes**: ₹15K + internships
- **Focus**: AIML and innovation

### TechFest Example - IIT Delhi
- **Event**: TechFest - Code. Create. Innovate.  
- **Dates**: September 15-16, 2025
- **Prizes**: ₹1L + Google/Microsoft internships
- **Focus**: Large-scale tech innovation

Switch between configurations easily:
```bash
./switch-config.sh techfest-example
```

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS  
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Particles**: tsParticles
- **Backend**: Supabase
- **Payments**: Stripe
- **Deployment**: Netlify/Vercel ready

## 📁 Project Structure

```
src/
├── config/
│   ├── event.ts              # Main event configuration
│   └── techfest-example.ts   # Example configuration
├── components/
│   ├── CountdownTimer.tsx    # Event countdown
│   ├── FAQSection.tsx        # FAQ component
│   ├── ParticlesBackground.tsx
│   └── ...
├── pages/
│   ├── About.tsx
│   ├── Tracks.tsx
│   └── ...
├── lib/
│   ├── supabase.ts          # Database config
│   └── store.ts             # State management
└── App.tsx                  # Main app component
```

## 🎨 Customization Options

### Easy Configuration Changes
- Event name, dates, and location
- Prize amounts and descriptions  
- Sponsor/collaborator logos
- Social media links
- Contact information

### Advanced Customization
- Color scheme and branding
- Layout and component structure
- Additional features and sections
- Registration flow customization

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `./switch-config.sh [config]` - Switch event configuration

## 🌍 Deployment

The site is ready to deploy to:
- **Netlify** (includes `netlify.toml`)
- **Vercel** 
- **GitHub Pages**
- Any static hosting service

Just run `npm run build` and deploy the `dist` folder.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Originally created for XHorizon hackathon at Mohan Babu University
- Built for the hackathon community to enable quick event website creation
- Special thanks to all contributors and the open-source community

---

**Ready to host an amazing hackathon? Customize this template and make it your own! 🚀**