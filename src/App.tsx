import { useRef } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useTranslation, Trans } from "react-i18next";
import { GridSection } from "./components/GridSection";
import { ProjectCarousel } from "./components/ProjectCarousel";
import { StacksCards } from "./components/StacksCards";
import { CareerCards } from "./components/CareerCards";
import { ThemeToggle } from "./components/ThemeToggle";
import { LanguageToggle } from "./components/LanguageToggle";
import { PortalTooltip } from "./components/PortalTooltip";
import { TypingStatus } from "./components/TypingStatus";
import { getProjects } from "./data/projects";
import profilePicture from "./assets/me.png";
import { GridCard } from "./components/GridCard";

function App() {
  const { t } = useTranslation();
  const projects = getProjects(t);
  const mostUsedRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen flex justify-center bg-light-bg dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors animated-background p-8 md:p-12 lg:p-24 xl:px-[10%] 2xl:px-[10%]">
      <LanguageToggle />
      <ThemeToggle />

      <PortalTooltip targetRef={mostUsedRef}>
        <span
          className="hidden sm:block font-light text-xl"
          style={{ fontFamily: "Handlee, cursive", letterSpacing: "0.05em" }}
        >
          {t("sections.mostUsed")}
        </span>
      </PortalTooltip>

      {/* Desktop: complex grid, Mobile: stacked */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:grid-cols-17 lg:gap-6 items-start content-center max-w-[1800px]">
        {/* Title Section */}
        <GridSection className="-mb-6 sm:mb-0 col-span-2 sm:col-start-1 sm:col-span-3 sm:row-start-1 sm:row-span-2 lg:col-start-1 lg:col-span-13 lg:row-start-1 lg:row-span-2">
          <div className="flex justify-start lg:justify-center items-center w-full h-full p-4 md:p-6 lg:p-8">
            <div className="flex flex-col justify-center items-start h-full gap-2">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-primary tracking-tight">
                {t("profile.name")}
              </h1>
              <div className="flex flex-col items-center gap-2 mt-0 md:mt-2 min-h-18">
                <span className="text-2xl md:text-4xl font-extralight">
                  <TypingStatus
                    verbs={
                      t("profile.taglines", { returnObjects: true }) as string[]
                    }
                    subject=""
                  />
                </span>
              </div>
            </div>
          </div>
        </GridSection>

        {/* Contact Section */}
        <GridSection className="col-span-2 justify-self-end sm:col-span-1 sm:col-start-4 sm:row-start-2 lg:col-start-14 lg:col-span-4 lg:row-start-2 lg:row-span-1">
          <GridCard title={t("sections.contact")} className="p-3 md:p-4 lg:p-5">
            <div className="flex justify-evenly gap-2 lg:justify-center items-center xl:justify-evenly h-full">
              <a
                href="mailto:clement.bussiere11@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 lg:p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={t("aria.email")}
              >
                <FiMail className="size-6 lg:size-8 2xl:size-10" />
              </a>
              <a
                href="https://www.linkedin.com/in/clement-bussiere"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 lg:p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={t("aria.linkedin")}
              >
                <FiLinkedin className="size-6 lg:size-8 2xl:size-10" />
              </a>
              <a
                href="https://www.github.com/BlueGrizzliBear"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 lg:p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={t("aria.github")}
              >
                <FiGithub className="size-6 lg:size-8 2xl:size-10" />
              </a>
            </div>
          </GridCard>
        </GridSection>

        {/* About Me Section */}
        <GridSection className="order-1 col-span-2 sm:order-2 sm:col-span-2 lg:order-none lg:col-start-1 lg:col-span-4 lg:pt-12">
          <GridCard title={t("sections.aboutMe")} className="w-full">
            <div className="flex flex-col items-start h-full gap-4">
              <p
                className="text-lg lg:text-xl leading-snug text-gray-600 dark:text-gray-400"
                style={{
                  fontFamily: "Handlee, cursive",
                  letterSpacing: "0.05em",
                }}
              >
                {t("profile.about.0")}
              </p>
              <p
                className="text-lg lg:text-xl leading-snug text-gray-600 dark:text-gray-400"
                style={{
                  fontFamily: "Handlee, cursive",
                  letterSpacing: "0.05em",
                }}
              >
                <Trans
                  i18nKey="profile.about.1"
                  components={[
                    <span className="text-primary font-normal" />,
                    <span className="text-primary font-normal" />,
                    <span className="text-primary font-normal" />,
                    <span className="text-primary font-normal" />,
                    <span className="text-primary font-normal" />,
                  ]}
                />
              </p>
              <p
                className="text-lg lg:text-xl leading-snug text-gray-600 dark:text-gray-400"
                style={{
                  fontFamily: "Handlee, cursive",
                  letterSpacing: "0.05em",
                }}
              >
                {t("profile.about.2")}
              </p>
            </div>
          </GridCard>

          {/* Status Section */}
          <div
            className={
              "mt-4 rounded-lg md:rounded-xl lg:rounded-2xl bg-gray-200/50 dark:bg-dark-surface backdrop-blur-sm overflow-hidden"
            }
          >
            <div className="relative w-full h-64 lg:h-80">
              <img
                src={profilePicture}
                alt={t("profile.name")}
                className="w-full h-full object-cover"
                style={{
                  filter: "saturate(0.4) contrast(1.1) brightness(0.9)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xl font-extralight text-white">
                    {t("status.discovering")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </GridSection>

        {/* Recent Projects Section */}
        <GridSection className="order-3 col-span-2 sm:order-3 sm:col-span-2 lg:order-none lg:col-span-5 lg:mt-26">
          <GridCard title={t("sections.recentProjects")} className="w-full">
            <ProjectCarousel projects={projects} />
          </GridCard>
        </GridSection>

        {/* Stacks Section - Combined (Most Used, Tech Stack, Tools) */}
        <GridSection className="order-1 col-span-2 sm:order-1 sm:col-span-2 sm:mt-24 lg:order-none lg:col-span-4">
          <StacksCards ref={mostUsedRef} />
        </GridSection>

        {/* Career Section - Combined (Current Work and Education) */}
        <GridSection className="order-4 col-span-2 sm:order-4 sm:col-span-2 lg:order-none lg:col-span-4">
          <CareerCards />
        </GridSection>
      </div>
    </div>
  );
}

export default App;
