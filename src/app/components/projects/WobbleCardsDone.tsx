"use client";

import React from "react";
import Image from "next/image";
import { WobbleCard } from "./WobbleCards";
import FswProject from "/public/projects/fswbarber.jpg";
import Inkore from "/public/projects/inkore.jpg";
import { Button } from "../ui/button";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { ProjectsList } from "@/constants/projects-list";
import { ProjectDialogSkeleton } from '../ui/ProjectDialogSkeleton'; // Import the skeleton component

const ProjectDialog = dynamic<React.ComponentProps<typeof import('./ProjectDialog').ProjectDialog>>(
  () => import('./ProjectDialog').then(mod => mod.ProjectDialog),
  {
    loading: () => <ProjectDialogSkeleton />,
    ssr: false,
  }
);

export function WobbleCardDone() {
  const inkoreProject = ProjectsList.find(p => p.name.toLowerCase().includes("inkore"));
  const fswBarberProject = ProjectsList.find(p => p.name.toLowerCase().includes("fsw barber"));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      {/* Card 1 */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-900 min-h-[500px] lg:min-h-[300px]"
      >
        <div className="max-w-sm -mt-5 lg:px-8">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-neutral-200">
            SaaS para agendamentos de estúdios de tatuagem
          </h2>
          <p className="my-4 lg:max-w-[22rem] text-left text-base/6 text-neutral-100">
            Inkore é uma plataforma SaaS (Software as a Service) robusta e
            intuitiva, desenvolvida para revolucionar a gestão de agendamentos
            em estúdios de tatuagem.
          </p>

          <div className="flex items-center gap-3 z-50 absolute">
            {inkoreProject && (
              <ProjectDialog
                project={inkoreProject}
                trigger={
                  <Button size="default" variant="default">
                    <span className="flex items-center gap-1.5">
                      <FaCode className="size-3.5" /> Saiba mais
                    </span>
                  </Button>
                }
              />
            )}
            
            <Button asChild size="default" variant="default">
              <Link href="https://www.inkorestudio.com.br/" target="_blank" rel="noopener noreferrer">                
                <span className="flex items-center gap-1.5">
                  <FaExternalLinkAlt className="size-3"/> Visitar
                </span>
              </Link>
            </Button>
          </div>
        </div>
        
        <Image
          src={Inkore}
          width={500}
          height={500}
          alt="Imagem do projet Inkore"
          className="absolute -right-4 lg:-right-[10%] -bottom-1 object-contain rounded-tl-xl rounded-tr-xl md:max-w-[36rem] md:w-full lg:max-w-[22rem] xl:max-w-[32rem]"
        />      
      </WobbleCard>
      
      {/* Card 2 */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-blue-800 text-center">
        <h2 className="w-full text-center mx-auto max-w-[26rem] text-balance text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Expertise Fullstack: Construindo o Futuro Digital.
        </h2>
        <p className="mt-4 w-full mx-auto max-w-[26rem] text-center  text-base/6 text-neutral-200">
          Transformo ideias complexas em soluções digitais robustas e intuitivas. Com foco em inovação e performance, crio sistemas escaláveis que geram valor real e elevam a experiência do usuário.
        </p>
      </WobbleCard>

        {/* Card 3 */}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-700 min-h-[500px] lg:min-h-[600px] xl:min-h-[500px]">
        <div className="max-w-xs lg:max-w-xl -mt-5 lg:px-12 lg:py-10">
          <h2 className=" sm:text-left text-balance text-xl lg:text-5xl font-semibold tracking-[-0.015em] text-neutral-200">
            SaaS - Plataforma para barbearias
          </h2>

          <p className="my-4 text-left text-base/6 text-neutral-100 lg:text-xl">
             Uma plataforma intuitiva, moderna e totalmente responsiva para agendar e gerenciar serviços de barbearias com facilidade!
          </p>

          <div className="flex items-center gap-3 z-50 absolute">
            {fswBarberProject && (
                <ProjectDialog
                    project={fswBarberProject}
                    trigger={
                        <Button size="default" variant="default">
                            <span className="flex items-center gap-1.5">
                                <FaCode className="size-3.5" /> Saiba mais
                            </span>
                        </Button>
                    }
                />
            )}
            
            <Button asChild size="default" variant="default">
                <Link href="https://fsw-barber-kohl.vercel.app" target="_blank" rel="noopener noreferrer">                
                    <span className="flex items-center gap-1.5">
                      <FaExternalLinkAlt className="size-3"/> Visitar
                    </span>
                </Link>
            </Button>
          </div>
        </div>
        
        <Image
          src={FswProject}
          width={490}
          height={500}
          alt="Imagem do projeto FSW Barber"
          className="absolute -right-4 lg:-right-3 -bottom-4 lg:-bottom-1 object-contain rounded-tl-xl rounded-tr-xl lg:rounded-tr-none lg:w-full lg:max-w-[36rem]"
        />
      </WobbleCard>

    </div>
  );
}
