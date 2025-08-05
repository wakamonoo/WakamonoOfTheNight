"use client";
import Projects from "@/components/projects";
import MinorProjects from "@/components/minorProjects";

export default function Portfolio() {
  return (
    <>
      <h1 className="text-3xl sm:text-5xl md:text-6xl mb-4 text-header md:mb-8 lg:mb-12 xl:mb-16">
        RECON MISSIONS ────
      </h1>

      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl p-2 bg-brand rounded text-header mb-4">
            TACTICAL CAMPAIGNS
          </h2>
        <p className="text-normal text-base sm:text-xl md:text-2xl font-normal leading-4.5 sm:leading-6 md:leading-8 lg:leading-8.5 mb-4 md:mb-8">Full-scale deployments carried out by the Survey Corps. These are high-impact missions whocasing planning, execution, and survival in hostile environments.</p>
        <div className="grid grid-cols-1 xl-plus:grid-cols-2 gap-4">
          <Projects />
        </div>
      </div>

      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl p-2 bg-brand rounded text-header mb-4 mt-16">
            ODM FIELD TEST
          </h2>
        <p className="text-normal text-base sm:text-xl md:text-2xl font-normal leading-4.5 sm:leading-6 md:leading-8 lg:leading-8.5 mb-4 md:mb-8">Rapid deployments and field experiments, small but vital discoveries made beyond the walls. Often dangerous, always curious.</p>
        <div className="grid grid-cols-1 xl-plus:grid-cols-2 gap-4">
          <MinorProjects />
        </div>
      </div>
    </>
  );
}
