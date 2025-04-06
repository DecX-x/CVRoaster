export interface CVRoastResult {
  overall: {
    score: number
    summary: string
  }
  categories: {
    name: string
    score: number
    color: string
    feedback: {
      type: "positive" | "negative" | "warning"
      text: string
    }[]
  }[]
  improvementTips: {
    title: string
    description: string
    example: string
  }[]

}

// Sample data for development
export const sampleRoastResult: CVRoastResult = {
  overall: {
    score: 52,
    summary:
      "Your CV shows potential but needs improvement in several key areas. The formatting is good, but the content could be stronger with more quantifiable achievements. Your CV is somewhat compatible with ATS systems but could be optimized further.",
  },
  categories: [
    {
      name: "Content Quality",
      score: 65,
      color: "#e67373",
      feedback: [
        {
          type: "negative",
          text: "Your job descriptions focus too much on responsibilities rather than achievements.",
        },
        {
          type: "negative",
          text: "Lack of quantifiable results makes it difficult to assess your impact.",
        },
        {
          type: "positive",
          text: "Good use of action verbs throughout your experience section.",
        },
        {
          type: "warning",
          text: "Your summary is generic and could be more tailored to the specific roles you're targeting.",
        },
      ],
    },
    {
      name: "Formatting",
      score: 80,
      color: "#7ac97a",
      feedback: [
        {
          type: "positive",
          text: "Clean, consistent formatting throughout the document.",
        },
        {
          type: "positive",
          text: "Good use of white space makes your CV easy to scan.",
        },
        {
          type: "warning",
          text: "Font size could be increased slightly for better readability.",
        },
      ],
    },
    {
      name: "ATS Compatibility",
      score: 68,
      color: "#6bb7d3",
      feedback: [
        {
          type: "negative",
          text: "Missing key industry keywords that ATS systems look for.",
        },
        {
          type: "warning",
          text: "Section headers could be more standard for better ATS recognition.",
        },
        {
          type: "positive",
          text: "Simple formatting without tables or complex layouts is good for ATS.",
        },
      ],
    },
  ],
  improvementTips: [
    {
      title: "Quantify Your Achievements",
      description:
        "Instead of saying 'Managed a team', say 'Managed a team of 8 developers, increasing productivity by 35%'.",
      example:
        "Before: 'Managed social media accounts'\nAfter: 'Managed 5 social media accounts, increasing engagement by 45% and growing followers from 10K to 25K in 6 months'",
    },
    {
      title: "Tailor Your Summary",
      description:
        "Customize your professional summary for each job application to highlight relevant skills and experience.",
      example:
        "Before: 'Experienced software developer'\nAfter: 'Full-stack developer with 5 years of experience building scalable React applications and Node.js microservices'",
    },
    {
      title: "Add More Keywords",
      description:
        "Research job descriptions in your target roles and incorporate relevant keywords throughout your CV.",
      example:
        "Before: 'Worked on database projects'\nAfter: 'Designed and optimized SQL databases, implemented data warehousing solutions, and created ETL pipelines using PostgreSQL and AWS Redshift'",
    },
    {
      title: "Improve Section Headers",
      description:
        "Use standard section headers like 'Work Experience', 'Education', and 'Skills' for better ATS recognition.",
      example: "Before: 'Where I've Worked'\nAfter: 'Professional Experience'",
    },
    {
      title: "Focus on Impact",
      description: "For each role, emphasize the impact of your work rather than just listing responsibilities.",
      example:
        "Before: 'Responsible for marketing campaigns'\nAfter: 'Led 12 marketing campaigns that generated $1.2M in revenue and achieved a 24% conversion rate'",
    },
  ],

}

