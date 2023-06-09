import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Prüfungsvorbereitung</span>,
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
  docsRepositoryBase: "https://github.com/z4roc/pruefungsvorbereitung",
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
    component: () => <div></div>,
  },
  feedback: {
    content: "Fragen? Gib uns Feedback",
  },
};

export default config;
