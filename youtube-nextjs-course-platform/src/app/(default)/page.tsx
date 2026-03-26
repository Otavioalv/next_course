import { Metadata } from "next";
import { Section } from "../../components/section/Section";
import { KeepWatching } from "../../components/section/KeepWatching";
import { APIYouTube } from "@/src/shared/services/api-youtube";


export const metadata: Metadata = {
  title: "Codarse - Página inicial",
};


export default async function PageHome() {
  const courses = await APIYouTube.course.getAll();

  return (
    <main className="mt-8 flex justify-center">
      <div
          className="max-w-full min-[880px]:max-w-[880px] flex flex-col gap-4"
      >
        
        <KeepWatching/>

        <Section
            title="Todos os cursos"
            variant="h-list"
            items={
              courses.map(course => ({
                description: course.description,
                href: `/cursos/${course.id}`,
                image: course.image,
                title: course.title,
              }))
            }
        />
      </div>
    </main>
  );
}
