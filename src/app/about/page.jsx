"use client";
import Image from "next/image";
export default function AboutMePage() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center px-6 py-20">
            <div className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl max-w-4xl w-full space-y-8">
                <h1 className="text-4xl font-extrabold text-center text-gray-900 tracking-wide">
                    Tentang Saya
                </h1>

                {/* Profil */}
                <section className="flex flex-col items-center text-center space-y-3">
                    <img
                        src="/Image/Profile.jpg" alt="" 
                        className="w-32 h-32 rounded-full shadow-lg object-cover ring-4 ring-indigo-400"
                    />
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Lintang Mutiara Edwi</h2>
                        <p className="text-indigo-700 font-medium">Mahasiswa Teknik Informatika</p>
                        <p className="text-gray-600 text-sm">
                            Universitas Dr. Soetomo Surabaya — <span className="italic">2023 - sekarang</span>
                        </p>
                    </div>
                </section>

                {/* Profil Singkat */}
                <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 border-b border-gray-300 pb-1">
                        Profil Singkat
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                        Saya adalah mahasiswa aktif jurusan Teknik Informatika yang memiliki ketertarikan tinggi
                        pada pengembangan web dan desain antarmuka (UI/UX). Saya senang mengeksplorasi teknologi frontend,
                        mengikuti pelatihan, dan aktif dalam organisasi kampus. Saya percaya bahwa teknologi dapat menjadi
                        solusi untuk berbagai masalah dan saya ingin menjadi bagian dari perubahan itu.
                    </p>
                </section>

                {/* Pendidikan */}
                <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 border-b border-gray-300 pb-1">
                        Pendidikan
                    </h3>
                    <ul className="text-gray-700 space-y-2">
                        <li>
                            🏫 <strong>SMA Negeri 1 Madiun</strong><br />
                            Jurusan MIPA — <span className="italic">2020 - 2023</span>
                        </li>
                        <li>
                            🎓 <strong>Universitas Dr. Soetomo Surabaya</strong><br />
                            S1 Teknik Informatika — <span className="italic">2023 - sekarang</span>
                        </li>
                    </ul>
                </section>

                {/* Skill */}
                <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 border-b border-gray-300 pb-1">
                        Skill & Tools
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 text-sm">
                        <span className="bg-indigo-100 px-3 py-1 rounded-lg">Public Speaking</span>
                        <span className="bg-indigo-100 px-3 py-1 rounded-lg">HTML & CSS</span>
                        <span className="bg-indigo-100 px-3 py-1 rounded-lg">Figma</span>
                    </div>
                </section>

                {/* Pengalaman Organisasi */}
                <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 border-b border-gray-300 pb-1">
                        Pengalaman Organisasi
                    </h3>
                    <ul className="text-gray-700 space-y-3">
                        <li>
                            🧩 <strong>Himpunan Mahasiswa Informatika</strong><br />
                            Anggota Divisi Pengembangan Sumber Daya Mahasiswa<br />
                            <span className="text-sm italic">2023 - sekarang</span>
                        </li>
                    </ul>
                </section>

                {/* Kontak */}
                <section>
                    <h3 className="text-xl font-semibold text-black mb-2 border-b border-gray-300 pb-1">
                        Kontak
                    </h3>
                    <ul className="space-y-1 text-black">
                        <li>📧 Email: <a href="mailto:mutiaralintang22@gmail.com" className="underline">mutiaralintang22@gmail.com</a></li>
                        <li>📱 Telepon: 0821-3907-5215</li>
                        <li>
                            <a href="https://instagram.com/araaedw" className="flex items-center space-x-2 underline" target="_blank" rel="noopener noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth={0}
                                    className="w-5 h-5"
                                >
                                    <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm4.75-.88a1.13 1.13 0 11-2.26 0 1.13 1.13 0 012.26 0zM12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
                                </svg>
                                <span>@araaedw</span>
                            </a>
                        </li>
                        <li>💻 GitHub: <a href="https://github.com/araedwi" className="underline">github.com/araedwi</a></li>
                    </ul>
                </section>

            </div>
        </div>
    );
}
