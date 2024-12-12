import Image from 'next/image';
import Link from 'next/link';
import {
  Circle,
  Target,
  ImageIcon,
  Github,
  Twitter,
  Linkedin,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF5F0]">
      {/* Header */}
      <header className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="font-bold">anon.chat</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link href="#about" className="hover:underline">
            About
          </Link>
          <Link href="#what-i-do" className="hover:underline">
            Safety
          </Link>
          <Link href="#my-work" className="hover:underline">
            Blog
          </Link>
        </nav>
        <div className="px-6 py-2 bg-[#809CFF] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold">
          Contact Us
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl">Hi, this is anonchat.</p>
            <h1 className="text-6xl font-black leading-tight">
              Create Fun, Share Laughs, Stay Anonymous!
            </h1>
            <p className="text-lg max-w-md">
              Have fun, spill secrets, and share laughs—AnonChat is your space
              to message friends anonymously. Let the guessing games begin!
            </p>
            <button className="px-8 py-4 bg-[#FFD233] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
              Download App
            </button>
          </div>
          <div className="relative">
            <div className="aspect-square relative border-2 border-black bg-[#FF5C8D] overflow-hidden">
              <Image
                src="/cool-kid-2.jpg"
                alt="Profile"
                width={600}
                height={600}
                className="object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-[#2AB7A9] text-white px-4 py-1 rounded-full border-2 border-black text-sm">
                ✓ chat with me
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#2AB7A9] border-2 border-black rounded-lg rotate-12" />
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#FF5C8D] border-2 border-black rounded-full" />
          </div>
        </div>

        {/* Services Section */}
        <section className="py-32 space-y-12">
          <div className="text-center space-y-4">
            <p className="text-lg">Create fun with friends</p>
            <h2 className="text-4xl font-bold">Here&apos;s what we offer</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ImageIcon className="w-12 h-12" />,
                title: 'Anonymous Messaging',
                description:
                  'Send messages without revealing your identity. It&apos;s all about the fun of guessing and keeping the conversation lighthearted!',
                color: 'bg-[#809CFF]',
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: 'Fun Challenges',
                description:
                  'Add a twist to your chats with quirky questions, fun dares, and creative prompts to make every message a thrill.',
                color: 'bg-[#2AB7A9]',
              },
              {
                icon: <Circle className="w-12 h-12" />,
                title: 'Private Friend Groups',
                description:
                  'Create your own circle of friends where you can anonymously chat, share laughs, and build memories together.',
                color: 'bg-[#FF5C8D]',
              },
            ].map((service) => (
              <div
                key={`${service.color}`}
                className="p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div
                  className={`w-16 h-16 ${service.color} border-2 border-black rounded-lg flex items-center justify-center mb-4`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-[#FFD233] border-t-2 border-black mt-12">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="font-bold">anon.chat</span>
            </div>
            <nav className="flex gap-8">
              <Link href="#about" className="hover:underline">
                About
              </Link>
              <Link href="#what-i-do" className="hover:underline">
                safety
              </Link>
              <Link href="#my-work" className="hover:underline">
                blog
              </Link>
            </nav>
            <div className="flex gap-4">
              <Link
                href="#"
                className="p-2 bg-white border-2 border-black rounded-full hover:bg-[#809CFF] transition-colors"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-white border-2 border-black rounded-full hover:bg-[#809CFF] transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-white border-2 border-black rounded-full hover:bg-[#809CFF] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 anonchat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
