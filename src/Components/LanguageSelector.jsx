import { useEffect } from "react";
import { useTranslation } from "react-i18next"

const languages = [
    {
        code: "en",
        lang: "English"
    },
    {
        code: "bn",
        lang: "বাংলা"
    },
    {
        code: "ar",
        lang: "عربي"
    },
]

export default function LanguageSelector() {
    const { i18n } = useTranslation();

    const changelanguage = lang => {
        i18n.changeLanguage(lang.code);
    }

    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n, i18n.language])

    return (
        <div >
            {
                languages.map(lng => {
                    return (
                        <button
                            className={`${lng.code === i18n.language ? "text-rose-200" : ""} px-[20px] py-[12px] rounded-lg mx-3 bg-black text-white hover:bg-[#0e0e0e] text-[18px] font-bold`}
                            key={lng.code}
                            onClick={() => changelanguage(lng)} >
                            {lng.lang}
                        </button>
                    )
                })

            }
        </div >
    )
}
