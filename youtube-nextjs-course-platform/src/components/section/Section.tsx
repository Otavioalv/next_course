import { Card, ICardProps } from "../card/Card";


interface ISectionProps {
    title: string;
    items: ICardProps[];
    variant: 'grid' | 'h-list';
}

export const Section = ({title, items, variant="grid"}: ISectionProps) => {
    return (
        <section
            className="flex flex-col gap-4 px-4"
        >
            <h2 
                className="text-xl font-bold mb-4"
            >
                {title}
            </h2>

            <ul 
                data-variant={variant}
                className="grid grid-cols-1 gap-4 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto"
            >
                {items.map((item) => (
                    <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72" key={item.title}>
                        <Card
                            description={item.description}
                            href={item.href}
                            image={item.image}
                            title={item.title}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};
