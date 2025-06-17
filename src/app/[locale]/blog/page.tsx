import { AnimatedText } from '@/components/ui/animated-text';

export default function BlogPage() {
  return (
    <main className="pt-[--header-height]">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-4xl font-bold">Blog</h1>
          <AnimatedText
            text="Coming soon... I'll be sharing my thoughts and experiences about web development, technology, and more."
            className="text-muted-foreground text-xl"
          />
        </div>
      </section>
    </main>
  );
}
