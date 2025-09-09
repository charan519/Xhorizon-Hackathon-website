// Example: TechFest 2025 Configuration
// Copy this file as event.ts to customize for your hackathon
export const eventConfig = {
  // Basic Event Information
  event: {
    name: "TechFest",
    tagline: "Code. Create. Innovate.",
    description: "Join India's largest student-run hackathon where brilliant minds come together to solve real-world problems through technology.",
    dates: {
      start: "September 15, 2025",
      end: "September 16, 2025", 
      registrationOpen: "August 1, 2025",
      teamFormationDeadline: "September 10, 2025"
    },
    times: {
      registrationOpen: "9:00 AM",
      teamFormationDeadline: "11:59 PM",
      kickoff: "9:00 AM", 
      winnersAnnouncement: "6:00 PM"
    },
    location: {
      venue: "Indian Institute of Technology, Delhi",
      address: "Hauz Khas, New Delhi"
    }
  },

  // Organization Information
  organization: {
    host: "Computer Science Department",
    university: "IIT Delhi",
    primaryLogo: "https://upload.wikimedia.org/wikipedia/en/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg",
    partnerName: "TechCorps India",
    partnerLogo: "https://example.com/techcorps-logo.png"
  },

  // Contact and Social Media
  contact: {
    instagram: "https://www.instagram.com/techfest_iitd/",
    linkedin: "https://www.linkedin.com/company/techfest-iit-delhi/",
    whatsapp: "https://chat.whatsapp.com/TechFestIITD2025"
  },

  // Prizes Configuration
  prizes: {
    main: [
      {
        place: "1st",
        amount: "₹1,00,000",
        color: "from-yellow-400/20 to-amber-600/20",
        iconColor: "text-yellow-400",
        extras: ["Google Internship Opportunity", "Startup Incubation Support"]
      },
      {
        place: "2nd",
        amount: "₹75,000",
        color: "from-gray-400/20 to-gray-600/20", 
        iconColor: "text-gray-400",
        extras: ["Microsoft Internship Opportunity", "Mentorship Program"]
      },
      {
        place: "3rd",
        amount: "₹50,000",
        color: "from-amber-700/20 to-amber-900/20",
        iconColor: "text-amber-700", 
        extras: ["Amazon Internship Opportunity", "Tech Workshop Access"]
      }
    ],
    special: [
      {
        name: "Best AI Innovation",
        sponsor: "NVIDIA",
        amount: "$5,000",
        description: "NVIDIA GPU credits and AI development tools",
        color: "from-green-500/10 via-blue-500/10 to-green-500/10",
        iconColor: "text-green-400"
      },
      {
        name: "Best Social Impact",
        sponsor: "UN SDG",
        amount: "$3,000",
        description: "United Nations recognition and funding opportunity",
        color: "from-blue-500/10 via-purple-500/10 to-blue-500/10",
        iconColor: "text-blue-400"
      }
    ],
    internships: {
      companies: ["Google", "Microsoft", "Amazon", "Meta"],
      description: "Top 20 Teams Get Interview Opportunities"
    }
  },

  // Collaborators/Sponsors
  collaborators: [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      description: "Platinum Sponsor - Empowering innovation through technology",
      isCircle: false,
      size: "h-32"
    },
    {
      name: "Microsoft", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      description: "Gold Sponsor - Building the future of work",
      isCircle: false,
      size: "h-32"
    },
    {
      name: "Amazon Web Services",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      description: "Cloud Infrastructure Partner",
      isCircle: false,
      size: "h-32"
    },
    {
      name: "NVIDIA",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/21/Nvidia_logo.svg",
      description: "AI and GPU Technology Partner",
      isCircle: false,
      size: "h-32"
    }
  ]
};