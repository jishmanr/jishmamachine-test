console.log("FlockDesk Landing Page");
const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));

        tab.classList.add("active");
    });
});
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {

        faqItems.forEach(faq => {
            if (faq !== item) {
                faq.classList.remove('active');
                faq.querySelector('.faq-question span').textContent = '⌄';
            }
        });

        item.classList.toggle('active');

        const icon = item.querySelector('.faq-question span');
        icon.textContent = item.classList.contains('active') ? '⌃' : '⌄';
    });
});
const ctaForm = document.querySelector(".cta-form");

if(ctaForm){
    ctaForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email =
            ctaForm.querySelector("input").value;

        if(email){
            alert("Thanks for signing up!");
        }
    });
}