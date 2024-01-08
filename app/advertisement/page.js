import Advertisement from '@/components/Advertisement/Advertisement';
import React from 'react';
import { fetchAdsData, fetchAdsPackageData } from '../libs/fetchData';

const AdvertisementPage = async () => {

  const addPackage = await fetchAdsPackageData()
  const adsData = await fetchAdsData()
  return (
    <div>
      <Advertisement addPackage={addPackage} adsData={adsData} />
    </div>
  );
};

export default AdvertisementPage;