import CollapseComponents from '@/components/custom/collapse-components';
import { HeadingText } from '@/components/custom/heading-text';

export const metadata = {
  title: 'About',
  description: 'Details about me.',
};

export default function AboutPage() {
  return (
    <>
      <CollapseComponents
        nameComponent={
          <HeadingText subtext='Details about me.'>About</HeadingText>
        }
        contentComponent={<div>About Page</div>}
      />
    </>
  );
}
