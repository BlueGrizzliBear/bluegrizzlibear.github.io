import { useTranslation } from "react-i18next";
import { GoArrowUpRight } from "react-icons/go";
import { GridCard } from "./GridCard";
import kiliLogo from "../assets/kili-logo.png";
import kiliName from "../assets/kili-name.svg";
import logo42 from "../assets/42-logo.svg";

export const CareerCards = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-4">
      {/* Current Work Card */}
      <GridCard
        title={t("sections.currentWork")}
        className="p-4 md:p-6 lg:p-8 w-full"
      >
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-xl lg:text-2xl font-extralight text-gray-600 dark:text-gray-400">
            {t("profile.jobTitle")}
          </p>
          <div className="flex items-center gap-4 lg:gap-6">
            <img
              src={kiliLogo}
              alt="Kili Technology Logo"
              className="h-10 lg:h-16 object-contain"
            />
            <img
              src={kiliName}
              alt="Kili Technology"
              className="h-8 lg:h-10 object-contain dark:invert"
            />
          </div>
          <p className="text-center text-md lg:text-lg font-extralight text-gray-600 dark:text-gray-400">
            {t("work.description")}
          </p>
          <a
            href="https://www.kili-technology.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-[rgb(255,130,0)] text-white hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            {t("work.haveALook")}
            <GoArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </GridCard>
      {/* Education Card */}
      <GridCard
        title={t("sections.education")}
        className="p-4 md:p-6 lg:p-8 w-full"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex gap-4 justify-center items-center">
            <h3
              className="text-2xl lg:text-3xl font-medium text-gray-900 dark:text-white"
              style={{ fontFamily: "var(--font-family-futura)" }}
            >
              {t("education.school")}
            </h3>
            <img
              src={logo42}
              alt={t("education.school")}
              className="h-12 lg:h-16 object-contain dark:invert"
            />
          </div>
        </div>
      </GridCard>
    </div>
  );
};
