let audioCtx: AudioContext | null = null;
let disabled = false;
let unlockBound = false;

function getCtx(): AudioContext | null {
  if (disabled) return null;
  if (audioCtx) return audioCtx;
  try {
    const Ctor =
      (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!Ctor) return null;
    audioCtx = new Ctor();
    bindUnlock();
    return audioCtx;
  } catch {
    return null;
  }
}

function bindUnlock() {
  if (unlockBound || typeof window === "undefined") return;
  unlockBound = true;
  const unlock = () => {
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume().catch(() => {});
    }
  };
  ["pointerdown", "keydown", "touchstart", "mousedown"].forEach((ev) =>
    window.addEventListener(ev, unlock, { once: false, passive: true })
  );
}

export function playKeystroke() {
  const ctx = getCtx();
  if (!ctx) return;
  if (ctx.state === "suspended") {
    ctx.resume().catch(() => {});
  }
  try {
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(
      Math.random() * 200 + 200,
      ctx.currentTime
    );

    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.00001,
      ctx.currentTime + 0.05
    );

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.05);
  } catch {
    // ignore
  }
}

export function disableSound() {
  disabled = true;
  if (audioCtx) {
    audioCtx.close().catch(() => {});
    audioCtx = null;
  }
}
