import { CheckCircle, FileText, Zap, TrendingUp } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <FileText className="h-10 w-10 text-[#e67373]" />,
      title: "Comprehensive Analysis",
      description: "Our AI analyzes every aspect of your CV, from formatting to content, providing detailed feedback.",
    },
    {
      icon: <Zap className="h-10 w-10 text-[#7ac97a]" />,
      title: "Instant Feedback",
      description: "Get results in seconds, not days. No waiting for human reviewers to get back to you.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-[#6bb7d3]" />,
      title: "Actionable Suggestions",
      description:
        "Receive specific, implementable suggestions to improve your CV and increase your chances of getting hired.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-[#e67373]" />,
      title: "Industry Insights",
      description: "Get feedback tailored to your industry's standards and expectations from recruiters.",
    },
  ]

  return (
    <section id="features" className="py-16 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">How AI CV Roaster Helps You</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#1e1e1e] p-6 rounded-lg shadow-md border border-[#333333]">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#f5f5f5]">{feature.title}</h3>
              <p className="text-[#a0a0a0]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

