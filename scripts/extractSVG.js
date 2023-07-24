const fs = require('fs');

async function readSVGFilesFromDir(directoryPath) {
  const files = await fs.promises.readdir(directoryPath);

  const icons = {};

  await Promise.all(
    files.map(async (file) => {
      const filePath = `${directoryPath}/${file}`;
      const fileStats = await fs.promises.stat(filePath);

      if (!fileStats.isFile() || !file.endsWith('.svg')) {
        console.error(`Skipping "${file}" as it is not an SVG file.`);
        return;
      }

      const svgData = await fs.promises.readFile(filePath, 'utf-8');
      const svgContent = extractSVGContent(svgData);

      if (svgContent) {
        const iconKey = file.replace('.svg', '');
        icons[iconKey] = svgContent;
      }
    })
  );

  return icons;
}

function extractSVGContent(svgData) {
  const svgRegex = /<svg[^>]*>([\s\S]*?)<\/svg>/i;
  const match = svgData.match(svgRegex);
  const svgContent = match ? match[1] : null;
  return svgContent ? `<>${svgContent}</>` : null;
}

async function generateIconsFile(directoryPath, outputFilePath) {
  try {
    const icons = await readSVGFilesFromDir(directoryPath);

    const iconKeys = Object.keys(icons);
    const iconExports = iconKeys
      .map((key) => `export const ${key} = (${JSON.stringify(icons[key])});`)
      .join('\n');

    const iconFileContent = `
import React from 'react';

${iconExports}

export const icons = {
  ${iconKeys.join(',\n  ')}
} as const;

export type IconKey = keyof typeof icons;
`;

    fs.writeFileSync(outputFilePath, iconFileContent, 'utf-8');
    console.log('icons.tsx generated successfully.');
  } catch (error) {
    console.error('Error generating icons.tsx:', error);
  }
}

// Usage example:
generateIconsFile('./public/icons', './src/components/Docs/Icon/icons-news.tsx');
