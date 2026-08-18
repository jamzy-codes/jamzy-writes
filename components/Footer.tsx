import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-11">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid sm:grid-cols-[1.4fr_1fr_1fr] gap-8 mb-8">
          <div>
            <Link href="/" className="font-logo text-lg font-bold uppercase tracking-wide">
              Jamzy<span className="text-violet">!</span>
            </Link>
            <p className="text-[13px] text-text-dim mt-2.5 max-w-[32ch]">
              Technical writer. Aspiring developer. Helping protocols
              communicate with clarity.
            </p>
          </div>

          <div>
            <h6 className="text-xs text-text-dim mb-3">Quick Links</h6>
            <Link href="#work" className="block text-[13.5px] text-text-muted hover:text-text mb-2">
              Work
            </Link>
            <Link href="#about" className="block text-[13.5px] text-text-muted hover:text-text mb-2">
              About
            </Link>
            <Link href="#contact" className="block text-[13.5px] text-text-muted hover:text-text">
              Contact
            </Link>
          </div>

          <div>
            <h6 className="text-xs text-text-dim mb-3">Find Me On</h6>
            <div className="flex gap-2.5">
              <a
                href="https://x.com/Only_1_Jamzy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[34px] h-[34px] border border-border-c rounded-lg flex items-center justify-center text-text-muted hover:text-text hover:border-border-hover"
              >
                𝕏
              </a>
              <a
                href="https://www.linkedin.com/in/jamai-fowobaje-1814b331a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[34px] h-[34px] border border-border-c rounded-lg flex items-center justify-center text-text-muted hover:text-text hover:border-border-hover text-[13px] font-bold"
              >
                in
              </a>
              <a
                href="https://github.com/jamzy-codes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[34px] h-[34px] border border-border-c rounded-lg flex items-center justify-center text-text-muted hover:text-text hover:border-border-hover"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.91-.38 2.89-.39.98.01 1.97.13 2.89.39 2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.21.66.79.55A10.52 10.52 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border-soft pt-5 flex justify-between flex-wrap gap-2 text-[12.5px] text-text-dim">
          <span>© 2026 Jamzy. All rights reserved.</span>
          <span>Built with clarity. Designed for builders. 💜</span>
        </div>
      </div>
    </footer>
  );
}
