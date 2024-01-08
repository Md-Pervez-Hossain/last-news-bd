import TermsAndConditions from '@/components/Page/TermsAndConditions/TermsAndConditions';
import React from 'react';
import { fetchAdsData, fetchTermAndConditionData } from '../libs/fetchData';

const TermsAndConditionPage = async () => {
  const temsAndCondition = await fetchTermAndConditionData()

  const adsData = await fetchAdsData()
  return (
    <div>
      <TermsAndConditions adsData={adsData} temsAndCondition={temsAndCondition} />
    </div>
  );
};

export default TermsAndConditionPage;