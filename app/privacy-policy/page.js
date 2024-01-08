import PrivacyPolicy from '@/components/Page/PrivacyPolicy/PrivacyPolicy';
import React from 'react';
import { fetchAdsData } from '../libs/fetchData';

const PrivacyPolicyPage = async () => {

  const adsData = await fetchAdsData()
  return (
    <div>
      <PrivacyPolicy adsData={adsData} />
    </div>
  );
};

export default PrivacyPolicyPage;