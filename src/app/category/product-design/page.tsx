import Image from "next/image";

export default function ProductDesignPage() {
  // Sample product design projects
  const projects = [
    {
      id: 1,
      title: "Smart Home App",
      description: "UI/UX design for IoT control system",
      src: "/productDesign/ABHINAY-6.png",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Online shopping experience redesign",
      src: "/productDesign/tshirtPic.png",
    },
    {
      id: 3,
      title: "Banking Dashboard",
      description: "Financial management interface",
      src: "/productDesign/Untitled design-3.png",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-zinc-900/80 rounded-3xl p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Product Design</h1>
        <p className="text-zinc-400">
          A collection of digital product designs and user interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-zinc-900 rounded-3xl overflow-hidden group"
          >
            <div className="aspect-video relative">
              <Image
                src={
                  project.src ||
                  `/placeholder.svg?height=450&width=800&text=Product+${project.id}`
                }
                alt={project.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-medium">{project.title}</h3>
              <p className="text-zinc-400 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
