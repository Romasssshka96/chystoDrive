const contactBlock = document.querySelector('.contactButtonsBlock');
const button = document.querySelector('.contactButton');

button.addEventListener('click', () => {
    contactBlock.classList.toggle('active');
});


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', function () {

        const isActive = this.classList.contains('active');

        // Сначала закрываем все карточки
        cards.forEach(c => c.classList.remove('active'));

        // Если карточка НЕ была открыта — открываем её
        if (!isActive) {
            this.classList.add('active');
        }

    });
});


//------------------------------------------------------------------------------------------


const deadLine = Date.parse("2026-03-31T23:59:59");
console.log(deadLine)

function getTimeValues (finish){
    const difference = finish - Date.parse(new Date());  //вычисляем разницу между теперешним временем и датой заданной как конечный дед лайн акции  
    const days = Math.floor(difference/(1000*60*60*24));
    const hours = Math.floor((difference/(1000*60*60)%24));
    const minutes = Math.floor((difference/1000/60)%60);
    const seconds = Math.floor((difference/1000)%60);

    return{    //после вычислений возвращаем объект со значениями сделанными в ходе вычислений, для удобного назначения и манипуляций потом 
        'total': difference,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    }
}


function setTimer (selector, finish){
    const timer = document.querySelector('.timer')
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds =timer.querySelector('#seconds');
    const interval = setInterval(refreshClock, 1000) //задаем интервал обновления счетсика каждую секунду 

    function refreshClock (){
        const difference = getTimeValues(finish);   //создаём локальную переменную в которую помещаем функцию с аргументом созданную выше 

        days.innerHTML = difference.days;  //привязываем с созданного объекта значения к хтмл ячейкам 
        hours.innerHTML = difference.hours;
        minutes.innerHTML = difference.minutes;
        seconds.innerHTML = difference.seconds;

        if(difference.total <=0){
            clearInterval(interval)  //если отсчет окончен то останавливаем обновление счетчика с помощью команды клир интервал 
            days.innerHTML = 0;    //задаем нули счетчику что бы по истечению таймера он не считал в минусовые значения 
            hours.innerHTML = 0;
            minutes.innerHTML = 0;
            seconds.innerHTML = 0;
        }
    }
}

setTimer('.timer', deadLine)



const discountTimer = document.querySelector(".discountTimer")

window.addEventListener('scroll', () => {

    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    // Если пользователь ближе чем на 150px к низу страницы
    if (pageHeight - scrollPosition < 150) {
        discountTimer.style.opacity = "0";
        discountTimer.style.pointerEvents = "none";
    } else {
        discountTimer.style.opacity = "1";
        discountTimer.style.pointerEvents = "auto";
    }

});








