import { Section } from '@/components/blocks/interactive-3d-robot';
import { Navbar } from '@/components/ui/navbar';
import { FadeIn } from '@/components/ui/fade-in';
import { Mail, ExternalLink } from 'lucide-react';

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
    period: 'Jun 2020 – Jun 2021',
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
  {
    name: 'Spatial Transcriptomics Super-Resolution',
    desc: 'Deep learning model that enhances spatial transcriptomics data from multi-cellular to single-cellular resolution, enabling finer-grained analysis of gene expression within tissue architecture. Supported by an NVIDIA grant.',
    tags: ['Spatial Transcriptomics', 'Super-Resolution', 'Deep Learning', 'NVIDIA'],
  },
  {
    name: 'Benchmarking Temporal Graph Prediction',
    desc: 'Comprehensive benchmarking framework to evaluate the robustness of temporal graph-based prediction models under adversarial conditions, assessing generalizability across evolving biological and relational networks.',
    tags: ['Temporal Graphs', 'Adversarial Robustness', 'Benchmarking', 'Graph Neural Networks'],
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
    desc: 'CLI application simulating a LinkedIn-like social platform for college students, streamlining job postings and student communication using Python and SQLite.',
    tags: ['Python', 'SQLite', 'CLI', 'Agile'],
    url: 'https://github.com/daniel19e/SWE-Project-Fall23-InCollege',
  },
];

const publications = [
  {
    authors: 'Öğülmüş, F. E., Gafarov, S., Almaloğlu, Y., Özdemir, B. H., et al.',
    title: 'SPACT: A Clustering-Driven Multi-Modal Framework for Survival Prediction Using Genomic and Histopathology Data.',
    venue: 'Medical Image Analysis (in progress)',
    year: '2026',
    note: undefined,
  },
  {
    authors: 'Khatib, T., Gafarov, S., Strikowski, J. D., Turan, M., & Kahveci, T.',
    title: 'PLATO: Predicting Longitudinally-Aligned Time Observations of Biological Networks.',
    venue: "ACM BCB '25, Philadelphia, PA",
    year: '2025',
    note: undefined,
    url: 'https://par.nsf.gov/servlets/purl/10665388',
  },
  {
    authors: 'Chen, T., Frumento, R., Pagnanelli, G., Keth, V., Gafarov, S., et al.',
    title: 'Benchmarking Multi-Object Grasping.',
    venue: 'IEEE Robotics and Automation Letters',
    year: '2025',
    note: 'Vol. 10, pp. 9510–9517',
    url: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11108246',
  },
];

const skills: Record<string, string[]> = {
  Languages: ['Python', 'C', 'C++', 'C#', 'SQL', 'JavaScript', 'HTML/CSS'],
  Libraries: ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'Matplotlib'],
  Tools: ['Git', 'Docker', 'Jira', 'VS Code', 'Visual Studio', 'PyCharm', 'Overleaf'],
};

const awards = [
  { title: 'Full Tuition Waiver & Stipend', org: 'University of Florida : PhD' },
  { title: 'Green & Gold Presidential Award', org: 'University of South Florida, BS' },
  { title: 'Bronze Medal', org: 'National Informatics Olympiad of Azerbaijan' },
];

export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />

      <Section />

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <FadeIn>
          <h2 className="text-xs uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-6">About</h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-500 dark:text-white/60 max-w-2xl">
            PhD researcher at the <span className="text-gray-900 dark:text-white font-medium">University of Florida</span>, building deep learning systems for bioinformatics and medical imaging. Three publications across ACM, IEEE, and Medical Image Analysis, with ongoing NVIDIA-supported research in spatial transcriptomics and adversarial robustness.
          </p>
        </FadeIn>
      </section>

      <div className="border-t border-black/10 dark:border-white/10" />

      {/* Experience */}
      <section id="experience" className="max-w-4xl mx-auto px-6 py-24">
        <FadeIn>
          <h2 className="text-xs uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-12">Experience</h2>
        </FadeIn>
        <div className="space-y-12">
          {experience.map((job) => (
            <FadeIn key={job.title}>
              <div className="grid md:grid-cols-[1fr_2fr] gap-4">
                <div>
                  <p className="text-gray-400 dark:text-white/40 text-sm">{job.period}</p>
                  <p className="text-gray-500 dark:text-white/60 text-sm mt-1">{job.org}</p>
                  <p className="text-gray-400 dark:text-white/40 text-xs mt-0.5">{job.location}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{job.title}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {job.bullets.map((b) => (
                      <li key={b} className="text-gray-600 dark:text-white/60 text-sm flex gap-2">
                        <span className="text-blue-500 dark:text-blue-400 mt-1 shrink-0">–</span>
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

      <div className="border-t border-black/10 dark:border-white/10" />

      {/* Research */}
      <section id="research" className="max-w-4xl mx-auto px-6 py-24">
        <FadeIn>
          <h2 className="text-xs uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-12">Research</h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {research.map((r) => (
            <FadeIn key={r.name}>
              <div className="border border-black/10 dark:border-white/10 rounded-2xl p-6 hover:border-black/25 dark:hover:border-white/25 transition h-full">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">{r.name}</h3>
                <p className="text-gray-400 dark:text-white/50 text-xs mt-1 mb-3">{r.status}</p>
                <p className="text-gray-600 dark:text-white/70 text-sm leading-relaxed">{r.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {r.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 text-gray-500 dark:text-white/50 border border-black/10 dark:border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="border-t border-black/10 dark:border-white/10" />

      {/* Publications */}
      <section id="publications" className="max-w-4xl mx-auto px-6 py-24">
        <FadeIn>
          <h2 className="text-xs uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-12">Publications</h2>
        </FadeIn>
        <div className="space-y-8">
          {publications.map((p) => (
            <FadeIn key={p.title}>
              <div className="flex gap-6">
                <span className="text-blue-500 dark:text-blue-400 font-mono text-sm mt-1 shrink-0">{p.year}</span>
                <div>
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="font-medium text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition">{p.title}</a>
                  ) : (
                    <p className="font-medium text-gray-900 dark:text-white">{p.title}</p>
                  )}
                  <p className="text-gray-500 dark:text-white/50 text-sm mt-1">{p.authors}</p>
                  <p className="text-blue-500/70 dark:text-blue-300/70 text-sm mt-1">
                    {p.venue}{p.note ? ` · ${p.note}` : ''}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="border-t border-black/10 dark:border-white/10" />

      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-24">
        <FadeIn>
          <h2 className="text-xs uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-12">Projects</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <FadeIn key={p.name}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black/10 dark:border-white/10 rounded-2xl p-6 hover:border-black/25 dark:hover:border-white/25 transition group block h-full"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition">{p.name}</h3>
                  <ExternalLink size={14} className="text-gray-400 dark:text-white/30 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition" />
                </div>
                <p className="text-gray-600 dark:text-white/60 text-sm leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 text-gray-500 dark:text-white/50 border border-black/10 dark:border-white/10">{t}</span>
                  ))}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="border-t border-black/10 dark:border-white/10" />

      {/* Skills */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <FadeIn>
          <h2 className="text-xs uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-10">Technical Skills</h2>
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="grid md:grid-cols-[120px_1fr] gap-4 items-start">
                <span className="text-gray-400 dark:text-white/40 text-sm pt-1">{category}</span>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="px-3 py-1.5 rounded-full border border-black/15 dark:border-white/15 text-gray-700 dark:text-white/70 text-sm hover:border-black/30 dark:hover:border-white/30 hover:text-gray-900 dark:hover:text-white transition">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <div className="border-t border-black/10 dark:border-white/10" />

      {/* Awards */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <FadeIn>
          <h2 className="text-xs uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-10">Awards</h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((a) => (
            <FadeIn key={a.title}>
              <div className="border border-black/10 dark:border-white/10 rounded-2xl p-6">
                <p className="font-semibold text-gray-900 dark:text-white">{a.title}</p>
                <p className="text-gray-500 dark:text-white/50 text-sm mt-1">{a.org}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="border-t border-black/10 dark:border-white/10" />

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
        <FadeIn>
          <h2 className="text-xs uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-8">Contact</h2>

          <div className="flex flex-wrap gap-6">
            <a href="mailto:shahaddingafarov@gmail.com" className="flex items-center gap-2 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition text-sm">
              <Mail size={16} /> shahaddingafarov@gmail.com
            </a>
            <a href="https://github.com/shahaddin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition text-sm">
              <ExternalLink size={16} /> github.com/shahaddin
            </a>
            <a href="https://linkedin.com/in/shahaddin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition text-sm">
              <ExternalLink size={16} /> linkedin.com/in/shahaddin
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition text-sm">
              <ExternalLink size={16} /> Resume
            </a>
          </div>
        </FadeIn>
      </section>

      <footer className="border-t border-black/10 dark:border-white/10 text-center py-8 text-gray-400 dark:text-white/20 text-xs">
        © {new Date().getFullYear()} Shahaddin Gafarov
      </footer>
    </main>
  );
}
