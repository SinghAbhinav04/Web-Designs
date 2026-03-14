export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 mt-20">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center text-xs tracking-widest uppercase text-foreground-secondary">
        <div>&copy; {new Date().getFullYear()} STUDIO. All rights reserved.</div>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Awwwards</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
