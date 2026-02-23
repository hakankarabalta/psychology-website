
//quiz js
const allQuizzes = [
    { 
        id: 'anksiyete', 
        title: 'Anksiyete Testi', 
        desc: 'Kaygı düzeyinizi 4 adımda ölçün.', 
        // GAD-7 (Generalized Anxiety Disorder Scale) temel alınmıştır.
        // Scoring: 0-4 minimal, 5-9 mild, 10-14 moderate, 15+ severe
        levels: [
            { max: 33,  label: 'Minimal Anksiyete',  color: '#27ae60', msg: 'Kaygı belirtileriniz oldukça düşük düzeyde. Genel ruh sağlığınız iyi görünüyor.' },
            { max: 57,  label: 'Hafif Anksiyete',    color: '#f39c12', msg: 'Bazı kaygı belirtileri mevcut. Stres yönetimi teknikleri faydalı olabilir.' },
            { max: 78,  label: 'Orta Düzey Anksiyete', color: '#e67e22', msg: 'Belirgin kaygı belirtileri saptandı. Bir uzmanla görüşmeniz önerilir.' },
            { max: 100, label: 'Şiddetli Anksiyete', color: '#e74c3c', msg: 'Yüksek düzeyde kaygı belirtileri mevcut. Lütfen bir ruh sağlığı uzmanına başvurunuz.' }
        ],
        questions: [
            { 
                q: "Son 2 haftada, kendinizi sinirli, endişeli veya gergin hissettiniz mi?", 
                options: [
                    {t: "Hiç (0 gün)", p: 0}, 
                    {t: "Birkaç gün", p: 1}, 
                    {t: "Günlerin yarısından fazlası", p: 2}, 
                    {t: "Neredeyse her gün", p: 3}
                ] 
            },
            { 
                q: "Son 2 haftada, kaygılarınızı durduramadığınızı veya kontrol edemediğinizi hissettiniz mi?", 
                options: [
                    {t: "Hiç (0 gün)", p: 0}, 
                    {t: "Birkaç gün", p: 1}, 
                    {t: "Günlerin yarısından fazlası", p: 2}, 
                    {t: "Neredeyse her gün", p: 3}
                ] 
            },
            { 
                q: "Son 2 haftada, farklı konularda aşırı endişe duydunuz mu?", 
                options: [
                    {t: "Hiç (0 gün)", p: 0}, 
                    {t: "Birkaç gün", p: 1}, 
                    {t: "Günlerin yarısından fazlası", p: 2}, 
                    {t: "Neredeyse her gün", p: 3}
                ] 
            },
            { 
                q: "Son 2 haftada, rahatlamakta güçlük çektiniz mi?", 
                options: [
                    {t: "Hiç (0 gün)", p: 0}, 
                    {t: "Birkaç gün", p: 1}, 
                    {t: "Günlerin yarısından fazlası", p: 2}, 
                    {t: "Neredeyse her gün", p: 3}
                ] 
            },
            { 
                q: "Son 2 haftada, o kadar tedirgin hissettiniz ki yerinde duramadınız mı?", 
                options: [
                    {t: "Hiç (0 gün)", p: 0}, 
                    {t: "Birkaç gün", p: 1}, 
                    {t: "Günlerin yarısından fazlası", p: 2}, 
                    {t: "Neredeyse her gün", p: 3}
                ] 
            },
            { 
                q: "Son 2 haftada, kolayca sinirlenip kızdınız mı?", 
                options: [
                    {t: "Hiç (0 gün)", p: 0}, 
                    {t: "Birkaç gün", p: 1}, 
                    {t: "Günlerin yarısından fazlası", p: 2}, 
                    {t: "Neredeyse her gün", p: 3}
                ] 
            },
            { 
                q: "Son 2 haftada, kötü bir şey olacakmış gibi korktunuz mu?", 
                options: [
                    {t: "Hiç (0 gün)", p: 0}, 
                    {t: "Birkaç gün", p: 1}, 
                    {t: "Günlerin yarısından fazlası", p: 2}, 
                    {t: "Neredeyse her gün", p: 3}
                ] 
            }
        ]
    },
    { 
        id: 'depresyon', 
        title: 'Depresyon Ölçeği', 
        desc: 'Duygusal durumunuzu analiz edin.', 
        // PHQ-9 (Patient Health Questionnaire) temel alınmıştır.
        // Scoring: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20+ severe
        levels: [
            { max: 22,  label: 'Minimal Depresyon',          color: '#27ae60', msg: 'Depresyon belirtisi yok ya da çok az. Ruh haliniz genel olarak dengeli görünüyor.' },
            { max: 44,  label: 'Hafif Depresyon',            color: '#f39c12', msg: 'Hafif depresyon belirtileri mevcut. Günlük rutininizi ve sosyal bağlantılarınızı güçlendirmeniz faydalı olabilir.' },
            { max: 67,  label: 'Orta Düzey Depresyon',       color: '#e67e22', msg: 'Orta düzey depresyon belirtileri saptandı. Bir ruh sağlığı uzmanına danışmanız önerilir.' },
            { max: 89,  label: 'Orta-Şiddetli Depresyon',   color: '#c0392b', msg: 'Belirgin depresyon belirtileri var. Lütfen bir uzmanla görüşmekten çekinmeyin.' },
            { max: 100, label: 'Şiddetli Depresyon',         color: '#922b21', msg: 'Yüksek düzeyde depresyon belirtileri mevcut. Lütfen en kısa sürede bir psikiyatrist veya psikolog ile görüşünüz.' }
        ],
        questions: [
            { 
                q: "Son 2 haftada, işlere karşı ilginizin veya zevk almanızın azaldığını fark ettiniz mi?", 
                options: [
                    {t: "Hiç (0 gün)", p: 0}, 
                    {t: "Birkaç gün", p: 1}, 
                    {t: "Günlerin yarısından fazlası", p: 2}, 
                    {t: "Neredeyse her gün", p: 3}
                ] 
            },
            { 
                q: "Son 2 haftada, kendinizi üzgün, çökmüş veya umutsuz hissettiniz mi?", 
                options: [
                    {t: "Hiç (0 gün)", p: 0}, 
                    {t: "Birkaç gün", p: 1}, 
                    {t: "Günlerin yarısından fazlası", p: 2}, 
                    {t: "Neredeyse her gün", p: 3}
                ] 
            },
            { 
                q: "Son 2 haftada, uykuya dalmakta zorlandınız, gece uyandınız ya da çok fazla uyudunuz mu?", 
                options: [
                    {t: "Hiç (0 gün)", p: 0}, 
                    {t: "Birkaç gün", p: 1}, 
                    {t: "Günlerin yarısından fazlası", p: 2}, 
                    {t: "Neredeyse her gün", p: 3}
                ] 
            },
            { 
                q: "Son 2 haftada, kendinizi yorgun veya enerjiniz yok gibi hissettiniz mi?", 
                options: [
                    {t: "Hiç (0 gün)", p: 0}, 
                    {t: "Birkaç gün", p: 1}, 
                    {t: "Günlerin yarısından fazlası", p: 2}, 
                    {t: "Neredeyse her gün", p: 3}
                ] 
            },
            { 
                q: "Son 2 haftada, iştahınız azaldı ya da aşırı yemek yediğiniz oldu mu?", 
                options: [
                    {t: "Hiç (0 gün)", p: 0}, 
                    {t: "Birkaç gün", p: 1}, 
                    {t: "Günlerin yarısından fazlası", p: 2}, 
                    {t: "Neredeyse her gün", p: 3}
                ] 
            },
            { 
                q: "Son 2 haftada, kendinizi başarısız biri olarak gördünüz ya da ailenizi/kendinizi hayal kırıklığına uğrattığınızı düşündünüz mü?", 
                options: [
                    {t: "Hiç (0 gün)", p: 0}, 
                    {t: "Birkaç gün", p: 1}, 
                    {t: "Günlerin yarısından fazlası", p: 2}, 
                    {t: "Neredeyse her gün", p: 3}
                ] 
            },
            { 
                q: "Son 2 haftada, gazete okumak veya televizyon izlemek gibi işlerde dikkatinizi toplamakta güçlük çektiniz mi?", 
                options: [
                    {t: "Hiç (0 gün)", p: 0}, 
                    {t: "Birkaç gün", p: 1}, 
                    {t: "Günlerin yarısından fazlası", p: 2}, 
                    {t: "Neredeyse her gün", p: 3}
                ] 
            },
            { 
                q: "Son 2 haftada, başkalarının fark edebileceği biçimde çok yavaş hareket ettiniz ya da konuştunuz mu; ya da tam tersi olarak çok huzursuz ve yerinde duramaz oldunuz mu?", 
                options: [
                    {t: "Hiç (0 gün)", p: 0}, 
                    {t: "Birkaç gün", p: 1}, 
                    {t: "Günlerin yarısından fazlası", p: 2}, 
                    {t: "Neredeyse her gün", p: 3}
                ] 
            },
            { 
                q: "Son 2 haftada, kendinize zarar vermeyi ya da ölmeyi düşündünüz mü?", 
                options: [
                    {t: "Hiç (0 gün)", p: 0}, 
                    {t: "Birkaç gün", p: 1}, 
                    {t: "Günlerin yarısından fazlası", p: 2}, 
                    {t: "Neredeyse her gün", p: 3}
                ] 
            }
        ]
    },
    { 
        id: 'uyku', 
        title: 'Uyku Kalitesi', 
        desc: 'Uyku hijyeninizi test edin.', 
        // Pittsburgh Uyku Kalitesi İndeksi (PSQI) temel alınmıştır.
        levels: [
            { max: 30,  label: 'İyi Uyku Kalitesi',         color: '#27ae60', msg: 'Uyku düzeniniz sağlıklı görünüyor. Bu alışkanlıklarınızı koruyun.' },
            { max: 60,  label: 'Hafif Uyku Bozukluğu',      color: '#f39c12', msg: 'Uyku kalitenizde bazı aksaklıklar mevcut. Uyku hijyeni uygulamaları faydalı olabilir.' },
            { max: 100, label: 'Belirgin Uyku Bozukluğu',   color: '#e74c3c', msg: 'Uyku kaliteniz ciddi biçimde olumsuz etkileniyor. Bir uyku uzmanı veya psikiyatristle görüşmeniz önerilir.' }
        ],
        questions: [
            { 
                q: "Son 1 ayda genellikle yatağa girdikten kaç dakika sonra uykuya dalabildiniz?", 
                options: [
                    {t: "15 dakikadan az", p: 0}, 
                    {t: "16 – 30 dakika", p: 1}, 
                    {t: "31 – 60 dakika", p: 2}, 
                    {t: "60 dakikadan fazla", p: 3}
                ] 
            },
            { 
                q: "Son 1 ayda gece uykuya dalamadığınız için ne sıklıkla sorun yaşadınız?", 
                options: [
                    {t: "Hiç", p: 0}, 
                    {t: "Haftada 1 kereden az", p: 1}, 
                    {t: "Haftada 1–2 kez", p: 2}, 
                    {t: "Haftada 3 kez veya daha fazla", p: 3}
                ] 
            },
            { 
                q: "Son 1 ayda sabahları çok erken uyanıp tekrar uyuyamadığınız için ne sıklıkla sorun yaşadınız?", 
                options: [
                    {t: "Hiç", p: 0}, 
                    {t: "Haftada 1 kereden az", p: 1}, 
                    {t: "Haftada 1–2 kez", p: 2}, 
                    {t: "Haftada 3 kez veya daha fazla", p: 3}
                ] 
            },
            { 
                q: "Son 1 ayda genel olarak uyku kalitenizi nasıl değerlendirirsiniz?", 
                options: [
                    {t: "Çok iyi", p: 0}, 
                    {t: "Oldukça iyi", p: 1}, 
                    {t: "Oldukça kötü", p: 2}, 
                    {t: "Çok kötü", p: 3}
                ] 
            },
            { 
                q: "Son 1 ayda uykulu olmak günlük işlerinizi ne ölçüde olumsuz etkiledi?", 
                options: [
                    {t: "Hiç etkilemedi", p: 0}, 
                    {t: "Çok az etkiledi", p: 1}, 
                    {t: "Biraz etkiledi", p: 2}, 
                    {t: "Çok olumsuz etkiledi", p: 3}
                ] 
            },
            { 
                q: "Son 1 ayda uykuya devam etmenizi engelleyen ağrı veya rahatsızlık hissettiniz mi?", 
                options: [
                    {t: "Hiç", p: 0}, 
                    {t: "Haftada 1 kereden az", p: 1}, 
                    {t: "Haftada 1–2 kez", p: 2}, 
                    {t: "Haftada 3 kez veya daha fazla", p: 3}
                ] 
            },
            { 
                q: "Son 1 ayda ortalama kaç saat gerçek uyku uyudunuz (yatakta geçirilen süre değil)?", 
                options: [
                    {t: "7 saatten fazla", p: 0}, 
                    {t: "6 – 7 saat", p: 1}, 
                    {t: "5 – 6 saat", p: 2}, 
                    {t: "5 saatten az", p: 3}
                ] 
            }
        ]
    },
    { 
        id: 'iliski', 
        title: 'İlişki Analizi', 
        desc: 'Bağlılık ve iletişim testi.', 
        // Gottman'ın "Dört Atlı" modeli ve Bağlanma Kuramı temel alınmıştır.
        levels: [
            { max: 25,  label: 'Sağlıklı İlişki Örüntüsü',      color: '#27ae60', msg: 'İlişkinizde güçlü iletişim ve bağlılık örüntüleri gözlemleniyor. Bu sağlıklı temeli koruyun.' },
            { max: 55,  label: 'Gelişime Açık Alanlar Mevcut',   color: '#f39c12', msg: 'İlişkinizde bazı iletişim güçlükleri söz konusu. Çift terapisi bu alanların geliştirilmesine katkı sağlayabilir.' },
            { max: 100, label: 'Önemli İlişki Zorlukları',       color: '#e74c3c', msg: 'İlişkinizde belirgin iletişim ve bağlılık sorunları saptandı. Bir çift terapisti ile görüşmeniz önerilir.' }
        ],
        questions: [
            { 
                q: "Partnerinizle bir anlaşmazlık yaşandığında tepkiniz genellikle nasıl olur?", 
                options: [
                    {t: "Sakin kalır, empatiyle dinlerim", p: 0}, 
                    {t: "Önce sinirlensem de konuşmaya çalışırım", p: 1}, 
                    {t: "Savunmaya geçerim veya karşılık veririm", p: 2}, 
                    {t: "Susarım ya da ortamı terk ederim", p: 3}
                ] 
            },
            { 
                q: "Partnerinizi eleştirmeniz gerektiğinde ne yaparsınız?", 
                options: [
                    {t: "Davranışı tanımlar, kişiyi değil", p: 0}, 
                    {t: "Bazen kişisel konulara değinirim", p: 1}, 
                    {t: "Suçlayıcı bir dil kullanabilirim", p: 2}, 
                    {t: "Eleştiriyi birikerek patlama şeklinde ifade ederim", p: 3}
                ] 
            },
            { 
                q: "Partnerinizin ihtiyaç veya duygularını ne ölçüde fark edebiliyorsunuz?", 
                options: [
                    {t: "Genellikle söylemeden anlıyorum", p: 0}, 
                    {t: "Çoğunlukla anlıyorum", p: 1}, 
                    {t: "Bazen gözden kaçırıyorum", p: 2}, 
                    {t: "Çoğunlukla fark edemiyorum", p: 3}
                ] 
            },
            { 
                q: "Tartışma sırasında partneriniz size bir endişe ifade ettiğinde tavrınız nasıl olur?", 
                options: [
                    {t: "Gerçekten anlamaya çalışırım", p: 0}, 
                    {t: "Dinlemeye çalışırım, savunma eğilimim olsa da", p: 1}, 
                    {t: "Haklılığımı kanıtlamaya odaklanırım", p: 2}, 
                    {t: "Konudan kaçmak ya da susmak isterim", p: 3}
                ] 
            },
            { 
                q: "İlişkinizde güven duygunuzu nasıl tanımlarsınız?", 
                options: [
                    {t: "Tam ve sağlam hissediyorum", p: 0}, 
                    {t: "Genel olarak güveniyorum, küçük kuşkularım olabiliyor", p: 1}, 
                    {t: "Zaman zaman ciddi kuşkular yaşıyorum", p: 2}, 
                    {t: "Güvensizlik hâkim bir his", p: 3}
                ] 
            },
            { 
                q: "Ortak gelecek planları ve hedefler konusunda partnerinizle ne kadar örtüşüyorsunuz?", 
                options: [
                    {t: "Büyük ölçüde uyuşuyoruz", p: 0}, 
                    {t: "Temel konularda anlaşıyoruz, detaylarda farklılıklar var", p: 1}, 
                    {t: "Önemli konularda belirgin farklar mevcut", p: 2}, 
                    {t: "Ortak bir vizyon neredeyse yok", p: 3}
                ] 
            },
            { 
                q: "Partnerinizle kaliteli zaman geçirme (ortak aktivite, samimi sohbet) sıklığınız nasıl?", 
                options: [
                    {t: "Düzenli ve tatmin edici", p: 0}, 
                    {t: "Yeterli, ama artırılabilir", p: 1}, 
                    {t: "Oldukça sınırlı", p: 2}, 
                    {t: "Neredeyse yok", p: 3}
                ] 
            }
        ]
    }
];

let activeQuiz = null;
let currentQIdx = 0;
let totalScore = 0;

function init() {
    const track = document.getElementById('test-track');
    allQuizzes.forEach(test => {
        track.innerHTML += `
            <div class="test-card">
                <h3>${test.title}</h3>
                <p>${test.desc}</p>
                <button onclick="openQuiz('${test.id}')" class="opt-btn2">Başla</button>
            </div>`;
    });
}

function openQuiz(id) {
    activeQuiz = allQuizzes.find(q => q.id === id);
    currentQIdx = 0;
    totalScore = 0;
    
    document.getElementById('wp-send-btn').style.display = 'none';
    const qTrack = document.getElementById('question-track');
    qTrack.style.transform = `translateX(0)`;
    
    qTrack.innerHTML = activeQuiz.questions.map((q, i) => `
        <div class="question-slide">
            <h2>${q.q}</h2>
            <div style="width:100%; display:flex; flex-direction:column; align-items:center;">
                ${q.options.map(o => `<button class="opt-btn" onclick="handleSelect(${o.p}, ${i})">${o.t}</button>`).join('')}
            </div>
        </div>
    `).join('');
    document.getElementById('quiz-overlay').style.display = 'flex';
    updateProgress();
}

function handleSelect(p, idx) {
    totalScore += p;
    if (idx + 1 < activeQuiz.questions.length) {
        currentQIdx++;
        document.getElementById('question-track').style.transform = `translateX(-${currentQIdx * 100}%)`;
        updateProgress();
    } else {
        updateProgress(100);
        document.getElementById('wp-send-btn').style.display = 'block';
        showResult();
    }
}

function updateProgress(val) {
    const p = val || (currentQIdx / activeQuiz.questions.length) * 100;
    document.getElementById('progress-bar').style.width = p + '%';
}

function finishTest() {
    const phone = "905346844554";
    const resultMsg = `Merhaba, web siteniz üzerinden *${activeQuiz.title}* testini çözdüm. \n\n Bu konu Hakkında randevu alabilir miyim?`;
    const wpUrl = `https://wa.me/${phone}?text=${encodeURIComponent(resultMsg)}`;
    window.open(wpUrl, '_blank');
}

function closeQuiz() {
    document.getElementById('quiz-overlay').style.display = 'none';
}

function showResult() {
    const maxScore = activeQuiz.questions.reduce((sum, q) => {
        return sum + Math.max(...q.options.map(o => o.p));
    }, 0);

    const finalGrade = Math.round((totalScore / maxScore) * 100);

    // Seviye belirle
    const level = activeQuiz.levels.find(l => finalGrade <= l.max) || activeQuiz.levels[activeQuiz.levels.length - 1];

    const qTrack = document.getElementById('question-track');

    const adviceHtml = finalGrade >= 50
        ? `<p style="color: #e74c3c; font-weight: bold;">${level.msg}</p>`
        : `<p style="color: ${level.color}; font-weight: bold;">${level.msg}</p>`;

    qTrack.innerHTML += `
        <div class="question-slide result-slide">
            <h2>Test Tamamlandı!</h2>
            <div class="score-circle">
                <span style="font-size: 2.5rem; font-weight: bold;">${finalGrade}</span> / 100
            </div>
            <p style="font-size: 1.1rem; font-weight: bold; color: ${level.color}; margin-top: 10px;">${level.label}</p>
            ${adviceHtml}
            <div style="margin-top: 18px; padding: 12px 16px; background: #f8f9fa; border-left: 4px solid #bdc3c7; border-radius: 6px; font-size: 0.78rem; color: #7f8c8d; text-align: left; line-height: 1.5;">
                ⚠️ <strong>Önemli Uyarı:</strong> Bu test yalnızca <strong>ön tanı / tarama</strong> amaçlıdır; klinik tanı yerine geçmez. Sonuçlar, lisanslı bir ruh sağlığı uzmanının değerlendirmesinin yerini alamaz. Lütfen sonuçlarınızı bir uzmanla paylaşınız.
            </div>
        </div>`;

    currentQIdx++;
    qTrack.style.transform = `translateX(-${currentQIdx * 100}%)`;
}

init();
