import type { AthleteCategory } from "../../../mocks/athletes/type";

interface AthleteProfileImageProps {
  image: string;
  name: string;
  category: AthleteCategory;
}

const categoryColors: Record<AthleteCategory, string> = {
  female: "#2ab7ca",
  male: "#ffc857",
  "new-talent": "#ef4444",
};

export function AthleteProfileImage({
  image,
  name,
  category,
}: AthleteProfileImageProps) {
  const color = categoryColors[category];

  return (
    <div className="relative mx-auto w-full max-w-md px-8 py-8">
      <div
        className="absolute right-0 top-0 h-20 w-20 lg:h-32 lg:w-32"
        style={{ backgroundColor: color }}
      />

      <div
        className="absolute bottom-0 left-0 h-20 w-20 lg:h-32 lg:w-32"
        style={{ backgroundColor: color }}
      />

      <div className="relative z-10 overflow-hidden rounded-sm">
        <img
          src={image}
          alt={`Foto de ${name}`}
          className="aspect-square w-full object-cover"
        />
      </div>
    </div>
  );
}
