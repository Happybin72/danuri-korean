/* Original practice data. Level labels are indicative learning guidance, not official assignments. */
(function () {
  const source = (id, title, url, description) => ({ id, title, url, description });
  const sources = [
    source('topik', 'TOPIK official practice materials', 'https://www.topik.go.kr/TWSTDY/TWSTDY0090.do', 'Official TOPIK practice page; TOPIK I uses listening and reading, while TOPIK II also includes writing.'),
    source('krdict', 'NIKL Korean-English Learners’ Dictionary', 'https://krdict.korean.go.kr/eng/mainAction?nation=eng', 'General learner-dictionary reference; app glosses and examples are project-authored, not verified dictionary entries.'),
    source('sejong', 'King Sejong Institute Foundation', 'https://www.iksi.or.kr/', 'Official Korean-language education institution; consulted for learner-oriented scope.')
  ];
  const vocabRows = `1|안녕하세요|hello|greeting
1|감사합니다|thank you|greeting
1|죄송합니다|I am sorry|greeting
1|네|yes|response
1|아니요|no|response
1|이름|name|people
1|나라|country|people
1|사람|person|people
1|친구|friend|people
1|가족|family|people
1|학교|school|place
1|집|home; house|place
1|회사|company; office|place
1|가게|shop|place
1|식당|restaurant|place
1|물|water|food
1|밥|rice; meal|food
1|커피|coffee|food
1|오늘|today|time
1|내일|tomorrow|time
1|어제|yesterday|time
1|좋다|to be good|adjective
1|크다|to be big|adjective
1|작다|to be small|adjective
1|가다|to go|action
2|오다|to come|action
2|먹다|to eat|action
2|마시다|to drink|action
2|보다|to see; watch|action
2|듣다|to listen|action
2|읽다|to read|action
2|쓰다|to write|action
2|공부하다|to study|education
2|일하다|to work|work
2|만나다|to meet|action
2|사다|to buy|shopping
2|팔다|to sell|shopping
2|시간|time|time
2|주말|weekend|time
2|아침|morning|time
2|저녁|evening|time
2|날씨|weather|nature
2|비|rain|nature
2|눈|snow|nature
2|덥다|to be hot|weather
2|춥다|to be cold|weather
2|빠르다|to be fast|adjective
3|느리다|to be slow|adjective
3|바쁘다|to be busy|daily life
3|피곤하다|to be tired|daily life
3|건강|health|health
3|병원|hospital|health
3|약|medicine|health
3|운동|exercise|health
3|여행|travel|travel
3|공항|airport|travel
3|호텔|hotel|travel
3|예약|reservation|service
3|표|ticket|travel
3|길|road; way|place
3|지도|map|travel
3|사진|photograph|media
3|음악|music|culture
3|영화|movie|culture
3|취미|hobby|daily life
3|약속|appointment; promise|daily life
3|선물|gift|shopping
3|가격|price|shopping
3|할인|discount|shopping
3|문제|problem; question|education
3|방법|method|general
4|경험|experience|general
4|관계|relationship|society
4|문화|culture|society
4|환경|environment|society
4|교육|education|society
4|경제|economy|society
4|기술|technology|society
4|정보|information|society
4|선택|choice|general
4|결정|decision|general
4|변화|change|general
4|증가|increase|general
4|감소|decrease|general
4|필요하다|to be necessary|general
4|가능하다|to be possible|general
4|중요하다|to be important|general
4|다양하다|to be diverse|general
4|특별하다|to be special|general
4|편리하다|to be convenient|daily life
4|불편하다|to be inconvenient|daily life
4|해결하다|to solve|general
4|준비하다|to prepare|general
4|설명하다|to explain|general
4|비교하다|to compare|general
4|이용하다|to use|general
5|영향|influence; effect|society
5|원인|cause|general
5|결과|result|general
5|목적|purpose|general
5|효과|effect|general
5|현상|phenomenon|society
5|문제점|problematic point|society
5|장점|advantage|general
5|단점|disadvantage|general
5|책임|responsibility|society
5|기회|opportunity|general
5|요구|demand; requirement|general
5|제안|proposal|general
5|참여|participation|society
5|실천|practice; action|society
5|개선|improvement|general
5|발전|development|society
5|유지|maintenance|general
5|확대|expansion|general
5|감정|emotion|psychology
5|태도|attitude|psychology
5|판단|judgment|general
5|표현|expression|language
5|조사|survey; investigation|society
5|통계|statistics|society
6|인식|perception; awareness|society
6|가치관|values|society
6|갈등|conflict|society
6|공감|empathy|society
6|창의성|creativity|society
6|지속 가능성|sustainability|society
6|효율성|efficiency|general
6|공정성|fairness|society
6|다문화|multiculturalism|society
6|고령화|population aging|society
6|저출산|low birth rate|society
6|소비자|consumer|economy
6|생산자|producer|economy
6|정책|policy|society
6|제도|system; institution|society
6|권리|right|society
6|의무|duty|society
6|관점|perspective|general
6|근거|basis; evidence|general
6|논리적|logical|general
6|객관적|objective|general
6|주관적|subjective|general
6|보편적|universal|general
6|상대적|relative|general
6|대안|alternative|general
6|협력|cooperation|society
6|분석|analysis|general
6|기준|standard; criterion|general
6|전략|strategy|general`;
  const vocabExamples = `안녕하세요. 처음 뵙겠습니다.|Hello. Nice to meet you.
도와주셔서 감사합니다.|Thank you for helping me.
늦어서 죄송합니다.|I am sorry for being late.
네, 알겠습니다.|Yes, I understand.
아니요, 괜찮습니다.|No, it is okay.
제 이름은 소피아입니다.|My name is Sofia.
어느 나라에서 왔어요?|Which country are you from?
사람들이 공원에서 쉬고 있어요.|People are resting in the park.
친구와 카페에서 만났어요.|I met a friend at a cafe.
가족과 함께 저녁을 먹어요.|I eat dinner with my family.
학교는 집에서 가까워요.|The school is close to home.
저는 주말에 집에 있어요.|I am at home on weekends.
회사는 지하철역 옆에 있어요.|The office is next to the subway station.
그 가게는 밤 열 시에 닫아요.|That shop closes at ten p.m.
이 식당의 비빔밥이 맛있어요.|The bibimbap at this restaurant is delicious.
목이 말라서 물을 마셨어요.|I was thirsty, so I drank water.
아침에 밥을 먹었어요.|I ate rice for breakfast.
저는 커피보다 차를 좋아해요.|I like tea more than coffee.
오늘은 일이 많아요.|I have a lot of work today.
내일 다시 전화할게요.|I will call again tomorrow.
어제는 비가 많이 왔어요.|It rained a lot yesterday.
이 영화는 정말 좋아요.|This movie is really good.
새 가방이 아주 커요.|The new bag is very big.
이 방은 조금 작아요.|This room is a little small.
저녁에 운동하러 가요.|I go to exercise in the evening.
친구가 우리 집에 와요.|A friend comes to our house.
점심으로 김밥을 먹었어요.|I ate gimbap for lunch.
더우면 물을 많이 마셔요.|I drink plenty of water when it is hot.
주말에 드라마를 봐요.|I watch dramas on weekends.
선생님의 설명을 잘 들으세요.|Listen carefully to the teacher’s explanation.
저는 매일 한국어 책을 읽어요.|I read a Korean book every day.
이름을 종이에 쓰세요.|Write your name on the paper.
시험을 위해 열심히 공부해요.|I study hard for the test.
언니는 은행에서 일해요.|My older sister works at a bank.
역 앞에서 친구를 만났어요.|I met my friend in front of the station.
시장에서 과일을 샀어요.|I bought fruit at the market.
이 가게는 빵을 팔아요.|This shop sells bread.
시간이 없어서 택시를 탔어요.|I took a taxi because I had no time.
이번 주말에 등산할 거예요.|I will hike this weekend.
아침 일곱 시에 일어났어요.|I woke up at seven in the morning.
저녁에 가족과 산책해요.|I take a walk with my family in the evening.
오늘 날씨가 맑고 따뜻해요.|The weather is clear and warm today.
비가 와서 우산을 가져갔어요.|It rained, so I took an umbrella.
겨울에는 눈이 자주 와요.|It often snows in winter.
여름에는 날씨가 아주 더워요.|The weather is very hot in summer.
겨울 아침은 추워요.|Winter mornings are cold.
지하철이 버스보다 빨라요.|The subway is faster than the bus.
인터넷이 너무 느려요.|The internet is too slow.
이번 주는 회사 일이 바빠요.|I am busy with work this week.
어제 늦게 자서 피곤해요.|I am tired because I slept late yesterday.
건강을 위해 매일 걸어요.|I walk every day for my health.
아프면 병원에 가세요.|Go to the hospital if you are sick.
식사 후에 약을 드세요.|Take the medicine after meals.
아침 운동을 시작했어요.|I started morning exercise.
여름에 부산으로 여행을 갔어요.|I traveled to Busan in summer.
공항에 두 시간 일찍 도착했어요.|I arrived at the airport two hours early.
호텔 방을 온라인으로 예약했어요.|I booked a hotel room online.
식당 예약을 확인해 주세요.|Please confirm the restaurant reservation.
기차표를 미리 샀어요.|I bought the train ticket in advance.
이 길로 곧장 가세요.|Go straight along this road.
지도에서 박물관을 찾았어요.|I found the museum on the map.
여행 사진을 친구에게 보냈어요.|I sent travel photos to my friend.
조용한 음악을 들으며 책을 읽어요.|I read while listening to quiet music.
주말에 친구와 영화를 봤어요.|I watched a movie with a friend on the weekend.
제 취미는 그림 그리기예요.|My hobby is drawing.
오후 세 시에 약속이 있어요.|I have an appointment at three p.m.
생일 선물을 골랐어요.|I chose a birthday gift.
가격이 생각보다 비싸요.|The price is more expensive than I expected.
학생은 할인받을 수 있어요.|Students can get a discount.
이 문제를 함께 풀어요.|Let’s solve this problem together.
더 좋은 방법을 찾아봅시다.|Let’s find a better method.
한국에서 산 경험이 있어요.|I have experience living in Korea.
좋은 관계를 오래 유지하고 싶어요.|I want to maintain a good relationship for a long time.
음식 문화는 나라마다 달라요.|Food culture differs by country.
환경을 지키기 위해 분리수거해요.|I recycle to protect the environment.
교육은 미래를 위한 투자예요.|Education is an investment in the future.
경제 뉴스에서 물가를 다뤘어요.|The economic news covered prices.
새 기술이 생활을 편리하게 해요.|New technology makes life convenient.
필요한 정보를 인터넷에서 찾았어요.|I found the information on the internet.
선택하기 전에 장단점을 생각하세요.|Consider the advantages and disadvantages before making a choice.
중요한 결정은 충분히 생각한 뒤에 하세요.|Make important decisions after thinking carefully.
계절이 바뀌면서 날씨에 변화가 생겼어요.|The weather changed as the season changed.
이용자 수가 크게 증가했어요.|The number of users increased greatly.
쓰레기 양이 작년에 비해 감소했어요.|The amount of waste decreased compared with last year.
여권이 필요해요.|A passport is necessary.
온라인으로 신청하는 것이 가능해요.|It is possible to apply online.
안전은 무엇보다 중요해요.|Safety is more important than anything.
도서관에는 다양한 책이 있어요.|There are diverse books in the library.
오늘은 특별한 계획이 없어요.|I have no special plans today.
이 앱은 사용하기 편리해요.|This app is convenient to use.
작은 글씨는 읽기 불편해요.|Small print is inconvenient to read.
문제를 함께 해결합시다.|Let’s solve the problem together.
발표 전에 자료를 준비했어요.|I prepared materials before the presentation.
선생님이 규칙을 쉽게 설명했어요.|The teacher explained the rule clearly.
두 제품의 가격을 비교해 보세요.|Compare the prices of the two products.
회원은 이 서비스를 무료로 이용할 수 있어요.|Members can use this service for free.
광고가 소비자에게 큰 영향을 줘요.|Advertising has a big influence on consumers.
사고 원인을 조사하고 있어요.|They are investigating the cause of the accident.
노력한 결과가 좋았어요.|The result of the effort was good.
이 행사의 목적은 교류를 늘리는 것입니다.|The purpose of this event is to increase exchange.
운동은 스트레스 해소에 효과가 있어요.|Exercise is effective for relieving stress.
이 현상은 도시에서 자주 나타나요.|This phenomenon often appears in cities.
이 계획에는 몇 가지 문제점이 있어요.|This plan has several problems.
자전거의 장점은 환경에 좋다는 거예요.|An advantage of bicycles is that they are good for the environment.
이 방법의 단점은 시간이 오래 걸린다는 거예요.|The disadvantage of this method is that it takes a long time.
자신의 선택에 책임을 져야 해요.|You should take responsibility for your choice.
이번 경험은 좋은 기회가 되었어요.|This experience became a good opportunity.
고객의 요구를 먼저 들어야 해요.|We should listen to customers’ demands first.
회의에서 새로운 제안을 했어요.|I made a new proposal at the meeting.
많은 학생이 행사에 참여했어요.|Many students participated in the event.
작은 습관을 실천하는 것이 중요해요.|It is important to put small habits into practice.
서비스를 계속 개선하고 있어요.|They are continuously improving the service.
과학 기술의 발전이 빨라요.|The development of science and technology is fast.
건강을 유지하려면 잘 쉬어야 해요.|To maintain health, you need to rest well.
서비스를 더 넓은 지역으로 확대했어요.|They expanded the service to a wider area.
그의 감정을 이해하려고 노력했어요.|I tried to understand his feelings.
상대방의 태도가 친절했어요.|The other person’s attitude was kind.
자료를 보고 판단해야 해요.|We should make a judgment after looking at the data.
생각을 글로 표현하는 연습을 해요.|I practice expressing my thoughts in writing.
학교에서 학생 만족도 조사를 했어요.|The school conducted a student satisfaction survey.
통계는 변화의 방향을 보여 줍니다.|Statistics show the direction of change.
환경 문제에 대한 인식이 높아졌어요.|Awareness of environmental issues has increased.
사람마다 가치관이 다를 수 있어요.|People can have different values.
대화로 갈등을 해결할 수 있어요.|Conflict can be resolved through dialogue.
친구의 마음에 공감해 주었어요.|I empathized with my friend’s feelings.
창의성은 다양한 경험에서 나올 수 있어요.|Creativity can come from diverse experiences.
도시는 지속 가능성을 고려해야 해요.|Cities should consider sustainability.
이 방법은 시간 면에서 효율성이 높아요.|This method is highly efficient in terms of time.
모든 사람에게 공정성이 보장되어야 해요.|Fairness should be guaranteed for everyone.
다문화 사회에서는 서로를 존중해야 해요.|In a multicultural society, we should respect one another.
고령화에 맞는 복지 정책이 필요해요.|Welfare policies suited to population aging are needed.
저출산 문제를 함께 해결해야 해요.|We need to solve the low birth rate problem together.
소비자는 제품 정보를 확인해야 해요.|Consumers should check product information.
생산자는 안전한 제품을 만들어야 해요.|Producers should make safe products.
정부는 새로운 환경 정책을 발표했어요.|The government announced a new environmental policy.
좋은 제도는 시민의 삶을 돕습니다.|A good system helps citizens’ lives.
모든 어린이는 교육받을 권리가 있어요.|Every child has the right to receive education.
시민에게는 법을 지킬 의무가 있어요.|Citizens have a duty to obey the law.
다른 관점에서도 문제를 봅시다.|Let’s view the issue from another perspective.
주장을 뒷받침할 근거가 필요해요.|Evidence is needed to support the claim.
글을 논리적으로 구성하세요.|Organize the writing logically.
객관적 자료를 사용해 설명했어요.|I explained it using objective data.
그 평가는 개인적으로 주관적일 수 있어요.|That assessment can be subjective personally.
교육은 보편적 권리라고 생각해요.|I think education is a universal right.
행복의 기준은 사람마다 상대적이에요.|Standards for happiness are relative for each person.
문제를 해결할 대안을 찾아야 해요.|We need to find an alternative to solve the problem.
팀원들이 협력해서 행사를 준비했어요.|Team members cooperated to prepare the event.
자료를 분석한 뒤 결론을 내렸어요.|We reached a conclusion after analyzing the data.
평가 기준을 미리 알려 주세요.|Please tell us the evaluation criteria in advance.
장기적인 전략을 세워야 해요.|We need to establish a long-term strategy.`.trim().split('\n').map(r => r.split('|'));
  const items = vocabRows.trim().split('\n').map((r, i) => { const [level, korean, english, topic] = r.split('|'); const [example, translation] = vocabExamples[i]; return { id: `v${String(i + 1).padStart(3, '0')}`, kind: 'vocabulary', level: +level, korean, english, example, translation, topic, sourceId: 'krdict' }; });
  const add = (kind, rows, prefix) => rows.trim().split('\n').forEach((r, i) => { const [level, korean, english, example, translation, topic] = r.split('|'); items.push({ id: `${prefix}${String(i + 1).padStart(3, '0')}`, kind, level: +level, korean, english, example, translation, topic, sourceId: kind === 'grammar' ? 'sejong' : 'krdict' }); });
  add('expression', `1|안녕하세요.|Hello.|안녕하세요, 저는 민수예요.|Hello, I am Minsu.|greeting
1|처음 뵙겠습니다.|Nice to meet you.|처음 뵙겠습니다. 제 이름은 리나예요.|Nice to meet you. My name is Rina.|greeting
1|괜찮아요.|It is okay.|늦어서 미안해요. 괜찮아요.|Sorry I am late. It is okay.|response
1|주세요.|Please give me...|물 한 잔 주세요.|Please give me a glass of water.|service
1|얼마예요?|How much is it?|이 사과는 얼마예요?|How much is this apple?|shopping
2|어디에 있어요?|Where is it?|화장실이 어디에 있어요?|Where is the restroom?|place
2|같이 가요.|Let us go together.|점심을 먹으러 같이 가요.|Let us go eat lunch together.|invitation
2|도와주세요.|Please help me.|길을 모르겠어요. 도와주세요.|I do not know the way. Please help me.|help
2|다시 말해 주세요.|Please say it again.|잘 못 들었어요. 다시 말해 주세요.|I did not hear well. Please say it again.|communication
2|천천히 말해 주세요.|Please speak slowly.|한국어를 천천히 말해 주세요.|Please speak Korean slowly.|communication
3|약속이 있어요.|I have an appointment.|오늘 저녁에는 약속이 있어요.|I have an appointment this evening.|daily life
3|시간이 괜찮아요?|Is the time okay?|내일 두 시에 시간이 괜찮아요?|Is two o’clock tomorrow okay?|planning
3|생각해 볼게요.|I will think about it.|좋은 제안이에요. 생각해 볼게요.|That is a good suggestion. I will think about it.|response
3|걱정하지 마세요.|Do not worry.|시험은 잘 볼 거예요. 걱정하지 마세요.|You will do well on the exam. Do not worry.|support
3|조심해서 가세요.|Take care on your way.|비가 와요. 조심해서 가세요.|It is raining. Take care on your way.|farewell
4|제 생각에는요.|In my opinion.|제 생각에는 이 방법이 더 좋아요.|In my opinion, this method is better.|opinion
4|그럴 수도 있어요.|That could be so.|바쁠 수도 있어요. 그럴 수도 있어요.|They might be busy. That could be so.|response
4|말씀해 주셔서 감사합니다.|Thank you for telling me.|자세히 말씀해 주셔서 감사합니다.|Thank you for explaining it to me.|formal
4|확인해 보겠습니다.|I will check.|일정을 확인해 보겠습니다.|I will check the schedule.|work
4|도움이 되다.|to be helpful|이 정보가 공부에 도움이 돼요.|This information is helpful for studying.|general
5|한편으로는|on the one hand|한편으로는 편리하지만 비용이 높아요.|On the one hand it is convenient, but it is expensive.|writing
5|결론적으로|in conclusion|결론적으로 참여가 필요합니다.|In conclusion, participation is necessary.|writing
5|예를 들어|for example|예를 들어 대중교통을 이용할 수 있어요.|For example, one can use public transport.|writing
5|반면에|on the other hand|반면에 시간이 더 걸릴 수 있어요.|On the other hand, it can take more time.|writing
5|그에 비해|compared with that|그에 비해 이 방법은 간단해요.|Compared with that, this method is simple.|writing
6|문제를 제기하다.|to raise an issue|연구자는 안전 문제를 제기했어요.|The researcher raised a safety issue.|academic
6|의견을 수렴하다.|to gather opinions|시민의 의견을 수렴해야 합니다.|We should gather citizens’ opinions.|academic
6|영향을 미치다.|to have an influence|환경에 큰 영향을 미칩니다.|It has a large influence on the environment.|academic
6|고려할 필요가 있다.|there is a need to consider|비용도 고려할 필요가 있습니다.|There is a need to consider cost too.|academic
6|균형을 이루다.|to achieve a balance|일과 휴식의 균형을 이루어야 해요.|We need to achieve a balance between work and rest.|academic`, 'e');
  add('grammar', `1|이에요/예요|is; am; are|저는 학생이에요.|I am a student.|copula
1|은/는|topic marker|오늘은 날씨가 좋아요.|As for today, the weather is good.|particle
1|이/가|subject marker|고양이가 작아요.|The cat is small.|particle
1|을/를|object marker|책을 읽어요.|I read a book.|particle
1|에|at; to|학교에 가요.|I go to school.|particle
2|에서|at; in (place of action)|도서관에서 공부해요.|I study at the library.|particle
2|하고|and; with|친구하고 영화를 봐요.|I watch a movie with a friend.|connection
2|아요/어요|present polite ending|저는 매일 운동해요.|I exercise every day.|ending
2|았/었어요|past polite ending|어제 영화를 봤어요.|I watched a movie yesterday.|tense
2|-(으)세요|please do|여기에 앉으세요.|Please sit here.|request
3|-(으)ㄹ 거예요|will; going to|내일 친구를 만날 거예요.|I will meet a friend tomorrow.|future
3|-고 싶다|want to|한국에 가고 싶어요.|I want to go to Korea.|desire
3|-아/어 주세요|please do for me|문을 열어 주세요.|Please open the door.|request
3|-아/어도 되다|may; be allowed to|여기에서 사진을 찍어도 돼요?|May I take a photo here?|permission
3|-(으)면|if; when|시간이 있으면 전화해요.|Call me if you have time.|condition
4|-기 때문에|because|비가 오기 때문에 집에 있어요.|I stay home because it is raining.|reason
4|-는데|background; contrast|이 책은 어려운데 재미있어요.|This book is difficult but interesting.|connection
4|-(으)ㄴ 적이 있다|have experienced|제주도에 간 적이 있어요.|I have been to Jeju Island.|experience
4|-(으)려고 하다|intend to|주말에 방을 청소하려고 해요.|I intend to clean my room this weekend.|intention
4|-아/어지다|become|날씨가 따뜻해졌어요.|The weather became warm.|change
5|-기는 하지만|although|비싸기는 하지만 품질이 좋아요.|Although it is expensive, the quality is good.|contrast
5|-(으)ㄹ 뿐만 아니라|not only... but also|한국어를 배울 뿐만 아니라 중국어도 배워요.|I learn not only Korean but also Chinese.|addition
5|-도록|so that; until|잊지 않도록 메모했어요.|I made a note so that I would not forget.|purpose
5|-(으)ㄴ/는 반면에|whereas|도시는 편리한 반면에 복잡해요.|The city is convenient whereas it is crowded.|contrast
5|-(으)ㄴ/는 셈이다|it amounts to|매일 한 시간씩 읽으면 일주일에 책 한 권을 읽는 셈이에요.|Reading an hour daily amounts to a book a week.|inference
6|-(으)ㄹ수록|the more... the more|연습할수록 자신감이 생겨요.|The more you practice, the more confidence you gain.|degree
6|-더라도|even if|어렵더라도 끝까지 해 보세요.|Even if it is difficult, try to finish it.|concession
6|-(으)ㄴ/는 데 비해|compared with|작년에 비해 비용이 줄었어요.|Costs fell compared with last year.|comparison
6|-고자 하다|intend to (formal)|문제를 해결하고자 노력합니다.|We strive to solve the problem.|formal intention
6|-(으)ㅁ으로써|by doing|대화함으로써 서로를 이해할 수 있어요.|By talking, we can understand each other.|means`, 'g');
  const q = (id, exam, section, level, prompt, passage, audio, options, answer, explanation, relatedId) => ({ id, exam, section, level, prompt, ...(passage ? { passage } : {}), ...(audio ? { audio } : {}), options, answer, explanation, relatedId });
  const questions = [
    q('q001','I','listening',1,'다음을 듣고 알맞은 것을 고르세요.','', '안녕하세요. 저는 리나예요.', ['저는 리나예요.','저는 학생이에요.','안녕히 가세요.','고맙습니다.'],0,'The speaker introduces herself as Rina.','v001'),
    q('q002','I','reading',1,'빈칸에 알맞은 것을 고르세요.','저는 물을 ____.',null,['먹어요','마셔요','봐요','읽어요'],1,'물을 마시다 means “to drink water.”','v016'),
    q('q003','I','listening',1,'다음을 듣고 맞는 것을 고르세요.','', '이 사과는 얼마예요? 삼천 원이에요.', ['사과는 1,000원이에요.','사과는 2,000원이에요.','사과는 3,000원이에요.','사과는 4,000원이에요.'],2,'삼천 원 is 3,000 won.','e005'),
    q('q004','I','reading',1,'다음과 같은 것은 무엇입니까?','비가 와서 쓰는 것입니다.',null,['우산','지도','표','약'],0,'An umbrella is used when it rains.','v042'),
    q('q005','I','reading',2,'빈칸에 알맞은 것을 고르세요.','도서관__ 공부해요.',null,['에','에서','을','하고'],1,'Use 에서 for the place where an action happens.','g006'),
    q('q006','I','listening',2,'다음을 듣고 알맞은 것을 고르세요.','', '내일 두 시에 만날까요? 네, 좋아요.', ['오늘 만나요.','내일 두 시에 만나요.','내일 세 시에 만나요.','만나지 않아요.'],1,'They agree to meet at 2 p.m. tomorrow.','v020'),
    q('q007','I','reading',2,'다음 안내문에 맞는 것을 고르세요.','도서관: 음식물을 가지고 들어오지 마세요.',null,['음식을 먹어도 됩니다.','음식을 사야 합니다.','음식을 가지고 들어가면 안 됩니다.','음식을 나누어 줍니다.'],2,'The notice prohibits bringing food into the library.','g010'),
    q('q008','I','reading',2,'빈칸에 알맞은 것을 고르세요.','어제 영화를 ____.',null,['봐요','봤어요','볼 거예요','보고 싶어요'],1,'봤어요 is the polite past form of 보다.','g009'),
    q('q009','I','listening',2,'다음을 듣고 여자의 직업을 고르세요.','', '저는 학교에서 학생들을 가르쳐요.', ['의사','선생님','요리사','운전사'],1,'A person who teaches students at school is a teacher.','v011'),
    q('q010','I','reading',2,'밑줄 친 문법의 의미로 알맞은 것을 고르세요.','시간이 있으면 전화해요.',null,['이유','대조','조건','목적'],2,'-면 expresses a condition: “if/when there is time.”','g015'),
    q('q011','I','reading',3,'빈칸에 알맞은 것을 고르세요.','주말에 제주도 여행을 계획____.',null,['가요','해요','봐요','읽어요'],1,'계획하다 means “to plan.” 계획해요 completes the verb: “I am planning a trip to Jeju for the weekend.”','v058'),
    q('q012','I','listening',3,'다음을 듣고 남자가 할 일을 고르세요.','', '방이 더러워서 오늘 청소할 거예요.', ['방을 청소해요.','방을 예약해요.','방을 팔아요.','방을 찍어요.'],0,'The man says he will clean because the room is dirty.','g011'),
    q('q013','I','reading',3,'다음 표지판의 뜻으로 알맞은 것을 고르세요.','사진 촬영 금지',null,['사진을 찍으세요.','사진을 사세요.','사진을 찍지 마세요.','사진을 보여 주세요.'],2,'금지 means prohibition.','v068'),
    q('q014','I','reading',3,'제안 표현 -(으)ㄹ까요를 사용해 문장을 완성하세요.','친구하고 영화를 보고 싶어요. 같이 ____?',null,['가요','가세요','갈까요','갔어요'],2,'The requested suggestion pattern -(으)ㄹ까요 gives 갈까요?: “Shall we go together?”','e007'),
    q('q015','I','listening',3,'다음을 듣고 알맞은 것을 고르세요.','', '감기에 걸렸어요. 병원에 가서 약을 받으세요.', ['운동을 하세요.','병원에 가세요.','여행을 가세요.','쇼핑을 하세요.'],1,'The advice is to go to a hospital for medicine.','v056'),
    q('q016','I','reading',3,'글의 내용과 같은 것을 고르세요.','민지는 버스를 놓쳐서 회사에 늦었습니다.',null,['민지는 버스를 탔습니다.','민지는 회사에 일찍 갔습니다.','민지는 버스 때문에 늦었습니다.','민지는 회사를 그만뒀습니다.'],2,'The missed bus caused her lateness.','v034'),
    q('q017','I','reading',3,'빈칸에 알맞은 것을 고르세요.','여기에서 사진을 찍어도 ____.',null,['돼요','싶어요','있어요','해요'],0,'-아/어도 되다 asks or grants permission.','g014'),
    q('q018','I','listening',3,'다음을 듣고 여자의 기분을 고르세요.','', '내일 시험이 있는데 아직 공부를 못 했어요.', ['기뻐요','걱정돼요','배고파요','심심해요'],1,'Not having studied before an exam implies worry.','e014'),
    q('q019','I','reading',2,'빈칸에 알맞은 것을 고르세요.','한국어를 천천히 말해 ____.',null,['주세요','싶어요','있어요','가요'],0,'-아/어 주세요 makes a polite request.','e010'),
    q('q020','I','reading',1,'다음 중 장소를 나타내는 것을 고르세요.','',null,['학교','친구','오늘','물'],0,'학교 is a place: school.','v011'),
    q('q021','II','reading',4,'빈칸에 알맞은 것을 고르세요.','비가 오기 ____ 행사가 취소되었습니다.',null,['때문에','위해서','보다','까지'],0,'-기 때문에 expresses a reason.','g016'),
    q('q022','II','listening',4,'다음을 듣고 여자의 의견을 고르세요.','', '온라인 수업은 편리하지만 학생들과 직접 이야기하기 어려워요.', ['온라인 수업은 필요 없습니다.','온라인 수업은 장점과 단점이 있습니다.','온라인 수업은 너무 비쌉니다.','온라인 수업은 항상 재미있습니다.'],1,'She contrasts convenience with limited direct interaction.','v094'),
    q('q023','II','reading',4,'글의 중심 내용으로 알맞은 것을 고르세요.','우리 동네에 새 공원이 생긴 뒤 주민들이 산책과 운동을 더 자주 하게 되었다.',null,['공원을 없애야 한다.','주민들이 이사 갔다.','새 공원이 생활에 변화를 주었다.','운동은 위험하다.'],2,'The new park changed residents’ daily activity.','v085'),
    q('q024','II','reading',4,'빈칸에 알맞은 것을 고르세요.','이 책은 어려____ 재미있어요.',null,['거나','운데','도록','더라도'],1,'-는데 can link background or contrast; 어렵다 becomes 어려운데 before this ending.','g017'),
    q('q025','II','listening',4,'다음을 듣고 알맞은 것을 고르세요.','', '회의 시간은 세 시에서 네 시로 변경되었습니다.', ['회의가 취소되었습니다.','회의가 한 시간 늦어졌습니다.','회의가 한 시간 빨라졌습니다.','회의는 두 시간입니다.'],1,'The meeting moved from 3 to 4, one hour later.','v084'),
    q('q026','II','reading',4,'다음 문장과 의미가 같은 것을 고르세요.','저는 제주도에 간 적이 있습니다.',null,['저는 제주도에 갈 예정입니다.','저는 제주도에 지금 있습니다.','저는 전에 제주도에 갔습니다.','저는 제주도에 가고 싶지 않습니다.'],2,'-(으)ㄴ 적이 있다 expresses past experience.','g018'),
    q('q027','II','reading',5,'글의 내용과 같은 것을 고르세요.','조사 결과, 재택근무자는 출퇴근 시간이 줄어든 것을 가장 큰 장점으로 꼽았다. 반면 동료와의 소통 부족을 단점으로 꼽았다.',null,['재택근무자는 소통이 더 쉽다고 생각했다.','출퇴근 시간 단축은 장점으로 언급되었다.','조사에는 재택근무자가 없었다.','재택근무자는 단점이 없었다.'],1,'Commuting-time reduction was named the greatest benefit.','v118'),
    q('q028','II','listening',5,'다음을 듣고 알맞은 것을 고르세요.','', '이 정책의 목적은 청년들이 안정적으로 일자리를 찾도록 돕는 것입니다.', ['청년 고용을 돕는 것이다.','일자리를 줄이는 것이다.','정책을 폐지하는 것이다.','통계를 만드는 것이다.'],0,'The stated purpose is supporting young people’s job search.','v105'),
    q('q029','II','reading',5,'빈칸에 알맞은 것을 고르세요.','이 제품은 비싸기는 ____ 오래 사용할 수 있습니다.',null,['하지만','때문에','도록','더라도'],0,'-기는 하지만 expresses “although.”','g021'),
    q('q030','II','reading',5,'다음 글 뒤에 이어질 내용으로 알맞은 것을 고르세요.','대중교통 이용은 개인의 교통비를 줄일 수 있다. 그러나 모든 지역에서 편리한 것은 아니다.',null,['따라서 이용 시간을 늘려야 한다.','예를 들어 주차장을 더 만들어야 한다.','한편 자동차 이용이 늘어날 수 있다.','반면에 노선이 부족한 지역도 있다.'],3,'The contrast is completed by the limitation that some areas lack enough routes.','e021'),
    q('q031','II','listening',5,'다음을 듣고 남자의 태도를 고르세요.','', '제안의 취지는 이해하지만, 예산을 먼저 검토해야 한다고 생각합니다.', ['무조건 찬성한다.','예산 검토가 필요하다고 본다.','제안을 이해하지 못한다.','회의를 취소하고 싶다.'],1,'He understands the proposal but wants budget review first.','v110'),
    q('q032','II','reading',5,'빈칸에 알맞은 것을 고르세요.','저는 한국어를 배울 ____ 중국어도 배워요.',null,['보다','뿐만 아니라','때문에','더라도'],1,'-(으)ㄹ 뿐만 아니라 means “not only... but also”; 배울 뿐만 아니라 links the two actions.','g022'),
    q('q033','II','reading',6,'글의 주장으로 알맞은 것을 고르세요.','기술이 발전할수록 개인 정보 보호 제도도 함께 강화되어야 한다. 편리함만을 이유로 정보를 무분별하게 수집해서는 안 된다.',null,['정보 수집을 늘려야 한다.','기술 발전을 멈춰야 한다.','편리함보다 개인정보 보호도 고려해야 한다.','제도는 필요 없다.'],2,'The passage argues for privacy protection alongside technological progress.','v139'),
    q('q034','II','listening',6,'다음을 듣고 알맞은 것을 고르세요.','', '다문화 사회에서 서로 다른 생활 방식을 이해하려는 태도가 갈등을 줄이는 데 중요합니다.', ['같은 생활 방식만 인정해야 한다.','이해하는 태도가 갈등 완화에 중요하다.','갈등은 항상 늘어난다.','문화 차이는 없애야 한다.'],1,'Understanding differing lifestyles helps reduce conflict.','v130'),
    q('q035','II','reading',6,'빈칸에 알맞은 것을 고르세요.','연습할____ 발표에 대한 자신감이 높아집니다.',null,['때문에','수록','더라도','고자'],1,'-(으)ㄹ수록 means “the more..., the more....”','g026'),
    q('q036','II','reading',6,'다음 글의 구조로 알맞은 것을 고르세요.','먼저 문제의 원인을 분석했다. 다음으로 세 가지 대안을 비교했다. 마지막으로 가장 효율적인 방법을 선택했다.',null,['시간 순서의 문제 해결 과정','인물 소개','장소 안내','반대 의견만 제시'],0,'The text presents a sequenced problem-solving process.','v145'),
    q('q037','II','listening',6,'다음을 듣고 알맞은 것을 고르세요.','', '비용이 조금 늘어나더라도 안전 기준은 낮추지 말아야 합니다.', ['안전 기준을 낮춰야 한다.','비용과 관계없이 안전을 지켜야 한다.','비용을 전혀 생각하지 말아야 한다.','기준을 없애야 한다.'],1,'-더라도 means even if; safety should remain protected despite higher cost.','g027'),
    q('q038','II','reading',6,'빈칸에 알맞은 것을 고르세요.','시민의 의견을 ____ 정책을 보완했습니다.',null,['수렴함으로써','수렴더라도','수렴려고','수렴는데'],0,'-(으)ㅁ으로써 expresses a means: by gathering opinions.','e027'),
    q('q039','II','reading',6,'다음 글에서 알 수 있는 것을 고르세요.','한 연구는 충분한 휴식이 창의적인 문제 해결에 도움이 된다고 밝혔다. 다만 휴식의 방식은 개인의 생활 환경에 따라 달라질 수 있다.',null,['모든 사람에게 같은 휴식이 필요하다.','휴식은 창의성과 관계없다.','휴식 방식은 개인에 따라 다를 수 있다.','생활 환경은 변하지 않는다.'],2,'The passage explicitly says rest methods can differ by personal environment.','v127'),
    q('q040','II','reading',6,'빈칸에 알맞은 것을 고르세요.','저는 문제를 해결____ 다양한 의견을 들었습니다.',null,['하지만','때문에','수록','하려고'],3,'-(으)려고 하다 expresses intention; 해결하려고 means “in order to solve.”','g019')
  ];
  // Keep correct-answer positions evenly distributed while retaining the original question meaning.
  const moveAnswer = (id, next) => { const item = questions.find(x => x.id === id); const previous = item.answer; [item.options[previous], item.options[next]] = [item.options[next], item.options[previous]]; item.answer = next; };
  ['q002', 'q005', 'q006', 'q008', 'q009', 'q015', 'q018'].forEach(id => moveAnswer(id, 3));
  moveAnswer('q004', 3);
  const writing = [
    { id: 'w001', exam: 'II', prompt: '다음 주제에 대해 자신의 의견을 400~500자로 쓰십시오. 지역 도서관의 운영 시간을 늘리는 것에 찬성하는지 반대하는지, 두 가지 근거를 들어 쓰십시오.', modelAnswer: '나는 지역 도서관의 운영 시간을 늘리는 것에 찬성한다. 첫째, 낮에 일하거나 수업을 듣는 사람들도 저녁에 도서관을 이용할 수 있다. 특히 시험을 준비하는 학생과 직장인은 조용히 공부할 공간이 필요하다. 둘째, 도서관은 책을 빌리는 곳뿐 아니라 지역 주민이 정보를 얻고 문화 활동에 참여하는 공간이다. 운영 시간이 길어지면 강연이나 독서 모임에도 더 많은 사람이 참여할 수 있다. 또한 집에서 공부하기 어려운 청소년에게 안전한 학습 공간을 제공할 수 있다. 이렇게 하면 지역 안에서 세대가 만나고 서로의 경험을 나눌 기회도 늘어난다. 물론 인력과 비용을 고려해야 한다. 그러나 이용자가 많은 요일과 시간부터 단계적으로 연장하고 이용자 의견을 조사한다면 부담을 줄이면서도 주민에게 필요한 서비스를 제공할 수 있을 것이다.', rubric: ['주장과 두 가지 근거가 주제에 맞는가? / Is the position and its two reasons relevant to the topic?', '도입·근거·결론의 구조가 논리적인가? / Does the response have a logical introduction, reasons, and conclusion?', '연결 표현과 어휘를 적절하고 정확하게 사용했는가? / Are connectors and vocabulary accurate and appropriate?', '분량과 문장부호를 스스로 확인했는가? / Have length and punctuation been checked?'] },
    { id: 'w002', exam: 'II', prompt: '다음 주제에 대해 자신의 의견을 400~500자로 쓰십시오. 학교에서 휴대전화를 수업 시간에 제한해야 하는지, 자신의 생각과 근거를 쓰십시오.', modelAnswer: '나는 수업 시간에 휴대전화 사용을 어느 정도 제한해야 한다고 생각한다. 휴대전화는 필요한 정보를 빠르게 찾는 데 도움이 되지만, 알림이나 게임 때문에 수업에 집중하기 어려울 수 있다. 또한 학생들이 화면만 보면 교사와 친구의 의견을 듣고 토론할 기회가 줄어든다. 특히 모둠 활동 중에 각자 화면만 보면 서로 다른 생각을 비교하고 협력하는 연습이 부족해질 수 있다. 반대로 휴대전화를 가방에 넣고 수업에 참여하면 학생들은 발표자의 표정과 말투에도 더 집중할 수 있다. 그러나 모든 사용을 금지할 필요는 없다. 교사가 조사 활동이나 학습 앱 사용을 허용한 시간에는 휴대전화를 교육 도구로 활용할 수 있다. 따라서 학교는 단순한 금지보다 수업 목적에 맞는 사용 규칙을 만들고, 학생들이 스스로 사용 시간을 조절하도록 도와야 한다.', rubric: ['입장이 분명하고 근거가 충분한가? / Is the position clear and supported by sufficient reasons?', '반대 가능성 또는 조건을 논리적으로 다루었는가? / Are counterpoints or conditions handled logically?', '문단 사이의 연결이 자연스러운가? / Are connections between paragraphs natural?', '문법, 맞춤법, 높임과 문체가 일관적인가? / Are grammar, spelling, register, and style consistent?'] }
  ];
  window.TOPIK_DATA = { version: 1, sources, items, questions, writing };
})();
