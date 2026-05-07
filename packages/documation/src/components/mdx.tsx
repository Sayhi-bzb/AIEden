import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Callout } from './callout';
import { Card, Cards } from './card';
import { Step, Steps } from './steps';
import { Tab, Tabs } from './tabs';
import { TypeTable } from './type-table';

const installedMdxComponents = {
  Callout,
  Card,
  Cards,
  Step,
  Steps,
  Tab,
  Tabs,
  TypeTable,
};

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...installedMdxComponents,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
