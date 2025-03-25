import Image from "next/image";

export default function PostersPage() {
  // Sample poster projects
  const posters = [
    {
      id: 1,
      title: "Music Festival",
      description: "Promotional poster for annual music festival",
      src: "/hackathonPoster.png",
    },
    {
      id: 2,
      title: "Tech Conference",
      description: "Event poster for technology conference",
      src: "/codeNexusPoster.png",
    },
    {
      id: 3,
      title: "Art Exhibition",
      description: "Promotional material for contemporary art show",
      src: "/FreshersPoster.png",
    },
    {
      id: 4,
      title: "Film Festival",
      description: "Movie promotion poster series",
      src: "/ResearchOdysseyPoster.png",
    },
    {
      id: 5,
      title: "Product Launch",
      description: "New product announcement poster",
      src: "/BioFiestaPoster.png",
    },
    {
      id: 6,
      title: "Charity Event",
      description: "Fundraising event promotional material",
      src: "/DussehraPoster.png",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-zinc-900/80 rounded-3xl p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Posters</h1>
        <p className="text-zinc-400">
          A collection of poster designs for various clients and projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posters.map((poster) => (
          <div
            key={poster.id}
            className="bg-zinc-900 rounded-3xl overflow-hidden group"
          >
            <div className="aspect-[4/5] relative">
              <Image
                src={
                  poster.src ||
                  `/placeholder.svg?height=600&width=480&text=Poster+${poster.id}`
                }
                alt={poster.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-medium">{poster.title}</h3>
              <p className="text-zinc-400 text-sm">{poster.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
