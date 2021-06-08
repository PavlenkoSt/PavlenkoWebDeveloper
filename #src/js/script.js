document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.wrapper');
    //main swiper
    const main = new Swiper('.init', {
        direction: 'vertical',
        loop: false,
        effect: 'slide',
        slidesPerView: 'auto',
        parallax: true,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        mousewheel: {
            sensitivity: 1
        },
        watchOverflow: true,
        speed: 800,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        pagination: {
            el: '.main__pagination',
            type: 'bullets',
            clickable: true,
        },
        scrollbar: {
            el: '.main__scrollbar',
            draggable: true,
        },
        init: false,
        on: {
            init: function () {
                activateMenuLink();
                wrapper.classList.add('loaded');
            },
            slideChange: function () {
                deactivateMenuLink();
                links[main.realIndex].classList.add('active');
            },
        },
    });
    let reviews = new Swiper('.reviews-init', {
        loop: true,
        effect: 'slide',
        autoHeight: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.reviews__pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    //toggle menu
    const header = document.querySelector('.header');
    const headerLogo = document.querySelector('.header__logo');
    headerLogo.addEventListener('click', function (event) {
        header.classList.toggle('active');
        event.preventDefault();
    });

    //close nav to click other place
    document.addEventListener('click', function (event) {
        if (headerLogo !== event.target && header !== event.target && !header.contains(event.target)) {
            header.classList.remove('active');
        }
    });

    //activate menu links
    const links = document.querySelectorAll('.link');
    function activateMenuLink() {
        if (links.length) {
            links[main.realIndex].classList.add('active');
            for (let i = 0; i < links.length; i++) {
                links[i].addEventListener('click', function (event) {
                    deactivateMenuLink();
                    main.slideTo(i, 800);
                    this.classList.add('active');
                    event.preventDefault();
                });
            }
        }
    }
    function deactivateMenuLink() {
        const activeLink = document.querySelector('.link.active');
        if (activeLink) {
            activeLink.classList.remove('active');
        }
    }
    //scroll to contacts
    const goContactsBtn = document.querySelector('#contacts');
    goContactsBtn.addEventListener('click', function () {
        main.slideTo(links.length - 1);
    });

    //tabs
    const tabsBtn = document.querySelectorAll('.about__skills-btn');
    const tabsItems = document.querySelectorAll('.about__item');

    tabsBtn.forEach(tabOptions);

    function tabOptions(item) {
        item.addEventListener('click', function () {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute('data-tab');
            let currentId = document.querySelector(tabId);

            if (!currentBtn.classList.contains('active')) {
                tabsBtn.forEach(function (item) {
                    item.classList.remove('active');
                })
                tabsItems.forEach(function (item) {
                    item.classList.remove('active');
                })
                item.classList.add('active');
                currentId.classList.add('active');
            }
        })
    }
    document.querySelector('.about__skills-btn:first-child').click();
    main.init();

//============================================= Translator ==================================================

    const RU = 'RU'
    const EN = 'EN'
    let language = EN;

    const languagePack = [
        {
            el: document.querySelector('.intro__title'),
            ru: 'Профессиональная <br> веб-разработка',
            en: 'Professional <br> web development'
        },
        {
            el: document.querySelector('.intro__list>li:first-child'),
            ru: 'Чистый и валидный код.',
            en: 'Clean and valid code.'
        },
        {
            el: document.querySelector('.intro__list>li:nth-child(2)'),
            ru: 'Сдача в согласованные сроки.',
            en: 'Project readiness on time.'
        },
        {
            el: document.querySelector('.intro__list>li:nth-child(3)'),
            ru: 'Постоянная связь.',
            en: 'Constant communication.'
        },
        {
            el: document.querySelector('.intro__list>li:last-child'),
            ru: '100% отдача к работе.',
            en: 'Responsibility for the work done.'
        },
        {
            el: document.querySelector('.btn-intro__front'),
            ru: 'Контакты',
            en: 'Contacts'
        },
        {
            el: document.querySelector('.btn-intro__back'),
            ru: 'Связаться',
            en: 'Сall up'
        },
        {
            el: document.querySelector('.header__nav-list>li:first-child>a'),
            ru: 'Приветствие',
            en: 'Greeting'
        },
        {
            el: document.querySelector('.header__nav-list>li:nth-child(2)>a'),
            ru: 'Обо мне',
            en: 'About me'
        },
        {
            el: document.querySelector('.header__nav-list>li:nth-child(3)>a'),
            ru: 'Работы',
            en: 'Works'
        },
        {
            el: document.querySelector('.header__nav-list>li:nth-child(4)>a'),
            ru: 'Отзывы',
            en: 'Reviews'
        },
        {
            el: document.querySelector('.header__nav-list>li:last-child>a'),
            ru: 'Контакты',
            en: 'Contacts'
        },
        {
            el: document.querySelector('.about__skills-title'),
            ru: 'Обо мне',
            en: 'About me'
        },
        {
            el: document.querySelector('.about__skills-nav>button:first-child'),
            ru: 'Резюме',
            en: 'Resume'
        },
        {
            el: document.querySelector('.about__skills-nav>button:last-child'),
            ru: 'Стек',
            en: 'Stack'
        },
        {
            el: document.querySelector('.about__text'),
            ru: 'Меня зовут Павленко Станислав. <br> Я программист, родом из Украины. Веб-разработкой занимаюсь с 2020 года.<br> С этого времени занимаюсь полной разработкой лендингов и интернет-магазинов на фрилансе, а также разрабатываю одностраничные вэб-приложения с помощью <span class="vue">Vue</span> и <span class="react">React</span>.',
            en: 'My name is Stanislav Pavlenko. <br> I am a programmer from Ukraine. I have been doing web development since 2020.<br> Since that time I have been fully engaged in the development of landing pages and online stores on freelance, as well as developing single-page applications using <span class="vue">Vue</span> and <span class="react">React</span>.'
        },
        {
            el: document.querySelector('#completedProj'),
            ru: 'Проектов завершено',
            en: 'Projects completed'
        },
        {
            el: document.querySelector('#workHours'),
            ru: 'Рабочих часов',
            en: 'Working hours'
        },
        {
            el: document.querySelector('#goodReviews'),
            ru: 'Хороших отзывов',
            en: 'Good reviews'
        },
        {
            el: document.querySelector('.reviews__title'),
            ru: 'Отзывы',
            en: 'Reviews'
        },
        {
            el: document.querySelector('#firstReview .reviews__text'),
            ru: 'Задача стояла с готовым дизайном слепить сайт, с нуля. С задачей прекрастно справился, всю дорогу помогал и обьяснял по работе сайта. 10 из 10.',
            en: 'The task was to create a website with a ready-made design. He did an excellent job, helped and explained how the site works. 10 out of 10.'
        },
        {
            el: document.querySelector('#firstReview .reviews__author'),
            ru: 'Игорь Ковтун',
            en: 'Igor Kovtun'
        },
        {
            el: document.querySelector('#secondReview .reviews__text'),
            ru: 'Сотрудничаю с данным исполнителем в первый раз. Очень сильно доволен скоростью и качеством работы. Если вы хотите получить качественную работу и в срок, то настоятельно рекомендую данного исполнителя!',
            en: 'I work with this performer for the first time. I am very pleased with the speed and quality of work. If you want to get quality work and on time, then I highly recommend this performer!'
        },
        {
            el: document.querySelector('#secondReview .reviews__author'),
            ru: 'Валерий Забажан',
            en: 'Valery Zabazhan'
        },
        {
            el: document.querySelector('#thirdReview .reviews__text'),
            ru: 'Очень понравилось быстрое исполнение, понимание задачи нашей компании и четкое выполнение в сроки. Отличная работа, будем вас рекомендовать!',
            en: 'I liked the fast execution, understanding of the task of our company and accurate execution on time. Great job, we will recommend you!'
        },
        {
            el: document.querySelector('#thirdReview .reviews__author'),
            ru: 'Марина Володько',
            en: 'Marina Volodko'
        },
        {
            el: document.querySelector('#fourthReview .reviews__text'),
            ru: 'Я очень доволен, прекрасная верстка, отличный, чистый код. К тому же, работа выполнена очень быстро, даже чуть раньше срока. Класс, рекомендую! Я постоянный клиент теперь!)',
            en: 'I am very satisfied, excellent layout, excellent, clean code. In addition, the work was completed very quickly, even a little ahead of schedule. Cool, I recommend! I\'m a regular customer now!)'
        },
        {
            el: document.querySelector('#fourthReview .reviews__author'),
            ru: 'Максим Снисаренко',
            en: 'Maxim Snisarenko'
        },
        {
            el: document.querySelector('.contacts__title'),
            ru: 'Контакты',
            en: 'Contacts'
        },
        {
            el: document.querySelector('.contacts__main .contacts__item:first-child .contacts__action'),
            ru: 'Позвонить/Написать',
            en: 'Call/Write'
        },
        {
            el: document.querySelector('.contacts__main .contacts__item:last-child .contacts__action'),
            ru: 'Отправить письмо',
            en: 'Send message'
        },
    ];

    function changeLanguage() {
        if(language === RU){
            languagePack.forEach(obj => obj.el.innerHTML = obj.ru);
        }

        if(language === EN){
            languagePack.forEach(obj => obj.el.innerHTML = obj.en);
        }
    }

    const enLangBtn = document.querySelector('#langEn');
    const ruLangBtn = document.querySelector('#langRu');

    enLangBtn.addEventListener('click', langBtnHandler);
    ruLangBtn.addEventListener('click', langBtnHandler);

    function langBtnHandler(){
        reviews.destroy()
        if(this === enLangBtn){
            ruLangBtn.classList.remove('active')
        }
        if(this === ruLangBtn){
            enLangBtn.classList.remove('active')
        }
        this.classList.add('active')
        if(this.classList.contains('active')){
            language = this === enLangBtn ? EN : this === ruLangBtn ? RU : null
        }
        changeLanguage();
        translateHelperForASwiper();

        reviews = new Swiper('.reviews-init', {
            loop: true,
            effect: 'slide',
            autoHeight: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.reviews__pagination',
                type: 'bullets',
                clickable: true,
            },
        });
    }

    function translateHelperForASwiper(){
        document.querySelector('#fourthReview .reviews__author').innerHTML = language === EN ? 'Maxim Snisarenko' : 'Максим Снисаренко';
        document.querySelector('#fourthReview .reviews__text').innerHTML = language === EN ? 'I am very satisfied, excellent layout, excellent, clean code. In addition, the work was completed very quickly, even a little ahead of schedule. Cool, I recommend! I\'m a regular customer now!)' : 'Я очень доволен, прекрасная верстка, отличный, чистый код. К тому же, работа выполнена очень быстро, даже чуть раньше срока. Класс, рекомендую! Я постоянный клиент теперь!)';
    }

});