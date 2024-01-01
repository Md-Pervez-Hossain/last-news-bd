import React from "react";
const SingleNewsPostDetails = ({ postDetails }) => {
  console.log(postDetails);
  return (
    <div>
      <h2 className="lg:text-[24px] text-[16px] mb-3 font-[600]">
        {postDetails?.data?.title}
      </h2>
      <div
        dangerouslySetInnerHTML={{
          __html: postDetails?.data?.content,
        }}
      />
    </div>
  );
};

export default SingleNewsPostDetails;
