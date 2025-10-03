<template>
  <div class="container mx-auto px-6 py-16">
    <div class="max-w-4xl mx-auto">
      <div class="animate-fade-in">
        <h1 class="text-5xl font-bold mb-6">
          <span class="text-terminal-success">$</span> About Me
        </h1>
        
        <div class="grid md:grid-cols-3 gap-12 mb-16">
          <div class="md:col-span-2">
            <p class="text-xl text-terminal-muted mb-6 leading-relaxed">
              I'm a full-stack developer with a passion for creating elegant, efficient architecture for cloud native software. With expertise in modern web technologies, I specialize in 
              building scalable applications that deliver exceptional user experiences.
            </p>
            
            <p class="text-lg text-terminal-muted mb-6 leading-relaxed">
              My journey in software development began over a decade ago, and since then I've 
              worked on diverse projects ranging from enterprise AI applications to fintech platform infrastructure. 
              I believe in clean code, continuous learning, and the power of collaboration.
            </p>

            <p class="text-lg text-terminal-muted leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, reading books on science and history, or sharing knowledge through technical writing and mentoring.
            </p>
          </div>

          <div class="card">
            <div class="w-48 h-48 mx-auto mb-4 bg-terminal-elevated rounded-lg flex items-center justify-center">
              <span class="text-6xl">👨‍💻</span>
            </div>
            <div class="text-center">
              <h3 class="font-bold text-xl mb-2">Josh Janes</h3>
              <p class="text-terminal-muted text-sm">Full-Stack Engineer</p>
            </div>
          </div>
        </div>

        <section class="mb-16">
          <h2 class="text-3xl font-bold mb-8">
            <span class="text-terminal-success">//</span> Technical Skills
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="skill in skillCategories" :key="skill.category" class="card">
              <h3 class="font-bold text-lg mb-4 text-terminal-accent">{{ skill.category }}</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in skill.technologies" 
                  :key="tech"
                  class="px-3 py-1 bg-terminal-elevated rounded-full text-sm text-terminal-muted"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section class="mb-16">
          <h2 class="text-3xl font-bold mb-8">
            <span class="text-terminal-success">//</span> Experience
          </h2>
          
          <div class="space-y-8">
            <div v-for="exp in experience" :key="exp.title" class="card">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="font-bold text-xl text-terminal-accent">{{ exp.title }}</h3>
                  <p class="text-terminal-muted">{{ exp.company }}</p>
                </div>
                <span class="text-sm text-terminal-muted">{{ exp.period }}</span>
              </div>
              <p class="text-terminal-muted">{{ exp.description }}</p>
            </div>
          </div>
        </section>

        <section class="relative overflow-hidden rounded-xl">
          <div class="absolute inset-0 bg-gradient-to-br from-terminal-accent/10 to-terminal-success/10"></div>
          <div class="relative card border-terminal-accent/30">
            <h2 class="text-3xl font-bold mb-4">
              <span class="text-terminal-success">//</span> Let's Connect
            </h2>
            <p class="text-lg text-terminal-muted mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div class="flex flex-wrap gap-4">
              <a href="mailto:me@jjanes.ca" class="btn-primary flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
              <a href="https://github.com/josh-janes" target="_blank" rel="noopener noreferrer" class="btn-secondary flex items-center gap-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/josh-janes-8ab04a126/" target="_blank" rel="noopener noreferrer" class="btn-secondary flex items-center gap-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skillCategories = [
  {
    category: 'Frontend',
    technologies: ['Javascript', 'Vue.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    category: 'Backend',
    technologies: ['Java', 'Spring Boot', 'Node.js', 'Express', 'Python', 'MySQL', 'MongoDB', 'Redis']
  },
  {
    category: 'DevOps & Tools',
    technologies: ['Docker', 'Kubernetes', 'Terraform', 'AWS', 'Git', 'CI/CD', 'Linux']
  },
  {
    category: 'Other',
    technologies: ['REST APIs', 'gRPC', 'WebSockets', 'Testing', 'Agile', 'Microservices']
  }
]

const experience = [
  {
    title: 'Software Engineer L3 (Remote, Canada)',
    company: 'Earnin',
    period: '2022-2024',
    description: 'Led the design and implementation of a cross‑platform login system with React, TypeScript, C Sharp, and Java, which cut security vulnerabilities by 15 percent through OAuth and Passkey authentication. Partnered with stakeholders to integrate Keycloak, streamlining user authentication and reducing support calls by 20 percent. Managed the interview process for dozens of software‑engineering candidates.'
  },
  {
    title: 'Software Engineer L1/L2 (Mountain View, Califonia)',
    company: 'Intuit',
    period: '2017-2021',
    description: 'I led the complete overhaul of QuickBooks Assistant, deploying a Python LLM for richer chatbot interactions, building a Java Spring Boot platform that powers AI agents for QuickBooks Online and TurboTax, and modernizing the backend with Kotlin microservices. I also shifted the system from synchronous REST to asynchronous gRPC, enabling real‑time chat, while using data‑driven A/B tests to improve app engagement and streamline release cycles.'
  },
  {
    title: 'Computer Repair Technician (Edmonton, Alberta)',
    company: 'Alberta Computers For Schools',
    period: '2016',
    description: 'Refurbished and repaired old computer hardware for schools across Alberta. Installed and configured operating systems and performed systems administration tasks.'
  }
]
</script>