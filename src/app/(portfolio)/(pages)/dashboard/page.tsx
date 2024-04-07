import CollapseComponents from '@/components/custom/collapse-components';
import { HeadingText } from '@/components/custom/heading-text';
import BlankActivity from './_components/blank/blank';
import LongBlankActivity from './_components/blank/longBlank';

export const metadata = {
  title: 'Dashboard',
  description: 'Statistics about my activities',
};

export default function DashboardPage() {
  return (
    <>
      <CollapseComponents
        nameComponent={
          <HeadingText subtext='Statistics about my activities'>
            Dashboard
          </HeadingText>
        }
        contentComponent={
          <div className='flex grid-flow-dense flex-wrap gap-2'>
            <BlankActivity />
            <BlankActivity />
            <LongBlankActivity />
            <BlankActivity />
            <LongBlankActivity />
            <BlankActivity />
            <BlankActivity />
            <LongBlankActivity />
            <BlankActivity />
            <LongBlankActivity />
          </div>
        }
      />
    </>
  );
}
