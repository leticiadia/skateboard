import {
  EntityCard,
  type EntityCardColor,
} from "../../../components/layout/EntityCard/EntityCard";
import type { Athlete } from "../../../mocks/athletes/type";

interface AthleteCategorySectionProps {
  title: string;
  athletes: Athlete[];
  color: EntityCardColor;
}

export function AthleteCategorySection({
  title,
  athletes,
  color,
}: AthleteCategorySectionProps) {
  return (
    <section>
      <h3 className="mb-6 text-3xl font-bold">{title}</h3>

      <div
        className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-4"
      >
        {athletes.map((athlete) => (
          <EntityCard
            key={athlete.id}
            href={`/athletes/${athlete.slug}`}
            name={athlete.name}
            image={athlete.image}
            color={color}
          />
        ))}
      </div>
    </section>
  );
}
