import Image from 'next/image';

export const Artists = () => {
    const artists = [
        { name: 'Artist 1', bio: 'Bio of artist 1', image: '/path/to/image1.jpg' },
        { name: 'Artist 2', bio: 'Bio of artist 2', image: '/path/to/image2.jpg' },
        { name: 'Artist 3', bio: 'Bio of artist 3', image: '/path/to/image3.jpg' },
        // Add more artists as needed
    ];

    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Our Artists</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {artists.map((artist, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <Image src={artist.image} alt={artist.name} width={500} height={300} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{artist.name}</h3>
                            <p className="text-gray-600">{artist.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}