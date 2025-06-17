export default function Page() {
  const colors = [
    { name: 'primary', value: 'bg-[hsla(var(--primary))]' },
    { name: 'primary-foreground', value: 'bg-[hsla(var(--primary-foreground))]' },
    { name: 'secondary', value: 'bg-[hsla(var(--secondary))]' },
    { name: 'secondary-foreground', value: 'bg-[hsla(var(--secondary-foreground))]' },
    { name: 'background', value: 'bg-[hsla(var(--background))]' },
    { name: 'foreground', value: 'bg-[hsla(var(--foreground))]' },
    { name: 'muted', value: 'bg-[hsla(var(--muted))]' },
    { name: 'muted-foreground', value: 'bg-[hsla(var(--muted-foreground))]' },
    { name: 'accent', value: 'bg-[hsla(var(--accent))]' },
    { name: 'accent-foreground', value: 'bg-[hsla(var(--accent-foreground))]' },
    { name: 'destructive', value: 'bg-[hsla(var(--destructive))]' },
    { name: 'destructive-foreground', value: 'bg-[hsla(var(--destructive-foreground))]' },
    { name: 'border', value: 'bg-[hsla(var(--border))]' },
    { name: 'input', value: 'bg-[hsla(var(--input))]' },
    { name: 'ring', value: 'bg-[hsla(var(--ring))]' },
    { name: 'card', value: 'bg-[hsla(var(--card))]' },
    { name: 'card-foreground', value: 'bg-[hsla(var(--card-foreground))]' },
    { name: 'popover', value: 'bg-[hsla(var(--popover))]' },
    { name: 'popover-foreground', value: 'bg-[hsla(var(--popover-foreground))]' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-8 md:grid-cols-3 lg:grid-cols-4">
      {colors.map((color) => (
        <div key={color.name} className="space-y-2 rounded-lg border p-4">
          <div className={`h-20 rounded-md ${color.value}`} />
          <p className="text-sm font-medium">{color.name}</p>
        </div>
      ))}
    </div>
  );
}
