"use client";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";

import Card from "@/components/my-components/Card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsLoggedIn(false);
    } else {
      try {
        const decodedToken = jwt.decode(token);
        if (decodedToken && decodedToken.userId) {
          setIsLoggedIn(true);
          setUserName(decodedToken.username || "Pengguna");
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Token decoding error:", error);
        setIsLoggedIn(false);
      }
    }
  }, []);

  const handleCreateNote = () => {
    if (isLoggedIn) {
      router.push("/notes/create");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex flex-col items-center gap-8 pt-20">
        <h1 className="text-center text-6xl font-bold text-white drop-shadow-md">
          Selamat Datang Di NotesApp
        </h1>

        {isLoggedIn && (
          <p className="text-white text-center text-lg">
            Hai, <span className="font-semibold">{userName}</span> 👋
          </p>
        )}

        <p className="text-white text-center text-lg max-w-xl">
          Kelola catatan kamu dengan mudah dan aman kapan saja
        </p>

        <Button
          variant="outline"
          size="lg"
          onClick={handleCreateNote}
          className="text-lg text-black bg-white hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 transition-all duration-200"
        >
          Buat Catatan Kamu Disini Ya
        </Button>
      </div>

      {/* Bagian Fitur */}
      <div className="mt-16 w-full py-12">
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center drop-shadow-lg">
          Fitur NotesApp
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
          <Card
            title="📝 Membuat Catatan"
            content="Kamu bisa membuat catatan."
            className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          />
          <Card
            title="📚 Melihat Semua Isi Catatan Kamu"
            content="Kamu bisa melihat isi catatanmu."
            className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          />
          <Card
            title=" ✏️ Mengedit Catatan"
            content="Kamu bisa mengedit catatanmu."
            className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}
