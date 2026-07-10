const grammarLevels = {
  beginner: {
    unit: '第一阶段 · 从句子开始',
    title: '你会先找到一句话的重心。',
    text: '不用背定义。先看谁在做什么，再让每一个词各就各位。',
    lessons: [['01', '句子的骨架', '谁 · 做什么 · 什么情况'], ['02', '现在正在发生', '把画面说出来'], ['03', '过去留下的痕迹', '时间怎样改变句子'], ['04', '一句话里的更多信息', '地点、方式与程度']]
  },
  middle: {
    unit: '第二阶段 · 让句子连接',
    title: '你会让两个想法自然地走在一起。',
    text: '不是记连接词。先感受两个画面之间，是原因、转折，还是补充。',
    lessons: [['05', '一个动作的前后', '时间关系'], ['06', '因为，所以，但是', '逻辑关系'], ['07', '正在说的是哪一个', '定语从句的感觉'], ['08', '如果事情换一种样子', '条件与假设']]
  },
  advanced: {
    unit: '第三阶段 · 选择你的语气',
    title: '你会用不同的角度，把意思说得更准确。',
    text: '当句子开始有取舍，语法就成了表达的工具，而不再是一张规则表。',
    lessons: [['09', '把重点放到前面', '强调与倒装'], ['10', '不确定时怎样说', '情态与推测'], ['11', '没有发生的另一种可能', '虚拟语气'], ['12', '更像真实写作的句子', '非谓语与信息压缩']]
  }
};

const vocabulary = {
  basic: [
    ['常用动作', 'notice', '/ˈnəʊtɪs/', '注意到；留意', 'verb', 'I noticed a small change in her voice.', '我注意到她声音里一个细微的变化。'],
    ['常用动作', 'choose', '/tʃuːz/', '选择', 'verb', 'You can choose a quiet place to study.', '你可以选择一个安静的地方学习。'],
    ['常见感受', 'calm', '/kɑːm/', '平静的；使平静', 'adj.', 'The morning air made her feel calm.', '清晨的空气让她感到平静。'],
    ['校园生活', 'prepare', '/prɪˈpeə/', '准备', 'verb', 'We prepared for the test together.', '我们一起为考试做准备。'],
    ['常用动作', 'follow', '/ˈfɒləʊ/', '跟随；理解', 'verb', 'I can follow the story now.', '我现在能理解这个故事了。'],
    ['自然世界', 'appear', '/əˈpɪə/', '出现；显得', 'verb', 'A rainbow appeared after the rain.', '雨后出现了一道彩虹。'],
    ['学习与思考', 'practice', '/ˈpræktɪs/', '练习；实践', 'noun', 'Practice helps new words stay with you.', '练习能帮助新单词留在你的脑海里。'],
    ['生活场景', 'journey', '/ˈdʒɜːni/', '旅程', 'noun', 'Learning is a long journey.', '学习是一段漫长的旅程。'],
    ['常见感受', 'simple', '/ˈsɪmpəl/', '简单的', 'adj.', 'Start with one simple sentence.', '从一个简单的句子开始。'],
    ['常用动作', 'improve', '/ɪmˈpruːv/', '改进；提高', 'verb', 'Small steps improve your English.', '小步前进能提升你的英语。']
  ],
  middle: [
    ['描述与连接', 'compare', '/kəmˈpeə/', '比较', 'verb', 'Compare the two sentences slowly.', '慢慢比较这两个句子。'],
    ['思考表达', 'suggest', '/səˈdʒest/', '建议；表明', 'verb', 'The result suggests a new idea.', '这个结果表明了一个新想法。'],
    ['生活变化', 'increase', '/ɪnˈkriːs/', '增加；增长', 'verb', 'Her confidence increased every week.', '她的信心每周都在增长。'],
    ['社会与关系', 'respect', '/rɪˈspekt/', '尊重', 'noun', 'Respect begins with careful listening.', '尊重从认真倾听开始。'],
    ['思考表达', 'explain', '/ɪkˈspleɪn/', '解释', 'verb', 'Can you explain it in your own words?', '你能用自己的话解释它吗？'],
    ['描述与连接', 'similar', '/ˈsɪmɪlə/', '相似的', 'adj.', 'The two ideas are similar but not the same.', '两个想法相似，但并不相同。'],
    ['学习与思考', 'process', '/ˈprəʊses/', '过程；处理', 'noun', 'Reading is a process of finding meaning.', '阅读是一个寻找意义的过程。'],
    ['生活变化', 'replace', '/rɪˈpleɪs/', '代替；取代', 'verb', 'Understanding can replace blind memorising.', '理解可以代替盲目记忆。'],
    ['社会与关系', 'support', '/səˈpɔːt/', '支持', 'verb', 'Good habits support long-term learning.', '好习惯支持长期学习。'],
    ['描述与连接', 'although', '/ɔːlˈðəʊ/', '虽然；尽管', 'conj.', 'Although it was hard, she kept reading.', '虽然很难，她仍然坚持阅读。']
  ],
  stretch: [
    ['抽象表达', 'perspective', '/pəˈspektɪv/', '观点；视角', 'noun', 'A new language gives you a new perspective.', '一门新语言带给你新的视角。'],
    ['写作表达', 'essential', '/ɪˈsenʃəl/', '必要的；本质的', 'adj.', 'Regular practice is essential for progress.', '规律练习对进步至关重要。'],
    ['抽象表达', 'assume', '/əˈsjuːm/', '假设；认为', 'verb', 'Do not assume every word has one meaning.', '不要假设每个词只有一种意思。'],
    ['写作表达', 'contribute', '/kənˈtrɪbjuːt/', '促成；贡献', 'verb', 'Every small effort contributes to fluency.', '每一份小小的努力都会促成流利表达。'],
    ['思考表达', 'evidence', '/ˈevɪdəns/', '证据；依据', 'noun', 'The sentence gives evidence for your answer.', '这个句子为你的答案提供依据。'],
    ['抽象表达', 'approach', '/əˈprəʊtʃ/', '方法；靠近', 'noun', 'Try a different approach to grammar.', '尝试一种不同的语法学习方法。'],
    ['写作表达', 'specific', '/spəˈsɪfɪk/', '具体的；明确的', 'adj.', 'Use a specific example to make your idea clear.', '用一个具体例子让你的想法清楚。'],
    ['思考表达', 'identify', '/aɪˈdentɪfaɪ/', '识别；确认', 'verb', 'Identify the feeling before you name the rule.', '在说出规则前，先识别其中的感觉。'],
    ['抽象表达', 'maintain', '/meɪnˈteɪn/', '保持；维持', 'verb', 'Maintain a pace that feels comfortable.', '保持一个让你感到舒服的节奏。'],
    ['写作表达', 'therefore', '/ˈðeəfɔː/', '因此；所以', 'adv.', 'The idea is clear; therefore, the sentence is easy to follow.', '这个想法很清晰，因此句子容易理解。']
  ]
};

const labels = { basic: ['基础', '常见事物与动作'], middle: ['中等', '描述与连接'], stretch: ['拔高', '抽象表达与写作'] };
const state = JSON.parse(localStorage.getItem('senseEnglishProgress') || '{"grammar":[],"words":[],"reading":false}');
let currentGrammar = 'beginner';
let currentVocab = 'basic';
let wordIndex = 0;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
function save() { localStorage.setItem('senseEnglishProgress', JSON.stringify(state)); updateProgress(); }
function toast(message) { const node = $('#toast'); node.textContent = message; node.classList.add('show'); window.clearTimeout(window.toastTimer); window.toastTimer = window.setTimeout(() => node.classList.remove('show'), 2200); }

function renderGrammar(level) {
  currentGrammar = level;
  const data = grammarLevels[level];
  $('#grammarUnit').textContent = data.unit;
  $('#grammarCount').textContent = `${data.lessons.length} 个单元`;
  $('#grammarTitle').textContent = data.title;
  $('#grammarText').textContent = data.text;
  $('#lessonList').innerHTML = data.lessons.map(([number, title, sub]) => `<button class="lesson-item" data-lesson="${number}"><span class="lesson-index">${number}</span><span><b>${title}</b><small>${sub}</small></span><span class="lesson-arrow">→</span></button>`).join('');
  $$('.level-tab').forEach(button => button.classList.toggle('active', button.dataset.grammarLevel === level));
  $$('.lesson-item').forEach(button => button.addEventListener('click', () => {
    if (!state.grammar.includes(button.dataset.lesson)) state.grammar.push(button.dataset.lesson);
    save();
    toast(`已开启第 ${button.dataset.lesson} 课：${button.querySelector('b').textContent}`);
  }));
}

function renderWord() {
  const words = vocabulary[currentVocab];
  const word = words[wordIndex];
  $('#wordSet').textContent = `${labels[currentVocab][0]} · 第 ${String(Math.floor(wordIndex / 10) + 1).padStart(2, '0')} / 12 组`;
  $('#wordCategory').textContent = word[0]; $('#wordName').textContent = word[1]; $('#wordPronunciation').textContent = word[2];
  $('#wordMeaning').textContent = word[3]; $('#wordTag').textContent = word[4]; $('#wordExample').textContent = word[5]; $('#wordTranslation').textContent = word[6];
  $('#wordPosition').textContent = `${wordIndex + 1} / ${words.length}`;
  $$('.vocab-level').forEach(button => button.classList.toggle('active', button.dataset.vocabLevel === currentVocab));
}

function updateProgress() {
  const grammarDone = Math.min(state.grammar.length, 1);
  const wordDone = state.words.length ? 1 : 0;
  const readingDone = state.reading ? 1 : 0;
  const total = grammarDone + wordDone + readingDone;
  $('#heroProgress').style.width = `${total / 3 * 100}%`;
  $('#heroProgressText').textContent = `${total} / 3`;
  $('#knownWords').textContent = state.words.length;
  $('#vocabProgress').style.width = `${Math.min(state.words.length / 3600 * 100, 100)}%`;
  $('#vocabProgressText').textContent = state.words.length ? `已开始认识第 ${state.words.length} 个词` : '从第一个词开始';
  $('#readingProgress').style.width = state.reading ? '100%' : '0%';
  $('#readingProgressText').textContent = state.reading ? '已完成' : '未开始';
}

$$('.level-tab').forEach(button => button.addEventListener('click', () => renderGrammar(button.dataset.grammarLevel)));
$$('.vocab-level').forEach(button => button.addEventListener('click', () => { currentVocab = button.dataset.vocabLevel; wordIndex = 0; renderWord(); }));
$('#nextWord').addEventListener('click', () => { wordIndex = (wordIndex + 1) % vocabulary[currentVocab].length; renderWord(); });
$('#previousWord').addEventListener('click', () => { wordIndex = (wordIndex - 1 + vocabulary[currentVocab].length) % vocabulary[currentVocab].length; renderWord(); });
$('#markKnown').addEventListener('click', () => { const id = `${currentVocab}-${wordIndex}`; if (!state.words.includes(id)) { state.words.push(id); save(); toast('记下了。下次会在新句子里再遇见它。'); } else toast('这个词已经在你的学习记录里了。'); });
$('#toggleTranslation').addEventListener('click', (event) => { $('#translation').classList.toggle('visible'); event.currentTarget.textContent = $('#translation').classList.contains('visible') ? '收起译文' : '查看译文'; });
$('#completeReading').addEventListener('click', () => { state.reading = true; save(); toast('今日短文已完成。英语正在慢慢连成一片。'); });
$('#showPath').addEventListener('click', () => $('#pathPanel').scrollIntoView({ behavior: 'smooth', block: 'center' }));
$('#resetProgress').addEventListener('click', () => { if (window.confirm('清空当前浏览器里的学习进度？')) { state.grammar = []; state.words = []; state.reading = false; save(); toast('学习进度已清空。'); } });

renderGrammar(currentGrammar); renderWord(); updateProgress();
