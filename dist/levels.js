export const TOPIC_GROUPS = {
 beginner:{name:'Daily Life & Survival',topics:[
  {name:'Personal Introductions',details:'Name, age, origin, family members, pets, and languages spoken.'},
  {name:'Daily Routines',details:'Waking up, commuting, meals, household chores, and work or school schedules.'},
  {name:'Food & Dining',details:'Ordering at restaurants, dietary preferences, grocery shopping, and cooking.'},
  {name:'Weather & Directions',details:'Asking for locations, reading maps, and describing climate or daily forecasts.'},
  {name:'Shopping & Money',details:'Asking prices, paying, clothing sizes, and basic transactions.'},
  {name:'Health & Basic Needs',details:'Buying medicine, scheduling doctor appointments, and describing simple aches or tiredness.'}
 ]},
 intermediate:{name:'Socializing & Opinions',topics:[
  {name:'Travel & Transportation',details:'Booking hotels, navigating airports, planning vacations, and handling transit delays.'},
  {name:'Work & Career',details:'Job interviews, office communication, professions, ambitions, and workplace relationships.'},
  {name:'Hobbies & Free Time',details:'Sports, fitness, music, movies, books, and creative arts.'},
  {name:'Technology & Social Media',details:'Using apps, computers, internet culture, and digital communication.'},
  {name:'Current Events & News',details:'Local headlines, social trends, community events, and environmental concerns.'},
  {name:'Feelings & Relationships',details:'Expressing emotions, talking about friendships, dating, and resolving conflicts.'}
 ]},
 advanced:{name:'Abstract, Nuanced & Cultural',topics:[
  {name:'Politics & Society',details:'Government systems, civic rights, social justice, and international relations.'},
  {name:'Ethics & Philosophy',details:'Moral dilemmas, hypotheticals, cultural norms, and human behavior.'},
  {name:'Economics & Business',details:'Global markets, consumerism, financial planning, and industry trends.'},
  {name:'Science & Technology',details:'Artificial intelligence, medical breakthroughs, space exploration, and innovation.'},
  {name:'Arts & Literature',details:'Analyzing poetry, film subtext, regional idioms, and historical storytelling.'}
 ]}
};
export const LEVELS = {
 A1:{label:'Beginner',group:'beginner',guidance:'Use very common concrete words and a single short simple clause. Prefer present tense and basic statements or requests, roughly 4–10 English-equivalent words. Keep English options simple with clear factual differences. Avoid idioms and subordinate clauses.'},
 A2:{label:'Elementary',group:'beginner',guidance:'Use familiar everyday vocabulary and short routine exchanges. Simple past or future and one basic connector are appropriate, roughly 7–15 English-equivalent words. Keep distractors accessible and concretely different.'},
 B1:{label:'Intermediate',group:'intermediate',guidance:'Use common vocabulary in connected everyday situations, with a reason, opinion, plan, or experience. Use straightforward subordinate clauses and familiar tenses, roughly 8–25 English-equivalent words. Distractors should contain meaningful changes.'},
 B2:{label:'Upper intermediate',group:'intermediate',guidance:'Use more varied vocabulary and complex clauses to express viewpoints, contrast, uncertainty, or a hypothetical situation, roughly 12–30 English-equivalent words. Test precise differences in stance, agency, or intention.'},
 C1:{label:'Advanced',group:'advanced',guidance:'Use sophisticated but natural vocabulary, nuanced register, abstract reasoning, and complex syntax, roughly 15–35 English-equivalent words. Include contextual nuance without making the source underdetermined. Distractors may differ in implication or emphasis.'},
 C2:{label:'Proficient',group:'advanced',guidance:'Use highly precise, idiomatic, stylistically nuanced language with subtle distinctions in implication, attitude, or register, roughly 15–40 English-equivalent words. Avoid gratuitous obscurity. Provide enough context for one faithful translation; near-miss options should change a real nuance.'}
};
export function getLevel(code){const level=LEVELS[code];if(!Object.hasOwn(LEVELS,code))throw Error('Choose a level from A1 to C2.');return {...level,code,topics:TOPIC_GROUPS[level.group].topics,theme:TOPIC_GROUPS[level.group].name};}
export function chooseTopic(level,rng=Math.random){const topics=getLevel(level).topics;return topics[Math.floor(rng()*topics.length)];}
