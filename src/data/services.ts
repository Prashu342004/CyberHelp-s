export interface Service {
  id: string;
  index: string;
  title: string;
  description: string;
  caseStudy: {
    problem: string;
    strategy: string;
    result: string;
  };
}

export const services: Service[] = [
  {
    id: "pen-testing",
    index: "01",
    title: "Penetration Testing",
    description: "Simulate real-world attacks to identify and remediate vulnerabilities before adversaries exploit them.",
    caseStudy: {
      problem: "A healthcare SaaS platform had never undergone external security testing despite handling PHI data.",
      strategy: "Conducted full-spectrum penetration testing across network, application, and API layers with red team exercises.",
      result: "Identified 47 critical vulnerabilities. All remediated within 60 days. Zero breaches since engagement.",
    },
  },
  {
    id: "vciso",
    index: "02",
    title: "Virtual CISO",
    description: "On-demand executive security leadership without the full-time overhead.",
    caseStudy: {
      problem: "A Series B fintech lacked security leadership and was losing enterprise deals due to compliance gaps.",
      strategy: "Deployed a vCISO to build security program, establish governance, and lead vendor assessments.",
      result: "Closed 3 enterprise contracts within 90 days. Security program maturity increased from Level 1 to Level 3.",
    },
  },
  {
    id: "soc-service",
    index: "03",
    title: "SOC as a Service",
    description: "24/7 security operations center monitoring with advanced threat detection and rapid incident response.",
    caseStudy: {
      problem: "A logistics company experienced a ransomware attack with no detection capabilities in place.",
      strategy: "Deployed managed SOC with SIEM integration, custom detection rules, and 15-minute response SLA.",
      result: "Detected and contained 12 potential incidents in first quarter. Mean time to respond reduced to 8 minutes.",
    },
  },
  {
    id: "consulting",
    index: "04",
    title: "Cyber Security Consulting",
    description: "Strategic advisory services to align security initiatives with business objectives.",
    caseStudy: {
      problem: "A manufacturing firm had no formal security strategy despite growing IoT infrastructure.",
      strategy: "Performed comprehensive risk assessment and developed a 3-year security roadmap with phased implementation.",
      result: "Reduced risk exposure by 72%. Board approved $2.4M security investment based on quantified risk analysis.",
    },
  },
  {
    id: "soc2",
    index: "05",
    title: "SOC 2 Compliance",
    description: "End-to-end SOC 2 readiness assessment, gap remediation, and audit preparation.",
    caseStudy: {
      problem: "A fintech startup failed SOC 2 readiness assessment, blocking enterprise sales pipeline.",
      strategy: "Implemented internal controls, continuous monitoring systems, and policy frameworks aligned to Trust Service Criteria.",
      result: "SOC 2 Type II certification achieved in 4 months. Unlocked $8M in enterprise pipeline.",
    },
  },
  {
    id: "zero-trust",
    index: "06",
    title: "Zero Trust Access",
    description: "Implement identity-first security architecture that verifies every access request.",
    caseStudy: {
      problem: "A remote-first tech company relied on VPN-only access, creating lateral movement risks.",
      strategy: "Designed and deployed zero trust network architecture with micro-segmentation and continuous authentication.",
      result: "Eliminated VPN dependency. Unauthorized access attempts dropped 94%. Employee satisfaction increased.",
    },
  },
  {
    id: "resilience",
    index: "07",
    title: "Cyber Resilience",
    description: "Build organizational capacity to anticipate, withstand, and recover from cyber incidents.",
    caseStudy: {
      problem: "A financial services firm had no incident response plan and a 72-hour recovery time objective.",
      strategy: "Developed comprehensive resilience framework including BCP, DRP, and tabletop exercises.",
      result: "Recovery time reduced from 72 hours to 4 hours. Successfully passed regulatory stress test.",
    },
  },
  {
    id: "iso27001",
    index: "08",
    title: "ISO 27001",
    description: "Establish and certify an information security management system to international standards.",
    caseStudy: {
      problem: "A European expansion required ISO 27001 certification for a US-based data analytics company.",
      strategy: "Built ISMS from scratch, conducted internal audits, and managed external certification body engagement.",
      result: "Certification achieved in 6 months. Enabled €12M European market entry.",
    },
  },
  {
    id: "glba",
    index: "09",
    title: "GLBA Compliance",
    description: "Ensure financial institution data protection meets Gramm-Leach-Bliley Act requirements.",
    caseStudy: {
      problem: "A community bank failed OCC examination for GLBA safeguards deficiencies.",
      strategy: "Redesigned information security program, implemented encryption standards, and trained staff on data handling.",
      result: "Passed subsequent OCC examination with no findings. Customer data breach risk reduced by 85%.",
    },
  },
  {
    id: "hipaa",
    index: "10",
    title: "HIPAA Compliance",
    description: "Protect patient health information with comprehensive technical and administrative safeguards.",
    caseStudy: {
      problem: "A telehealth platform received a HIPAA warning letter after a PHI exposure incident.",
      strategy: "Conducted risk analysis, implemented encryption, access controls, and BAA framework for all vendors.",
      result: "Achieved full HIPAA compliance. Zero incidents in 18 months post-engagement.",
    },
  },
  {
    id: "mdr",
    index: "11",
    title: "Managed Detection & Response",
    description: "Proactive threat hunting and automated response capabilities managed by expert analysts.",
    caseStudy: {
      problem: "An e-commerce platform experienced credential stuffing attacks with no detection mechanism.",
      strategy: "Deployed MDR with behavioral analytics, automated playbooks, and threat intelligence feeds.",
      result: "Blocked 2.3M malicious login attempts in first month. False positive rate reduced to 0.3%.",
    },
  },
  {
    id: "iam",
    index: "12",
    title: "Identity & Access Management",
    description: "Design and implement enterprise identity governance with least-privilege access models.",
    caseStudy: {
      problem: "A 2,000-employee enterprise had 340 orphaned accounts and no access certification process.",
      strategy: "Implemented IAM platform with automated provisioning, access reviews, and privileged access management.",
      result: "Eliminated all orphaned accounts. Access certification cycle reduced from 90 days to real-time.",
    },
  },
  {
    id: "family-office",
    index: "13",
    title: "Family Office Cybersecurity",
    description: "Tailored security solutions for high-net-worth families and private wealth management offices.",
    caseStudy: {
      problem: "A family office managing $500M in assets had no cybersecurity controls on personal devices.",
      strategy: "Deployed endpoint protection, secure communications, and executive digital protection program.",
      result: "Prevented 2 targeted phishing attacks. All family members onboarded to secure communication platform.",
    },
  },
];
