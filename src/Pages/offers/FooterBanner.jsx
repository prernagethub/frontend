import React from "react";

const FooterBanner = () => {
  const images = [
    "https://content.asos-media.com/-/media/homepages/ww/2025/june/ww-eu-brand-logos/row-mena-au/elf_v2.jpg",
    "https://content.asos-media.com/-/media/homepages/ww/2025/june/ww-eu-brand-logos/row-mena-au/abercrombie-desktop_v2.jpg",
    "https://content.asos-media.com/-/media/homepages/ww/2025/june/ww-eu-brand-logos/row-mena-au/mango_v5.jpg",
    "https://content.asos-media.com/-/media/homepages/ww/2025/june/ww-eu-brand-logos/row-mena-au/huda-beauty_v2.jpg",
    "https://content.asos-media.com/-/media/homepages/ww/2025/june/ww-eu-brand-logos/row-mena-au/new-balance_desktop_v2.jpg",
    "https://content.asos-media.com/-/media/homepages/ww/2025/june/ww-eu-brand-logos/row-mena-au/on-desktop.jpg",
  ];

  return (
    <div className="flex w-full h-[24vh] flex-wrap sm:h-[15vh] lg:h-[35vh] justify-center overflow-hidden">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Banner ${index + 1}`}
          className="w-[1/6] h-[50%] sm:h-[70%] lg:h-[75%] mt-10 sm:mt-12 lg:mt-20 object-contain"
        />
      ))}
    </div>
  );
};

export default FooterBanner;
