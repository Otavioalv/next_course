import { Metadata } from "next";
import { Card } from "../components/card/Card";
import { Section } from "../components/section/Section";


export const metadata: Metadata = {
  title: "Codarse - Página inicial",
};


export default function PageHome() {
  return (
    <main className="mt-8 flex justify-center">
      <div
          className="mx-auto max-w-[880px]"
      >
          <Section
              title="Todos os cursos"
              variant="grid"
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
