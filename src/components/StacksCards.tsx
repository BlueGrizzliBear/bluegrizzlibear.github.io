import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";
import {
  techStackGroups,
  mostUsedTechStackGroups,
  toolStackGroups,
} from "../data/techStack";
import { GridCard } from "./GridCard";

export const StacksCards = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className="flex flex-wrap gap-4">
      {/* Most Used Card */}
      <GridCard
        className="w-full"
        ref={ref}
        title={<span className="lg:hidden">{t("sections.mostUsed")}</span>}
      >
        <div className="flex flex-wrap gap-1 xl:gap-3 items-center justify-center">
          {mostUsedTechStackGroups.map((tech) => {
            const iconSrc =
              theme === "dark" && tech.iconUrlDark
                ? tech.iconUrlDark
                : tech.iconUrl;

            return (
              <div
                key={tech.name}
                className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all group"
                title={tech.name}
              >
                {iconSrc ? (
                  <img
                    src={iconSrc}
                    alt={tech.name}
                    className="size-8 lg:size-6 xl:size-9 4xl:size-12 transition-transform group-hover:scale-110"
                  />
                ) : (
                  tech.Icon && (
                    <tech.Icon
                      className="size-8 lg:size-6 xl:size-9 4xl:size-12 transition-transform group-hover:scale-110"
                      style={{
                        color: tech.color,
                      }}
                    />
                  )
                )}
              </div>
            );
          })}
        </div>
      </GridCard>

      {/* Tech Stack Card */}
      <GridCard title={t("sections.techStack")} className="w-full">
        <div className="flex flex-wrap gap-3 items-center justify-center">
          {techStackGroups.map((tech) => {
            const iconSrc =
              theme === "dark" && tech.iconUrlDark
                ? tech.iconUrlDark
                : tech.iconUrl;
            return (
              <div
                key={tech.name}
                className="flex gap-3 items-center justify-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all group"
                title={tech.name}
              >
                {iconSrc ? (
                  <img
                    src={iconSrc}
                    alt={tech.name}
                    className="size-8 lg:size-6 xl:size-9 4xl:size-12 transition-transform group-hover:scale-110"
                  />
                ) : (
                  tech.Icon && (
                    <tech.Icon
                      className="size-8 lg:size-6 xl:size-9 4xl:size-12 transition-transform group-hover:scale-110"
                      style={{
                        color: tech.color,
                      }}
                    />
                  )
                )}
              </div>
            );
          })}
        </div>
      </GridCard>

      {/* Tool Stack Card */}
      <GridCard title={t("sections.toolStack")} className="w-full">
        <div className="flex flex-wrap gap-3 items-center justify-center">
          {toolStackGroups.map((tech) => {
            const iconSrc =
              theme === "dark" && tech.iconUrlDark
                ? tech.iconUrlDark
                : tech.iconUrl;

            return (
              <div
                key={tech.name}
                className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all group"
                title={tech.name}
              >
                {iconSrc ? (
                  <img
                    src={iconSrc}
                    alt={tech.name}
                    className="size-8 lg:size-6 xl:size-9 4xl:size-12 transition-transform group-hover:scale-110"
                  />
                ) : (
                  tech.Icon && (
                    <tech.Icon
                      className="size-8 lg:size-6 xl:size-9 4xl:size-12 transition-transform group-hover:scale-110"
                      style={{
                        color: tech.color,
                      }}
                    />
                  )
                )}
              </div>
            );
          })}
        </div>
      </GridCard>
    </div>
  );
});
