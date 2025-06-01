"use client";
import Image from "next/image";

export default function AboutMePage() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center px-6 py-20">
            <div className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl max-w-4xl w-full space-y-8">

                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <h1 className="text-4xl font-bold text-gray-900">Hai! Saya Ara 👋</h1>
                    <p className="text-gray-700 max-w-xl">
                        Seorang mahasiswa Teknik Informatika yang senang ngulik teknologi, desain, dan membangun hal-hal yang bisa bermanfaat.
                        Saat ini aktif kuliah di Universitas Dr. Soetomo Surabaya sambil terus belajar dunia web dan UI/UX.
                    </p>
                </div>

                {/* Apa yang Saya Pelajari */}
                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">Yang Lagi Aku Dalami</h2>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-800">
                        <span className="bg-indigo-100 px-3 py-1 rounded-full">UI/UX Design</span>
                        <span className="bg-indigo-100 px-3 py-1 rounded-full">HTML & CSS</span>
                        <span className="bg-indigo-100 px-3 py-1 rounded-full">Figma</span>
                        <span className="bg-indigo-100 px-3 py-1 rounded-full">Public Speaking</span>
                    </div>
                </section>

                {/* Aktivitas & Organisasi */}
                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">Aktif di Kampus</h2>
                    <p className="text-gray-700 text-justify">
                        Saat ini aku tergabung di Himpunan Mahasiswa Informatika sebagai anggota Divisi PSDM (Pengembangan Sumber Daya Mahasiswa).
                        Lewat organisasi ini, aku belajar banyak tentang teamwork, komunikasi, dan manajemen acara.
                    </p>
                </section>

                {/* Pendidikan */}
                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">Perjalanan Pendidikan</h2>
                    <p className="text-gray-700">
                        🎓 Universitas Dr. Soetomo Surabaya – Teknik Informatika (2023 - sekarang)<br />
                        🏫 SMA Negeri 1 Madiun – MIPA (2020 - 2023)
                    </p>
                </section>

                {/* Kontak */}
                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">Yuk Terhubung!</h2>
                    <ul className="space-y-1 text-black">
                        <li>📧 <a href="mailto:mutiaralintang22@gmail.com" className="underline">mutiaralintang22@gmail.com</a></li>
                        <li>
                            💻 <a href="https://github.com/araedwi" target="_blank" rel="noopener noreferrer" className="underline">github.com/araedwi</a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
