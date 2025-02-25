import Link from 'next/link';

export const Header = async () => {
    return (
        <header className="bg-white shadow-sm py-4">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <Link href="/" className="flex items-center mb-4 md:mb-0">
                    <span className="text-3xl mr-2">🖼️</span>
                    <span className="text-2xl font-serif font-medium text-gray-800">Art Gallery</span>
                </Link>
                
                <nav aria-label="Main Navigation">
                    <ul className="flex flex-wrap justify-center space-x-2 md:space-x-8">
                        <li><Link href="/" className="px-2 py-1 text-gray-600 hover:text-black transition-colors">Home</Link></li>
                        <li><Link href="/gallery" className="px-2 py-1 text-gray-600 hover:text-black transition-colors">Gallery</Link></li>
                        <li><Link href="/artists" className="px-2 py-1 text-gray-600 hover:text-black transition-colors">Artists</Link></li>
                        <li><Link href="/exhibitions" className="px-2 py-1 text-gray-600 hover:text-black transition-colors">Exhibitions</Link></li>
                        <li><Link href="/about" className="px-2 py-1 text-gray-600 hover:text-black transition-colors">About</Link></li>
                        <li><Link href="/contact" className="px-2 py-1 text-gray-600 hover:text-black transition-colors">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}