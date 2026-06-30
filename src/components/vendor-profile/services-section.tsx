import { type Service } from './types';

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-xl font-bold text-foreground">
          Our Services
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-6 text-center shadow-xs hover:shadow-sm transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                {service.icon}
              </div>
              <h3 className="font-semibold text-foreground">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
