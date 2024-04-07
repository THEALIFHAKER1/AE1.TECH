import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';

interface CollapseComponentsProps {
  nameComponent: React.ReactNode;
  contentComponent: React.ReactNode;
}
export default function CollapseComponents({
  nameComponent,
  contentComponent,
}: CollapseComponentsProps) {
  return (
    <Accordion type='single' collapsible defaultValue='item-1'>
      <AccordionItem value='item-1'>
        <AccordionTrigger className='whitespace-nowrap'>
          {nameComponent}
        </AccordionTrigger>
        <AccordionContent>{contentComponent}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
