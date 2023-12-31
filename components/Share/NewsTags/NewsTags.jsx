import React from "react";
const NewsTags = ({ show, setShow, tagData }) => {
  return (
    <div>
      <div className="flex items-center flex-wrap  gap-5  my-5">
        {tagData?.map((tag) => {
          return (
            <>
              <div key={tag.id}>
                <button
                  onClick={() => setShow(`${tag.title}`)}
                  className={
                    show === `${tag.title}`
                      ? "bg-secondary px-4 py-2 rounded-lg text-white "
                      : "bg-[#f5f5f5] px-4 py-2 rounded-lg "
                  }
                >
                  {tag?.title}
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default NewsTags;
