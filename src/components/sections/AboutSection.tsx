import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Globe, 
  Database, 
  GitBranch,
  Zap,
  Shield
} from 'lucide-react';

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { icon: Code2, name: 'Web Development', description: 'React, TypeScript, Next.js, HTML, CSS, JavaScript' },
    { icon: Shield, name: 'Security Analyst', description: 'Vulnerability Assessment, Security Testing' },
    { icon: Globe, name: 'Blogger', description: 'Technical Writing, Content Creation' },
    { icon: Zap, name: 'PlayStation Modding', description: 'Custom Firmware, Game Installation' },
    { icon: Smartphone, name: 'Mobile Software Maintenance', description: 'FRP, Flashing, Unlocking' },
    { icon: Database, name: 'Linux & Windows System Operations', description: 'Windows, Linux, System Internals' },
    { icon: GitBranch, name: 'Version Control', description: 'Git, GitHub, GitLab' },
    { icon: Zap, name: 'AI Collaboration', description: 'Collaborating with AI to solve problems and build cool things' },
  ];
const experience = [
  {
    year: '2023 - Present',
    title: 'Full Stack Web Developer ',
    company: 'Self-Employed',
    description: 'Building dynamic and responsive web applications for clients using React.js and PHP. Focused on creating user-friendly interfaces, admin dashboards, blog systems, and custom CMS solutions.'
  },
   {
    year: '2023 - Present',
    title: 'System Maintenance & Customization',
    company: 'Independent',
    description: 'Performed PlayStation 4 system maintenance and safe game installations. Explored firmware customization techniques for offline and educational use.'
  },
   
  {
    year: '2022 - 2023',
    title: 'Frontend Developer ',
    company: 'Various Clients',
    description: 'Developed modern frontend interfaces using React.js. Delivered clean UI components and optimized websites for speed and mobile performance.'
  },
   {
    year: '2021 - 2022',
    title: 'Cybersecurity Learner',
    company: 'Self-Study with Kali Linux',
    description: 'Practicing basic web security testing using Kali Linux tools such as Nmap, Nikto, and Burp Suite. Focused on ethical hacking, vulnerability scanning, and safe local environment testing.'
  },
  {
    year: '2021 - 2022',
    title: 'Web Developer Intern',
    company: 'Personal Projects & Practice',
    description: 'Gained hands-on experience by building portfolio websites, learning PHP and MySQL integration, and practicing frontend/backend workflows.'
  }, 
];


  return (
    <section id="about" className="py-20 bg-gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a full-stack developer eager to learn and grow. I enjoy building digital experiences and solving problems with code.
            </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Skills & Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                className="glass-card p-6 hover:glow transition-all duration-300 group cursor-pointer"
              >
                <skill.icon className="h-8 w-8 text-primary mb-4 group-hover:text-accent transition-colors" />
                <h4 className="font-semibold mb-2">{skill.name}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Experience
          </h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 * index }}
                className="glass-card p-6 hover:glow transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-primary">{exp.title}</h4>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full mt-2 md:mt-0">
                    {exp.year}
                  </span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};