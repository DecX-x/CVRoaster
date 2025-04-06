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
const language = 'english'


// Sample data for development
export const sampleRoastResult: CVRoastResult = {
  "overall": {
    "score": 42,
    "summary": "Let's be real, this CV is a mess. It's like you threw everything you knew into a blender and hit puree. You're an informatics undergraduate with a bunch of AI and ML projects, but your CV reads like a laundry list of buzzwords. Your professional summary is so generic it could be copy-pasted from a dozen other CVs. Your education section is unimpressive, and your university is not exactly renowned. Your projects are the only redeeming quality, but even then, the descriptions are too focused on what the projects do rather than the impact they made. Your skills section is a joke - listing 'Microsoft Office' as a skill is like saying you can breathe. The certifications are nice, but they're not exactly from prestigious institutions. Overall, this CV needs a complete overhaul to make it stand out."
  },
  "categories": [
    {
      "name": "Content Quality",
      "score": 50,
      "color": "#e67373",
      "feedback": [
        {
          "type": "negative",
          "text": "Your professional summary is too generic and doesn't highlight any unique strengths."
        },
        {
          "type": "negative",
          "text": "Project descriptions focus too much on what the projects do rather than their impact or achievements."
        },
        {
          "type": "warning",
          "text": "Your CV lacks specific numbers and metrics to demonstrate the effectiveness of your projects."
        }
      ]
    },
    {
      "name": "Formatting",
      "score": 70,
      "color": "#7ac97a",
      "feedback": [
        {
          "type": "positive",
          "text": "The CV is well-structured and easy to follow."
        },
        {
          "type": "warning",
          "text": "Some sections, like the skills section, are too long and could be formatted better."
        }
      ]
    },
    {
      "name": "ATS Compatibility",
      "score": 60,
      "color": "#6bb7d3",
      "feedback": [
        {
          "type": "warning",
          "text": "Your CV could be optimized further for ATS by including more relevant keywords from job descriptions."
        },
        {
          "type": "positive",
          "text": "The CV is generally well-formatted for ATS compatibility."
        }
      ]
    }
  ],
  "improvementTips": [
    {
      "title": "Quantify Your Achievements",
      "description": "Instead of just describing your projects, include specific numbers and metrics that demonstrate their impact.",
      "example": "Before: 'Built a chatbot using ReAct agent framework.' After: 'Developed a chatbot that handled 500+ user queries per day with a 95% accuracy rate.'"
    },
    {
      "title": "Tailor Your Summary",
      "description": "Customize your professional summary to highlight your unique strengths and experiences.",
      "example": "Before: 'I'm an informatics undergraduate with a passion for AI.' After: 'AI and ML engineer with experience in developing scalable chatbot solutions and a proven track record of improving user engagement.'"
    },
    {
      "title": "Prioritize Relevant Skills",
      "description": "Instead of listing every skill you know, focus on the ones that are most relevant to the job you're applying for.",
      "example": "Before: Listing 'Microsoft Office' as a skill. After: Highlighting expertise in 'Tensorflow', 'PyTorch', and 'Scikit-Learn' for a machine learning position."
    }
  ]
}

export default language