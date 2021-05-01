const { build } = require('esbuild');

const MINIFY = process.argv.includes('--minify');
const ROOTDIR = `${__dirname}/..`;

build({
  entryPoints: [`${ROOTDIR}/src/main.ts`],
  outdir: `${ROOTDIR}/dist`,
  bundle: true,
  minify: MINIFY,
  format: 'cjs',
  loader: {
    '.html': 'text'
  }
}).catch((error) => {
  console.log(error);
  process.exit(1);
});
