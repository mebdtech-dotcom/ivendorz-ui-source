import Image from 'next/image';
import { type Project } from './types';
import { IvChip } from '@/components/iv/iv-chip';

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-xl font-bold text-foreground">
          Completed Projects
        </h2>

        {projects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col gap-3 rounded-lg border border-border bg-card overflow-hidden shadow-xs hover:shadow-sm transition-shadow"
              >
                <div className="relative h-48 w-full overflow-hidden bg-secondary">
                  <Image
                    src={project.image.url}
                    alt={project.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 px-4 pt-0 pb-4 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-foreground line-clamp-2 flex-1">
                      {project.title}
                    </h3>
                  </div>
                  <IvChip tone="info" variant="soft" className="w-fit">
                    {project.clientIndustry}
                  </IvChip>
                  <p className="text-sm text-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-border bg-secondary p-12 text-center">
            <p className="text-muted-foreground">No projects available.</p>
          </div>
        )}
      </div>
    </section>
  );
}
