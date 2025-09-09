# Hackathon Website Customization Guide

This hackathon website template can be easily customized for any event by modifying the configuration file. Here's how to adapt it for your hackathon:

## 🚀 Quick Start

1. **Copy the configuration template**:
   ```bash
   cp src/config/techfest-example.ts src/config/event.ts
   ```

2. **Customize the configuration** - Edit `src/config/event.ts` with your event details:

### Basic Event Information
```typescript
event: {
  name: "YourHackathon",
  tagline: "Your Custom Tagline", 
  description: "Your event description",
  dates: {
    start: "Your start date",
    end: "Your end date",
    registrationOpen: "Registration date",
    teamFormationDeadline: "Team deadline date"
  },
  // ... more configuration
}
```

### Organization Details
```typescript
organization: {
  host: "Your Department/Organization",
  university: "Your University/Institution",
  primaryLogo: "URL to your logo",
  partnerName: "Your Partner Name",
  partnerLogo: "URL to partner logo"
}
```

### Customize Prizes
```typescript
prizes: {
  main: [
    {
      place: "1st", 
      amount: "Your prize amount",
      color: "gradient-colors",
      iconColor: "text-color",
      extras: ["Prize benefits"]
    }
    // Add more prizes
  ],
  special: [
    // Special sponsor prizes
  ]
}
```

### Update Collaborators/Sponsors
```typescript
collaborators: [
  {
    name: "Partner Name",
    logo: "Partner logo URL", 
    description: "Partner description",
    isCircle: true/false,
    size: "logo size classes"
  }
  // Add more partners
]
```

## 🎨 Example Configurations

### Current: XHorizon (Mohan Babu University)
- Modern design with particle effects
- ₹15K first prize + internships
- Multi-sponsor collaboration
- April 2025 dates

### Example: TechFest (IIT Delhi) 
- ₹1L first prize with Google/Microsoft internships
- NVIDIA AI innovation prizes
- September 2025 dates
- See `src/config/techfest-example.ts`

## 🔧 Advanced Customization

### Modify Theme & Styling
- Colors: Update Tailwind classes in components
- Fonts: Modify index.html and CSS files
- Layout: Adjust component structure in App.tsx

### Add New Features
- Additional prize categories
- New timeline events 
- Extra sections or pages
- Custom registration flows

### Environment Variables
Update `.env.local`:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

## 📱 Testing Your Changes

1. **Development server**:
   ```bash
   npm run dev
   ```

2. **Build for production**:
   ```bash
   npm run build
   ```

3. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🌟 Features Included

- ✅ Responsive design with dark theme
- ✅ Particle background effects
- ✅ Countdown timer
- ✅ Event timeline
- ✅ Prize showcase
- ✅ Collaborators section
- ✅ FAQ section
- ✅ Contact integration
- ✅ Social media links
- ✅ Registration system (with Supabase backend)
- ✅ Payment integration (Stripe)

## 📋 Deployment

1. **Build the project**: `npm run build`
2. **Deploy the `dist` folder** to your hosting platform:
   - Netlify (included `netlify.toml`)
   - Vercel
   - GitHub Pages
   - Any static hosting service

## 🎯 Customization Checklist

- [ ] Update event name and tagline
- [ ] Change dates and timeline
- [ ] Replace logos and branding
- [ ] Modify prize structure
- [ ] Update collaborators/sponsors
- [ ] Customize contact information
- [ ] Test all functionality
- [ ] Update README with your event details
- [ ] Deploy to your hosting platform

## 💡 Tips

- Keep the configuration file organized and well-commented
- Test thoroughly after each major change
- Use placeholder images initially, replace with final assets later
- Consider creating multiple configuration files for different events
- Backup your configuration before making major changes

---

**Made with ❤️ for the hackathon community. Adapt this template for your amazing events!**