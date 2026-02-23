function toggleFAQ(element) {
    const faqItem = element.parentElement;
    
    // Opsiyonel: Diğer açık olanları kapatmak istersen aşağıdaki 3 satırı kullan
    document.querySelectorAll('.faq-item').forEach(item => {
       if(item !== faqItem) item.classList.remove('active');
    });

    // Tıklanan öğeyi aç veya kapat
    faqItem.classList.toggle('active');
}

async function loadFAQ() {
    const container = document.querySelector('.faq-container');
    
    try {
        const response = await fetch('./data/faq.json');
        const data = await response.json();

        // Her soru için HTML bloğunu oluşturuyoruz
        container.innerHTML = data.map(item => `
            <div class="faq-item">
                <div class="faq-question" onclick="toggleFAQ(this)">
                    <span>${item.question}</span>
                    <i class="arrow-icon">+</i>
                </div>
                <div class="faq-answer">
                    <p>${item.answer}</p>
                </div>
            </div>
        `).join('');
        
    } catch (error) {
        console.error("Veri yüklenemedi:", error);
    }
}


// Sayfa açıldığında verileri çek
loadFAQ();

