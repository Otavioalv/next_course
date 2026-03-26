import { Section } from "@/src/components/section/Section";
import { APIYouTube } from "@/src/shared/services/api-youtube";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Codarse - Todos os cursos",
  };
  

export default async function PageCursos() {
    const courses = await APIYouTube.course.getAll();

    return (
        <main className="mt-8 flex justify-center">
            <div
                className="mx-auto max-w-[880px]"
            >
                 
                <Section
                    title="Todos os cursos"
                    variant="grid"
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
