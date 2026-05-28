import ImagePeopleWithSkateboard from "../../../assets/images/people-with-skateboard.png";
import { Container } from "../../../components/layout/container/Container";
import { ButtonLink } from "../../../components/ui/ButtonLink/ButtonLink";

export function SectionPlaylists() {
  return (
    <section className="bg-yellow-300 w-full mt-10">
      <Container>
        <div className="flex flex-col items-center justify-evenly gap-8 mb-8 lg:flex-row lg:justify-between">
          <img
            src={ImagePeopleWithSkateboard}
            className="h-[600px] mb-8 object-cover lg:mb-0"
            alt=""
          />

          <div className="flex flex-col gap-4">
            <h2 className="text-5xl font-bold">Playlists</h2>
            <div className="w-full">
              <p className="text-2xl font-semibold">
                Playlists selecionadas para acompanhar suas sessions, treinos e
                rolês no skate.
              </p>

              <p className="text-base mt-4">
                Uma seleção de músicas para entrar no ritmo do skate com batidas
                intensas e muita energia, tudo feito para quem vive o skate.
              </p>
            </div>

            <ButtonLink
              href="#"
              title="Explore"
              variant="solid"
              size="default"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
