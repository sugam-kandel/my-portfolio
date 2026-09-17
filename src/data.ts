import { Passion, JourneyItem, BlogPost, StatItem } from './types';

export const PASSIONS: Passion[] = [
  {
    id: 'coding',
    title: 'Software Development',
    iconName: 'Code',
    description: 'Hooked on coding since early 2026. Learning web development, algorithms, and exploring the beauty of building software.',
    detail: 'I fell in love with coding just a few months back. To me, code is a digital canvas where thoughts turn into fully interactive, working systems. Currently focusing on TypeScript, React, and Tailwind CSS in my grade 11 computer science curriculum.',
    accentColor: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'bikes',
    title: 'Motorbike Exploring',
    iconName: 'Bike',
    description: 'An avid explorer of motorcycle engineering, designs, and riding. Deeply passionate about the mechanics and freedom of two wheels.',
    detail: 'I love researching engines, designs, and riding styles. There is nothing quite like the feeling of mechanical harmony and wind as you explore new terrain. I enjoy learning about different motorbike specs and dreaming of long-distance tours.',
    accentColor: 'from-pink-500 to-rose-600'
  },
  {
    id: 'travel',
    title: 'Travel & Experiences',
    iconName: 'Compass',
    description: 'Exploring scenic landscapes, heritage, and local food culture. Gathering unique experiences that broaden my perspective.',
    detail: 'Traveling lets me collect memories and learn about the diverse cultures of Nepal. From the serene hills of western Nepal to the vibrant streets of Butwal, every destination teaches me something new.',
    accentColor: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'movies',
    title: 'Cinema & Storytelling',
    iconName: 'Film',
    description: 'A passionate movie watcher, exploring film styles, narrative structures, and creative cinematography.',
    detail: 'I main watching movies as a way to unwind and gather creative inspiration. From screenplay pacing to visual effects, I appreciate the intricate work that goes into digital storytelling.',
    accentColor: 'from-amber-500 to-orange-600'
  }
];

export const STATS: StatItem[] = [
  {
    id: 'coding_time',
    label: 'Coding Journey',
    value: '3+ Months',
    description: 'Building projects daily',
    iconName: 'Clock'
  },
  {
    id: 'bikes_known',
    label: 'Bikes Researched',
    value: '25+ Models',
    description: 'Specs and engine designs',
    iconName: 'Bike'
  },
  {
    id: 'places_explored',
    label: 'Travel Spots',
    value: '10+ Places',
    description: 'Across diverse districts',
    iconName: 'Compass'
  },
  {
    id: 'academic_grade',
    label: 'Grade 11 CS',
    value: 'Active',
    description: 'Computer Science in grade 11',
    iconName: 'GraduationCap'
  }
];

export const JOURNEY_ITEMS: JourneyItem[] = [
  {
    id: 'see-success',
    title: 'SEE Graduation',
    category: 'education',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop',
    description: 'Successfully passed the Secondary Education Examination (SEE), marking the completion of my high school foundation.',
    date: '2081 BS (2024 AD)',
    location: 'Rupandehi, Nepal',
    tag: 'Foundation'
  },
  {
    id: 'cs-grade11',
    title: 'Grade 11 Computer Science',
    category: 'education',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop',
    description: 'Enrolled in Grade 11, pursuing Computer Science as my core stream to build a career in software development.',
    date: 'Current (2025/2026)',
    location: 'Butwal, Rupandehi',
    tag: 'Academic'
  },
  {
    id: 'first-code',
    title: 'First Coding Project',
    category: 'coding',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop',
    description: 'Discovered the magic of building interactive web pages. Built my first HTML/CSS project and felt the pure joy of seeing logic come to life on a browser screen.',
    date: '3 Months Ago',
    location: 'Butwal, Nepal',
    tag: 'Aha! Moment'
  },
  {
    id: 'hill-ride',
    title: 'Journey to Rupandehi',
    category: 'travel',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop',
    description: 'Moved from my serene hill-village roots in western Nepal to the active city of Butwal, connecting my peaceful village values with modern urban opportunities.',
    date: 'Transition',
    location: 'Nepal',
    tag: 'Life Journey'
  },
  {
    id: 'bike-enthusiast',
    title: 'Bike Dynamics Exploration',
    category: 'bikes',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=600&auto=format&fit=crop',
    description: 'Began deep research on high-performance motorbikes, focusing on single-cylinder vs parallel-twin engines, torque curves, and motorcycle chassis designs.',
    date: 'Ongoing',
    location: 'Butwal-Rupandehi',
    tag: 'Enthusiast'
  },
  {
    id: 'movie-inspiration',
    title: 'Cinematic Inspirations',
    category: 'travel',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600&auto=format&fit=crop',
    description: 'Spend my free time watching acclaimed films, analyzing screenplays and editing techniques. It fuels my visualization skills which I apply in designing web interfaces.',
    date: 'Weekly',
    location: 'At Home',
    tag: 'Creative'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'My First Line of Code: A Teenager’s Revelation',
    date: 'June 15, 2026',
    category: 'Coding',
    comments: 4,
    excerpt: 'Starting web development as a complete beginner can feel daunting, but when I ran my first loop, I realized code is the ultimate playground of creativity.',
    readTime: '3 min read',
    content: `It all started just a few months ago. In my Grade 11 Computer Science class, we began discussing logic and programming. Curiously, I opened up a text editor at home and typed in some simple markup.

The moment I refreshed the browser and saw my styling take effect, my perspective changed completely. In a world governed by fixed rules, code offers a unique sandbox of absolute freedom. If you can think it, you can build it. 

I started experimenting with basic JavaScript, simple CSS animations, and modern libraries. Every error is a riddle, and every successful build feels like a victory. I’m just a few months into this journey, but I know this is exactly what I want to dedicate my future to.`
  },
  {
    id: 'blog-2',
    title: 'Why Motorbikes are More Than Just Two Wheels',
    date: 'May 20, 2026',
    category: 'Bikes',
    comments: 7,
    excerpt: 'For some, a motorcycle is just a mode of transport. For me, it is an engineering marvel and a gateway to exploring the scenic routes of western Nepal.',
    readTime: '4 min read',
    content: `To anyone else, a bike is just a vehicle that gets you from point A to point B. But to me, it is a magnificent symphony of engineering, aerodynamics, and passion.

I spend hours reading about gear ratios, cylinder displacements, exhaust notes, and the evolution of cafe racers and adventure tourers. The way an engine converts fuel into pure, thrilling torque is fascinating. 

Living in Butwal, Nepal, I am surrounded by beautiful roads and hills. When you ride, you are not isolated inside a metal box; you are part of the landscape. It teaches you to be present, to anticipate curves, and to respect the machinery under you.`
  },
  {
    id: 'blog-3',
    title: 'The School Transition: From a Hill Village to City Life',
    date: 'April 05, 2026',
    category: 'Travel',
    comments: 2,
    excerpt: 'How moving from a calm hill village to the city reshaped my views on academics, friendships, and future tech opportunities.',
    readTime: '5 min read',
    content: `I was born in a beautifully tranquil hill village nestled in the hills of western Nepal. It’s a place of lush green hills, close-knit communities, and a slow, peaceful pace of life. 

Passing my SEE was a major milestone. But to pursue higher secondary education in Computer Science, I moved to Butwal, Rupandehi.

The change was eye-opening. Transitioning from quiet hills to a bustling city center felt like entering a different dimension. However, it has been an amazing experience. It brought me closer to high-speed internet, technical peer groups, and the resources I need to pursue coding. I carry the peaceful serenity of my home village in my heart while utilizing the vibrant speed of Butwal to build my future.`
  }
];
