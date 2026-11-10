import React, { useEffect, useState } from 'react';

const roles = ['software developer.', 'robotics enthusiast.', 'problem solver.'];

export default function AnimatedRole() {
  const [text, setText] = useState('');

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer;
    let role = 0;
    let length = 0;
    let deleting = false;

    function tick() {
      const phrase = roles[role];
      length += deleting ? -1 : 1;
      setText(phrase.slice(0, length));

      let delay = deleting ? 45 : 90;
      if (!deleting && length === phrase.length) {
        deleting = true;
        delay = 1500;
      } else if (deleting && length === 0) {
        deleting = false;
        role = (role + 1) % roles.length;
        delay = 300;
      }
      timer = setTimeout(tick, delay);
    }

    function restart() {
      clearTimeout(timer);
      role = 0;
      length = 0;
      deleting = false;
      setText(motion.matches ? roles[0] : '');
      if (!motion.matches) timer = setTimeout(tick, 300);
    }

    restart();
    motion.addEventListener?.('change', restart);
    return () => {
      clearTimeout(timer);
      motion.removeEventListener?.('change', restart);
    };
  }, []);

  return (
    <p className="role" aria-label="A software developer, robotics enthusiast, and problem solver.">
      A <span aria-hidden="true">{text}</span><span className="cursor" aria-hidden="true">|</span>
    </p>
  );
}
