interface CompanyInfoSectionProps {
  companyName: string;
  businessType: string;
  yearEstablished: number;
  employees: string;
  factorySize: string;
  certifications?: string;
  vat?: string;
  bin?: string;
  tin?: string;
  tradeLicense?: string;
}

export function CompanyInfoSection({
  companyName,
  businessType,
  yearEstablished,
  employees,
  factorySize,
  certifications,
  vat,
  bin,
  tin,
  tradeLicense,
}: CompanyInfoSectionProps) {
  const infoItems: Array<[string, string | undefined]> = [
    ['Company Name', companyName],
    ['Business Type', businessType],
    ['Year Established', yearEstablished.toString()],
    ['Employees', employees],
    ['Factory Size', factorySize],
    ['Certifications', certifications],
    ['VAT', vat],
    ['BIN', bin],
    ['TIN', tin],
    ['Trade License', tradeLicense],
  ];

  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-xl font-bold text-foreground">
          Company Information
        </h2>

        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <tbody>
              {infoItems.map(([label, value], idx) => (
                <tr
                  key={label}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-secondary'}
                >
                  <td className="border-r border-border px-4 py-3 text-sm font-medium text-muted-foreground w-1/3 md:w-1/4">
                    {label}
                  </td>
                  <td className="px-4 py-3 text-sm text-foreground">
                    {value || '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
