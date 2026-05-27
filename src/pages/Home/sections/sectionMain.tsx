import SkateboardPhoto from "../../../assets/images/skateboard.png";
import { Container } from "../../../components/layout/container/Container";
import { ButtonLink } from "../../../components/ui/ButtonLink/ButtonLink";

export function SectionMain() {
  return (
    <section className="bg-black-700 w-full min-h-[80vh] pt-28">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <p className="text-5xl text-white font-bold md:text-6xl lg:text-8xl">
                  Skate
                </p>
                <span className="border-b-4 border-b-white w-[7rem] rounded-full"></span>
              </div>
              <p className="text-5xl text-white font-bold md:text-6xl lg:text-8xl">
                boarding
              </p>
            </div>

            <p className="text-base text-white w-full my-8 md:w-[20rem] lg:w-[30.688rem]">
              Descubra como é viver uma vida sobre as rodas e venha fazer parte
              dessa história ao lado dos melhores competidores do mundo.
            </p>

            <ButtonLink
              href="#"
              title="Descubra"
              variant="yellow"
              size="default"
            />
          </div>

          <img
            src={SkateboardPhoto}
            className="mt-8 md:h-[320px] lg:h-[400px] xl:h-[520px] md:mt-0"
            alt=""
          />
        </div>
      </Container>
    </section>
  );
}
