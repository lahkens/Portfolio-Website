// All site content derived from the resume. Edit here; components stay unchanged.
export interface Media { src: string; alt: string; caption?: string }
export const mediaUrl = (file: string) => `${import.meta.env.BASE_URL}media/${file}`;
export interface Entry { title: string; subtitle: string; dates?: string; summary?: string; bullets: string[]; tags?: string[]; links?: { href: string; label: string }[]; embed?: string;media?: Media[];}
export interface Project { title: string; kind: string; problem: string; approach: string; impact: string; tags: string[]; links?: { href: string; label: string }[]; embed?: string;media?: Media[]; }
export interface CodingProfile { platform: string; handle: string; href: string; note?: string; image?: string; embed?: string }


export const profile = {
  name: 'Snekhal Prasad',
  intro: 'Software Engineer with ~2 years of experience building AI applications using agentic architectures and RAG, optimizing AI inference across GPUs and edge AI devices, and developing full-stack solutions',
  email: 'snekhalprasadsp@gmail.com',
  linkedin: 'https://www.linkedin.com/in/snekhalprasad/',
  leetcode: 'https://leetcode.com/lahkens',
  resume: 'https://drive.google.com/file/d/11nucYPc__OWO705SsePC0Qg4KK_zZ5eH/view?usp=sharing',
};

export const codingProfiles: CodingProfile[] = [
  { platform: 'LeetCode', handle: 'lahkens', href: 'https://leetcode.com/lahkens', note: 'Knight badge, placing in the top 5% of users.' },
];

export const nav = [
  { id: 'education', label: 'Education' }, { id: 'experience', label: 'Experience' }, { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const experience: Entry[] = [
  {
    title: 'Oracle', subtitle: 'Applications Developer - 1', dates: 'Jan 2026 – Oct 2026',
    summary: 'Built an end-to-end agentic AI application that automates enterprise approvals across procurement, access, finance and HR workflows.',
    bullets: [
      'Orchestrated multi-agent workflows with LangGraph StateGraph, shared graph state and conditional routing across retrieval, validation and decisioning, reducing approval processing time by ~80%.',
      'Built a policy evaluation framework that reconciles JSON rules with LLM outputs, evaluating 200+ enterprise policies through token-budgeted parallel inference and supporting-document processing.',
      'Implemented a LangChain RAG pipeline for a document-grounded conversational assistant, using chunking, embedding vector search and AI guardrails across 100+ enterprise documents.',
    ],
    media: [{ src: mediaUrl('agentic_hr_approval_animated.gif'), alt: 'Backend for Agentic Approval System', caption: 'High Level overview' }],
    tags: ['LangGraph', 'LangChain', 'RAG', 'LLMs', 'Vector search', 'Guardrails'],
  },
  {
    title: 'Blaize', subtitle: 'Software Engineer I', dates: 'May 2025 – Jan 2026',
    summary: 'Integrated Llama.cpp with the Graph Streaming Processor (GPU) to enable accelerated LLM inference on edge devices.',
    bullets: [
      'Implemented GPU execution paths for compute-intensive operations such as MatMul/GEMM, handling tensor layouts and data movement, and offloaded 45% of AI compute workloads for models up to 7B parameters.',
      'Improved inference time by 26% through graph reuse and quantization optimizations.',
      'Built a tensor and KV-cache memory reuse layer that reduced redundant memory allocations by 75% through caching and buffer reuse.',
      'Profiled inference workloads to find bottlenecks in operator-level latency, graph execution overhead and memory utilization.',
    ],
     media: [{ src: mediaUrl('llamacpp_img.png'), alt: 'llama.cpp flow', caption: 'Llama.cpp one token pass' }],
    
    tags: ['Llama.cpp', 'MatMul/GEMM', 'Quantization', 'KV-cache', 'Profiling'],
  },
  {
    title: 'Blaize', subtitle: 'Engineering Intern', dates: 'Dec 2024 – May 2025',
    summary: 'Contributed to a facial-recognition attendance system deployed at Blaize Hyderabad, serving 200+ employees.',
        bullets: [
      'Profiled ResNet50 inference on target hardware and improved throughput by 75% with image batching and OpenCL and assembly kernel modifications.',
      'Implemented the FRAS frontend in Next.js with authentication, role-based access control, WebSocket live updates, WebRTC real-time streaming and Zustand state management.',
      'Developed RESTful and WebSocket API endpoints for real-time updates and data transactions, and implemented Kafka to streamline microservice communication.',
      'Optimized the detection pipeline with SQLAlchemy, Milvus and MinIO to manage relational data, vector embeddings and image storage, improving efficiency by 96%.',
      'Built an AI chatbot backend with LlamaIndex for natural-language querying of SQL data, reducing lookup time by 72% with up to 84% response accuracy.',
    ],
    media: [{ src: mediaUrl('FRAS_wide_16x9.gif'), alt: 'FRAS', caption: 'Overview of the architecture' }],
    tags: ['ResNet50', 'OpenCL', 'Next.js', 'WebRTC', 'Kafka', 'Milvus', 'LlamaIndex'],
  },
    {
    title: 'Civiccraft Technologies', subtitle: 'Intern, Full Stack Developer', dates: 'June 2024 – Sep 2024',
    summary: 'Built front-end applications with React and backend logic with Node.js, integrating Firebase, for 3 major e-governance projects.',
    bullets: [
      'Designed a RESTful API in Node.js for the Nandi ChatBot, supporting 10+ languages, tested it with Postman, and deployed it on the Kashi Vishwanath website with a WhatsApp plugin integration.',
      'Implemented a multilingual voice input feature for Vyapar Launchpad under ONDC, building the frontend and managing API integrations, which cut onboarding time by 60%.',
      'Built React components and an admin panel for 3i Consulting, using Firebase for authentication and database management, which improved admin efficiency by 40%.',
    ],
    tags: ['React', 'Node.js', 'Firebase', 'REST APIs', 'Postman'],
  },
  {
  title: 'PerceptronAI',dates: 'May 2023 – Aug 2023',
  subtitle: 'Researcher and Deep Learning Engineer',
  summary: 'Researched deep learning approaches for materials property prediction and crystal structure generation using Graph Neural Networks, Transformers, and Generative Adversarial Networks (GANs).',
  bullets: [
    'Processed ~30 GB of crystallographic CIF data, extracting structural configurations and engineering features across 20 material properties for model training.',
    'Developed deep learning models using Graph Neural Networks (GNNs), Transformers, and GANs for materials property prediction and generative modeling.',
    'Fine-tuned model architectures and hyperparameters, achieving 71.82% accuracy on the evaluated materials property prediction task.'
  ],
  tags: ['Python', 'PyTorch', 'Graph Neural Networks', 'Transformers', 'GANs', 'Crystallographic Data'],
}
];

export const projects: Project[] = [
    { title: 'Nandi ChatBot API', kind: 'Professional work at Civiccraft Technologies (internship)',
    problem: 'The Kashi Vishwanath website needed a multilingual chatbot to answer the query of pilgrims across India and the World that was also reachable through WhatsApp.',
    approach: 'Designed the RESTful API in Node.js, evaluated it with Postman, and deployed it on the website with a WhatsApp plugin integration.',
    impact: 'Supports 10+ languages.',
     links: [{ href: ' https://www.shrikashivishwanath.org/', label: 'Live site' }],
    embed: ' https://www.shrikashivishwanath.org/', // optional, remove if you only want links
    tags: ['Node.js', 'REST API', 'Postman', 'WhatsApp'] },
      { title: '3i Consulting admin panel', kind: 'Professional work at Civiccraft Technologies (internship)',
    problem: '3i Consulting needed a website built from scratch and needed a panel to manage the platform.',
    approach: 'Built the React components and the admin panel, using Firebase for authentication and database management.',
    impact: '40% improvement in admin efficiency.',
        links: [{ href: 'https://3iconsulting.in/', label: 'Live site' }],
    embed: 'https://3iconsulting.in/', // optional, remove if you only want links
    tags: ['React', 'Firebase', 'Authentication', 'Admin panel'] },
      { title: 'Growdha: financial analytics dashboard', kind: 'Personal project',
    problem: 'A single Financial metrics dashboard with automatic updates upon document uploads are crucial for analysts to quickly visualize.',
    approach: 'Built a MERN stack web application with a pipeline that ingests CSV files, displays the dashboard, and uses Machine Learning to forecast revenue using Linear Regression. MongoDB Atlas was used as a NoSQL Database and Vercel to deploy and have version control.',
    impact: 'Visualizes 6 key performance indicators.',
    tags: ['MongoDB Atlas', 'Express', 'React', 'Node.js', 'Linear Regression', 'Vercel'],
    links: [{ href: 'https://github.com/lahkens/Growdha', label: 'Source code' }, { href: 'https://growdha-website.onrender.com/', label: 'Live site' }],
    embed: 'https://growdha-website.onrender.com/' },
   
];

export const caseStudy = {
  title: 'Bringing Llama.cpp to a GPU edge accelerator',
  problem: 'Running LLMs on edge hardware means compute-heavy operators like MatMul/GEMM must run efficiently on the accelerator, and tensor and KV-cache buffers cannot be allocated wastefully.',
  approach: [
    'Integrated Llama.cpp with Blaize\u2019s Graph Streaming Processor (GPU).',
    'Implemented GPU execution paths for MatMul/GEMM, handling tensor layouts and data movement.',
    'Applied graph reuse and quantization optimizations.',
    'Built a tensor and KV-cache reuse layer using caching and buffer reuse.',
    'Profiled operator-level latency, graph execution overhead and memory utilization.',
  ],
  stats: [
    { value: '45%', label: 'of AI compute workloads offloaded, models up to 7B parameters' },
    { value: '26%', label: 'faster inference from graph reuse and quantization' },
    { value: '75%', label: 'fewer redundant memory allocations' },
  ],
  flow: [
    { t: 'Llama.cpp graph', d: 'Model compute graph, reused across runs' },
    { t: 'GPU execution paths', d: 'MatMul/GEMM, tensor layouts, data movement' },
    { t: 'Memory reuse layer', d: 'Tensor and KV-cache buffer reuse' },
    { t: 'Edge LLM inference', d: 'Quantized models up to 7B parameters' },
  ],
};

export const education: Entry[] = [
  { title: 'National Institute of Technology, Tiruchirappalli', subtitle: 'BTech, Metallurgical and Materials Engineering', dates: 'June 2021 – May 2025', bullets: ['CGPA: 8.02'] },
];


export const skills = [
  { group: 'AI, LLMs and Agentic Systems', items: ['LLMs', 'Generative AI', 'Agentic AI', 'Multi-agent workflows', 'RAG', 'LangChain', 'LangGraph', 'LlamaIndex', 'AI guardrails', 'Graph Neural Networks'] },
  { group: 'Inference Optimization and AI Infrastructure', items: ['Llama.cpp', 'OpenCL', 'OpenVX', 'MatMul/GEMM', 'Quantization', 'Graph optimization', 'KV-cache reuse', 'Memory optimization', 'Profiling', 'Assembly kernels'] },
  { group: 'Programming Languages', items: ['C++', 'Python', 'JavaScript', 'TypeScript'] },
  { group: 'Backend and APIs', items: ['FastAPI', 'Node.js', 'REST APIs', 'WebSocket APIs', 'Kafka', 'Microservices', 'Authentication and RBAC'] },
  { group: 'Frontend Development', items: ['React.js', 'Next.js', 'Zustand', 'WebRTC'] },
  { group: 'Databases and Data Systems', items: ['SQL', 'SQLAlchemy', 'Milvus', 'MinIO', 'Firebase', 'Vector embeddings'] },
  { group: 'Developer Tools and Deployment', items: ['Git',  'GitLab', 'Postman'] },
];
