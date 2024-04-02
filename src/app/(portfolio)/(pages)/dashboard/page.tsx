import CollapseComponents from '@/components/custom/collapse-components';
import { HeadingText } from '@/components/custom/heading-text';

export default function DashboardPage() {
  return (
    <>
      <CollapseComponents
        nameComponent={
          <HeadingText subtext='Statistics about my activities'>
            Dashboard
          </HeadingText>
        }
        contentComponent={<div>Dashboard Page</div>}
      />
    </>
  );
}
