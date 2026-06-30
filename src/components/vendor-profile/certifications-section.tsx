import Image from 'next/image';
import { type Certification } from './types';

interface CertificationsSectionProps {
  certifications: Certification[];
}

export function CertificationsSection({
  certifications,
}: CertificationsSectionProps) {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-xl font-bold text-foreground">
          Certifications & Compliance
        </h2>

        {certifications.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-6 text-center shadow-xs"
              >
                {cert.logo && (
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <Image
                      src={cert.logo.url}
                      alt={cert.logo.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">
                    {cert.name}
                  </h3>
                  {cert.issuer && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {cert.issuer}
                    </p>
                  )}
                  {cert.issuedDate && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      Issued: {cert.issuedDate}
                    </p>
                  )}
                  {cert.expiryDate && (
                    <p className="text-xs text-muted-foreground">
                      Expires: {cert.expiryDate}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-border bg-secondary p-12 text-center">
            <p className="text-muted-foreground">No certifications available.</p>
          </div>
        )}
      </div>
    </section>
  );
}
