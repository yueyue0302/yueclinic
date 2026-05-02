import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const columnsDirectory = path.join(projectRoot, 'content/columns');
const outputPath = path.join(projectRoot, 'data/columns.json');

async function generateColumnsData() {
  if (!fs.existsSync(columnsDirectory)) {
    fs.writeFileSync(outputPath, JSON.stringify([]));
    return;
  }

  const fileNames = fs.readdirSync(columnsDirectory).filter(f => f.endsWith('.md'));
  
  const allColumns = [];
  
  for (const fileName of fileNames) {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(columnsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
    
    allColumns.push({
      slug,
      title: matterResult.data.title || '',
      date: matterResult.data.date || '',
      category: matterResult.data.category || '',
      contentHtml,
    });
  }
  
  // Sort by date descending
  allColumns.sort((a, b) => (a.date < b.date ? 1 : -1));
  
  fs.writeFileSync(outputPath, JSON.stringify(allColumns, null, 2));
  console.log(`✅ Generated ${allColumns.length} columns to data/columns.json`);
}

generateColumnsData().catch(console.error);
