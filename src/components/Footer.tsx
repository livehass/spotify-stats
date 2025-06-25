export default function Footer() {
  return (
    <footer className="mt-12 border-t dark:border-neutral-700 border-slate-700 py-6 text-center text-sm dark:text-gray-400 text-black">
      <p className="mb-2">
        © {new Date().getFullYear()} Desenvolvido por{" "}
        <a
          href="https://www.linkedin.com/in/felipesiper/"
          className="dark:text-white text-slate-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jorge Felipe
        </a>
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href="https://www.linkedin.com/in/felipesiper/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/livehass"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          GitHub
        </a>
        <a
          href="https://jorgefelipe.info"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Projetos
        </a>
      </div>
    </footer>
  );
}
