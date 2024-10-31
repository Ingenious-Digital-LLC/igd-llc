import { healthcare } from './healthcare';
import { fintech } from './fintech';
import { retail } from './retail';
import { manufacturing } from './manufacturing';
import { logistics } from './logistics';
import { education } from './education';
import { hospitality } from './hospitality';
import { energy } from './energy';
import { realestate } from './realestate';
import { nonprofit } from './nonprofit';
import { automotive } from './automotive';
import { ecommerce } from './ecommerce';

// Combine all case studies
export const allCaseStudies = [
  healthcare,
  fintech,
  retail,
  manufacturing,
  logistics,
  education,
  hospitality,
  energy,
  realestate,
  nonprofit,
  automotive,
  ecommerce
];

// Group case studies by industry
export const caseStudiesByIndustry = allCaseStudies.reduce((acc, study) => {
  if (!acc[study.industry]) {
    acc[study.industry] = [];
  }
  acc[study.industry].push(study);
  return acc;
}, {} as Record<string, typeof allCaseStudies>);

export {
  healthcare,
  fintech,
  retail,
  manufacturing,
  logistics,
  education,
  hospitality,
  energy,
  realestate,
  nonprofit,
  automotive,
  ecommerce
};