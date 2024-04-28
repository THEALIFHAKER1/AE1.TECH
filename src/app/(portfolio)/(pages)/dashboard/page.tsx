import CollapseComponents from '@/components/custom/collapse-components';
import { HeadingText } from '@/components/custom/heading-text';
import TwoGrid from './_components/grid/two-grid';
import Time from './_components/time/time';
import SingleGrid from './_components/grid/single-grid';
import Birthday from './_components/birthday/birthday';
import Discord from './_components/discord/discord';
import Duolingo from './_components/duolingo/duolingo';

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
            <TwoGrid TopChildren={<Time />} BottomChildren={<Birthday />} />
            <SingleGrid Children={<Discord />} />
            <SingleGrid Children={<Duolingo />} />
          </div>
        }
      />
    </>
  );
}
