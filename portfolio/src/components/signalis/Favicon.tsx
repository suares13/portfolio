import { useEffect } from "react";

export function Favicon() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 64, 64);
    ctx.fillStyle = "#cc0000";
    ctx.beginPath();
    ctx.moveTo(32, 10);
    ctx.lineTo(56, 52);
    ctx.lineTo(8, 52);
    ctx.closePath();
    ctx.fill();

    const url = canvas.toDataURL("image/png");
    let link = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/png";
    link.href = url;
  }, []);
  return null;
}
