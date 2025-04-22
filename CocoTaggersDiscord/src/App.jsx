
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BadgePlus, MessageSquareText } from "lucide-react";

export default function CocoTaggersDiscord() {
  React.useEffect(() => {
    document.title = "CocoTaggersDiscord";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <header className="text-center py-12">
        <h1 className="text-5xl font-bold text-indigo-500">CocoTaggersDiscord</h1>
        <p className="mt-4 text-lg text-gray-300">Welcome to the Monkey revolution. Powered by Discord.</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="bg-gray-800 border-none">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Join Our Community</h2>
            <p className="text-gray-400 mb-4">
              Connect with other taggers, share your skills, and grow together.
            </p>
            <a
              href="https://discord.gg/axNnxbrK6F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
            >
              <BadgePlus className="mr-2 h-4 w-4" /> Join Discord
            </a>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-none">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Applab Page</h2>
            <p className="text-gray-400 mb-4">
              Download.
            </p>
            <a
              href="https://www.meta.com/experiences/coco-taggers/9291619340948093/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
            >
              <MessageSquareText className="mr-2 h-4 w-4" /> Get Coco Taggers today
            </a>
          </CardContent>
        </Card>
      </main>

      <footer className="text-center mt-12 text-gray-500">
        &copy; 2025 CocoTaggersDiscord. All rights reserved.
      </footer>
    </div>
  );
}
