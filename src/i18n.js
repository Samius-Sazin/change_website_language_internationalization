import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

/*
const resources = {
    en: {
        translation: {
            greeting: "Assalamu Alaikum, (Peace be upon you)",
            description: {
                title: "Learning translate the language {{dynamic}}",
                description: "A long time ago I once went to Palamau province, and after my retreat, two friends repeatedly requested me to write an account of that region, and I used to laugh at them."
            }
        }
    },
    bn: {
        translation: {
            greeting: "আসসালামু আলাইকুম, ( আপনার উপর শান্তি বর্ষিত হোক )",
            description: {
                title: "ভাষা অনুবাদ করা শিখছি {{dynamic}}",
                description: "বহুকাল হইলো আমি একবার পালামৌ প্রদেশে গিয়াছিলাম, প্রত্যাগমন করিলে পর সেই অঞ্চলের বৃত্তান্ত লিখিবার নিমিত্ত দুই-এক জন বন্ধুবান্ধব আমাকে পুনঃপুন অনুরোধ করিতেন, আমি তখন তাঁহাদের উপহাস করিতাম।"
            }
        }
    },
    ar: {
        translation: {
            greeting: "السلام عليكم",
            description: {
                title: "{{dynamic}} تعلم ترجمة اللغات",
                description: "منذ زمن طويل، ذهبت ذات مرة إلى مقاطعة بالاماو، وبعد خلوتي، طلب مني صديقان مرارًا وتكرارًا أن أكتب تقريرًا عن تلك المنطقة، وكنت أضحك عليهما."
            }
        }
    }
}
*/

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    returnObjects: true,
    // resources
    // lng: "en",
    fallbackLng: "en", // if any translation value is misssing it shows eng by default

    interpolation: {
        escapeValue: false, // not needed for react!!
    },
})


export default i18n;