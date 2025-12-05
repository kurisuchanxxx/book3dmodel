// Script to generate texture images using node-canvas
// Run with: node generate-textures.js

import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';

const DIGESTO_BLUE = "#1f3a93";
const WHITE = "#ffffff";
const GOLD = "#d4af37";

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Front Cover
function generateFrontCover() {
  const width = 1024;
  const height = 1366;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background - Deep blue
  ctx.fillStyle = DIGESTO_BLUE;
  ctx.fillRect(0, 0, width, height);

  // Gradient overlay
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

  // Subtitle
  ctx.font = "40px serif";
  ctx.fillText("FONTI, ANALISI", width / 2, height * 0.6);
  ctx.fillText("& RICERCA", width / 2, height * 0.68);

  // Decorative border
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 8;
  ctx.strokeRect(40, 40, width - 80, height - 80);

  ctx.lineWidth = 2;
  ctx.strokeRect(60, 60, width - 120, height - 120);

  return canvas;
}

// Back Cover
function generateBackCover() {
  const width = 1024;
  const height = 1366;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = DIGESTO_BLUE;
  ctx.fillRect(0, 0, width, height);

  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "rgba(20, 40, 100, 0.9)");
  gradient.addColorStop(1, "rgba(31, 58, 147, 1)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  return canvas;
}

// Left Page
function generateLeftPage() {
  const width = 1024;
  const height = 1366;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = "#f8f6f0";
  ctx.fillRect(0, 0, width, height);

  // Paper texture
  for(let i = 0; i < 1000; i++) {
    const alpha = Math.random() * 0.1;
    ctx.fillStyle = `rgba(200, 190, 170, ${alpha})`;
    ctx.fillRect(Math.random() * width, Math.random() * height, 1, 1);
  }

  // Text
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

  // Decorative line
  ctx.strokeStyle = DIGESTO_BLUE;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(100, 150);
  ctx.lineTo(300, 150);
  ctx.stroke();

  return canvas;
}

// Right Page
function generateRightPage() {
  const width = 1024;
  const height = 1366;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = "#f8f6f0";
  ctx.fillRect(0, 0, width, height);

  // Paper texture
  for(let i = 0; i < 1000; i++) {
    const alpha = Math.random() * 0.1;
    ctx.fillStyle = `rgba(200, 190, 170, ${alpha})`;
    ctx.fillRect(Math.random() * width, Math.random() * height, 1, 1);
  }

  // Button
  const buttonX = width / 2 - 250;
  const buttonY = height / 2 - 50;
  const buttonWidth = 500;
  const buttonHeight = 100;

  // Shadow
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.fillRect(buttonX + 5, buttonY + 5, buttonWidth, buttonHeight);

  // Button gradient
  const buttonGradient = ctx.createLinearGradient(buttonX, buttonY, buttonX, buttonY + buttonHeight);
  buttonGradient.addColorStop(0, "#2a4db7");
  buttonGradient.addColorStop(1, DIGESTO_BLUE);
  ctx.fillStyle = buttonGradient;
  ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);

  // Border
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 3;
  ctx.strokeRect(buttonX, buttonY, buttonWidth, buttonHeight);

  // Button text
  ctx.fillStyle = WHITE;
  ctx.font = "bold 40px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Accedi a Digesto AI", width / 2, height / 2);

  // Instruction
  ctx.fillStyle = "#666";
  ctx.font = "24px serif";
  ctx.fillText("Clicca per accedere", width / 2, buttonY - 40);

  return canvas;
}

// Generate all textures
const outputDir = './public/textures';

console.log('Generating textures...');

try {
  const frontCover = generateFrontCover();
  fs.writeFileSync(path.join(outputDir, 'book-cover.jpg'), frontCover.toBuffer('image/jpeg'));
  console.log('✓ Generated book-cover.jpg');

  const backCover = generateBackCover();
  fs.writeFileSync(path.join(outputDir, 'book-back.jpg'), backCover.toBuffer('image/jpeg'));
  console.log('✓ Generated book-back.jpg');

  const leftPage = generateLeftPage();
  fs.writeFileSync(path.join(outputDir, 'page-1-left.jpg'), leftPage.toBuffer('image/jpeg'));
  console.log('✓ Generated page-1-left.jpg');

  const rightPage = generateRightPage();
  fs.writeFileSync(path.join(outputDir, 'page-1-right.jpg'), rightPage.toBuffer('image/jpeg'));
  console.log('✓ Generated page-1-right.jpg');

  console.log('\n✓ All textures generated successfully!');
} catch (error) {
  console.error('Error generating textures:', error);
  process.exit(1);
}
