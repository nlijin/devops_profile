export const profile = {
  name: 'Lijin Raj. N',
  title: 'Senior AI & Systems Engineer | Technical Lead',
  email: 'nlijinraj@gmail.com',
  phone: '+91 9663377973',
  linkedin: 'https://www.linkedin.com/in/lijin-raj/',
  github: 'https://github.com/nlijin',
  portfolio: 'https://nlijin.github.io/devops_profile/'
}

export const summary = `Results-driven Senior AI & Systems Engineer with 12+ years of progressive IT experience, specializing 2.5+ years in Generative AI integration, LLM application architecture, Python backends, and Model Context Protocol (MCP) tool integrations. Certified in AI-Native Engineering with Claude Code, with proven expertise in designing end-to-end AI-assisted workflow engines, agentic pipelines, and high-performance cloud architectures across enterprise environments.`

export const skills = [
  { 
    group: 'AI & Agentic Systems', 
    items: [
      'Generative AI', 
      'Claude API', 
      'Claude Code', 
      'Model Context Protocol (MCP)', 
      'Agentic Workflows', 
      'Prompt Engineering', 
      'Tool Calling', 
      'Human-in-the-Loop (HITL)', 
      'Structured Outputs'
    ] 
  },
  { 
    group: 'Backend & Engineering', 
    items: [
      'Python', 
      'FastAPI', 
      'Pydantic', 
      'Node.js', 
      'Express.js', 
      'TypeScript', 
      'Test-Driven Development (TDD)', 
      'REST APIs', 
      'Async Programming'
    ] 
  },
  { 
    group: 'Cloud & MLOps', 
    items: [
      'AWS (Lambda, CloudFront, S3, EC2, Cognito, VPC)', 
      'Docker', 
      'Kubernetes', 
      'Terraform', 
      'GitHub Actions', 
      'Jenkins', 
      'Playwright'
    ] 
  },
  { 
    group: 'Data, Security & Compliance', 
    items: [
      'PostgreSQL', 
      'DynamoDB', 
      'Decimal.js', 
      'Multi-Tenant Isolation', 
      'RBAC', 
      'Append-Only Audit Logging (HIPAA)'
    ] 
  },
  { 
    group: 'Frontend & Web Infrastructure', 
    items: [
      'React 18', 
      'Next.js 14', 
      'JavaScript (ES6+)', 
      'Tailwind CSS', 
      'Performance Optimization'
    ] 
  }
]

export const experience = [
  {
    company: 'Virtusa Consulting Services',
    role: 'Associate Engineering Manager / Senior AI Engineer',
    period: 'Mar 2026 – PRESENT',
    bullets: [
      'Architected AI-enabled enterprise workflow solutions for Commonwealth Bank of Australia using Python, Claude API, and tool-calling patterns.',
      'Designed Model Context Protocol (MCP) capability exposure patterns to allow AI workflows to securely interact with backend enterprise services.',
      'Implemented intent recognition, validation rules, and human-in-the-loop (HITL) approval gates prior to executing high-risk business actions.',
      'Reverse-engineered legacy Java Spring Boot systems to establish authoritative API contracts, cutting integration defects by 60% and eliminating 10+ sync meetings.'
    ]
  },
  {
    company: 'Wipro Technologies (Optum)',
    role: 'Project Lead / Senior AI & Cloud Engineer',
    period: 'Mar 2024 – Mar 2026',
    bullets: [
      'Engineered AI-assisted developer platform tools and LLM integration patterns (prompt design, tool use, JSON responses) across 200+ engineering teams.',
      'Reduced monthly AWS infrastructure operational costs by 30% (~$50K/month) through automated Terraform provisioning, tagging, and cost tracking.',
      'Optimized platform response times from 8.2s to 3.1s (62% performance boost) using lazy loading, React.memo, and API response batching.',
      'Migrated CI/CD pipelines from Jenkins to GitHub Actions with automated rollback controls, reducing build duration from 12 minutes to 4 minutes.'
    ]
  },
  {
    company: 'BCT Consulting (Eli Lilly)',
    role: 'Senior Software Engineer – Cloud & Backend',
    period: 'Jan 2023 – Jun 2023',
    bullets: [
      'Built AWS Lambda and Node.js serverless middleware utilities for dynamic single sign-on (SSO) routing supporting 500+ global research users.',
      'Engineered secure React.js applications integrated with AWS Amplify and Cognito for multi-environment MFA authentication flows.',
      'Configured automated deployment workflows using GitHub Actions and managed static content delivery via AWS S3 and CloudFront.'
    ]
  },
  {
    company: 'Prime Focus Technologies (BCCI)',
    role: 'Senior Full Stack Engineer',
    period: 'Sep 2021 – Oct 2022',
    bullets: [
      'Scaled high-throughput web streaming architectures for 50M+ fans and 10K+ concurrent users, maintaining 99.9% uptime during peak live events.',
      'Leveraged AWS CloudFront and Lambda@Edge edge computing to maintain sub-200ms latency metrics globally.',
      'Built SEO-optimized, responsive streaming interfaces using React, Next.js Server-Side Rendering (SSR), and Tailwind CSS.'
    ]
  },
  {
    company: 'Dell Technologies',
    role: 'Senior Systems Engineer',
    period: 'Jul 2016 – Feb 2021',
    bullets: [
      'Engineered internal storage analytics and monitoring web utilities for 10K+ internal users to visualize operational metrics.',
      'Collaborated with cross-functional system engineering teams to reduce MTTR for critical alerts from 2 hours to 30 minutes.'
    ]
  },
  {
    company: 'Accenture Services',
    role: 'Technical Consultant',
    period: 'Oct 2012 – Jul 2016',
    bullets: [
      'Managed technical presales and solution architecture for enterprise storage and cloud infrastructure clients.',
      'Delivered 20+ technical proposal blueprints addressing evolving enterprise system and business requirements.'
    ]
  }
]

export const projects = [
  {
    title: 'MediCard – AI-Native Health Insurance Platform',
    where: 'Flagship AI Engineering Showcase',
    desc: 'Engineered an AI-driven cashless hospitalization platform featuring real-time eligibility verification (<500ms) and automated pre-authorization with an 80% auto-approval rate in under 5 minutes.',
    highlights: [
      'Integrated custom MCP tool servers, Playwright UI automation, and Claude Code agent workflows with plugin manifests',
      'Achieved 100% pass rate across 133 TDD unit/integration tests with HIPAA-compliant append-only audit logging',
      'Zero floating-point calculation errors using Decimal.js across multi-tenant isolation scopes'
    ]
  },
  {
    title: 'AI-Powered Enterprise Workflow Assistant',
    where: 'Virtusa / Commonwealth Bank of Australia',
    desc: 'Built an LLM-assisted workflow engine enabling business users to configure complex enterprise tasks and SLA definitions via natural language prompts and structured form generation.',
    highlights: [
      'Enforced Pydantic and JSON schema validation boundaries to eliminate hallucinated tool calls',
      'Integrated Human-in-the-Loop (HITL) authorization gates for critical backend state changes'
    ]
  },
  {
    title: 'Optum AI-Enabled Engineering & Health Dashboards',
    where: 'Wipro Technologies',
    desc: 'Developed modular AI-integrated health dashboards and release portals used by 200+ engineering teams to monitor deployment health, SLAs, and cloud cost metrics.',
    highlights: [
      'Improved platform load times by 62% (8.2s to 3.1s) and LCP from 4.5s to 1.8s',
      'Automated Terraform provisioning resulting in $50K/month cloud cost reduction'
    ]
  },
  {
    title: 'High-Traffic Video Streaming Platform',
    where: 'Prime Focus Technologies (BCCI)',
    desc: 'Engineered web streaming platform components serving 50M+ fans and 10K+ concurrent users with 99.9% availability during major live match events.',
    highlights: [
      'Sub-200ms latency globally using Next.js SSR and AWS CloudFront / Lambda@Edge',
      'Built core discovery, authentication, and payment conversion workflows'
    ]
  }
]
