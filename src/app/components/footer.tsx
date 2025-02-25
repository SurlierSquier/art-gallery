import Link from 'next/link';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

export const Footer = async () => {
    return (
        <footer className="bg-white py-6">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <Link href="https://www.instagram.com/pixelar.es/" aria-label="Instagram" target= "_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-400 transition-colors">
                        <FaInstagram size={24} />
                    </Link>
                    <Link href="https://www.tiktok.com/@pixelar.es?_t=ZM-8uDOej0PEgx&_r=1" aria-label="TikTok" target= "_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-400 transition-colors">
                        <FaTiktok size={22} />
                    </Link>
                </div>
                <p className="text-gray-400">Powered by <Link href="https://pixelar.es" target= "_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-400 transition-colors">Pixelar</Link></p>
            </div>
        </footer>
    )
}