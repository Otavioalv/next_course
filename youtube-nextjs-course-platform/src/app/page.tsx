import { Metadata } from "next";
import { Card } from "../components/card/Card";
import { Section } from "../components/section/Section";
import { KeepWatching } from "../components/section/KeepWatching";


export const metadata: Metadata = {
  title: "Codarse - Página inicial",
};


export default function PageHome() {
  return (
    <main className="mt-8 flex justify-center">
      <div
          className="max-w-full min-[880px]:max-w-[880px] flex flex-col gap-4"
      >
        
        <KeepWatching/>

        <Section
            title="Todos os cursos"
            variant="h-list"
            items={[
              {
                description: "Aprenda a programar do zero com o curso de HTML e CSS, onde você vai criar seu primeiro site e entender os fundamentos da web.",
                href: "https://www.youtube.com/watch?v=UB1O30fR-EE&t=1s",
                image: "https://img.youtube.com/vi/UB1O30fR-EE/hqdefault.jpg",
                title: "Curso de HTML e CSS"
              },
              {
                description: "Aprenda a programar do zero com o curso de HTML e CSS, onde você vai criar seu primeiro site e entender os fundamentos da web.",
                href: "https://www.youtube.com/watch?v=UB1O30fR-EE&t=1s",
                image: "https://img.youtube.com/vi/UB1O30fR-EE/hqdefault.jpg",
                title: "Curso de HTML e CSS"
              },
              {
                description: "Aprenda a programar do zero com o curso de HTML e CSS, onde você vai criar seu primeiro site e entender os fundamentos da web.",
                href: "https://www.youtube.com/watch?v=UB1O30fR-EE&t=1s",
                image: "https://img.youtube.com/vi/UB1O30fR-EE/hqdefault.jpg",
                title: "Curso de HTML e CSS"
              },
              {
                description: "Aprenda a programar do zero com o curso de HTML e CSS, onde você vai criar seu primeiro site e entender os fundamentos da web.",
                href: "https://www.youtube.com/watch?v=UB1O30fR-EE&t=1s",
                image: "https://img.youtube.com/vi/UB1O30fR-EE/hqdefault.jpg",
                title: "Curso de HTML e CSS"
              },
              {
                description: "Aprenda a programar do zero com o curso de HTML e CSS, onde você vai criar seu primeiro site e entender os fundamentos da web.",
                href: "https://www.youtube.com/watch?v=UB1O30fR-EE&t=1s",
                image: "https://img.youtube.com/vi/UB1O30fR-EE/hqdefault.jpg",
                title: "Curso de HTML e CSS"
              },
              {
                description: "Aprenda a programar do zero com o curso de HTML e CSS, onde você vai criar seu primeiro site e entender os fundamentos da web.",
                href: "https://www.youtube.com/watch?v=UB1O30fR-EE&t=1s",
                image: "https://img.youtube.com/vi/UB1O30fR-EE/hqdefault.jpg",
                title: "Curso de HTML e CSS"
              },
              {
                description: "Aprenda a programar do zero com o curso de HTML e CSS, onde você vai criar seu primeiro site e entender os fundamentos da web.",
                href: "https://www.youtube.com/watch?v=UB1O30fR-EE&t=1s",
                image: "https://img.youtube.com/vi/UB1O30fR-EE/hqdefault.jpg",
                title: "Curso de HTML e CSS"
              },
              {
                description: "Aprenda a programar do zero com o curso de HTML e CSS, onde você vai criar seu primeiro site e entender os fundamentos da web.",
                href: "https://www.youtube.com/watch?v=UB1O30fR-EE&t=1s",
                image: "https://img.youtube.com/vi/UB1O30fR-EE/hqdefault.jpg",
                title: "Curso de HTML e CSS"
              },
              
            ]}
        />
      </div>
    </main>
  );
}
