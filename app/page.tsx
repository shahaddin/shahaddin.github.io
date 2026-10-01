import { Navbar } from '@/components/ui/navbar';
import { FadeIn } from '@/components/ui/fade-in';
import { HeroRobot } from '@/components/blocks/interactive-3d-robot';
import { Mail, ExternalLink, FileText, GraduationCap, ArrowUpRight } from 'lucide-react';

const links = {
  email: 'mailto:shahaddingafarov@gmail.com',
  resume: '/resume.pdf',
  scholar: 'https://scholar.google.com/citations?user=G_263oUAAAAJ&hl=en',
  github: 'https://github.com/shahaddin',
  linkedin: 'https://linkedin.com/in/shahaddin',
};

const research = [
  {
    name: 'Adversarial Robustness Benchmark',
    role: 'First author',
    status: 'Under review · ACM Computing Surveys',
    desc: 'The first benchmark testing whether AI models that predict protein interactions can be fooled by small, deliberate data changes. Such changes pushed a leading model from 0.87 AUC to worse than random.',
    tags: ['Graph ML', 'Adversarial ML', 'Benchmarking'],
    url: 'https://github.com/shahaddin/Adversarial-Dynamic-Graph-Robustness-Benchmark',
  },
  {
    name: 'GRAFT',
    role: 'Designing the model',
    status: 'In progress · NVIDIA-supported',
    desc: 'Predicts the genes a spatial transcriptomics experiment did not measure, built on a pretrained foundation model. Most accurate of all published methods compared in early results.',
    tags: ['Foundation Models', 'Genomics', 'Deep Learning'],
  },
  {
    name: 'SPACT',
    role: 'Led the peer-review revision',
    status: 'Published · Medical Image Analysis, 2026',
    desc: 'Predicts cancer patient survival by combining tissue images with genomic data.',
    tags: ['PyTorch', 'Multi-modal', 'Medical Imaging'],
    url: 'https://github.com/ezgiogulmus/SPACT',
  },
  {
    name: 'PLATO',
    role: 'Built the evaluation pipeline',
    status: "Published · ACM BCB '25",
    desc: 'Predicts how gene networks change over time. Outperformed 4 leading methods on leukemia data.',
    tags: ['Temporal Graphs', 'Bioinformatics'],
    url: 'https://par.nsf.gov/servlets/purl/10665388',
  },
  {
    name: 'Benchmarking Multi-Object Grasping',
    role: 'Designed protocols & metrics',
    status: 'Published · IEEE Robotics and Automation Letters, 2025',
    desc: 'A benchmark for robots grasping several objects at once: 3 protocols and 4 metrics, tested on 3 robot hands and a human baseline.',
    tags: ['Robotics', 'Computer Vision'],
    url: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11108246',
  },
];

const experience = [
  {
    title: 'Graduate Research & Teaching Assistant',
    org: 'University of Florida',
    period: '2025 – Present',
    bullets: [
      'Deep learning for biology and medicine: graph ML, histopathology, spatial transcriptomics.',
      'Lead TA for Advanced Data Structures (~75 students) and Enterprise Software Engineering Practices (~200).',
    ],
  },
  {
    title: 'Undergraduate Research Assistant, Robotics',
    org: 'University of South Florida',
    period: '2023 – 2024',
    bullets: [
      'Deep learning models estimating the 3D position and orientation of objects in a pile for robotic grasping; benchmark published in IEEE RA-L.',
    ],
  },
  {
    title: 'Full-Stack Developer',
    org: 'MusicLessonHub (startup)',
    period: '2022',
    bullets: [
      'Built front-end and back-end features for a platform matching music students with teachers across the US, shipping alongside the design team.',
    ],
  },
  {
    title: 'Software Engineer, Databases',
    org: 'AzeriMed LLC',
    period: '2020 – 2021',
    bullets: [
      "Built the database layer for aptekonline.az, Azerbaijan's first online pharmacy (National Internet Award, 2023).",
      'Reduced query latency and error rates by redesigning database error handling.',
    ],
  },
];

const skills: Record<string, string> = {
  Languages: 'Python, C/C++, Java, SQL, JavaScript',
  'Machine Learning': 'PyTorch, scikit-learn, NumPy, Pandas, Matplotlib, Scanpy',
  Infrastructure: 'CUDA, Slurm / HPC clusters, Docker, Git',
};

const education = [
  { degree: 'Ph.D. Computer Science', school: 'University of Florida', period: '2025 – 2028 (expected)', note: 'Full-ride scholarship' },
  { degree: 'B.S. Computer Science', school: 'University of South Florida', period: '2021 – 2024', note: 'Green & Gold Presidential Award' },
];

const projects = [
  { name: 'Sentiment Analysis on CPU, GPU & FPGA', tags: 'C++ · NLP · Hardware', url: 'https://github.com/shahaddin/Sentiment-Analysis' },
  { name: 'Hand & Pose Landmark Detection', tags: 'Python · MediaPipe · CV', url: 'https://github.com/shahaddin/MediaPipe-by-Google-AI-Edge' },
  { name: 'Rush Unix Shell', tags: 'C · Systems', url: 'https://github.com/shahaddin/Rush-Unix-Shell-' },
  { name: 'Producer–Consumer Circular Buffer', tags: 'C · Pthreads', url: 'https://github.com/shahaddin/Circular-Buffer-Pthread-' },
  { name: 'Gator Air Traffic Scheduler', tags: 'Python · Data Structures', url: 'https://github.com/shahaddin/Gator_AirTrafficScheduler' },
  { name: 'Stock Analysis', tags: 'C# · LINQ', url: 'https://github.com/shahaddin/StockAnalysis' },
  { name: 'InCollege', tags: 'Python · SQLite · Agile', url: 'https://github.com/shahaddin/InCollege' },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xs uppercase tracking-widest text-blue-400 mb-10">{children}</h2>;
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/50 border border-white/10">{children}</span>;
}

const divider = <div className="border-t border-white/10" />;

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      {/* Hero: who, what, proof, and how to reach me — all above the fold */}
      <section className="max-w-5xl mx-auto px-6 pt-36 pb-20 md:pt-44 md:pb-24 lg:pt-28">
        <div className="lg:grid lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-4">
          <div>
            <p className="text-sm uppercase tracking-widest text-blue-300 font-medium">
              Ph.D. Student in Computer Science · University of Florida
            </p>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">Shahaddin Gafarov</h1>
            <p className="mt-5 text-lg md:text-2xl text-white/70 max-w-2xl leading-snug">
              I build deep learning models for <span className="text-white">biological and medical data</span>:
              graphs, pathology images, and genomics.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={links.resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition">
                <FileText size={16} /> Resume
              </a>
              <a href={links.email} className="flex items-center gap-2 px-5 py-2.5 border border-white/30 rounded-full font-medium text-sm hover:bg-white/10 transition">
                <Mail size={16} /> Email
              </a>
              <a href={links.scholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 border border-white/30 rounded-full font-medium text-sm hover:bg-white/10 transition">
                <GraduationCap size={16} /> Scholar
              </a>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 border border-white/30 rounded-full font-medium text-sm hover:bg-white/10 transition">
                <ExternalLink size={16} /> GitHub
              </a>
            </div>
          </div>

          <HeroRobot className="hidden lg:block h-[480px]" />
        </div>
      </section>

      {divider}

      {/* Research */}
      <section id="research" className="max-w-5xl mx-auto px-6 py-20">
        <FadeIn>
          <SectionHeading>Research</SectionHeading>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-5">
          {research.map((r) => {
            const body = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-lg group-hover:text-blue-300 transition">{r.name}</h3>
                  {r.url && <ArrowUpRight size={18} className="text-white/30 group-hover:text-blue-300 shrink-0 mt-1 transition" />}
                </div>
                <p className="text-blue-300/80 text-xs mt-1">{r.status}</p>
                <p className="text-white/70 text-sm leading-relaxed mt-3">{r.desc}</p>
                <p className="text-white/40 text-xs mt-3">My role: {r.role}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {r.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </>
            );
            const cls = 'block h-full border border-white/10 rounded-2xl p-6 hover:border-white/25 transition group';
            return (
              <FadeIn key={r.name}>
                {r.url ? (
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className={cls}>{body}</a>
                ) : (
                  <div className={cls}>{body}</div>
                )}
              </FadeIn>
            );
          })}
        </div>
        <FadeIn>
          <a href={links.scholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-8 text-sm text-white/50 hover:text-white transition">
            Full publication list on Google Scholar <ArrowUpRight size={14} />
          </a>
        </FadeIn>
      </section>

      {divider}

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
        <FadeIn>
          <SectionHeading>Experience</SectionHeading>
        </FadeIn>
        <div className="space-y-10">
          {experience.map((job) => (
            <FadeIn key={job.org}>
              <div className="grid md:grid-cols-[180px_1fr] gap-2 md:gap-6">
                <p className="text-white/40 text-sm pt-0.5">{job.period}</p>
                <div>
                  <h3 className="font-semibold">
                    {job.title} <span className="text-white/50 font-normal">· {job.org}</span>
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {job.bullets.map((b) => (
                      <li key={b} className="text-white/60 text-sm flex gap-2">
                        <span className="text-blue-400 shrink-0">–</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {divider}

      {/* Skills & Education */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        <FadeIn>
          <SectionHeading>Skills</SectionHeading>
          <dl className="space-y-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <dt className="text-white/40 text-sm">{category}</dt>
                <dd className="text-white/80 mt-0.5">{items}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>
        <FadeIn>
          <SectionHeading>Education</SectionHeading>
          <div className="space-y-5">
            {education.map((e) => (
              <div key={e.degree}>
                <p className="font-semibold">{e.degree}</p>
                <p className="text-white/60 text-sm">{e.school} · {e.period}</p>
                <p className="text-white/40 text-sm">{e.note}</p>
              </div>
            ))}
            <div>
              <p className="font-semibold">Bronze Medal</p>
              <p className="text-white/60 text-sm">National Informatics Olympiad of Azerbaijan</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {divider}

      {/* Other projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
        <FadeIn>
          <SectionHeading>Other Projects</SectionHeading>
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {projects.map((p) => (
              <li key={p.name}>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 py-3 group">
                  <span className="group-hover:text-blue-300 transition">{p.name}</span>
                  <span className="flex items-center gap-2 text-sm text-white/40">
                    {p.tags} <ArrowUpRight size={14} className="group-hover:text-blue-300 transition" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>

      {divider}

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
        <FadeIn>
          <SectionHeading>Contact</SectionHeading>
          <p className="text-2xl md:text-3xl font-semibold">Let&apos;s talk.</p>
          <a href={links.email} className="inline-block mt-3 text-lg text-blue-300 hover:text-blue-200 transition">
            shahaddingafarov@gmail.com
          </a>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/50">
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
            <a href={links.scholar} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Google Scholar</a>
            <a href={links.resume} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Resume (PDF)</a>
          </div>
        </FadeIn>
      </section>

      <footer className="border-t border-white/10 text-center py-8 text-white/20 text-xs">
        © {new Date().getFullYear()} Shahaddin Gafarov
      </footer>
    </main>
  );
}
