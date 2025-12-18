const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop',
  ];

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-4 block">GALLERY</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            GLIMPSES OF <span className="text-gradient">ACTION</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Check out highlights from our training sessions, events, and competitions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl aspect-video group cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
