import React from "react";

const FooterBanner = () => {
  return (
    <div className="flex w-full h-[24vh] sm:h-[35vh] lg:h-[40vh]">
      <img
        src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/6/24/dff9e0c5-2617-47bb-8153-f0331bd095301750776844057-Clearance-Sale-Desktop-KV_01.gif"
        alt="Banner 1"
        className="w-1/2 h-full object-fill"
      />
      <img
        src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/6/24/c4894bd7-e62d-461c-8d64-ec7910e0e4dc1750776844032-Clearance-Sale-Desktop-KV_02.gif"
        alt="Banner 2"
        className="w-1/2 h-full object-fill"
      />
    </div>
  );
};

export default FooterBanner;
