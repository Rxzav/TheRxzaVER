import { Authenticated, Unauthenticated } from "convex/react";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">The Rxzaver</h2>
          <Authenticated>
            <SignOutButton />
          </Authenticated>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Content />
      </main>

      <Toaster />
    </div>
  );
}

function Content() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        {/* LOGO IMAGE */}
        <img
          src="https://i.postimg.cc/56438mGR/logo.png"
          alt="The Rxzaver Logo"
          className="mx-auto w-48 h-48 rounded-full shadow-lg"
        />

        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-white mb-4">The Rxzaver</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join our thriving Discord community with over 2K+ members and 500K+ messages! Connect, chat, and have fun with fellow members since 2021.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-white">2K+</div>
            <div className="text-gray-300">Members</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-white">500K+</div>
            <div className="text-gray-300">Messages</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-white">2021</div>
            <div className="text-gray-300">Est. Year</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-white">Level 1</div>
            <div className="text-gray-300">Boost Level</div>
          </div>
        </div>

        {/* Join Button */}
        <a
          href="https://discord.gg/h4EcW8CB4s"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
          Join The Rxzaver Discord
        </a>
      </section>

      {/* Rules Section */}
      {/* Copy your rules section here as-is */}
      {/* About Section */}
      {/* Copy your about section here as-is */}
      {/* Auth Section */}
      {/* Copy your auth section here as-is */}
    </div>
  );
}
