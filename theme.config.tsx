import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span>Prüfungsvorbereitung</span>,
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();

    const url = "https://pruefungsvorbereitung.aktamirov.de" + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
      <meta property="og:url" content={url}/> 
      <meta property="og:title" content={frontMatter.title || 'Pruefungsvorbereitung'}/>
      <meta property="og:description" content={frontMatter.description || "Thema"}/>
      </>
    );
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Prüfungsvorbereitung",
    };
  },
  project: {
    link: "https://github.com/z4roc/pruefungsvorbereitung",
  },
  chat: {
    link: "https://discord.gg/usS8XgVYnF",
  },
  docsRepositoryBase:
    "https://github.com/z4roc/pruefungsvorbereitung/tree/main",
  footer: {
    text: "Prüfungsvorbereitung",
  },
  i18n: [{ locale: "de", text: "Deutsch" }],
  search: {
    placeholder: "Themen oder Inhalte suchen...",
  },
  toc: {
    title: "Auf dieser Seite",
  },
  editLink: {
    text: "Diese Seite bearbeiten",
  },
  feedback: {
    content: "Fragen? Gib uns Feedback",
  },
};

export default config;
