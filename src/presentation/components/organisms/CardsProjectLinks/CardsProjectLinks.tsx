"use client";
import { IconBrandNextjs, IconDeviceSim } from "@tabler/icons-react";
import BlogCard from "../../molecules/BlogCard";
import FileIconsNestjs from "../../atoms/icons/FileIconsNestjs";

import styles from "./styles.module.css";

interface SourceInterface {
  title: string;
  technologies: string[];
  description: string;
  repository: string;
  icon: React.ReactElement;
}

const sourceCode: SourceInterface[] = [
  {
    title: "Microcontroller",
    technologies: ["C++", "Esp32", "MQTT"],
    description:
      "Código fuente para manipular el hardware del proyecto IoT",
    repository: "https://github.com/WilferCiro/IoT_microcontroller",
    icon: <IconDeviceSim size={"2em"} />,
  },
  {
    title: "Front end",
    technologies: ["Nextjs v13", "Mantine", "React query"],
    description:
      "Backoffice creado para gestionar todos los datos de la aplicación, utiliza SSR",
    repository: "https://github.com/WilferCiro/IoT_frontEnd",
    icon: <IconBrandNextjs size={"2em"} />,
  },
  {
    title: "Back end backoffice",
    technologies: ["Nestjs", "Hexagonal", "Postgresql"],
    description:
      "Backend creado para la gestión de toda la información del backoffice",
    repository: "https://github.com/WilferCiro/IoT_backend",
    icon: <FileIconsNestjs fontSize={"2em"} />,
  },
];

const CardsProjectLinks = () => {
  return (
    <div id="source-code" className={styles.source_code}>
      {sourceCode.map((source: SourceInterface) => {
        return (
          <BlogCard
            title={source.title}
            link={source.repository}
            description={source.description}
            key={source.title}
            icon={source.icon}
            technologies={source.technologies}
          />
        );
      })}
    </div>
  );
};

export default CardsProjectLinks;
