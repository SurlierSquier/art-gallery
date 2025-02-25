import Image from 'next/image';

export const Paints = () => {
    const paints = [
        { title: 'Painting 1', artist: 'Artist 1', image: '/path/to/painting1.jpg' },
        { title: 'Painting 2', artist: 'Artist 2', image: '/path/to/painting2.jpg' },
        { title: 'Painting 3', artist: 'Artist 3', image: '/path/to/painting3.jpg' },
        // Add more paintings as needed
    ];

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Our Paintings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paints.map((paint, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <Image src={paint.image} alt={paint.title} width={500} height={300} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{paint.title}</h3>
                            <p className="text-gray-600">by {paint.artist}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}