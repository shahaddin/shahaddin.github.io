import { Section } from '@/components/blocks/interactive-3d-robot';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const experience = [
  {
    title: 'Graduate Assistant (Research Focus)',
    org: 'University of Florida',
    location: 'Gainesville, FL',
    period: 'Apr 2025 – Present',
    bullets: [
      'Building novel machine learning applications to solve bioinformatics and medical imaging problems.',
      'Developing a robustness score for evaluating contemporary machine learning techniques.',
      'Lead Teaching Assistant for Advanced Data Structures (Prof. Dr. Sartaj Sahni).',
    ],
  },
  {
    title: 'Undergraduate Research Assistant',
    org: 'University of South Florida',
    location: 'Tampa, FL',
    period: 'Dec 2023 – Dec 2024',
    bullets: [
      'Defined robotic systems for benchmarking and developing multi-object grasping solutions.',
      'Detected 6D poses of top-layer objects in the target using deep learning techniques.',
    ],
  },
  {
    title: 'Full-Stack Developer',
    org: 'MusicLessonHub',
    location: 'Boise, ID (Remote)',
    period: 'Apr 2022 – Aug 2022',
    bullets: [
      'Contributed to a startup connecting students and teachers across the United States.',
      'Collaborated with designers to develop interfaces using front-end tools.',
      'Developed server-side applications using C#/.NET Framework.',
    ],
  },
  {
    title: 'Junior IT Technician – Servers & Database',
    org: 'AzeriMed LLC',
    location: 'Baku, Azerbaijan',
    period: 'Jun 2021 – Jun 2022',
    bullets: [
      'Collaborated with senior developers on error handling with the databases.',
      'Ensured proper functioning of AzeriMed servers through maintenance and troubleshooting.',
      "Worked on aptekonline.az, Azerbaijan's first pharmaceutical database for business purposes.",
    ],
  },
];

const research = [
  {
    name: 'SPACT',
    desc: 'Novel multimodal network for predicting cancer survival based on tissue using Whole Slide Images + Multi-Omics data.',
    tags: ['PyTorch', 'WSI', 'Multi-Omics', 'Survival Analysis'],
    status: 'Under Review – Medical Image Analysis',
  },
  {
    name: 'PLATO',
    desc: 'Dynamic graph-based learning model for predicting future biological interactions: drug-drug, gene-gene, and protein-protein.',
    tags: ['Graph Neural Networks', 'Bioinformatics', 'Temporal Graphs'],
    status: 'Published – ACM BCB 2025',
  },
  {
    name: 'Benchmarking Multi-Object Grasping',
    desc: 'Benchmark framework for evaluating multi-object grasping in robotics with deep learning-based 6D pose estimation.',
    tags: ['Robotics', '6D Pose', 'Deep Learning', 'Computer Vision'],
    status: 'Published – IEEE RA-L 2025',
  },
];

const projects = [
  {
    name: 'Stock Analysis',
    desc: 'OOP application to load, display, and analyze stock data using candlesticks, implement pattern recognition, and annotate "smart candlestick" patterns using C# and LINQ.',
    tags: ['C#', 'LINQ', 'OOP', 'Data Analysis'],
    url: 'https://github.com/shahaddin/StockAnalysis',
  },
  {
    name: 'Sentiment Analysis',
    desc: 'Identified textual data into positive, negative, and neutral sentiment using the SemEval-2016 Twitter dataset, implemented over a GPU and an FPGA.',
    tags: ['C++', 'NLP', 'GPU', 'FPGA'],
    url: 'https://github.com/shahaddin/Sentiment-Analysis',
  },
  {
    name: 'MediaPipe Pose & Hand Detection',
    desc: "Computer vision application for real-time Pose Landmark Detection and Hand Landmark Detection using Google's MediaPipe AI Edge library.",
    tags: ['Python', 'Computer Vision', 'MediaPipe', 'Google AI'],
    url: 'https://github.com/shahaddin/MediaPipe-by-Google-AI-Edge',
  },
  {
    name: 'Gator Air Traffic Scheduler',
    desc: 'Airport runway slot scheduler that tracks flights across states using advanced data structures for efficient scheduling and conflict resolution.',
    tags: ['Python', 'Data Structures', 'Algorithms'],
    url: 'https://github.com/shahaddin/Gator_AirTrafficScheduler',
  },
  {
    name: 'Rush Unix Shell',
    desc: 'Lightweight Unix shell implementing command execution, built-in commands, path management, output redirection, and parallel processing.',
    tags: ['C', 'Systems', 'Unix', 'Concurrency'],
    url: 'https://github.com/shahaddin/Rush-Unix-Shell-',
  },
  {
    name: 'Circular Buffer (Pthreads)',
    desc: 'C program using condition variables to manage a circular buffer shared between a producer and consumer thread, demonstrating low-level concurrency.',
    tags: ['C', 'Pthreads', 'Concurrency', 'OS'],
    url: 'https://github.com/shahaddin/Circular-Buffer-Pthread-',
  },
  {
    name: 'InCollege',
    desc: 'CLI application simulating a LinkedIn-like social platform for college students — streamlines job postings and student communication using Python and SQLite.',
    tags: ['Python', 'SQLite', 'CLI', 'Agile'],
    url: 'https://github.com/shahaddin/InCollege',
  },
];

const publications = [
  {
    authors: 'Öğülmüş, F. E., Gafarov, S., Almaloğlu, Y., Özdemir, B. H., et al.',
    title: 'SPACT: A Clustering-Driven Multi-Modal Framework for Survival Prediction Using Genomic and Histopathology Data.',
    venue: 'Medical Image Analysis',
    year: '2026',
    note: 'Minor revision',
  },
  {
    authors: 'Khatib, T., Gafarov, S., Strikowski, J. D., Turan, M., & Kahveci, T.',
    title: 'PLATO: Predicting Longitudinally-Aligned Time Observations of Biological Networks.',
    venue: "ACM BCB '25, Philadelphia, PA",
    year: '2025',
  },
  {
    authors: 'Chen, T., Frumento, R., Pagnanelli, G., Keth, V., Gafarov, S., et al.',
    title: 'Benchmarking Multi-Object Grasping.',
    venue: 'IEEE Robotics and Automation Letters',
    year: '2025',
    note: 'Vol. 10, pp. 9510–9517',
  },
];

const skills: Record<string, string[]> = {
  Languages: ['Python', 'C/C++', 'C#', 'SQL (MySQL)', 'JavaScript', 'HTML/CSS'],
  Libraries: ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'Matplotlib'],
  Tools: ['Git', 'Docker', 'Jira', 'VS Code', 'Visual Studio', 'PyCharm', 'Overleaf'],
};

const awards = [
  { title: 'Full Tuition Waiver & Stipend', org: 'University of Florida – PhD Program' },
  { title: 'Green & Gold Presidential Award', org: 'University of South Florida' },
  { title: 'Bronze Medal', org: 'National Informatics Olympiad of Azerbaijan' },
];

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <Section />

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-xs uppercase tracking-widest text-blue-400 mb-3">About</h2>
        <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/90">
          I&apos;m a PhD student in Computer Science at the{' '}
          <span className="text-white font-medium">University of Florida</span>, researching
          multimodal deep learning for cancer survival prediction and robustness in biological AI.
          I also build software — from full-stack web apps to robotics pipelines.
        </p>
      </section>

      <div className="border-t border-white/10" />

      {/* Experience */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-xs uppercase tracking-widest text-blue-400 mb-12">Experience</h2>
        <div className="space-y-12">
          {experience.map((job) => (
            <div key={job.title} className="grid md:grid-cols-[1fr_2fr] gap-4">
              <div>
                <p className="text-white/40 text-sm">{job.period}</p>
                <p className="text-white/60 text-sm mt-1">{job.org}</p>
                <p className="text-white/40 text-xs mt-0.5">{job.location}</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">{job.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="text-white/60 text-sm flex gap-2">
                      <span className="text-blue-400 mt-1 shrink-0">–</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-white/10" />

      {/* Research */}
      <section id="research" className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-xs uppercase tracking-widest text-blue-400 mb-12">Research</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {research.map((r) => (
            <div key={r.name} className="border border-white/10 rounded-2xl p-6 hover:border-white/25 transition">
              <h3 className="font-bold text-lg">{r.name}</h3>
              <p className="text-white/50 text-xs mt-1 mb-3">{r.status}</p>
              <p className="text-white/70 text-sm leading-relaxed">{r.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {r.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/50 border border-white/10">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-white/10" />

      {/* Publications */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-xs uppercase tracking-widest text-blue-400 mb-12">Publications</h2>
        <div className="space-y-8">
          {publications.map((p) => (
            <div key={p.title} className="flex gap-6">
              <span className="text-blue-400 font-mono text-sm mt-1 shrink-0">{p.year}</span>
              <div>
                <p className="font-medium text-white">{p.title}</p>
                <p className="text-white/50 text-sm mt-1">{p.authors}</p>
                <p className="text-blue-300/70 text-sm mt-1">
                  {p.venue}{p.note ? ` · ${p.note}` : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-white/10" />

      {/* Projects */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-xs uppercase tracking-widest text-blue-400 mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 rounded-2xl p-6 hover:border-white/25 transition group block"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold group-hover:text-blue-300 transition">{p.name}</h3>
                <ExternalLink size={14} className="text-white/30 group-hover:text-blue-300 transition" />
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/50 border border-white/10">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="border-t border-white/10" />

      {/* Skills */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-xs uppercase tracking-widest text-blue-400 mb-10">Technical Skills</h2>
        <div className="space-y-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="grid md:grid-cols-[120px_1fr] gap-4 items-start">
              <span className="text-white/40 text-sm pt-1">{category}</span>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-full border border-white/15 text-white/70 text-sm hover:border-white/30 hover:text-white transition">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-white/10" />

      {/* Awards */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-xs uppercase tracking-widest text-blue-400 mb-10">Awards</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((a) => (
            <div key={a.title} className="border border-white/10 rounded-2xl p-6">
              <p className="font-semibold text-white">{a.title}</p>
              <p className="text-white/50 text-sm mt-1">{a.org}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-white/10" />

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-xs uppercase tracking-widest text-blue-400 mb-8">Contact</h2>
        <p className="text-2xl font-light text-white/80 mb-10">
          Open to research collaborations, opportunities, and conversations.
        </p>
        <div className="flex flex-wrap gap-6">
          <a href="mailto:shahaddingafarov@gmail.com" className="flex items-center gap-2 text-white/60 hover:text-white transition text-sm">
            <Mail size={16} /> shahaddingafarov@gmail.com
          </a>
          <a href="tel:8138972367" className="flex items-center gap-2 text-white/60 hover:text-white transition text-sm">
            <Phone size={16} /> 813-897-2367
          </a>
          <a href="https://github.com/shahaddin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-white transition text-sm">
            <ExternalLink size={16} /> github.com/shahaddin
          </a>
          <a href="https://linkedin.com/in/shahaddin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-white transition text-sm">
            <ExternalLink size={16} /> linkedin.com/in/shahaddin
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 text-center py-8 text-white/20 text-xs">
        © {new Date().getFullYear()} Shahaddin Gafarov
      </footer>
    </main>
  );
}
