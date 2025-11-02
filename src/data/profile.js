export const profile = {
  name: 'Lijin Raj. N',
  title: 'Senior DevOps Engineer',
  email: 'nlijinraj@gmail.com',
  phone: '+91 9663377973',
  linkedin: 'https://www.linkedin.com/in/lijin-raj/',
  github: 'https://github.com/nlijin',
  portfolio: 'https://nlijin.github.io/devops_profile/'
}


export const summary = `Results-driven Senior DevOps Engineer with 10 years of progressive IT experience, including 5 years of expertise in Cloud Infrastructure, CI/CD automation, and containerized deployments. Skilled in designing and managing AWS-based DevOps environments using Terraform, Docker, Kubernetes, Jenkins, and Ansible. Proven ability to automate build, deployment, and monitoring pipelines, improving delivery speed and system reliability across microservices architectures.`


export const skills = [
    { group: 'Cloud', items: ['AWS'] },
    { group: 'CI/CD', items: ['Jenkins', 'GitHub Actions', 'GitLab', 'Argo CD'] },
    { group: 'Containers', items: ['Docker', 'Kubernetes', 'Docker Compose'] },
    { group: 'IaC & CM', items: ['Terraform', 'Ansible'] },
    { group: 'Monitoring', items: ['Prometheus', 'Grafana', 'ELK'] },
    { group: 'Build & Scripting', items: ['Gradle', 'Maven', 'npm', 'Yarn', 'Shell', 'Python'] },
    { group: 'Frontend', items: ['React.js', 'JavaScript (ES6+)'] }
]


export const experience = [
    {
        company: 'Wipro Technologies (Optum)',
        role: 'Project Lead',
        period: 'Mar 2024 - PRESENT',
        bullets: [
            'Designed and optimized CI/CD pipelines for Java-based microservices using Gradle, Jenkins, and GitHub Actions, reducing build and deployment time by 20%.',
            'Containerized and deployed microservices using Docker and Kubernetes, enabling scalable and consistent environments across three development teams.',
            'Led the Kubernetes adoption initiative, implementing Ingress controllers, Helm charts, and HPA to achieve 20% cost efficiency and improved reliability.'
        ]
    },
    {
        company: 'BCT Consulting (Eli Lilly)',
        role: 'Senior Software Engineer',
        period: 'Jan 2023 – Jun 2023',
        bullets: [
            'Developed React front-ends integrated with AWS Amplify and Lambda APIs.',
            'Built automated deployment workflows using GitHub Actions and AWS CodePipeline.',
            'Collaborated with backend teams to containerize and deploy services using Docker and ECS.'
        ]
    },
    {
        company: 'Prime Focus Technologies',
        role: 'Senior Software Engineer',
        period: 'Sep 2021 – Oct 2022',
        bullets: [
            'Built responsive, SEO-optimized apps using React, Next.js, and Tailwind CSS.',
            'Designed serverless architectures with AWS Lambda, API Gateway, and DynamoDB.',
            'Optimized frontend performance and introduced automated testing pipelines with Jest.'
        ]
    },
    {
        company: 'Dell Technologies',
        role: 'Senior Systems Engineer',
        period: 'Jun 2018 – Aug 2021',
        bullets: [
            'Assisted in configuring and managing EMC storage arrays, gaining hands-on exposure to enterprise storage and infrastructure systems.',
            'Contributed to small-scale web applications using HTML, CSS, and JavaScript to visualize operational metrics.'
        ]
    },
    {
        company: 'Accenture',
        role: 'Technical Consultant',
        period: 'Nov 2015 – May 2018',
        bullets: [
            'Skilled in all presales operations and worked on technical solutions, built proposals that addressed client’s current and evolving requirements.',
            'Creating quotations and answering technical queries for all EMC storage arrays along with their technical specifications.'
        ]
    }
]


export const projects = [
    {
        title: 'Terraform Infrastructure Automation',
        where: 'Wipro Technologies',
        desc: 'Automated provisioning of multi-environment AWS infrastructure using Terraform and integrated deployments through Jenkins. Implemented remote backend locking with S3 and DynamoDB.',
        highlights: ['Reduced manual provisioning efforts by 70%', 'Remote state locking and team-safe workflows']
    },
    {
        title: 'Kubernetes GitOps Deployment',
        where: 'Wipro Technologies',
        desc: 'Deployed GitOps-based workflows using Argo CD on AWS EKS for microservices delivery. Configured Helm charts and integrated monitoring with Prometheus and Grafana.',
        highlights: ['Automated rollouts and rollbacks', 'Improved observability for production clusters']
    },
    {
        title: 'End-to-End Chatbot Automation',
        where: 'Eli Lilly (BCT Consulting)',
        desc: 'Built and deployed a chatbot using Docker, Kubernetes, and Slack API integrated with CI/CD pipelines.',
        highlights: ['Deployment time reduced from 1h to 10m', 'Achieved 99.9% uptime']
    }
]