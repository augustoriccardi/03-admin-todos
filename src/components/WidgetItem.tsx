interface Props {
  title: string;
  children: React.ReactNode;
}

export const WidgetItem = ({ title, children }: Props) => {
  return (
    <div className="md:col-span-2 lg:col-span-1 text-gray-600 dark:text-white dark:border-none border-gray-100 rounded shadow ">
      <div className="dark:bg-black h-full py-8 px-6 space-y-6 rounded-xl  border-gray-200 bg-white">
        <div>
          <h5 className="text-xl text-center">{title}</h5>
          <div className="mt-2 flex flex-col justify-center gap-4 ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
