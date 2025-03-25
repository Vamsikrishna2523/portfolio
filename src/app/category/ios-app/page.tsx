import Image from "next/image";

export default function IosAppPage() {
  // Sample iOS app screenshots
  const screenshots = [
    {
      id: 1,
      title: "Login Screen",
      description: "User authentication interface",
      src: "/iosApp/Log In.png",
    },
    {
      id: 2,
      title: "Dashboard",
      description: "Main app interface with statistics",
      src: "/iosApp/Dashboard-1.png",
    },
    {
      id: 3,
      title: "Restaurant List",
      description: "Browse available restaurants",
      src: "/iosApp/Restaurant Search.png",
    },
    {
      id: 4,
      title: "Menu View",
      description: "Restaurant menu browsing interface",
      src: "/iosApp/menuPic.png",
    },
    {
      id: 5,
      title: "Order Process",
      description: "Food ordering workflow",
      src: "/iosApp/Ongoing Order-1.png",
    },
    {
      id: 6,
      title: "User Profile",
      description: "Account management screen",
      src: "/iosApp/Profile.png",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-zinc-900/80 rounded-3xl p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">iOS Mobile App</h1>
        <p className="text-zinc-400">
          Preperly! - A restaurant management application for iOS devices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {screenshots.map((screenshot) => (
          <div
            key={screenshot.id}
            className="bg-zinc-900 rounded-3xl overflow-hidden group"
          >
            <div className="aspect-[9/16] relative">
              <Image
                src={
                  screenshot.src ||
                  `/placeholder.svg?height=640&width=360&text=iOS+Screen+${screenshot.id}`
                }
                alt={screenshot.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-medium">{screenshot.title}</h3>
              <p className="text-zinc-400 text-sm">{screenshot.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
