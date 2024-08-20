import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import CatalogItem from '@/components/CatalogItem.vue';
import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        link: {
            value: 'Link'
        },
    },
    ru: {
        link: {
            value: 'Ссылка'
        },
    },
};

const i18n = createI18n({
    locale: 'ru',
    messages,
});

describe('Home.vue', () => {
    it('renders CatalogItem components for each section', () => {
        const wrapper = mount(Home, {
            global: {
                plugins: [i18n],
            },
        });

        // Проверка, что количество рендеренных CatalogItem компонентов совпадает с количеством секций
        const catalogItems = wrapper.findAllComponents(CatalogItem);
        expect(catalogItems.length).toBe(wrapper.vm.sections.length);
    });

    it('passes correct props to CatalogItem components', () => {
        const wrapper = mount(Home, {
            global: {
                plugins: [i18n],
            },
        });

        // Проверка, что каждый CatalogItem получает правильные пропсы
        wrapper.vm.sections.forEach((section, index) => {
            const itemWrapper = wrapper.findAllComponents(CatalogItem).at(index);
            expect(itemWrapper.props('index')).toBe(index);
            expect(itemWrapper.props('data')).toEqual(section);
        });
    });
});
