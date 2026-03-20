import { Section } from "@/src/components/section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Codarse - Todos os cursos",
  };
  

export default function PageCursos() {
    return (
        <main className="mt-8 flex justify-center">
            <div
                className="mx-auto max-w-[880px]"
            >
                {/* <Section
                    title="Todos os cursos"
                /> */}
            </div>
        </main>
    );
}
