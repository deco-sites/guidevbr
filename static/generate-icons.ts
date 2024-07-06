import { existsSync } from "https://deno.land/std/fs/mod.ts";

const files = [
  {
    svgFilePath: "static/icons/logos.svg",
    outputFilePath: "static/icons/logos.ts",
  },
  {
    svgFilePath: "static/icons/icons.svg",
    outputFilePath: "static/icons/icons.ts",
  },
];

async function generateIconsFile(svgFilePath: string, outputFilePath: string) {
  const svgContent = await Deno.readTextFile(svgFilePath);
  let newIcons = [];
  let existingContent = "";

  if (existsSync(outputFilePath)) Deno.removeSync(outputFilePath, { recursive: true });

  const regex = /<symbol id="(.+?)"(.+?)>(.+?)<\/symbol>/gs;
  let matchSymbol;
  while ((matchSymbol = regex.exec(svgContent)) !== null) {
    const [_, id, attributes, content] = matchSymbol;
    newIcons.push(id);
    const iconString = `export const ${id} = \`<svg id="${id}"${attributes}>${content}</svg>\`;\n`;
    existingContent += iconString;
  }

  // Replaces the existing content with the new icons
  if (newIcons.length > 0) {
    // Remove the existing AvailableIcons constant from the content
    existingContent = existingContent.replace(/export const AvailableIcons = { [^}]* };/g, "");
    const availableIconsString = `export const AvailableIcons = { ${newIcons.join(", ")} };`;
    existingContent += `\n${availableIconsString}`;
    await Deno.writeTextFile(outputFilePath, existingContent, { create: true });
    console.log(outputFilePath + " updated successfully with new icons.");
  } else {
    const defaultContent = `export const AvailableIcons = {};\n`;
    await Deno.writeTextFile(outputFilePath, defaultContent, { create: true });
    console.log(outputFilePath + " updated successfully with no icons.");
  }
}
async function generateIconsFileForAll() {
  for (const file of files) {
    await generateIconsFile(file.svgFilePath, file.outputFilePath);
  }
}
generateIconsFileForAll().catch(console.error);
