import { useMemo } from "react";
import * as THREE from "three";

// Colors
const DIGESTO_BLUE = "#1f3a93";
const WHITE = "#ffffff";
const GOLD = "#d4af37";

export const useCanvasTexture = (width, height, drawFunction) => {
  return useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    drawFunction(ctx, canvas);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, [width, height]);
};

// Front Cover: DIGESTO Volume I with blue background
export const createFrontCoverTexture = () => {
  const width = 1024;
  const height = 1366; // Maintain 4:3 aspect ratio

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  // Background - Deep blue
  ctx.fillStyle = DIGESTO_BLUE;
  ctx.fillRect(0, 0, width, height);

  // Add subtle texture/gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "rgba(31, 58, 147, 0.8)");
  gradient.addColorStop(0.5, "rgba(31, 58, 147, 1)");
  gradient.addColorStop(1, "rgba(20, 40, 100, 0.9)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Title - DIGESTO
  ctx.fillStyle = GOLD;
  ctx.font = "bold 120px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("DIGESTO", width / 2, height * 0.3);

  // Volume I
  ctx.fillStyle = WHITE;
  ctx.font = "bold 80px serif";
  ctx.fillText("Volume I", width / 2, height * 0.45);

  // Subtitle lines
  ctx.font = "40px serif";
  ctx.fillText("FONTI, ANALISI", width / 2, height * 0.6);
  ctx.fillText("& RICERCA", width / 2, height * 0.68);

  // Decorative border
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 8;
  ctx.strokeRect(40, 40, width - 80, height - 80);

  // Inner border
  ctx.lineWidth = 2;
  ctx.strokeRect(60, 60, width - 120, height - 120);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

// Back Cover: Solid blue
export const createBackCoverTexture = () => {
  const width = 1024;
  const height = 1366;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  // Solid blue background
  ctx.fillStyle = DIGESTO_BLUE;
  ctx.fillRect(0, 0, width, height);

  // Subtle gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "rgba(20, 40, 100, 0.9)");
  gradient.addColorStop(1, "rgba(31, 58, 147, 1)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

// Spine: DIGESTO text on blue
export const createSpineTexture = () => {
  const width = 256;
  const height = 1366;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = DIGESTO_BLUE;
  ctx.fillRect(0, 0, width, height);

  // Rotate context to write vertically
  ctx.save();
  ctx.translate(width / 2, height / 2);
  ctx.rotate(-Math.PI / 2);

  // DIGESTO text
  ctx.fillStyle = GOLD;
  ctx.font = "bold 80px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("DIGESTO", 0, 0);

  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

// Left Page: Descriptive text in Italian
export const createLeftPageTexture = () => {
  const width = 1024;
  const height = 1366;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  // Background - paper white with slight cream
  ctx.fillStyle = "#f8f6f0";
  ctx.fillRect(0, 0, width, height);

  // Add paper texture
  for(let i = 0; i < 1000; i++) {
    ctx.fillStyle = `rgba(200, 190, 170, ${Math.random() * 0.1})`;
    ctx.fillRect(Math.random() * width, Math.random() * height, 1, 1);
  }

  // Text content
  ctx.fillStyle = "#222";
  ctx.font = "32px serif";
  ctx.textAlign = "left";

  const text = [
    "",
    "",
    "Questo volume raccoglie",
    "l'elaborazione, l'analisi e la sintesi",
    "delle fonti, realizzate attraverso",
    "strumenti di Intelligenza Artificiale.",
    "",
    "È una collezione in continua",
    "evoluzione: un ponte tra tradizione",
    "giuridica e nuove tecnologie.",
  ];

  const startY = 200;
  const lineHeight = 60;

  text.forEach((line, index) => {
    ctx.fillText(line, 100, startY + index * lineHeight);
  });

  // Decorative element
  ctx.strokeStyle = DIGESTO_BLUE;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(100, 150);
  ctx.lineTo(300, 150);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

// Right Page: Button with "Accedi a Digesto AI"
export const createRightPageTexture = () => {
  const width = 1024;
  const height = 1366;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  // Background - paper white
  ctx.fillStyle = "#f8f6f0";
  ctx.fillRect(0, 0, width, height);

  // Add paper texture
  for(let i = 0; i < 1000; i++) {
    ctx.fillStyle = `rgba(200, 190, 170, ${Math.random() * 0.1})`;
    ctx.fillRect(Math.random() * width, Math.random() * height, 1, 1);
  }

  // Button
  const buttonX = width / 2 - 250;
  const buttonY = height / 2 - 50;
  const buttonWidth = 500;
  const buttonHeight = 100;

  // Button shadow
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.fillRect(buttonX + 5, buttonY + 5, buttonWidth, buttonHeight);

  // Button background
  const buttonGradient = ctx.createLinearGradient(buttonX, buttonY, buttonX, buttonY + buttonHeight);
  buttonGradient.addColorStop(0, "#2a4db7");
  buttonGradient.addColorStop(1, DIGESTO_BLUE);
  ctx.fillStyle = buttonGradient;
  ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);

  // Button border
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 3;
  ctx.strokeRect(buttonX, buttonY, buttonWidth, buttonHeight);

  // Button text
  ctx.fillStyle = WHITE;
  ctx.font = "bold 40px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Accedi a Digesto AI", width / 2, height / 2);

  // Instruction text above button
  ctx.fillStyle = "#666";
  ctx.font = "24px serif";
  ctx.fillText("Clicca per accedere", width / 2, buttonY - 40);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};
