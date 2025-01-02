import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import icon from '../../images/icon.png';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Kolom Pertama: Logo dan Deskripsi */}
                    <div>
                        <div className="flex items-center mb-4">
                            <img
                                src={icon}
                                alt="NaniKore Group"
                                className="w-12 h-12 mr-3 rounded-full"
                            />
                            <h2 className="text-2xl font-bold text-primary">NaniKore Group</h2>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Sekelompok remaja berbakat yang berdedikasi untuk
                            mengembangkan potensi diri dan berinovasi dalam bidang teknologi.
                        </p>
                    </div>

                    {/* Kolom Kedua: Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Navigasi Cepat</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#home"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                >
                                    Beranda
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                >
                                    Tentang Kami
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#members"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                >
                                    Anggota
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#hopes"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                >
                                    Harapan
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Kolom Ketiga: Pencapaian atau Statistik */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Pencapaian Kami</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-800 p-4 rounded-lg text-center">
                                <h4 className="text-2xl font-bold text-primary">5</h4>
                                <p className="text-gray-400 text-sm">Anggota Aktif</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg text-center">
                                <h4 className="text-2xl font-bold text-primary">2024</h4>
                                <p className="text-gray-400 text-sm">Tahun Dibentuk</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg text-center">
                                <h4 className="text-2xl font-bold text-primary">3+</h4>
                                <p className="text-gray-400 text-sm">Proyek Bersama</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg text-center">
                                <h4 className="text-2xl font-bold text-primary">∞</h4>
                                <p className="text-gray-400 text-sm">Mimpi & Harapan</p>
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-6 justify-center">
                            <a
                                href="https://github.com/AnakTentara"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                <FaGithub className="w-6 h-6" />
                            </a>
                            <a
                                href="https://instagram.com/haikal_mabrur"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                <FaInstagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} NaniKore Group. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}