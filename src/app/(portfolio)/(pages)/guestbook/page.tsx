import CollapseComponents from '@/components/custom/collapse-components';
import { HeadingText } from '@/components/custom/heading-text';

export default function DashboardPage() {
  return (
    <>
      <CollapseComponents
        nameComponent={
          <HeadingText subtext='Leave a message for me and other visitors here!'>
            Guestbook
          </HeadingText>
        }
        contentComponent={<div>GuestBook Page</div>}
      />
    </>
  );
}
