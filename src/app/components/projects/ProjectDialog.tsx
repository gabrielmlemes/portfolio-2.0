"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "../ui/dialog";
import { techIconsMap } from "@/utils/tech-icons";
import { CheckCircle2, Code2, GitBranch, Webhook, Shield, Zap, Layers } from "lucide-react";
import { Projects } from "@/types/projects";

interface ProjectDialogProps {
    project: Projects;
    trigger: React.ReactNode;
}

export function ProjectDialog({ project, trigger }: ProjectDialogProps) {
    const isDescriptionArray = Array.isArray(project.description);
    const descriptionArray: string[] | null = isDescriptionArray ? (project.description as string[]) : null;
    const descriptionString: string | null = !isDescriptionArray ? (project.description as string) : null;
    const isInkore = project.name.toLowerCase().includes("inkore");

    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>

            <DialogContent className="max-w-[90%] max-h-[90vh] sm:max-w-3xl px-8 pt-8 bg-gradient-to-br from-neutral-950 via-slate-900 to-neutral-950 border-neutral-800/50 flex flex-col">
                <DialogHeader className="space-y-4 pb-2 md:pb-6 border-b border-neutral-800/50 flex-shrink-0">
                    <div className="space-y-2">

                        <div className="flex items-center gap-2">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                                <DialogTitle className="text-2xl font-bold text-white leading-tight">
                                    {project.name}
                                </DialogTitle>
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                        </div>


                        <DialogDescription className="text-sm md:text-base text-neutral-400 leading-relaxed">
                        {isDescriptionArray ? (
                            <p>
                            Plataforma completa com diversas funcionalidades para gestão e agendamento.
                            </p>
                        ) : (
                            <p>{descriptionString}</p>
                        )}
                        </DialogDescription>
                    </div>
                </DialogHeader>

                <div className="flex-1 space-y-8 overflow-y-auto pr-4 py-6 scrollbar-thin scrollbar-thumb-blue-800/50 scrollbar-track-transparent hover:scrollbar-thumb-blue-700/60">
                {/* Funcionalidades */}
                {descriptionArray && (
                    <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                        <h3 className="text-lg font-semibold text-white tracking-tight">
                        Funcionalidades
                        </h3>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                    </div>
                    <ul className="space-y-3.5">
                        {descriptionArray.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-3.5 group">
                            <div className="mt-0.5 flex-shrink-0">
                            <CheckCircle2 className="size-4 md:size-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                            </div>
                            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">
                            {feature}
                            </p>
                        </li>
                        ))}
                    </ul>
                    </div>
                )}

                {/* Tecnologias */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                    <h3 className="text-lg font-semibold text-white tracking-tight">
                        Stack Tecnológico
                    </h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                    {project.technologies.map((tech, index) => {
                        const icon = techIconsMap[tech.icon.toLowerCase()];
                        return (
                        <div
                            key={index}
                            className="group relative flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-br from-blue-950/40 to-blue-900/30 backdrop-blur-sm text-blue-100 text-sm font-medium rounded-lg border border-blue-800/40 hover:border-blue-700/60 hover:from-blue-900/50 hover:to-blue-800/40 transition-all duration-200 cursor-default"
                        >
                            {icon && (
                            <div className="flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                                {icon}
                            </div>
                            )}
                            <span className="leading-none">{tech.name}</span>
                        </div>
                        );
                    })}
                    </div>
                </div>

                {/* Seção Técnica Avançada - Apenas para Inkore */}
                {isInkore && (
                    <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-2">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
                        <div className="flex items-center gap-2">
                        <Zap className="size-5 text-purple-400" />
                        <h3 className="text-lg font-semibold text-white tracking-tight">
                            Habilidades Técnicas
                        </h3>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* Arquitetura e Backend */}
                        <div className="group relative p-4 bg-gradient-to-br from-purple-950/30 via-purple-900/20 to-blue-950/30 rounded-lg border border-purple-800/30 hover:border-purple-700/50 transition-all duration-200">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-purple-900/40 rounded-lg group-hover:bg-purple-800/50 transition-colors">
                            <Layers className="size-5 text-purple-300" />
                            </div>
                            <div className="flex-1 space-y-1.5">
                            <h4 className="text-sm font-semibold text-white">Arquitetura & Backend</h4>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                                Route Handlers, Server Actions, APIs RESTful, separação de áreas públicas/privadas
                            </p>
                            </div>
                        </div>
                        </div>

                        {/* Webhooks e Integrações */}
                        <div className="group relative p-4 bg-gradient-to-br from-purple-950/30 via-purple-900/20 to-blue-950/30 rounded-lg border border-purple-800/30 hover:border-purple-700/50 transition-all duration-200">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-purple-900/40 rounded-lg group-hover:bg-purple-800/50 transition-colors">
                            <Webhook className="size-5 text-purple-300" />
                            </div>
                            <div className="flex-1 space-y-1.5">
                            <h4 className="text-sm font-semibold text-white">Webhooks & Mensageria</h4>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                                Integração Stripe via webhooks, sincronização assíncrona de assinaturas, processamento de eventos
                            </p>
                            </div>
                        </div>
                        </div>

                        {/* CI/CD e Qualidade */}
                        <div className="group relative p-4 bg-gradient-to-br from-purple-950/30 via-purple-900/20 to-blue-950/30 rounded-lg border border-purple-800/30 hover:border-purple-700/50 transition-all duration-200">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-purple-900/40 rounded-lg group-hover:bg-purple-800/50 transition-colors">
                            <GitBranch className="size-5 text-purple-300" />
                            </div>
                            <div className="flex-1 space-y-1.5">
                            <h4 className="text-sm font-semibold text-white">CI/CD & Qualidade</h4>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                                GitHub Actions, SonarCloud, Jest, React Testing Library, ESLint, Prettier
                            </p>
                            </div>
                        </div>
                        </div>

                        {/* Autenticação e Segurança */}
                        <div className="group relative p-4 bg-gradient-to-br from-purple-950/30 via-purple-900/20 to-blue-950/30 rounded-lg border border-purple-800/30 hover:border-purple-700/50 transition-all duration-200">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-purple-900/40 rounded-lg group-hover:bg-purple-800/50 transition-colors">
                            <Shield className="size-5 text-purple-300" />
                            </div>
                            <div className="flex-1 space-y-1.5">
                            <h4 className="text-sm font-semibold text-white">Auth & Segurança SaaS</h4>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                                Auth.js, controle de permissões por plano, trial de 7 dias, React Hook Form + Zod
                            </p>
                            </div>
                        </div>
                        </div>

                        {/* Performance e Frontend */}
                        <div className="group relative p-4 bg-gradient-to-br from-purple-950/30 via-purple-900/20 to-blue-950/30 rounded-lg border border-purple-800/30 hover:border-purple-700/50 transition-all duration-200">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-purple-900/40 rounded-lg group-hover:bg-purple-800/50 transition-colors">
                            <Zap className="size-5 text-purple-300" />
                            </div>
                            <div className="flex-1 space-y-1.5">
                            <h4 className="text-sm font-semibold text-white">Performance & Frontend</h4>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                                TanStack Query, sistema de componentes shadcn/ui, Radix UI, otimizações de renderização
                            </p>
                            </div>
                        </div>
                        </div>

                        {/* Padrões e Boas Práticas */}
                        <div className="group relative p-4 bg-gradient-to-br from-purple-950/30 via-purple-900/20 to-blue-950/30 rounded-lg border border-purple-800/30 hover:border-purple-700/50 transition-all duration-200">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-purple-900/40 rounded-lg group-hover:bg-purple-800/50 transition-colors">
                            <Code2 className="size-5 text-purple-300" />
                            </div>
                            <div className="flex-1 space-y-1.5">
                            <h4 className="text-sm font-semibold text-white">Padrões & Boas Práticas</h4>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                                Conventional Commits, organização de rotas, URLs amigáveis com slugs, SEO otimizado
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                )}
                </div>

                <DialogFooter className="!mx-0 !bg-transparent flex-col sm:flex-row gap-3 py-3 mt-auto border-t border-neutral-800/50 px-0">
                <Button 
                        asChild 
                        variant="default"
                        className="w-full sm:flex-1 order-1 sm:order-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-900/30 hover:shadow-blue-900/40 transition-all duration-200"
                    >
                        <Link 
                        href={project.deployedUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2.5 w-full"
                        >
                        <FaExternalLinkAlt className="size-4 flex-shrink-0" />
                        <span className="font-semibold">Visitar Projeto</span>
                        </Link>
                    </Button>

                    
                    {project.post && (
                        <Button
                            asChild
                            variant="default"
                            className="w-full sm:flex-1 order-2 bg-[#0A66C2] hover:bg-[#004182] text-white shadow-lg shadow-[#0A66C2]/30 hover:shadow-[#0A66C2]/40 transition-all duration-200"
                        >
                            <Link
                                href={project.post}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2.5 w-full"
                            >
                                <FaLinkedin className="size-4 flex-shrink-0" />
                                <span className="font-medium">Post</span>
                            </Link>
                        </Button>
                    )}

<Button 
                        asChild 
                        variant="outline"
                        className="w-full sm:flex-1 order-2 border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600 text-neutral-200 hover:text-white transition-all"
                    >
                        <Link 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2.5 w-full"
                        >
                        <FaGithub className="size-4 flex-shrink-0" />
                        <span className="font-medium">Código Fonte</span>
                        </Link>
                    </Button>
                    
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
