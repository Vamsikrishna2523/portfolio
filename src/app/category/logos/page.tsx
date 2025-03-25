import Image from "next/image";

export default function LogosPage() {
  // Sample logo projects
  const logos = [
    {
      id: 1,
      title: "Tech Startup",
      description: "Modern logo for software company",
      src: "/preperlyLogo.png",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-zinc-900/80 rounded-3xl p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Log&apos;s</h1>
        <p className="text-zinc-400">
          A collection of logo designs and brand identities for various clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="bg-zinc-900 rounded-3xl overflow-hidden group"
          >
            <div className="aspect-square relative bg-zinc-800 flex items-center justify-center">
              <Image
                src={
                  logo.src ||
                  `/placeholder.svg?height=300&width=300&text=Logo+${logo.id}`
                }
                alt={logo.title}
                width={200}
                height={200}
                className="object-contain transition-transform group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-medium">{logo.title}</h3>
              <p className="text-zinc-400 text-sm">{logo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
