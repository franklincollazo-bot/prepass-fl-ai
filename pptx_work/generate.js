const path = require('path');
const skillDir = '/Users/franklincollazo/.accio/accounts/1764454324/agents/DID-DB9653-81DB9653U1778692-8233-A6D672/agent-core/skills/pptx';
const pptxgen = require(require.resolve('pptxgenjs', { paths: [skillDir] }));
const html2pptx = require(path.join(skillDir, 'scripts/html2pptx.js'));

async function run() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';

  const slides = ['slide1.html', 'slide2.html', 'slide3.html', 'slide4.html', 'slide5.html', 'slide6.html'];

  for (const slideFile of slides) {
    console.log(`Processing ${slideFile}...`);
    const filePath = path.join(__dirname, slideFile);
    await html2pptx(filePath, pptx);
  }

  const outputPath = path.join(__dirname, 'Set4Life_Presentacion_Ingresos.pptx');
  await pptx.writeFile({ fileName: outputPath });
  console.log(`Presentation saved to ${outputPath}`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
