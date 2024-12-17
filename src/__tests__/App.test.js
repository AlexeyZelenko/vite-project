import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import { createI18n } from 'vue-i18n';

// Мокирование IntersectionObserver для тестов
global.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
};

// Создаем мок i18n с нужными ключами перевода
const messages = {
    en: {
        title: {
            value: 'IT PRODUCTS DEVELOPMENT COMPANY',
        },
        Services: {
            value: 'Services',
        },
        // другие ключи перевода...
    },
    ru: {
        title: {
            value: 'РАЗРАБОТЧИК ІТ ПРОДУКТОВ',
        },
        Services: {
            value: 'Услуги',
        },
        // другие ключи перевода...
    },
};

const i18n = createI18n({
    locale: 'ru', // Или 'en', в зависимости от того, какой язык вам нужен в тестах
    messages,
});

describe('App.vue', () => {
    it('renders the app correctly', () => {
        const wrapper = mount(App, {
            global: {
                plugins: [i18n],
                stubs: {
                    'router-view': true, // Мокируем router-view, если он не используется в тесте
                },
            },
        });

        // Проверяем, что приложение рендерит заголовок правильно
        expect(wrapper.text()).toContain('РАЗРАБОТЧИК ІТ ПРОДУКТОВ');
    });
});
