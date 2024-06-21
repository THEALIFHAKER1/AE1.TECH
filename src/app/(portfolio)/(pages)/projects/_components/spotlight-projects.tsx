"use client";
import { Icons } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { spotlightProjectsConfig } from "@/config/spotlight-projects";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

export default function SpotlightProjects() {
  return (
    <div className={`relative flex items-center justify-center`}>
      <Carousel
        className={`w-full`}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className={`-ml-1`}>
          {spotlightProjectsConfig.map((project, idx) => (
            <CarouselItem key={idx} className={`pl-1  md:basis-1/3`}>
              <div className={`p-1`}>
                <Card className={`h-60`}>
                  <CardContent
                    className=" flex h-full justify-end rounded-lg bg-foreground/20 bg-cover bg-center bg-no-repeat p-6 backdrop-blur-md"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <CarouselItem className="flex flex-col justify-end ">
                      <span className={`text-2xl font-bold text-white `}>
                        {project.projectName}
                      </span>
                      <span className={`text-1xl text-white`}>
                        {project.description}
                      </span>
                      <div className="my-5 flex space-x-2 md:mb-0">
                        <Link href={project.link} target="_blank">
                          <Button variant="outline" size={"icon"}>
                            <Icons.externalLink />
                          </Button>
                        </Link>
                        <Link href={project.repo} target="_blank">
                          <Button variant="outline" size={"icon"}>
                            <Icons.github />
                          </Button>
                        </Link>
                      </div>
                    </CarouselItem>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div
        className={`absolute inset-0 hidden w-1/3 bg-gradient-to-r from-background from-10% to-transparent  md:block`}
      />
      <div
        className={`absolute inset-0 left-auto hidden w-1/3  bg-gradient-to-l from-background from-10% to-transparent   md:flex`}
      />
    </div>
  );
}
