import TermsAndConditions from '@/components/Page/TermsAndConditions/TermsAndConditions';
import React from 'react';
import { fetchTermAndConditionData } from '../libs/fetchData';

const TermsAndConditionPage = async () => {
  const temsAndCondition = await fetchTermAndConditionData()
  return (
    <div>
      <TermsAndConditions temsAndCondition={temsAndCondition} />
    </div>
  );
};

export default TermsAndConditionPage;