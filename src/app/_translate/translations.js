"use strict";
var core_1 = require('@angular/core');
// import translations
var lang_en_1 = require('./lang-en');
var lang_fr_1 = require('./lang-fr');
var lang_bn_1 = require('./lang-bn');
// translation token
exports.TRANSLATIONS = new core_1.OpaqueToken('translations');
// all translations
var dictionary = (_a = {},
    _a[lang_en_1.LANG_EN_NAME] = lang_en_1.LANG_EN_TRANS,
    _a[lang_fr_1.LANG_FR_NAME] = lang_fr_1.LANG_FR_TRANS,
    _a[lang_bn_1.LANG_BN_NAME] = lang_bn_1.LANG_BN_TRANS,
    _a
);
// providers
exports.TRANSLATION_PROVIDERS = [
    { provide: exports.TRANSLATIONS, useValue: dictionary },
];
var _a;
//# sourceMappingURL=translations.js.map