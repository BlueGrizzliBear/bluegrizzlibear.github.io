import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { Project } from "../types";
import clsx from "clsx";
import { GoArrowUpRight } from "react-icons/go";

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="">
      {/* Dots indicator at top */}
      <div className="flex gap-2 mb-4 justify-center mt-4">
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => goToProject(index)}
            className={clsx(
              "p-2 rounded-full transition-all hover:bg-gray-100 dark:hover:bg-gray-800",
              "flex items-center justify-center"
            )}
            aria-label={t("aria.goToProject", { number: index + 1 })}
          >
            <span
              className={clsx(
                "rounded-full transition-all",
                index === currentIndex
                  ? "w-6 h-2"
                  : "bg-gray-400 dark:bg-gray-600 w-2 h-2"
              )}
              style={
                index === currentIndex
                  ? { backgroundColor: project.baseColor }
                  : undefined
              }
            />
          </button>
        ))}
      </div>

      {/* Project image */}
      {currentProject.id === "aoc2025" ? (
        <div className="mb-4 rounded-lg overflow-hidden bg-[#0a0f24] dark:bg-[#0a0f24] flex flex-col items-center justify-center gap-6 p-8">
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
          />
          <h3
            className="text-2xl lg:text-3xl text-center"
            style={{
              fontFamily: '"Source Code Pro", monospace',
              color: "#00cc00",
            }}
          >
            {currentProject.title}
          </h3>
        </div>
      ) : (
        <img
          src={currentProject.image}
          alt={currentProject.title}
          className="w-full object-contain"
        />
      )}

      {/* Project info */}
      <p className="text-md lg:text-lg font-extralight text-gray-600 dark:text-gray-400 mt-3 mb-5 pr-8">
        {currentProject.description}
      </p>
      <div className="flex items-center justify-between">
        <h3
          className="text-lg lg:text-xl font-medium"
          style={{ color: currentProject.baseColor }}
        >
          {currentProject.title}
        </h3>
        {currentProject.liveLink && (
          <a
            href={currentProject.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-0 py-2 sm:px-4 sm:py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:opacity-90 transition-opacity flex items-center gap-2`}
          >
            {t("projects.liveLink")}
            <GoArrowUpRight className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}
