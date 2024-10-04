export function Announcements() {
  return (
    <div className="rounded-md bg-muted p-3">
      <div className="flex items-center justify-between px-2">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="cursor-pointer select-none rounded-sm border-2 border-muted-foreground px-1.5 py-1 text-xs text-foreground">
          View All
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <div className="rounded-md bg-primary/50 p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-foreground">
              Lorem ipsum dolor sit
            </h2>
            <span className="rounded-full bg-muted px-2 py-1 text-[10px] text-muted-foreground">
              2025-01-01
            </span>
          </div>
          <p className="mt-1 text-xs text-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        <div className="rounded-md bg-primary p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-white">Lorem ipsum dolor sit</h2>
            <span className="rounded-full bg-muted px-2 py-1 text-[10px] text-muted-foreground">
              2025-01-01
            </span>
          </div>
          <p className="mt-1 text-xs text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Announcements;
