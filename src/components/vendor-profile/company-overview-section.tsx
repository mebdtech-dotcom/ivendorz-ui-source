interface CompanyOverviewSectionProps {
  aboutText: string;
  vision: string;
  strengths: string[];
}

export function CompanyOverviewSection({
  aboutText,
  vision,
  strengths,
}: CompanyOverviewSectionProps) {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* About Company */}
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-foreground">
            About Company
          </h2>
          <p className="whitespace-pre-wrap text-base leading-relaxed text-foreground">
            {aboutText}
          </p>
        </div>

        {/* Vision & Strengths row */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Vision */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-foreground">
              Our Vision
            </h3>
            <p className="whitespace-pre-wrap text-base leading-relaxed text-foreground">
              {vision}
            </p>
          </div>

          {/* Core Strengths */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-foreground">
              Core Strengths
            </h3>
            <ul className="space-y-3">
              {strengths.map((strength, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-base text-foreground">{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
