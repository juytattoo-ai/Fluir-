const fs = require('fs');
const path = require('path');
const dirs = ['cursos', 'mentorias', 'consultorias', 'roda-de-conversa', 'cafe', 'qualidade', 'como-contribuir'];
const basePath = path.join(__dirname, 'src', 'app', 'suporte');

for (const dir of dirs) {
  const filePath = path.join(basePath, dir, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/<SuporteHeader \/>\s*<div className="([^"]+)">/, '<SuporteHeader />\n      <div id="conteudo" className="$1 scroll-mt-24">');
    fs.writeFileSync(filePath, content);
  }
}
console.log('Adicionado id=conteudo nas paginas de suporte');
