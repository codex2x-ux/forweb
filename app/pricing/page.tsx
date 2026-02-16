    "use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Requestquote from "@/components/Requestquote";


export default function PricingPage() {
  const plans = [
    {
      title: "Basic Support",
      description: "For home users and small offices.",
      features: [
        "Remote troubleshooting",
        "Basic hardware repair",
        "Email support",
      ],
    },
    {
      title: "Business AMC",
      description: "For growing companies.",
      features: [
        "On-site support",
        "Network management",
        "Firewall configuration",
        "Priority response",
      ],
    },
    {
      title: "Enterprise",
      description: "Complete IT infrastructure management.",
      features: [
        "Dedicated IT consultant",
        "24/7 monitoring",
        "Security audits",
        "Custom infrastructure setup",
      ],
    },
  ];

  return (
    <main className="py-24 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-16">
        Pricing & Plans
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <Card key={i} className="rounded-xl shadow-sm">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold mb-2">
                {plan.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {plan.description}
              </p>

              <ul className="space-y-3 text-sm text-gray-700 mb-8">
                {plan.features.map((f, index) => (
                  <li key={index}>• {f}</li>
                ))}
              </ul>

              <Requestquote />


            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

