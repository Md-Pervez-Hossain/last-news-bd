"use client";
import React, { useState, useEffect } from "react";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";

const HomeBanner = ({ adsData }) => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [imageVisible, setImageVisible] = useState(true);
  const [filteredAds, setFilteredAds] = useState([]);

  useEffect(() => {
    const filtered = adsData?.data?.filter(
      (ads) => ads?.ad_placement === "headerTop"
    );
    setFilteredAds(filtered || []);
    setCurrentAdIndex(0);
  }, [adsData]);

  useEffect(() => {
    if (filteredAds.length > 0) {
      const interval = setInterval(() => {
        setCurrentAdIndex((prevIndex) => (prevIndex + 1) % filteredAds.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [filteredAds]);

  const handleCloseClick = () => {
    setImageVisible(false);
  };
  return (
    <div>
      {imageVisible && (
        <div className="relative">
          {filteredAds.length > 0 ? (
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              {filteredAds.map((ad, index) => (
                <img
                  key={index}
                  src={ad.ads_img}
                  alt={`img-${index}`}
                  style={{
                    objectFit: "contain",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: index === currentAdIndex ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                    zIndex: index === currentAdIndex ? 1 : 0,
                  }}
                  className="group-hover:scale-105"
                />
              ))}
            </div>
          ) : (
            <NoDataFound />
          )}
          <span
            className="bg-white  shadow-lg absolute top-0 right-0 rounded-full cursor-pointer"
            onClick={handleCloseClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M1 13L13 1M1 1L13 13"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      )}
    </div>
  );
};

export default HomeBanner;
