import Image from "next/image";

export default function IllustrationsPage() {
  // Sample illustrations
  const illustrations = [
    {
      id: 1,
      title: "Abstract Shapes",
      description: "Digital illustration with geometric forms",
      src: "/artwork/Untitled_Artwork 6.png",
    },
    {
      id: 2,
      title: "Character Design",
      description: "Mascot creation for brand identity",
      src: "/artwork/Untitled_Artwork 7.png",
    },
    {
      id: 3,
      title: "Nature Scene",
      description: "Environmental concept art",
      src: "/artwork/Untitled_Artwork 8.png",
    },
    {
      id: 4,
      title: "Editorial",
      description: "Magazine illustration series",
      src: "/artwork/Untitled_Artwork 9.png",
    },
    {
      id: 5,
      title: "Icon Set",
      description: "Custom illustrated icon collection",
    },
    {
      id: 6,
      title: "Infographic",
      description: "Data visualization through illustration",
    },
    {
      id: 7,
      title: "Pattern Design",
      description: "Repeatable pattern for textiles",
    },
    {
      id: 8,
      title: "Portrait",
      description: "Digital painting of a person",
    },
    {
      id: 9,
      title: "Social Media",
      description: "Illustrated content for online platforms",
    },
    {
      id: 10,
      title: "T-Shirt Design",
      description: "Artwork for clothing merchandise",
    },
    {
      id: 11,
      title: "Web Illustration",
      description: "Custom graphics for websites",
    },
    {
      id: 12,
      title: "YouTube Thumbnail",
      description: "Visuals for video content",
    },
    {
      id: 13,
      title: "Zine Art",
      description: "Illustrations for self-published books",
    },
    {
      id: 14,
      title: "Book Cover",
      description: "Artwork for novels and publications",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-zinc-900/80 rounded-3xl p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Art & Illustrations
        </h1>
        <p className="text-zinc-400">
          A collection of digital illustrations and artwork for various
          projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {illustrations.map((illustration) => (
          <div
            key={illustration.id}
            className="bg-zinc-900 rounded-3xl overflow-hidden group"
          >
            <div className="aspect-square relative">
              <Image
                src={
                  `/artwork/Untitled_Artwork ${illustration.id + 6}.png` ||
                  `/artwork/Untitled_Artwork ${illustration.id + 6}.jpg` ||
                  `/placeholder.svg?height=500&width=500&text=Illustration+${illustration.id}`
                }
                alt={illustration.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-medium">{illustration.title}</h3>
              <p className="text-zinc-400 text-sm">
                {illustration.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
