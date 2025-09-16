import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '../ui/button';
import project1 from '../../assets/project-1.jpg';
import project2 from '../../assets/project-2.jpg';
import project3 from '../../assets/project-3.jpg';

export const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Blog Platform',
      description: 'A full-featured blog platform with user authentication, content management, and admin dashboard.',
      image: project1,
      technologies: ['HTML & CSS', 'Bootstrap', 'PHP', 'Mysql'],
      category: 'Full Stack',
      github: 'https://github.com/mameproo',
      live: 'https://spacetimespace.com',
      type: 'image',
    },
    {
      id: 2,
      title: 'Tena 360 HealthCare',
      description: 'A comprehensive healthcare platform front-end project with multiple features.',
      image: project2,
      technologies: ['React', 'TypeScript', 'Tailwind'],
      category: 'Frontend',
      github: 'https://github.com/mameproo',
      live: 'https://tena360.netlify.app',
      type: 'image',
    },
    {
      id: 3,
      title: 'Itechet IT Solution Website',
      description: 'A modern frontend website for an IT solutions company, featuring responsive design, service showcase, and contact form.',
      image: project3,
      technologies: ['HTML & CSS', 'JavaScript', 'Bootstrap'],
      category: 'Frontend',
      github: 'https://github.com/mameproo',
      live: 'https://itechet.netlify.app',
      type: 'image',
    },
    {
      id: 4,
      title: 'Graphic Design Samples',
      description: 'Behance showcase projects with creative design samples.',
      category: 'Others',
      type: 'iframe',
      iframeProjects: [
        {
          id: 'b1',
          src: 'https://www.behance.net/embed/project/234708667?ilo0=1',
          live: 'https://www.behance.net/gallery/234708667',
        },
      ],
    },
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Others'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in web development and design.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              onClick={() => setFilter(category)}
              className={`transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-primary text-white glow'
                  : 'hover:border-primary hover:text-primary'
              }`}
            >
              <Filter className="mr-2 h-4 w-4" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index }}
              className="glass-card overflow-hidden group hover:glow transition-all duration-300"
            >
              {/* For Normal Projects */}
              {project.type === 'image' && (
                <>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="p-2">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="p-2">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies &&
                        project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>

                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="w-full hover:border-primary hover:text-primary"
                          >
                            <span>
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </span>
                          </Button>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button
                            asChild
                            size="sm"
                            className="w-full bg-gradient-primary hover:glow"
                          >
                            <span>
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </span>
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* For Behance Iframes */}
              {project.type === 'iframe' && (
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-col gap-6">
                    {project.iframeProjects &&
                      project.iframeProjects.map((iframe) => (
                        <div key={iframe.id} className="w-full">
                          <iframe
                            src={iframe.src}
                            height="260"
                            width="100%"
                            frameBorder="0"
                            allowFullScreen
                            loading="lazy"
                            allow="clipboard-write"
                            referrerPolicy="strict-origin-when-cross-origin"
                            className="w-full rounded-lg shadow"
                            title={iframe.id}
                          ></iframe>

                          <div className="mt-2">
                            <a
                              href={iframe.live}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button
                                size="sm"
                                className="bg-gradient-primary hover:glow w-full"
                              >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                View on Behance
                              </Button>
                            </a>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
