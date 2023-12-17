import React from "react";
const ShowContent = ({ show, setShow }) => {
  return (
    <div className="flex items-center justify-between  gap-5 flex-wrap text-white">
      <button
        onClick={() => setShow("home")}
        className={
          show === "home"
            ? "border-b-[4px]  border-b-secondary text-secondary font-[600] "
            : " py-5  "
        }
      >
        Home
      </button>
      <button
        onClick={() => setShow("politics")}
        className={
          show === "politics"
            ? "border-b-[4px]  border-b-secondary text-secondary font-[600] "
            : "  py-5  "
        }
      >
        Politics
      </button>
      <button
        onClick={() => setShow("crime")}
        className={
          show === "crime"
            ? "border-b-[4px]  border-b-secondary text-secondary font-[600] "
            : "  py-5  "
        }
      >
        Crime
      </button>
      <button
        onClick={() => setShow("world")}
        className={
          show === "world"
            ? "border-b-[4px]  border-b-secondary text-secondary font-[600] "
            : "  py-5  "
        }
      >
        World
      </button>
      <button
        onClick={() => setShow("business")}
        className={
          show === "business"
            ? "border-b-[4px]  border-b-secondary text-secondary font-[600] "
            : "  py-5  "
        }
      >
        Business
      </button>
      <button
        onClick={() => setShow("views")}
        className={
          show === "views"
            ? "border-b-[4px]  border-b-secondary text-secondary font-[600] "
            : "  py-5  "
        }
      >
        Views
      </button>

      <button
        onClick={() => setShow("game")}
        className={
          show === "game"
            ? "border-b-[4px]  border-b-secondary text-secondary font-[600] "
            : "  py-5  "
        }
      >
        Game
      </button>
      <button
        onClick={() => setShow("entertainment")}
        className={
          show === "entertainment"
            ? "border-b-[4px]  border-b-secondary text-secondary font-[600] "
            : "  py-5  "
        }
      >
        Entertainment
      </button>
      <button
        onClick={() => setShow("jobs")}
        className={
          show === "jobs"
            ? "border-b-[4px]  border-b-secondary text-secondary font-[600] "
            : "  py-5  "
        }
      >
        Jobs
      </button>
      <button
        onClick={() => setShow("lifestyle")}
        className={
          show === "lifestyle"
            ? "border-b-[4px]  border-b-secondary text-secondary font-[600] "
            : "  py-5  "
        }
      >
        Lifestyle
      </button>
      <button
        onClick={() => setShow("technology")}
        className={
          show === "technology"
            ? "border-b-[4px]  border-b-secondary text-secondary font-[600] "
            : "  py-5  "
        }
      >
        Technology
      </button>
      <button
        onClick={() => setShow("education")}
        className={
          show === "education"
            ? "border-b-[4px]  border-b-secondary text-secondary font-[600] "
            : "  py-5  "
        }
      >
        Education
      </button>
      <button
        onClick={() => setShow("special_news")}
        className={
          show === "special_news"
            ? "border-b-[4px]  border-b-secondary text-secondary font-[600] "
            : "  py-5  "
        }
      >
        Special News
      </button>

    </div>
  );
};

export default ShowContent;
