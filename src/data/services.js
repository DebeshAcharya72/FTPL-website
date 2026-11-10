export const consultingData = {
  pageTitle: "Business and technology consulting",
  introduction: "Flasho Tech Consultancy Services (FTCS), the consulting wing of Flasho Tech Private Limited, helps startups and SMEs plan for growth and develop technology suited to their operations.",
  ftcsUrl: "https://www.ftcs.in/",
  sections: [
    {
      id: "business-consulting",
      title: "Business consulting",
      subtitle: "Plan your next stage of growth",
      introduction: "We help you assess a market, plan an expansion, or prepare material for an investor discussion.",
      ctaLabel: "Discuss a Business Project",
      ctaTo: "/contact?interest=business",
      interestKey: "business",
      services: [
        {
          name: "Market research",
          description: "Study customer needs, competitors, and market opportunities before entering a new segment."
        },
        {
          name: "Business growth planning",
          description: "Identify priority markets, customer groups, and routes to market."
        },
        {
          name: "Marketing strategy",
          description: "Define positioning, target audiences, channels, and campaign priorities."
        },
        {
          name: "Digital marketing",
          description: "Plan and run campaigns across search and social media, create promotional content, and track performance."
        },
        {
          name: "Marketplace listing support",
          description: "Get help setting up seller or business profiles and preparing product listings on Amazon, Flipkart, IndiaMART, and other relevant platforms."
        },
        {
          name: "Financial analysis and investor materials",
          description: "Review business assumptions and prepare business reports or investor presentations."
        }
      ]
    },
    {
      id: "technology-consulting",
      title: "Technology consulting",
      subtitle: "Build technology around your work",
      introduction: "We design software and digital systems around the tasks your customers and teams need to complete.",
      ctaLabel: "Discuss a Technology Project",
      ctaTo: "/contact?interest=technology",
      interestKey: "technology",
      services: [
        {
          name: "Website development",
          description: "Build corporate websites and portals around the information and actions visitors need."
        },
        {
          name: "Custom software",
          description: "Digitise workflows such as record management, approvals, and reporting."
        },
        {
          name: "AI and machine learning",
          description: "Explore applications such as document search, internal knowledge assistants, and workflow automation."
        },
        {
          name: "Data annotation",
          description: "Prepare and label data for machine learning projects."
        }
      ]
    },
    {
      id: "industrial-monitoring",
      title: "Industrial monitoring",
      subtitle: "Predictive maintenance and machine failure detection",
      introduction: "We work on predictive maintenance and machine failure detection for manufacturing operations. We assess the monitoring problem, available equipment data, and the information maintenance teams need to investigate changes in machine behaviour.",
      ctaLabel: "Discuss an Industrial Project",
      ctaTo: "/contact?interest=industrial",
      interestKey: "industrial",
      services: [
        {
          name: "Predictive maintenance assessment",
          description: "Evaluate equipment sensor streams, operational data, and failure histories."
        },
        {
          name: "Anomaly and failure detection models",
          description: "Deploy machine learning to identify early deviations in machine vibration, temperature, and performance."
        },
        {
          name: "Maintenance team action dashboards",
          description: "Equip maintenance and reliability teams with actionable alerts and diagnostic context to inspect equipment before catastrophic failure."
        }
      ]
    }
  ]
};
