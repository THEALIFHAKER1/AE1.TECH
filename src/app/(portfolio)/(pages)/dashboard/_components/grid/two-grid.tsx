export type BlankProps = {
  TopChildren?: React.ReactNode;
  BottomChildren?: React.ReactNode;
};

export default function TwoGrid({ TopChildren, BottomChildren }: BlankProps) {
  return (
    <div className='grid w-full grid-cols-2 gap-2 md:w-auto md:grid-cols-1 md:grid-rows-2'>
      {TopChildren}
      {BottomChildren}
    </div>
  );
}

{
  /* <Card className='w-full border border-input bg-foreground/20 backdrop-blur-sm backdrop-saturate-150 md:w-fit md:max-w-[400px]'>
  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
    <CardTitle className='text-sm font-medium'>Title</CardTitle>
  </CardHeader>
  <CardContent>{BottomChildren}</CardContent>
</Card>; */
}
