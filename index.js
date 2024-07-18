// Sayfa yüklendiğinde verileri gösteriyoruz.
const qaListDiv = document.getElementById('qaList'); // id'si qaList olan divleri qaListDiv'e atıyoruz.
let qaList = JSON.parse(localStorage.getItem('qaList')) || []; // qaList'e yazılan string veriyi parse metoduyla JSON formatına dönüştürüp localStorage'a getItem metoduyla kaydediyoruz.
qaList.forEach(qaItem => { // forEach metoduyla herbir veriyi ekrana yazdırıyoruz.
    const qaItemDiv = document.createElement('div'); // yeni bir div oluşturuyoruz.
    qaItemDiv.innerHTML = `<strong>Question:</strong> ${qaItem.question} <br> <strong>Answer:</strong> ${qaItem.answer}`; // local storgedeki verileri html formatına çeviriyoruz ve ekrana yazıyoruz.
    qaItemDiv.style.marginBottom = '15px';
    qaListDiv.appendChild(qaItemDiv); // yeni divi liste divine ekliyoruz.
});


document.getElementById('qaForm').addEventListener('submit',function(event) 
{
    event.preventDefault(); // sayfanın yeniden yüklenmesini engelliyoruz.

    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;

    // nesne oluşturduk.
    const qaItem = {
        question: question,
        answer: answer
    }; 

    // veriyi localstorage a kaydediyoruz.
    let qaList = JSON.parse(localStorage.getItem('qaList')) || [];

    // yeni veri ekliyoruz.
    qaList.push(qaItem);
 
    // veriyi gösteriyoruz. bu kod yazılmazsa ekran yenilendiğinde son eklenen kod gösterilmez.
    localStorage.setItem('qaList', JSON.stringify(qaList));
    
    // formu temizliyoruz.
    document.getElementById('qaForm').reset();

    // seçilen divin içine verileri ekleyeceğiz.
    const qaListDiv = document.getElementById('qaList');

    // önceki verileri temizliyoruz. eğer bu kodu yazmazsak her ekleme işleminde gösterilen veriler altta bir daha gösterilecekti.
    qaListDiv.innerHTML = '';

    // her bir öğeyi ekrana yazdırıyoruz.
    qaList.forEach(qaItem => {

        // yeni bir div oluşturduk.
        const qaItemDiv = document.createElement('div');

        // localstorage daki verileri html formatında yazıyoruz.
        qaItemDiv.innerHTML = `<strong>Question:</strong> ${qaItem.question} <br> <strong>Answer:</strong> ${qaItem.answer}`;

        qaItemDiv.style.marginBottom = '15px';
        
        // oluşturulan div'i ana liste div'ine ekliyoruz.
        qaListDiv.appendChild(qaItemDiv); });

});



