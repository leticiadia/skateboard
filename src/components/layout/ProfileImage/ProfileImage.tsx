interface ProfileImageProps {
  image: string;
  altText: string;
  accentColor: string;
}

export function ProfileImage({
  image,
  altText,
  accentColor,
}: ProfileImageProps) {
  return (
    <div className="relative mx-auto w-full max-w-md px-8 py-8">
      <div
        className="absolute right-0 top-0 h-20 w-20 lg:h-32 lg:w-32"
        style={{ backgroundColor: accentColor }}
      />

      <div
        className="absolute bottom-0 left-0 h-20 w-20 lg:h-32 lg:w-32"
        style={{ backgroundColor: accentColor }}
      />

      <div className="relative z-10 overflow-hidden rounded-sm">
        <img
          src={image}
          alt={altText}
          className="aspect-square w-full object-cover"
        />
      </div>
    </div>
  );
}
