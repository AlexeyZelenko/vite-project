import { config } from '@vue/test-utils';

// Настройка глобальных компонентов, директив и других опций Vue Test Utils
config.global.mocks = {
    $t: (msg) => msg, // Мок для i18n
    // Добавьте другие моки, если необходимо
};
