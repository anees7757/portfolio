// ─────────────────────────────────────────────────────────────────────────
// YOUR PROJECTS
//
// Each entry below is one project. Duplicate an entry to add more.
//
// Fields:
//   id               unique slug, used in the URL: /projects/<id>
//   title            project name
//   description      long description (shown on the project detail page)
//   shortDescription one-liner (shown on the card + list)
//   image            card thumbnail — put files in /public/projects/…
//   images[]         gallery images for the detail page
//   tags[]           tech / keywords
//   githubLink       repo URL (leave "" to hide the button)
//   liveLink         live demo URL (leave "" to hide the button)
//   category         groups the project in the /projects filter tabs
//   features[]       bullet points on the detail page
//   date / duration  leave "" to hide the date/duration strip
//   client / role    context for the project
//
// Images: drop your screenshots in /public/projects/<your-id>/ and point the
// paths here. "/projects/placeholder.svg" is a stand-in until you do.
// ─────────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: "industrial-watch",
    title: "Industrial Watch",
    description:
      "An AI-powered monitoring system designed to enhance workplace efficiency and ensure product quality in industrial environments.",
    shortDescription:
      "AI-driven defect detection and attendance monitoring for industrial production lines.",
    image: "/projects/industrial-watch-cover.png",
    images: ["/projects/industrial-watch-cover.png"],
    tags: [
      "React Native",
      "Python",
      "YOLOv8",
      "MediaPipe",
      "FaceNet",
      "TensorFlow",
      "Computer Vision",
    ],
    githubLink: "https://github.com/anees7757/industrial_watch",
    liveLink: "",
    category: "AI / Computer Vision",
    features: [
      "Trained separate YOLOv8 models for bottles, centrifugal discs, and fabric defects with 90%+ detection accuracy.",
      "Multi-threaded computer vision pipeline combining YOLOv8 cigarette/mobile detection with MediaPipe posture monitoring at 5 FPS.",
      "Consecutive-frame validation to reduce false alerts.",
      "Defect inspection with confidence-thresholded detection, batch yield calculation, and multi-angle inspection.",
      "Face-recognition attendance tracking using FaceNet with a weighted productivity scoring system.",
    ],
    date: "October 2023",
    duration: "10 Months",
    client: "Industrial solution",
    role: "Flutter Developer",
  },
  {
    id: "pharma-track",
    title: "Pharma Track",
    description:
      "A utility app for pharmaceutical order booking companies, built for Softeam Technologies® to streamline operations and improve daily workflow efficiency.",
    shortDescription:
      "Pharmaceutical order booking app with streamlined workflow features.",
    image: "/projects/pharma-track-cover.png",
    images: ["/projects/pharma-track-cover.png"],
    tags: ["Flutter", "Business App", "Order Management"],
    githubLink: "",
    liveLink: "",
    category: "Business App",
    features: [
      "Created a practical order-booking experience for the pharma domain",
      "Focused on reliability and efficient user flows",
      "Delivered a functional solution tailored to business needs",
    ],
    date: "2022",
    duration: "2 months",
    client: "Softeam Technologies®",
    role: "Flutter Developer",
  },
  {
    id: "sirat-ul-mustaqeem",
    title: "Sirat-ul-Mustaqeem",
    description:
      "A rich Islamic app designed to make spiritual learning and daily guidance more engaging, accessible, and user-friendly.",
    shortDescription:
      "A comprehensive Islamic app with a smooth and user-friendly experience.",
    tags: ["Flutter", "UI/UX", "Mobile App"],
    image: "/projects/sirat-ul-mustaqeem-cover.png",
    images: ["/projects/sirat-ul-mustaqeem-cover.png"],
    githubLink: "https://github.com/anees7757/sirat-ul-mustaqeem",
    liveLink: "",
    category: "Mobile App",
    features: [
      "Delivered a polished app experience for spiritual content and guidance",
      "Focused on intuitive navigation and content accessibility",
      "Built for an engaging and seamless daily-use experience",
    ],
    date: "2023",
    duration: "3 months",
    client: "Personal project",
    role: "Flutter Developer",
  },
  {
    id: "scrabble-multiplayer",
    title: "Scrabble Multiplayer",
    description:
      "A real-time multiplayer Scrabble game built with a scalable backend and responsive gameplay experience.",
    shortDescription:
      "Real-time multiplayer Scrabble game with a scalable backend.",
    image: "/projects/scrabble-cover.png",
    images: ["/projects/scrabble-cover.png"],
    tags: ["Flutter", "Realtime", "Backend"],
    githubLink: "https://github.com/anees7757/scrabble",
    liveLink: "",
    category: "Game App",
    features: [
      "Implemented real-time multiplayer gameplay",
      "Designed the app around a smooth and responsive user experience",
      "Structured the backend for future scaling and feature expansion",
    ],
    date: "2023",
    duration: "4 months",
    client: "Personal project",
    role: "Full Stack Developer",
  },
  {
    id: "flappy-bird",
    title: "Flappy Bird",
    description:
      "A classic Flappy Bird game built with Flutter and the Flame engine.",
    shortDescription:
      "Classic Flappy Bird gameplay with scoring and high-score persistence.",
    image: "/projects/flappy-bird-cover.png",
    images: ["/projects/flappy-bird-cover.png"],
    tags: ["Flutter", "Flame", "Game", "Mobile"],
    githubLink: "https://github.com/anees7757/flappy_bird",
    liveLink: "",
    category: "Game App",
    features: [
      "Classic Flappy Bird Gameplay – Tap the screen to make the bird fly and navigate through the pipes.",
      "Score Tracking – Earn points for each pipe you successfully pass.",
      "High Score – Your best score is saved and displayed on the game over screen.",
      "Game Over and Restart – Colliding with a pipe or the ground ends the game; restart to try again.",
    ],
    date: "2024",
    duration: "1 month",
    client: "Personal project",
    role: "Flutter Developer",
  },
  
  {
    id: "car-rental",
    title: "Car Rental",
    description:
      "A user-friendly car rental application featuring seamless local data storage and a simple booking flow.",
    shortDescription:
      "Car rental app with a clean booking experience and SQLite integration.",
    image: "/projects/placeholder-coming-soon.svg",
    images: ["/projects/placeholder-coming-soon.svg", "/projects/placeholder-coming-soon.svg"],
    tags: ["Flutter", "SQLite", "Booking"],
    githubLink: "https://github.com/anees7757/car_rental",
    liveLink: "",
    category: "Mobile App",
    features: [
      "Built a friendly booking experience for rental services",
      "Used local storage to keep the app responsive and practical",
      "Focused on usability and simple navigation",
    ],
    date: "2022",
    duration: "1 month",
    client: "Personal project",
    role: "Flutter Developer",
  },
  {
    id: "chat-application",
    title: "Chat Application",
    description:
      "A secure and feature-rich chat application with Firebase integration and advanced messaging capabilities.",
    shortDescription:
      "Secure chat app with Firebase and advanced features.",
    image: "/projects/placeholder-coming-soon.svg",
    images: ["/projects/placeholder-coming-soon.svg", "/projects/placeholder-coming-soon.svg"],
    tags: ["Flutter", "Firebase", "Realtime Chat"],
    githubLink: "https://github.com/anees7757/chat-app-flutter",
    liveLink: "",
    category: "Mobile App",
    features: [
      "Implemented real-time messaging with Firebase",
      "Delivered a feature-rich UI for modern chat interactions",
      "Focused on reliability, security, and a smooth experience",
    ],
    date: "2021",
    duration: "2 months",
    client: "Personal project",
    role: "Flutter Developer",
  },
];

export default projects;
