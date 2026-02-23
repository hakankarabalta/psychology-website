
//quiz js
const allQuizzes = [
    { 
        id: 'anksiyete', title: 'Anksiyete Testi', desc: 'Kaygı düzeyinizi 4 adımda ölçün.', 
        questions: [
            { q: "Gelecekle ilgili aşırı endişe duyuyor musunuz?", options: [{t:"Hayır", p:0}, {t:"Bazen", p:1}, {t:"Sık sık", p:3}] },
            { q: "Nedensiz yere kalbiniz hızla çarpıyor mu?", options: [{t:"Asla", p:0}, {t:"Nadiren", p:1}, {t:"Evet", p:3}] },
            { q: "Zihninizi susturmakta zorlanıyor musunuz?", options: [{t:"Hayır", p:0}, {t:"Biraz", p:2}, {t:"Çok fazla", p:3}] },
            { q: "Gerginlikten dolayı uyku sorunu yaşıyor musunuz?", options: [{t:"Hayır", p:0}, {t:"Evet", p:3}] }
        ]
    },
    { 
        id: 'depresyon', title: 'Depresyon Ölçeği', desc: 'Duygusal durumunuzu analiz edin.', 
        questions: [
            { q: "Eski hobilerinizden hala keyif alıyor musunuz?", options: [{t:"Evet", p:0}, {t:"Azaldı", p:2}, {t:"Hayır", p:3}] },
            { q: "Enerjinizi tamamen tükenmiş hissediyor musunuz?", options: [{t:"Hayır", p:0}, {t:"Bazen", p:1}, {t:"Her gün", p:3}] },
            { q: "Kendinizi değersiz hissettiğiniz oluyor mu?", options: [{t:"Hiçbir zaman", p:0}, {t:"Ara sıra", p:2}, {t:"Sürekli", p:3}] },
            { q: "İştahınızda belirgin bir değişim var mı?", options: [{t:"Hayır", p:0}, {t:"Evet", p:2}] }
        ]
    },
    { 
        id: 'uyku', title: 'Uyku Kalitesi', desc: 'Uyku hijyeninizi test edin.', 
        questions: [
            { q: "Gece uykunuz sık sık bölünüyor mu?", options: [{t:"Hayır", p:0}, {t:"Haftada 1-2", p:1}, {t:"Her gece", p:3}] },
            { q: "Sabahları yorgun mu uyanıyorsunuz?", options: [{t:"Zinde", p:0}, {t:"Biraz yorgun", p:1}, {t:"Çok bitkin", p:3}] },
            { q: "Gün içinde uyuklama ihtiyacı duyuyor musunuz?", options: [{t:"Hayır", p:0}, {t:"Evet", p:2}] },
            { q: "Yatağa girdiğinizde uykuya dalmanız ne kadar sürüyor?", options: [{t:"Hemen", p:0}, {t:"15-30 dk", p:1}, {t:"1 saat+", p:3}] }
        ]},
    { 
        id: 'iliski', title: 'İlişki Analizi', desc: 'Bağlılık ve iletişim testi.', 
        questions: [
            { q: "Partnerinizle sorunları açıkça konuşabiliyor musunuz?", options: [{t:"Evet", p:0}, {t:"Deniyoruz", p:1}, {t:"Hayır", p:3}] },
            { q: "İlişkide kendiniz gibi davranabiliyor musunuz?", options: [{t:"Kesinlikle", p:0}, {t:"Bazen", p:2}, {t:"Hayır", p:3}] },
            { q: "Gelecek planlarınız ne kadar örtüşüyor?", options: [{t:"Tamamen", p:0}, {t:"Kısmen", p:2}, {t:"Hiç", p:3}] },
            { q: "Tartışmaların ardından çözüm bulabiliyor musunuz?", options: [{t:"Evet", p:0}, {t:"Zaman alıyor", p:1}, {t:"Küs kalıyoruz", p:3}] }
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
    const phone = "905346844554"; // Buraya kendi numaranı ekle
    const resultMsg = `Merhaba, web siteniz üzerinden *${activeQuiz.title}* testini çözdüm. \n\n Bu konu Hakkında randevu alabilir miyim?`;
    
    const wpUrl = `https://wa.me/${phone}?text=${encodeURIComponent(resultMsg)}`;
    window.open(wpUrl, '_blank');
}

function closeQuiz() {
    document.getElementById('quiz-overlay').style.display = 'none';
}
function showResult() {
    // Bu testten alınabilecek maksimum puanı hesapla
    const maxScore = activeQuiz.questions.reduce((sum, q) => {
        return sum + Math.max(...q.options.map(o => o.p));
    }, 0);

    // 100 üzerinden başarı puanı (Yuvarlanmış)
    const finalGrade = Math.round((totalScore / maxScore) * 100);
    
    const qTrack = document.getElementById('question-track');
    
    // Eğer puan 50'den büyükse WP mesajını göster, değilse genel bir bitiş yap
    let adviceHtml = "";
    if (finalGrade >= 50) {
        adviceHtml = `
            <p style="color: #e74c3c; font-weight: bold;">
                Bu konu hakkında bir uzmanla görüşmek size iyi gelebilir.
            </p>`;
    } else {
        adviceHtml = `<p>Testi tamamladığınız için teşekkürler. Kendinize iyi bakıyorsunuz!</p>`;
    }

    // Sonuç ekranını son slayt olarak ekrana bas
    qTrack.innerHTML += `
        <div class="question-slide result-slide">
            <h2>Test Tamamlandı!</h2>
            <div class="score-circle">
                <span style="font-size: 2.5rem; font-weight: bold;">${finalGrade}</span> / 100
            </div>
            ${adviceHtml}
            `;
    
    // Sonuca kaydır
    currentQIdx++;
    qTrack.style.transform = `translateX(-${currentQIdx * 100}%)`;
}





init();