// Event Configuration - Customize this file to adapt the website for your hackathon
export const eventConfig = {
  // Basic Event Information
  event: {
    name: "XHorizon",
    tagline: "Where Innovation Meets Infinity",
    description: "Join a vibrant community of developers, innovators, and problem solvers. Together, we code the future.",
    dates: {
      start: "April 12, 2025",
      end: "April 13, 2025",
      registrationOpen: "March 25, 2025",
      teamFormationDeadline: "April 5, 2025"
    },
    times: {
      registrationOpen: "10:00 AM",
      teamFormationDeadline: "11:59 PM", 
      kickoff: "10:30 AM",
      winnersAnnouncement: "10:30 AM"
    },
    location: {
      venue: "Mohan Babu University, Tirupati",
      address: "Tirupati, Andhra Pradesh"
    }
  },

  // Organization Information
  organization: {
    host: "Department of AIML",
    university: "Mohan Babu University",
    primaryLogo: "https://lh3.googleusercontent.com/a/ACg8ocJAuTcKKDTgQNOGlPBiaC_KNw1SihXTcfziX_dHC8FUnqqaXR4=s576-c-no",
    partnerName: "Hack with India",
    partnerLogo: "https://media.licdn.com/dms/image/v2/D560BAQGz5OEz6lXfOQ/company-logo_200_200/company-logo_200_200/0/1711310376436/hackwithindia_logo?e=1748476800&v=beta&t=ri7sl14XNDvACzKLQxnE6Qgt-EgNvDIqzeOZJ31xe1o"
  },

  // Contact and Social Media
  contact: {
    instagram: "https://www.instagram.com/thecodingclubx/",
    linkedin: "https://www.linkedin.com/in/the-coding-club-922327356/",
    whatsapp: "https://chat.whatsapp.com/KqNmfIapdWE7ntw7D1DRAx"
  },

  // Prizes Configuration
  prizes: {
    main: [
      {
        place: "1st",
        amount: "₹15,000",
        color: "from-yellow-400/20 to-amber-600/20",
        iconColor: "text-yellow-400",
        extras: ["Paid Internship Opportunity", "Industry Mentorship"]
      },
      {
        place: "2nd (A)",
        amount: "₹10,000", 
        color: "from-gray-400/20 to-gray-600/20",
        iconColor: "text-gray-400",
        extras: ["Paid Internship Opportunity", "Industry Mentorship"]
      },
      {
        place: "2nd (B)",
        amount: "₹5,000",
        color: "from-amber-700/20 to-amber-900/20", 
        iconColor: "text-amber-700",
        extras: ["Paid Internship Opportunity", "Industry Mentorship"]
      }
    ],
    special: [
      {
        name: "Special Prize",
        sponsor: "Aptos",
        amount: "$2,000",
        description: "Blockchain Technology Courses & e-Wallet Credits by Aptos",
        color: "from-emerald-500/10 via-blue-500/10 to-emerald-500/10",
        iconColor: "text-emerald-400"
      },
      {
        name: "IEEE CIS Recognition", 
        sponsor: "IEEE CIS",
        amount: "Certificate of Appreciation",
        description: "Awarded to one outstanding team from each track",
        logo: "https://cis.ieee.org/images/files/Branding/logos/white/IEEE_CIS_logo_White_RGB_300ppi.png",
        color: "from-blue-500/10 via-purple-500/10 to-blue-500/10",
        iconColor: "text-blue-400"
      },
      {
        name: "AWS Cloud Credits",
        sponsor: "AWS Cloud Club", 
        amount: "$75 Credits",
        description: "AWS credit vouchers awarded to three innovative teams",
        logo: "https://media.konfhub.com/past_events/2024/August/28/1724879519122-86e4a31a-7dd3-4ec7-94a6-5ba169b25237.png",
        color: "from-orange-500/20 via-yellow-500/20 to-orange-500/20",
        iconColor: "text-yellow-400"
      }
    ],
    internships: {
      companies: ["Bubble AI", "WalletX", "Naukri"],
      description: "Top 10 Teams Get Paid Internship Opportunities"
    }
  },

  // Collaborators/Sponsors
  collaborators: [
    {
      name: "The Coding Club",
      logo: "https://media.licdn.com/dms/image/v2/D5603AQEmomPDnJLY3g/profile-displayphoto-shrink_800_800/B56ZWTomH9GQAc-/0/1741938652015?e=1748476800&v=beta&t=S_UPFtevvz7OeITMZoP5RvH2aVfC9r_LAXAoQY2l5G4",
      description: "Empowering students through technology and innovation",
      isCircle: true,
      size: "h-32 w-32"
    },
    {
      name: " Department of AIML", 
      logo: "https://media.mbu.asia/wp-content/uploads/2024/06/logo-with-tagline-FINAL-1.png",
      description: "Mohan Babu University",
      isCircle: false,
      size: "h-32"
    },
    {
      name: "HackwithIndia",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQGz5OEz6lXfOQ/company-logo_200_200/company-logo_200_200/0/1711310376436/hackwithindia_logo?e=1748476800&v=beta&t=ri7sl14XNDvACzKLQxnE6Qgt-EgNvDIqzeOZJ31xe1o",
      description: "India's Premier Student Hackathon Platform",
      isCircle: true,
      size: "h-32 w-32"
    },
    {
      name: "IEEE CIS",
      logo: "https://cis.ieee.org/images/files/Branding/logos/white/IEEE_CIS_logo_White_RGB_300ppi.png", 
      description: "Empowering students through computational intelligence.",
      isCircle: false,
      size: "h-32"
    },
    {
      name: "AWS Cloud Club",
      logo: "https://media.konfhub.com/past_events/2024/August/28/1724879519122-86e4a31a-7dd3-4ec7-94a6-5ba169b25237.png",
      description: "Inspiring students to explore, learn, and lead in the world of cloud computing.",
      isCircle: true,
      size: "h-32 w-32"
    }
  ]
};