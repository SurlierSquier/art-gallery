import Link from 'next/link';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

export const Footer = async () => {
    return (
        <footer className="bg-white py-6">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <Link href="https://www.instagram.com" aria-label="Instagram" className="text-gray-900 hover:text-gray-400 transition-colors">
                        <FaInstagram size={24} />
                    </Link>
                    <Link href="https://www.tiktok.com" aria-label="TikTok" className="text-gray-900 hover:text-gray-400 transition-colors">
                        <FaTiktok size={22} />
                    </Link>
                </div>
                <p className="text-gray-400">Powered by <Link href="https://pixelar.es" className="text-gray-900 hover:text-gray-400 transition-colors">Pixelar</Link></p>
            </div>
        </footer>
    )
}