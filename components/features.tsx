import { Layers, Zap, Users, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built for speed. Our platform processes requests in milliseconds, keeping your team productive and efficient.",
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description:
      "Work together in real-time with your team. Share feedback, iterate faster, and ship features that matter.",
  },
  {
    icon: Layers,
    title: "Powerful Integrations",
    description: "Connect with 100+ tools your team already uses. From Slack to GitHub, we've got you covered.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your team's performance with beautiful dashboards and actionable metrics.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-t border-border bg-card px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Features</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to ship faster
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            StreamLine gives your team the tools to move fast without breaking things.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border bg-background p-6 transition-all hover:border-foreground/20 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                <feature.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
