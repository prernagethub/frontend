import React from "react";

const Banner = () => {
  const images = [
    {
      src: "https://content.asos-media.com/-/media/homepages/ww/2025/june/30-apac-mena-row/ww/the-inkey-list--row-fb-alt-to-huda.jpg",
      text: "The Inkey List",
    },
    {
      src: "https://content.asos-media.com/-/media/homepages/ww/2025/june/30-apac-mena-row/ww/148603284---ww-row-alt-mango.jpg",
      text: "Mango Deals",
    },
    {
      src: "https://content.asos-media.com/-/media/homepages/ww/2025/june/30-apac-mena-row/ww/ww-mena-cat-tray-870-x-1110-_-2-summer.jpg",
      text: "Summer Picks",
    },
    {
      src: "https://content.asos-media.com/-/media/homepages/ww/2025/june/30-apac-mena-row/ww/141910218-ww-adidas-cat-tray.jpg",
      text: "Adidas Style",
    },
    {
      src: "https://content.asos-media.com/-/media/homepages/ww/2025/june/30-apac-mena-row/ww/ww-mena-cat-tray-870-x-1110-_-5.jpg",
      text: "Fresh Looks",
    },
  ];

  return (
    <section className="w-full px-4">
      <div className="text-center py-8">
        <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider">
          The Biggest Labels
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {images.map((item, index) => (
          <div
            key={index}
            className="relative h-98 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group"
          >
            <img
              src={item.src}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">
                {item.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
