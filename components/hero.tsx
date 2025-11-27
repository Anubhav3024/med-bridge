import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm">
            <span className="flex h-2 w-2 rounded-full bg-accent" />
            <span className="text-muted-foreground">Announcing our Series A funding</span>
            <ArrowRight className="h-3 w-3 text-muted-foreground" />
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The complete platform to streamline your workflow
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Empower your team to collaborate, automate, and ship faster. StreamLine brings all your tools together so
            you can focus on what matters most.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              Get started — it's free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              <Play className="mr-2 h-4 w-4" />
              Watch demo
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8">
          {[
            { stat: "20 days", label: "saved on daily tasks" },
            { stat: "98%", label: "faster time to market" },
            { stat: "300%", label: "increase in productivity" },
            { stat: "10k+", label: "teams worldwide" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl font-bold tracking-tight sm:text-3xl">{item.stat}</div>
              <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
