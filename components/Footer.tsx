export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-foreground/60 text-center md:text-left">
            © {currentYear} Omar Rageh. All rights reserved.
          </p>

          {/* Tech Stack */}
          <p className="text-sm text-foreground/60 text-center md:text-right">
            Built with{" "}
            <span className="text-accent font-medium">Next.js</span> &{" "}
            <span className="text-accent-secondary font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
