export const Hero = () => {
    const title = 'Welcome to Artisan Gallery';
    const description = 'Discover a world of art and creativity. Explore our collection of paintings, sculptures, and exhibitions from talented artists around the globe.';

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-900 mb-4">{title}</h1>
                <p className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-900">{description}</p>
            </div>
        </section>
    )
}