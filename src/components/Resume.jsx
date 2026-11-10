import React, { useEffect, useRef, useState } from 'react';

const assetBase = `${process.env.PUBLIC_URL}/resume-embed/`;
export const resumePdf = `${assetBase}resumes/JaydenBoomerResume.pdf`;

export default function Resume() {
  const shellRef = useRef(null);
  const mountRef = useRef(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const controller = new AbortController();
    const mount = mountRef.current;
    const shell = shellRef.current;
    const root = mount.shadowRoot || mount.attachShadow({ mode: 'open' });
    let observer;
    let disposed = false;

    async function loadResume() {
      try {
        const response = await fetch(`${assetBase}index.html`, { signal: controller.signal });
        if (!response.ok) throw new Error('Resume unavailable');
        const html = (await response.text()).replaceAll('./resume%20images/', `${assetBase}resume%20images/`);
        const document = new DOMParser().parseFromString(html, 'text/html');
        const template = document.getElementById('resumeTemplate');
        if (!template) throw new Error('Resume preview unavailable');
        const content = template.content.cloneNode(true);
        content.querySelectorAll('[src]').forEach(element => {
          element.setAttribute('src', new URL(element.getAttribute('src'), new URL(assetBase, window.location.href)).href);
        });
        if (disposed) return;
        root.replaceChildren(content);
        const page = root.querySelector('.resume-renderer-page');
        if (!page) throw new Error('Resume page unavailable');
        const resize = () => {
          if (disposed) return;
          const scale = Math.min(1, shell.clientWidth / 940);
          mount.style.transform = `scale(${scale})`;
          shell.style.height = `${Math.ceil(page.offsetHeight * scale) + 2}px`;
        };
        observer = new ResizeObserver(resize);
        observer.observe(shell);
        observer.observe(page);
        resize();
        window.document.fonts.ready.then(resize);
        setStatus('ready');
      } catch (error) {
        if (!disposed && error.name !== 'AbortError') setStatus('error');
      }
    }
    loadResume();
    return () => {
      disposed = true;
      controller.abort();
      observer?.disconnect();
      root.replaceChildren();
    };
  }, []);

  return <>
    <div className="resume-actions">
      <a className="button resume-download" href={resumePdf} download="JaydenBoomerResume.pdf"><i className="fas fa-download" aria-hidden="true" /> Download Resume (PDF)</a>
      <a href={`${assetBase}resumes/JaydenBoomerResume.docx`} download="JaydenBoomerResume.docx">Download Word version</a>
    </div>
    {status === 'loading' && <p role="status">Loading resume…</p>}
    {status === 'error' && <p role="status">The preview couldn’t load. You can still download the resume above.</p>}
    <div className="resume-preview-shell" ref={shellRef} aria-label="Jayden Boomer's resume" aria-busy={status === 'loading'}>
      <div className="resume-preview-mount" ref={mountRef} />
    </div>
    <p className="resume-fallback"><a href={resumePdf} target="_blank" rel="noopener noreferrer">Open the PDF in a new tab</a></p>
  </>;
}
