const contentSections = [
  {
    id: 'baccarat-rules',
    title: '百家乐规则',
    tags: ['百家乐', '规则', '入门'],
    content: '了解百家乐基本玩法、庄闲赔率与补牌规则。'
  },
  {
    id: 'baccarat-strategy',
    title: '百家乐策略',
    tags: ['百家乐', '策略', '技巧'],
    content: '分析百家乐常见投注策略与资金管理方法。'
  },
  {
    id: 'live-casino',
    title: '真人娱乐场',
    tags: ['真人', '百家乐', '直播'],
    content: '体验真人荷官实时百家乐对局，沉浸式游戏氛围。'
  }
];

const defaultSiteUrl = 'https://web-bjlpoker.com';
const defaultKeyword = '百家乐';

function filterSectionsByKeyword(sections, keyword) {
  const lowerKeyword = keyword.toLowerCase();
  return sections.filter(section =>
    section.title.toLowerCase().includes(lowerKeyword) ||
    section.tags.some(tag => tag.toLowerCase().includes(lowerKeyword)) ||
    section.content.toLowerCase().includes(lowerKeyword)
  );
}

function getSectionById(sections, sectionId) {
  return sections.find(section => section.id === sectionId) || null;
}

function getAllTags(sections) {
  const tagSet = new Set();
  sections.forEach(section => {
    section.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet);
}

function generateSiteMap(sections, baseUrl) {
  return sections.map(section => ({
    url: `${baseUrl}/${section.id}`,
    title: section.title,
    tags: section.tags
  }));
}

function searchContent(sections, query) {
  const lowerQuery = query.toLowerCase();
  return sections.filter(section =>
    section.title.toLowerCase().includes(lowerQuery) ||
    section.content.toLowerCase().includes(lowerQuery) ||
    section.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

const exampleSearch = searchContent(contentSections, defaultKeyword);
const exampleSiteMap = generateSiteMap(contentSections, defaultSiteUrl);
const exampleTags = getAllTags(contentSections);

function displaySearchResults(results) {
  if (results.length === 0) {
    console.log('未找到匹配内容');
    return;
  }
  results.forEach(result => {
    console.log(`- ${result.title} (${result.id})`);
    console.log(`  标签: ${result.tags.join(', ')}`);
    console.log(`  简介: ${result.content}`);
  });
}

function displaySiteMap(siteMap) {
  siteMap.forEach(entry => {
    console.log(`${entry.title} -> ${entry.url}`);
  });
}

console.log('=== 内容分区 ===');
contentSections.forEach(sec => console.log(`[${sec.id}] ${sec.title}`));

console.log('\n=== 按"百家乐"搜索 ===');
displaySearchResults(exampleSearch);

console.log('\n=== 站点地图 ===');
displaySiteMap(exampleSiteMap);

console.log('\n=== 所有标签 ===');
console.log(exampleTags.join(', '));

console.log('\n=== 按ID查找策略分区 ===');
const strategySection = getSectionById(contentSections, 'baccarat-strategy');
if (strategySection) {
  console.log(strategySection.title + ': ' + strategySection.content);
}