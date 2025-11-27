import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "StreamLine has completely transformed how our team collaborates. We've cut our project delivery time in half.",
    author: "Sarah Chen",
    role: "Engineering Lead",
    company: "TechFlow",
    avatar: "/professional-woman-headshot.png",
  },
  {
    quote: "The integrations are seamless. We connected all our tools in minutes and haven't looked back since.",
    author: "Marcus Johnson",
    role: "Product Manager",
    company: "ScaleUp",
    avatar: "/professional-man-headshot.png",
  },
  {
    quote: "Finally, a platform that understands what modern teams need. The analytics alone have been game-changing.",
    author: "Emily Rodriguez",
    role: "CEO",
    company: "Innovate Labs",
    avatar: "/testimonial-person-3.png",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Testimonials</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Loved by teams worldwide</h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="relative rounded-2xl border border-border bg-card p-8">
              <Quote className="mb-4 h-8 w-8 text-muted-foreground/30" />
              <blockquote className="text-pretty text-foreground">"{testimonial.quote}"</blockquote>
              <div className="mt-6 flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                  <AvatarFallback>
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
